export interface ProjectProps {
  slug: string;
  title?: string;
  image?: string;
  category?: string;
}

export type ProjectCardProps = ProjectProps;

export interface ProjectItem {
  slug: string;
  title: string;
  image: string;
  category: string;
}

export interface MarqueeItemProps {
  title: string;
  image?: string;
}

export interface HoverTitleProps {
  text: string;
  className?: string;
}

export interface PillsProps {
  list: string[];
  className?: string;
}
