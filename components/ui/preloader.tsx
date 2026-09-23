"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { useLenis } from "lenis/react";

const words = [
  "Hello",
  "Hola",
  "Halo",
  "Bonjour",
  "Ciao",
  "こんにちは",
  "안녕하세요",
  "Hallo",
];

const slideUp = {
  initial: { y: 0 },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};

const fadeIn = {
  initial: { opacity: 0 },
  enter: { opacity: 0.8, transition: { duration: 1, delay: 0.2 } },
};

const STORAGE_KEY = "home-preloader-shown";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const decisionMade = useRef(false); // ← flag anti double-mount
  const lenis = useLenis();

  // putuskan: main atau skip — HANYA SEKALI
  useEffect(() => {
    setMounted(true);

    if (decisionMade.current) return;
    decisionMade.current = true;

    const alreadyShown = sessionStorage.getItem(STORAGE_KEY);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (alreadyShown || reduced) {
      onComplete();
      return;
    }

    sessionStorage.setItem(STORAGE_KEY, "1");
    setShouldPlay(true);
  }, [onComplete]);

  // ukur viewport
  useEffect(() => {
    if (!shouldPlay) return;
    const update = () =>
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [shouldPlay]);

  // lock scroll
  useEffect(() => {
    if (!shouldPlay) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [shouldPlay]);

  useEffect(() => {
    if (!shouldPlay) return;
    lenis?.stop();
    return () => lenis?.start();
  }, [lenis, shouldPlay]);

  // ganti kata
  useEffect(() => {
    if (!shouldPlay) return;

    if (index === words.length - 1) {
      const t = setTimeout(onComplete, 500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setIndex((i) => i + 1),
      index === 0 ? 1000 : 150,
    );
    return () => clearTimeout(t);
  }, [index, onComplete, shouldPlay]);

  const { width, height } = viewport;
  const initialPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;
  const targetPath = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;

  if (!mounted || !shouldPlay) return null;

  const overlay = (
    <motion.div
      variants={slideUp}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-neutral-900"
    >
      {width > 0 && (
        <>
          <motion.p
            variants={fadeIn}
            initial="initial"
            animate="enter"
            className="absolute z-10 flex items-center text-4xl text-white md:text-6xl"
          >
            <span className="mr-3 h-3 w-3 rounded-full bg-white" />
            {words[index]}
          </motion.p>

          <svg
            className="absolute top-0 w-full"
            style={{ height: height + 300 }}
            viewBox={`0 0 ${width} ${height + 300}`}
            preserveAspectRatio="none"
          >
            <motion.path
              fill="#171717"
              initial={{ d: initialPath }}
              exit={{
                d: targetPath,
                transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
              }}
            />
          </svg>
        </>
      )}
    </motion.div>
  );

  return createPortal(overlay, document.body);
}
