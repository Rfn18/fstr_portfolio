import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { ArrowButton } from "../ui/button";

export function AboutSectionFirst() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-start pt-20 gap-6 px-4 py-10 sm:gap-8 sm:px-6 lg:px-8">
      <h1 className="max-w-5xl text-center text-[clamp(1.5rem,4vw,2rem)] font-light leading-snug tracking-[-0.02em] text-background">
        I Am Fasterino, A Fullstack Developer crafting fast, scalable, and
        immersive digital experiences that merge creativity with engineering
        precision.
      </h1>

      <p className="max-w-2xl text-center text-sm font-light leading-relaxed text-background/70 sm:max-w-3xl sm:text-base">
        I specialize in building web platforms, backend APIs, and computer
        vision systems using technologies like Laravel, Next.js, and Python.
      </p>

      <ArrowButton href="/about">About Me</ArrowButton>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-4 text-xs text-background/70 sm:bottom-8 sm:px-10 sm:text-sm lg:px-16">
        <a
          href="#explore"
          className="flex items-center gap-1.5 hover:text-background"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          <span>Scroll to Explore</span>
        </a>

        <a href="#story" className="hidden hover:text-background sm:inline">
          My Short Story
        </a>
      </div>
    </div>
  );
}

export function AboutSectionSecond() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-background py-16 sm:py-20 md:py-28">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <h1 className="animate-marquee whitespace-nowrap text-center text-5xl font-medium text-surface sm:text-7xl lg:text-8xl">
          Fullstack Developer & AI Enthusiast
        </h1>
      </div>

      <div className="relative mx-auto mt-12 h-[45vh] max-h-[520px] min-h-[90vh] w-full max-w-6xl sm:mt-16 sm:h-[55vh] md:mt-30 md:h-[60vh]">
        <Image
          src="/images/me-sitting.37df8593.webp"
          alt="Fasterino"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Content grid */}
      <div className="mx-auto mt-5 grid max-w-6xl grid-cols-1 gap-x-16 gap-y-10 md:mt-10 md:grid-cols-2 md:grid-rows-[auto_auto] ">
        <h2 className="text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl md:row-start-1 md:text-[2rem] lg:text-4xl">
          Driving measurable growth and engagement through thoughtful design and
          engineering.
        </h2>

        <p className="text-base leading-relaxed text-neutral-700 sm:text-lg md:row-start-1 md:self-center">
          Every product I build starts with understanding user goals and
          translating them into intuitive, high-performance experiences. From
          concept to launch, I focus on meaningful results—boosting user
          engagement, retention, and overall business impact.
        </p>

        {/* Row 2 — stats, otomatis sejajar karena satu grid row */}
        <div className="flex flex-col gap-2 border-t border-neutral-400/60 pt-6 md:row-start-2">
          <span className="text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
            YEARS OF EXPERIENCE
          </span>
          <span className="text-5xl font-semibold text-neutral-900 sm:text-6xl md:text-7xl">
            4+
          </span>
        </div>

        <div className="flex flex-col gap-2 border-t border-neutral-400/60 pt-6 md:row-start-2">
          <span className="text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
            PROJECTS COMPLETED
          </span>
          <span className="text-5xl font-semibold text-neutral-900 sm:text-6xl md:text-7xl">
            30+
          </span>
        </div>
      </div>
    </div>
  );
}
