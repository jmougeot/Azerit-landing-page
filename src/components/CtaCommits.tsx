// Giant contribution-graph banner for the final CTA — the same recipe as the
// pricing page's ContribBg patches (real GitHub greens, ~45% density, commits
// landing in then twinkling), stretched into one full-width band.
const CTA_GREENS = ["#9be9a8", "#40c463", "#30a14e", "#216e39"];

// deterministic pseudo-random so the pattern is identical on every render
function ctaSeeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function CtaCommits() {
  // each marquee copy must stay wider than the widest viewport (~2680px at
  // 16px cells) so the loop never shows a gap while it scrolls
  const cols = 128;
  const rows = 7;
  const cells: ({ color: string; delay: number } | null)[] = [];
  for (let i = 0; i < cols * rows; i++) {
    const on = ctaSeeded(i * 3.1 + 7) > 0.55; // ~45% of cells carry a commit
    const lvl = Math.floor(ctaSeeded(i * 3.1 + 7.5) * CTA_GREENS.length);
    // staggered start so commits appear to land one after another, then twinkle
    const delay = ctaSeeded(i * 3.1 + 7.8) * 6;
    cells.push(on ? { color: CTA_GREENS[lvl], delay } : null);
  }
  const grid = (
    <div
      className="cta-commits-grid"
      style={{ gridTemplateColumns: `repeat(${cols}, var(--cta-cell))` }}
    >
      {cells.map((cell, i) => (
        <span
          key={i}
          className={cell ? "cta-cell contrib-cell-on" : "cta-cell"}
          style={
            cell
              ? { background: cell.color, animationDelay: `${cell.delay}s, ${cell.delay + 0.6}s` }
              : undefined
          }
        />
      ))}
    </div>
  );
  // two copies slide left by exactly one copy's width for a seamless loop
  return (
    <div className="cta-commits" aria-hidden>
      <div className="cta-marquee">
        {grid}
        {grid}
      </div>
    </div>
  );
}
