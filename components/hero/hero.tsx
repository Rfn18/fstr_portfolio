// hero.tsx
import { Container } from "../layout/container";
import { Section } from "../layout/section";
import HeroMetaLeft, { HeroMetaRight } from "./hero-meta";
import { HeroTitle } from "./hero-title";
import { HeroVideo } from "./hero-video";

export function Hero() {
  return (
    <Section className="h-svh md:h-[calc(100vh-100px)] md:p-0 md:py-0 lg:py-0">
      <HeroVideo />
      <Container className="px-5 md:px-5 lg:px-12">
        <div className="flex h-[50svh] flex-col items-center justify-center gap-8 md:h-auto md:flex-row md:justify-between md:gap-16">
          <HeroMetaLeft />
          <HeroTitle />
          <HeroMetaRight />
        </div>

        <p
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 -translate-x-1/2 text-base font-normal text-neutral-600 md:bottom-auto md:translate-y-10 md:text-xl"
        >
          scroll down
        </p>
      </Container>
    </Section>
  );
}
