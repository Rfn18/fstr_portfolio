"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

interface JourneyItem {
  year: string;
  title: string;
  role: string;
  description: string;
}

const JOURNEY_ITEMS: JourneyItem[] = [
  {
    year: "2024 — Present",
    title: "Software Engineering",
    role: "Student · SMK TI Pelita Nusantara",
    description:
      "Building a strong foundation in software engineering through web development, system architecture, and hands-on projects.",
  },
  {
    year: "2024 — Present",
    title: "Full-Stack Development",
    role: "Personal & Academic Projects",
    description:
      "Designing and building applications across the frontend, backend, database, and API layers.",
  },
  {
    year: "2025 — Present",
    title: "Computer Vision",
    role: "Independent Exploration",
    description:
      "Exploring intelligent systems through face recognition, object detection, tracking, and real-time video processing.",
  },
  {
    year: "Jun 2026 - Sep 2026",
    title: "Real-World Experience",
    role: "Practical Work Experience · RSUD Daha Husada",
    description:
      "Applying software engineering in a real-world environment while working across software, computer vision, infrastructure, and IT systems.",
  },
];

export default function Journey() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const root = document.documentElement;
    const END_POINT = 0.25;
    let ticking = false;

    const update = () => {
      ticking = false;
      const { top, bottom } = wrapper.getBoundingClientRect();
      const dark = top <= 0 && bottom > window.innerHeight * END_POINT;
      const next = dark ? "dark" : "light";
      if (root.dataset.theme !== next) root.dataset.theme = next;
      console.log({ top, bottom, vh: window.innerHeight, next });
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      delete root.dataset.theme;
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef}>
        <Section className="relative overflow-hidden bg-gray-100 pb-0 pt-24 text-black transition-colors duration-700 ease-in-out dark:bg-surface dark:text-white py-0 sm:py-0 md:py-0 lg:py-0">
          <Container className="w-full px-4 md:px-16 lg:px-24">
            <div className="flex w-full justify-center">
              <h1 className="mb-24 max-w-3xl text-center text-2xl font-medium leading-snug tracking-tight transition-colors duration-700 sm:text-3xl md:mb-32">
                Explore the experiences, projects, and technologies that shape
                how I build.
              </h1>
            </div>

            <div className="relative mx-auto max-w-6xl">
              <div className="absolute bottom-0 left-4 top-0 w-px bg-[#d4f534] shadow-none transition-all duration-700 md:left-1/2 md:-translate-x-1/2 dark:shadow-[0_0_6px_rgba(212,245,52,0.45),0_0_18px_rgba(212,245,52,0.18)]" />

              <div className="relative flex flex-col">
                {JOURNEY_ITEMS.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const isLast = index === JOURNEY_ITEMS.length - 1;

                  return (
                    <div
                      key={item.title}
                      className={cn(
                        "relative grid grid-cols-[28px_1fr] md:grid-cols-2",
                        isLast ? "min-h-0" : "min-h-[220px]",
                      )}
                    >
                      <div className="absolute left-4 top-8 z-20 h-3 w-3 -translate-x-1/2 rounded-full border border-black/40 bg-surface shadow-none transition-all duration-700 md:left-1/2 dark:border-[#d4f534] dark:shadow-[0_0_8px_rgba(212,245,52,0.55)]" />

                      <div
                        className={cn(
                          "col-start-2 pl-10 md:col-start-1 md:row-start-1 md:pl-0 md:pr-20",
                          isLast ? "pb-0 md:pb-0" : "pb-30 md:pb-52",
                          isLeft
                            ? "block md:text-right"
                            : "block md:invisible md:pointer-events-none md:h-0",
                        )}
                      >
                        <JourneyContent
                          item={item}
                          align={isLeft ? "right" : "left"}
                          className={!isLeft ? "md:hidden" : ""}
                        />
                      </div>

                      {!isLeft && (
                        <div
                          className={cn(
                            "hidden md:col-start-2 md:row-start-1 md:block md:pl-20",
                            isLast ? "md:pb-0" : "md:pb-52",
                          )}
                        >
                          <JourneyContent item={item} align="left" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>
      </div>
      <Section className="min-h-dvh bg-gray-100 transition-colors duration-700 dark:bg-surface">
        <Container>
          <div></div>
        </Container>
      </Section>
    </>
  );
}

interface JourneyContentProps {
  item: JourneyItem;
  align: "left" | "right";
  className?: string;
}

function JourneyContent({ item, align, className }: JourneyContentProps) {
  const isRightAlign = align === "right";

  return (
    <div
      className={cn(
        "flex flex-col",
        isRightAlign
          ? "items-start text-left md:items-end md:text-right"
          : "items-start text-left",
        className,
      )}
    >
      <h2 className="max-w-xl text-4xl font-medium leading-none tracking-[-0.04em] transition-colors duration-700 sm:text-5xl md:text-6xl">
        {item.title}
      </h2>

      <p className="mt-8 max-w-lg text-lg font-light leading-relaxed text-black/50 transition-colors duration-700 sm:text-xl dark:text-white/50">
        {item.role}
      </p>

      <p className="max-w-xl text-sm leading-7 text-black/55 transition-colors duration-700 sm:text-base dark:text-white/55">
        {item.description}
      </p>

      <p className="mt-8 text-sm text-black/40 transition-colors duration-700 dark:text-white/40">
        {item.year}
      </p>
    </div>
  );
}
