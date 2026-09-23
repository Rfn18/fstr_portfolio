export interface JourneyItem {
  year: string;
  title: string;
  role: string;
  description: string;
}

export interface JourneyContentProps {
  item: JourneyItem;
  align: "left" | "right";
  className?: string;
}
