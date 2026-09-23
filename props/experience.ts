import type { LucideIcon } from "lucide-react";

export interface ExpCardProps {
  icon: LucideIcon;
  number: string;
  title: string;
  description: string;
}

export type ExperienceCardProps = ExpCardProps;
export type ExperienceItem = ExpCardProps;
