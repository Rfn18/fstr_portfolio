import type { ReactNode, ElementType } from "react";
import type { UseScrollOptions } from "framer-motion";

export interface CurvedSectionProps {
  children: ReactNode;
  variant?: "top" | "footer";
  className?: string;
  fillClassName?: string;
  maxHeight?: string;
  offset?: UseScrollOptions["offset"];
  shadow?: boolean;
}

export interface HoverSwapPillProps {
  href: string;
  label: string;
  hoverLabel: string;
  className?: string;
}

export interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  from?: number;
  axis?: "x" | "y" | "both";
  offset?: UseScrollOptions["offset"];
}

export interface SplitLinesProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  duration?: number;
  stagger?: number;
  enter?: string;
  leave?: string;
}

export interface TextHoverProps {
  text: string;
  href?: string;
  className?: string;
  mode?: "self" | "root";
  onClick?: () => void;
}

export interface WideningImageProps {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
  radius?: string;
  offset?: UseScrollOptions["offset"];
}

export interface WideningSectionProps {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
  from?: string;
  fromY?: string;
  radius?: string;
  offset?: UseScrollOptions["offset"];
}
