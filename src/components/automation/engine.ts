import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// The landing's "how it works", as a machine read left to right. Rough,
// tumbling blocks come out of a dark "github" block (blinking lights, a
// radar sweeping on its roof) and ride two belts laid out as terraces.
// Each of the four steps is a scanner gate the belt runs through: a thin
// teal frame with a glass pane, a scan line sweeping it, a light on top,
// and a burst of sparks when a block crosses, straightened and tinted one
// step. [ 1 ] and [ 2 ] on the lower belt, [ 3 ] and [ 4 ] on the upper
// one. Between the belts a tower crane lifts every block from the end of
// the lower belt onto the start of the upper one. At rank, a share of the
// blocks is tipped off the front edge into a bin; the rest stack up on the
// top platform as the shortlist. No hands anywhere. Lives in its own
// chunk: the AutomationScene wrapper dynamic-imports this module once
// mounted.

// ---- layout (scene units) ------------------------------------------------
const CUBE = 0.5;
const TRACK_W = 1.9;
const FLOOR = -0.15; // the terraces stand on this
const RISE = 1.2; // the upper belt is this much higher
const SOURCE_FACE = -7.9; // the dark block's +x face, where cubes appear
const SLOT_OFF = [-0.6, 0, 0.6]; // z offsets of the three stack columns
const SLOT_ROWS = [0, 0.58, 1.16]; // y above the platform top
const SLOTS = SLOT_OFF.length * SLOT_ROWS.length;
const QUEUE_GAP = 0.66; // blocks waiting for the crane stand this far apart

// the belts: the top surface's height, the slab's x extent, and where the
// blocks ride (from where they're put down to where they're picked up)
type Belt = { top: number; slab0: number; slab1: number; x0: number; x1: number };
const BELTS: Belt[] = [
  { top: FLOOR + 0.3, slab0: -10.0, slab1: -0.6, x0: SOURCE_FACE - 0.9, x1: -1.2 },
  { top: FLOOR + 0.3 + RISE, slab0: 0.2, slab1: 8.0, x0: 0.8, x1: 7.6 },
];
const STACK_X = 9.6; // the platform, level with the upper belt
const PLATFORM = { x0: 8.5, x1: 10.7 };
// the four gates: which belt, where on it
const STEP_DEFS = [
  { belt: 0, x: -5.9, label: "scan" },
  { belt: 0, x: -3.3, label: "read" },
  { belt: 1, x: 2.9, label: "enrich" },
  { belt: 1, x: 5.5, label: "rank" },
];
const GATE_H = 1.55;
const GATE_W = TRACK_W + 0.2;
const BAR = 0.075;
// the crane: mast behind the belts, between the two; its jib reaches the
// end of the lower belt and the start of the upper one at the same radius
const CRANE_X = -0.2;
const CRANE_Z = -2.3;
const MAST_TOP = 4.1;
const JIB_LEN = 3.7;
const COUNTER_LEN = 1.4;
// the bin the rejected blocks fall into, in front of the rank gate
const BIN = { x: STEP_DEFS[3].x + 0.5, z: TRACK_W / 2 + 0.72, w: 0.95, h: 0.75 };

// ---- motion ---------------------------------------------------------------
const SPEED = 1.0; // units / s along a belt
const SPAWN_EVERY = 2.4; // s
const JUMP_TIME = 0.55; // s, belt end -> stack slot
const POP_TIME = 0.28; // s, a full stack clears
const DROP_TIME = 1.1; // s, a rejected block tips into the bin
const REJECT_RATE = 0.3; // share of blocks the rank gate turns away
const SETTLE = 5; // 1/s, how fast a block straightens after a gate
const CRANE = { lower: 0.32, lift: 0.28, slew: 0.6, lower2: 0.26, lift2: 0.22, back: 0.55 };
const HOOK_UP = 3.3; // the gripper's underside at rest
const SPARKS = 14; // per gate crossing
const SPARK_LIFE = 0.65; // s

