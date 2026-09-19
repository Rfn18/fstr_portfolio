import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";
import ExperienceList from "@/components/experience/experience-list";
import Project from "@/components/project/project";
import Journey from "@/components/journey/journey";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceList />
      <Project />
      <Journey />
    </>
  );
}
