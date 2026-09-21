"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "../layout/container";
import { LucideIcon, Map, LayoutTemplate, Boxes, Rocket } from "lucide-react";

interface ExpCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

function ExpCard({ icon: Icon, number, title, description }: ExpCardProps) {
  return (
    <div className="w-[calc(100vw-2rem)] max-w-md shrink-0 border border-border px-6 py-10 first:border-l sm:px-8 md:py-16">
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent md:h-14 md:w-14">
            <Icon
              className="h-5 w-5 text-accent-foreground md:h-6 md:w-6"
              strokeWidth={1.5}
            />
          </div>
          <span className="font-mono text-base text-muted md:text-lg">
            {number}
          </span>
        </div>

        <div className="flex min-h-0 max-w-[85%] items-start md:min-h-16">
          <h3 className="text-2xl font-medium leading-snug tracking-tight text-foreground sm:text-3xl md:text-4xl">
            {title}
          </h3>
        </div>

        <div className="border-t border-border" />

        <p className="max-w-full text-sm leading-relaxed text-muted md:max-w-[90%]">
          {description}
        </p>
      </div>
    </div>
  );
}

const experiences: ExpCardProps[] = [
  {
    icon: Map,
    number: "01",
    title: "Full Stack Development",
    description:
      "Building scalable and high-performance web applications using Next.js, React, Node.js, and TypeScript, with robust backend architectures, secure RESTful APIs, and clean code practices.",
  },
  {
    icon: LayoutTemplate,
    number: "02",
    title: "UI/UX Design & Frontend",
    description:
      "Designing modern, responsive interfaces with Figma, Tailwind CSS, and Framer Motion. Creating intuitive experiences with clean design systems and pixel-perfect implementations.",
  },
  {
    icon: Boxes,
    number: "03",
    title: "SaaS Development",
    description:
      "Developing subscription-based SaaS products, managing billing, auth, and multi-tenant architecture.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Product Strategy & Deployment",
    description:
      "Planning release roadmaps, optimizing CI/CD pipelines, and deploying production-ready applications with monitoring and performance tuning.",
  },
];

const headingClass =
  "max-w-2xl text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl";
const headingText =
  "Transforming ideas into exceptional digital experiences through expertise and innovation";

export default function ExperienceList() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculate = () => {
      const gap = track.offsetLeft;
      setScrollDistance(
        Math.max(0, track.scrollWidth + gap * 2 + 8 - window.innerWidth),
      );
    };

    calculate();
    window.addEventListener("resize", calculate);
    const ro = new ResizeObserver(calculate);
    ro.observe(track);

    return () => {
      window.removeEventListener("resize", calculate);
      ro.disconnect();
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <div
      ref={targetRef}
      className="relative h-[calc(100svh+var(--n)*40svh)] md:h-[calc(var(--n)*80vh)]"
      style={{ "--n": experiences.length } as CSSProperties}
    >
      <Container className="mx-auto hidden w-full px-4 py-0 md:block md:px-16 md:py-0 lg:px-24 lg:py-0">
        <h2 className={headingClass}>{headingText}</h2>
      </Container>

      <div className="sticky top-0 flex h-svh flex-col justify-center gap-8 overflow-hidden py-8 md:h-auto md:py-12 lg:py-16">
        <Container className="mx-auto w-full px-4 py-0 md:hidden">
          <h2 className={headingClass}>{headingText}</h2>
        </Container>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="ml-4 flex w-max will-change-transform md:ml-16 lg:ml-24"
        >
          {experiences.map((exp) => (
            <ExpCard key={exp.number} {...exp} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