// ---- palette --------------------------------------------------------------
const STAGE = ["#2a3139", "#56656f", "#0f766e", "#129787", "#2ec4ad"].map((c) => new THREE.Color(c));
const COL_TRACK = "#e2e8ed";
const COL_SOURCE = "#0f151d";
const COL_GATE = "#0f766e";
const COL_SCAN = "#2ec4ad";
const COL_STEEL = "#2a3139";
const COL_CRANE = "#9db03a"; // the gem's chartreuse, dark enough on white
const COL_LIME = "#c6d36a";

type Phase = "free" | "track" | "carried" | "jump" | "stack" | "pop" | "drop";
type Cube = {
  phase: Phase;
  belt: number;
  x: number;
  passed: number;
  tilt: THREE.Euler;
  size: number;
  order: number; // 0 = as it arrived, 1 = straight and true
  reject: boolean;
  color: THREE.Color;
  slot: number;
  t: number;
  from: THREE.Vector3;
};
type CraneState = "idle" | "lower" | "lift" | "slew" | "lower2" | "lift2" | "back";
type Spark = { life: number; pos: THREE.Vector3; vel: THREE.Vector3; color: THREE.Color };
type Ring = { t: number; mesh: THREE.Mesh<THREE.RingGeometry, THREE.MeshBasicMaterial> };

function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => t * t * (3 - 2 * t);

