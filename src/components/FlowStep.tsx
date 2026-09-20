import type { ReactNode } from "react";

export function FlowStep({
  n,
  title,
  children,
}: {
  n: number;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={`fstep fs-${n}`}>
      <span className="tag">step {n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
