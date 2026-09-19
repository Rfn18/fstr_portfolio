// components/ui/arrow-button.tsx
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const colors = {
  accent: "bg-accent text-neutral-900 hover:bg-lime-300",
  light: "bg-white text-neutral-900 hover:bg-neutral-200",
  dark: "bg-neutral-900 text-white hover:bg-neutral-800",
} as const;

const sizes = {
  sm: "px-4 py-3 text-sm sm:px-7 sm:py-4",
  md: "px-5 py-4 text-sm sm:px-8 sm:py-4 sm:text-base",
  lg: "px-6 py-5 text-base sm:px-10 sm:py-6 sm:text-lg",
} as const;

type ArrowButtonProps = {
  href: string;
  children: React.ReactNode;
  color?: keyof typeof colors;
  size?: keyof typeof sizes;
  ariaLabel?: string;
  className?: string;
};

export function ArrowButton({
  href,
  children,
  color = "accent",
  size = "md",
  ariaLabel,
  className,
}: ArrowButtonProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cn("mt-2 flex w-fit items-center gap-.5 sm:mt-4", className)}
    >
      <span
        className={cn(
          "rounded-full font-medium transition-colors",
          colors[color],
          sizes[size],
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 bg-accent text-surface transition-colors hover:bg-accent/80 sm:h-12 sm:w-12 mt-1"
      >
        <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </span>
    </Link>
  );
}
