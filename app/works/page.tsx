import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import ProjectCard from "@/components/project/project-card";

const GUTTER = "max-w-8xl px-6 md:px-8 lg:px-10";

export default function Work() {
  return (
    <>
      <Section className="pt-24 pb-6 sm:pt-0 sm:pb-8 md:pt-0 md:pb-8 lg:pt-8 lg:pb-10">
        <Container className={GUTTER}>
          <div>
            <h1 className="text-balance self-start text-4xl font-light sm:text-6xl lg:text-[80px]">
              My Work
            </h1>
            <p className="mt-4 max-w-4xl text-pretty text-[15px] leading-7 [word-spacing:0.25em] text-surface/60 sm:text-base">
              Discover my latest projects where design, technology, and
              creativity come together to craft engaging digital experiences.
              Below is a collection of my favourites.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-y-8 justify-between sm:grid-cols-2 md:gap-y-6 md:gap-x-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </Container>
      </Section>
    </>
  );
}
