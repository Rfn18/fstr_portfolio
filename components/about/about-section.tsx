import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { ArrowButton } from "../ui/arrow-button";
import WideningSection from "../animation/widening-section";
import RevealOnScroll from "../animation/reveal-on-scroll";
import { SplitLines } from "../animation/split-lines";

export function AboutSectionFirst() {
  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-start gap-6 px-4 pt-20 pb-24 sm:gap-8 sm:px-6 lg:px-8 lg:pb-10">
      <SplitLines
        as="h1"
        enter="bottom-=30% top"
        leave="top+=40% bottom"
        className="max-w-5xl text-balance text-center text-[clamp(1.5rem,4vw,2rem)] font-light leading-snug tracking-[-0.02em] text-gray-100"
      >
        I Am Fasterino, A Fullstack Developer crafting fast, scalable, and
        immersive digital experiences that merge creativity with engineering
        precision.
      </SplitLines>

      <SplitLines
        as="p"
        enter="bottom-=30% top"
        leave="top+=40% bottom"
        className="max-w-2xl text-pretty text-center text-sm font-light leading-relaxed text-background/70 sm:max-w-3xl sm:text-base"
      >
        I specialize in building web platforms, backend APIs, and computer
        vision systems using technologies like Laravel, Next.js, and Python.
      </SplitLines>

      <ArrowButton href="/about">About Me</ArrowButton>

      <div className="absolute inset-x-0 bottom-6 flex items-center justify-between px-4 pb-[env(safe-area-inset-bottom)] text-xs text-background/70 sm:bottom-8 sm:px-10 sm:text-sm lg:px-24">
        <a
          href="#explore"
          className="-my-2 flex items-center gap-1.5 py-2 hover:text-background"
        >
          <ArrowDown className="h-3.5 w-3.5" />
          <span>Scroll to Explore</span>
        </a>

        <a
          href="#story"
          className="-my-2 hidden py-2 hover:text-background sm:inline"
        >
          My Short Story
        </a>
      </div>
    </div>
  );
}

export function AboutSectionSecond() {
  return (
    <WideningSection
      fromY="150vh"
      from="70%"
      className="relative flex flex-col bg-background py-16 sm:py-20 md:py-28 lg:px-24"
    >
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <h1 className="animate-marquee whitespace-nowrap text-center text-5xl font-medium text-surface motion-reduce:animate-none sm:text-7xl lg:text-8xl">
          Fullstack Developer & AI Enthusiast
        </h1>
      </div>

      <div className="mx-auto w-full px-4 min-[1200px]:px-0">
        <RevealOnScroll className="relative mt-12 h-[70svh] max-h-[640px] min-h-[420px] w-full sm:mt-16 sm:h-[80svh] md:mt-30 lg:h-[90vh] lg:max-h-none">
          <div className="relative h-full w-full">
            <Image
              src="/images/me-sitting.jpg"
              alt="Fasterino"
              fill
              priority
              sizes="(min-width: 1200px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </RevealOnScroll>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 md:mt-10 md:grid-rows-[auto_auto] md:gap-x-16 md:gap-y-10">
          <SplitLines
            as={"h2"}
            className="col-span-2 text-balance text-2xl font-medium leading-snug tracking-tight text-neutral-900 sm:text-3xl md:col-span-1 md:row-start-1 md:text-[2rem] lg:text-4xl"
          >
            Driving measurable growth and engagement through thoughtful design
            and engineering.
          </SplitLines>

          <SplitLines
            as={"p"}
            className="col-span-2 text-pretty text-base leading-relaxed text-neutral-700 sm:text-lg md:col-span-1 md:row-start-1 md:self-center"
          >
            Every product I build starts with understanding user goals and
            translating them into intuitive, high-performance experiences. From
            concept to launch, I focus on meaningful results—boosting user
            engagement, retention, and overall business impact.
          </SplitLines>

          <div className="col-span-1 flex min-w-0 flex-col gap-2 border-t border-neutral-400/60 pt-6 md:row-start-2">
            <span className="text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
              YEARS OF EXPERIENCE
            </span>
            <span className="text-5xl font-semibold text-neutral-900 sm:text-6xl md:text-7xl">
              4+
            </span>
          </div>

          <div className="col-span-1 flex min-w-0 flex-col gap-2 border-t border-neutral-400/60 pt-6 md:row-start-2">
            <span className="text-xs font-medium tracking-wide text-neutral-500 sm:text-sm">
              PROJECTS COMPLETED
            </span>
            <span className="text-5xl font-semibold text-neutral-900 sm:text-6xl md:text-7xl">
              30+
            </span>
          </div>
        </div>
      </div>
    </WideningSection>
  );
}
