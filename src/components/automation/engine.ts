import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// The landing's "how it works" as a recruiting machine, read left to right
// and downhill. Rough, tumbling blocks (developers as GitHub shows them)
// come out of three dark repository towers up at the back left, each down
// its own lane onto the high belt, and go through four stations that each
// look different: a scanner gate whose screen holds the brief, [ your role ]
// (find), a reader with a light cone and a contribution-graph screen (read
// code), then, after a tower crane has lowered them onto the low belt, a
// matcher with a scoreboard whose paddle tips the ones that don't fit into a
// bin (match), and a press that leaves an envelope badge on the one that does
// (message). That one ends up straight, teal and badged on a turning pedestal
// at the end: one engineer for the role, not a list. The next one to fit
// takes its place. The machine stands on a picture the page paints behind
// the canvas (a white hall), casting its shadows on it; the camera is a
// perspective one, pitched like the picture, so the machine sits in it. The
// step cards around the machine are laid out by the page's CSS; this module
// ties each to its station with a leader line. No hands anywhere. Lives in
// its own chunk: AutomationScene dynamic-imports this module once mounted.

// ---- layout (scene units) ------------------------------------------------
const TRACK_W = 1.9;
const FLOOR = -0.15; // everything stands on this
const LOW_TOP = FLOOR + 0.75; // the low belt's surface
const HIGH_TOP = LOW_TOP + 0.75; // the high belt's, where the blocks start
type Belt = { top: number; slab0: number; slab1: number; x1: number };
const BELTS: Belt[] = [
  { top: HIGH_TOP, slab0: -10.7, slab1: -0.6, x1: -1.2 },
  { top: LOW_TOP, slab0: 0.2, slab1: 8.0, x1: 7.6 },
];
const DROP_X = 0.8; // the crane sets blocks down here on the low belt
// the repositories: dark towers behind the start of the high belt, each
// with a lane (a terrace as high as the belt) running to its back edge
const REPOS = [
  { x: -9.7, h: HIGH_TOP - FLOOR + 2.75, w: 1.0 },
  { x: -8.4, h: HIGH_TOP - FLOOR + 1.8, w: 0.95 },
  { x: -7.1, h: HIGH_TOP - FLOOR + 2.25, w: 1.0 },
];
const REPO_Z = -2.9;
const REPO_D = 1.2;
const REPO_FRONT = REPO_Z + REPO_D / 2;
const LANE_W = 0.62;
const LANE_END = -TRACK_W / 2; // a lane meets the belt here
const LANE_LEN = LANE_END - REPO_Z; // from inside the tower to the belt
const MERGE_DX = 0.55; // then the block bends onto the centre line
const MERGE_LEN = Math.hypot(MERGE_DX, LANE_END);
// the four stations: which belt, where, what they do
type Kind = "scan" | "read" | "rank" | "verify";
const STATIONS: { belt: number; x: number; kind: Kind; label: string }[] = [
  { belt: 0, x: -5.4, kind: "scan", label: "find" },
  { belt: 0, x: -3.0, kind: "read", label: "read code" },
  { belt: 1, x: 2.9, kind: "rank", label: "match" },
  { belt: 1, x: 5.5, kind: "verify", label: "message" },
];
const RANK_X = STATIONS.find((s) => s.kind === "rank")!.x;
const GATE_H = 1.55;
const GATE_W = TRACK_W + 0.2;
const BAR = 0.075;
const SCREEN_W = 0.95;
const SCREEN_H = 0.6;
// the pedestal at the end, where the one block that fits is shown
const PODIUM = { x0: 8.5, x1: 10.7, w: 1.8 };
const PEDESTAL = { x: 9.6, r: 0.55, h: 0.3 };
const QUEUE_GAP = 0.7; // blocks queue this far apart
// the crane: mast behind the belts, between the two; its jib reaches the
// end of the lower belt and the start of the upper one at the same radius
const CRANE_X = -0.2;
const CRANE_Z = -2.3;
const MAST_TOP = 3.6;
const JIB_LEN = 3.7;
const COUNTER_LEN = 1.4;
// the bin the blocks that don't fit end up in: pushed off the front edge by
// the matcher's paddle, they drift down the belt and tip over near its end
const DROP_DX = 1.45; // how far a pushed block travels along the belt
const BIN = { x: RANK_X + DROP_DX, z: TRACK_W / 2 + 0.72, w: 0.95, h: LOW_TOP - FLOOR };
// the blocks
const CUBE = 0.5;

// ---- motion ---------------------------------------------------------------
const SPEED = 1.0; // units / s along a belt
const SPAWN_EVERY = 2.2; // s
const JUMP_TIME = 0.55; // s, belt end -> pedestal
const POP_TIME = 0.45; // s, the shown block leaves
const DROP_TIME = 2.0; // s, a block that doesn't fit drifts and tips into the bin
const REJECT_RATE = 0.65; // share of blocks the matcher turns away
const SETTLE = 5; // 1/s, how fast a block straightens after a station
const CRANE = { lower: 0.32, lift: 0.28, slew: 0.6, lower2: 0.26, lift2: 0.22, back: 0.55 };
const HOOK_UP = 3.0; // the gripper's underside at rest
const SPARKS = 14; // per station crossing
const SPARK_LIFE = 0.65; // s
const PRESS = { down: 0.14, hold: 0.12, up: 0.34 }; // s
const PADDLE = { out: 0.4, back: 0.55, angle: 1.5 }; // s, s, rad

// ---- palette --------------------------------------------------------------
// a block's colour by the number of stations passed: GitHub's dark slate
// to the gem's teal
const STAGE = ["#2a3139", "#56656f", "#0f766e", "#129787", "#2ec4ad"].map((c) => new THREE.Color(c));
const COL_REJECT = STAGE[1];
const COL_TRACK = "#d8dde2"; // the conveyors' concrete frames
const COL_RUBBER = "#30363d"; // the belts themselves
const COL_TRIM = "#9aa4ad"; // rails, idlers, trims
const COL_DARK = "#0f151d";
const COL_GATE = "#0f766e";
const COL_SCAN = "#2ec4ad";
const COL_STEEL = "#2a3139";
const COL_CRANE = "#9db03a"; // the gem's chartreuse, dark enough on white
const COL_LIME = "#c6d36a";
const COL_RED = "#ff6b6b";
const COL_SCREEN_OFF = "#1c2530";
const GREENS = ["#9be9a8", "#40c463", "#30a14e", "#216e39"]; // GitHub's graph
// the camera: level and square to the machine, at eye height, like the hall
// picture behind it is seen: its horizontals stay horizontal, its verticals
// vertical, depth runs to one vanishing point. The frame is shifted down
// (a lens shift, `setViewOffset`) so the machine, which stands below eye
// level, fills it while the horizon stays where the picture's is
const CAM_DIR = new THREE.Vector3(0, 0, 1);
const CAM_FOV = 52; // of the whole, unshifted image: a wide lens, like the picture
const EYE = FLOOR + 4.6; // the camera's height: it looks down on the belts, as the picture looks down on its tables
// where the hall picture's eye level sits, as a share of its height, and how
// the page shows it (public/how/hall.jpg behind `.how-band`)
const PIC = { w: 1627, h: 967, horizon: 0.36, position: 0.9 }; // position = the CSS object-position of `.how-bg`
const FACE_CAM = Math.atan2(CAM_DIR.x, CAM_DIR.z); // yaw of a panel facing the camera

type Phase = "free" | "lane" | "track" | "carried" | "jump" | "stack" | "pop" | "drop";
type Block = {
  phase: Phase;
  repo: number; // which tower it came out of
  d: number; // distance travelled along its lane
  belt: number;
  x: number;
  passed: number;
  tilt: THREE.Euler;
  size: number;
  order: number; // 0 = as it arrived, 1 = straight and true
  reject: boolean;
  score: number;
  color: THREE.Color;
  t: number;
  from: THREE.Vector3;
};
type CraneState = "idle" | "lower" | "lift" | "slew" | "lower2" | "lift2" | "back";
type Spark = { life: number; pos: THREE.Vector3; vel: THREE.Vector3; color: THREE.Color };
type Ring = { t: number; mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial> };
type Screen = { g: THREE.Group; ctx: CanvasRenderingContext2D; tex: THREE.CanvasTexture; w: number; h: number };
type Row = { score: number; fresh: number; reject: boolean };
type Station = {
  belt: number;
  x: number;
  kind: Kind;
  label: string;
  labelY: number;
  // where a step card's leader line points: above the station, or at the
  // foot of its front post, whichever side the card is on
  anchorTop: THREE.Vector3;
  anchorFoot: THREE.Vector3;
  flash: number;
  sweep: number;
  lampMat: THREE.MeshBasicMaterial;
  // scan: the glass pane and the line sweeping it, the brief on its screen
  paneMat?: THREE.MeshBasicMaterial;
  line?: THREE.Mesh;
  lineMat?: THREE.MeshBasicMaterial;
  brief?: Screen;
  // read: the light cone and the contribution graph filling in
  coneMat?: THREE.MeshBasicMaterial;
  grid?: Screen;
  fill: number;
  drawnFill: number;
  // verify (the message): the press and the envelope screen
  rod?: THREE.Mesh;
  head?: THREE.Group;
  press: { state: "idle" | "down" | "hold" | "up"; t: number };
  env?: Screen;
  ok: number;
  drawnOk: number;
  // rank: the scoreboard and the paddle
  board?: Screen;
  arm?: THREE.Group;
  paddle: { state: "idle" | "out" | "back"; t: number };
  rows: Row[];
  boardDirty: boolean;
};
type Blink = { mat: THREE.MeshBasicMaterial; on: THREE.Color; off: THREE.Color; rate: number; phase: number };

function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => t * t * (3 - 2 * t);
// a rounded rectangle path, for the screens (no roundRect dependency)
function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  const k = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + k, y);
  ctx.arcTo(x + w, y, x + w, y + h, k);
  ctx.arcTo(x + w, y + h, x, y + h, k);
  ctx.arcTo(x, y + h, x, y, k);
  ctx.arcTo(x, y, x + w, y, k);
  ctx.closePath();
}

