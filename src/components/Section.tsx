import type { ReactNode } from "react";

type Props = { id: string; eyebrow: string; title?: ReactNode; lede?: ReactNode; children: ReactNode; className?: string };

/** Every section: eyebrow + big headline, then content. */
export function Section({ id, eyebrow, title, lede, children, className = "" }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-t`} className={`section ${className}`}>
      <div className="wrap">
        <div className="mb-[clamp(2.5rem,5vw,4.5rem)] flex flex-col gap-5">
          <p className="eyebrow">{eyebrow}</p>
          {title ? <h2 id={`${id}-t`} className="t-3 max-w-[18ch]">{title}</h2> : <h2 id={`${id}-t`} className="sr-only">{eyebrow}</h2>}
          {lede && <p className="t-1 muted">{lede}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}
