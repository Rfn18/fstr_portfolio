import type { TechnologyProps } from "@/props";

export function TechnologyCard({ title, list }: TechnologyProps) {
  return (
    <div className="min-w-0">
      <h3 className="text-lg font-medium tracking-tight text-surface sm:text-xl lg:text-2xl">
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-2 sm:mt-5">
        {list.map((item) => (
          <li
            key={item}
            className="rounded-full bg-white/50 hover:bg-surface hover:text-white transition duration-300 ease-in-out px-3.5 py-1.5 text-[13px] leading-none tracking-tight text-surface/60 sm:px-4 sm:py-2 sm:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
