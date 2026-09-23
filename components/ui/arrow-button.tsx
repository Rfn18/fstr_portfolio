"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import TextHover from "../animation/text-hover";
import { useRef } from "react";
import { useMagnetic } from "@/helpers/use-magnetic";
import type { ArrowButtonProps } from "@/props";

const colors = {
  accent: {
    base: "bg-accent text-neutral-900",
    fill: "bg-white",
    hoverText: "",
  },
  light: {
    base: "bg-white text-neutral-900",
    fill: "bg-neutral-200 dark:bg-neutral-300",
    hoverText: "",
  },
  dark: {
    base: "bg-neutral-900 text-white",
    fill: "bg-white",
    hoverText: "group-hover:text-neutral-900",
  },
} as const;

const sizes = {
  xs: {
    pill: "px-3 py-3 text-xs sm:px-4 sm:py-3 sm:text-xs",
    arrow: "size-8 sm:size-10",
    icon: "size-3.5 sm:size-4",
  },
  sm: {
    pill: "px-4 py-3 text-sm sm:px-7 sm:py-4",
    arrow: "size-11 sm:size-13",
    icon: "size-4 sm:size-5",
  },
  md: {
    pill: "px-5 py-4 text-sm sm:px-8 sm:py-4 sm:text-base",
    arrow: "size-13 sm:size-14",
    icon: "size-4 sm:size-5",
  },
  lg: {
    pill: "px-6 py-5 text-base sm:px-10 sm:py-6 sm:text-lg",
    arrow: "size-16 sm:size-19",
    icon: "size-5 sm:size-6",
  },
} as const;

const fillBase =
  "absolute inset-0 origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100";

const slide =
  "absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-out";

export function ArrowButton({
  href,
  children,
  color = "accent",
  size = "md",
  ariaLabel,
  className,
}: ArrowButtonProps) {
  const c = colors[color] ?? colors.accent;
  const s = sizes[size] ?? sizes.md;
  const wrapRef = useRef<HTMLDivElement>(null);
  useMagnetic(wrapRef, 0.6);

  return (
    <div ref={wrapRef} className={cn("mt-2 flex w-fit sm:mt-4", className)}>
      <Link
        href={href}
        aria-label={ariaLabel}
        data-hover-root
        className="group flex w-fit items-center"
      >
        <span
          className={cn(
            "relative overflow-hidden rounded-full font-medium transition-colors duration-300",
            c.base,
            c.hoverText,
            s.pill,
          )}
        >
          <span aria-hidden="true" className={cn(fillBase, c.fill)} />
          <TextHover
            text={children as string}
            mode="root"
            className="relative"
          />
        </span>

        <span
          aria-hidden="true"
          className={cn(
            "relative mt-1 shrink-0 overflow-hidden rounded-full transition-colors duration-300",
            c.base,
            c.hoverText,
            s.arrow,
          )}
        >
          <span className={cn(fillBase, c.fill)} />
          <span
            className={cn(
              slide,
              "group-hover:translate-x-full group-hover:-translate-y-full",
            )}
          >
            <ArrowUpRight className={s.icon} />
          </span>

          <span
            className={cn(
              slide,
              "-translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0",
            )}
          >
            <ArrowUpRight className={s.icon} />
          </span>
        </span>
      </Link>
    </div>
  );
}
