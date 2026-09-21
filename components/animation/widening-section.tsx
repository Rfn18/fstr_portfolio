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
  className?: string;
  wrapperClassName?: string;
  from?: string; // lebar awal, mis. "75%"
  fromY?: string; // posisi awal (turun), mis. "15vh"
  radius?: string;
  offset?: UseScrollOptions["offset"];
};

export default function WideningSection({
  children,
  className = "",
  wrapperClassName = "",
  from = "75%",
  fromY = "15vh",
  radius = "48px",
  offset = ["start end", "start 20%"],
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset });

  const width = useTransform(scrollYProgress, [0, 1], [from, "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [radius, "0px"]);
  const y = useTransform(scrollYProgress, [0, 1], [fromY, "0px"]);

  return (
    <div ref={ref} className={`flex w-full justify-center ${wrapperClassName}`}>
      <motion.div
        style={{ width, borderRadius, y }}
        className={`overflow-hidden will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
}
