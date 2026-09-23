"use client";

import { useRef } from "react";
import { animate, spring, utils } from "animejs";
import { useMagnetic } from "@/helpers/use-magnetic";
import type { HoverSwapPillProps } from "@/props";

const EASE = spring({
  bounce: 0.15,
  duration: 200,
});
const DURATION = 300;

export function HoverSwapPill({
  href,
  label,
  hoverLabel,
  className,
}: HoverSwapPillProps) {
  const bgRef = useRef<HTMLSpanElement>(null);
  const topRef = useRef<HTMLSpanElement>(null);
  const bottomRef = useRef<HTMLSpanElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    const bg = bgRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!bg || !top || !bottom) return;

    utils.remove([bg, top, bottom]);

    animate(bg, { y: "0%", duration: DURATION, ease: EASE });
    animate(top, { y: "-100%", duration: DURATION, ease: EASE });
    animate(bottom, { y: "0%", duration: DURATION, ease: EASE });
  };

  const handleLeave = () => {
    const bg = bgRef.current;
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!bg || !top || !bottom) return;

    utils.remove([bg, top, bottom]);

    animate(bg, { y: "100%", duration: DURATION, ease: EASE });
    animate(top, { y: "0%", duration: DURATION, ease: EASE });
    animate(bottom, { y: "100%", duration: DURATION, ease: EASE });
  };

  useMagnetic(wrapRef, 0.4);

  return (
    <a
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full border border-white/80 px-6 py-3 text-center text-sm transition-colors hover:border-transparent sm:text-left ${className ?? ""}`}
    >
      <span
        ref={bgRef}
        className="absolute inset-0 rounded-full bg-accent will-change-transform"
        style={{ transform: "translateY(100%)" }}
        aria-hidden="true"
      />

      <div ref={wrapRef} className="relative z-10 inline-block">
        <span className="flex h-5 items-center overflow-hidden leading-5">
          <span
            ref={topRef}
            className="block will-change-transform"
            style={{ transform: "translateY(0%)" }}
          >
            {label}
          </span>
          <span
            ref={bottomRef}
            className="absolute inset-0 flex items-center justify-center text-black will-change-transform"
            style={{ transform: "translateY(100%)" }}
          >
            {hoverLabel}
          </span>
        </span>
      </div>
    </a>
  );
}
