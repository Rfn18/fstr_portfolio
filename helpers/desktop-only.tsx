// helpers/desktop-only.tsx
"use client";

import { useSyncExternalStore, type ReactNode } from "react";

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
}: {
  children: ReactNode;
  query?: string;
}) {
  return useMediaQuery(query) ? <>{children}</> : null;
}
