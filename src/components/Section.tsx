import type { ReactNode } from "react";

type Props = {
  id: string;
  index: string; // "01", "02"…
  label: string;
  children: ReactNode;
};

/** Layout shell for every section: numbered label in the left rail, content on the grid. */
export function Section({ id, index, label, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-label`} className="section">
      <div className="shell">
        <p id={`${id}-label`} className="eyebrow col-span-12 mb-10 md:col-span-2 md:mb-0">
          <span className="num">{index}</span> · {label}
        </p>
        <div className="col-span-12 md:col-span-10 lg:col-span-9">{children}</div>
      </div>
    </section>
  );
}
