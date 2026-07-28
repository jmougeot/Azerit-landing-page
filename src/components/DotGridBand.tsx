import type { ReactNode, MouseEvent } from "react";

// Wraps the hero title section in an interactive dot-grid backdrop. The grid is
// a faint bed of dots; as the cursor moves, a green radial glow follows it and
// lights up the dots underneath. Pointer position is written to CSS custom
// properties on the band, which the (pointer-events:none) grid layers read.
export function DotGridBand({ children }: { children: ReactNode }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    el.style.setProperty("--glow", "1");
  };
  const onLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty("--glow", "0");
  };
  return (
    <div className="hero-band" onMouseMove={onMove} onMouseLeave={onLeave}>
      <div className="dot-grid" aria-hidden />
      {children}
    </div>
  );
}
