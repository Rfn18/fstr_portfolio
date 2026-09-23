import type { ReactNode } from "react";

export type ArrowButtonColor = "accent" | "light" | "dark";
export type ArrowButtonSize = "xs" | "sm" | "md" | "lg";

export interface ArrowButtonProps {
  href: string;
  children: ReactNode;
  color?: ArrowButtonColor;
  size?: ArrowButtonSize;
  ariaLabel?: string;
  className?: string;
}

export interface SmoothScrollProps {
  children: ReactNode;
}
