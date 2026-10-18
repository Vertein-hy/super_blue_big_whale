# Super Blue Big Whale · 汐汐

<p align="center">
  <img src="assets/portraits/knit.webp" width="150" alt="Knit outfit portrait" />
  <img src="assets/portraits/cape.webp" width="150" alt="Cape outfit portrait" />
  <img src="assets/portraits/whale.webp" width="150" alt="Whale outfit portrait" />
</p>

A tiny blue-whale desktop companion plugin for [DeepSeek Harness](https://github.com/deepseek-ai). It floats above the Harness shell, can be dragged anywhere, speaks Chinese/English, and plays nine hand-picked animations across three outfits.

The character artwork comes from the provided **648-frame sprite pack** (`3 outfits × 9 actions × 24 source frames`). No hand-drawn replacement character is shipped.

## Features

- **3 outfits**: knit, cape, whale.
- **9 actions**: idle, walk, run, jump, wave, sit, sleep, dance, surprise.
- **190 px pet** with a compact top bar and an action/wardrobe panel.
- Drag-and-drop, click reactions, auto-idle behavior, per-skin portraits and thumbnails.
- **Loop seams optimized** by rotating each loop to its smoothest end-to-start pair.
- **Root locked** to a fixed anchor so the character does not wander across the desktop; jump keeps its vertical movement.
- **Only idle uses RIFE 4.9** to expand its 24 source frames to 96; all gesture actions (walk, run, jump, wave, sit, sleep, dance, surprise) use the original 24 frames. This avoids the duplicated hands/legs RIFE produces when limbs cross or occlude the body.
- Idle sheet is pinned in the client cache; returning from a one-shot does not flash a loading card.
- Assets are served either through Harness's authenticated `/api/file` route (when the Host's asset-root injection is present) or through the plugin's own read-only `/api/tide-whale-pet/assets/...` route on first load.
- The Host route is whitelisted to static `.webp`/`.json` files under `assets/`; it is not a general file server. No build step.

## Install

1. Clone this repository somewhere stable:
   ```bash
   git clone https://github.com/Vertein-hy/super_blue_big_whale.git
   ```
2. In DeepSeek Harness's plugin manager, install the cloned folder as a local bundle. The bundle package is `@local/dsh-tide-whale-pet`; its package manifest and `cordis.patch.yml` are included.
3. A page reload is recommended. The Host registers a small read-only asset route at `/api/tide-whale-pet/assets/...` for first loads; after a reload the Client can also use the authenticated `/api/file` route via the injected absolute asset directory.
4. If the pet shows an asset-load error, click **重试** once (the route is registered as soon as the Host half applies), or reload again.

There is no npm publish and no compile step. The client is a plain Harness client bundle.

## Controls

| Interaction | Result |
| --- | --- |
| Drag the character | Move the pet; position is persisted |
| Click the head | Surprise |
| Click the body | Wave |
| Click while sleeping | Wake up |
| Click **汐汐** or `•••` | Open wardrobe / action panel |
| Auto toggle | Random wave/jump/surprise while idle |
| Reset button | Return to the bottom-right corner |

Preferences (position, outfit, auto-play) are stored in `localStorage` under `dsh-tide-whale-pet:v2`.

## Animation timing

| Action | Source frames | Playback frames | Mode | FPS | Duration |
| --- | ---: | ---: | --- | ---: | ---: |
| idle | 24 | 96 | loop | 15 | 6.4 s |
| walk | 24 | 24 | loop | 12 | 2.0 s |
| run | 24 | 24 | loop | 12 | 2.0 s |
| jump | 24 | 24 | once | 12 | 2.0 s |
| wave | 24 | 24 | once | 12 | 2.0 s |
| sit | 24 | 24 | loop | 12 | 2.0 s |
| sleep | 24 | 24 | loop | 12 | 2.0 s |
| dance | 24 | 24 | loop | 12 | 2.0 s |
| surprise | 24 | 24 | once | 12 | 2.0 s |

Only idle is interpolated. The eight gesture actions deliberately stay at 24 frames because RIFE duplicates or warps hands and legs when a limb crosses the body (the clearest case is the cover-face surprise action). Crisp original limbs are preferable to a higher frame count with extra hands.

### Root calibration

For every action, the first and last frames are used to establish a fixed target. Frames are shifted to that target instead of being calibrated relative to the previous frame, so offsets cannot accumulate. Walk/run lock horizontal position and keep a small vertical gait bob; jump locks horizontal position and keeps only up/down movement; the other 24-frame actions are locked on both axes.

## Project layout

```
.
├── assets/
│   ├── {knit,cape,whale}/{action}.webp   # 8×12 or 8×3 sprite sheets
│   ├── portraits/                        # 256×256 portraits
│   ├── thumbs/                           # action-menu thumbnails
│   └── rife-manifest.json                # frame counts, loop seams, offsets
├── client.js                             # client overlay, canvas player, panel
├── index.js                              # host half, asset route + injection
├── cordis.patch.yml                      # bundle entry
├── locale/{zh,en}.json                   # localization metadata
├── icon.png
├── package.json
├── README.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

The client canvas reads one 320×320 cell at a time from the 8-column sheets. The idle sheet with 96 frames is 2560×3840; the 24-frame action sheets are 2560×960. Both stay below common 4096-pixel texture limits.

## Artwork and RIFE

The sprite artwork is the supplied 648-frame pack, not a redraw. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the artwork/attribution caveat.

The idle 96-frame variant was generated offline with the **RIFE 4.9** ONNX model; the model itself is not distributed in this repository. All gesture actions use the original pack frames. Only the resulting sprite sheets are bundled.

## Development

- `client.js` is a plain `window.__ModuleLoader__` client bundle; it registers itself in `shell.overlay`.
- `index.js` listens to `webserver/index-inject` and publishes `__DSH_TIDE_PET_ASSET_ROOT__`.
- `index.js` also registers a read-only prefix route `/api/tide-whale-pet/assets` that safely serves WebP/JSON files from `assets/`. It only allows GET/HEAD, a fixed path pattern, and no directory traversal.
- `client.js` uses the injected absolute root with `/api/file` when available; otherwise it falls back to the read-only asset route. If both fail, it shows an asset-load error with a retry button instead of silently using a developer path.
- Assets are loaded with the authenticated `/api/file?path=...` route, which also works inside `dsh-app://app/`; the direct route is used for first loads.

## License

The source code in this repository is released under the **MIT License**; see [LICENSE](LICENSE).

The bundled character artwork and derived animation frames are **not** covered by the MIT license. They originate from the third-party 648-frame sprite pack supplied for this project; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Credits

- DeepSeek Harness for the plugin/client slots and authenticated file route.
- [FuryTMP/RIFE_fp32](https://huggingface.co/FuryTMP/RIFE_fp32) for the RIFE ONNX weights used to generate intermediate frames (MIT).
- The creators of the original whale-girl sprite pack.
