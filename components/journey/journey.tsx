"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { journeyHeading, journeyItems } from "@/data/journey";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { SplitLines } from "../animation/split-lines";
import type { JourneyContentProps } from "@/props";

export default function Journey() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const list = listRef.current;
    const fill = fillRef.current;
    if (!wrapper || !list || !fill) return;

    const root = document.documentElement;
    const END_POINT = 0.25;
    const ANCHOR = 0.6;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const TAU = reduce ? 0 : 250;

    let target = 0;
    let current = 0;
    let last = 0;
    let raf = 0;
    let dotRatios: number[] = [];

    const measure = () => {
      const lr = list.getBoundingClientRect();
      dotRatios = dotRefs.current.map((d) => {
        if (!d) return Infinity;
        const r = d.getBoundingClientRect();
        return (r.top + r.height / 2 - lr.top) / lr.height;
      });
    };

    const render = () => {
      fill.style.transform = `scaleY(${current})`;
      dotRefs.current.forEach((d, i) => {
        if (!d) return;
        const on = current >= dotRatios[i];
        if ((d.dataset.active === "true") !== on) d.dataset.active = String(on);
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 64);
      last = now;
      const diff = target - current;

      if (TAU === 0 || Math.abs(diff) < 0.0002) current = target;
      else current += diff * (1 - Math.exp(-dt / TAU));

      render();
      raf = current === target ? 0 : requestAnimationFrame(tick);
    };

    const kick = () => {
      if (raf) return;
      last = performance.now();
      raf = requestAnimationFrame(tick);
    };

    const compute = () => {
      const { top, bottom } = wrapper.getBoundingClientRect();
      const dark = top <= 0 && bottom > window.innerHeight * END_POINT;
      const next = dark ? "dark" : "light";
      if (root.dataset.theme !== next) root.dataset.theme = next;

      const rect = list.getBoundingClientRect();
      target = Math.min(
        1,
        Math.max(0, (window.innerHeight * ANCHOR - rect.top) / rect.height),
      );
    };

    const onScroll = () => {
      compute();
      kick();
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    compute();
    current = target;
    render();

    const ro = new ResizeObserver(onResize);
    ro.observe(list);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      delete root.dataset.theme;
    };
  }, []);

  return (
    <>
      <div ref={wrapperRef}>
        <Section className="relative overflow-hidden bg-gray-100 pb-0 pt-20 text-black transition-colors duration-700 ease-in-out md:pt-24 dark:bg-surface dark:text-white">
          <Container className="w-full px-4 md:px-16 lg:px-24">
            <div className="flex w-full justify-center">
              <SplitLines
                as={"h2"}
                className="mb-16 max-w-3xl text-balance text-center text-2xl font-medium leading-snug tracking-tight transition-colors duration-700 sm:text-3xl md:mb-32"
              >
                {journeyHeading}
              </SplitLines>
            </div>

            <div ref={listRef} className="relative mx-auto max-w-6xl">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-4 top-0 w-px bg-black/20 transition-colors duration-700 md:left-1/2 md:-translate-x-1/2 dark:bg-white/15"
              >
                <div
                  ref={fillRef}
                  className="h-full w-full origin-top bg-accent shadow-[0_0_6px_rgba(212,245,52,0.7),0_0_18px_rgba(212,245,52,0.35)] will-change-transform"
                  style={{ transform: "scaleY(0)" }}
                />
              </div>

              <ol className="relative flex flex-col">
                {journeyItems.map((item, index) => {
                  const isLeft = index % 2 === 0;
                  const isLast = index === journeyItems.length - 1;

                  return (
                    <li
                      key={item.title}
                      className={cn(
                        "relative grid grid-cols-1 md:grid-cols-2",
                        isLast ? "min-h-0" : "min-h-0 md:min-h-[220px]",
                      )}
                    >
                      <div
                        ref={(el) => {
                          dotRefs.current[index] = el;
                        }}
                        aria-hidden="true"
                        data-active="false"
                        className={cn(
                          "absolute left-4 top-16 z-20 h-3 w-3 -translate-x-1/2 scale-75 rounded-full border border-black/40 bg-surface sm:top-24 md:left-1/2 md:top-32 dark:border-white/30",
                          "transition-[transform,background-color,border-color,box-shadow] duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                          "data-[active=true]:scale-100 data-[active=true]:border-accent data-[active=true]:bg-accent data-[active=true]:shadow-[0_0_10px_rgba(212,245,52,0.8),0_0_24px_rgba(212,245,52,0.4)]",
                          "dark:data-[active=true]:border-accent",
                        )}
                      />

                      <div
                        className={cn(
                          "col-start-1 min-w-0 pl-8 sm:pl-10 md:row-start-1 md:pl-0 md:pr-20",
                          isLast ? "pb-0" : "pb-14 md:pb-52",
                          isLeft
                            ? "block md:text-right"
                            : "block md:pointer-events-none md:invisible md:h-0",
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
                    </li>
                  );
                })}
              </ol>
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
      <SplitLines
        as={"h3"}
        className="max-w-xl text-balance text-3xl font-medium leading-none tracking-[-0.04em] transition-colors duration-700 sm:text-5xl md:text-6xl"
      >
        {item.title}
      </SplitLines>

      <SplitLines
        as={"p"}
        className="mt-5 max-w-lg text-base font-light leading-relaxed text-black/50 transition-colors duration-700 sm:text-xl md:mt-8 md:text-lg md:sm:text-xl dark:text-white/50"
      >
        {item.role}
      </SplitLines>

      <SplitLines
        as={"p"}
        className="mt-2 max-w-xl text-pretty text-sm leading-7 text-black/55 transition-colors duration-700 sm:text-base md:mt-0 dark:text-white/55"
      >
        {item.description}
      </SplitLines>

      <SplitLines
        as={"p"}
        className="mt-5 text-sm text-black/40 transition-colors duration-700 md:mt-8 dark:text-white/40"
      >
        {item.year}
      </SplitLines>
    </div>
  );
}
