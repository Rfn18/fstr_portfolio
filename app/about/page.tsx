import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { SplitLines } from "@/components/animation/split-lines";
import WideningImage from "@/components/animation/widening-image";
import WideningSection from "@/components/animation/widening-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SkillsCard } from "@/components/card/skills-card";
import { TechnologyCard } from "@/components/card/technology-card";
import type { TechnologyProps } from "@/props";
import Image from "next/image";

const GUTTER = "max-w-8xl px-6 md:px-8 lg:px-10";

const paragraphs = [
  "I enjoy turning real-world problems into practical software solutions, from web applications and backend systems to computer vision projects.",
  "My main focus is full-stack development and computer vision. I work with modern web technologies while exploring how AI can be applied to solve practical problems.",
  "I care about how software works behind the interface | from system architecture and APIs to databases, real-time services, and deployment.",
  "Outside of coding, I enjoy exploring new technologies, experimenting with ideas, and continuously learning through hands-on projects.",
];

const skills = [
  {
    title: "Full-Stack Development",
    description:
      "Building web applications with modern frontend and backend technologies, from intuitive interfaces to robust APIs and database systems.",
  },
  {
    title: "Computer Vision & AI",
    description:
      "Exploring real-time computer vision systems for face recognition, object detection, tracking, and people counting.",
  },
  {
    title: "UI/UX & Frontend",
    description:
      "Designing and implementing responsive interfaces with a focus on usability, visual consistency, and thoughtful interactions.",
  },
];

const technologies: TechnologyProps[] = [
  {
    title: "Languages",
    list: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    title: "Frontend",
    list: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    list: ["Node.js", "NestJS", "Laravel", "REST API"],
  },
  {
    title: "Computer Vision & AI",
    list: ["Python", "OpenCV", "YOLO", "InsightFace", "ONNX Runtime"],
  },
  {
    title: "Database & Infrastructure",
    list: ["PostgreSQL", "MySQL", "Redis", "Docker", "Nginx"],
  },
  {
    title: "Tools",
    list: ["Git", "GitHub", "Figma", "Linux"],
  },
];

export default function About() {
  return (
    <>
      <Section className="pt-24 pb-6 sm:pt-0 sm:pb-8 md:pt-0 md:pb-8 lg:pt-8 lg:pb-10">
        <Container className={GUTTER}>
          <SplitLines
            as={"h1"}
            className="text-balance self-start text-4xl font-light sm:text-6xl lg:text-[80px]"
          >
            About Me
          </SplitLines>
          <SplitLines
            as={"p"}
            className="mt-4 max-w-4xl text-pretty text-[15px] leading-7 [word-spacing:0.25em] text-surface/60 sm:text-base"
          >
            I&apos;m a Software Engineering student focused on building useful
            software through full-stack development, computer vision, and modern
            web technologies. I enjoy turning ideas and real-world problems into
            practical, well-engineered solutions.
          </SplitLines>
        </Container>
      </Section>

      <div className="overflow-hidden py-2 sm:py-0" aria-hidden="true">
        <p className="animate-marquee whitespace-nowrap text-center text-3xl font-medium text-surface motion-reduce:animate-none sm:text-6xl lg:text-8xl">
          Fullstack Developer & AI Enthusiast
        </p>
      </div>

      <Section className="py-4 sm:py-4 md:py-4 lg:py-4">
        <Container className={GUTTER}>
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
            <WideningImage
              from={1.15}
              radius="12px"
              className="order-first aspect-4/5 w-full sm:aspect-auto sm:h-120 md:order-last md:my-12 md:h-140 lg:my-16"
            >
              <Image
                src="/images/me-almet1.jpg"
                alt="Fasterino"
                fill
                sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw"
                className="object-cover object-top"
              />
            </WideningImage>

            <div className="min-w-0 space-y-4 md:order-first">
              {paragraphs.map((text, i) => (
                <SplitLines
                  as={"p"}
                  key={i}
                  className="text-pretty text-[15px] leading-7 [word-spacing:0.25em] text-surface/60 sm:text-base"
                >
                  {text}
                </SplitLines>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className={GUTTER}>
          <div className="grid gap-8 md:grid-cols-3 md:gap-8 lg:gap-16">
            {skills.map((skill, i) => (
              <SkillsCard
                key={skill.title}
                index={i}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className={GUTTER}>
          <div className="text-center">
            <SplitLines
              as={"h2"}
              className="text-balance text-2xl font-medium tracking-tight text-surface sm:text-3xl lg:text-4xl"
            >
              Technology Arsenal
            </SplitLines>
            <SplitLines
              as={"p"}
              className="mx-auto mt-3 max-w-3xl text-pretty text-sm leading-6 tracking-tight text-surface/60 sm:mt-4 sm:leading-7 md:text-base"
            >
              A comprehensive toolkit for building modern, scalable applications
            </SplitLines>
          </div>

          <div className="mt-8 grid gap-x-16 gap-y-8 sm:mt-12 sm:gap-y-10 md:grid-cols-2 md:gap-y-12 lg:mt-16 lg:grid-cols-3">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.title}
                title={tech.title}
                list={tech.list}
              />
            ))}
          </div>
        </Container>
      </Section>

      <div className="mx-4 mb-4 flex flex-col items-center justify-center rounded-2xl bg-black px-5 py-12 text-gray-100 sm:mx-6 sm:mb-6 sm:px-6 md:mx-10 md:mb-10 md:px-10 md:py-20">
        <h2 className="text-balance text-center text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
          Let&apos;s Build Something Meaningful.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-center text-sm leading-6 tracking-tight opacity-80 sm:leading-7">
          Have an idea, a problem to solve, or a project worth exploring?
          I&apos;m always interested in building useful software and exploring
          new ideas with technology.
        </p>
      </div>
    </>
  );
}
