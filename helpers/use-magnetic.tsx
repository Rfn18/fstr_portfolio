"use client";

import { useEffect, type RefObject } from "react";
import { animate, utils } from "animejs";

export function useMagnetic(
  ref: RefObject<HTMLElement | null>,
  strength = 0.6,
) {
  useEffect(() => {
    const wrap = ref.current;
    const el = wrap?.firstElementChild as HTMLElement | null;
    if (!wrap || !el) return;

    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !matchMedia("(hover: hover)").matches
    )
      return;

    const onMove = (e: MouseEvent) => {
      const r = wrap.getBoundingClientRect();
      const x = (e.clientX - (r.left + r.width / 2)) * strength;
      const y = (e.clientY - (r.top + r.height / 2)) * strength;
      utils.remove(el);
      animate(el, { x, y, duration: 200, ease: "out(2)" });
    };

    const onLeave = () => {
      utils.remove(el);
      animate(el, { x: 0, y: 0, duration: 900, ease: "outElastic(1, .4)" });
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      utils.remove(el);
    };
  }, [ref, strength]);
}
