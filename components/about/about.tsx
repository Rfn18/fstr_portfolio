import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { AboutSectionFirst, AboutSectionSecond } from "./about-section";

export function About() {
  return (
    <Section className="bg-surface py-0 px-0 lg:py-0 md:py-0 ">
      <Container className="px-0 md:px-0">
        <AboutSectionFirst />
        <span className="block w-full h-px bg-background opacity-20" />
        <AboutSectionSecond />
      </Container>
    </Section>
  );
}
