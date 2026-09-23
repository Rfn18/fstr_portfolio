import type { SkillsProps } from "@/props";

export function SkillsCard({ index, title, description }: SkillsProps) {
  return (
    <div className="min-w-0">
      <span className="text-sm text-surface/60">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="mt-2 border-t border-surface/20" />
      <h3 className="mt-5 text-balance text-xl font-normal tracking-tight text-surface sm:mt-6 sm:text-2xl md:text-xl lg:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 tracking-tight text-surface/60 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>
    </div>
  );
}

