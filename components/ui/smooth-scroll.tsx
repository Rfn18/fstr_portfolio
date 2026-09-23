"use client";

import { ReactLenis } from "lenis/react";
import type { SmoothScrollProps } from "@/props";

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
