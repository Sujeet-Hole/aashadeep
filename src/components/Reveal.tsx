// Scroll-reveal wrapper: children fade / slide in when they enter the viewport.
// The `direction` prop picks the entrance side, so sections can animate in
// horizontally (left / right), vertically (up / down) or with a zoom.

import { useEffect, useRef, useState, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "zoom";

const DIRECTION_CLASS: Record<RevealDirection, string> = {
  up: "reveal-up",
  down: "reveal-down",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Extra transition delay in ms, for staggering a group of elements. */
  delay?: number;
  /** Side the content enters from (default: up). */
  direction?: RevealDirection;
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${DIRECTION_CLASS[direction]} ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