export function initAutomation(container: HTMLElement): () => void {
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  } catch {
    return () => {};
  }
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement;
  container.appendChild(canvas);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const world = new THREE.Group();
  scene.add(world);

  // orthographic camera high and to the front-left, turned only 30° off the
  // front: the belts run to the right with a gentle climb, depth still reads
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 200);
  camera.position.set(-23, 26.5, 40);
  camera.lookAt(0, 0, 0);
  camera.updateMatrixWorld();

  // ---- light ----------------------------------------------------------
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfd9e0, 1.15));
  const sun = new THREE.DirectionalLight(0xffffff, 1.5);
  sun.position.set(-7, 13, 9);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -15;
  sun.shadow.camera.right = 15;
  sun.shadow.camera.top = 15;
  sun.shadow.camera.bottom = -15;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 50;
  sun.shadow.bias = -0.0005;
  sun.shadow.normalBias = 0.02;
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

  // ---- the floor shadow: the machine casts onto the page --------------
  const floor = new THREE.Mesh(keep(new THREE.PlaneGeometry(60, 60)), keep(new THREE.ShadowMaterial({ opacity: 0.2 })));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = FLOOR - 0.01;
  floor.receiveShadow = true;
  world.add(floor);

  // ---- the terraces and the platform ----------------------------------
  const slabMat = keep(new THREE.MeshStandardMaterial({ color: COL_TRACK, roughness: 1, metalness: 0 }));
  const steelMat = keep(new THREE.MeshStandardMaterial({ color: COL_STEEL, roughness: 0.5, metalness: 0.2 }));
  const terrace = (x0: number, x1: number, top: number, w = TRACK_W) => {
    const h = top - FLOOR;
    const m = solid(new RoundedBoxGeometry(x1 - x0, h, w, 2, 0.05), slabMat);
    m.position.set((x0 + x1) / 2, FLOOR + h / 2, 0);
  };
  for (const b of BELTS) terrace(b.slab0, b.slab1, b.top);
  terrace(PLATFORM.x0, PLATFORM.x1, BELTS[1].top, 2.2);

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
    const r = solid(rollerGeo, rollerMat, holder);
    rollers.push(r);
  };
  for (const b of BELTS) {
    roller(b.slab1 + 0.08, b.top);
    roller(b.slab0 - 0.08, b.top);
  }

  // ---- the source: the dark block the raw cubes come out of, with a row
  // of blinking lights and a radar sweeping on its roof ------------------
  const SRC_H = 2.1;
  const source = solid(
    new RoundedBoxGeometry(1.7, SRC_H, TRACK_W + 0.1, 2, 0.06),
    keep(new THREE.MeshStandardMaterial({ color: COL_SOURCE, roughness: 0.55, metalness: 0.1 }))
  );
  const srcX = SOURCE_FACE - 0.85;
  const srcTop = BELTS[0].top + SRC_H;
  source.position.set(srcX, BELTS[0].top + SRC_H / 2, 0);
  const srcFront = (TRACK_W + 0.1) / 2 + 0.004;
  const sourceSign = new THREE.Mesh(keep(new THREE.PlaneGeometry(1.5, 0.375)), stencil("[ github ]", 56, 512, 128, COL_SCAN));
  sourceSign.position.set(srcX, BELTS[0].top + 1.35, srcFront);
  world.add(sourceSign);
  const ledGeo = keep(new THREE.PlaneGeometry(0.09, 0.09));
  const LED_COLORS = [COL_SCAN, COL_SCAN, COL_LIME, COL_SCAN, "#6cb6ff", COL_SCAN];
  const leds = LED_COLORS.map((c, i) => {
    const mat = keep(new THREE.MeshBasicMaterial({ color: c }));
    const m = new THREE.Mesh(ledGeo, mat);
    m.position.set(srcX - 0.5 + (i % 3) * 0.2, BELTS[0].top + 1.85 - Math.floor(i / 3) * 0.17, srcFront);
    world.add(m);
    return { mat, on: new THREE.Color(c), off: new THREE.Color(c).multiplyScalar(0.22), rate: 1.6 + seeded(i + 3) * 3, phase: seeded(i + 9) * 6.3 };
  });
  const radarRing = new THREE.Mesh(keep(new THREE.RingGeometry(0.5, 0.54, 40)), glow(COL_SCAN, 0.9));
  radarRing.rotation.x = -Math.PI / 2;
  radarRing.position.set(srcX, srcTop + 0.004, 0);
  world.add(radarRing);
  const radarSweep = new THREE.Mesh(keep(new THREE.CircleGeometry(0.5, 24, 0, Math.PI / 3)), glow(COL_SCAN, 0.45));
  radarSweep.rotation.x = -Math.PI / 2;
  radarSweep.position.set(srcX, srcTop + 0.006, 0);
  world.add(radarSweep);
  const radarDot = new THREE.Mesh(keep(new THREE.SphereGeometry(0.05, 10, 10)), glow(COL_SCAN));
  radarDot.position.set(srcX, srcTop + 0.03, 0);
  world.add(radarDot);

  // ---- the belts: dashed teal lines marching at the cubes' speed --------
  const dashCanvas = document.createElement("canvas");
  dashCanvas.width = 64;
  dashCanvas.height = 8;
  const dctx = dashCanvas.getContext("2d")!;
  dctx.fillStyle = COL_GATE;
  dctx.fillRect(0, 0, 36, 8);
  const DASH_PERIOD = 0.55;
  const belts = BELTS.map((bd) => {
    const len = bd.x1 - bd.x0 + 0.2;
    const tex = keep(new THREE.CanvasTexture(dashCanvas));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.magFilter = THREE.NearestFilter;
    tex.repeat.set(len / DASH_PERIOD, 1);
    const belt = new THREE.Mesh(
      keep(new THREE.PlaneGeometry(len, 0.05)),
      keep(new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: 0.45, depthWrite: false }))
    );
    belt.rotation.x = -Math.PI / 2;
    belt.position.set((bd.x0 + bd.x1) / 2, bd.top + 0.003, 0);
    world.add(belt);
    return { tex };
  });

  // ---- the gates: a thin teal frame across the belt with a glass pane,
  // a scan line sweeping it, a light on top -------------------------------
  const gateMat = keep(
    new THREE.MeshStandardMaterial({ color: COL_GATE, roughness: 0.45, metalness: 0.15, emissive: new THREE.Color(COL_GATE), emissiveIntensity: 0.12 })
  );
  const barV = keep(new RoundedBoxGeometry(BAR, GATE_H, BAR, 1, 0.02));
  const barH = keep(new RoundedBoxGeometry(BAR, BAR, GATE_W, 1, 0.02));
  const footGeo = keep(new RoundedBoxGeometry(0.22, 0.08, 0.22, 1, 0.02));
  const paneGeo = keep(new THREE.PlaneGeometry(GATE_H - BAR, GATE_W - BAR));
  const lineGeo = keep(new THREE.PlaneGeometry(0.035, GATE_W - BAR - 0.02));
  const lampGeo = keep(new THREE.SphereGeometry(0.055, 12, 12));
  const gates = STEP_DEFS.map((sd) => {
    const belt = BELTS[sd.belt];
    const g = new THREE.Group();
    g.position.set(sd.x, belt.top, 0);
    world.add(g);
    for (const z of [-GATE_W / 2 + BAR / 2, GATE_W / 2 - BAR / 2]) {
      const bar = solid(barV, gateMat, g);
      bar.position.set(0, GATE_H / 2, z);
      const foot = solid(footGeo, gateMat, g);
      foot.position.set(0, 0.04, z);
    }
    const top = solid(barH, gateMat, g);
    top.position.set(0, GATE_H - BAR / 2, 0);
    const paneMat = keep(
      new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.1, side: THREE.DoubleSide, depthWrite: false })
    );
    const pane = new THREE.Mesh(paneGeo, paneMat);
    pane.rotation.y = Math.PI / 2;
    pane.rotation.z = Math.PI / 2;
    pane.position.set(0, GATE_H / 2, 0);
    g.add(pane);
    // the scan line: a bright bar sweeping the pane top to bottom
    const lineMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
    const line = new THREE.Mesh(lineGeo, lineMat);
    line.rotation.y = Math.PI / 2;
    line.rotation.z = Math.PI / 2;
    line.position.set(0, GATE_H / 2, 0);
    g.add(line);
    // the lamp on the top bar
    const lampMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN }));
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(0, GATE_H + 0.05, 0);
    g.add(lamp);
    return { belt: sd.belt, x: sd.x, label: sd.label, paneMat, line, lineMat, lampMat, flash: 0, sweep: seeded(sd.x) };
  });
  const lampOn = new THREE.Color(COL_SCAN);
  const lampDim = new THREE.Color(COL_GATE);

  // ---- the bin the rank gate tips the rejects into ----------------------
  const binWallGeo = keep(new RoundedBoxGeometry(BIN.w, BIN.h, 0.06, 1, 0.02));
  const binSideGeo = keep(new RoundedBoxGeometry(0.06, BIN.h, BIN.w, 1, 0.02));
  const binBase = BELTS[1].top - RISE + 0.0; // stands on the lower terrace's level? no: on the floor
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
  void binBase;

  // ---- the crane: a tower crane behind the belts -----------------------
  const craneMat = keep(new THREE.MeshStandardMaterial({ color: COL_CRANE, roughness: 0.55, metalness: 0.1 }));
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
  for (let y = FLOOR + 0.5; y < MAST_TOP - 0.1; y += 0.5) {
    for (const s of [-1, 1]) {
      const a = solid(rungX, craneMat);
      a.position.set(CRANE_X, y, CRANE_Z + (s * MAST_W) / 2);
      const b = solid(rungZ, craneMat);
      b.position.set(CRANE_X + (s * MAST_W) / 2, y, CRANE_Z);
    }
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
  const beacon = new THREE.Mesh(lampGeo, keep(new THREE.MeshBasicMaterial({ color: "#ff6b6b" })));
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
  const pendant = (x: number, y: number) => {
    const len = Math.hypot(x, JIB_Y + APEX - y);
    const p = new THREE.Mesh(keep(new THREE.CylinderGeometry(0.012, 0.012, len, 5)), steelMat);
    p.position.set(x / 2, (JIB_Y + APEX + y) / 2, 0);
    p.rotation.z = Math.atan2(JIB_Y + APEX - y, x) - Math.PI / 2;
    slew.add(p);
  };
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
  const heading = (x: number, z: number) => Math.atan2(-(z - CRANE_Z), x - CRANE_X);
  const thetaPick = heading(BELTS[0].x1, 0);
  const thetaDrop = heading(BELTS[1].x0, 0);
  const crane = { state: "idle" as CraneState, t: 0, theta: thetaPick, hookY: HOOK_UP, swing: 0, cube: null as Cube | null };

  // ---- sparks: tiny bits that fly off a block as it crosses a gate -----
  const SPARK_N = 120;
  const sparks = new THREE.InstancedMesh(keep(new RoundedBoxGeometry(0.07, 0.07, 0.07, 1, 0.015)), keep(new THREE.MeshBasicMaterial()), SPARK_N);
  keep(sparks);
  sparks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  world.add(sparks);
  const sparkPool: Spark[] = Array.from({ length: SPARK_N }, () => ({ life: 0, pos: new THREE.Vector3(), vel: new THREE.Vector3(), color: new THREE.Color() }));
  let sparkSeed = 11;
  const burst = (x: number, y: number, tint: THREE.Color) => {
    let n = 0;
    for (const s of sparkPool) {
      if (s.life > 0) continue;
      sparkSeed++;
      s.life = SPARK_LIFE;
      s.pos.set(x + (seeded(sparkSeed) - 0.5) * 0.3, y + seeded(sparkSeed + 0.2) * 0.4, (seeded(sparkSeed + 0.4) - 0.5) * 0.7);
      s.vel.set((seeded(sparkSeed + 0.6) - 0.5) * 1.6, 1.4 + seeded(sparkSeed + 0.8) * 1.6, (seeded(sparkSeed + 0.1) - 0.5) * 1.6);
      s.color.copy(seeded(sparkSeed + 0.3) < 0.75 ? tint : new THREE.Color(COL_LIME));
      if (++n >= SPARKS) break;
    }
  };

  // ---- rings: a pulse on the surface where a block is set down ---------
  const ringGeo = keep(new THREE.RingGeometry(0.22, 0.3, 32));
  const rings: Ring[] = Array.from({ length: 6 }, () => {
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

  // ---- the cubes ------------------------------------------------------
  const N = 24;
  const cubes = new THREE.InstancedMesh(
    keep(new RoundedBoxGeometry(CUBE, CUBE, CUBE, 3, 0.07)),
    keep(new THREE.MeshStandardMaterial({ roughness: 0.6, metalness: 0.05 })),
    N
  );
  keep(cubes);
  cubes.castShadow = true;
  cubes.receiveShadow = true;
  cubes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  world.add(cubes);

  const pool: Cube[] = Array.from({ length: N }, () => ({
    phase: "free",
    belt: 0,
    x: 0,
    passed: 0,
    tilt: new THREE.Euler(),
    size: 1,
    order: 0,
    reject: false,
    color: new THREE.Color(),
    slot: -1,
    t: 0,
    from: new THREE.Vector3(),
  }));
  const dummy = new THREE.Object3D();
  for (let i = 0; i < N; i++) {
    dummy.scale.setScalar(0);
    dummy.updateMatrix();
    cubes.setMatrixAt(i, dummy.matrix);
    cubes.setColorAt(i, STAGE[0]);
  }
  for (let i = 0; i < SPARK_N; i++) {
    sparks.setMatrixAt(i, dummy.matrix);
    sparks.setColorAt(i, STAGE[4]);
  }

  const lastBelt = BELTS.length - 1;
  const slotPos = (slot: number) =>
    new THREE.Vector3(
      STACK_X,
      BELTS[lastBelt].top + CUBE / 2 + SLOT_ROWS[Math.floor(slot / SLOT_OFF.length)],
      SLOT_OFF[slot % SLOT_OFF.length]
    );
  const slotTaken = new Array<Cube | null>(SLOTS).fill(null);

  let seed = 1;
  const spawn = () => {
    const c = pool.find((k) => k.phase === "free");
    if (!c) return;
    seed++;
    c.phase = "track";
    c.belt = 0;
    c.x = BELTS[0].x0;
    c.passed = 0;
    c.tilt.set((seeded(seed) - 0.5) * 1.1, (seeded(seed + 0.3) - 0.5) * 1.3, (seeded(seed + 0.6) - 0.5) * 1.1);
    c.size = 0.78 + seeded(seed + 0.9) * 0.4;
    c.order = 0;
    c.reject = seeded(seed + 1.2) < REJECT_RATE;
    c.color.copy(STAGE[0]);
  };

  const shipStack = () => {
    for (const s of slotTaken) {
      if (s) {
        s.phase = "pop";
        s.t = 0;
      }
    }
    slotTaken.fill(null);
  };

  let clock = 0;
  const step = (dt: number) => {
    clock += dt;
    for (let bi = 0; bi < BELTS.length; bi++) {
      const belt = BELTS[bi];
      const onBelt = pool.filter((c) => c.phase === "track" && c.belt === bi).sort((a, b) => b.x - a.x);
      let limit = belt.x1;
      for (const c of onBelt) {
        const prev = c.x;
        c.x = Math.min(c.x + SPEED * dt, limit);
        limit = c.x - QUEUE_GAP;
        for (const g of gates) {
          if (g.belt !== bi) continue;
          if (prev < g.x && c.x >= g.x) {
            g.flash = 1;
            c.passed = Math.min(c.passed + 1, gates.length);
            burst(g.x, belt.top + 0.3, STAGE[c.passed]);
            if (g.label === "rank" && c.reject) {
              c.phase = "drop";
              c.t = 0;
              c.from.set(c.x, belt.top + CUBE / 2, 0);
            }
          }
        }
        if (c.phase !== "track") continue;
        c.order += (c.passed / gates.length - c.order) * Math.min(1, dt * SETTLE);
        c.color.lerp(STAGE[c.passed], Math.min(1, dt * SETTLE));
        if (bi === lastBelt && c.x >= belt.x1 - 1e-3) {
          if (slotTaken.every(Boolean)) shipStack();
          const slot = slotTaken.findIndex((s) => !s);
          c.slot = slot;
          slotTaken[slot] = c;
          c.phase = "jump";
          c.t = 0;
          c.from.set(belt.x1, belt.top + CUBE / 2, 0);
          c.order = 1;
        }
      }
    }
    // the crane
    {
      const low = BELTS[0].top + CUBE;
      const high = BELTS[1].top + CUBE;
      const cr = crane;
      switch (cr.state) {
        case "idle": {
          const waiting = pool.find((c) => c.phase === "track" && c.belt === 0 && c.x >= BELTS[0].x1 - 1e-3);
          if (waiting) {
            cr.state = "lower";
            cr.t = 0;
            cr.cube = waiting;
          }
          break;
        }
        case "lower": {
          cr.t += dt / CRANE.lower;
          cr.hookY = THREE.MathUtils.lerp(HOOK_UP, low, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1 && cr.cube) {
            cr.cube.phase = "carried";
            cr.state = "lift";
            cr.t = 0;
          }
          break;
        }
        case "lift": {
          cr.t += dt / CRANE.lift;
          cr.hookY = THREE.MathUtils.lerp(low, HOOK_UP, easeInOut(Math.min(1, cr.t)));
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
          cr.hookY = THREE.MathUtils.lerp(HOOK_UP, high, easeInOut(Math.min(1, cr.t)));
          if (cr.t >= 1 && cr.cube) {
            cr.cube.phase = "track";
            cr.cube.belt = 1;
            cr.cube.x = BELTS[1].x0;
            cr.cube = null;
            pulse(BELTS[1].x0, BELTS[1].top, 0);
            cr.state = "lift2";
            cr.t = 0;
          }
          break;
        }
        case "lift2": {
          cr.t += dt / CRANE.lift2;
          cr.hookY = THREE.MathUtils.lerp(high, HOOK_UP, easeInOut(Math.min(1, cr.t)));
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
    // the blocks in the air or in the stack
    for (const c of pool) {
      if (c.phase === "jump") {
        c.t += dt / JUMP_TIME;
        if (c.t >= 1) {
          c.t = 1;
          c.phase = "stack";
          const p = slotPos(c.slot);
          if (c.slot < SLOT_OFF.length) pulse(p.x, BELTS[lastBelt].top, p.z);
        }
      } else if (c.phase === "pop") {
        c.t += dt / POP_TIME;
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "drop") {
        c.t += dt / DROP_TIME;
        c.color.lerp(STAGE[1], Math.min(1, dt * 4));
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "carried") {
        c.order += (c.passed / gates.length - c.order) * Math.min(1, dt * SETTLE);
      }
    }
    for (const g of gates) {
      g.flash *= Math.exp(-dt * 5.5);
      // the scan line sweeps slowly, and races while a block is going through
      g.sweep = (g.sweep + dt * (0.45 + g.flash * 2.2)) % 1;
    }
    for (const b of belts) b.tex.offset.x -= (SPEED * dt) / DASH_PERIOD;
    for (const s of sparkPool) {
      if (s.life <= 0) continue;
      s.life -= dt;
      s.vel.y -= 6 * dt;
      s.pos.addScaledVector(s.vel, dt);
    }
    for (const r of rings) if (r.t < 1) r.t = Math.min(1, r.t + dt / 0.55);
  };

  const tmpPos = new THREE.Vector3();
  const tmpQuat = new THREE.Quaternion();
  const straight = new THREE.Quaternion();
  const tilted = new THREE.Quaternion();
  const euler = new THREE.Euler();
  const tmpColor = new THREE.Color();
  const hookWorld = () => tmpPos.set(CRANE_X + R * Math.cos(crane.theta), crane.hookY, CRANE_Z - R * Math.sin(crane.theta));
  const draw = () => {
    for (let i = 0; i < N; i++) {
      const c = pool[i];
      if (c.phase === "free") {
        dummy.scale.setScalar(0);
        dummy.position.set(0, -10, 0);
        dummy.quaternion.identity();
      } else {
        const s = THREE.MathUtils.lerp(c.size, 1, c.order);
        tilted.setFromEuler(c.tilt);
        tmpQuat.copy(tilted).slerp(straight, c.order);
        if (c.phase === "track") {
          const lift = (1 - c.order) * 0.09;
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
          tmpPos.copy(c.from).lerp(slotPos(c.slot), k);
          tmpPos.y += Math.sin(c.t * Math.PI) * 0.9;
          dummy.position.copy(tmpPos);
          dummy.quaternion.identity();
          dummy.scale.setScalar(1);
        } else if (c.phase === "stack") {
          dummy.position.copy(slotPos(c.slot));
          dummy.quaternion.identity();
          dummy.scale.setScalar(1);
        } else if (c.phase === "drop") {
          // slides to the front edge, tips over it, falls into the bin
          const t = c.t;
          const slide = Math.min(1, t / 0.45);
          const z = THREE.MathUtils.lerp(0, BIN.z, slide * slide);
          const fall = Math.max(0, t - 0.4);
          const y = c.from.y - fall * fall * 9;
          dummy.position.set(c.from.x + Math.min(0.5, t * 0.6), y, z);
          euler.set(fall * 3.2, 0, -slide * 0.25);
          dummy.quaternion.setFromEuler(euler);
          // gone once it's inside the bin
          dummy.scale.setScalar(y < FLOOR + BIN.h - 0.15 ? 0 : 1);
        } else {
          dummy.position.copy(slotPos(c.slot));
          dummy.quaternion.identity();
          dummy.scale.setScalar(1 - easeOut(c.t));
        }
      }
      dummy.updateMatrix();
      cubes.setMatrixAt(i, dummy.matrix);
      cubes.setColorAt(i, c.color);
    }
    cubes.instanceMatrix.needsUpdate = true;
    if (cubes.instanceColor) cubes.instanceColor.needsUpdate = true;
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
    // gates: pane, scan line, lamp
    for (const g of gates) {
      g.paneMat.opacity = 0.1 + g.flash * 0.4;
      g.line.position.y = BAR / 2 + (GATE_H - BAR) * (1 - g.sweep);
      g.lineMat.opacity = 0.35 + g.flash * 0.6;
      g.lampMat.color.copy(tmpColor.copy(lampDim).lerp(lampOn, 0.3 + g.flash * 0.7 + 0.15 * Math.sin(clock * 3 + g.x)));
    }
    // the source: lights blink, the radar sweeps
    for (const l of leds) {
      const on = Math.sin(clock * l.rate + l.phase) > 0.25;
      l.mat.color.copy(on ? l.on : l.off);
    }
    radarSweep.rotation.z = -clock * 1.3;
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
    beacon.material.opacity = 1;
    (beacon.material as THREE.MeshBasicMaterial).color.setStyle(Math.sin(clock * 4) > 0 ? "#ff6b6b" : "#7a2c2c");
  };

  // ---- labels: the site's [ tags ], pinned over each gate and the stack,
  // numbered like the steps under the machine -------------------------------
  const labelDefs: { text: string; at: THREE.Vector3 }[] = [
    ...gates.map((g, i) => ({ text: `${i + 1} · ${g.label}`, at: new THREE.Vector3(g.x, BELTS[g.belt].top + GATE_H + 0.5, 0) })),
    { text: "shortlist", at: new THREE.Vector3(STACK_X, BELTS[lastBelt].top + CUBE + SLOT_ROWS[2] + 0.25, 0) },
  ];
  const labels = labelDefs.map((d) => {
    const el = document.createElement("span");
    el.className = "tag automation-label";
    el.textContent = d.text;
    container.appendChild(el);
    return { el, at: d.at };
  });
  const placeLabels = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    for (const l of labels) {
      tmpPos.copy(l.at).applyMatrix4(world.matrixWorld).project(camera);
      const x = ((tmpPos.x + 1) / 2) * w;
      const y = ((1 - tmpPos.y) / 2) * h;
      l.el.style.transform = `translate(-50%, -100%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
    }
  };

  // ---- pointer parallax ----------------------------------------------
  let targetRX = 0;
  let targetRY = 0;
  const onPointerMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    targetRY = ((e.clientX - r.left) / r.width - 0.5) * 0.14;
    targetRX = ((e.clientY - r.top) / r.height - 0.5) * 0.07;
  };
  const onPointerLeave = () => {
    targetRX = 0;
    targetRY = 0;
  };
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerleave", onPointerLeave);

  // ---- sizing ---------------------------------------------------------
  const topBelt = BELTS[lastBelt].top;
  const extremes: number[][] = [
    [BELTS[0].slab0 - 0.2, FLOOR, TRACK_W / 2],
    [BELTS[0].slab0 - 0.2, FLOOR, -TRACK_W / 2],
    [srcX, srcTop + 0.4, 0],
    [PLATFORM.x1, FLOOR, 1.1],
    [PLATFORM.x1, FLOOR, -1.1],
    [STACK_X, topBelt + CUBE + SLOT_ROWS[2] + 0.85, 0],
    [STEP_DEFS[3].x, topBelt + GATE_H + 1.1, 0],
    [BIN.x, FLOOR, BIN.z + BIN.w / 2 + 0.1],
    [CRANE_X, MAST_TOP + JIB_Y + APEX + 0.3, CRANE_Z],
  ];
  for (const th of [thetaPick, thetaDrop, (thetaPick + thetaDrop) / 2]) {
    extremes.push([CRANE_X + JIB_LEN * Math.cos(th), MAST_TOP + JIB_Y + JIB_H, CRANE_Z - JIB_LEN * Math.sin(th)]);
    extremes.push([CRANE_X - COUNTER_LEN * Math.cos(th), MAST_TOP + JIB_Y, CRANE_Z + COUNTER_LEN * Math.sin(th)]);
  }
  const bounds = { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity };
  for (const [x, y, z] of extremes) {
    tmpPos.set(x, y, z).applyMatrix4(camera.matrixWorldInverse);
    bounds.minX = Math.min(bounds.minX, tmpPos.x);
    bounds.maxX = Math.max(bounds.maxX, tmpPos.x);
    bounds.minY = Math.min(bounds.minY, tmpPos.y);
    bounds.maxY = Math.max(bounds.maxY, tmpPos.y);
  }
  const render = () => {
    world.updateMatrixWorld();
    placeLabels();
    renderer.render(scene, camera);
  };
  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    const aspect = w / h;
    const cx = (bounds.minX + bounds.maxX) / 2;
    const cy = (bounds.minY + bounds.maxY) / 2;
    let halfW = ((bounds.maxX - bounds.minX) / 2) * 1.04;
    let halfH = ((bounds.maxY - bounds.minY) / 2) * 1.04;
    if (halfW / halfH < aspect) halfW = halfH * aspect;
    else halfH = halfW / aspect;
    camera.left = cx - halfW;
    camera.right = cx + halfW;
    camera.top = cy + halfH;
    camera.bottom = cy - halfH;
    camera.updateProjectionMatrix();
    if (reduced) render();
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
  for (let i = 0; i < 80 / 0.05; i++) advance(0.05);
  for (const g of gates) g.flash = 0;
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
    world.rotation.y += (targetRY - world.rotation.y) * Math.min(1, dt * 4);
    world.rotation.x += (targetRX - world.rotation.x) * Math.min(1, dt * 4);
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
    for (const d of disposables) d.dispose();
    container.removeChild(canvas);
  };
}
