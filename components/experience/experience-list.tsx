"use client";

import { useEffect, useRef, useState } from "react";
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
    <div className="w-md shrink-0 border border-border px-8 py-12 first:border-l">
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent">
            <Icon
              className="h-6 w-6 text-accent-foreground"
              strokeWidth={1.5}
            />
          </div>
          <span className="font-mono text-lg text-muted">{number}</span>
        </div>

        <div className="flex min-h-16 max-w-[85%] items-start">
          <h2 className="text-4xl font-medium leading-snug tracking-tight text-foreground">
            {title}
          </h2>
        </div>

        <div className="border-t border-border" />

        <p className="max-w-[90%] text-sm leading-relaxed text-muted">
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

export default function ExperienceList() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  useEffect(() => {
    const calculate = () => {
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;

        setScrollDistance(Math.max(0, trackWidth - viewportWidth + 200));
      }
    };
    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);
  return (
    <div
      ref={targetRef}
      className="relative"
      style={{ height: `${experiences.length * 60}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center gap-8 overflow-hidden">
        <Container className="mx-auto w-full py-0 md:py-0 lg:py-0 px-4 md:px-16 lg:px-24">
          <h1 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            Transforming ideas into exceptional digital experiences through
            expertise and innovation
          </h1>
        </Container>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max will-change-transform ml-24"
        >
          {experiences.map((exp) => (
            <ExpCard key={exp.number} {...exp} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
