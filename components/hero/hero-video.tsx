"use client";

import { motion } from "framer-motion";

export function HeroVideo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 overflow-hidden md:inset-0 md:h-full md:-translate-y-10"
    >
      <motion.video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        initial={{ scale: 1.3, filter: "blur(12px)", opacity: 0 }}
        animate={{ scale: 1, filter: "blur(0px)", opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as const, delay: 0.15 }}
        className="absolute inset-x-0 top-0 h-[200%] w-full object-cover object-top md:h-full md:object-center"
      >
        <source src="/videos/glassy-obj.mp4" type="video/mp4" />
      </motion.video>
    </div>
  );
}
