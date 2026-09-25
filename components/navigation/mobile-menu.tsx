"use client";

import { Plus } from "lucide-react";
import { TransitionLink } from "@/app/_transition/TransitionLink";
import { useEffect, useRef, useState } from "react";
import TextHover from "../animation/text-hover";
import { useMagnetic } from "@/helpers/use-magnetic";
import { body, email, subject } from "@/data/mail";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  {
    href: `/mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    label: "Contact",
  },
];

const BAR =
  "absolute left-1/2 top-1/2 -ml-2.5 -mt-px h-0.5 w-5 rounded-full bg-white transition duration-300";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [magneticReady, setMagneticReady] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      setMagneticReady(false);
      return;
    }
    const t = setTimeout(() => setMagneticReady(true), 700);
    return () => clearTimeout(t);
  }, [open]);

  const visible = scrolled || open;
  useMagnetic(wrapRef, 0.6, magneticReady);

  return (
    <>
      <div
        ref={wrapRef}
        className={`fixed right-6 top-6 z-60 -m-6 p-6 transition duration-300 md:right-10 md:top-10 ${
          visible
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-75 opacity-0 max-md:pointer-events-auto max-md:scale-100 max-md:opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`relative block size-14 rounded-3xl bg-surface text-white transition-[box-shadow] duration-300 ${
            !open ? "shadow-sm shadow-accent/10" : ""
          }`}
        >
          <span
            className={`${BAR} ${open ? "translate-y-0 rotate-45" : "-translate-y-1.5"}`}
          />
          <span className={`${BAR} ${open ? "scale-x-0 opacity-0" : ""}`} />
          <span
            className={`${BAR} ${open ? "translate-y-0 -rotate-45" : "translate-y-1.5"}`}
          />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        role="dialog"
        aria-label="Navigation menu"
        inert={!open}
        style={{
          clipPath: open
            ? "inset(0px 0px 0px 0px round 1.5rem)"
            : "inset(calc(var(--b) - var(--m)) calc(var(--b) - var(--m)) calc(100% - (var(--b) - var(--m)) - 3.5rem) calc(100% - (var(--b) - var(--m)) - 3.5rem) round 1.5rem)",
        }}
        className={`fixed right-[var(--m)] top-[var(--m)] z-50 isolate w-[calc(100%_-_2*var(--m))] max-w-4xl overflow-hidden rounded-3xl bg-surface text-white transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [--b:1.5rem] [--m:1rem] sm:[--m:1.5rem] md:[--b:2.5rem] motion-reduce:transition-none ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`p-6 transition-opacity duration-300 sm:p-10 ${
            open ? "opacity-100 delay-300" : "opacity-0"
          }`}
        >
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <ul className="mt-16 space-y-1 md:mt-4 md:max-w-xs">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <TransitionLink
                    href={href}
                    data-hover-root
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-2 text-5xl font-medium tracking-tight sm:text-6xl hover:text-gray-200 transition duration-200 ease-in"
                  >
                    <TextHover text={label} mode="root" />
                    <Plus
                      size={18}
                      className="opacity-60 transition group-hover:rotate-90 group-hover:opacity-100"
                    />
                  </TransitionLink>
                </li>
              ))}
            </ul>

            <div className="hidden flex-col items-end md:mt-12 md:flex">
              <p className="font-semibold">👋 Nice to see you!</p>
              <p className="mt-2 text-sm text-white/60">
                I&apos;m Fasterino, Software Engineer
              </p>
              <div className="mt-6 aspect-4/3 w-full overflow-hidden rounded-2xl bg-neutral-200">
                <video
                  src="/videos/glassy-obj.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-hidden="true"
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between text-xs text-white/50">
            <span>Made with ❤️ by fasterino</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </>
  );
}
