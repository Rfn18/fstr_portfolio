import { cn } from "@/lib/utils";
import type { ContainerProps } from "@/props";

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-360", className)}>{children}</div>
  );
}
