"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useEffect,
  useLayoutEffect,
} from "react";
import { createPortal } from "react-dom";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

const DUR = 0.8;
const CURVE_HEIGHT = 120;
const CURVE_DEPTH = 30;

const TOP_PATH = (v: number) => `M0 40 Q50 ${40 + v} 100 40 Z`;
const BOTTOM_PATH = (v: number) => `M0 0 Q50 ${v} 100 0 Z`;

type Ctx = {
  navigate: (href: string, pageName: string) => Promise<void>;
  isEntering: React.MutableRefObject<boolean>;
  overlayRef: React.RefObject<HTMLDivElement | null>;
  bottomPathRef: React.RefObject<SVGPathElement | null>;
  textRef: React.RefObject<HTMLSpanElement | null>;
  resetBusy: () => void; // ← tambah ini
};

const TransitionContext = createContext<Ctx | null>(null);

export function TransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const topPathRef = useRef<SVGPathElement>(null);
  const bottomPathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const isEntering = useRef(false);
  const busy = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    const el = overlayRef.current;
    if (!el) {
      return;
    }
    gsap.set(el, { yPercent: 100 });
  }, [mounted]);

  const resetBusy = useCallback(() => {
    busy.current = false;
  }, []);

  const navigate = useCallback(
    async (href: string, pageName: string) => {
      if (busy.current) return;

      if (href === pathname) return;

      busy.current = true;
      const overlay = overlayRef.current;
      const topPath = topPathRef.current;
      const text = textRef.current;

      if (!overlay || !topPath || !text) {
        console.error("[nav] refs not ready");
        busy.current = false;
        return;
      }

      const topP = { v: 0 };

      gsap.set(overlay, { yPercent: 100 });
      gsap.set(topPath, { attr: { d: TOP_PATH(0) } });
      gsap.set(text, {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
      });

      await new Promise<void>((resolve) => {
        const tl = gsap.timeline({ onComplete: resolve });

        tl.to(overlay, { yPercent: 0, duration: DUR, ease: "power4.inOut" }, 0)
          .to(
            topP,
            {
              v: -CURVE_DEPTH * 2,
              duration: DUR * 0.5,
              ease: "power3.out",
              onUpdate: () => topPath.setAttribute("d", TOP_PATH(topP.v)),
            },
            0,
          )
          .to(
            topP,
            {
              v: 0,
              duration: DUR * 0.6,
              ease: "power4.inOut",
              onUpdate: () => topPath.setAttribute("d", TOP_PATH(topP.v)),
            },
            DUR * 0.35,
          )
          .call(
            () => {
              text.textContent = pageName;
            },
            [],
            DUR * 0.5,
          )
          .to(
            text,
            {
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
              duration: DUR * 0.5,
              ease: "power2.out",
            },
            DUR * 0.8,
          );
      });

      isEntering.current = true;
      router.push(href);
    },
    [router, pathname],
  );

  const overlay = (
    <div
      ref={overlayRef}
      className="pointer-events-none fixed inset-0 z-[99999] overflow-visible bg-surface will-change-transform"
    >
      <svg
        aria-hidden
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        style={{ height: CURVE_HEIGHT }}
        className="pointer-events-none absolute left-1/2 bottom-full w-screen -translate-x-1/2 overflow-visible"
      >
        <path ref={topPathRef} className="fill-surface" />
      </svg>

      <svg
        aria-hidden
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        style={{ height: CURVE_HEIGHT }}
        className="pointer-events-none absolute left-1/2 top-full w-screen -translate-x-1/2 overflow-visible"
      >
        <path ref={bottomPathRef} className="fill-surface" d={BOTTOM_PATH(0)} />
      </svg>

      <span
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center text-4xl font-medium text-white will-change-[opacity,filter]"
      />
    </div>
  );

  return (
    <TransitionContext.Provider
      value={{
        navigate,
        isEntering,
        overlayRef,
        bottomPathRef,
        textRef,
        resetBusy,
      }}
    >
      {children}
      {mounted && createPortal(overlay, document.body)}
    </TransitionContext.Provider>
  );
}

export function useTransitionCtx() {
  const ctx = useContext(TransitionContext);
  if (!ctx)
    throw new Error("useTransitionCtx must be inside TransitionProvider");
  return ctx;
}
