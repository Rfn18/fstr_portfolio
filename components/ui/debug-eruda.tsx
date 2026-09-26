// components/debug-eruda.tsx
"use client";

import { useEffect } from "react";

export function DebugEruda() {
  useEffect(() => {
    if (window.location.search.includes("debug")) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/eruda";
      script.onload = () => (window as any).eruda.init();
      document.body.appendChild(script);
    }
  }, []);

  return null;
}
