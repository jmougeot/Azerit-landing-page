import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";

// The about page's picture: a cube of small cubes that never stops putting
// itself together. Pieces fly out, hover, come back and snap into place with
// a teal flash; a scanning plane sweeps through the whole thing now and
// then; the cube turns slowly and floats over its own shadow. Nothing to
// read in it, it just runs. Lives in its own chunk, like the globe and the
// machine: LatticeScene dynamic-imports this module once mounted.

const SIDE = 4; // cubes per edge
const PITCH = 0.54;
const SIZE = 0.45;
const N = SIDE * SIDE * SIDE;
const FLY_EVERY = 0.42; // s between two pieces leaving
const MAX_OUT = 9; // pieces away at once
const OUT_TIME = 0.75; // s, home -> away
const BACK_TIME = 0.7; // s, away -> home
const FLASH_TIME = 0.55; // s, the snap glow fading
const SWEEP_EVERY = 4.2; // s
const SWEEP_TIME = 1.5; // s, top to bottom
const SPIN = 0.22; // rad / s

// the brand on dark: most pieces slate, some teal, a few bright, one lime
const BASE = ["#2a3139", "#2a3139", "#2a3139", "#2a3139", "#2a3139", "#0f766e", "#0f766e", "#129787", "#2ec4ad", "#a3b63a"].map(
  (c) => new THREE.Color(c)
);
const FLASH = new THREE.Color("#52d0bd");

type Phase = "home" | "out" | "away" | "back";
type Piece = {
  home: THREE.Vector3;
  away: THREE.Vector3;
  phase: Phase;
  t: number;
  hover: number; // s left hovering
  flash: number; // 1 right after snapping in, fades
  base: THREE.Color;
  spinAxis: THREE.Vector3;
  spinAmt: number;
};

function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}
const easeInOut = (t: number) => t * t * (3 - 2 * t);
const easeOutBack = (t: number) => 1 + 2.2 * Math.pow(t - 1, 3) + 1.2 * Math.pow(t - 1, 2);

