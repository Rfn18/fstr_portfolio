"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type UseScrollOptions,
} from "framer-motion";

type Props = {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  radius?: string;
  offset?: UseScrollOptions["offset"];
};

export default function WideningImage({
  children,
  className = "",
  from = 1.15,
  to = 1,
  radius = "48px",
  offset = ["start end", "end start"],
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: raw } = useScroll({ target: ref, offset });

  const progress = useSpring(raw, {
    stiffness: 300,
    damping: 40,
    mass: 0.8,
  });

  const scale = useTransform(progress, [0, 1], [from, to]);
  const borderRadius = useTransform(progress, [0, 1], [radius, "0px"]);

  return (
    <motion.div
      ref={ref}
      style={{ borderRadius }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={{ scale }}
        className="relative h-full w-full will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
