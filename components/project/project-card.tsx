import Image from "next/image";
import HoverTitle from "./hover-title";

export default function ProjectCard({
  title = "Patient Tracker",
}: {
  title?: string;
}) {
  return (
    <div className="w-full">
      <div className="flex flex-col">
        <h1 className="text-xl font-medium text-black transition-colors duration-700 sm:hidden dark:text-white">
          {title}
        </h1>
        <p className="mb-2 text-sm font-light text-black/60 transition-colors duration-700 md:text-lg dark:text-white/70">
          Landing Page
        </p>
      </div>

      <div data-hover-root className="group relative overflow-hidden">
        <Image
          src="/images/laptop.webp"
          width={1200}
          height={800}
          sizes="(min-width: 768px) 50vw, calc(100vw - 2rem)"
          alt={title}
          className="h-56 w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none sm:h-64 md:h-72 lg:h-112"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/35"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center p-6"
        >
          <HoverTitle
            text={title}
            className="text-3xl md:text-4xl lg:text-5xl"
          />
        </div>
      </div>
    </div>
  );
}
