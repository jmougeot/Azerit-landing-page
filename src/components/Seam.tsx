// The air between two panels, drawn as part of the page's rule grid: the
// container rails run straight through it, so the stack reads as one
// continuous ledger instead of boxes floating on the dot grid. `hatch` marks a
// chapter break — a full-width band of 45° hatching, the way a blueprint
// shades the ground between two drawings. `open` is for a seam with no panel
// above it (the first one, under the hero): it draws its own top rule.
export function Seam({ hatch = false, open = false }: { hatch?: boolean; open?: boolean }) {
  const cls = ["seam", hatch && "seam-hatch", open && "seam-open"].filter(Boolean).join(" ");
  return (
    <div className={cls} aria-hidden="true">
      <div className="container" />
    </div>
  );
}
