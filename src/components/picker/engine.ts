import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

// The hero's picture: the result of the search, not the process (the machine
// in "how it works" explains that). Five engineer cards lie in a row. A robot
// arm looks them over, picks the one that fits, raises it toward the reader,
// and small blocks of that engineer's code gather around it. Then it puts the
// card back and chooses again. Same language as the machine
// (components/automation): rounded matte shapes, white and sage, teal on the
// chosen one, soft shadows cast on the page, nothing around.

const CARD = { w: 0.7, t: 0.04, d: 0.48 };
const BASE = new THREE.Vector3(0, 0, -1.55); // where the arm stands
// the cards lie on an arc around the arm's foot, each turned to it
const FAN = { n: 5, r: 2.1, spread: 1.9 };
const CARD_PHI = Array.from({ length: FAN.n }, (_, i) => (i / (FAN.n - 1) - 0.5) * FAN.spread);
const CARD_POS = CARD_PHI.map((phi) => new THREE.Vector3(BASE.x + FAN.r * Math.sin(phi), CARD.t / 2, BASE.z + FAN.r * Math.cos(phi)));
const SHOULDER_Y = 0.98;
const L1 = 1.25; // upper arm
const L2 = 1.15; // forearm
const WRIST_LINK = 0.3; // from the wrist joint down to the hand's pivot
const HAND_DROP = 0.1; // from the hand's pivot down to the suction cups
const REACH = WRIST_LINK + HAND_DROP; // wrist joint to the cups' underside
const HOVER = 0.6; // the cups this high over a card while looking
const PRESENT = new THREE.Vector3(-0.1, 1.45, 0.6); // the wrist, showing a card
// the hand holds a card by its top face, so to show it the hand swings the
// card forward and over: the reader sees its underside, drawn the same, the
// cups hidden behind it
const TILT = 2.05; // rad
const CHIP = { w: 0.36, h: 0.24, t: 0.045 };
const CHIP_N = 4;
const BOB = 0.012;

const COL_WHITE = "#f4f6f5";
const COL_SAGE = "#a9c2b6";
const COL_SAGE_DEEP = "#7f9d90";
const COL_INK = "#2a3139";
const COL_MUTE = "#9aa4ad";
const COL_TEAL = "#0f766e";
const COL_SCAN = "#2ec4ad";
const SAGES = ["#e3eae6", "#c7d7cf", "#a6c0b4", "#82a596"];
const TEALS = ["#d6f0ec", "#8fd8cc", "#2ec4ad", "#0f766e"];

// the camera: a little off the front, pitched higher than the machine's
// (37°) so the cards lying flat still read
const CAM_DIR = new THREE.Vector3(-0.3, 0.6, 0.74).normalize();
const CAM_FOV = 40;
const FACE_CAM = Math.atan2(CAM_DIR.x, CAM_DIR.z); // yaw of a face turned to the camera

type Mode = "idle" | "scan" | "chosen";
type Step = { name: string; dur: number; begin?: () => void; tick: (k: number) => void; end?: () => void };

function seeded(n: number) {
  const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}
const easeInOut = (k: number) => (k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2);
const easeOut = (k: number) => 1 - Math.pow(1 - k, 3);
const easeOutBack = (k: number) => 1 + 2.2 * Math.pow(k - 1, 3) + 1.2 * Math.pow(k - 1, 2);
const clamp01 = (k: number) => Math.min(1, Math.max(0, k));

function rrect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

