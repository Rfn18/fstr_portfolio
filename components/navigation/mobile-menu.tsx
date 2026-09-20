"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/works", label: "Works" },
  { href: "/contact", label: "Contact" },
];

const BAR =
  "absolute left-1/2 top-1/2 -ml-2.5 -mt-px h-0.5 w-5 rounded-full bg-white transition duration-300";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const visible = scrolled || open;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className={`fixed right-6 top-6 md:right-10 md:top-10 z-60 size-14 rounded-3xl bg-surface text-white shadow-lg transition duration-300 ${
          visible
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-75 opacity-0 max-md:pointer-events-auto max-md:scale-100 max-md:opacity-100"
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

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
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
        className={`fixed right-[var(--m)] top-[var(--m)] z-50 max-h-[calc(100dvh_-_2*var(--m))] w-[calc(100%_-_2*var(--m))] max-w-4xl overflow-y-auto bg-surface text-white transition-[clip-path,visibility] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] [--b:1.5rem] [--m:1rem] sm:[--m:1.5rem] md:[--b:2.5rem] motion-reduce:transition-none ${
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
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group flex items-center justify-between py-2 text-5xl font-medium tracking-tight sm:text-6xl"
                  >
                    {label}
                    <Plus
                      size={18}
                      className="opacity-60 transition group-hover:rotate-90 group-hover:opacity-100"
                    />
                  </Link>
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
            <span>Made with ❤️ by FSTR</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </>
  );
}
