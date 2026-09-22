"use client";

import { useEffect, useRef } from "react";

const SAMPLES = 8;
const RADIUS = 16;

function getBgLuminance(x: number, y: number): number {
  let el = document.elementFromPoint(x, y) as HTMLElement | null;

  while (el) {
    const bg = getComputedStyle(el).backgroundColor;

    const match = bg.match(
      /rgba?\(\s*(\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\s*\)/,
    );

    if (match) {
      const [, r, g, b, a] = match;

      if (a === undefined || parseFloat(a) > 0.5) {
        return (
          (0.299 * Number(r) + 0.587 * Number(g) + 0.114 * Number(b)) / 255
        );
      }
    }

    el = el.parentElement;
  }

  return 1;
}

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);

  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });

  const frame = useRef(0);
  const initialized = useRef(false);

  useEffect(() => {
    // Jangan aktifkan custom cursor pada touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const move = (e: MouseEvent) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;

      // Posisi pertama langsung mengikuti mouse
      if (!initialized.current) {
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        initialized.current = true;
      }
    };

    const isHoverTarget = (target: EventTarget | null) => {
      return (
        target instanceof Element &&
        !!target.closest("a, button, [data-cursor-hover]")
      );
    };

    const over = (e: MouseEvent) => {
      const ring = ringRef.current;

      if (!ring) return;

      ring.classList.toggle("cursor-hover", isHoverTarget(e.target));
    };

    let raf = 0;

    const loop = () => {
      const current = ring.current;
      const target = pos.current;

      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;

      const el = ringRef.current;

      if (el) {
        el.style.transform = `
          translate3d(${current.x}px, ${current.y}px, 0)
          translate(-50%, -50%)
        `;

        frame.current++;

        if (frame.current % 3 === 0) {
          const stops: string[] = [];

          for (let i = 0; i < SAMPLES; i++) {
            const angle = (i / SAMPLES) * Math.PI * 2;

            const px = current.x + Math.cos(angle) * RADIUS;

            const py = current.y + Math.sin(angle) * RADIUS;

            const lum = getBgLuminance(px, py);

            // HARUS HEX / RGB CSS valid
            const color = lum > 0.5 ? "#1e1e1e" : "#f3f4f6";

            const deg = (i / SAMPLES) * 360;

            stops.push(`${color} ${deg}deg`);
          }

          el.style.background = `conic-gradient(${stops.join(", ")})`;
        }
      }

      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    document.documentElement.classList.add("custom-cursor-active");

    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);

      document.documentElement.classList.remove("custom-cursor-active");

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        h-8
        w-8
        rounded-full
      "
      style={{
        mask: `
          radial-gradient(
            circle,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          )
        `,
        WebkitMask: `
          radial-gradient(
            circle,
            transparent calc(100% - 2px),
            black calc(100% - 2px)
          )
        `,
      }}
    />
  );
}
