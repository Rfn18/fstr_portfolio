"use client";

import { useMemo, useRef } from "react";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SplitLines } from "@/components/animation/split-lines";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { VideoPlayer } from "@/components/ui/video-player";
import WideningSection from "@/components/animation/widening-section";
import { useScrollTheme } from "@/hooks/use-scroll-theme";
import { Project } from "@/data/projects";

const PILL_CLASS =
  "rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white dark:bg-white dark:text-black hover:opacity-80 transition-opacity sm:px-4 sm:py-2 sm:text-sm";

interface ProjectDetailProps {
  showcase: Project;
}

export function ProjectDetail({ showcase }: ProjectDetailProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const darkStartRef = useRef<HTMLDivElement>(null);
  const lightResumeRef = useRef<HTMLDivElement>(null);

  const sections = useMemo(
    () => [
      { ref: heroRef, theme: "light" as const },
      { ref: darkStartRef, theme: "dark" as const },
      { ref: lightResumeRef, theme: "light" as const },
    ],
    [],
  );

  useScrollTheme(sections, 1);

  return (
    <Section className="py-0 md:py-0 lg:py-0">
      <Container className="px-0 md:px-0 lg:px-0">
        {/* Hero */}
        <div
          ref={heroRef}
          className="bg-gray-100 px-4 pt-12 text-black transition-colors duration-700 ease-in-out dark:bg-surface dark:text-white sm:px-6 md:pt-10 lg:px-10"
        >
          <div className="mb-6 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
            <SplitLines
              as="h1"
              enter="bottom-=30% top"
              leave="top+=40% bottom"
              className="text-balance text-start text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.02em]"
            >
              {showcase.title}
            </SplitLines>

            <div className="flex w-full flex-col gap-1 text-start lg:w-auto lg:text-end">
              <SplitLines
                as="h2"
                enter="bottom-=30% top"
                leave="top+=40% bottom"
                className="text-sm font-normal sm:text-base md:text-xl"
              >
                Showcasing real-world impact
              </SplitLines>
              <SplitLines
                as="p"
                enter="bottom-=30% top"
                leave="top+=40% bottom"
                className="max-w-md text-pretty text-sm italic opacity-70 sm:text-base md:text-xl lg:ml-auto"
              >
                Through outstanding engineering and design.
              </SplitLines>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <a href="#explore" className="flex items-center gap-2">
              <ArrowDown className="h-4 w-4" />
              <span className="text-sm sm:text-base">Scroll to Explore</span>
            </a>
          </div>
        </div>

        {/* Hero image */}
        <WideningSection
          fromY="15vh"
          from="90%"
          offset={["start end", "end start"]}
          wrapperClassName="dark:bg-surface transition-colors duration-700 ease-in-out"
        >
          <div className="relative mt-6 mb-32 h-[50vh] w-full overflow-hidden rounded-xl sm:h-[60vh] md:h-[75vh] lg:mt-12 lg:h-[90vh] dark:bg-surface transition-colors duration-700 ease-in-out  ">
            <Image
              src={showcase.images.main}
              alt={`${showcase.title} project preview`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </WideningSection>

        <span
          id="explore"
          className="block h-px w-full scroll-mt-20 bg-background opacity-20 dark:bg-gray-100"
        />

        {/* Dark section starts here */}
        <div
          ref={darkStartRef}
          className="bg-gray-100 text-black transition-colors duration-700 ease-in-out dark:bg-surface dark:text-white"
        >
          {/* Overview: description + CTA / client + tags */}
          <div className="px-4 py-8 sm:px-6 lg:px-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:gap-12">
              <div className="flex w-full flex-col items-start gap-4 lg:w-1/2">
                <p className="max-w-2xl text-pretty text-sm leading-relaxed sm:text-base md:text-md">
                  {showcase.desc}
                </p>
                <ArrowButton href="/" size="md">
                  Live Website
                </ArrowButton>
              </div>

              <div className="flex w-full flex-col items-start gap-3 lg:w-auto">
                <h3 className="text-sm font-semibold sm:text-base md:text-md">
                  Client
                </h3>
                <p className="text-sm opacity-70 sm:text-base md:text-md">
                  {showcase.client}
                </p>
                <div className="flex flex-wrap gap-2">
                  {showcase.techStack.slice(0, 4).map((tech, i) => (
                    <span key={i} className={PILL_CLASS}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Photo gallery */}
          <div className="grid grid-cols-1 gap-3 px-3 py-8 sm:grid-cols-2 sm:gap-4 sm:px-4 md:gap-8 md:px-8">
            {showcase.images.secondary.map((src, j) => (
              <div
                key={j}
                className="relative h-[180px] overflow-hidden rounded-lg sm:h-[320px] md:h-[450px] lg:h-[600px]"
              >
                <Image
                  src={src}
                  alt={`${showcase.title} screenshot ${j + 1}`}
                  fill
                  sizes="(min-width: 1200px) 576px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="px-4 py-12 sm:px-6 md:py-24 lg:px-10">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="lg:sticky lg:top-32">
                <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  Tech Stack
                </h2>
                <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed opacity-70 sm:text-base md:text-md">
                  Technologies and tools used to bring this project to life
                </p>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {showcase.techStack.map((tech, i) => (
                  <span key={i} className={PILL_CLASS}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Demo video */}
          {showcase.video && (
            <WideningSection
              fromY="15vh"
              from="90%"
              offset={["start end", "end start"]}
            >
              <VideoPlayer
                src={showcase.video}
                label={`Demo of the ${showcase.title} system`}
                className="h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[90vh]"
              />
            </WideningSection>
          )}
        </div>
        <div ref={lightResumeRef} />

        {/* My Role */}
        <div className="px-4 py-12 text-black transition-colors duration-700 ease-in-out dark:bg-surface dark:text-white sm:px-6 md:py-24 lg:px-10">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
                My Role
              </h2>
              <p className="mt-3 max-w-xl text-pretty text-sm leading-relaxed opacity-70 sm:text-base md:text-md">
                My contributions and responsibilities in this project
              </p>
            </div>

            <div className="flex flex-col gap-8">
              <div className="space-y-3">
                <h3 className="text-xs leading-relaxed opacity-70 sm:text-sm md:text-xl">
                  {showcase.role}
                </h3>
              </div>
              <div className="space-y-3">
                <h3 className="text-base font-semibold sm:text-lg md:text-xl">
                  Key Responsibilities
                </h3>
                <div className="space-y-2">
                  {showcase.responsibilities.map((responsibility, i) => (
                    <p
                      key={i}
                      className="text-xs leading-relaxed opacity-70 sm:text-sm md:text-base"
                    >
                      • {responsibility}
                    </p>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-base font-semibold sm:text-lg md:text-xl">
                  Project Impact
                </h3>
                <div className="space-y-2">
                  {showcase.impact.map((impactItem, i) => (
                    <p
                      key={i}
                      className="text-xs leading-relaxed opacity-70 sm:text-sm md:text-base"
                    >
                      • {impactItem}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
