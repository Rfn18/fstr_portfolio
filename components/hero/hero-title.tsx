"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/data/hero";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export function HeroTitle() {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onReveal = () => setRevealed(true);
    window.addEventListener("transition:revealed", onReveal);
    return () => window.removeEventListener("transition:revealed", onReveal);
  }, []);

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate={revealed ? "show" : "hidden"}
      className="relative flex min-w-0 flex-col items-center justify-center px-4 sm:px-6 md:mb-10"
    >
      <motion.p
        variants={item}
        className="mb-3 text-lg font-normal text-surface opacity-80 sm:text-xl md:text-2xl"
      >
        {heroContent.intro}
      </motion.p>

      <motion.h1
        variants={item}
        className="max-w-5xl text-balance wrap-break-word text-center text-[clamp(2rem,4vw,7rem)] font-light leading-[1.1] tracking-tight text-surface sm:tracking-[-0.04em] lg:tracking-[-0.08em]"
      >
        {heroContent.title.map((line, index) => (
          <span key={line} className="block">
            {line}
            {index < heroContent.title.length - 1 ? <br /> : null}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
