"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import type { RevealOnScrollProps } from "@/props";

export default function RevealOnScroll({
  children,
  className = "",
  from = 35,
  axis = "x",
  offset = ["start end", "center center"],
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  const inset = useTransform(scrollYProgress, [0, 1], [from, 0]);
  const clipPath = useTransform(inset, (v) => {
    const x = axis === "y" ? 0 : v;
    const y = axis === "x" ? 0 : v;
    return `inset(${y}% ${x}% ${y}% ${x}%)`;
  });

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
