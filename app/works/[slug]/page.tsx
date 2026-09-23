"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/layout/section";
import { Container } from "@/components/layout/container";
import { SplitLines } from "@/components/animation/split-lines";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { ArrowButton } from "@/components/ui/arrow-button";
import { TechnologyProps } from "@/props";

const technologies: TechnologyProps[] = [
  {
    title: "Languages & Frameworks",
    list: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "Fastify",
    ],
  },
];

export default function ProjectPage() {
  return (
    <Section className="py-6 md:py-8 lg:py-12">
      <Container className="px-5 md:px-5 lg:px-12">
        <div className="flex items-center justify-between">
          <SplitLines
            as="h1"
            enter="bottom-=30% top"
            leave="top+=40% bottom"
            className="max-w-5xl text-balance text-start text-[clamp(2rem,5vw,3rem)] font-semibold leading-snug tracking-[-0.02em] text-surface"
          >
            CCTV Face Recognition
          </SplitLines>

          <SplitLines
            as="p"
            enter="bottom-=30% top"
            leave="top+=40% bottom"
            className="max-w-md text-pretty text-start text-sm font-light leading-relaxed text-surface/70 sm:text-lg"
          >
            With creativity and innovation,{" "}
            <span className="font-bold italic">
              I will make your idea into a real thing.
            </span>
          </SplitLines>
        </div>
        <a href="#explore" className="-my-2 flex items-center gap-1.5 py-10">
          <ArrowDown className="h-3.5 w-3.5 text-surface" />
          <span className="text-surface/70">Scroll to Explore</span>
        </a>
        <div>
          <div className="relative w-full h-[500px] object-cover">
            <Image
              src="/images/laptop.webp"
              alt="Fasterino"
              fill
              priority
              sizes="(min-width: 1200px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-surface">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, exercitationem blanditiis. Itaque porro illo nesciunt
                cum est eum quod repudiandae, et earum mollitia enim eligendi.
              </p>
              <ArrowButton href="/" size="lg" className="text-surface">
                Live Website
              </ArrowButton>
            </div>
            <div>
              <h1>Client</h1>
              <h2>SMA Negeri 3 Pontianak</h2>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
