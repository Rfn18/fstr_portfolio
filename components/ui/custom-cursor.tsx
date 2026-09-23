"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const ring = ringRef.current;
    if (!ring) return;

    let rafId: number;
    let fullscreen = false;

    const handleMouseMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (!fullscreen) ring.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      ring.style.opacity = "0";
    };

    const handleMouseDown = () => {
      ring.dataset.scaled = "true";
    };

    const handleMouseUp = () => {
      ring.dataset.scaled = "false";
    };

    const animate = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.2;
      pos.current.y += (target.current.y - pos.current.y) * 0.2;

      const scale = ring.dataset.scaled === "true" ? 0.8 : 1;
      ring.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%) scale(${scale})`;

      rafId = requestAnimationFrame(animate);
    };

    const handleFullscreenChange = () => {
      fullscreen = !!document.fullscreenElement;
      document.body.classList.toggle("custom-cursor-active", !fullscreen);
      ring.style.opacity = fullscreen ? "0" : "1";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    rafId = requestAnimationFrame(animate);

    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("custom-cursor-active");
    };
  }, []);

  return <div ref={ringRef} className="custom-cursor-ring" />;
}
