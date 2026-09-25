"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTransitionCtx } from "./_transition/TransitionProvider";

gsap.registerPlugin(useGSAP);

const DUR = 0.8;
const HOLD = 0.4;
const CURVE_DEPTH = 30;
const BOTTOM_PATH = (v: number) => `M0 0 Q50 ${v} 100 0 Z`;

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { overlayRef, bottomPathRef, textRef, isEntering, resetBusy } =
    useTransitionCtx();
  const [revealed, setRevealed] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const bottomPath = bottomPathRef.current;
      const text = textRef.current;

      if (!isEntering.current || !overlay || !bottomPath || !text) {
        setRevealed(true);
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event("transition:revealed"));
        });
        return;
      }

      const bottomP = { v: 0 };
      let finished = false;

      const finishEnter = () => {
        if (finished) return;
        finished = true;
        setRevealed(true);
        isEntering.current = false;
        resetBusy();
        requestAnimationFrame(() => {
          window.dispatchEvent(new Event("transition:revealed"));
        });
      };

      gsap.set(overlay, { yPercent: 0 });
      gsap.set(bottomPath, { attr: { d: BOTTOM_PATH(0) } });
      gsap.set(text, { opacity: 1, filter: "blur(0px)" });

      const tl = gsap
        .timeline({ onComplete: finishEnter })
        .to({}, { duration: HOLD })
        .to(text, { opacity: 0, filter: "blur(12px)", duration: 0.4 }, 0)
        .to(
          overlay,
          { yPercent: -100, duration: DUR, ease: "power4.inOut" },
          0.2,
        )
        .to(
          bottomP,
          {
            v: CURVE_DEPTH * 2,
            duration: DUR * 0.55,
            ease: "power3.in",
            onUpdate: () =>
              bottomPath.setAttribute("d", BOTTOM_PATH(bottomP.v)),
          },
          0.2,
        )
        .to(
          bottomP,
          {
            v: 0,
            duration: DUR * 0.5,
            ease: "power4.out",
            onUpdate: () =>
              bottomPath.setAttribute("d", BOTTOM_PATH(bottomP.v)),
          },
          0.2 + DUR * 0.5,
        );

      return () => {
        tl.kill();
        finishEnter();
        gsap.set(overlay, { yPercent: -100 });
      };
    },
    { scope: rootRef, dependencies: [pathname] },
  );

  return (
    <div ref={rootRef}>
      <div
        className="transition-all duration-[400ms] ease-out"
        style={{
          opacity: revealed ? 1 : 0,
          filter: revealed ? "blur(0px)" : "blur(8px)",
          transform: revealed ? "translateY(0)" : "translateY(12px)",
          willChange: "opacity, filter, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
