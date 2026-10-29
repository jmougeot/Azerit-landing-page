// The air between two panels, drawn as part of the page's rule grid: the
// container rails run straight through it, so the stack reads as one
// continuous ledger instead of boxes floating on the dot grid.
export function Seam() {
  return (
    <div className="seam" aria-hidden="true">
      <div className="container" />
    </div>
  );
}
