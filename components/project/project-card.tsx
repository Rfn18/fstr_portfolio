"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverTitle from "./hover-title";

interface ProjectProps {
  title?: string;
  image?: string;
  category?: string;
}

export default function ProjectCard({
  title = "Patient Tracker",
  category = "Landing Page",
  image = "/images/laptop.webp",
}: ProjectProps) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium text-black transition-colors duration-700 sm:hidden dark:text-white">
          {title}
        </h1>
        <p className="mb-2 text-sm font-light text-black/60 transition-colors duration-700 md:text-lg dark:text-white/70">
          {category}
        </p>
      </div>

      <div data-hover-root className="group relative overflow-hidden">
        <Image
          src={image}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 50vw, calc(100vw - 2rem)"
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none sm:h-64 md:h-72 lg:h-112"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/35"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center p-6"
        >
          <HoverTitle
            text={title}
            className="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>
    </div>
  );
}

export function ProjectCardList({
  title = "Patient Tracker",
  image = "/images/laptop.webp",
  category = "Landing Page",
}: ProjectProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-hover-root
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden border-b border-black/10 px-2 py-6 md:py-8 dark:border-white/10"
    >
      <div
        className={`${hovered ? "opacity-0" : ""} relative z-10 flex items-center justify-between gap-4 transition-opacity duration-500`}
      >
        <h2 className="text-xl font-medium text-black transition-colors duration-500 md:text-2xl dark:text-white">
          {title}
        </h2>
        <span className="text-sm font-light text-black/60 transition-colors duration-500 md:text-md dark:text-white/70">
          {category}
        </span>
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            key="curtain"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 z-20 flex items-center overflow-hidden bg-black"
          >
            <div className="flex shrink-0 animate-marquee-project items-center gap-10 whitespace-nowrap">
              {Array.from({ length: 10 }).map((_, i) => (
                <MarqueeItem key={i} title={title} image={image} />
              ))}
            </div>
            <div
              aria-hidden="true"
              className="flex shrink-0 animate-marquee-project items-center gap-10 whitespace-nowrap"
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <MarqueeItem key={i} title={title} image={image} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MarqueeItem({
  title,
  image = "/images/laptop.webp",
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="flex shrink-0 items-center gap-10">
      <div className="relative h-12 w-24 shrink-0 overflow-hidden rounded-full md:h-12 md:w-42">
        <Image src={image} fill sizes="200px" alt="" className="object-cover" />
      </div>
      <span className="text-2xl font-medium tracking-wide text-gray-100 uppercase">
        {title}
      </span>
    </div>
  );
}
