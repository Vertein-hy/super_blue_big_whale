window.__ModuleLoader__.load({
  id: '@local/dsh-tide-whale-pet',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const NS = 'dsh-tide-whale-pet';
    const STORAGE_KEY = 'dsh-tide-whale-pet:v2';
    const SOURCE_FRAMES = 24;
    const SHEET_COLS = 8;
    const SHEET_ROWS = 12;
    const SHEET_CELL = 320;
    const ART_SIZE = 190;
    const PET_SIZE = ART_SIZE;
    const PET_W = 220;
    const STAGE_H = 220;
    const PANEL_W = 396;
    const PANEL_H = 480;
    const FALLBACK_ASSET_ROOT = '';
    const ASSET_VERSION = 'v7';

    // -----------------------------------------------------------------------
    // Provided artwork
    // -----------------------------------------------------------------------
    const ACTIONS = [
      { id: 'idle', frames: 96, fps: 15, loop: true, hold: 0, accent: '#76d7e7' },
      { id: 'walk', frames: 24, fps: 12, loop: true, hold: 0, accent: '#8db7ff' },
      { id: 'run', frames: 24, fps: 12, loop: true, hold: 0, accent: '#ffd17a' },
      { id: 'jump', frames: 96, fps: 20, loop: false, hold: 300, accent: '#ffd17a' },
      { id: 'wave', frames: 96, fps: 15, loop: false, hold: 360, accent: '#ffa9cc' },
      { id: 'sit', frames: 96, fps: 15, loop: true, hold: 0, accent: '#8be0c2' },
      { id: 'sleep', frames: 96, fps: 15, loop: true, hold: 0, accent: '#a5b5ff' },
      { id: 'dance', frames: 96, fps: 15, loop: true, hold: 0, accent: '#c7a8ff' },
      { id: 'surprise', frames: 96, fps: 20, loop: false, hold: 280, accent: '#ffa9cc' },
    ];
    const ACTION_BY_ID = Object.fromEntries(ACTIONS.map((action) => [action.id, action]));
    const AUTO_ACTIONS = ['wave', 'jump', 'surprise'];
    const SKINS = [
      { id: 'knit', accent: '#6a8fd6' },
      { id: 'cape', accent: '#9a774d' },
      { id: 'whale', accent: '#3455a2' },
    ];
    const SKIN_IDS = new Set(SKINS.map((skin) => skin.id));

    // -----------------------------------------------------------------------
    // Words
    // -----------------------------------------------------------------------
    const EN = {
      name: 'Xixi',
      fullName: 'Xixi · tide whale pet',
      tagline: 'A little blue whale companion for DeepSeek Harness',
      menuTitle: "Xixi's tide theater",
      menuKicker: 'ready-made art · RIFE · v2.6',
      menuSubtitle: '3 outfits · 27 animations · walk/run 24 source · others 96 RIFE',
      wardrobe: 'Tide wardrobe',
      actionsLabel: 'Actions',
      nowPlaying: 'Now playing',
      frameUnit: 'f',
      auto: 'Auto play',
      autoHint: 'A little performance when left alone',
      reset: 'Return to the corner',
      close: 'Close the tide theater',
      open: 'Open Xixi’s action panel',
      tapHint: 'Pat her head or drag her anywhere',
      loading: 'Calling the tide…',
      loadError: 'The sprite could not be loaded',
      retry: 'Retry',
      wakeUp: 'Yawn… that was a nice rice dream.',
      hello: 'The tide is here. Let’s look around!',
      skin_knit: 'White knit',
      skin_knit_hint: 'Cream knit, whale beret & plaid',
      skin_cape: 'Brown cape',
      skin_cape_hint: 'Brown-white cape & gold stars',
      skin_whale: 'Blue whale winter',
      skin_whale_hint: 'Whale hood, fleece trim & scarf',
      perAction: 'walk/run 24 source · others 96 RIFE',
      a_idle: 'Tilt & blink',
      a_walk: 'Small steps',
      a_run: 'Light run',
      a_jump: 'Happy hop',
      a_wave: 'Soft wave',
      a_sit: 'Sit & swing',
      a_sleep: 'Sleepy nod',
      a_dance: 'Happy sway',
      a_surprise: 'Surprised',
      d_idle: 'Breathe, tilt her head and blink; her tail follows',
      d_walk: 'Small in-place steps toward the right',
      d_run: 'A light bouncing jog, hair and skirt following',
      d_jump: 'Crouch, lift off, then land softly',
      d_wave: 'Raise a small hand to say hello',
      d_sit: 'Sit down and swing her feet and tail (loops)',
      d_sleep: 'Sit, close her eyes and nod off slowly (loops)',
      d_dance: 'Step and sway left and right (loops)',
      d_surprise: 'Eyes wide, hands to cheeks, a tiny startle',
      s_idle: 'Just drifting with the tide…',
      s_walk: 'I know the way to the kitchen by heart.',
      s_run: 'Dinner! Dinner!',
      s_jump: 'Splash!',
      s_wave: 'Hello there.',
      s_sit: 'Slacking off for five minutes. Just five.',
      s_sleep: 'Full tummy… five more minutes…',
      s_dance: 'Watch my whale wiggle!',
      s_surprise: 'Eek—you found me!',
    };

    const ZH = {
      name: '汐汐',
      fullName: '汐汐 · 潮汐小鲸娘',
      tagline: 'DeepSeek Harness 的蓝色鲸鱼桌宠',
      menuTitle: '汐汐的潮汐剧场',
      menuKicker: '现成素材 · RIFE · v2.6',
      menuSubtitle: '3 套装扮 · 27 段动画 · 走路/跑步 24 原画，其余 96 帧',
      wardrobe: '潮装衣橱',
      actionsLabel: '动作',
      nowPlaying: '正在播放',
      frameUnit: '帧',
      auto: '自动卖萌',
      autoHint: '一个人待着时，会偷偷表演',
      reset: '回到右下角',
      close: '收起潮汐剧场',
      open: '打开汐汐的动作面板',
      tapHint: '可以摸摸头，也可以拖到任何地方',
      loading: '正在召唤潮汐…',
      loadError: '桌宠素材加载失败',
      retry: '重试',
      wakeUp: '唔…刚刚梦到吃了一大碗饭。',
      hello: '潮汐把我送到这里啦，四处看看吧！',
      skin_knit: '白色针织装',
      skin_knit_hint: '奶油白针织 · 鲸鱼贝雷帽 · 格纹裙',
      skin_cape: '棕白披肩裙装',
      skin_cape_hint: '棕白披肩 · 金色星月 · 斗篷',
      skin_whale: '蓝色鲸鱼冬装',
      skin_whale_hint: '鲸鱼兜帽 · 白绒边 · 围巾',
      perAction: '走路/跑步 24 原画 · 其余 96 帧 RIFE',
      a_idle: '歪头眨眼',
      a_walk: '小碎步走路',
      a_run: '轻快小跑',
      a_jump: '开心小蹦',
      a_wave: '软萌挥手',
      a_sit: '坐着晃脚',
      a_sleep: '困困点头',
      a_dance: '开心摇摆',
      a_surprise: '惊讶捂脸',
      d_idle: '轻轻呼吸、歪头眨眼，鲸尾跟着摆动',
      d_walk: '朝画面右侧原地迈小步',
      d_run: '原地轻快小跑，发丝和裙摆跟着晃动',
      d_jump: '蹲低蓄力，双脚离地，再轻轻落回',
      d_wave: '抬起一只手问好，摆手后放下',
      d_sit: '坐着晃脚摆尾，悠闲一会儿（循环）',
      d_sleep: '坐着闭眼打瞌睡，慢慢点头（循环）',
      d_dance: '左右踏步摇摆，手臂和尾巴一起晃（循环）',
      d_surprise: '睁大眼睛、双手捂脸，吓了一跳',
      s_idle: '就这样跟着潮汐漂着…',
      s_walk: '去食堂的路，我闭着眼都认识。',
      s_run: '开饭啦——！',
      s_jump: '扑通！',
      s_wave: '你好呀。',
      s_sit: '摸鱼五分钟，就五分钟。',
      s_sleep: '吃饱了…再睡一小会儿…',
      s_dance: '看我的鲸鱼摇摆！',
      s_surprise: '诶？被、被发现了！',
    };

    // -----------------------------------------------------------------------
    // Styles
    // -----------------------------------------------------------------------
    const CSS = `
.dsh-tp-root, .dsh-tp-root * { box-sizing: border-box; }
.dsh-tp-root {
  position: fixed;
  width: ${PET_W}px;
  height: ${STAGE_H}px;
  pointer-events: none;
  z-index: 40;
  color: var(--dsw-alias-label-primary);
  font-family: inherit;
  -webkit-user-select: none;
  user-select: none;
}
.dsh-tp-aura {
  position: absolute;
  inset: 26px 0 0;
  border-radius: 50%;
  background:
    radial-gradient(ellipse at 50% 66%, rgba(103, 209, 228, .23), rgba(73, 119, 217, .08) 53%, transparent 72%),
    radial-gradient(ellipse at 52% 93%, rgba(141, 236, 220, .19), transparent 52%);
  filter: blur(6px);
  pointer-events: none;
}
.dsh-tp-stage {
  position: absolute;
  left: 15px;
  top: 30px;
  width: ${PET_SIZE}px;
  height: ${PET_SIZE}px;
  pointer-events: auto;
  cursor: grab;
  touch-action: none;
  outline: none;
  border-radius: 22px;
}
.dsh-tp-stage:active { cursor: grabbing; }
.dsh-tp-stage:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: -4px;
}
.dsh-tp-shadow {
  position: absolute;
  left: 50%;
  bottom: 4px;
  width: 96px;
  height: 13px;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(31, 55, 102, .19), rgba(31, 55, 102, .05) 55%, transparent 74%);
  filter: blur(3px);
  pointer-events: none;
  z-index: 0;
}
.dsh-tp-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  pointer-events: none;
  z-index: 1;
}
.dsh-tp-loader, .dsh-tp-loaderror {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 26px);
  max-width: 168px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 12px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-secondary);
  font-size: 9.5px;
  line-height: 1.35;
  text-align: center;
  box-shadow: 0 8px 26px rgba(20, 38, 86, .16);
  z-index: 4;
}
.dsh-tp-loader-bubble {
  width: 16px; height: 16px;
  border: 2px solid var(--dsw-alias-brand-primary);
  border-radius: 50%;
  border-top-color: transparent;
  animation: dsh-tp-spin .9s linear infinite;
}
.dsh-tp-loaderror strong {
  color: var(--dsw-alias-label-primary);
  font-size: 10.5px;
  font-weight: 650;
}
.dsh-tp-retry {
  min-height: 23px;
  padding: 0 10px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 7px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-brand-primary);
  font: inherit;
  font-size: 9.5px;
  cursor: pointer;
}
.dsh-tp-retry:hover { border-color: var(--dsw-alias-brand-primary); }
.dsh-tp-topbar {
  position: absolute;
  top: 0; left: 14px; right: 14px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  pointer-events: none;
  z-index: 5;
}
.dsh-tp-name {
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  min-height: 28px;
  padding: 3px 9px 3px 4px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 999px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 11px;
  font-weight: 650;
  line-height: 1;
  box-shadow: 0 4px 14px rgba(22, 42, 92, .10);
  cursor: pointer;
  transition: border-color .16s ease, transform .16s ease;
}
.dsh-tp-name:hover { border-color: var(--dsw-alias-brand-primary); transform: translateY(-1px); }
.dsh-tp-name-pic {
  width: 19px; height: 19px;
  border-radius: 50%;
  background-color: var(--dsw-alias-bg-layer-2);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex: 0 0 auto;
}
.dsh-tp-menu-btn {
  pointer-events: auto;
  width: 28px; height: 28px;
  padding: 0;
  display: grid; place-items: center;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 9px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-secondary);
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(22, 42, 92, .10);
  font-size: 14px;
  line-height: 1;
  letter-spacing: .08em;
  transition: color .16s ease, border-color .16s ease, transform .16s ease;
}
.dsh-tp-menu-btn:hover { color: var(--dsw-alias-brand-primary); border-color: var(--dsw-alias-brand-primary); transform: translateY(-1px); }
.dsh-tp-name:focus-visible, .dsh-tp-menu-btn:focus-visible, .dsh-tp-retry:focus-visible, .dsh-tp-action:focus-visible, .dsh-tp-skin:focus-visible, .dsh-tp-close:focus-visible, .dsh-tp-wide:focus-visible {
  outline: 2px solid var(--dsw-alias-brand-primary);
  outline-offset: 2px;
}
.dsh-tp-hint {
  display: none;
}
.dsh-tp-say {
  position: absolute;
  right: 8px;
  bottom: calc(100% + 2px);
  max-width: 300px;
  padding: 8px 12px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 15px 15px 4px 15px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  font-size: 11.5px;
  line-height: 1.45;
  box-shadow: 0 10px 30px rgba(18, 37, 86, .14);
  pointer-events: none;
  animation: dsh-tp-pop .22s cubic-bezier(.2,.9,.3,1.2);
  z-index: 6;
}
.dsh-tp-say::after {
  content: '';
  position: absolute;
  right: 16px; bottom: -6px;
  width: 10px; height: 10px;
  border-right: 1px solid var(--dsw-alias-border-l1);
  border-bottom: 1px solid var(--dsw-alias-border-l1);
  background: var(--dsw-alias-bg-overlay);
  transform: rotate(45deg);
}
.dsh-tp-say-name { color: var(--dsw-alias-brand-primary); font-weight: 700; margin-right: 5px; }
.dsh-tp-panel {
  position: fixed;
  width: min(${PANEL_W}px, calc(100vw - 24px));
  max-height: calc(100vh - 24px);
  overflow: auto;
  padding: 13px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 20px;
  background: var(--dsw-alias-bg-overlay);
  color: var(--dsw-alias-label-primary);
  box-shadow: 0 24px 70px rgba(17, 32, 81, .24), 0 2px 0 rgba(255,255,255,.2) inset;
  pointer-events: auto;
  z-index: 50;
  animation: dsh-tp-panel-in .2s cubic-bezier(.2,.85,.25,1.15);
  scrollbar-width: thin;
}
.dsh-tp-panel-head {
  display: flex;
  align-items: flex-start;
  gap: 9px;
  margin-bottom: 10px;
}
.dsh-tp-crest {
  flex: 0 0 auto;
  width: 34px; height: 34px;
  border-radius: 12px;
  background-color: var(--dsw-alias-bg-layer-2);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  box-shadow: 0 4px 12px rgba(44, 82, 170, .12);
}
.dsh-tp-heading { min-width: 0; flex: 1; }
.dsh-tp-kicker {
  margin: 0 0 1px;
  font-size: 9.5px;
  line-height: 1.3;
  letter-spacing: .07em;
  text-transform: uppercase;
  color: var(--dsw-alias-label-secondary);
}
.dsh-tp-title {
  margin: 0;
  font-size: 14.5px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: .01em;
}
.dsh-tp-subtitle {
  margin: 3px 0 0;
  font-size: 10.5px;
  line-height: 1.3;
  color: var(--dsw-alias-label-secondary);
}
.dsh-tp-close {
  flex: 0 0 auto;
  width: 24px; height: 24px;
  padding: 0;
  display: grid; place-items: center;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}
.dsh-tp-close:hover { background: var(--dsw-alias-bg-layer-2); color: var(--dsw-alias-label-primary); }
.dsh-tp-section { margin-top: 9px; }
.dsh-tp-section-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 5px;
}
.dsh-tp-section-label {
  font-size: 10px;
  font-weight: 650;
  letter-spacing: .02em;
  color: var(--dsw-alias-label-secondary);
}
.dsh-tp-progress {
  font-size: 9.5px;
  color: var(--dsw-alias-brand-primary);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  max-width: 245px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-tp-sheet-tip {
  font-size: 8.5px;
  line-height: 1.2;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
  font-variant-numeric: tabular-nums;
}
.dsh-tp-skins {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}
.dsh-tp-skin {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 11px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  text-align: left;
  font: inherit;
  cursor: pointer;
  transition: border-color .15s ease, background .15s ease, transform .15s ease;
}
.dsh-tp-skin:hover { border-color: var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-2); }
.dsh-tp-skin[data-selected="true"] {
  border-color: var(--dsw-alias-brand-primary);
  background: var(--dsw-alias-bg-layer-2);
  box-shadow: inset 0 0 0 1px var(--dsw-alias-brand-primary);
}
.dsh-tp-skin-pic {
  flex: 0 0 auto;
  width: 27px; height: 27px;
  border-radius: 8px;
  background-color: var(--dsw-alias-bg-layer-2);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.dsh-tp-skin-copy { min-width: 0; }
.dsh-tp-skin-name {
  display: block;
  font-size: 10px;
  line-height: 1.25;
  font-weight: 650;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-tp-skin-hint {
  display: block;
  margin-top: 1px;
  font-size: 8px;
  line-height: 1.25;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-tp-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 6px;
}
.dsh-tp-action {
  min-width: 0;
  min-height: 79px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2px;
  padding: 5px 3px 4px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 11px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: border-color .14s ease, background .14s ease, transform .14s ease;
}
.dsh-tp-action::before {
  content: '';
  position: absolute;
  inset: 0 0 auto 0;
  height: 2px;
  background: var(--tp-accent, var(--dsw-alias-brand-primary));
  opacity: .62;
}
.dsh-tp-action:hover {
  border-color: var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-2);
  transform: translateY(-1px);
}
.dsh-tp-action[data-active="true"] {
  border-color: var(--dsw-alias-brand-primary);
  background: var(--dsw-alias-bg-layer-2);
}
.dsh-tp-action-pic {
  width: 38px; height: 38px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  flex: 0 0 auto;
  pointer-events: none;
}
.dsh-tp-action-name {
  width: 100%;
  text-align: center;
  font-size: 9.5px;
  line-height: 1.2;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-tp-action-frames {
  font-size: 8px;
  line-height: 1.1;
  color: var(--dsw-alias-label-secondary);
  font-variant-numeric: tabular-nums;
}
.dsh-tp-footer {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 9px;
  padding-top: 9px;
  border-top: 1px solid var(--dsw-alias-border-l1);
}
.dsh-tp-auto {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: var(--dsw-alias-label-primary);
  font: inherit;
  padding: 2px 0;
  cursor: pointer;
  text-align: left;
}
.dsh-tp-switch {
  flex: 0 0 auto;
  width: 27px; height: 16px;
  padding: 2px;
  border-radius: 999px;
  background: var(--dsw-alias-state-idle-primary);
  transition: background .17s ease;
}
.dsh-tp-switch::after {
  content: '';
  display: block;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--dsw-alias-bg-overlay);
  box-shadow: 0 1px 2px rgba(0,0,0,.2);
  transition: transform .17s ease;
}
.dsh-tp-auto[aria-checked="true"] .dsh-tp-switch { background: var(--dsw-alias-brand-primary); }
.dsh-tp-auto[aria-checked="true"] .dsh-tp-switch::after { transform: translateX(11px); }
.dsh-tp-auto-copy { min-width: 0; }
.dsh-tp-auto-name { display: block; font-size: 10px; line-height: 1.25; font-weight: 600; }
.dsh-tp-auto-hint {
  display: block;
  font-size: 8.5px;
  line-height: 1.25;
  color: var(--dsw-alias-label-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.dsh-tp-wide {
  flex: 0 0 auto;
  height: 27px;
  padding: 0 9px;
  border: 1px solid var(--dsw-alias-border-l1);
  border-radius: 8px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 9.5px;
  cursor: pointer;
  white-space: nowrap;
}
.dsh-tp-wide:hover { color: var(--dsw-alias-label-primary); border-color: var(--dsw-alias-border-l2); }
@keyframes dsh-tp-pop {
  from { opacity: 0; transform: translateY(4px) scale(.97); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes dsh-tp-panel-in {
  from { opacity: 0; transform: translateY(5px) scale(.985); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes dsh-tp-spin {
  to { transform: rotate(360deg); }
}
@media (prefers-reduced-motion: reduce) {
  .dsh-tp-say, .dsh-tp-panel, .dsh-tp-loader-bubble { animation: none; }
  .dsh-tp-name, .dsh-tp-menu-btn, .dsh-tp-action { transition: none; }
}
@media (max-width: 560px) {
  .dsh-tp-skins { grid-template-columns: 1fr 1fr; }
  .dsh-tp-panel { padding: 11px; border-radius: 16px; }
}
`;

    // -----------------------------------------------------------------------
    // Assets and animation
    // -----------------------------------------------------------------------
    function assetRoot() {
      if (typeof window !== 'undefined' && typeof window.__DSH_TIDE_PET_ASSET_ROOT__ === 'string' && window.__DSH_TIDE_PET_ASSET_ROOT__) {
        return window.__DSH_TIDE_PET_ASSET_ROOT__.replace(/\/+$/, '');
      }
      return FALLBACK_ASSET_ROOT;
    }

    function fileUrl(absPath) {
      return new URL(`api/file?path=${encodeURIComponent(absPath)}&v=${ASSET_VERSION}`, document.baseURI).href;
    }

    function spriteUrl(skin, action) {
      return fileUrl(`${assetRoot()}/${skin}/${action}.webp`);
    }

    function thumbUrl(skin, action) {
      return fileUrl(`${assetRoot()}/thumbs/${skin}/${action}.webp`);
    }

    function portraitUrl(skin) {
      return fileUrl(`${assetRoot()}/portraits/${skin}.webp`);
    }

    const IMAGE_CACHE = new Map();
    const RESOLVED_SHEETS = new Map();
    const MAX_CACHED_SHEETS = 2;
    let PINNED_SHEET_URL = null;

    function loadSheet(url, pin = false) {
      if (pin) PINNED_SHEET_URL = url;
      const resolved = RESOLVED_SHEETS.get(url);
      if (resolved) return Promise.resolve(resolved);
      const cached = IMAGE_CACHE.get(url);
      if (cached !== undefined) return cached;
      const promise = new Promise((resolve, reject) => {
        const image = new Image();
        image.decoding = 'async';
        image.onload = () => {
          RESOLVED_SHEETS.set(url, image);
          resolve(image);
        };
        image.onerror = () => reject(new Error(`sprite load failed: ${url}`));
        image.src = url;
      }).catch((error) => {
        IMAGE_CACHE.delete(url);
        RESOLVED_SHEETS.delete(url);
        throw error;
      });
      IMAGE_CACHE.set(url, promise);
      // 96-frame sheets decode to tens of MB; keep only the two most recent
      // action sheets, but pin the idle sheet so returning from a one-shot
      // never has to reload (and therefore never flashes/blank-frames).
      for (const key of IMAGE_CACHE.keys()) {
        if (IMAGE_CACHE.size <= MAX_CACHED_SHEETS) break;
        if (key !== url && key !== PINNED_SHEET_URL) {
          IMAGE_CACHE.delete(key);
          RESOLVED_SHEETS.delete(key);
        }
      }
      return promise;
    }

    function clamp(value, lo, hi) {
      return Math.max(lo, Math.min(hi, value));
    }

    function readViewport() {
      if (typeof window === 'undefined') return { w: 1280, h: 800 };
      return { w: Math.max(320, window.innerWidth), h: Math.max(360, window.innerHeight) };
    }

    function cornerPosition(viewport) {
      return {
        x: Math.max(12, viewport.w - PET_W - 24),
        y: Math.max(12, viewport.h - STAGE_H - 16),
      };
    }

    function clampPosition(position, viewport) {
      return {
        x: clamp(Math.round(position.x), 10, Math.max(10, viewport.w - PET_W - 10)),
        y: clamp(Math.round(position.y), 8, Math.max(8, viewport.h - STAGE_H - 8)),
      };
    }

    function readPrefs() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
      } catch {
        return {};
      }
    }

    function useLocaleRevision(locale) {
      const [, force] = React.useState(0);
      React.useEffect(() => {
        if (!locale || typeof locale.subscribe !== 'function') return undefined;
        return locale.subscribe(() => force((value) => value + 1));
      }, [locale]);
    }

    class PetBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { failed: false };
      }

      static getDerivedStateFromError() {
        return { failed: true };
      }

      componentDidCatch(error, info) {
        console.error('[tide-whale-pet] render failed', error, info);
      }

      render() {
        return this.state.failed ? null : this.props.children;
      }
    }

    function SpriteCanvas({ image, frame }) {
      const canvasRef = React.useRef(null);

      React.useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !image) return;
        const context = canvas.getContext('2d');
        if (!context) return;
        const width = ART_SIZE * 2;
        const height = ART_SIZE * 2;
        if (canvas.width !== width) canvas.width = width;
        if (canvas.height !== height) canvas.height = height;
        const columns = SHEET_COLS;
        const sourceX = (frame % columns) * SHEET_CELL;
        const sourceY = Math.floor(frame / columns) * SHEET_CELL;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, width, height);
        context.imageSmoothingEnabled = true;
        context.imageSmoothingQuality = 'high';
        context.drawImage(
          image,
          sourceX, sourceY, SHEET_CELL, SHEET_CELL,
          0, 0, width, height,
        );
      }, [image, frame]);

      return h('canvas', {
        ref: canvasRef,
        className: 'dsh-tp-canvas',
        width: ART_SIZE * 2,
        height: ART_SIZE * 2,
        'aria-hidden': 'true',
        'data-frame': frame,
      });
    }

    // -----------------------------------------------------------------------
    // Pet
    // -----------------------------------------------------------------------
    function TidePet({ t, locale }) {
      useLocaleRevision(locale);
      const prefsRef = React.useRef(null);
      if (prefsRef.current === null) prefsRef.current = readPrefs();
      const prefs = prefsRef.current;
      const [viewport, setViewport] = React.useState(readViewport);
      const [pos, setPos] = React.useState(() => {
        const next = prefs.pos && Number.isFinite(prefs.pos.x) && Number.isFinite(prefs.pos.y)
          ? prefs.pos
          : cornerPosition(readViewport());
        return clampPosition(next, readViewport());
      });
      const [skin, setSkin] = React.useState(prefs.skin === 'cape' || prefs.skin === 'whale' ? prefs.skin : 'knit');
      const [auto, setAuto] = React.useState(prefs.auto !== false);
      const [menuOpen, setMenuOpen] = React.useState(false);
      const [actionId, setActionId] = React.useState('idle');
      const [frame, setFrame] = React.useState(0);
      const [actionNonce, setActionNonce] = React.useState(0);
      const [retryNonce, setRetryNonce] = React.useState(0);
      const [asset, setAsset] = React.useState({ key: null, image: null, error: null });
      const [say, setSay] = React.useState({ key: 'hello', stamp: 0 });
      const [dragging, setDragging] = React.useState(false);
      const sayStamp = React.useRef(0);
      const dragRef = React.useRef(null);
      const menuButtonRef = React.useRef(null);

      const spec = ACTION_BY_ID[actionId] || ACTION_BY_ID.idle;
      const activeLocale = locale && typeof locale.getLocale === 'function' ? locale.getLocale().active : undefined;
      const assetKey = `${skin}/${actionId}`;
      const image = asset.key === assetKey
        ? asset.image
        : (RESOLVED_SHEETS.get(spriteUrl(skin, actionId)) || null);
      const loadError = asset.key === assetKey ? asset.error : null;

      const startAction = React.useCallback((nextId, options = {}) => {
        const safeId = ACTION_BY_ID[nextId] ? nextId : 'idle';
        setActionId(safeId);
        setFrame(0);
        setActionNonce((value) => value + 1);
        setMenuOpen(false);
        if (options.sayKey || safeId !== 'idle') {
          sayStamp.current += 1;
          setSay({ key: options.sayKey || `s_${safeId}`, stamp: sayStamp.current });
        }
      }, []);

      React.useEffect(() => {
        let cancelled = false;
        const url = spriteUrl(skin, actionId);
        const resolved = RESOLVED_SHEETS.get(url);
        setAsset({ key: assetKey, image: resolved || null, error: null });
        loadSheet(url, actionId === 'idle').then((image) => {
          if (!cancelled) setAsset({ key: assetKey, image, error: null });
        }).catch((error) => {
          if (!cancelled) setAsset({ key: assetKey, image: null, error });
        });
        return () => { cancelled = true; };
      }, [skin, actionId, retryNonce, assetKey]);

      React.useEffect(() => {
        if (!image) return undefined;
        let cancelled = false;
        let lastFrame = -1;
        let raf = 0;
        let endTimer = 0;
        const frameMs = 1000 / spec.fps;
        const startedAt = performance.now();
        setFrame(0);
        const tick = (now) => {
          if (cancelled) return;
          const step = Math.floor((now - startedAt) / frameMs);
          if (spec.loop) {
            const next = step % spec.frames;
            if (next !== lastFrame) {
              lastFrame = next;
              setFrame(next);
            }
            raf = window.requestAnimationFrame(tick);
            return;
          }
          if (step >= spec.frames) {
            if (lastFrame !== spec.frames - 1) {
              lastFrame = spec.frames - 1;
              setFrame(lastFrame);
            }
            endTimer = window.setTimeout(() => {
              if (!cancelled) setActionId('idle');
            }, spec.hold);
            return;
          }
          if (step !== lastFrame) {
            lastFrame = step;
            setFrame(step);
          }
          raf = window.requestAnimationFrame(tick);
        };
        raf = window.requestAnimationFrame(tick);
        return () => {
          cancelled = true;
          window.cancelAnimationFrame(raf);
          window.clearTimeout(endTimer);
        };
      }, [image, actionId, actionNonce, skin, spec]);

      React.useEffect(() => {
        if (!say) return undefined;
        const timer = window.setTimeout(() => setSay(null), 3800);
        return () => window.clearTimeout(timer);
      }, [say]);

      React.useEffect(() => {
        const onResize = () => {
          const nextViewport = readViewport();
          setViewport(nextViewport);
          setPos((value) => clampPosition(value, nextViewport));
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
      }, []);

      React.useEffect(() => {
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
            pos: { x: pos.x, y: pos.y },
            skin,
            auto,
          }));
        } catch {
          // Storage can be unavailable in hardened documents.
        }
      }, [pos.x, pos.y, skin, auto]);

      React.useEffect(() => {
        if (!auto || menuOpen || dragging || actionId !== 'idle') return undefined;
        const timer = window.setTimeout(() => {
          const next = AUTO_ACTIONS[Math.floor(Math.random() * AUTO_ACTIONS.length)];
          startAction(next);
        }, 18000 + Math.random() * 7000);
        return () => window.clearTimeout(timer);
      }, [auto, menuOpen, dragging, actionId, startAction]);

      React.useEffect(() => {
        if (!menuOpen) return undefined;
        const onKeyDown = (event) => {
          if (event.key === 'Escape') {
            setMenuOpen(false);
            window.requestAnimationFrame(() => {
              if (menuButtonRef.current) menuButtonRef.current.focus();
            });
          }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
      }, [menuOpen]);

      const wakeOrPlay = (yFrac) => {
        if (actionId === 'sleep') {
          startAction('idle', { sayKey: 'wakeUp' });
          return;
        }
        startAction(yFrac < 0.6 ? 'surprise' : 'wave');
      };

      const endDrag = (event, allowTap) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;
        dragRef.current = null;
        setDragging(false);
        try {
          event.currentTarget.releasePointerCapture(event.pointerId);
        } catch {
          // Pointer may already be gone.
        }
        if (allowTap && !drag.moved) {
          const rect = event.currentTarget.getBoundingClientRect();
          wakeOrPlay((event.clientY - rect.top) / Math.max(1, rect.height));
        }
      };

      const onStagePointerDown = (event) => {
        if (event.button !== undefined && event.button !== 0) return;
        if (event.isPrimary === false) return;
        event.stopPropagation();
        setMenuOpen(false);
        dragRef.current = {
          pointerId: event.pointerId,
          startX: event.clientX,
          startY: event.clientY,
          baseX: pos.x,
          baseY: pos.y,
          moved: false,
        };
        try {
          event.currentTarget.setPointerCapture(event.pointerId);
        } catch {
          // Dragging still works without capture.
        }
        event.preventDefault();
      };

      const onStagePointerMove = (event) => {
        const drag = dragRef.current;
        if (!drag || drag.pointerId !== event.pointerId) return;
        const dx = event.clientX - drag.startX;
        const dy = event.clientY - drag.startY;
        if (!drag.moved && Math.hypot(dx, dy) > 4) {
          drag.moved = true;
          setDragging(true);
        }
        if (drag.moved) {
          setPos(clampPosition({ x: drag.baseX + dx, y: drag.baseY + dy }, viewport));
          event.preventDefault();
        }
      };

      const onStagePointerUp = (event) => endDrag(event, true);
      const onStagePointerCancel = (event) => endDrag(event, false);

      const onStageKeyDown = (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        wakeOrPlay(0.8);
      };

      const toggleMenu = () => setMenuOpen((value) => !value);
      const defaultCorner = () => {
        setPos(clampPosition(cornerPosition(viewport), viewport));
        setMenuOpen(false);
      };

      const panelW = Math.min(PANEL_W, Math.max(260, viewport.w - 24));
      const sideLeft = pos.x >= panelW + 28;
      const panelLeft = clamp(
        sideLeft ? pos.x - panelW - 12 : pos.x + PET_W + 12,
        12,
        Math.max(12, viewport.w - panelW - 12),
      );
      const panelTop = clamp(
        pos.y + STAGE_H - PANEL_H,
        12,
        Math.max(12, viewport.h - PANEL_H - 12),
      );
      const sayText = say ? t(say.key) : '';
      const currentLabel = t(`a_${actionId}`);
      const nameThumb = portraitUrl(skin);
      const idleThumb = thumbUrl(skin, 'idle');

      return h(React.Fragment, null,
        h('style', { 'data-dsh-tide-whale-pet': 'styles' }, CSS),
        h('div', {
          className: 'dsh-tp-root',
          style: { left: `${pos.x}px`, top: `${pos.y}px` },
          'data-skin': skin,
          'data-action': actionId,
          'data-frame': frame,
          'data-frames': spec.frames,
          'data-source-frames': SOURCE_FRAMES,
          'data-total-source-frames': '648',
          'data-total-display-frames': '2160',
          'data-rife': 'true',
          lang: activeLocale,
        },
        h('div', { className: 'dsh-tp-aura', 'aria-hidden': 'true' }),
        h('div', {
          className: 'dsh-tp-stage',
          role: 'button',
          tabIndex: 0,
          'aria-label': `${t('name')} · ${currentLabel} · ${t('tagline')}`,
          title: t('tapHint'),
          onPointerDown: onStagePointerDown,
          onPointerMove: onStagePointerMove,
          onPointerUp: onStagePointerUp,
          onPointerCancel: onStagePointerCancel,
          onKeyDown: onStageKeyDown,
        },
        h('div', { className: 'dsh-tp-shadow', 'aria-hidden': 'true' }),
        image
          ? h(SpriteCanvas, { image, frame })
          : loadError
            ? h('div', { className: 'dsh-tp-loaderror' },
              h('strong', null, t('loadError')),
              h('button', {
                className: 'dsh-tp-retry',
                type: 'button',
                onPointerDown: (event) => event.stopPropagation(),
                onClick: () => setRetryNonce((value) => value + 1),
              }, t('retry')))
            : h('div', { className: 'dsh-tp-loader', role: 'status' },
              h('span', { className: 'dsh-tp-loader-bubble', 'aria-hidden': 'true' }),
              h('span', null, t('loading')))),
        h('div', { className: 'dsh-tp-topbar' },
          h('button', {
            className: 'dsh-tp-name',
            type: 'button',
            title: t('open'),
            'aria-expanded': menuOpen,
            'aria-haspopup': 'dialog',
            onClick: toggleMenu,
          },
          h('span', {
            className: 'dsh-tp-name-pic',
            style: { backgroundImage: `url("${nameThumb}")` },
            'aria-hidden': 'true',
          }),
          h('span', null, t('name'))),
          h('button', {
            ref: menuButtonRef,
            className: 'dsh-tp-menu-btn',
            type: 'button',
            title: t('open'),
            'aria-label': t('open'),
            'aria-expanded': menuOpen,
            'aria-haspopup': 'dialog',
            onClick: toggleMenu,
          }, h('span', { 'aria-hidden': 'true' }, '•••'))),
        say
          ? h('div', { className: 'dsh-tp-say', role: 'status', 'aria-live': 'polite' },
            h('span', { className: 'dsh-tp-say-name' }, t('name')),
            sayText)
          : null),

        menuOpen
          ? h('div', {
            className: 'dsh-tp-panel',
            role: 'dialog',
            'aria-modal': 'false',
            'aria-label': t('menuTitle'),
            style: { left: `${panelLeft}px`, top: `${panelTop}px` },
            lang: activeLocale,
          },
          h('div', { className: 'dsh-tp-panel-head' },
            h('div', {
              className: 'dsh-tp-crest',
              style: { backgroundImage: `url("${nameThumb}")` },
              'aria-hidden': 'true',
            }),
            h('div', { className: 'dsh-tp-heading' },
              h('p', { className: 'dsh-tp-kicker' }, t('menuKicker')),
              h('h2', { className: 'dsh-tp-title' }, t('menuTitle')),
              h('p', { className: 'dsh-tp-subtitle' }, t('menuSubtitle'))),
            h('button', {
              className: 'dsh-tp-close',
              type: 'button',
              title: t('close'),
              'aria-label': t('close'),
              onClick: () => {
                setMenuOpen(false);
                window.requestAnimationFrame(() => {
                  if (menuButtonRef.current) menuButtonRef.current.focus();
                });
              },
            }, '×')),
          h('div', { className: 'dsh-tp-section' },
            h('div', { className: 'dsh-tp-section-line' },
              h('div', { className: 'dsh-tp-section-label' }, t('wardrobe')),
              h('div', { className: 'dsh-tp-sheet-tip', 'aria-hidden': 'true' }, t('perAction'))),
            h('div', { className: 'dsh-tp-skins' },
              SKINS.map((item) => h('button', {
                key: item.id,
                type: 'button',
                className: 'dsh-tp-skin',
                'data-selected': skin === item.id,
                'aria-pressed': skin === item.id,
                title: t(`skin_${item.id}_hint`),
                onClick: () => setSkin(item.id),
              },
              h('span', {
                className: 'dsh-tp-skin-pic',
                style: { backgroundImage: `url("${portraitUrl(item.id)}")` },
                'aria-hidden': 'true',
              }),
              h('span', { className: 'dsh-tp-skin-copy' },
                h('span', { className: 'dsh-tp-skin-name' }, t(`skin_${item.id}`)),
                h('span', { className: 'dsh-tp-skin-hint' }, t(`skin_${item.id}_hint`))))))),
          h('div', { className: 'dsh-tp-section' },
            h('div', { className: 'dsh-tp-section-line' },
              h('div', { className: 'dsh-tp-section-label' }, t('actionsLabel')),
              h('div', { className: 'dsh-tp-progress', 'aria-hidden': 'true' },
                `${t('nowPlaying')} · ${currentLabel} ${frame + 1}/${spec.frames}${t('frameUnit')}`)),
            h('div', { className: 'dsh-tp-grid' },
              ACTIONS.map((action) => h('button', {
                key: action.id,
                type: 'button',
                className: 'dsh-tp-action',
                style: { '--tp-accent': action.accent },
                'data-active': action.id === actionId,
                'aria-pressed': action.id === actionId,
                title: `${t(`a_${action.id}`)} · ${t(`d_${action.id}`)}`,
                onClick: () => startAction(action.id),
              },
              h('span', {
                className: 'dsh-tp-action-pic',
                style: { backgroundImage: `url("${thumbUrl(skin, action.id)}")` },
                'aria-hidden': 'true',
              }),
              h('span', { className: 'dsh-tp-action-name' }, t(`a_${action.id}`)),
              h('span', { className: 'dsh-tp-action-frames' }, `${action.frames}${t('frameUnit')}`))))),
          h('div', { className: 'dsh-tp-footer' },
            h('button', {
              className: 'dsh-tp-auto',
              type: 'button',
              role: 'switch',
              'aria-checked': auto,
              onClick: () => setAuto((value) => !value),
              title: t('autoHint'),
            },
            h('span', { className: 'dsh-tp-switch', 'aria-hidden': 'true' }),
            h('span', { className: 'dsh-tp-auto-copy' },
              h('span', { className: 'dsh-tp-auto-name' }, t('auto')),
              h('span', { className: 'dsh-tp-auto-hint' }, t('autoHint')))),
            h('button', {
              className: 'dsh-tp-wide',
              type: 'button',
              onClick: defaultCorner,
            }, t('reset'))))
          : null);
    }

    return {
      inject: ['slots', 'locale'],
      apply(ctx) {
        try {
          ctx.effect(
            () => ctx.locale.register(NS, { zh: ZH, en: EN }),
            'tide-whale-pet: dictionaries',
          );
          const t = ctx.locale.bind(NS);
          const component = (props) => h(
            PetBoundary,
            null,
            h(TidePet, { ...props, t, locale: ctx.locale }),
          );
          ctx.slots.inject('shell.overlay', () => ctx.slots.register({
            name: 'shell.overlay',
            id: 'tide-whale-pet',
            order: 35,
          }, component));
        } catch (error) {
          console.error('[tide-whale-pet] activation failed', error);
        }
      },
    };
  },
});
