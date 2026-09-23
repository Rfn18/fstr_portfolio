import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}
