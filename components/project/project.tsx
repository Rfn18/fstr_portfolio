import Image from "next/image";
import { Container } from "../layout/container";
import { Section } from "../layout/section";

function ProjectCard() {
  return (
    <div className="">
      <p className="text-xs font-light tracking-wide text-neutral-500 sm:text-sm md:text-lg mb-4">
        Patient Tracker
      </p>
      <Image src={"/images/laptop.webp"} width={600} height={80} alt="s" />
    </div>
  );
}

export default function Project() {
  return (
    <Section>
      <Container className="mx-auto w-full py-0 md:py-0 lg:py-0 px-4 md:px-16 lg:px-24">
        <h1 className="max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl mb-12">
          Transforming ideas into exceptional digital experiences through
          expertise and innovation
        </h1>
        <div className="grid grid-cols-2 gap-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </Container>
    </Section>
  );
}
