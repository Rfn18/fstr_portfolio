import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";
import ExperienceList from "@/components/experience/experience-list";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ExperienceList />
      <ExperienceList />
    </>
  );
}
