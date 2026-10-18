/**
 * Host half of the tide-whale pet.
 *
 * The pet itself is a Client overlay. Its sprite sheets live beside this file.
 * Two delivery paths are provided:
 *   1. The Host registers a read-only asset route for first loads before any
 *      absolute-path injection is present.
 *   2. The Host also publishes the absolute asset directory through
 *      `webserver/index-inject`, letting the Client use the authenticated
 *      `/api/file` route when available.
 *
 * The asset route is deliberately narrow: GET/HEAD, a path whitelist, and no
 * directory traversal.
 */
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ASSET_ROOT = fileURLToPath(new URL('./assets/', import.meta.url)).replace(/[\\/]+$/, '');
const ASSET_ROUTE = '/api/tide-whale-pet/assets';
const ASSET_PATH = /^[a-z0-9][a-z0-9/_-]*\.(?:webp|json)$/i;

export function apply(ctx) {
  ctx.on('webserver/index-inject', (table) => {
    if (!Array.isArray(table)) return;
    table.push({
      kind: 'global',
      name: '__DSH_TIDE_PET_ASSET_ROOT__',
      value: ASSET_ROOT,
    });
  });

  const webServer = ctx.get('webServer');
  if (webServer === undefined) return;

  try {
    ctx.effect(() => webServer.register({
      kind: 'prefix',
      path: ASSET_ROUTE,
      handler: async (req, res) => {
        if (req.method !== 'GET' && req.method !== 'HEAD') {
          res.writeHead(405, { Allow: 'GET, HEAD', 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('method not allowed');
          return;
        }

        let relative;
        try {
          const pathname = new URL(String(req.url), 'http://localhost').pathname;
          relative = decodeURIComponent(pathname.slice(ASSET_ROUTE.length)).replace(/^\/+/, '');
        } catch {
          res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('bad request');
          return;
        }

        if (!ASSET_PATH.test(relative)) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('not found');
          return;
        }

        const absolute = path.resolve(ASSET_ROOT, relative);
        if (absolute !== ASSET_ROOT && !absolute.startsWith(ASSET_ROOT + path.sep)) {
          res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('forbidden');
          return;
        }

        try {
          const body = await readFile(absolute);
          const type = relative.toLowerCase().endsWith('.json')
            ? 'application/json; charset=utf-8'
            : 'image/webp';
          res.writeHead(200, {
            'Content-Type': type,
            'Content-Length': body.byteLength,
            'Cache-Control': 'public, max-age=31536000, immutable',
            'X-Content-Type-Options': 'nosniff',
          });
          res.end(req.method === 'HEAD' ? undefined : body);
        } catch (error) {
          const code = error && error.code === 'ENOENT' ? 404 : 500;
          res.writeHead(code, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end(code === 404 ? 'not found' : 'asset read failed');
        }
      },
    }), 'tide-whale-pet: asset route');
  } catch (error) {
    ctx.logger?.warn?.('[tide-whale-pet] asset route unavailable', error);
  }
}
