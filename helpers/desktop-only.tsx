// helpers/desktop-only.tsx
"use client";

import { useSyncExternalStore } from "react";
import type { DesktopOnlyProps } from "@/props";

function useMediaQuery(query: string) {
  return useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia(query);
      m.addEventListener("change", cb);
      return () => m.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false, // SSR: tidak render
  );
}

export function DesktopOnly({
  children,
  query = "(min-width: 768px)",
}: DesktopOnlyProps) {
  return useMediaQuery(query) ? <>{children}</> : null;
}
