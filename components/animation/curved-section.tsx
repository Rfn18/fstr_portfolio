"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type UseScrollOptions,
} from "framer-motion";

type Props = {
  children: ReactNode;
  variant?: "top" | "footer";
  className?: string;
  fillClassName?: string;
  maxHeight?: string;
  offset?: UseScrollOptions["offset"];
  shadow?: boolean;
};

const PRESET = {
  top: {
    offset: ["start end", "start start"],
    path: "M0 20 Q50 -20 100 20 Z",
    position: "bottom-full",
    shadow: false,
  },
  footer: {
    offset: ["end end", "end 30%"],
    path: "M0 0 H100 Q50 40 0 0 Z",
    position: "top-full",
    shadow: true,
  },
} as const;

export default function CurvedSection({
  children,
  variant = "top",
  className = "",
  fillClassName = "fill-foreground",
  maxHeight = "8vw",
  offset,
  shadow,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const preset = PRESET[variant];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: (offset ?? preset.offset) as UseScrollOptions["offset"],
  });

  const height = useTransform(
    scrollYProgress,
    [0, 1],
    variant === "top" ? ["0vw", maxHeight] : [maxHeight, "0vw"],
  );
  const withShadow = shadow ?? preset.shadow;

  return (
    <div ref={ref} className={`relative z-10 ${className}`}>
      <motion.svg
        aria-hidden
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        style={{
          height,
          ...(withShadow && {
            filter: "drop-shadow(0 8px 10px rgb(0 0 0 / 0.25))",
          }),
        }}
        className={`pointer-events-none absolute left-1/2 w-screen -translate-x-1/2 overflow-visible ${
          variant === "top" ? "bottom-[calc(100%-1px)]" : "top-[calc(100%-1px)]"
        }`}
      >
        <path d={preset.path} className={fillClassName} />
      </motion.svg>
      {children}
    </div>
  );
}
