import { useEffect, useRef } from "react";

// Animated 3D network graph for the hero, in the spirit of societies.io: a
// cloud of nodes on a rotating sphere, wired together by their nearest
// neighbours, drawn on canvas with the Azerit green/teal palette. No deps.

type Node = { x: number; y: number; z: number };

const NODE_COUNT = 46;
const NEIGHBOUR_LINKS = 3; // edges drawn per node to its closest others
// brand palette (teal -> chartreuse), picked per node by depth
const COLORS = ["#0f766e", "#2f9e8c", "#4fb8a3", "#7a8a1f", "#a7c740"];

// deterministic sphere distribution (Fibonacci lattice) so the graph looks
// evenly spread rather than clumped, and is identical every mount.
function makeNodes(): Node[] {
  const nodes: Node[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < NODE_COUNT; i++) {
    const y = 1 - (i / (NODE_COUNT - 1)) * 2; // 1 -> -1
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    nodes.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return nodes;
}

// precompute the closest-neighbour edges once
function makeEdges(nodes: Node[]): [number, number][] {
  const edges = new Set<string>();
  for (let i = 0; i < nodes.length; i++) {
    const dists = nodes
      .map((n, j) => ({ j, d: dist2(nodes[i], n) }))
      .filter((o) => o.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, NEIGHBOUR_LINKS);
    for (const { j } of dists) {
      const key = i < j ? `${i}-${j}` : `${j}-${i}`;
      edges.add(key);
    }
  }
  return [...edges].map((k) => k.split("-").map(Number) as [number, number]);
}

function dist2(a: Node, b: Node) {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  const dz = a.z - b.z;
  return dx * dx + dy * dy + dz * dz;
}

export function Graph3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const nodes = makeNodes();
    const edges = makeEdges(nodes);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const render = (t: number) => {
      const a = reduced ? 0.6 : t * 0.00018; // yaw
      const b = reduced ? -0.25 : Math.sin(t * 0.00011) * 0.35; // gentle pitch
      const cosA = Math.cos(a);
      const sinA = Math.sin(a);
      const cosB = Math.cos(b);
      const sinB = Math.sin(b);

      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.4;
      const persp = 2.6;

      // project every node to screen space
      const p = nodes.map((n) => {
        // rotate around Y then X
        const x1 = n.x * cosA - n.z * sinA;
        const z1 = n.x * sinA + n.z * cosA;
        const y1 = n.y * cosB - z1 * sinB;
        const z2 = n.y * sinB + z1 * cosB;
        const scale = persp / (persp - z2);
        return {
          sx: cx + x1 * radius * scale,
          sy: cy + y1 * radius * scale,
          depth: z2, // -1 (back) .. 1 (front)
          scale,
        };
      });

      ctx.clearRect(0, 0, w, h);

      // edges first, faded by average depth
      ctx.lineWidth = 1;
      for (const [i, j] of edges) {
        const a2 = p[i];
        const b2 = p[j];
        const depth = (a2.depth + b2.depth) / 2;
        const alpha = 0.05 + ((depth + 1) / 2) * 0.22;
        ctx.strokeStyle = `rgba(47, 158, 140, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(a2.sx, a2.sy);
        ctx.lineTo(b2.sx, b2.sy);
        ctx.stroke();
      }

      // nodes on top, back-to-front so nearer ones overlap
      const order = p.map((_, i) => i).sort((i, j) => p[i].depth - p[j].depth);
      for (const i of order) {
        const pt = p[i];
        const front = (pt.depth + 1) / 2; // 0 back .. 1 front
        const color = COLORS[Math.min(COLORS.length - 1, Math.floor(front * COLORS.length))];
        const r = (1.6 + front * 3.4) * pt.scale;

        ctx.globalAlpha = 0.35 + front * 0.65;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8 * front;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(pt.sx, pt.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="graph3d" aria-hidden />;
}
