"use client";

import dynamic from "next/dynamic";
import type { Application } from "@splinetool/runtime";
import type { RobotProps } from "@/props";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export function Robot({ className }: RobotProps) {
  return (
    <div className={className}>
      <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 scale-[0.25] md:scale-[0.35]">
        <Spline
          scene="https://prod.spline.design/TO2L3zP7VWvApteW/scene.splinecode?v=999"
          onLoad={(app: Application) => {
            console.log("Spline loaded");
            app.setZoom(1.2);
          }}
        />
      </div>
    </div>
  );
}
