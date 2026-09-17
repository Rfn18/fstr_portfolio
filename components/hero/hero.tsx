import { Container } from "../layout/container";
import { Section } from "../layout/section";
import HeroMetaLeft, { HeroMetaRight } from "./hero-meta";
import { HeroTitle } from "./hero-title";

export function Hero() {
  return (
    <Section className="h-screen md:h-[calc(100vh-80px)]  md:p-0 md:py-0 lg:py-0">
      <Container className="px-5 md:px-5 lg:px-12">
        <div className="flex items-center justify-between gap-16">
          <HeroMetaLeft />
          <HeroTitle />
          <HeroMetaRight />
        </div>
        <h1 className="absolute left-1/2 -translate-x-1/2 text-xl font-normal text-neutral-600">
          scroll down
        </h1>
      </Container>
    </Section>
  );
}
