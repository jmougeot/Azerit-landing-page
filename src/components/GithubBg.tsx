// Decorative bed of faint, scattered GitHub logos. Shared between the landing
// hero and the pricing page. Rendered inside a `.hero-zone` (position:relative)
// so it sits behind the page content, which must be given z-index above it.
const GH_MARK =
  "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z";

// deterministic pseudo-random so the pattern is identical on every render
function seeded(n: number) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function GithubBg({ cols = 7, rows = 9 }: { cols?: number; rows?: number }) {
  const logos: { top: number; left: number; size: number; rotate: number; opacity: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = r * cols + c;
      logos.push({
        left: ((c + 0.5 + (r % 2 ? 0.45 : 0)) / cols) * 100 + (seeded(i * 4 + 1) - 0.5) * 7,
        top: ((r + 0.5) / rows) * 100 + (seeded(i * 4 + 2) - 0.5) * 5,
        size: 26 + seeded(i * 4 + 3) * 74,
        rotate: (seeded(i * 4 + 4) - 0.5) * 56,
        opacity: 0.028 + seeded(i * 4 + 5) * 0.022,
      });
    }
  }
  return (
    <div className="gh-bg" aria-hidden>
      {logos.map((l, i) => (
        <svg
          key={i}
          viewBox="0 0 16 16"
          fill="currentColor"
          style={{
            top: `${l.top}%`,
            left: `${l.left}%`,
            width: l.size,
            height: l.size,
            opacity: l.opacity,
            transform: `translate(-50%, -50%) rotate(${l.rotate}deg)`,
          }}
        >
          <path d={GH_MARK} />
        </svg>
      ))}
    </div>
  );
}
