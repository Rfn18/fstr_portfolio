import Image from "next/image";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { ArrowButton } from "../ui/arrow-button";
import ProjectCard from "./project-card";
import { SplitLines } from "../animation/split-lines";

const projects = [
  {
    title: "CCTV Face Recognition",
    image: "/images/cctv.png",
    category: "Computer Vision",
  },
  {
    title: "Pasient Tracker",
    image: "/images/patient-tracker.png",
    category: "Landing Page",
  },
  { title: "Medistaff", image: "/images/medistaff.png", category: "Web App" },
  { title: "Schetelebot", image: "/images/schetelebot.png", category: "Bot" },
];

export default function Project() {
  return (
    <Section className="bg-gray-100 py-12 text-black transition-colors duration-700 ease-in-out md:py-4 lg:py-4 dark:bg-surface dark:text-white">
      <Container className="mx-auto w-full px-4 py-0 md:px-16 md:py-0 lg:px-24 lg:py-0">
        <SplitLines
          as={"h2"}
          className="mb-8 max-w-2xl text-balance self-start text-2xl font-medium leading-snug tracking-tight transition-colors duration-700 sm:text-3xl md:mb-12"
        >
          Transforming ideas into exceptional digital experiences through
          expertise and innovation
        </SplitLines>

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-y-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
            />
          ))}
        </div>

        <div className="mt-8 flex w-full items-center justify-center md:mt-10">
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
