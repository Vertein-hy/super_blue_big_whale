/**
 * Host half of the tide-whale pet.
 *
 * The pet itself is a Client overlay. Its sprite sheets live beside this file,
 * so the Host publishes the absolute asset directory into the page and the
 * Client addresses each sheet through the authenticated `/api/file` route.
 * Reload the page once after installing so this injection reaches the client.
 */
import { fileURLToPath } from 'node:url';

const ASSET_ROOT = fileURLToPath(new URL('./assets/', import.meta.url)).replace(/[\\/]+$/, '');

export function apply(ctx) {
  ctx.on('webserver/index-inject', (table) => {
    if (!Array.isArray(table)) return;
    table.push({
      kind: 'global',
      name: '__DSH_TIDE_PET_ASSET_ROOT__',
      value: ASSET_ROOT,
    });
  });
}
