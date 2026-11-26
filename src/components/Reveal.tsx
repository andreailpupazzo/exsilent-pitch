"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  as?: ElementType;
  /** Stagger step, 0-based. Each step adds 80ms. */
  step?: number;
  className?: string;
};

/**
 * The one reveal pattern: fade-and-rise, ~420ms, staggered.
 * Content is visible in the server HTML. It is only hidden after hydration,
 * only if it is below the fold, and never under prefers-reduced-motion.
 * A timeout guarantees it shows even if the observer never fires.
 */
export function Reveal({ children, as: Tag = "div", step = 0, className }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return; // already on screen

    el.style.setProperty("--reveal-delay", `${step * 80}ms`);
    el.dataset.reveal = "armed";

    const show = () => {
      el.dataset.reveal = "shown";
      io.disconnect();
      window.clearTimeout(failsafe);
    };
    const io = new IntersectionObserver(
      (entries) => entries.some((e) => e.isIntersecting) && show(),
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    const failsafe = window.setTimeout(show, 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [step]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
