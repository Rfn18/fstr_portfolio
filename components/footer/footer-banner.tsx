import { cn } from "@/lib/utils";
import { Section } from "../layout/section";
import type {
  StarburstProps,
  FooterBannerGroupProps,
  FooterBannerBandProps,
} from "@/props";

const BAND_A = [
  "Driven by Passion, Built with Code",
  "Innovative Self-Made Creations",
  "Tailored Web Solutions",
];

const BAND_B = [
  "Custom Web Experiences",
  "Driven by Passion, Built with Code",
  "Innovative Self-Made Creations",
];

function Starburst({ className }: StarburstProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      {Array.from({ length: 32 }).map((_, i) => (
        <line
          key={i}
          x1="20"
          y1="2"
          x2="20"
          y2="10"
          stroke="currentColor"
          strokeWidth="0.8"
          transform={`rotate(${(i * 360) / 32} 20 20)`}
        />
      ))}
      <circle
        cx="20"
        cy="20"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Group({ items }: FooterBannerGroupProps) {
  return (
    <div
      className="flex shrink-0 items-center gap-6 pr-6 sm:gap-10 sm:pr-10"
      aria-hidden="true"
    >
      {[...items, ...items].map((text, i) => (
        <div key={i} className="flex items-center gap-6 sm:gap-10">
          <Starburst className="size-6 shrink-0 sm:size-8 md:size-9" />
          <span className="whitespace-nowrap text-lg font-medium tracking-tight sm:text-2xl md:text-3xl">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

function Band({ items, className, reverse = false }: FooterBannerBandProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-1/2 w-[150%] -translate-x-1/2 overflow-hidden bg-surface py-3 text-gray-100 transition-colors duration-700 ease-in-out sm:py-4 md:py-5 dark:bg-gray-100 dark:text-black",
        className,
      )}
    >
      <div
        className={cn(
          "flex w-max animate-marquee motion-reduce:animate-none",
          reverse && "[animation-direction:reverse]",
        )}
      >
        <Group items={items} />
        <Group items={items} />
      </div>
    </div>
  );
}

export default function FooterBanner() {
  return (
    <Section className="overflow-hidden bg-gray-100 py-1 text-black transition-colors duration-700 ease-in-out dark:bg-surface dark:text-white sm:py-2 md:py-4 lg:py-8">
      <div className="relative h-[200px] w-full sm:h-[240px]">
        <Band items={BAND_A} className="-translate-y-[60%] rotate-[6deg]" />
        <Band
          items={BAND_B}
          reverse
          className="-translate-y-[60%] -rotate-[6deg]"
        />
      </div>
    </Section>
  );
}
