import type { ReactNode } from "react";

// Wraps the hero title section in a faint dot-grid backdrop.
export function DotGridBand({ children }: { children: ReactNode }) {
  return (
    <div className="hero-band">
      <div className="dot-grid" aria-hidden />
      {children}
    </div>
  );
}
