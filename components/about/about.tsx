import CurvedSection from "../animation/curved-section";
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import { AboutSectionFirst, AboutSectionSecond } from "./about-section";

export function About() {
  return (
    <Section className="bg-surface py-0 px-0 lg:py-0 md:py-0 ">
      <Container className="px-0 md:px-0">
        <CurvedSection
          variant="top"
          className="bg-surface"
          fillClassName="fill-surface"
        >
          <AboutSectionFirst />
          <span
            id="explore"
            className="block w-full h-px scroll-mt-20 bg-background opacity-20"
          />
          <AboutSectionSecond />
        </CurvedSection>
      </Container>
    </Section>
  );
}
