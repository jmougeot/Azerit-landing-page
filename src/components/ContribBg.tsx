// Decorative backdrop inspired by GitHub's contribution graph: small rounded
// "commit" squares in GitHub greens, arranged as a few sparse grid patches
// tucked into the corners so they frame the pricing cards without crowding them.
// Rendered inside a `.hero-zone` (position:relative); page content sits above it.
const GREENS = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];

// deterministic pseudo-random so the pattern is identical on every render
function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function Patch({ cols, rows, seed }: { cols: number; rows: number; seed: number }) {
  const cells: ({ color: string; delay: number } | null)[] = [];
  for (let i = 0; i < cols * rows; i++) {
    const on = seeded(i * 3.1 + seed) > 0.55; // ~45% of cells carry a commit
    const lvl = Math.floor(seeded(i * 3.1 + seed + 0.5) * GREENS.length);
    // staggered start so commits appear to land one after another, then twinkle
    const delay = seeded(i * 3.1 + seed + 0.8) * 6;
    cells.push(on ? { color: GREENS[lvl], delay } : null);
  }
  return (
    <div className="contrib-patch" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {cells.map((cell, i) => (
        <span
          key={i}
          className={cell ? "contrib-cell contrib-cell-on" : "contrib-cell"}
          style={
            cell
              ? { background: cell.color, animationDelay: `${cell.delay}s, ${cell.delay + 0.6}s` }
              : undefined
          }
        />
      ))}
    </div>
  );
}

export function ContribBg() {
  return (
    <div className="contrib-bg" aria-hidden>
      <div className="contrib-patch-wrap tl">
        <Patch cols={6} rows={6} seed={1} />
      </div>
      <div className="contrib-patch-wrap tr">
        <Patch cols={6} rows={6} seed={2} />
      </div>
      <div className="contrib-patch-wrap bl">
        <Patch cols={6} rows={6} seed={3} />
      </div>
      <div className="contrib-patch-wrap br">
        <Patch cols={6} rows={6} seed={4} />
      </div>
    </div>
  );
}
