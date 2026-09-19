import { Section } from "../layout/section";

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

function Starburst({ className }: { className?: string }) {
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

function Group({ items }: { items: string[] }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden="true">
      {[...items, ...items].map((text, i) => (
        <div key={i} className="flex items-center gap-10">
          <Starburst className="size-9 shrink-0" />
          <span className="whitespace-nowrap text-2xl font-medium tracking-tight sm:text-3xl">
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}

function Band({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[150%] -translate-x-1/2 overflow-hidden bg-black py-5 text-white transition-colors duration-700 ${className}`}
    >
      <div
        className={`flex w-max animate-marquee motion-reduce:animate-none ${
          reverse ? "[animation-direction:reverse]" : ""
        }`}
      >
        <Group items={items} />
        <Group items={items} />
      </div>
    </div>
  );
}

export default function FooterBanner() {
  return (
    <Section className="overflow-hidden bg-gray-100 text-black transition-colors duration-700 dark:bg-surface dark:text-white">
      <div className="relative h-[360px] w-full md:h-[440px]">
        <Band items={BAND_A} className="-translate-y-[60%] rotate-[6deg]" />
        <Band
          items={BAND_B}
          reverse
          className="-translate-y-[40%] -rotate-[6deg]"
        />
      </div>
    </Section>
  );
}