export function initPicker(container: HTMLElement): () => void {
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

  const camera = new THREE.PerspectiveCamera(CAM_FOV, 1, 0.5, 80);
  const target = new THREE.Vector3(0, 0.6, 0);
  let camDist = 12;

  // ---- light: the same room, sky and sun as the machine's ---------------
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environment = envTex;
  scene.environmentIntensity = 0.45;
  pmrem.dispose();
  scene.add(new THREE.HemisphereLight(0xffffff, 0xcfd9e0, 1.0));
  const sun = new THREE.DirectionalLight(0xffffff, 1.15);
  sun.position.set(-3, 14, -4);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -5;
  sun.shadow.camera.right = 5;
  sun.shadow.camera.top = 5;
  sun.shadow.camera.bottom = -5;
  sun.shadow.camera.near = 1;
  sun.shadow.camera.far = 30;
  sun.shadow.bias = -0.0002;
  sun.shadow.normalBias = 0.02;
  sun.shadow.radius = 10;
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
  const matte = (color: string, roughness = 0.82) => keep(new THREE.MeshStandardMaterial({ color, roughness, metalness: 0 }));
  const whiteMat = matte(COL_WHITE);
  const sageMat = matte(COL_SAGE, 0.78);
  const deepMat = matte(COL_SAGE_DEEP, 0.75);
  const scanMat = keep(new THREE.MeshBasicMaterial({ color: COL_SCAN, toneMapped: false }));

  // ---- the floor: only the shadows, cast on the page ---------------------
  const floor = new THREE.Mesh(keep(new THREE.PlaneGeometry(30, 30)), keep(new THREE.ShadowMaterial({ opacity: 0.18 })));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.005;
  floor.receiveShadow = true;
  world.add(floor);

  // ---- the cards: a white slab, the profile drawn on its top face ----------
  // an avatar, a name, a line under it, a contributions grid; sage at rest,
  // a sage frame while the arm looks at it, teal all over once chosen
  const cardGeo = keep(new RoundedBoxGeometry(CARD.w, CARD.t, CARD.d, 2, 0.012));
  const faceGeo = keep(new THREE.PlaneGeometry(CARD.w - 0.02, CARD.d - 0.02));
  const PX = 800; // texture pixels per unit
  const drawCard = (ctx: CanvasRenderingContext2D, seed: number, mode: Mode) => {
    const W = ctx.canvas.width;
    const H = ctx.canvas.height;
    ctx.clearRect(0, 0, W, H);
    const chosen = mode === "chosen";
    const pal = chosen ? TEALS : SAGES;
    rrect(ctx, 4, 4, W - 8, H - 8, 22);
    ctx.fillStyle = "#fbfcfc";
    ctx.fill();
    ctx.lineWidth = mode === "idle" ? 5 : 9;
    ctx.strokeStyle = chosen ? COL_TEAL : mode === "scan" ? COL_SAGE_DEEP : "#cfdbd5";
    ctx.stroke();
    // avatar: a disc with a head and shoulders cut out of it
    const ax = 70;
    const ay = 72;
    ctx.fillStyle = chosen ? COL_TEAL : COL_SAGE;
    ctx.beginPath();
    ctx.arc(ax, ay, 38, 0, Math.PI * 2);
    ctx.fill();
    ctx.save();
    ctx.beginPath();
    ctx.arc(ax, ay, 38, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = "#fbfcfc";
    ctx.beginPath();
    ctx.arc(ax, ay - 9, 13, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ax, ay + 34, 25, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // name and a line under it, widths of their own per card
    const nameW = 150 + seeded(seed + 1) * 90;
    rrect(ctx, 126, 52, nameW, 18, 9);
    ctx.fillStyle = COL_INK;
    ctx.fill();
    rrect(ctx, 126, 82, 90 + seeded(seed + 2) * 70, 12, 6);
    ctx.fillStyle = chosen ? COL_TEAL : COL_MUTE;
    ctx.fill();
    // the contributions grid
    const cols = 16;
    const rows = 5;
    const cell = 22;
    const gap = 6;
    const gx = 40;
    const gy = 150;
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const v = seeded(seed * 7.1 + r * 31 + c * 3.7);
        const level = v < 0.3 ? 0 : v < 0.6 ? 1 : v < 0.85 ? 2 : 3;
        rrect(ctx, gx + c * (cell + gap), gy + r * (cell + gap), cell, cell, 5);
        ctx.fillStyle = pal[level];
        ctx.fill();
      }
    if (chosen) {
      ctx.fillStyle = COL_TEAL;
      ctx.font = "700 30px 'JetBrains Mono', ui-monospace, monospace";
      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillText("[ fits ]", W - 40, 72);
    }
  };
  type Card = { g: THREE.Group; ctx: CanvasRenderingContext2D; tex: THREE.CanvasTexture; seed: number; mode: Mode; phi: number };
  const cards: Card[] = CARD_POS.map((at, i) => {
    const g = new THREE.Group();
    g.position.copy(at);
    g.rotation.y = CARD_PHI[i];
    world.add(g);
    solid(cardGeo, whiteMat, g);
    const c = document.createElement("canvas");
    c.width = Math.round(CARD.w * PX);
    c.height = Math.round(CARD.d * PX);
    const ctx = c.getContext("2d")!;
    const tex = keep(new THREE.CanvasTexture(c));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const faceMat = keep(new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.9, metalness: 0 }));
    for (const side of [1, -1]) {
      const face = new THREE.Mesh(faceGeo, faceMat);
      face.rotation.x = (-side * Math.PI) / 2;
      face.position.y = side * (CARD.t / 2 + 0.002);
      face.receiveShadow = true;
      g.add(face);
    }
    const card: Card = { g, ctx, tex, seed: i * 13 + 5, mode: "idle", phi: CARD_PHI[i] };
    drawCard(ctx, card.seed, "idle");
    return card;
  });
  const setMode = (card: Card, mode: Mode) => {
    if (card.mode === mode) return;
    card.mode = mode;
    drawCard(card.ctx, card.seed, mode);
    card.tex.needsUpdate = true;
  };

  // ---- the arm: a sage foot, a white column and housing, two white links
  // with sage joints, a short wrist and a hand with two suction cups and a
  // small teal scanner between them --------------------------------------
  const base = new THREE.Group();
  base.position.copy(BASE);
  world.add(base);
  const foot = solid(new THREE.CylinderGeometry(0.46, 0.5, 0.12, 40), sageMat, base);
  foot.position.y = 0.06;
  const column = solid(new THREE.CylinderGeometry(0.3, 0.34, 0.3, 32), whiteMat, base);
  column.position.y = 0.27;
  const housing = solid(new RoundedBoxGeometry(0.5, 0.56, 0.42, 2, 0.08), whiteMat, base);
  housing.position.y = 0.7;
  const jointGeo = (r: number, w: number) => {
    const g = keep(new THREE.CylinderGeometry(r, r, w, 32));
    g.rotateX(Math.PI / 2); // along z: the axis the links swing on
    return g;
  };
  const shoulder = new THREE.Group();
  shoulder.position.y = SHOULDER_Y;
  base.add(shoulder);
  solid(jointGeo(0.19, 0.5), sageMat, shoulder);
  const upper = solid(new RoundedBoxGeometry(L1, 0.26, 0.22, 2, 0.09), whiteMat, shoulder);
  upper.position.x = L1 / 2;
  const elbow = new THREE.Group();
  elbow.position.x = L1;
  shoulder.add(elbow);
  solid(jointGeo(0.15, 0.3), sageMat, elbow);
  const fore = solid(new RoundedBoxGeometry(L2, 0.2, 0.18, 2, 0.08), whiteMat, elbow);
  fore.position.x = L2 / 2;
  const wrist = new THREE.Group();
  wrist.position.x = L2;
  elbow.add(wrist);
  solid(jointGeo(0.12, 0.26), sageMat, wrist);
  const link = solid(new THREE.CylinderGeometry(0.07, 0.07, WRIST_LINK, 24), whiteMat, wrist);
  link.position.y = -WRIST_LINK / 2;
  const hand = new THREE.Group();
  hand.position.y = -WRIST_LINK;
  hand.rotation.order = "YXZ"; // turn to the reader, then tilt the card up
  wrist.add(hand);
  solid(new THREE.SphereGeometry(0.085, 24, 16), deepMat, hand);
  const plate = solid(new RoundedBoxGeometry(0.4, 0.06, 0.3, 1, 0.02), whiteMat, hand);
  plate.position.y = -0.04;
  for (const side of [-1, 1]) {
    const cup = solid(new THREE.CylinderGeometry(0.05, 0.068, 0.03, 24), deepMat, hand);
    cup.position.set(side * 0.13, -HAND_DROP + 0.015, 0);
  }
  const scanner: THREE.Mesh<THREE.CylinderGeometry, THREE.Material> = new THREE.Mesh(keep(new THREE.CylinderGeometry(0.035, 0.035, 0.012, 20)), scanMat);
  scanner.position.y = -0.074;
  hand.add(scanner);

  // ---- the code blocks: small white chips, a few lines of code drawn on
  // each in the chosen card's colours; they live in the hand's frame, over
  // the face of the card it holds ------------------------------------------
  const chipGeo = keep(new RoundedBoxGeometry(CHIP.w, CHIP.t, CHIP.h, 1, 0.012));
  const chipFaceGeo = keep(new THREE.PlaneGeometry(CHIP.w - 0.016, CHIP.h - 0.016));
  const drawChip = (ctx: CanvasRenderingContext2D, seed: number) => {
    const W = ctx.canvas.width;
    const H = ctx.canvas.height;
    ctx.clearRect(0, 0, W, H);
    rrect(ctx, 3, 3, W - 6, H - 6, 16);
    ctx.fillStyle = "#fbfcfc";
    ctx.fill();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#cfdbd5";
    ctx.stroke();
    // three lines of tokens: keyword, names, a string, punctuation
    const tokenCols = [COL_TEAL, COL_INK, COL_SAGE_DEEP, COL_MUTE];
    let y = 42;
    for (let line = 0; line < 3; line++) {
      let x = 30 + (line === 0 ? 0 : 36);
      const n = 2 + Math.floor(seeded(seed + line) * 3);
      for (let t = 0; t < n; t++) {
        const w = 28 + seeded(seed * 3 + line * 7 + t) * 52;
        if (x + w > W - 26) break;
        rrect(ctx, x, y, w, 16, 8);
        ctx.fillStyle = tokenCols[t === 0 && line === 0 ? 0 : Math.floor(seeded(seed + line * 11 + t * 5) * 3) + 1];
        ctx.fill();
        x += w + 12;
      }
      y += 44;
    }
  };
  const CARD_Y = -HAND_DROP - CARD.t / 2; // a held card's centre, in the hand
  // where the chips settle: beside the card, a little in front of the face
  // the reader sees (its underside); the card's short side (z) stands up
  // once the hand swings it over, so +z is up
  const CHIP_Y = CARD_Y - 0.1;
  const chipSlots = [
    { pos: new THREE.Vector3(-0.55, CHIP_Y, 0.12), rot: 0.12 },
    { pos: new THREE.Vector3(0.56, CHIP_Y - 0.02, 0.06), rot: -0.1 },
    { pos: new THREE.Vector3(-0.47, CHIP_Y - 0.03, -0.2), rot: -0.08 },
    { pos: new THREE.Vector3(0.5, CHIP_Y + 0.01, -0.22), rot: 0.1 },
  ];
  const chips = chipSlots.slice(0, CHIP_N).map((slot, j) => {
    const g = new THREE.Group();
    hand.add(g);
    solid(chipGeo, whiteMat, g);
    const c = document.createElement("canvas");
    c.width = Math.round(CHIP.w * PX);
    c.height = Math.round(CHIP.h * PX);
    const ctx = c.getContext("2d")!;
    const tex = keep(new THREE.CanvasTexture(c));
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = 8;
    const face = new THREE.Mesh(chipFaceGeo, keep(new THREE.MeshStandardMaterial({ map: tex, transparent: true, roughness: 0.9, metalness: 0 })));
    face.rotation.x = Math.PI / 2;
    face.position.y = -CHIP.t / 2 - 0.002;
    g.add(face);
    g.visible = false;
    return { g, slot, tex, ctx, seed: j * 3 + 1, k: 0 };
  });

  // ---- the pose: the wrist joint's place, the held card's heading and
  // tilt, solved into the joints each frame ---------------------------------
  const pose = { wrist: new THREE.Vector3(), yaw: 0, tilt: 0, scan: false };
  const over = (i: number, height: number, out: THREE.Vector3) => out.copy(CARD_POS[i]).setY(CARD.t + height + REACH);
  const solve = () => {
    const dx = pose.wrist.x - BASE.x;
    const dz = pose.wrist.z - BASE.z;
    const yaw = Math.atan2(-dz, dx);
    const r = Math.hypot(dx, dz);
    const h = pose.wrist.y - SHOULDER_Y;
    const d = Math.min(Math.hypot(r, h), L1 + L2 - 0.02);
    const phi = Math.atan2(h, r);
    const cA = THREE.MathUtils.clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1);
    const cB = THREE.MathUtils.clamp((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2), -1, 1);
    const a1 = phi + Math.acos(cA); // elbow up
    const a2 = -(Math.PI - Math.acos(cB));
    base.rotation.y = yaw;
    shoulder.rotation.z = a1;
    elbow.rotation.z = a2;
    wrist.rotation.z = -(a1 + a2); // the hand hangs straight down
    hand.rotation.y = pose.yaw - yaw;
    hand.rotation.x = -pose.tilt;
    scanner.material = pose.scan ? scanMat : deepMat;
  };

  // ---- the cycle: look along the row, go back to the one that fits, pick
  // it up, show it, let its code gather, then put it back and start again --
  let chosen = 2;
  const from = new THREE.Vector3();
  const to = new THREE.Vector3();
  let yawFrom = 0;
  const tmp = new THREE.Vector3();
  let steps: Step[] = [];
  let si = 0;
  let st = 0;
  const move = (name: string, dur: number, dest: (out: THREE.Vector3) => void, arc: number, ease = easeInOut): Step => ({
    name,
    dur,
    begin: () => {
      from.copy(pose.wrist);
      yawFrom = pose.yaw;
      dest(to);
    },
    tick: (k) => {
      pose.wrist.lerpVectors(from, to, ease(k));
      pose.wrist.y += Math.sin(Math.PI * k) * arc;
    },
  });
  const chipK = (k: number, j: number) => clamp01((k * (1 + (CHIP_N - 1) * 0.3) - j * 0.3) / 1);
  const placeChips = (k: number) => {
    for (const [j, c] of chips.entries()) {
      const e = easeOutBack(chipK(k, j));
      c.k = e;
      c.g.visible = e > 0.001;
      c.g.scale.setScalar(Math.max(0.001, e));
      c.g.position.set(0, CARD_Y - 0.02, 0).lerp(c.slot.pos, e);
      c.g.rotation.y = c.slot.rot * e;
    }
  };
  const buildCycle = (): Step[] => {
    const prev = chosen;
    chosen = (prev + 1 + Math.floor(seeded(prev * 3.3 + 1) * (FAN.n - 1))) % FAN.n;
    const c = cards[chosen];
    const list: Step[] = [];
    const look = (i: number) => {
      list.push({
        ...move(`to ${i}`, 0.34, (o) => over(i, HOVER, o), 0.07),
        tick: (k) => {
          const e = easeInOut(k);
          pose.wrist.lerpVectors(from, to, e);
          pose.wrist.y += Math.sin(Math.PI * k) * 0.07;
          pose.yaw = THREE.MathUtils.lerp(yawFrom, cards[i].phi, e);
        },
      });
      list.push({
        name: `look ${i}`,
        dur: 0.24,
        begin: () => {
          pose.scan = true;
          setMode(cards[i], "scan");
        },
        tick: () => {},
        end: () => {
          pose.scan = false;
          setMode(cards[i], "idle");
        },
      });
    };
    // read the row, starting from the end the arm is nearer to
    const order = prev <= 2 ? [0, 1, 2, 3, 4] : [4, 3, 2, 1, 0];
    for (const i of order) look(i);
    list.push({
      ...move("back", 0.55, (o) => over(chosen, HOVER, o), 0.1),
      tick: (k) => {
        const e = easeInOut(k);
        pose.wrist.lerpVectors(from, to, e);
        pose.wrist.y += Math.sin(Math.PI * k) * 0.1;
        pose.yaw = THREE.MathUtils.lerp(yawFrom, c.phi, e);
      },
      end: () => setMode(c, "chosen"),
    });
    list.push({ name: "pause", dur: 0.25, tick: () => {} });
    list.push(move("down", 0.5, (o) => over(chosen, 0, o), 0));
    list.push({
      name: "grip",
      dur: 0.22,
      tick: () => {},
      end: () => {
        hand.add(c.g);
        c.g.position.set(0, CARD_Y, 0);
        c.g.rotation.set(0, 0, 0);
      },
    });
    list.push({
      ...move("raise", 1.1, (o) => o.copy(PRESENT), 0.18),
      tick: (k) => {
        const e = easeInOut(k);
        pose.wrist.lerpVectors(from, to, e);
        pose.wrist.y += Math.sin(Math.PI * k) * 0.18;
        const s = easeInOut(clamp01((k - 0.3) / 0.7));
        pose.tilt = TILT * s;
        pose.yaw = THREE.MathUtils.lerp(c.phi, FACE_CAM, s);
      },
    });
    list.push({ name: "gather", dur: 0.9, tick: (k) => placeChips(k) });
    list.push({ name: "hold", dur: 3.2, tick: () => {} });
    list.push({ name: "scatter", dur: 0.45, tick: (k) => placeChips(1 - easeInOut(k)) });
    list.push({
      ...move("return", 1.1, (o) => over(chosen, 0, o), 0.22),
      tick: (k) => {
        const e = easeInOut(k);
        pose.wrist.lerpVectors(from, to, e);
        pose.wrist.y += Math.sin(Math.PI * k) * 0.22;
        const s = 1 - easeInOut(clamp01(k / 0.6));
        pose.tilt = TILT * s;
        pose.yaw = THREE.MathUtils.lerp(c.phi, FACE_CAM, s);
      },
    });
    list.push({
      name: "release",
      dur: 0.25,
      tick: () => {},
      end: () => {
        world.add(c.g);
        c.g.position.copy(CARD_POS[chosen]);
        c.g.rotation.set(0, c.phi, 0);
      },
    });
    list.push({ ...move("up", 0.45, (o) => over(chosen, HOVER, o), 0, easeOut), end: () => setMode(c, "idle") });
    return list;
  };
  over(2, HOVER, pose.wrist);
  pose.yaw = cards[2].phi;
  steps = buildCycle();
  steps[0].begin?.();
  const advance = (dt: number) => {
    st += dt;
    while (st >= steps[si].dur) {
      st -= steps[si].dur;
      steps[si].end?.();
      si++;
      if (si >= steps.length) {
        steps = buildCycle();
        si = 0;
      }
      steps[si].begin?.();
    }
    steps[si].tick(st / steps[si].dur);
  };
  let clock = 0;
  const draw = () => {
    solve();
    for (const [j, c] of chips.entries()) {
      if (!c.g.visible) continue;
      c.g.position.y = THREE.MathUtils.lerp(CARD_Y - 0.02, c.slot.pos.y, c.k) - Math.sin(clock * 1.8 + j * 1.3) * BOB * c.k;
    }
  };
  for (const c of chips) drawChip(c.ctx, c.seed);
  for (const c of chips) c.tex.needsUpdate = true;

  // ---- a light parallax under the pointer, like the machine's -----------
  let targetRY = 0;
  let targetRX = 0;
  const onPointerMove = (e: PointerEvent) => {
    const r = container.getBoundingClientRect();
    targetRY = ((e.clientX - r.left) / r.width - 0.5) * 0.16;
    targetRX = ((e.clientY - r.top) / r.height - 0.5) * 0.06;
  };
  const onPointerLeave = () => {
    targetRY = 0;
    targetRX = 0;
  };
  container.addEventListener("pointermove", onPointerMove);
  container.addEventListener("pointerleave", onPointerLeave);

  // ---- the camera: framed on the scene's extremes, whatever the box ------
  const extremes: [number, number, number][] = [
    ...CARD_POS.flatMap((p): [number, number, number][] => [
      [p.x - 0.36, 0, p.z + 0.36],
      [p.x + 0.36, 0, p.z + 0.36],
      [p.x - 0.36, 0, p.z - 0.36],
      [p.x + 0.36, 0, p.z - 0.36],
    ]),
    [BASE.x - 0.5, 0, BASE.z - 0.5],
    [BASE.x + 0.5, 0, BASE.z - 0.5],
    [BASE.x, 2.0, BASE.z],
    [PRESENT.x - 0.95, PRESENT.y + 0.45, PRESENT.z + 0.3],
    [PRESENT.x + 0.95, PRESENT.y + 0.45, PRESENT.z + 0.3],
    [PRESENT.x, PRESENT.y - 0.55, PRESENT.z + 0.5],
  ];
  const FRAME = { x0: -0.9, x1: 0.9, y0: -0.84, y1: 0.86 };
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
        tmp.set(x, y, z).project(camera);
        minX = Math.min(minX, tmp.x);
        maxX = Math.max(maxX, tmp.x);
        minY = Math.min(minY, tmp.y);
        maxY = Math.max(maxY, tmp.y);
      }
      const scale = Math.max((maxX - minX) / (FRAME.x1 - FRAME.x0), (maxY - minY) / (FRAME.y1 - FRAME.y0));
      camRight.setFromMatrixColumn(camera.matrixWorld, 0);
      camUp.setFromMatrixColumn(camera.matrixWorld, 1);
      const dx = ((minX + maxX) / 2 - (FRAME.x0 + FRAME.x1) / 2) * camDist * halfTan * camera.aspect;
      const dy = ((minY + maxY) / 2 - (FRAME.y0 + FRAME.y1) / 2) * camDist * halfTan;
      target.addScaledVector(camRight, dx).addScaledVector(camUp, dy);
      camDist *= scale;
      if (Math.abs(scale - 1) < 0.002 && Math.hypot(dx, dy) < 0.02) break;
    }
    camera.position.copy(target).addScaledVector(CAM_DIR, camDist);
    camera.lookAt(target);
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld();
  };
  const render = () => renderer.render(scene, camera);
  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);
    camera.aspect = w / h;
    fitCamera();
    if (reduced) render();
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  // without motion, show the arm holding the card it chose
  if (reduced) {
    let guard = 0;
    while (!(steps[si].name === "hold" && st > 1) && guard++ < 4000) advance(0.05);
  }
  draw();
  resize();

  let raf = 0;
  let visible = true;
  let last = performance.now();
  const frame = (t: number) => {
    raf = requestAnimationFrame(frame);
    const dt = Math.min((t - last) / 1000, 0.1);
    last = t;
    clock += dt;
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
    envTex.dispose();
    for (const d of disposables) d.dispose();
    container.removeChild(canvas);
  };
}
