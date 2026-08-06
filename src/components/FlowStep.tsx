import type { ReactNode } from "react";

export function FlowStep({
  n,
  title,
  data,
  children,
}: {
  n: number;
  title: string;
  data: string;
  children: ReactNode;
}) {
  return (
    <div className={`fstep fs-${n}`}>
      <span className="tag">step {n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
      <div className="fs-data">{data}</div>
    </div>
  );
}
