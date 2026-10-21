import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// The landing's "how it works", as a machine read left to right. Rough,
// tumbling blocks come out of a dark "github" block and ride two belts laid
// out as terraces. Each of the four steps is a numbered booth the belt runs
// through: [ 1 · scan ] and [ 2 · read ] on the lower belt, [ 3 · enrich ]
// and [ 4 · rank ] on the upper one, each booth straightening and tinting
// a block one step as it passes (its roof lights up). Between the two belts
// a tower crane lifts every block from the end of the lower belt onto the
// start of the upper one. At rank, a share of the blocks is tipped off the
// front edge; the rest stack up on the top platform as the shortlist. No
// hands anywhere. Lives in its own chunk: the AutomationScene wrapper
// dynamic-imports this module once mounted.

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
// the four booths: which belt, where on it
const STEP_DEFS = [
  { belt: 0, x: -5.9, label: "scan" },
  { belt: 0, x: -3.3, label: "read" },
  { belt: 1, x: 2.9, label: "enrich" },
  { belt: 1, x: 5.5, label: "rank" },
];
const BOOTH_LEN = 1.4; // along the belt
const BOOTH_H = 1.3; // clearance over the belt
const WALL = 0.12;
// the crane: mast behind the belts, between the two; its jib reaches the
// end of the lower belt and the start of the upper one at the same radius
const CRANE_X = -0.2;
const CRANE_Z = -2.3;
const MAST_TOP = 4.1; // the slewing unit sits here
const JIB_LEN = 3.7;
const COUNTER_LEN = 1.4;

// ---- motion ---------------------------------------------------------------
const SPEED = 1.0; // units / s along a belt
const SPAWN_EVERY = 2.4; // s
const JUMP_TIME = 0.55; // s, belt end -> stack slot
const POP_TIME = 0.28; // s, a full stack clears
const DROP_TIME = 1.0; // s, a rejected block tips off the belt
const REJECT_RATE = 0.3; // share of blocks the rank booth turns away
const SETTLE = 5; // 1/s, how fast a block straightens after a booth
// one crane cycle: down, up, slew across, down, up, slew back (s)
const CRANE = { lower: 0.32, lift: 0.28, slew: 0.6, lower2: 0.26, lift2: 0.22, back: 0.55 };
const HOOK_UP = 3.3; // the gripper's underside at rest

// ---- palette --------------------------------------------------------------
// one stop per booth passed: raw dark -> slate -> teal -> teal -> bright teal
const STAGE = ["#2a3139", "#56656f", "#0f766e", "#129787", "#2ec4ad"].map((c) => new THREE.Color(c));
const COL_TRACK = "#e2e8ed";
const COL_SOURCE = "#0f151d";
const COL_BOOTH = "#0f766e";
const COL_SCAN = "#2ec4ad";
const COL_STEEL = "#2a3139";
const COL_CRANE = "#9db03a"; // the gem's chartreuse, dark enough on white

