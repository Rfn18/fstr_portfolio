import { TechnologyProps } from "@/props";
import { Pills } from "../ui/pills";

export function TechnologyCard({ title, list }: TechnologyProps) {
  return (
    <div className="min-w-0">
      <h3 className="text-lg font-medium tracking-tight text-surface sm:text-xl lg:text-2xl">
        {title}
      </h3>
      <Pills list={list} className="mt-4 sm:mt-5" />
    </div>
  );
}