export function initLattice(container: HTMLElement): () => void {
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
  const disposables: { dispose(): void }[] = [renderer];
  const keep = <T extends { dispose(): void }>(d: T) => {
    disposables.push(d);
    return d;
  };

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  camera.position.set(0, 2.4, 9.0);
  camera.lookAt(0, -0.1, 0);

  // ---- light ----------------------------------------------------------
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfd9e0, 1.0));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(-5, 8, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -5;
  sun.shadow.camera.right = 5;
  sun.shadow.camera.top = 5;
  sun.shadow.camera.bottom = -5;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 30;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.02;
  scene.add(sun);
  // a teal glow from inside the cube, on the faces that look in
  const core = new THREE.PointLight(0x2ec4ad, 6, 3.2, 2);
  scene.add(core);

  // the floor it floats over
  const floor = new THREE.Mesh(keep(new THREE.PlaneGeometry(30, 30)), keep(new THREE.ShadowMaterial({ opacity: 0.18 })));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.0;
  floor.receiveShadow = true;
  scene.add(floor);

  // ---- the pieces -----------------------------------------------------
  const rig = new THREE.Group(); // the pointer parallax
  const spin = new THREE.Group(); // the slow turn
  rig.add(spin);
  scene.add(rig);
  rig.rotation.x = 0.1;

  const mesh = new THREE.InstancedMesh(
    keep(new RoundedBoxGeometry(SIZE, SIZE, SIZE, 3, 0.07)),
    keep(new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.18 })),
    N
  );
  keep(mesh);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  spin.add(mesh);

  const half = ((SIDE - 1) * PITCH) / 2;
  const pieces: Piece[] = [];
  for (let i = 0; i < SIDE; i++) {
    for (let j = 0; j < SIDE; j++) {
      for (let k = 0; k < SIDE; k++) {
        const n = pieces.length;
        const axis = new THREE.Vector3(seeded(n + 0.1) - 0.5, seeded(n + 0.2) - 0.5, seeded(n + 0.3) - 0.5).normalize();
        pieces.push({
          home: new THREE.Vector3(i * PITCH - half, j * PITCH - half, k * PITCH - half),
          away: new THREE.Vector3(),
          phase: "home",
          t: 0,
          hover: 0,
          flash: 0,
          base: BASE[Math.floor(seeded(n + 0.4) * BASE.length)],
          spinAxis: axis,
          spinAmt: 0.6 + seeded(n + 0.5) * 1.2,
        });
      }
    }
  }
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  for (let i = 0; i < N; i++) {
    dummy.position.copy(pieces[i].home);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    mesh.setColorAt(i, pieces[i].base);
  }

  let seed = 7;
  const sendOne = () => {
    const out = pieces.filter((p) => p.phase !== "home").length;
    if (out >= MAX_OUT) return;
    // prefer pieces on the outside: they can leave without passing through others
    for (let tries = 0; tries < 12; tries++) {
      seed++;
      const p = pieces[Math.floor(seeded(seed) * N)];
      if (p.phase !== "home") continue;
      const onFace = Math.abs(Math.abs(p.home.x) - half) < 1e-3 || Math.abs(Math.abs(p.home.y) - half) < 1e-3 || Math.abs(Math.abs(p.home.z) - half) < 1e-3;
      if (!onFace && tries < 8) continue;
      // away: outward from the center, a little further than the cube, with some scatter
      const dir = p.home.clone().normalize();
      dir.x += (seeded(seed + 0.1) - 0.5) * 0.9;
      dir.y += (seeded(seed + 0.2) - 0.5) * 0.9;
      dir.z += (seeded(seed + 0.3) - 0.5) * 0.9;
      dir.normalize();
      p.away.copy(dir).multiplyScalar(1.9 + seeded(seed + 0.4) * 0.7);
      p.phase = "out";
      p.t = 0;
      p.hover = 0.5 + seeded(seed + 0.6) * 1.1;
      return;
    }
  };

  let clock = 0;
  let flyClock = 0;
  let sweepClock = SWEEP_EVERY * 0.5;
  const step = (dt: number) => {
    clock += dt;
    flyClock += dt;
    while (flyClock >= FLY_EVERY) {
      flyClock -= FLY_EVERY;
      sendOne();
    }
    sweepClock += dt;
    if (sweepClock >= SWEEP_EVERY) sweepClock -= SWEEP_EVERY;
    for (const p of pieces) {
      if (p.phase === "out") {
        p.t += dt / OUT_TIME;
        if (p.t >= 1) {
          p.t = 0;
          p.phase = "away";
        }
      } else if (p.phase === "away") {
        p.hover -= dt;
        p.t += dt;
        if (p.hover <= 0) {
          p.phase = "back";
          p.t = 0;
        }
      } else if (p.phase === "back") {
        p.t += dt / BACK_TIME;
        if (p.t >= 1) {
          p.phase = "home";
          p.t = 0;
          p.flash = 1;
        }
      }
      if (p.flash > 0) p.flash = Math.max(0, p.flash - dt / FLASH_TIME);
    }
  };

  const tmp = new THREE.Vector3();
  const q = new THREE.Quaternion();
  const draw = () => {
    // the sweep: a plane crossing the cube top to bottom, lighting what it touches
    const sweepT = sweepClock / SWEEP_TIME;
    const sweepY = sweepT <= 1 ? THREE.MathUtils.lerp(half + 0.6, -half - 0.6, easeInOut(sweepT)) : NaN;
    for (let i = 0; i < N; i++) {
      const p = pieces[i];
      let k = 0; // 0 = home, 1 = away
      let spinK = 0;
      if (p.phase === "out") {
        k = easeInOut(p.t);
        spinK = p.t;
      } else if (p.phase === "away") {
        k = 1;
        spinK = 1 + p.t;
      } else if (p.phase === "back") {
        k = 1 - easeOutBack(p.t);
        spinK = (1 - p.t) * 2.5;
      }
      tmp.copy(p.home).lerp(p.away, k);
      if (p.phase === "away") {
        // a slow drift while hovering
        tmp.y += Math.sin(clock * 1.7 + i) * 0.06;
      }
      dummy.position.copy(tmp);
      q.setFromAxisAngle(p.spinAxis, spinK * p.spinAmt);
      dummy.quaternion.copy(q);
      const s = 1 - 0.12 * k;
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);

      let glow = p.flash;
      if (p.phase === "home" && !Number.isNaN(sweepY)) {
        const d = Math.abs(p.home.y - sweepY);
        glow = Math.max(glow, Math.max(0, 1 - d / 0.45));
      }
      color.copy(p.base).lerp(FLASH, glow * 0.9);
      mesh.setColorAt(i, color);
    }
    mesh.instanceMatrix.needsUpdate = true;
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  };

  // ---- pointer parallax ----------------------------------------------
  let targetRX = 0;
  let targetRY = 0;
  const onPointerMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    targetRY = ((e.clientX - r.left) / r.width - 0.5) * 0.5;
    targetRX = ((e.clientY - r.top) / r.height - 0.5) * 0.3 + 0.1;
  };
  const onPointerLeave = () => {
    targetRX = 0.1;
    targetRY = 0;
  };
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerleave", onPointerLeave);

  // ---- sizing ---------------------------------------------------------
  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    camera.aspect = w / h;
    // keep the cube the same size on screen whatever the box's aspect
    camera.fov = w / h >= 1 ? 30 : 30 / (w / h) ** 0.6;
    camera.updateProjectionMatrix();
    if (reduced) render();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // ---- loop -----------------------------------------------------------
  for (let i = 0; i < 6 / 0.05; i++) step(0.05); // pieces already in the air
  spin.rotation.y = 0.6;
  draw();

  let raf = 0;
  let visible = true;
  let last = performance.now();
  const frame = (t: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((t - last) / 1000, 0.1);
    last = t;
    step(dt);
    spin.rotation.y += SPIN * dt;
    spin.position.y = Math.sin(clock * 0.8) * 0.08;
    rig.rotation.y += (targetRY - rig.rotation.y) * Math.min(1, dt * 3);
    rig.rotation.x += (targetRX - rig.rotation.x) * Math.min(1, dt * 3);
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
    for (const d of disposables) d.dispose();
    container.removeChild(canvas);
  };
}
