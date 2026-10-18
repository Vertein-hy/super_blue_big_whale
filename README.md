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
- **Walk / run use the original 24 frames**, not RIFE, so the legs keep crisp stepping instead of being warped by interpolation.
- The other actions use RIFE 4.9 to expand 24 source frames to **96 frames**, with a 15fps or 20fps presentation.
- Idle sheet is pinned in the client cache; returning from a one-shot does not flash a loading card.
- Assets are served through Harness's authenticated `/api/file` route. No build step.

## Install

1. Clone this repository somewhere stable:
   ```bash
   git clone https://github.com/Vertein-hy/super_blue_big_whale.git
   ```
2. In DeepSeek Harness's plugin manager, install the cloned folder as a local bundle. The bundle package is `@local/dsh-tide-whale-pet`; its package manifest and `cordis.patch.yml` are included.
3. **Reload the page once** after installation. The Host half injects the absolute asset directory into the page on reload; this is required for the sprite sheets to load.
4. If the pet shows an asset-load error, confirm that `assets/` exists and reload once more.

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
| jump | 24 | 96 | once | 20 | 4.8 s |
| wave | 24 | 96 | once | 15 | 6.4 s |
| sit | 24 | 96 | loop | 15 | 6.4 s |
| sleep | 24 | 96 | loop | 15 | 6.4 s |
| dance | 24 | 96 | loop | 15 | 6.4 s |
| surprise | 24 | 96 | once | 20 | 4.8 s |

Walk and run intentionally stay at 24 frames: RIFE interpolates legs poorly at this art style, and the crisp original gait is preferable to a blurry one. The rest of the actions have four times as many frames.

### Root calibration

For every action, the first and last frames are used to establish a fixed target. Frames are shifted to that target instead of being calibrated relative to the previous frame, so offsets cannot accumulate. Walk/run lock horizontal position and keep a small vertical gait bob; jump locks horizontal position and keeps only up/down movement.

## Project layout

```
.
├── assets/
│   ├── {knit,cape,whale}/{action}.webp   # 8×12 or 8×3 sprite sheets
│   ├── portraits/                        # 256×256 portraits
│   ├── thumbs/                           # action-menu thumbnails
│   └── rife-manifest.json                # frame counts, loop seams, offsets
├── client.js                             # client overlay, canvas player, panel
├── index.js                              # host half, asset-root injection
├── cordis.patch.yml                      # bundle entry
├── locale/{zh,en}.json                   # localization metadata
├── icon.png
├── package.json
├── README.md
├── LICENSE
└── THIRD_PARTY_NOTICES.md
```

The client canvas reads one 320×320 cell at a time from the 8-column sheets. Sheets with 96 frames are 2560×3840; walk/run sheets with 24 frames are 2560×960. Both stay below common 4096-pixel texture limits.

## Artwork and RIFE

The sprite artwork is the supplied 648-frame pack, not a redraw. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the artwork/attribution caveat.

The 96-frame variants were generated offline with the **RIFE 4.9** ONNX model; the model itself is not distributed in this repository. Only the resulting sprite sheets are bundled.

## Development

- `client.js` is a plain `window.__ModuleLoader__` client bundle; it registers itself in `shell.overlay`.
- `index.js` listens to `webserver/index-inject` and publishes `__DSH_TIDE_PET_ASSET_ROOT__`.
- `client.js` has no hard-coded local asset path. If the Host injection is absent, the client shows an asset-load error with a retry button rather than silently using a developer path.
- Assets are loaded with the authenticated `/api/file?path=...` route, which also works inside `dsh-app://app/`.

## License

The source code in this repository is released under the **MIT License**; see [LICENSE](LICENSE).

The bundled character artwork and derived animation frames are **not** covered by the MIT license. They originate from the third-party 648-frame sprite pack supplied for this project; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

## Credits

- DeepSeek Harness for the plugin/client slots and authenticated file route.
- [FuryTMP/RIFE_fp32](https://huggingface.co/FuryTMP/RIFE_fp32) for the RIFE ONNX weights used to generate intermediate frames (MIT).
- The creators of the original whale-girl sprite pack.
