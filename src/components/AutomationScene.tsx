import { useEffect, useRef } from "react";

// The landing's "how it works" machine. Renders only an empty div (so the
// prerender stays trivial) and pulls in the three.js engine as its own chunk
// once mounted in the browser, the same way HeroGlobe does.
export function AutomationScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    // the engine (three.js + the machine) only loads once the section comes
    // near the viewport, so the page's first paint doesn't pay for it
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        import("./automation/engine").then((m) => {
          if (cancelled) return;
          performance.mark("automation:init:start");
          live.set(el, m.initAutomation(el));
          performance.measure("automation:init", "automation:init:start");
        });
      },
      { rootMargin: "700px" }
    );
    io.observe(el);
    return () => {
      cancelled = true;
      io.disconnect();
      live.get(el)?.();
      live.delete(el);
    };
  }, []);

  return <div ref={ref} className="automation" aria-hidden />;
}

// Dev only: the effect above never re-runs, so without this an edit to the
// engine would leave the old machine running in the open tab until a hard
// reload. Restart every mounted machine on the new module instead.
const live = new Map<HTMLElement, () => void>();
if (import.meta.hot) {
  import.meta.hot.accept("./automation/engine", (m) => {
    if (!m) return;
    for (const [el, cleanup] of live) {
      cleanup();
      live.set(el, m.initAutomation(el));
    }
  });
}
