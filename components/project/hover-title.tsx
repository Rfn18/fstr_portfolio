"use client";

import { animate, splitText, stagger, utils } from "animejs";
import { useEffect, useRef } from "react";

export default function HoverTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    const root = el?.closest<HTMLElement>("[data-hover-root]");
    if (!el || !root) return;

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cancelled = false;
    let cleanup = () => {};

    document.fonts.ready.then(() => {
      if (cancelled) return;

      const split = splitText(el, { chars: { wrap: "clip" } });
      utils.set(split.chars, { y: "100%" });

      // Setiap hover/keluar membuat animasi baru dari posisi huruf saat ini
      const run = (to: "0%" | "100%") => {
        utils.remove(split.chars); // hentikan animasi yang sedang berjalan
        animate(split.chars, {
          y: to,
          duration: reduce ? 1 : 450,
          ease: to === "0%" ? "out(3)" : "in(3)",
          delay: stagger(reduce ? 0 : 20, { reversed: to === "100%" }),
        });
      };

      const enter = () => run("0%");
      const leave = () => run("100%");

      root.addEventListener("mouseenter", enter);
      root.addEventListener("mouseleave", leave);

      cleanup = () => {
        root.removeEventListener("mouseenter", enter);
        root.removeEventListener("mouseleave", leave);
        utils.remove(split.chars);
        split.revert();
      };
    });

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  return (
    <p
      ref={ref}
      className={`text-center leading-[1.25] font-medium tracking-tight text-[#d7ff3a] ${className ?? ""}`}
    >
      {text}
    </p>
  );
}