type Phase = "free" | "track" | "carried" | "jump" | "stack" | "pop" | "drop";
type Cube = {
  phase: Phase;
  belt: number;
  x: number;
  passed: number; // booths crossed so far
  tilt: THREE.Euler; // the disorder it arrives with, lerped away per booth
  size: number;
  order: number; // 0 = as it arrived, 1 = straight and true
  reject: boolean;
  color: THREE.Color;
  slot: number;
  t: number; // jump / pop / drop progress
  from: THREE.Vector3;
};
type CraneState = "idle" | "lower" | "lift" | "slew" | "lower2" | "lift2" | "back";

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
    return () => {}; // no WebGL: the page just has no picture there
  }
  renderer.setClearColor(0x000000, 0);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const canvas = renderer.domElement;
  container.appendChild(canvas);

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const scene = new THREE.Scene();
  const world = new THREE.Group(); // takes the pointer parallax
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

  // ---- the terraces and the platform: solid blocks standing on the floor,
  // the second one a step higher ------------------------------------------
  const slabMat = keep(new THREE.MeshStandardMaterial({ color: COL_TRACK, roughness: 1, metalness: 0 }));
  const terrace = (x0: number, x1: number, top: number, w = TRACK_W) => {
    const h = top - FLOOR;
    const m = solid(new RoundedBoxGeometry(x1 - x0, h, w, 2, 0.05), slabMat);
    m.position.set((x0 + x1) / 2, FLOOR + h / 2, 0);
  };
  for (const b of BELTS) terrace(b.slab0, b.slab1, b.top);
  terrace(PLATFORM.x0, PLATFORM.x1, BELTS[1].top, 2.2);

  // ---- the source: the dark block the raw cubes come out of ------------
  const source = solid(
    new RoundedBoxGeometry(1.7, 2.1, TRACK_W + 0.1, 2, 0.06),
    keep(new THREE.MeshStandardMaterial({ color: COL_SOURCE, roughness: 0.55, metalness: 0.1 }))
  );
  source.position.set(SOURCE_FACE - 0.85, BELTS[0].top + 1.05, 0);
  const sourceSign = new THREE.Mesh(keep(new THREE.PlaneGeometry(1.5, 0.375)), stencil("[ github ]", 56, 512, 128, COL_SCAN));
  sourceSign.position.set(SOURCE_FACE - 0.85, BELTS[0].top + 1.5, (TRACK_W + 0.1) / 2 + 0.004);
  world.add(sourceSign);

  // ---- the belts: dashed teal lines marching at the cubes' speed, the
  // landing's marching-dash connectors in 3D ------------------------------
  const dashCanvas = document.createElement("canvas");
  dashCanvas.width = 64;
  dashCanvas.height = 8;
  const dctx = dashCanvas.getContext("2d")!;
  dctx.fillStyle = COL_BOOTH;
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

  // ---- the booths: two teal walls either side of the belt, a translucent
  // roof that lights up when a block passes under it, the step's number on
  // the front wall --------------------------------------------------------
  const boothMat = keep(new THREE.MeshStandardMaterial({ color: COL_BOOTH, roughness: 0.5, metalness: 0.1 }));
  const booths = STEP_DEFS.map((sd, i) => {
    const belt = BELTS[sd.belt];
    const roofY = belt.top + BOOTH_H;
    const wallH = roofY - FLOOR;
    const wallZ = TRACK_W / 2 + 0.16 + WALL / 2;
    for (const z of [-wallZ, wallZ]) {
      const wall = solid(new RoundedBoxGeometry(BOOTH_LEN, wallH, WALL, 1, 0.02), boothMat);
      wall.position.set(sd.x, FLOOR + wallH / 2, z);
    }
    // the roof: a teal pane the camera looks down through
    const roofMat = keep(
      new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.32, side: THREE.DoubleSide, depthWrite: false })
    );
    const roof = new THREE.Mesh(keep(new THREE.PlaneGeometry(BOOTH_LEN, 2 * wallZ + WALL)), roofMat);
    roof.rotation.x = -Math.PI / 2;
    roof.position.set(sd.x, roofY, 0);
    world.add(roof);
    // a thin teal rim around the roof so its edge reads from above
    const rim = solid(new RoundedBoxGeometry(BOOTH_LEN + 0.06, 0.06, 2 * wallZ + WALL + 0.06, 1, 0.02), boothMat);
    rim.position.set(sd.x, roofY + 0.03, 0);
    // the number on the front wall
    const sign = new THREE.Mesh(keep(new THREE.PlaneGeometry(0.9, 0.9)), stencil(String(i + 1), 150, 256, 256, "#e8f6f3"));
    sign.position.set(sd.x, FLOOR + wallH - 0.62, wallZ + WALL / 2 + 0.004);
    world.add(sign);
    return { belt: sd.belt, x: sd.x, label: sd.label, roofMat, flash: 0 };
  });

  // ---- the crane: a tower crane behind the belts. Lattice mast, slewing
  // unit with cab, jib truss, counter-jib and counterweight, apex with
  // pendants, trolley, cable, gripper ---------------------------------------
  const craneMat = keep(new THREE.MeshStandardMaterial({ color: COL_CRANE, roughness: 0.55, metalness: 0.1 }));
  const steelMat = keep(new THREE.MeshStandardMaterial({ color: COL_STEEL, roughness: 0.5, metalness: 0.2 }));
  const base = solid(new RoundedBoxGeometry(1.1, 0.3, 1.1, 1, 0.03), steelMat);
  base.position.set(CRANE_X, FLOOR + 0.15, CRANE_Z);
  // the mast: four chords and rungs on every side, like a lattice tower
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
  // the slewing unit: everything above the mast turns together
  const slew = new THREE.Group();
  slew.position.set(CRANE_X, MAST_TOP, CRANE_Z);
  world.add(slew);
  const turntable = solid(new THREE.CylinderGeometry(0.3, 0.3, 0.14, 24), steelMat, slew);
  turntable.position.y = 0.07;
  const cab = solid(new RoundedBoxGeometry(0.42, 0.36, 0.4, 1, 0.04), steelMat, slew);
  cab.position.set(0.45, 0.4, 0.34);
  const cabGlass = new THREE.Mesh(
    keep(new THREE.PlaneGeometry(0.3, 0.2)),
    keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, transparent: true, opacity: 0.8 }))
  );
  cabGlass.position.set(0.45, 0.44, 0.545);
  slew.add(cabGlass);
  // the jib: two bottom chords, one top chord, posts between them
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
  // the counter-jib and its weight
  const counter = solid(keep(new RoundedBoxGeometry(COUNTER_LEN, 0.06, 0.3, 1, 0.01)), craneMat, slew);
  counter.position.set(-COUNTER_LEN / 2, JIB_Y, 0);
  const weight = solid(new RoundedBoxGeometry(0.5, 0.5, 0.42, 1, 0.03), steelMat, slew);
  weight.position.set(-COUNTER_LEN + 0.25, JIB_Y - 0.28, 0);
  // the apex and its pendant lines
  const APEX = 1.0;
  const apex = solid(keep(new RoundedBoxGeometry(0.07, APEX, 0.07, 1, 0.01)), craneMat, slew);
  apex.position.set(0, JIB_Y + APEX / 2, 0);
  const pendant = (x: number, y: number) => {
    const len = Math.hypot(x, JIB_Y + APEX - y);
    const p = new THREE.Mesh(keep(new THREE.CylinderGeometry(0.012, 0.012, len, 5)), steelMat);
    p.position.set(x / 2, (JIB_Y + APEX + y) / 2, 0);
    p.rotation.z = Math.atan2(JIB_Y + APEX - y, x) - Math.PI / 2;
    slew.add(p);
  };
  pendant(JIB_LEN * 0.62, JIB_Y + JIB_H);
  pendant(-COUNTER_LEN + 0.15, JIB_Y);
  // the trolley, at the one radius both belts sit at
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
  // jib headings for the pick-up and the drop: rotation.y turns local +x
  // onto (cos θ, 0, -sin θ)
  const heading = (x: number, z: number) => Math.atan2(-(z - CRANE_Z), x - CRANE_X);
  const thetaPick = heading(BELTS[0].x1, 0);
  const thetaDrop = heading(BELTS[1].x0, 0);
  const crane = { state: "idle" as CraneState, t: 0, theta: thetaPick, hookY: HOOK_UP, swing: 0, cube: null as Cube | null };

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
    c.x = BELTS[0].x0; // starts inside the source block
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

  const step = (dt: number) => {
    // blocks on the belts: queue up behind each other, pass the booths,
    // reach the end (the crane's pick-up spot, or the jump to the stack)
    for (let bi = 0; bi < BELTS.length; bi++) {
      const belt = BELTS[bi];
      const onBelt = pool.filter((c) => c.phase === "track" && c.belt === bi).sort((a, b) => b.x - a.x);
      let limit = belt.x1;
      for (const c of onBelt) {
        const prev = c.x;
        c.x = Math.min(c.x + SPEED * dt, limit);
        limit = c.x - QUEUE_GAP;
        for (const b of booths) {
          if (b.belt !== bi) continue;
          if (prev < b.x && c.x >= b.x) {
            b.flash = 1;
            c.passed = Math.min(c.passed + 1, booths.length);
            if (b.label === "rank" && c.reject) {
              c.phase = "drop";
              c.t = 0;
              c.from.set(c.x, belt.top + CUBE / 2, 0);
            }
          }
        }
        if (c.phase !== "track") continue;
        c.order += (c.passed / booths.length - c.order) * Math.min(1, dt * SETTLE);
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
          // the load lags the jib: swings back while speeding up, forward while braking
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
        }
      } else if (c.phase === "pop") {
        c.t += dt / POP_TIME;
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "drop") {
        c.t += dt / DROP_TIME;
        c.color.lerp(STAGE[1], Math.min(1, dt * 4));
        if (c.t >= 1) c.phase = "free";
      } else if (c.phase === "carried") {
        c.order += (c.passed / booths.length - c.order) * Math.min(1, dt * SETTLE);
      }
    }
    for (const b of booths) b.flash *= Math.exp(-dt * 5.5);
    for (const b of belts) b.tex.offset.x -= (SPEED * dt) / DASH_PERIOD;
  };

  const tmpPos = new THREE.Vector3();
  const tmpQuat = new THREE.Quaternion();
  const straight = new THREE.Quaternion();
  const tilted = new THREE.Quaternion();
  const euler = new THREE.Euler();
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
          const lift = (1 - c.order) * 0.09; // a tilted block sits a little higher
          dummy.position.set(c.x, BELTS[c.belt].top + (CUBE * s) / 2 + lift, 0);
          dummy.quaternion.copy(tmpQuat);
          dummy.scale.setScalar(s);
        } else if (c.phase === "carried") {
          hookWorld();
          dummy.position.set(tmpPos.x, tmpPos.y - (CUBE * s) / 2, tmpPos.z);
          // hangs under the gripper, swinging along the jib's travel
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
          // slides to the front edge, tips over it, falls and fades
          const t = c.t;
          const slide = Math.min(1, t / 0.45);
          const z = THREE.MathUtils.lerp(0, 1.5, slide * slide);
          const fall = Math.max(0, t - 0.4);
          dummy.position.set(c.from.x + t * 0.3, c.from.y - fall * fall * 9, z);
          euler.set(fall * 3.2, 0, -slide * 0.25);
          dummy.quaternion.setFromEuler(euler);
          dummy.scale.setScalar(1 - Math.max(0, (t - 0.7) / 0.3));
        } else {
          // pop: shrink in place
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
    for (const b of booths) b.roofMat.opacity = 0.32 + b.flash * 0.55;
    // the crane: the jib turns, the cable pays out, the gripper swings
    slew.rotation.y = crane.theta;
    const hookLocal = crane.hookY - MAST_TOP;
    const top = JIB_Y - 0.18;
    cable.position.set(R, (top + hookLocal) / 2, 0);
    cable.scale.y = Math.max(0.01, top - hookLocal);
    gripper.position.set(R, hookLocal, 0);
    gripper.rotation.x = crane.swing;
  };

  // ---- labels: the site's [ tags ], pinned over each booth and the stack,
  // numbered like the steps under the machine -------------------------------
  const labelDefs: { text: string; at: THREE.Vector3 }[] = [
    ...booths.map((b, i) => ({ text: `${i + 1} · ${b.label}`, at: new THREE.Vector3(b.x, BELTS[b.belt].top + BOOTH_H + 0.55, 0) })),
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
  // the frustum fits the machine whatever the box's aspect: project the
  // scene's extreme points into view space once and frame their bounds
  const topBelt = BELTS[lastBelt].top;
  const extremes: number[][] = [
    [BELTS[0].slab0, FLOOR, TRACK_W / 2],
    [BELTS[0].slab0, FLOOR, -TRACK_W / 2],
    [SOURCE_FACE - 0.85, BELTS[0].top + 2.1 + 0.4, 0],
    [PLATFORM.x1, FLOOR, 1.1],
    [PLATFORM.x1, FLOOR, -1.1],
    [STACK_X, topBelt + CUBE + SLOT_ROWS[2] + 0.85, 0],
    [STEP_DEFS[3].x, topBelt + BOOTH_H + 1.1, 0],
    [CRANE_X, MAST_TOP + JIB_Y + APEX + 0.3, CRANE_Z],
  ];
  // the jib and counter-jib sweep: their tips at both headings
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
  // the machine never starts empty: ~80 s of machine time before the first frame
  for (let i = 0; i < 80 / 0.05; i++) advance(0.05);
  for (const b of booths) b.flash = 0;
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
