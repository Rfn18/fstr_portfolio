"use client";

import dynamic from "next/dynamic";
import type { Application } from "@splinetool/runtime";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

export function Robot({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 scale-[0.25] md:scale-[0.55]">
        <Spline
          scene="https://prod.spline.design/TO2L3zP7VWvApteW/scene.splinecode"
          onLoad={(app: Application) => app.setZoom(1.2)}
        />
      </div>
    </div>
  );
}
