"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";
import type { RefObject } from "react";

type ThemeSection = {
  ref: RefObject<HTMLElement | null>;
  theme: "light" | "dark";
};

export function useScrollTheme(sections: ThemeSection[], triggerPoint = 0.5) {
  const lastActive = useRef<"light" | "dark" | null>(null);

  const compute = () => {
    const root = document.documentElement;
    const line = window.innerHeight * triggerPoint;
    let active: "light" | "dark" = "light";

    for (const { ref, theme } of sections) {
      const el = ref.current;
      if (!el) continue;
      const { top } = el.getBoundingClientRect();
      if (top <= line) active = theme;
    }

    if (active === lastActive.current) return;
    lastActive.current = active;

    if (root.dataset.theme !== active) root.dataset.theme = active;
  };

  useLenis(() => {
    compute();
  });

  useEffect(() => {
    compute();
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("resize", compute);
      delete document.documentElement.dataset.theme;
    };
  }, [sections, triggerPoint]);
}
