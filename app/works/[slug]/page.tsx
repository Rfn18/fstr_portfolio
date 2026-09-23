"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SplitLines } from "@/components/animation/split-lines";

export default function ProjectPage() {
  return (
    <Section>
      <Container>
        <div className="flex items-center justify-between">
          <SplitLines
            as="h1"
            enter="bottom-=30% top"
            leave="top+=40% bottom"
            className="max-w-5xl text-balance text-center text-[clamp(2rem,5vw,3rem)] font-semibold leading-snug tracking-[-0.02em] text-surface"
          >
            CCTV Face Recognition
          </SplitLines>

          <SplitLines
            as="p"
            enter="bottom-=30% top"
            leave="top+=40% bottom"
            className="max-w-2xl text-pretty text-start text-sm font-light leading-relaxed text-surface/70 sm:max-w-4xl sm:text-base"
          >
            I specialize in building web platforms, backend APIs, and computer
            vision systems using technologies like Laravel, Next.js, and Python.
          </SplitLines>
        </div>
      </Container>
    </Section>
  );
}
