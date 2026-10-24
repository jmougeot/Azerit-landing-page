import { useEffect, useRef } from "react";

// The about page's cube of cubes. Renders only an empty div (so the
// prerender stays trivial) and pulls in the three.js engine as its own chunk
// once mounted in the browser, the same way HeroPicker does.
export function LatticeScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    let cleanup: (() => void) | undefined;
    import("./lattice/engine").then((m) => {
      if (cancelled) return;
      cleanup = m.initLattice(el);
    });
    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return <div ref={ref} className="lattice" aria-hidden />;
}
