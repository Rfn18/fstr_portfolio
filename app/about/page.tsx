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

const paragraphs = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Asperiores aliquid voluptate est maxime veritatis adipisci voluptatem porro sunt, dignissimos cum magnam et perspiciatis possimus cumque quaerat? Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
  "Autem possimus labore modi distinctio voluptatem obcaecati, enim quam quaerat temporibus at recusandae iste delectus aspernatur sed mollitia vel sit laudantium repellendus!",
];

const skils = [ 
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
      <h2 className="mt-6 text-balance text-2xl font-normal tracking-tight text-surface md:text-xl lg:text-2xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 tracking-tight text-surface/60">
        {description}
      </p>
    </div>
  );
}

function TechnologyCard({ title, list }: TechnologyProps) {
  return (
    <div className="min-w-0">
      <h3 className="text-xl font-medium tracking-tight text-surface lg:text-2xl">
        {title}
      </h3>
      <ul className="mt-5 flex flex-wrap gap-2">
        {list.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/50 px-4 py-2 text-sm leading-none tracking-tight text-surface/60"
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
      <Section className="mx-auto max-w-7xl py-12 md:py-16">
        <h1 className="text-5xl font-light sm:text-6xl lg:text-8xl">
          About Me
        </h1>
        <p className="mt-4 max-w-3xl text-pretty text-base leading-7 tracking-tight text-surface/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          possimus labore modi distinctio voluptatem obcaecati, enim quam
          quaerat temporibus at recusandae iste delectus aspernatur sed mollitia
          vel sit laudantium repellendus! Asperiores aliquid voluptate est
          maxime veritatis adipisci voluptatem porro sunt, dignissimos cum
          magnam et perspiciatis possimus cumque quaerat?
        </p>
      </Section>

      <div className="overflow-hidden">
        <p className="animate-marquee whitespace-nowrap text-center text-4xl font-medium text-surface motion-reduce:animate-none sm:text-6xl lg:text-8xl">
          Fullstack Developer & AI Enthusiast
        </p>
      </div>

      <Section className="mx-auto max-w-7xl">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10 lg:gap-16">
          <div className="min-w-0 space-y-4">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="self-start text-pretty text-base leading-7 tracking-tight text-surface/60 sm:text-lg"
              >
                {text}
              </p>
            ))}
          </div>

          <div className="relative my-0 h-96 w-full overflow-hidden sm:h-[30rem] md:my-12 md:h-140 lg:my-16">
            <Image
              src="/images/me-sitting.37df8593.webp"
              alt="Fasterino"
              fill
              sizes="(min-width: 1280px) 600px, (min-width: 768px) 45vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </Section>

      <Section>
        <Container className="px-6 md:px-8 lg:px-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-8 lg:gap-16">
            {skils.map((skil, i) => (
              <SkillsCard
                key={skil.title}
                index={i}
                title={skil.title}
                description={skil.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-medium tracking-tight text-surface lg:text-4xl">
              Technology Arsenal
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-sm leading-7 tracking-tight text-surface/60 md:text-base">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          <div className="mt-10 grid gap-x-16 gap-y-10 sm:mt-12 md:grid-cols-2 md:gap-y-12 lg:mt-16 lg:grid-cols-3">
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

      <div className="mx-4 flex flex-col items-center justify-center rounded-2xl bg-black px-6 py-14 text-gray-100 sm:mx-6 md:mx-10 md:px-10 md:py-20">
        <h2 className="text-balance text-center text-3xl font-medium tracking-tight lg:text-4xl">
          Ready to Build Something Exceptional?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-pretty text-center text-sm leading-7 tracking-tight opacity-80">
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
