import { cn } from "@/lib/utils";
import type { SectionProps } from "@/props";

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-12 sm:py-16 md:py-20 lg:py-24", className)}
    >
      {children}
    </section>
  );
}
