import { useEffect, useRef } from "react";

// The hero's robot arm picking the one engineer who fits. Renders only an
// empty div (so the prerender stays trivial) and pulls in the three.js engine
// as its own chunk once mounted in the browser.
export function HeroPicker() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let cancelled = false;
    import("./picker/engine").then((m) => {
      if (cancelled) return;
      live.set(el, m.initPicker(el));
    });
    return () => {
      cancelled = true;
      live.get(el)?.();
      live.delete(el);
    };
  }, []);

  return <div ref={ref} className="hero-picker" aria-hidden />;
}

// Dev only: restart the scene on the new module instead of waiting for a
// hard reload (see AutomationScene)
const live = new Map<HTMLElement, () => void>();
if (import.meta.hot) {
  import.meta.hot.accept("./picker/engine", (m) => {
    if (!m) return;
    for (const [el, cleanup] of live) {
      cleanup();
      live.set(el, m.initPicker(el));
    }
  });
}
