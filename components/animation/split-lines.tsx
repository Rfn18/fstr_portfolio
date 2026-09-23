"use client";

import { useEffect, useRef } from "react";
import { animate, stagger, splitText, onScroll, utils } from "animejs";
import type { SplitLinesProps } from "@/props";

export function SplitLines({
  children,
  as: Tag = "p",
  className,
  duration = 900,
  stagger: gap = 120,
  enter = "bottom-=10% top",
  leave = "top bottom",
}: SplitLinesProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let active = true;
    let shown = false;
    let scroll: ReturnType<typeof onScroll> | undefined;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const split = splitText(el, { lines: { wrap: "clip" } });

    split.addEffect(({ lines }) => {
      if (!active) return;
      el.style.opacity = "1";
      if (reduced) return;

      utils.set(lines, { translateY: shown ? "0%" : "100%" });

      const show = () => {
        shown = true;
        animate(lines, {
          translateY: "0%",
          duration,
          delay: stagger(gap),
          ease: "outQuart",
        });
      };

      const hide = () => {
        shown = false;
        animate(lines, {
          translateY: "100%",
          duration: duration * 0.6,
          delay: stagger(gap * 0.5),
          ease: "inQuart",
        });
      };

      scroll?.revert();
      scroll = onScroll({
        target: el,
        enter,
        onEnter: show,
        onLeaveBackward: hide,
      });
    });

    return () => {
      active = false;
      scroll?.revert();
      split.revert();
    };
  }, [duration, gap, enter, leave]);

  return (
    <Tag ref={ref} style={{ opacity: 0 }} className={className}>
      {children}
    </Tag>
  );
}