export function initAutomation(container: HTMLElement): () => void {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return () => {};
  }
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.VSMShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  const canvas = renderer.domElement;
  container.appendChild(canvas);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const world = new THREE.Group();
  scene.add(world);

  // perspective camera to the front-left; fitCamera() below places it
  const camera = new THREE.PerspectiveCamera(CAM_FOV, 1, 0.5, 600);
  const target = new THREE.Vector3(0, EYE, 0);
  let camDist = 40;
  camera.position.copy(target).addScaledVector(CAM_DIR, camDist);
  camera.lookAt(target);
  camera.updateMatrixWorld();

  // ---- light: a room environment for reflections on the metal, a soft
  // sky light and one sun ------------------------------------------------
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.55;
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfd9e0, 1.15));
  // the sun comes through the hall's windows: behind, a little to the left,
  // at about 45°, so the shadows fall toward the viewer and slightly right,
  // like the patches of light on the picture's floor
  const sun = new THREE.DirectionalLight(0xffffff, 1.15);
  sun.position.set(-4, 10, -8);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -16;
  sun.shadow.camera.right = 16;
  sun.shadow.camera.top = 16;
  sun.shadow.camera.bottom = -16;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 50;
  sun.shadow.bias = -0.0002;
  sun.shadow.normalBias = 0.02;
  sun.shadow.radius = 14;
  sun.shadow.blurSamples = 16;
  scene.add(sun);

  const disposables: { dispose(): void }[] = [renderer];
  const keep = <T extends { dispose(): void }>(d: T) => {
    disposables.push(d);
    return d;
  };
  const solid = (geo: THREE.BufferGeometry, mat: THREE.Material, parent: THREE.Object3D = world) => {
    const m = new THREE.Mesh(keep(geo), mat);
    m.castShadow = true;
    m.receiveShadow = true;
    parent.add(m);
    return m;
  };
  const glow = (color: string, opacity = 1) =>
    keep(new THREE.MeshBasicMaterial({ color, transparent: opacity < 1, opacity, depthWrite: false }));
  // a mono "[ … ]" stencil, drawn once into a texture
  const stencil = (text: string, px: number, w: number, h: number, color: string) => {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = color;
    ctx.font = `700 ${px}px 'JetBrains Mono', ui-monospace, monospace`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, w / 2, h / 2 + px * 0.06);
    const tex = keep(new THREE.CanvasTexture(c));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    return keep(new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }));
  };
  // a thin rod from a to b
  const rod = (a: THREE.Vector3, b: THREE.Vector3, r: number, mat: THREE.Material, parent: THREE.Object3D = world) => {
    const dir = new THREE.Vector3().subVectors(b, a);
    const m = new THREE.Mesh(keep(new THREE.CylinderGeometry(r, r, dir.length(), 6)), mat);
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    parent.add(m);
    return m;
  };

  const tmpColor = new THREE.Color();
  // ---- surfaces: procedural textures drawn once into canvases. A value
  // noise field (several octaves, optionally streaked) gives each material
  // an albedo with faint variation, a bump map for relief and a roughness
  // map so the light breaks up on it ------------------------------------------
  const SIZE = 256;
  const field = (seedK: number, octaves: number, stretchX = 1) => {
    const v = new Float32Array(SIZE * SIZE);
    let norm = 0;
    let amp = 1;
    for (let o = 0; o < octaves; o++) {
      // the lattice of this octave, computed once, then bilinearly sampled
      const f = 4 * Math.pow(2, o);
      const gw = Math.ceil(f / stretchX) + 2;
      const gh = f + 2;
      const grid = new Float32Array(gw * gh);
      for (let j = 0; j < gh; j++) for (let i = 0; i < gw; i++) grid[j * gw + i] = seeded(i * 157.31 + j * 311.7 + o * 71.3 + seedK);
      for (let y = 0; y < SIZE; y++) {
        const fy = (y / SIZE) * f;
        const yi = Math.floor(fy);
        const w = fy - yi;
        const sw = w * w * (3 - 2 * w);
        for (let x = 0; x < SIZE; x++) {
          const fx = ((x / SIZE) * f) / stretchX;
          const xi = Math.floor(fx);
          const u = fx - xi;
          const su = u * u * (3 - 2 * u);
          const r0 = yi * gw + xi;
          const r1 = r0 + gw;
          const a = grid[r0] + (grid[r0 + 1] - grid[r0]) * su;
          const b = grid[r1] + (grid[r1 + 1] - grid[r1]) * su;
          v[y * SIZE + x] += (a + (b - a) * sw) * amp;
        }
      }
      norm += amp;
      amp *= 0.5;
    }
    for (let i = 0; i < v.length; i++) v[i] /= norm;
    return v;
  };
  const toTexture = (fill: (i: number, px: Uint8ClampedArray) => void, srgb: boolean, repeat: number, repeatY = repeat) => {
    const c = document.createElement("canvas");
    c.width = SIZE;
    c.height = SIZE;
    const ctx = c.getContext("2d")!;
    const img = ctx.createImageData(SIZE, SIZE);
    for (let i = 0; i < SIZE * SIZE; i++) {
      fill(i, img.data.subarray(i * 4, i * 4 + 4));
      img.data[i * 4 + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
    const tex = keep(new THREE.CanvasTexture(c));
    if (srgb) tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeat, repeatY);
    tex.anisotropy = 8;
    return tex;
  };
  type SurfaceOpts = {
    base: string;
    vary: number; // broad light/dark patches
    speckle: number; // per-pixel grain
    stains?: number; // darker blotches here and there
    grime?: number; // how much darker toward the bottom of a face
    scratches?: number; // thin bright streaks
    tint?: string; // a second colour the patches drift toward
    bump: number;
    roughBase: number;
    roughVary: number;
    metal: number;
    stretch?: number;
    repeat?: number;
    repeatY?: number;
    seedK: number;
  };
  const surface = (opts: SurfaceOpts) => {
    const n = field(opts.seedK, 4, opts.stretch ?? 1);
    const fine = field(opts.seedK + 9, 2);
    const blotch = field(opts.seedK + 21, 2);
    const streak = opts.scratches ? field(opts.seedK + 33, 3, 40) : fine;
    const base = new THREE.Color(opts.base);
    const tint = new THREE.Color(opts.tint ?? opts.base);
    const rx = opts.repeat ?? 3;
    const ry = opts.repeatY ?? rx;
    const albedo = toTexture(
      (i, px) => {
        const v = Math.floor(i / SIZE) / SIZE; // 0 at the top row of the canvas = top of the face
        let k = 1 + (n[i] - 0.5) * opts.vary + (seeded(i + opts.seedK) - 0.5) * opts.speckle;
        // stains: where the blotch field runs high, darken
        if (opts.stains) k -= Math.max(0, blotch[i] - 0.62) * opts.stains * 2.6;
        // grime toward the bottom of the face
        if (opts.grime) k *= 1 - opts.grime * (1 - v) * (0.6 + 0.4 * fine[i]);
        // scratches: thin streaks that catch the light
        if (opts.scratches && streak[i] > 0.74) k += opts.scratches * (streak[i] - 0.74) * 4;
        const m = Math.max(0, Math.min(1, (blotch[i] - 0.35) * 1.6));
        const r = THREE.MathUtils.lerp(base.r, tint.r, m);
        const g = THREE.MathUtils.lerp(base.g, tint.g, m);
        const b = THREE.MathUtils.lerp(base.b, tint.b, m);
        px[0] = Math.min(255, Math.max(0, r * 255 * k));
        px[1] = Math.min(255, Math.max(0, g * 255 * k));
        px[2] = Math.min(255, Math.max(0, b * 255 * k));
      },
      true,
      rx,
      ry
    );
    const bump = toTexture(
      (i, px) => {
        let k = n[i] * 0.55 + fine[i] * 0.3 + (seeded(i * 1.3 + opts.seedK) - 0.5) * 0.15;
        if (opts.scratches && streak[i] > 0.74) k -= 0.3;
        px[0] = px[1] = px[2] = Math.max(0, Math.min(1, k)) * 255;
      },
      false,
      rx,
      ry
    );
    const rough = toTexture(
      (i, px) => {
        let k = opts.roughBase + (fine[i] - 0.5) * opts.roughVary + (blotch[i] - 0.5) * opts.roughVary * 0.6;
        if (opts.scratches && streak[i] > 0.74) k -= 0.25;
        px[0] = px[1] = px[2] = Math.min(1, Math.max(0, k)) * 255;
      },
      false,
      rx,
      ry
    );
    return keep(new THREE.MeshStandardMaterial({ map: albedo, bumpMap: bump, bumpScale: opts.bump, roughnessMap: rough, roughness: 1, metalness: opts.metal }));
  };
  // cast concrete for the frames; painted steel, slightly worn, for the dark
  // parts; brushed metal for rails and trims
  const slabMat = surface({ base: COL_TRACK, tint: "#d0d4cf", vary: 0.2, speckle: 0.18, stains: 0.18, grime: 0.14, bump: 0.025, roughBase: 0.88, roughVary: 0.35, metal: 0, seedK: 1, repeat: 3, repeatY: 1 });
  const steelMat = surface({ base: COL_STEEL, tint: "#333940", vary: 0.12, speckle: 0.03, bump: 0.004, roughBase: 0.4, roughVary: 0.2, metal: 0.7, seedK: 2, repeat: 2 });
  const trimMat = surface({ base: COL_TRIM, vary: 0.08, speckle: 0.02, bump: 0.003, roughBase: 0.3, roughVary: 0.18, metal: 0.85, stretch: 14, seedK: 3, repeat: 2 });
  // the belts: dark rubber with ribs across, which scroll with the blocks
  const ribs = (vertical: boolean) => {
    const c = document.createElement("canvas");
    c.width = 128;
    c.height = 128;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = COL_RUBBER;
    ctx.fillRect(0, 0, 128, 128);
    // scuffs and dust
    for (let k = 0; k < 900; k++) {
      const a = seeded(k * 0.7 + 1) * 0.16;
      ctx.fillStyle = `rgba(${seeded(k) > 0.5 ? "120,128,136" : "10,14,18"},${a.toFixed(3)})`;
      ctx.fillRect(seeded(k + 0.3) * 128, seeded(k + 0.6) * 128, 1 + seeded(k + 0.9) * 3, 1 + seeded(k + 1.2) * 2);
    }
    // the middle of the belt is polished by the blocks: lighter, smoother
    const shine = ctx.createLinearGradient(vertical ? 0 : 0, vertical ? 0 : 0, vertical ? 128 : 0, vertical ? 0 : 128);
    shine.addColorStop(0, "rgba(255,255,255,0)");
    shine.addColorStop(0.5, "rgba(255,255,255,0.12)");
    shine.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = shine;
    ctx.fillRect(0, 0, 128, 128);
    ctx.fillStyle = "#454d56";
    if (vertical) ctx.fillRect(0, 0, 128, 12);
    else ctx.fillRect(0, 0, 12, 128);
    ctx.fillStyle = "#1f2429";
    if (vertical) ctx.fillRect(0, 12, 128, 6);
    else ctx.fillRect(12, 0, 6, 128);
    const tex = keep(new THREE.CanvasTexture(c));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = 8;
    return tex;
  };
  // small realistic details used all over: bolt heads, panel grooves,
  // triangular gussets, diagonal braces
  const boltGeo = keep(new THREE.CylinderGeometry(0.03, 0.03, 0.02, 10));
  const boltCapGeo = keep(new THREE.SphereGeometry(0.022, 10, 8));
  const bolt = (x: number, y: number, z: number, axis: "x" | "y" | "z", parent: THREE.Object3D = world) => {
    const b = solid(boltGeo, trimMat, parent);
    b.position.set(x, y, z);
    if (axis === "x") b.rotation.z = Math.PI / 2;
    if (axis === "z") b.rotation.x = Math.PI / 2;
    const cap = solid(boltCapGeo, trimMat, parent);
    cap.position.set(x + (axis === "x" ? 0.01 : 0), y + (axis === "y" ? 0.01 : 0), z + (axis === "z" ? 0.01 : 0));
  };
  const grooveMat = keep(new THREE.MeshStandardMaterial({ color: "#5a6570", roughness: 0.9, metalness: 0.1 }));
  const gussetGeo = keep(
    (() => {
      const shape = new THREE.Shape();
      shape.moveTo(0, 0);
      shape.lineTo(0.22, 0);
      shape.lineTo(0, 0.22);
      shape.closePath();
      return new THREE.ExtrudeGeometry(shape, { depth: 0.05, bevelEnabled: false });
    })()
  );
  const brace = (a: THREE.Vector3, b: THREE.Vector3, r: number, mat: THREE.Material, parent: THREE.Object3D = world) => {
    const dir = new THREE.Vector3().subVectors(b, a);
    const m = solid(new THREE.CylinderGeometry(r, r, dir.length(), 8), mat, parent);
    m.position.copy(a).addScaledVector(dir, 0.5);
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
    return m;
  };
  const RIB_PERIOD = 0.32;
  const beltTexes: { tex: THREE.Texture; vertical: boolean }[] = [];
  const beltStrip = (len: number, width: number, vertical: boolean) => {
    const tex = ribs(vertical);
    if (vertical) tex.repeat.set(1, len / RIB_PERIOD);
    else tex.repeat.set(len / RIB_PERIOD, 1);
    beltTexes.push({ tex, vertical });
    const geo = keep(vertical ? new THREE.BoxGeometry(width, 0.06, len) : new THREE.BoxGeometry(len, 0.06, width));
    const m = new THREE.Mesh(geo, keep(new THREE.MeshStandardMaterial({ map: tex, bumpMap: tex, bumpScale: 0.01, roughness: 0.88, metalness: 0.05 })));
    m.receiveShadow = true;
    world.add(m);
    return m;
  };
  const darkMat = surface({ base: COL_DARK, tint: "#151c24", vary: 0.16, speckle: 0.04, grime: 0.08, bump: 0.006, roughBase: 0.5, roughVary: 0.25, metal: 0.3, seedK: 4, repeat: 2, repeatY: 1 });
  const gateMat = keep(
    new THREE.MeshStandardMaterial({ color: COL_GATE, roughness: 0.35, metalness: 0.5, emissive: new THREE.Color(COL_GATE), emissiveIntensity: 0.1 })
  );
  // a dark screen turned to the camera, with a canvas we draw on
  const screen = (w: number, h: number) => {
    const g = new THREE.Group();
    const panel = solid(new RoundedBoxGeometry(w + 0.1, h + 0.1, 0.06, 1, 0.02), darkMat, g);
    panel.position.z = 0;
    const c = document.createElement("canvas");
    c.width = 320;
    c.height = 200;
    const ctx = c.getContext("2d")!;
    const tex = keep(new THREE.CanvasTexture(c));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 4;
    const face = new THREE.Mesh(keep(new THREE.PlaneGeometry(w, h)), keep(new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false })));
    face.position.z = 0.034;
    g.add(face);
    g.rotation.y = FACE_CAM;
    world.add(g);
    return { g, ctx, tex, w: c.width, h: c.height } as Screen;
  };

  // ---- the floor shadow: the machine casts onto the page, and a soft
  // contact shadow hugs every footprint so nothing seems to hover ----------
  // the shadows take the picture's sage-grey, not black
  const floor = new THREE.Mesh(keep(new THREE.PlaneGeometry(80, 80)), keep(new THREE.ShadowMaterial({ color: "#2f4a40", opacity: 0.3 })));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR - 0.01;
  floor.receiveShadow = true;
  world.add(floor);
  const contactTex = (() => {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 256;
    const ctx = c.getContext("2d")!;
    const grd = ctx.createRadialGradient(128, 128, 40, 128, 128, 128);
    grd.addColorStop(0, "rgba(20, 26, 32, 0.42)");
    grd.addColorStop(0.55, "rgba(20, 26, 32, 0.18)");
    grd.addColorStop(1, "rgba(20, 26, 32, 0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 256, 256);
    return keep(new THREE.CanvasTexture(c));
  })();
  const contactMat = keep(new THREE.MeshBasicMaterial({ map: contactTex, transparent: true, depthWrite: false, toneMapped: false }));
  const contact = (x: number, z: number, w: number, d: number) => {
    const m = new THREE.Mesh(keep(new THREE.PlaneGeometry(w, d)), contactMat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(x, FLOOR - 0.005, z);
    m.renderOrder = -1;
    world.add(m);
  };
  for (const b of BELTS) contact((b.slab0 + b.slab1) / 2, 0, b.slab1 - b.slab0 + 1.6, TRACK_W + 1.6);

  // ---- the terraces and the podium: a concrete frame on a dark plinth,
  // and for the conveyors a rubber belt let into the top, a trim rail along
  // each edge and a row of idler rollers on the near face ------------------
  const terrace = (x0: number, x1: number, top: number, w = TRACK_W, conveyor = true) => {
    const h = top - FLOOR;
    const m = solid(new RoundedBoxGeometry(x1 - x0, h - (conveyor ? 0.06 : 0), w, 2, 0.05), slabMat);
    m.position.set((x0 + x1) / 2, FLOOR + (h - (conveyor ? 0.06 : 0)) / 2, 0);
    const plinth = solid(new THREE.BoxGeometry(x1 - x0 - 0.1, 0.14, w + 0.04), steelMat);
    plinth.position.set((x0 + x1) / 2, FLOOR + 0.07, 0);
    if (!conveyor) return;
    const belt = beltStrip(x1 - x0 - 0.3, w - 0.36, false);
    belt.position.set((x0 + x1) / 2, top - 0.03, 0);
    const railGeo = keep(new THREE.BoxGeometry(x1 - x0 - 0.2, 0.05, 0.08));
    for (const z of [-w / 2 + 0.1, w / 2 - 0.1]) {
      const rail = solid(railGeo, trimMat);
      rail.position.set((x0 + x1) / 2, top + 0.01, z);
    }
    const idlerGeo = keep(new THREE.CylinderGeometry(0.055, 0.055, 0.2, 14));
    for (let x = x0 + 0.5; x < x1 - 0.3; x += 0.62) {
      const idler = solid(idlerGeo, trimMat);
      idler.rotation.x = Math.PI / 2;
      idler.position.set(x, top - 0.2, w / 2 + 0.02);
    }
    // panel seams down the near face, a bolt at each corner of each panel
    const faceZ = w / 2 + 0.002;
    const seamGeo = keep(new THREE.BoxGeometry(0.035, h - 0.5, 0.02));
    for (let x = x0 + 1.6; x < x1 - 0.8; x += 1.9) {
      const seam = new THREE.Mesh(seamGeo, grooveMat);
      seam.position.set(x, FLOOR + 0.14 + (h - 0.5) / 2, faceZ);
      world.add(seam);
      bolt(x - 0.14, FLOOR + 0.26, faceZ + 0.01, "z");
      bolt(x + 0.14, FLOOR + 0.26, faceZ + 0.01, "z");
      bolt(x - 0.14, top - 0.34, faceZ + 0.01, "z");
      bolt(x + 0.14, top - 0.34, faceZ + 0.01, "z");
    }
    // the drive: a motor and gearbox bolted to the head end
    const motor = solid(keep(new THREE.CylinderGeometry(0.17, 0.17, 0.42, 20)), steelMat);
    motor.rotation.x = Math.PI / 2;
    motor.position.set(x1 - 0.55, top - 0.42, w / 2 + 0.26);
    const gearbox = solid(new RoundedBoxGeometry(0.3, 0.3, 0.16, 1, 0.03), trimMat);
    gearbox.position.set(x1 - 0.55, top - 0.42, w / 2 + 0.07);
    const finGeo = keep(new THREE.BoxGeometry(0.4, 0.015, 0.03));
    for (let k = -2; k <= 2; k++) {
      const fin = solid(finGeo, trimMat);
      fin.position.set(x1 - 0.55, top - 0.42 + k * 0.06, w / 2 + 0.49);
    }
  };
  for (const b of BELTS) terrace(b.slab0, b.slab1, b.top);
  const topBelt = BELTS[BELTS.length - 1].top;
  terrace(PODIUM.x0, PODIUM.x1, topBelt, PODIUM.w, false);
  contact((PODIUM.x0 + PODIUM.x1) / 2, 0, PODIUM.x1 - PODIUM.x0 + 1.4, PODIUM.w + 1.4);
  contact(CRANE_X, CRANE_Z, 2.4, 2.4);
  contact(BIN.x, BIN.z, BIN.w + 1.2, BIN.w + 1.2);
  for (const r of REPOS) contact(r.x, REPO_Z, r.w + 1.4, REPO_D + 1.4);
  // the pedestal: a low drum with a teal ring, the block on it turns slowly
  const pedestal = solid(new THREE.CylinderGeometry(PEDESTAL.r, PEDESTAL.r + 0.05, PEDESTAL.h, 36), steelMat);
  pedestal.position.set(PEDESTAL.x, topBelt + PEDESTAL.h / 2, 0);
  const pedestalTop = topBelt + PEDESTAL.h;
  const pedestalRing = new THREE.Mesh(keep(new THREE.RingGeometry(PEDESTAL.r - 0.09, PEDESTAL.r - 0.04, 48)), glow(COL_SCAN, 0.8));
  pedestalRing.rotation.x = -Math.PI / 2;
  pedestalRing.position.set(PEDESTAL.x, pedestalTop + 0.004, 0);
  world.add(pedestalRing);

  // the head pulleys: a striped roller at each end of each belt, turning
  const stripeCanvas = document.createElement("canvas");
  stripeCanvas.width = 64;
  stripeCanvas.height = 8;
  const sctx = stripeCanvas.getContext("2d")!;
  sctx.fillStyle = "#b9c4cc";
  sctx.fillRect(0, 0, 64, 8);
  sctx.fillStyle = "#59636e";
  for (let i = 0; i < 64; i += 16) sctx.fillRect(i, 0, 8, 8);
  const stripeTex = keep(new THREE.CanvasTexture(stripeCanvas));
  stripeTex.colorSpace = THREE.SRGBColorSpace;
  stripeTex.wrapS = THREE.RepeatWrapping;
  stripeTex.repeat.set(3, 1);
  const rollerMat = keep(new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.6, metalness: 0.2 }));
  const rollerGeo = keep(new THREE.CylinderGeometry(0.13, 0.13, TRACK_W - 0.1, 20));
  const rollers: THREE.Mesh[] = [];
  const roller = (x: number, top: number) => {
    const holder = new THREE.Group();
    holder.position.set(x, top - 0.13, 0);
    holder.rotation.x = Math.PI / 2; // the cylinder's axis along z
    world.add(holder);
    rollers.push(solid(rollerGeo, rollerMat, holder));
  };
  for (const b of BELTS) {
    roller(b.slab1 + 0.08, b.top);
    roller(b.slab0 - 0.08, b.top);
  }

  // ---- the belts: dashed teal lines marching at the blocks' speed -------
  const DASH_PERIOD = 0.55;
  const dashCanvas = (vertical: boolean) => {
    const c = document.createElement("canvas");
    c.width = vertical ? 8 : 64;
    c.height = vertical ? 64 : 8;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = COL_GATE;
    if (vertical) ctx.fillRect(0, 0, 8, 36);
    else ctx.fillRect(0, 0, 36, 8);
    return c;
  };
  const dashH = dashCanvas(false);
  const dashV = dashCanvas(true);
  const dashLine = (len: number, vertical: boolean) => {
    const tex = keep(new THREE.CanvasTexture(vertical ? dashV : dashH));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.magFilter = THREE.NearestFilter;
    if (vertical) tex.repeat.set(1, len / DASH_PERIOD);
    else tex.repeat.set(len / DASH_PERIOD, 1);
    const mesh = new THREE.Mesh(
      keep(vertical ? new THREE.PlaneGeometry(0.05, len) : new THREE.PlaneGeometry(len, 0.05)),
      keep(new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.45, depthWrite: false }))
    );
    mesh.rotation.x = -Math.PI / 2;
    world.add(mesh);
    return { mesh, tex };
  };
  const beltLines = BELTS.map((bd, i) => {
    const x0 = i === 0 ? REPOS[0].x + MERGE_DX : DROP_X;
    const len = bd.x1 - x0 + 0.2;
    const l = dashLine(len, false);
    l.mesh.position.set((x0 + bd.x1) / 2, bd.top + 0.003, 0);
    return l;
  });

  // ---- the repositories: dark towers the blocks come out of, each
  // with a lane down to the belt, a lit door, GitHub's green squares on
  // the face, a radar, blinking lights, an antenna --------------------------
  const blinks: Blink[] = [];
  const doorGeo = keep(new THREE.PlaneGeometry(0.5, 0.62));
  const cellGeo = keep(new THREE.PlaneGeometry(0.1, 0.1));
  const ledGeo = keep(new THREE.PlaneGeometry(0.09, 0.09));
  const lampGeo = keep(new THREE.SphereGeometry(0.055, 12, 12));
  const laneLines: { mesh: THREE.Mesh; tex: THREE.Texture }[] = [];
  const repoTop = (i: number) => FLOOR + REPOS[i].h;
  REPOS.forEach((r, i) => {
    const tower = solid(new RoundedBoxGeometry(r.w, r.h, REPO_D, 2, 0.06), darkMat);
    tower.position.set(r.x, FLOOR + r.h / 2, REPO_Z);
    const cornice = solid(new THREE.BoxGeometry(r.w + 0.1, 0.08, REPO_D + 0.1), steelMat);
    cornice.position.set(r.x, FLOOR + r.h - 0.04, REPO_Z);
    const skirt = solid(new THREE.BoxGeometry(r.w + 0.08, 0.2, REPO_D + 0.08), steelMat);
    skirt.position.set(r.x, FLOOR + 0.1, REPO_Z);
    const seamGeoT = keep(new THREE.BoxGeometry(r.w - 0.1, 0.02, 0.02));
    for (let y = BELTS[0].top + 0.75; y < FLOOR + r.h - 0.9; y += 0.55) {
      const seam = new THREE.Mesh(seamGeoT, grooveMat);
      seam.position.set(r.x, y, REPO_FRONT + 0.002);
      world.add(seam);
    }
    const slatGeo = keep(new THREE.BoxGeometry(0.34, 0.025, 0.03));
    for (let k = 0; k < 4; k++) {
      const slat = solid(slatGeo, trimMat);
      slat.position.set(r.x + r.w / 2 - 0.26, BELTS[0].top + 0.9 + k * 0.07, REPO_FRONT + 0.012);
    }
    const front = REPO_FRONT + 0.004;
    const door = new THREE.Mesh(doorGeo, glow(COL_SCAN, 0.35));
    door.position.set(r.x, BELTS[0].top + 0.33, front);
    world.add(door);
    // the lane: a narrow terrace from the door to the belt, dashes marching
    const laneH = BELTS[0].top - FLOOR;
    const lane = solid(new RoundedBoxGeometry(LANE_W, laneH - 0.06, LANE_END - REPO_FRONT + 0.1, 1, 0.04), slabMat);
    lane.position.set(r.x, FLOOR + (laneH - 0.06) / 2, (REPO_FRONT + LANE_END) / 2 - 0.05);
    const laneBelt = beltStrip(LANE_END - REPO_FRONT, LANE_W - 0.16, true);
    laneBelt.position.set(r.x, BELTS[0].top - 0.03, (REPO_FRONT + LANE_END) / 2);
    const l = dashLine(LANE_END - REPO_FRONT, true);
    l.mesh.position.set(r.x, BELTS[0].top + 0.003, (REPO_FRONT + LANE_END) / 2);
    laneLines.push(l);
    if (i !== 1) {
      // a contribution graph on the face
      const cols = 4;
      for (let k = 0; k < cols * 3; k++) {
        const on = new THREE.Color(GREENS[Math.floor(seeded(k + i * 7) * GREENS.length)]);
        const mat = keep(new THREE.MeshBasicMaterial({ color: on }));
        const m = new THREE.Mesh(cellGeo, mat);
        m.position.set(r.x - 0.21 + (k % cols) * 0.14, repoTop(i) - 0.3 - Math.floor(k / cols) * 0.14, front);
        world.add(m);
        blinks.push({ mat, on, off: on.clone().multiplyScalar(0.25), rate: 0.5 + seeded(k * 1.7 + i) * 1.2, phase: seeded(k + 0.4 + i) * 6.3 });
      }
    } else {
      // a row of blinking lights
      const LED_COLORS = [COL_SCAN, COL_SCAN, COL_LIME, COL_SCAN, "#6cb6ff", COL_SCAN];
      LED_COLORS.forEach((c, k) => {
        const on = new THREE.Color(c);
        const mat = keep(new THREE.MeshBasicMaterial({ color: on }));
        const m = new THREE.Mesh(ledGeo, mat);
        m.position.set(r.x - 0.2 + (k % 3) * 0.2, repoTop(i) - 0.3 - Math.floor(k / 3) * 0.17, front);
        world.add(m);
        blinks.push({ mat, on, off: on.clone().multiplyScalar(0.22), rate: 1.6 + seeded(k + 3) * 3, phase: seeded(k + 9) * 6.3 });
      });
    }
  });
  // the sign on the tallest tower
  const sourceSign = new THREE.Mesh(keep(new THREE.PlaneGeometry(1.0, 0.25)), stencil("[ github ]", 56, 512, 128, COL_SCAN));
  sourceSign.position.set(REPOS[0].x, BELTS[0].top + 1.15, REPO_FRONT + 0.004);
  world.add(sourceSign);
  // the radar on its roof
  const radarRing = new THREE.Mesh(keep(new THREE.RingGeometry(0.36, 0.4, 40)), glow(COL_SCAN, 0.9));
  radarRing.rotation.x = -Math.PI / 2;
  radarRing.position.set(REPOS[0].x, repoTop(0) + 0.004, REPO_Z);
  world.add(radarRing);
  const radarSweep = new THREE.Mesh(keep(new THREE.CircleGeometry(0.36, 24, 0, Math.PI / 3)), glow(COL_SCAN, 0.45));
  radarSweep.rotation.x = -Math.PI / 2;
  radarSweep.position.set(REPOS[0].x, repoTop(0) + 0.006, REPO_Z);
  world.add(radarSweep);
  const radarDot = new THREE.Mesh(keep(new THREE.SphereGeometry(0.05, 10, 10)), glow(COL_SCAN));
  radarDot.position.set(REPOS[0].x, repoTop(0) + 0.03, REPO_Z);
  world.add(radarDot);
  // the antenna on the third tower
  const mast = solid(keep(new THREE.CylinderGeometry(0.02, 0.03, 0.8, 8)), steelMat);
  mast.position.set(REPOS[2].x + 0.25, repoTop(2) + 0.4, REPO_Z - 0.25);
  const antennaLamp = new THREE.Mesh(lampGeo, keep(new THREE.MeshBasicMaterial({ color: COL_LIME })));
  antennaLamp.position.set(REPOS[2].x + 0.25, repoTop(2) + 0.84, REPO_Z - 0.25);
  world.add(antennaLamp);

  // ---- the stations -----------------------------------------------------
  const barV = keep(new RoundedBoxGeometry(BAR, GATE_H, BAR, 1, 0.02));
  const barH = keep(new RoundedBoxGeometry(BAR, BAR, GATE_W, 1, 0.02));
  const footGeo = keep(new RoundedBoxGeometry(0.22, 0.08, 0.22, 1, 0.02));
  const paneGeo = keep(new THREE.PlaneGeometry(GATE_H - BAR, GATE_W - BAR));
  const lineGeo = keep(new THREE.PlaneGeometry(0.035, GATE_W - BAR - 0.02));
  const lampOn = new THREE.Color(COL_SCAN);
  const lampDim = new THREE.Color(COL_GATE);
  const stations: Station[] = STATIONS.map((sd) => {
    const belt = BELTS[sd.belt];
    const g = new THREE.Group();
    g.position.set(sd.x, belt.top, 0);
    world.add(g);
    // the gantry every station shares: two posts on feet and a top bar
    for (const z of [-GATE_W / 2 + BAR / 2, GATE_W / 2 - BAR / 2]) {
      const bar = solid(barV, gateMat, g);
      bar.position.set(0, GATE_H / 2, z);
      const foot = solid(footGeo, gateMat, g);
      foot.position.set(0, 0.04, z);
      for (const [bx, bz] of [
        [-0.08, -0.08],
        [0.08, -0.08],
        [-0.08, 0.08],
        [0.08, 0.08],
      ]) {
        bolt(bx, 0.085, z + bz, "y", g);
      }
      // gussets where the post meets the top bar
      const inward = z < 0 ? 1 : -1;
      const gusset = solid(gussetGeo, gateMat, g);
      gusset.position.set(-0.025, GATE_H - BAR, z + inward * BAR * 0.5);
      gusset.rotation.y = inward < 0 ? Math.PI : 0;
      gusset.rotation.x = -Math.PI / 2;
      gusset.scale.set(inward, 1, 1);
    }
    const top = solid(barH, gateMat, g);
    top.position.set(0, GATE_H - BAR / 2, 0);
    // a cable conduit up the far post to the head, with clips
    const conduit = solid(keep(new THREE.CylinderGeometry(0.018, 0.018, GATE_H - 0.1, 8)), trimMat, g);
    conduit.position.set(BAR / 2 + 0.02, GATE_H / 2, -GATE_W / 2 + BAR / 2);
    const clipGeo = keep(new THREE.TorusGeometry(0.03, 0.008, 6, 12));
    for (let y = 0.35; y < GATE_H - 0.2; y += 0.45) {
      const clip = solid(clipGeo, trimMat, g);
      clip.position.set(BAR / 2 + 0.02, y, -GATE_W / 2 + BAR / 2);
      clip.rotation.x = Math.PI / 2;
    }
    const lampMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN }));
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(0, GATE_H + 0.05, 0);
    g.add(lamp);
    const s: Station = {
      belt: sd.belt,
      x: sd.x,
      kind: sd.kind,
      label: sd.label,
      labelY: belt.top + GATE_H + 0.55,
      anchorTop: new THREE.Vector3(),
      anchorFoot: new THREE.Vector3(sd.x, belt.top + 0.03, GATE_W / 2),
      flash: 0,
      sweep: seeded(sd.x),
      lampMat,
      fill: 0,
      drawnFill: -1,
      press: { state: "idle", t: 0 },
      ok: 0,
      drawnOk: -1,
      paddle: { state: "idle", t: 0 },
      rows: [],
      boardDirty: true,
    };
    if (sd.kind === "scan") {
      // a glass pane with a scan line sweeping it
      s.paneMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false }));
      const pane = new THREE.Mesh(paneGeo, s.paneMat);
      pane.rotation.y = Math.PI / 2;
      pane.rotation.z = Math.PI / 2;
      pane.position.set(0, GATE_H / 2, 0);
      g.add(pane);
      s.lineMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
      s.line = new THREE.Mesh(lineGeo, s.lineMat);
      s.line.rotation.y = Math.PI / 2;
      s.line.rotation.z = Math.PI / 2;
      s.line.position.set(0, GATE_H / 2, 0);
      g.add(s.line);
      // the brief on top: what the gate is looking for
      s.brief = screen(SCREEN_W, SCREEN_H);
      s.brief.g.position.set(sd.x, belt.top + GATE_H + 0.45, 0);
      s.labelY = belt.top + GATE_H + 1.0;
    } else if (sd.kind === "read") {
      // a lens under the bar throws a cone of light on the belt; the screen
      // above fills in the developer's contribution graph as it reads
      const lens = solid(keep(new THREE.CylinderGeometry(0.1, 0.15, 0.16, 16)), steelMat, g);
      lens.position.set(0, GATE_H - BAR - 0.08, 0);
      const coneH = GATE_H - BAR - 0.16;
      s.coneMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.08, side: THREE.DoubleSide, depthWrite: false }));
      const cone = new THREE.Mesh(keep(new THREE.ConeGeometry(0.55, coneH, 28, 1, true)), s.coneMat);
      cone.position.set(0, coneH / 2, 0);
      g.add(cone);
      s.grid = screen(SCREEN_W, SCREEN_H);
      s.grid.g.position.set(sd.x, belt.top + GATE_H + 0.45, 0);
      s.labelY = belt.top + GATE_H + 1.0;
    } else if (sd.kind === "verify") {
      // a press comes down on each block and leaves a badge; the screen on
      // the housing shows the envelope getting its check
      const housing = solid(new RoundedBoxGeometry(0.56, 0.3, 0.56, 1, 0.04), steelMat, g);
      housing.position.set(0, GATE_H + 0.15 - BAR / 2, 0);
      s.rod = solid(keep(new THREE.CylinderGeometry(0.045, 0.045, 1, 10)), steelMat, g);
      s.head = new THREE.Group();
      g.add(s.head);
      solid(new RoundedBoxGeometry(0.5, 0.12, 0.5, 1, 0.03), steelMat, s.head);
      const headGlow = new THREE.Mesh(keep(new THREE.PlaneGeometry(0.42, 0.42)), glow(COL_SCAN, 0.9));
      headGlow.rotation.x = Math.PI / 2;
      headGlow.position.y = -0.064;
      s.head.add(headGlow);
      s.env = screen(SCREEN_W, SCREEN_H);
      s.env.g.position.set(sd.x, belt.top + GATE_H + 0.72, 0);
      s.labelY = belt.top + GATE_H + 1.27;
    } else {
      // the scoreboard above, and a paddle on the back edge that sweeps the
      // blocks that don't fit off the front
      s.board = screen(SCREEN_W, SCREEN_H);
      s.board.g.position.set(sd.x, belt.top + GATE_H + 0.45, 0);
      s.labelY = belt.top + GATE_H + 1.0;
      // the paddle rests behind the back posts and reaches the centre line
      // when it swings out
      const pivot = new THREE.Group();
      pivot.position.set(0.5, 0, -GATE_W / 2 - 0.25);
      g.add(pivot);
      const post = solid(keep(new THREE.CylinderGeometry(0.045, 0.045, 0.95, 10)), gateMat, pivot);
      post.position.y = 0.475;
      s.arm = new THREE.Group();
      s.arm.position.y = 0.32;
      pivot.add(s.arm);
      const paddle = solid(new RoundedBoxGeometry(1.3, 0.4, 0.06, 1, 0.02), steelMat, s.arm);
      paddle.position.set(-0.65, 0, 0.1);
      const paddleGlow = new THREE.Mesh(keep(new THREE.PlaneGeometry(1.2, 0.3)), glow(COL_SCAN, 0.6));
      paddleGlow.position.set(-0.65, 0, 0.132);
      s.arm.add(paddleGlow);
    }
    s.anchorTop.set(sd.x, s.labelY - 0.1, 0);
    return s;
  });

  // ---- what the screens show ----------------------------------------------
  const drawGrid = (sc: Screen, fill: number) => {
    const { ctx, w, h } = sc;
    ctx.clearRect(0, 0, w, h);
    const cols = 13;
    const rows = 7;
    const cell = 18;
    const gap = 4;
    const ox = (w - (cols * (cell + gap) - gap)) / 2;
    const oy = (h - (rows * (cell + gap) - gap)) / 2;
    const n = cols * rows;
    for (let col = 0; col < cols; col++) {
      for (let row = 0; row < rows; row++) {
        const i = col * rows + row;
        const lit = i / n < fill && seeded(i * 1.31 + 5) > 0.3;
        ctx.fillStyle = lit ? GREENS[Math.floor(seeded(i + 0.5) * GREENS.length)] : COL_SCREEN_OFF;
        rrect(ctx, ox + col * (cell + gap), oy + row * (cell + gap), cell, cell, 3);
        ctx.fill();
      }
    }
    sc.tex.needsUpdate = true;
  };
  const drawEnvelope = (sc: Screen, ok: number) => {
    const { ctx, w, h } = sc;
    ctx.clearRect(0, 0, w, h);
    const cx = w / 2;
    const cy = h / 2 + 4;
    const ew = 168;
    const eh = 108;
    ctx.lineWidth = 7;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    ctx.strokeStyle = COL_SCAN;
    ctx.fillStyle = `rgba(46, 196, 173, ${(0.08 + 0.3 * ok).toFixed(3)})`;
    rrect(ctx, cx - ew / 2, cy - eh / 2, ew, eh, 12);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(cx - ew / 2 + 4, cy - eh / 2 + 8);
    ctx.lineTo(cx, cy + 8);
    ctx.lineTo(cx + ew / 2 - 4, cy - eh / 2 + 8);
    ctx.stroke();
    if (ok > 0.01) {
      // the check badge pops in the corner
      const k = Math.min(1, ok * 1.5);
      const bx = cx + ew / 2 - 4;
      const by = cy + eh / 2 - 4;
      ctx.fillStyle = COL_LIME;
      ctx.beginPath();
      ctx.arc(bx, by, 28 * k, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = COL_DARK;
      ctx.lineWidth = 7 * k;
      ctx.beginPath();
      ctx.moveTo(bx - 12 * k, by + 1 * k);
      ctx.lineTo(bx - 4 * k, by + 10 * k);
      ctx.lineTo(bx + 13 * k, by - 10 * k);
      ctx.stroke();
    }
    sc.tex.needsUpdate = true;
  };
  const tealC = new THREE.Color(COL_SCAN);
  const limeC = new THREE.Color(COL_LIME);
  const mixC = new THREE.Color();
  const drawBoard = (sc: Screen, rows: Row[]) => {
    const { ctx, w, h } = sc;
    ctx.clearRect(0, 0, w, h);
    const rowH = 44;
    const top = (h - 4 * rowH) / 2 + 8;
    const barX = 58;
    const barW = w - barX - 22;
    const shown = [...rows].sort((a, b) => b.score - a.score);
    for (let i = 0; i < 4; i++) {
      const y = top + i * rowH;
      const row = shown[i];
      ctx.globalAlpha = row && row.reject ? 0.35 + 0.65 * row.fresh : 1;
      ctx.fillStyle = row ? (row.reject ? COL_RED : COL_SCAN) : COL_SCREEN_OFF;
      ctx.beginPath();
      ctx.arc(30, y + 14, 11, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = COL_SCREEN_OFF;
      rrect(ctx, barX, y + 6, barW, 16, 8);
      ctx.fill();
      if (row) {
        if (row.reject) ctx.fillStyle = COL_RED;
        else ctx.fillStyle = "#" + mixC.copy(tealC).lerp(limeC, row.fresh).getHexString();
        const k = row.fresh > 0 ? easeOut(1 - row.fresh) : 1;
        rrect(ctx, barX, y + 6, Math.max(16, barW * row.score * k), 16, 8);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
    sc.tex.needsUpdate = true;
  };

  // ---- the bin the matcher tips the rejects into ------------------------
  const binWallGeo = keep(new RoundedBoxGeometry(BIN.w, BIN.h, 0.06, 1, 0.02));
  const binSideGeo = keep(new RoundedBoxGeometry(0.06, BIN.h, BIN.w, 1, 0.02));
  const binY = FLOOR + BIN.h / 2;
  for (const dz of [-1, 1]) {
    const w = solid(binWallGeo, steelMat);
    w.position.set(BIN.x, binY, BIN.z + (dz * (BIN.w - 0.06)) / 2);
  }
  for (const dx of [-1, 1]) {
    const w = solid(binSideGeo, steelMat);
    w.position.set(BIN.x + (dx * (BIN.w - 0.06)) / 2, binY, BIN.z);
  }
  const binFloor = solid(new RoundedBoxGeometry(BIN.w, 0.06, BIN.w, 1, 0.02), steelMat);
  binFloor.position.set(BIN.x, FLOOR + 0.03, BIN.z);

  // ---- the brief: typed on the scanner's screen, one role at a time ---------
  const brief = stations[0].brief!;
  const ROLES = ["senior rust · real-time", "backend · payments api", "ml infra · pytorch"];
  const typing = { role: 0, chars: 0, t: 0, mode: "type" as "type" | "hold" | "clear", drawn: "" };
  const drawBrief = (sc: Screen, text: string, cursorOn: boolean) => {
    const { ctx, w, h } = sc;
    ctx.clearRect(0, 0, w, h);
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillStyle = COL_SCAN;
    ctx.font = "700 34px 'JetBrains Mono', ui-monospace, monospace";
    ctx.fillText("[ your role ]", 22, 58);
    ctx.fillStyle = "#e6ecf2";
    ctx.font = "500 23px 'JetBrains Mono', ui-monospace, monospace";
    ctx.fillText(text, 22, 128);
    if (cursorOn) {
      const tw = ctx.measureText(text).width;
      ctx.fillStyle = COL_SCAN;
      ctx.fillRect(22 + tw + 4, 115, 13, 27);
    }
    sc.tex.needsUpdate = true;
  };

  // ---- the crane: a tower crane behind the belts -----------------------
  const craneMat = surface({ base: COL_CRANE, tint: "#93a63a", vary: 0.14, speckle: 0.04, bump: 0.004, roughBase: 0.48, roughVary: 0.2, metal: 0.3, seedK: 5, repeat: 4 });
  const base = solid(new RoundedBoxGeometry(1.1, 0.3, 1.1, 1, 0.03), steelMat);
  base.position.set(CRANE_X, FLOOR + 0.15, CRANE_Z);
  const MAST_W = 0.36;
  const mastH = MAST_TOP - FLOOR;
  const chordGeo = keep(new RoundedBoxGeometry(0.06, mastH, 0.06, 1, 0.01));
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      const chord = solid(chordGeo, craneMat);
      chord.position.set(CRANE_X + (sx * MAST_W) / 2, FLOOR + mastH / 2, CRANE_Z + (sz * MAST_W) / 2);
    }
  }
  const rungX = keep(new RoundedBoxGeometry(MAST_W, 0.045, 0.045, 1, 0.01));
  const rungZ = keep(new RoundedBoxGeometry(0.045, 0.045, MAST_W, 1, 0.01));
  let flip = 1;
  for (let y = FLOOR + 0.5; y < MAST_TOP - 0.1; y += 0.5) {
    for (const sgn of [-1, 1]) {
      const a = solid(rungX, craneMat);
      a.position.set(CRANE_X, y, CRANE_Z + (sgn * MAST_W) / 2);
      const b = solid(rungZ, craneMat);
      b.position.set(CRANE_X + (sgn * MAST_W) / 2, y, CRANE_Z);
      // a diagonal in each bay, alternating direction up the mast
      const hw = MAST_W / 2;
      brace(
        new THREE.Vector3(CRANE_X - flip * hw, y - 0.5, CRANE_Z + sgn * hw),
        new THREE.Vector3(CRANE_X + flip * hw, y, CRANE_Z + sgn * hw),
        0.014,
        craneMat
      );
      brace(
        new THREE.Vector3(CRANE_X + sgn * hw, y - 0.5, CRANE_Z - flip * hw),
        new THREE.Vector3(CRANE_X + sgn * hw, y, CRANE_Z + flip * hw),
        0.014,
        craneMat
      );
    }
    flip = -flip;
  }
  const slew = new THREE.Group();
  slew.position.set(CRANE_X, MAST_TOP, CRANE_Z);
  world.add(slew);
  const turntable = solid(new THREE.CylinderGeometry(0.3, 0.3, 0.14, 24), steelMat, slew);
  turntable.position.y = 0.07;
  const cab = solid(new RoundedBoxGeometry(0.42, 0.36, 0.4, 1, 0.04), steelMat, slew);
  cab.position.set(0.45, 0.4, 0.34);
  const cabGlass = new THREE.Mesh(keep(new THREE.PlaneGeometry(0.3, 0.2)), glow(COL_SCAN, 0.8));
  cabGlass.position.set(0.45, 0.44, 0.545);
  slew.add(cabGlass);
  const beaconMat = keep(new THREE.MeshBasicMaterial({ color: COL_RED }));
  const beacon = new THREE.Mesh(lampGeo, beaconMat);
  const JIB_Y = 0.32;
  const JIB_H = 0.34;
  const chordLong = keep(new RoundedBoxGeometry(JIB_LEN, 0.055, 0.055, 1, 0.01));
  for (const z of [-0.13, 0.13]) {
    const c = solid(chordLong, craneMat, slew);
    c.position.set(JIB_LEN / 2, JIB_Y, z);
  }
  const topChord = solid(keep(new RoundedBoxGeometry(JIB_LEN - 0.3, 0.055, 0.055, 1, 0.01)), craneMat, slew);
  topChord.position.set((JIB_LEN - 0.3) / 2, JIB_Y + JIB_H, 0);
  const postGeo = keep(new RoundedBoxGeometry(0.04, JIB_H, 0.04, 1, 0.01));
  const braceGeo = keep(new RoundedBoxGeometry(0.04, 0.04, 0.26, 1, 0.01));
  for (let x = 0.2; x < JIB_LEN - 0.3; x += 0.45) {
    const p = solid(postGeo, craneMat, slew);
    p.position.set(x, JIB_Y + JIB_H / 2, 0);
    const br = solid(braceGeo, craneMat, slew);
    br.position.set(x, JIB_Y, 0);
  }
  const counter = solid(keep(new RoundedBoxGeometry(COUNTER_LEN, 0.06, 0.3, 1, 0.01)), craneMat, slew);
  counter.position.set(-COUNTER_LEN / 2, JIB_Y, 0);
  const weight = solid(new RoundedBoxGeometry(0.5, 0.5, 0.42, 1, 0.03), steelMat, slew);
  weight.position.set(-COUNTER_LEN + 0.25, JIB_Y - 0.28, 0);
  const APEX = 1.0;
  const apex = solid(keep(new RoundedBoxGeometry(0.07, APEX, 0.07, 1, 0.01)), craneMat, slew);
  apex.position.set(0, JIB_Y + APEX / 2, 0);
  beacon.position.set(0, JIB_Y + APEX + 0.06, 0);
  slew.add(beacon);
  const pendant = (x: number, y: number) =>
    rod(new THREE.Vector3(0, JIB_Y + APEX, 0), new THREE.Vector3(x, y, 0), 0.012, steelMat, slew);
  pendant(JIB_LEN * 0.62, JIB_Y + JIB_H);
  pendant(-COUNTER_LEN + 0.15, JIB_Y);
  const R = Math.hypot(BELTS[0].x1 - CRANE_X, 0 - CRANE_Z);
  const trolley = solid(new RoundedBoxGeometry(0.3, 0.16, 0.34, 1, 0.03), steelMat, slew);
  trolley.position.set(R, JIB_Y - 0.1, 0);
  const cable = new THREE.Mesh(keep(new THREE.CylinderGeometry(0.014, 0.014, 1, 6)), steelMat);
  slew.add(cable);
  const gripper = new THREE.Group();
  const plate = solid(new RoundedBoxGeometry(0.64, 0.1, 0.64, 1, 0.02), steelMat, gripper);
  plate.position.y = 0.05;
  for (const side of [-1, 1]) {
    const finger = solid(keep(new RoundedBoxGeometry(0.08, 0.34, 0.6, 1, 0.02)), steelMat, gripper);
    finger.position.set(side * 0.31, -0.17, 0);
  }
  slew.add(gripper);
  const headingTo = (x: number, z: number) => Math.atan2(-(z - CRANE_Z), x - CRANE_X);
  const thetaPick = headingTo(BELTS[0].x1, 0);
  const thetaDrop = headingTo(DROP_X, 0);
  const crane = { state: "idle" as CraneState, t: 0, theta: thetaPick, hookY: HOOK_UP, swing: 0, block: null as Block | null };

  // ---- sparks: tiny bits that fly off at every station ------------------
  const SPARK_N = 160;
  const sparks = new THREE.InstancedMesh(keep(new RoundedBoxGeometry(0.07, 0.07, 0.07, 1, 0.015)), keep(new THREE.MeshBasicMaterial()), SPARK_N);
  keep(sparks);
  sparks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  world.add(sparks);
  const sparkPool: Spark[] = Array.from({ length: SPARK_N }, () => ({ life: 0, pos: new THREE.Vector3(), vel: new THREE.Vector3(), color: new THREE.Color() }));
  let sparkSeed = 11;
  const burst = (x: number, y: number, z: number, tint: THREE.Color, count = SPARKS) => {
    let n = 0;
    for (const s of sparkPool) {
      if (s.life > 0) continue;
      sparkSeed++;
      s.life = SPARK_LIFE;
      s.pos.set(x + (seeded(sparkSeed) - 0.5) * 0.3, y + seeded(sparkSeed + 0.2) * 0.4, z + (seeded(sparkSeed + 0.4) - 0.5) * 0.7);
      s.vel.set((seeded(sparkSeed + 0.6) - 0.5) * 1.6, 1.4 + seeded(sparkSeed + 0.8) * 1.6, (seeded(sparkSeed + 0.1) - 0.5) * 1.6);
      s.color.copy(seeded(sparkSeed + 0.3) < 0.75 ? tint : limeC);
      if (++n >= count) break;
    }
  };

  // ---- rings: a pulse on the surface where a block is set down -----------
  const ringGeo = keep(new THREE.RingGeometry(0.22, 0.3, 32));
  const rings: Ring[] = Array.from({ length: 8 }, () => {
    const mat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0, side: THREE.DoubleSide, depthWrite: false }));
    const mesh = new THREE.Mesh(ringGeo, mat);
    mesh.rotation.x = -Math.PI / 2;
    mesh.visible = false;
    world.add(mesh);
    return { t: 1, mesh };
  });
  const pulse = (x: number, y: number, z: number) => {
    const r = rings.find((k) => k.t >= 1) ?? rings[0];
    r.t = 0;
    r.mesh.position.set(x, y + 0.004, z);
    r.mesh.visible = true;
  };

  // ---- the blocks -------------------------------------------------------
  const N = 28;
  const blocks = new THREE.InstancedMesh(
    keep(new RoundedBoxGeometry(CUBE, CUBE, CUBE, 3, 0.07)),
    keep(new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.05 })),
    N
  );
  keep(blocks);
  blocks.castShadow = true;
  blocks.receiveShadow = true;
  blocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  world.add(blocks);
  // the badge each block carries once its message is written: an envelope
  // on a lime plate, turned to the camera
  const badgeCanvas = document.createElement("canvas");
  badgeCanvas.width = 160;
  badgeCanvas.height = 80;
  const bctx = badgeCanvas.getContext("2d")!;
  bctx.fillStyle = COL_LIME;
  rrect(bctx, 2, 2, 156, 76, 18);
  bctx.fill();
  bctx.strokeStyle = COL_DARK;
  bctx.lineWidth = 7;
  bctx.lineJoin = "round";
  bctx.lineCap = "round";
  rrect(bctx, 42, 20, 76, 42, 6);
  bctx.stroke();
  bctx.beginPath();
  bctx.moveTo(45, 24);
  bctx.lineTo(80, 46);
  bctx.lineTo(115, 24);
  bctx.stroke();
  const badgeTex = keep(new THREE.CanvasTexture(badgeCanvas));
  badgeTex.colorSpace = THREE.SRGBColorSpace;
  badgeTex.anisotropy = 4;
  const tags = new THREE.InstancedMesh(
    keep(new THREE.PlaneGeometry(0.32, 0.16)),
    keep(new THREE.MeshBasicMaterial({ map: badgeTex, transparent: true, depthWrite: false })),
    N
  );
  keep(tags);
  tags.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  world.add(tags);

  const pool: Block[] = Array.from({ length: N }, () => ({
    phase: "free",
    repo: 0,
    d: 0,
    belt: 0,
    x: 0,
    passed: 0,
    tilt: new THREE.Euler(),
    size: 1,
    order: 0,
    reject: false,
    score: 0,
    color: new THREE.Color(),
    t: 0,
    from: new THREE.Vector3(),
  }));
  const dummy = new THREE.Object3D();
  for (let i = 0; i < N; i++) {
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    blocks.setMatrixAt(i, dummy.matrix);
    blocks.setColorAt(i, STAGE[0]);
    tags.setMatrixAt(i, dummy.matrix);
  }
  for (let i = 0; i < SPARK_N; i++) {
    sparks.setMatrixAt(i, dummy.matrix);
    sparks.setColorAt(i, STAGE[4]);
  }

  const lastBelt = BELTS.length - 1;
  // the shown block's centre, for a block of unit size
  const shownPos = (out: THREE.Vector3) => out.set(PEDESTAL.x, pedestalTop + CUBE / 2, 0);
  let shown: Block | null = null;
  const mergeX = (repo: number) => REPOS[repo].x + MERGE_DX;
  // where a block on its lane sits (x and z; y is the belt top)
  const lanePos = (c: Block, out: THREE.Vector3) => {
    const r = REPOS[c.repo];
    if (c.d <= LANE_LEN) return out.set(r.x, BELTS[0].top, REPO_Z + c.d);
    const k = Math.min(1, (c.d - LANE_LEN) / MERGE_LEN);
    return out.set(r.x + MERGE_DX * k, BELTS[0].top, LANE_END * (1 - k));
  };

  let seed = 1;
  let nextRepo = 0;
  const spawn = () => {
    // the towers take turns; a tower whose lane is busy skips its turn
    for (let k = 0; k < REPOS.length; k++) {
      const i = (nextRepo + k) % REPOS.length;
      if (pool.some((c) => c.phase === "lane" && c.repo === i)) continue;
      const c = pool.find((p) => p.phase === "free");
      if (!c) return;
      nextRepo = (i + 1) % REPOS.length;
      seed++;
      c.phase = "lane";
      c.repo = i;
      c.d = 0;
      c.belt = 0;
      c.x = REPOS[i].x;
      c.passed = 0;
      c.tilt.set((seeded(seed) - 0.5) * 1.1, (seeded(seed + 0.3) - 0.5) * 1.3, (seeded(seed + 0.6) - 0.5) * 1.1);
      c.size = 0.78 + seeded(seed + 0.9) * 0.4;
      c.order = 0;
      c.reject = seeded(seed + 1.2) < REJECT_RATE;
      c.score = c.reject ? 0.28 + seeded(seed + 1.5) * 0.27 : 0.7 + seeded(seed + 1.5) * 0.28;
      c.color.copy(STAGE[0]);
      return;
    }
  };

  const tmpPos = new THREE.Vector3();
  const tmpPos2 = new THREE.Vector3();
  // the block on the pedestal leaves (delivered) when the next one arrives
  const ship = () => {
    if (!shown) return;
    shown.phase = "pop";
    shown.t = 0;
    shownPos(tmpPos2);
    burst(tmpPos2.x, tmpPos2.y + 0.2, tmpPos2.z, limeC, 10);
    shown = null;
  };

  let clock = 0;
  const step = (dt: number) => {
    clock += dt;
    // down the lanes, then onto the belt once the merge point is clear
    for (const c of pool) {
      if (c.phase !== "lane") continue;
      let nd = c.d + SPEED * dt;
      if (c.d < LANE_LEN && nd >= LANE_LEN) {
        const mx = mergeX(c.repo);
        const busy = pool.some((o) => o !== c && o.phase === "track" && o.belt === 0 && o.x > mx - QUEUE_GAP - 0.2 && o.x < mx + QUEUE_GAP);
        if (busy) nd = LANE_LEN - 1e-4;
      }
      c.d = nd;
      if (c.d >= LANE_LEN + MERGE_LEN) {
        c.phase = "track";
        c.belt = 0;
        c.x = mergeX(c.repo);
      }
    }
    // along the belts, queueing behind each other and behind anyone merging
    for (let bi = 0; bi < BELTS.length; bi++) {
      const belt = BELTS[bi];
      const occupants = pool
        .filter((c) => (c.phase === "track" && c.belt === bi) || (bi === 0 && c.phase === "lane" && c.d >= LANE_LEN))
        .map((c) => ({ c, x: c.phase === "track" ? c.x : mergeX(c.repo) }))
        .sort((a, b) => b.x - a.x);
      let limit = belt.x1;
      for (const { c, x } of occupants) {
        if (c.phase !== "track") {
          limit = x - QUEUE_GAP;
          continue;
        }
        const prev = c.x;
        c.x = Math.min(c.x + SPEED * dt, limit);
        limit = c.x - QUEUE_GAP;
        for (const s of stations) {
          if (s.belt !== bi) continue;
          // the press starts down a little early so it lands as the block
          // arrives under it
          if (s.kind === "verify" && s.press.state === "idle" && prev < s.x - 0.16 && c.x >= s.x - 0.16) {
            s.press.state = "down";
            s.press.t = 0;
          }
          if (prev < s.x && c.x >= s.x) {
            s.flash = 1;
            c.passed = Math.min(c.passed + 1, stations.length);
            burst(s.x, belt.top + 0.3, 0, STAGE[c.passed]);
            if (s.kind === "verify") s.ok = 1;
            if (s.kind === "rank") {
              s.rows.unshift({ score: c.score, fresh: 1, reject: c.reject });
              if (s.rows.length > 4) s.rows.length = 4;
              s.boardDirty = true;
              if (c.reject) {
                c.phase = "drop";
                c.t = 0;
                c.from.set(c.x, belt.top + CUBE / 2, 0);
                s.paddle.state = "out";
                s.paddle.t = 0;
              }
            }
          }
        }
        if (c.phase !== "track") continue;
        c.order += (c.passed / stations.length - c.order) * Math.min(1, dt * SETTLE);
        c.color.lerp(STAGE[c.passed], Math.min(1, dt * SETTLE));
        if (bi === lastBelt && c.x >= belt.x1 - 1e-3) {
          ship();
          shown = c;
          c.phase = "jump";
          c.t = 0;
          c.from.set(belt.x1, belt.top + CUBE / 2, 0);
          c.order = 1;
        }
      }
    }
    // the reader fills the graph in as a block passes under its cone
    for (const s of stations) {
      if (s.kind !== "read") continue;
      let fill = 0;
      let near = false;
      for (const c of pool) {
        if (c.phase !== "track" || c.belt !== s.belt) continue;
        const k = (c.x - (s.x - 0.8)) / 1.3;
        if (k > 0 && k < 1.25) {
          near = true;
          fill = Math.max(fill, Math.min(1, k));
        }
      }
      s.fill = near ? fill : Math.max(0, s.fill - dt * 1.6);
    }
    // the crane
    {
      const pickY = BELTS[0].top + CUBE;
      const dropY = BELTS[1].top + CUBE;
      const cr = crane;
      switch (cr.state) {
        case "idle": {
          const waiting = pool.find((c) => c.phase === "track" && c.belt === 0 && c.x >= BELTS[0].x1 - 1e-3);
          if (waiting) {
            cr.state = "lower";
            cr.t = 0;
            cr.block = waiting;
          }
          break;
        }
        case "lower": {
          cr.t += dt / CRANE.lower;
          cr.hookY = THREE.MathUtils.lerp(HOOK_UP, pickY, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1 && cr.block) {
            cr.block.phase = "carried";
            cr.state = "lift";
            cr.t = 0;
          }
          break;
        }
        case "lift": {
          cr.t += dt / CRANE.lift;
          cr.hookY = THREE.MathUtils.lerp(pickY, HOOK_UP, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1) {
            cr.state = "slew";
            cr.t = 0;
          }
          break;
        }
        case "slew": {
          cr.t += dt / CRANE.slew;
          const k = Math.min(1, cr.t);
          cr.theta = THREE.MathUtils.lerp(thetaPick, thetaDrop, easeInOut(k));
          cr.swing = 0.2 * (1 - 2 * k) * Math.sign(thetaDrop - thetaPick);
          if (cr.t >= 1) {
            cr.state = "lower2";
            cr.t = 0;
          }
          break;
        }
        case "lower2": {
          cr.t += dt / CRANE.lower2;
          cr.swing *= Math.exp(-dt * 8);
          cr.hookY = THREE.MathUtils.lerp(HOOK_UP, dropY, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1 && cr.block) {
            cr.block.phase = "track";
            cr.block.belt = 1;
            cr.block.x = DROP_X;
            cr.block = null;
            pulse(DROP_X, BELTS[1].top, 0);
            cr.state = "lift2";
            cr.t = 0;
          }
          break;
        }
        case "lift2": {
          cr.t += dt / CRANE.lift2;
          cr.hookY = THREE.MathUtils.lerp(dropY, HOOK_UP, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1) {
            cr.state = "back";
            cr.t = 0;
          }
          break;
        }
        case "back": {
          cr.t += dt / CRANE.back;
          cr.theta = THREE.MathUtils.lerp(thetaDrop, thetaPick, easeInOut(Math.min(1, cr.t)));
          cr.swing = 0;
          if (cr.t >= 1) {
            cr.state = "idle";
            cr.t = 0;
          }
          break;
        }
      }
    }
    // the blocks in the air, on the pedestal, or falling
    for (const c of pool) {
      if (c.phase === "jump") {
        c.t += dt / JUMP_TIME;
        if (c.t >= 1) {
          c.t = 1;
          c.phase = "stack";
          shownPos(tmpPos2);
          pulse(tmpPos2.x, tmpPos2.y - CUBE / 2, tmpPos2.z);
          burst(tmpPos2.x, tmpPos2.y + 0.1, tmpPos2.z, STAGE[4], 10);
        }
      } else if (c.phase === "pop") {
        c.t += dt / POP_TIME;
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "drop") {
        c.t += dt / DROP_TIME;
        c.color.lerp(COL_REJECT, Math.min(1, dt * 4));
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "carried") {
        c.order += (c.passed / stations.length - c.order) * Math.min(1, dt * SETTLE);
      }
    }
    // the stations' own moving parts
    for (const s of stations) {
      s.flash *= Math.exp(-dt * 5.5);
      // the scan line sweeps slowly, and races while a block goes through
      s.sweep = (s.sweep + dt * (0.45 + s.flash * 2.2)) % 1;
      const p = s.press;
      if (p.state === "down") {
        p.t += dt / PRESS.down;
        if (p.t >= 1) {
          p.state = "hold";
          p.t = 0;
        }
      } else if (p.state === "hold") {
        p.t += dt / PRESS.hold;
        if (p.t >= 1) {
          p.state = "up";
          p.t = 0;
        }
      } else if (p.state === "up") {
        p.t += dt / PRESS.up;
        if (p.t >= 1) {
          p.state = "idle";
          p.t = 0;
        }
      }
      s.ok = Math.max(0, s.ok - dt / 1.6);
      const pd = s.paddle;
      if (pd.state === "out") {
        pd.t += dt / PADDLE.out;
        if (pd.t >= 1) {
          pd.state = "back";
          pd.t = 0;
        }
      } else if (pd.state === "back") {
        pd.t += dt / PADDLE.back;
        if (pd.t >= 1) {
          pd.state = "idle";
          pd.t = 0;
        }
      }
      if (s.rows.length) {
        for (const r of s.rows) {
          if (r.fresh > 0) {
            r.fresh = Math.max(0, r.fresh - dt / 1.1);
            s.boardDirty = true;
          }
        }
        // the rejects fall off the board once their row has faded
        const n = s.rows.length;
        s.rows = s.rows.filter((r) => !(r.reject && r.fresh <= 0));
        if (s.rows.length !== n) s.boardDirty = true;
      }
    }
    // the brief types itself, holds, clears, moves on to the next role
    {
      const ty = typing;
      const role = ROLES[ty.role];
      ty.t += dt;
      if (ty.mode === "type") {
        ty.chars = Math.min(role.length, Math.floor(ty.t / 0.07));
        if (ty.chars >= role.length && ty.t > role.length * 0.07 + 0.2) {
          ty.mode = "hold";
          ty.t = 0;
        }
      } else if (ty.mode === "hold") {
        if (ty.t > 2.8) {
          ty.mode = "clear";
          ty.t = 0;
        }
      } else {
        ty.chars = Math.max(0, role.length - Math.floor(ty.t / 0.025));
        if (ty.chars === 0 && ty.t > 0.4) {
          ty.role = (ty.role + 1) % ROLES.length;
          ty.mode = "type";
          ty.t = 0;
        }
      }
    }
    for (const b of beltLines) b.tex.offset.x -= (SPEED * dt) / DASH_PERIOD;
    for (const b of beltTexes) {
      if (b.vertical) b.tex.offset.y += (SPEED * dt) / RIB_PERIOD;
      else b.tex.offset.x -= (SPEED * dt) / RIB_PERIOD;
    }
    for (const l of laneLines) l.tex.offset.y += (SPEED * dt) / DASH_PERIOD;
    for (const s of sparkPool) {
      if (s.life <= 0) continue;
      s.life -= dt;
      s.vel.y -= 6 * dt;
      s.pos.addScaledVector(s.vel, dt);
    }
    for (const r of rings) if (r.t < 1) r.t = Math.min(1, r.t + dt / 0.55);
  };

  const tmpQuat = new THREE.Quaternion();
  const straight = new THREE.Quaternion();
  const tilted = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const hookWorld = () => tmpPos.set(CRANE_X + R * Math.cos(crane.theta), crane.hookY, CRANE_Z - R * Math.sin(crane.theta));
  const draw = () => {
    for (let i = 0; i < N; i++) {
      const c = pool[i];
      let tagged = false;
      if (c.phase === "free") {
        dummy.scale.setScalar(0);
        dummy.position.set(0, -10, 0);
        dummy.quaternion.identity();
      } else {
        const s = THREE.MathUtils.lerp(c.size, 1, c.order);
        tilted.setFromEuler(c.tilt);
        tmpQuat.copy(tilted).slerp(straight, c.order);
        tagged = c.passed >= stations.length;
        // the rough ones ride a little high, tilted, until the stations
        // straighten them
        const lift = (1 - c.order) * 0.09;
        if (c.phase === "lane") {
          lanePos(c, tmpPos);
          dummy.position.set(tmpPos.x, tmpPos.y + (CUBE * s) / 2 + lift, tmpPos.z);
          dummy.quaternion.copy(tmpQuat);
          dummy.scale.setScalar(s);
        } else if (c.phase === "track") {
          dummy.position.set(c.x, BELTS[c.belt].top + (CUBE * s) / 2 + lift, 0);
          dummy.quaternion.copy(tmpQuat);
          dummy.scale.setScalar(s);
        } else if (c.phase === "carried") {
          hookWorld();
          dummy.position.set(tmpPos.x, tmpPos.y - (CUBE * s) / 2, tmpPos.z);
          euler.set(crane.swing, crane.theta, 0, "YXZ");
          dummy.quaternion.setFromEuler(euler).multiply(tmpQuat);
          dummy.scale.setScalar(s);
        } else if (c.phase === "jump") {
          const k = easeOut(c.t);
          shownPos(tmpPos2);
          tmpPos.copy(c.from).lerp(tmpPos2, k);
          tmpPos.y += Math.sin(c.t * Math.PI) * 0.9;
          dummy.position.copy(tmpPos);
          dummy.quaternion.setFromEuler(euler.set(0, k * 0.4, 0));
          dummy.scale.setScalar(1);
        } else if (c.phase === "stack") {
          // shown on the pedestal, turning slowly
          shownPos(dummy.position);
          dummy.quaternion.setFromEuler(euler.set(0, 0.4 + clock * 0.5, 0));
          dummy.scale.setScalar(1);
        } else if (c.phase === "drop") {
          // pushed toward the front edge while the belt carries it on,
          // tips over the edge, falls into the bin
          tagged = false;
          const t = c.t;
          const slide = Math.min(1, t / 0.7);
          const z = THREE.MathUtils.lerp(0, BIN.z, slide * slide);
          const fall = Math.max(0, t - 0.64);
          const y = c.from.y - fall * fall * 12;
          dummy.position.set(c.from.x + Math.min(DROP_DX, t * DROP_TIME * SPEED), y, z);
          euler.set(fall * 3.2, 0, -slide * 0.25);
          dummy.quaternion.setFromEuler(euler);
          // gone once it's inside the bin
          dummy.scale.setScalar(y < FLOOR + BIN.h - 0.15 ? 0 : 1);
        } else {
          // delivered: lifts off the pedestal and fades out
          tagged = false;
          shownPos(dummy.position);
          dummy.position.y += easeOut(c.t) * 0.6;
          dummy.quaternion.setFromEuler(euler.set(0, 0.4 + clock * 0.5, 0));
          dummy.scale.setScalar(1 - easeOut(c.t));
        }
      }
      dummy.updateMatrix();
      blocks.setMatrixAt(i, dummy.matrix);
      blocks.setColorAt(i, c.color);
      // the envelope badge floats over the block, bobbing
      if (tagged) {
        const s = dummy.scale.x;
        tmpPos.set(0, (CUBE * s) / 2 + 0.2 + Math.sin(clock * 3 + i) * 0.025, 0).add(dummy.position);
        dummy.position.copy(tmpPos);
        dummy.quaternion.setFromEuler(euler.set(0, FACE_CAM, 0));
        dummy.scale.setScalar(1);
        dummy.updateMatrix();
      } else {
        dummy.scale.setScalar(0);
        dummy.position.set(0, -10, 0);
        dummy.updateMatrix();
      }
      tags.setMatrixAt(i, dummy.matrix);
    }
    blocks.instanceMatrix.needsUpdate = true;
    if (blocks.instanceColor) blocks.instanceColor.needsUpdate = true;
    tags.instanceMatrix.needsUpdate = true;
    // sparks
    for (let i = 0; i < SPARK_N; i++) {
      const s = sparkPool[i];
      if (s.life <= 0) {
        dummy.scale.setScalar(0);
        dummy.position.set(0, -10, 0);
      } else {
        const k = s.life / SPARK_LIFE;
        dummy.position.copy(s.pos);
        dummy.scale.setScalar(0.5 + k * 0.9);
        euler.set(s.pos.x * 3, s.pos.y * 2, 0);
        dummy.quaternion.setFromEuler(euler);
      }
      dummy.updateMatrix();
      sparks.setMatrixAt(i, dummy.matrix);
      sparks.setColorAt(i, s.color);
    }
    sparks.instanceMatrix.needsUpdate = true;
    if (sparks.instanceColor) sparks.instanceColor.needsUpdate = true;
    // rings
    for (const r of rings) {
      if (r.t >= 1) {
        r.mesh.visible = false;
        continue;
      }
      const k = easeOut(r.t);
      r.mesh.scale.setScalar(0.4 + k * 2.2);
      r.mesh.material.opacity = 0.7 * (1 - k);
    }
    // the stations
    for (const s of stations) {
      s.lampMat.color.copy(tmpColor.copy(lampDim).lerp(lampOn, 0.3 + s.flash * 0.7 + 0.15 * Math.sin(clock * 3 + s.x)));
      if (s.kind === "scan") {
        s.paneMat!.opacity = 0.1 + s.flash * 0.4;
        s.line!.position.y = BAR / 2 + (GATE_H - BAR) * (1 - s.sweep);
        s.lineMat!.opacity = 0.35 + s.flash * 0.6;
      } else if (s.kind === "read") {
        s.coneMat!.opacity = 0.07 + s.fill * 0.2 + s.flash * 0.1;
        if (Math.abs(s.fill - s.drawnFill) > 0.004) {
          drawGrid(s.grid!, s.fill);
          s.drawnFill = s.fill;
        }
      } else if (s.kind === "verify") {
        const p = s.press;
        const rest = GATE_H - BAR - 0.06;
        const down = CUBE * 1.1 + 0.12;
        let k = 0;
        if (p.state === "down") k = easeInOut(Math.min(1, p.t));
        else if (p.state === "hold") k = 1;
        else if (p.state === "up") k = 1 - easeInOut(Math.min(1, p.t));
        const headY = THREE.MathUtils.lerp(rest, down, k);
        s.head!.position.y = headY;
        const topY = GATE_H - BAR / 2;
        s.rod!.position.y = (topY + headY + 0.06) / 2;
        s.rod!.scale.y = Math.max(0.01, topY - headY - 0.06);
        if (Math.abs(s.ok - s.drawnOk) > 0.004) {
          drawEnvelope(s.env!, s.ok);
          s.drawnOk = s.ok;
        }
      } else {
        const pd = s.paddle;
        let k = 0;
        if (pd.state === "out") k = easeInOut(Math.min(1, pd.t));
        else if (pd.state === "back") k = 1 - easeInOut(Math.min(1, pd.t));
        s.arm!.rotation.y = PADDLE.angle * k;
        if (s.boardDirty) {
          drawBoard(s.board!, s.rows);
          s.boardDirty = false;
        }
      }
    }
    // the towers: squares and lights blink, the radar sweeps, the antenna
    for (const b of blinks) {
      const on = Math.sin(clock * b.rate + b.phase) > 0.25;
      b.mat.color.copy(on ? b.on : b.off);
    }
    radarSweep.rotation.z = -clock * 1.3;
    (antennaLamp.material as THREE.MeshBasicMaterial).color.setStyle(Math.sin(clock * 2.6) > 0.3 ? COL_LIME : "#55602a");
    // the brief: the typed text and a blinking cursor
    {
      const text = ROLES[typing.role].slice(0, typing.chars);
      const cursorOn = typing.mode !== "hold" || Math.sin(clock * 6) > 0;
      const key = text + (cursorOn ? "|" : "");
      if (key !== typing.drawn) {
        drawBrief(brief, text, cursorOn);
        typing.drawn = key;
      }
    }
    // the rollers turn with the belts
    for (const r of rollers) r.rotation.y = -clock * (SPEED / 0.13);
    // the crane: the jib turns, the cable pays out, the gripper swings
    slew.rotation.y = crane.theta;
    const hookLocal = crane.hookY - MAST_TOP;
    const top = JIB_Y - 0.18;
    cable.position.set(R, (top + hookLocal) / 2, 0);
    cable.scale.y = Math.max(0.01, top - hookLocal);
    gripper.position.set(R, hookLocal, 0);
    gripper.rotation.x = crane.swing + (crane.state === "idle" ? Math.sin(clock * 1.4) * 0.03 : 0);
    beaconMat.color.setStyle(Math.sin(clock * 4) > 0 ? COL_RED : "#7a2c2c");
  };

  // the lamps, screens, dashes, sparks and badges are unlit: keep them out
  // of the tone mapping so they stay as vivid as the page's teal
  world.traverse((o) => {
    const mat = (o as THREE.Mesh).material as THREE.Material | undefined;
    if (mat instanceof THREE.MeshBasicMaterial) mat.toneMapped = false;
  });

  // ---- labels: the site's [ tags ], pinned over the towers and the
  // pedestal. The four stations are named by the step cards in a row under
  // the machine instead, each tied to its station by a leader line drawn
  // below ----------------------------------------------------------------------
  const labelDefs: { text: string; at: THREE.Vector3 }[] = [
    { text: "github repositories", at: new THREE.Vector3(REPOS[1].x, repoTop(0) + 0.85, REPO_Z) },
    { text: "the one who fits", at: new THREE.Vector3(PEDESTAL.x, pedestalTop + CUBE + 1.1, 0) },
  ];
  const labels = labelDefs.map((d) => {
    const el = document.createElement("span");
    el.className = "tag automation-label";
    el.textContent = d.text;
    container.appendChild(el);
    return { el, at: d.at };
  });
  // the leaders: one dashed line per station, from the step card that
  // describes it (a sibling of the canvas, laid out by the page's CSS) to the
  // station itself, with a dot at the station end
  const SVG_NS = "http://www.w3.org/2000/svg";
  const leaders = document.createElementNS(SVG_NS, "svg");
  leaders.setAttribute("class", "automation-leaders");
  container.appendChild(leaders);
  const leaderParts = stations.map(() => {
    const line = document.createElementNS(SVG_NS, "line");
    const dot = document.createElementNS(SVG_NS, "circle");
    dot.setAttribute("r", "3.2");
    leaders.append(line, dot);
    return { line, dot };
  });
  const root = container.parentElement ?? container;
  let cards: (HTMLElement | null)[] = [];
  let callouts = false; // the cards float around the machine (not stacked under it)
  const findCards = () => {
    cards = stations.map((_, i) => root.querySelector<HTMLElement>(`[data-step="${i + 1}"]`));
    callouts = cards.every((c) => c && getComputedStyle(c).position === "absolute");
    leaders.style.display = callouts ? "" : "none";
  };
  const project = (v: THREE.Vector3, w: number, h: number) => {
    tmpPos.copy(v).applyMatrix4(world.matrixWorld).project(camera);
    return { x: ((tmpPos.x + 1) / 2) * w, y: ((1 - tmpPos.y) / 2) * h };
  };
  const placeLabels = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    // reads first, writes after, so the browser lays out once per frame
    const rootRect = callouts ? container.getBoundingClientRect() : null;
    const cardRects = callouts ? cards.map((c) => c!.getBoundingClientRect()) : [];
    for (const l of labels) {
      const p = project(l.at, w, h);
      l.el.style.transform = `translate(-50%, -100%) translate(${p.x.toFixed(1)}px, ${p.y.toFixed(1)}px)`;
    }
    if (!callouts || !rootRect) return;
    stations.forEach((s, i) => {
      const r = cardRects[i];
      const { line, dot } = leaderParts[i];
      const cx = r.left - rootRect.left + r.width / 2;
      const cy = r.top - rootRect.top + r.height / 2;
      const top = project(s.anchorTop, w, h);
      const a = cy < top.y ? top : project(s.anchorFoot, w, h);
      // leave the card along the ray from its centre to the anchor, a little
      // outside its box
      const dx = a.x - cx;
      const dy = a.y - cy;
      const hw = r.width / 2 + 8;
      const hh = r.height / 2 + 8;
      const k = Math.min(hw / Math.max(1e-6, Math.abs(dx)), hh / Math.max(1e-6, Math.abs(dy)));
      line.setAttribute("x1", (cx + dx * k).toFixed(1));
      line.setAttribute("y1", (cy + dy * k).toFixed(1));
      line.setAttribute("x2", a.x.toFixed(1));
      line.setAttribute("y2", a.y.toFixed(1));
      dot.setAttribute("cx", a.x.toFixed(1));
      dot.setAttribute("cy", a.y.toFixed(1));
    });
  };

  // ---- pointer parallax ----------------------------------------------
  // under the pointer the camera slides a little sideways and up or down,
  // never turns: the lines must stay square to the picture's
  let targetPX = 0;
  let targetPY = 0;
  let panX = 0;
  let panY = 0;
  const onPointerMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    targetPX = ((e.clientX - r.left) / r.width - 0.5) * -0.5;
    targetPY = ((e.clientY - r.top) / r.height - 0.5) * 0.25;
  };
  const onPointerLeave = () => {
    targetPX = 0;
    targetPY = 0;
  };
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerleave", onPointerLeave);

  // ---- sizing: the camera backs off until the machine's extreme points
  // fit a box in the frame that leaves the bottom quarter to the step cards
  // and the top to the picture's hills --------------------------------------
  const extremes: number[][] = [
    [BELTS[0].slab0 - 0.2, FLOOR, TRACK_W / 2],
    [BELTS[0].slab0 - 0.2, FLOOR, -TRACK_W / 2],
    [REPOS[0].x - REPOS[0].w / 2 - 0.1, FLOOR, REPO_Z - REPO_D / 2],
    [REPOS[0].x - REPOS[0].w / 2 - 0.1, repoTop(0) + 0.3, REPO_Z - REPO_D / 2],
    [REPOS[1].x, repoTop(0) + 1.3, REPO_Z],
    [REPOS[2].x + 0.6, repoTop(2) + 1.0, REPO_Z - REPO_D / 2],
    [PODIUM.x1 + 0.1, FLOOR, PODIUM.w / 2],
    [PODIUM.x1 + 0.1, FLOOR, -PODIUM.w / 2],
    [PODIUM.x1 + 0.1, pedestalTop + CUBE, -PODIUM.w / 2],
    [PEDESTAL.x, pedestalTop + CUBE + 1.55, 0],
    [BIN.x, FLOOR, BIN.z + BIN.w / 2 + 0.1],
    [CRANE_X, MAST_TOP + JIB_Y + APEX + 0.3, CRANE_Z],
    ...stations.map((s) => [s.x, s.labelY + 0.5, 0]),
  ];
  for (const th of [thetaPick, thetaDrop, (thetaPick + thetaDrop) / 2]) {
    extremes.push([CRANE_X + JIB_LEN * Math.cos(th), MAST_TOP + JIB_Y + JIB_H, CRANE_Z - JIB_LEN * Math.sin(th)]);
    extremes.push([CRANE_X - COUNTER_LEN * Math.cos(th), MAST_TOP + JIB_Y, CRANE_Z + COUNTER_LEN * Math.sin(th)]);
  }
  const FRAME = { x0: -0.95, x1: 0.95, y0: -0.52, y1: 0.72 }; // in clip space
  const camRight = new THREE.Vector3();
  const camUp = new THREE.Vector3();
  const fitCamera = () => {
    const halfTan = Math.tan(THREE.MathUtils.degToRad(CAM_FOV / 2));
    for (let it = 0; it < 10; it++) {
      camera.position.copy(target).addScaledVector(CAM_DIR, camDist);
      camera.lookAt(target);
      camera.updateProjectionMatrix();
      camera.updateMatrixWorld();
      let minX = Infinity;
      let maxX = -Infinity;
      let minY = Infinity;
      let maxY = -Infinity;
      for (const [x, y, z] of extremes) {
        tmpPos.set(x, y, z).project(camera);
        minX = Math.min(minX, tmpPos.x);
        maxX = Math.max(maxX, tmpPos.x);
        minY = Math.min(minY, tmpPos.y);
        maxY = Math.max(maxY, tmpPos.y);
      }
      const scale = Math.max((maxX - minX) / (FRAME.x1 - FRAME.x0), (maxY - minY) / (FRAME.y1 - FRAME.y0));
      // slide the target so the machine sits centred in its box, then back
      // off (or close in) by the overshoot; both converge in a few rounds
      camRight.setFromMatrixColumn(camera.matrixWorld, 0);
      camUp.setFromMatrixColumn(camera.matrixWorld, 1);
      const dx = ((minX + maxX) / 2 - (FRAME.x0 + FRAME.x1) / 2) * camDist * halfTan * camera.aspect;
      // only sideways: the height is the eye's, the vertical placement is
      // the lens shift's
      target.addScaledVector(camRight, dx);
      camDist *= scale;
      if (Math.abs(scale - 1) < 0.002 && Math.abs(dx) < 0.02) break;
    }
    camera.position.copy(target).addScaledVector(CAM_DIR, camDist);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  };
  const render = () => {
    world.updateMatrixWorld();
    placeLabels();
    renderer.render(scene, camera);
  };
  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    findCards();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    // the lens shift: the canvas shows the lower part of a taller image whose
    // middle (the horizon) lands where the picture's eye level is
    const frac = horizonFrac();
    const full = 2 * h * Math.max(frac, 1 - frac);
    camera.setViewOffset(w, full, 0, full / 2 - frac * h, w, h);
    fitCamera();
    if (reduced) render();
  };
  // the picture's eye level, as a share of the canvas height from its top
  const horizonFrac = () => {
    const band = container.closest(".how-band");
    if (!band) return 0.3;
    const b = band.getBoundingClientRect();
    const c = container.getBoundingClientRect();
    if (!b.height || !c.height) return 0.3;
    const scale = Math.max(b.width / PIC.w, b.height / PIC.h);
    const shownH = PIC.h * scale;
    const top = b.top + (b.height - shownH) * PIC.position;
    const horizon = top + shownH * PIC.horizon;
    return THREE.MathUtils.clamp((horizon - c.top) / c.height, 0.05, 0.6);
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // ---- loop -----------------------------------------------------------
  let spawnClock = 0;
  const advance = (dt: number) => {
    spawnClock += dt;
    while (spawnClock >= SPAWN_EVERY) {
      spawnClock -= SPAWN_EVERY;
      spawn();
    }
    step(dt);
  };
  // run the machine for a while before the first frame so it's already busy
  for (let i = 0; i < 60 / 0.1; i++) advance(0.1);
  for (const s of stations) s.flash = 0;
  for (const s of sparkPool) s.life = 0;
  for (const r of rings) r.t = 1;
  draw();

  let raf = 0;
  let visible = true;
  let last = performance.now();
  const frame = (t: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((t - last) / 1000, 0.1);
    last = t;
    advance(dt);
    panX += (targetPX - panX) * Math.min(1, dt * 4);
    panY += (targetPY - panY) * Math.min(1, dt * 4);
    camera.position.set(target.x + panX, target.y + panY, target.z + camDist);
    draw();
    render();
  };
  const start = () => {
    if (!raf && visible && !reduced) {
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  });
  io.observe(container);

  if (reduced) render();
  else start();

  return () => {
    stop();
    io.disconnect();
    ro.disconnect();
    container.removeEventListener("pointermove", onPointerMove);
    container.removeEventListener("pointerleave", onPointerLeave);
    for (const l of labels) container.removeChild(l.el);
    container.removeChild(leaders);
    envTex.dispose();
    for (const d of disposables) d.dispose();
    container.removeChild(canvas);
  };
}
