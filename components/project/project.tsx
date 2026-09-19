import Image from "next/image";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ArrowButton } from "../ui/button";

function ProjectCard() {
  return (
    <div>
      <p className="mb-2 text-xs font-light tracking-wide text-black/60 transition-colors duration-700 sm:text-sm md:text-lg dark:text-white/70">
        Patient Tracker
      </p>
      <Image
        src="/images/laptop.webp"
        width={600}
        height={80}
        alt="Patient Tracker"
      />
    </div>
  );
}

export default function Project() {
  return (
    <Section className="bg-gray-100 py-2 text-black transition-colors duration-700 ease-in-out md:py-4 lg:py-4 dark:bg-surface dark:text-white">
      <Container className="mx-auto w-full px-4 py-0 md:px-16 md:py-0 lg:px-24 lg:py-0">
        <h1 className="mb-12 max-w-2xl self-start text-2xl font-medium leading-snug tracking-tight transition-colors duration-700 sm:text-3xl">
          Transforming ideas into exceptional digital experiences through
          expertise and innovation
        </h1>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
        <div className="mt-10 flex w-full items-center justify-center">
          <ArrowButton
            href="/projects"
            color="accent"
            size="md"
            ariaLabel="Go to projects page"
            className="mt-2 sm:mt-4"
          >
            Projects
          </ArrowButton>
        </div>
      </Container>
    </Section>
  );
}
