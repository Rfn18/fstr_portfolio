import type { ReactNode } from "react";

export interface DesktopOnlyProps {
  children: ReactNode;
  query?: string;
}

export interface RobotProps {
  className?: string;
}
