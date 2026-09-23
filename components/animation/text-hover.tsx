"use client";

import { useEffect, useRef } from "react";
import { TransitionLink } from "@/app/_transition/TransitionLink";
import { animate, splitText, stagger, utils } from "animejs";
import type { TextHoverProps } from "@/props";

export default function TextHover({
  text,
  href,
  className,
  mode = "self",
  onClick,
}: TextHoverProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target =
      mode === "root"
        ? (el.closest<HTMLElement>("[data-hover-root]") ??
          el.closest<HTMLElement>("a"))
        : (el.closest<HTMLElement>("a") ?? el);
    if (!target) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let cleanup = () => {};

    document.fonts.ready.then(() => {
      if (cancelled) return;

      const split = splitText(el, {
        chars: { wrap: "clip", clone: "bottom" },
      });

      const run = (to: "-100%" | "0%") => {
        const entering = to === "-100%";

        utils.remove(split.chars);
        animate(split.chars, {
          y: to,
          duration: reduce ? 1 : entering ? 450 : 250,
          ease: "out(3)",
          delay: entering && !reduce ? stagger(50) : 0,
        });
      };
      const enter = () => run("-100%");
      const leave = () => run("0%");

      target.addEventListener("mouseenter", enter);
      target.addEventListener("mouseleave", leave);

      cleanup = () => {
        target.removeEventListener("mouseenter", enter);
        target.removeEventListener("mouseleave", leave);
        utils.remove(split.chars);
        split.revert();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [text, mode]);

  const label = <span ref={ref}>{text}</span>;

  if (href) {
    return (
      <TransitionLink
        href={href}
        data-hover-root
        className={className}
        onClick={onClick}
      >
        {label}
      </TransitionLink>
    );
  }

  return <span className={className}>{label}</span>;
}
