import RevealOnScroll from "@/components/animation/reveal-on-scroll";
import { SplitLines } from "@/components/animation/split-lines";
import WideningImage from "@/components/animation/widening-image";
import WideningSection from "@/components/animation/widening-section";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import Image from "next/image";

interface SkillsProps {
  index: number;
  title: string;
  description: string;
}

interface TechnologyProps {
  title: string;
  list: string[];
}

const GUTTER = "max-w-8xl px-6 md:px-8 lg:px-10";

const paragraphs = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Asperiores aliquid voluptate est maxime veritatis adipisci voluptatem porro sunt, dignissimos cum magnam et perspiciatis possimus cumque quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
];

const skills = [
  {
    title: "Web Development",
    description:
      "Development of web applications with modern and responsive technologies.",
  },
  {
    title: "Mobile Application Development",
    description:
      "Development of mobile applications with modern and responsive technologies.",
  },
  {
    title: "UI/UX Design",
    description:
      "Design of user interfaces and user experiences with modern and responsive technologies.",
  },
];

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
  {
    title: "AI & Machine Learning",
    list: [
      "OpenAI API",
      "LangChain",
      "RAG",
      "Google Generative AI",
      "Vector Embeddings",
    ],
  },
  {
    title: "3D & Graphics",
    list: [
      "Three.js",
      "React Three Fiber",
      "WebGL",
      "Gaussian Splatting",
      "GSAP",
      "Framer Motion",
    ],
  },
  {
    title: "Databases & State",
    list: [
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Drizzle ORM",
      "Redis",
      "React Query",
      "Zustand",
    ],
  },
  {
    title: "DevOps & Cloud",
    list: [
      "Docker",
      "CI/CD",
      "Google Cloud Platform",
      "Vercel",
      "VPS",
      "Nginx",
      "Caddy",
      "PM2",
    ],
  },
  {
    title: "UI & Styling",
    list: ["Tailwind CSS", "ShadCN UI", "Radix UI", "MUI", "Framer Motion"],
  },
];

function SkillsCard({ index, title, description }: SkillsProps) {
  return (
    <div className="min-w-0">
      <span className="text-sm text-surface/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="mt-2 border-t border-surface/20" />
      <h3 className="mt-5 text-balance text-xl font-normal tracking-tight text-surface sm:mt-6 sm:text-2xl md:text-xl lg:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 tracking-tight text-surface/60 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

function TechnologyCard({ title, list }: TechnologyProps) {
  return (
    <div className="min-w-0">
      <h3 className="text-lg font-medium tracking-tight text-surface sm:text-xl lg:text-2xl">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
        {list.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/50 hover:bg-surface hover:text-white transition duration-300 ease-in-out px-3.5 py-1.5 text-[13px] leading-none tracking-tight text-surface/60 sm:px-4 sm:py-2 sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            possimus labore modi distinctio voluptatem obcaecati, enim quam
            quaerat temporibus at recusandae iste delectus aspernatur sed
            mollitia vel sit laudantium repellendus! Asperiores aliquid
            voluptate est maxime veritatis adipisci voluptatem porro sunt,
            dignissimos cum magnam et perspiciatis possimus cumque quaerat?
            mollitia vel sit laudantium repellendus! Asperiores aliquid
            voluptate est maxime veritatis adipisci voluptatem porro sunt,
            dignissimos cum magnam et perspiciatis possimus cumque quaerat?
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
          Ready to Build Something Exceptional?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-center text-sm leading-6 tracking-tight opacity-80 sm:leading-7">
          Whether you need an AI-powered SaaS platform, an immersive 3D
          experience, or a high-performance web application, I bring the
          technical expertise and creative vision to make it happen. Let&apos;s
          discuss how we can turn your ambitious ideas into production-ready
          solutions that drive real business results.
        </p>
      </div>
    </>
  );
}
