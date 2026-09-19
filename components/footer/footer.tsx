import Image from "next/image";
import Link from "next/link";
import FooterBanner from "./footer-banner";
import { LocalTime } from "../../helpers/local-time";
import { footer } from "framer-motion/client";
import { Robot } from "@/helpers/robot";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOCIALS = [
  { label: "Email", href: "mailto:contact@example.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "WhatsApp", href: "https://wa.me/620000000000" },
  { label: "GitHub", href: "https://github.com" },
];

function Column({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="mb-3 text-xs uppercase text-white/50">{title}</p>
      <ul className="flex flex-col gap-3 text-sm text-white/90">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="transition-opacity hover:opacity-60"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <FooterBanner />
      <footer className="relative h-svh min-h-[640px] overflow-hidden rounded-t-[2.5rem] bg-surface text-white">
        <div className="flex flex-col gap-10 px-4 pt-25 md:flex-row md:justify-between md:px-8">
          <div className="flex flex-wrap gap-x-12 gap-y-8">
            <Column title="Links" items={LINKS} />
            <Column title="Socials" items={SOCIALS} />
            <div>
              <p className="mb-3 text-xs uppercase text-white/50">Local time</p>
              <LocalTime />
            </div>
            <div>
              <p className="mb-3 text-xs uppercase text-white/50">Version</p>
              <p className="text-sm">2026 © Edition</p>
            </div>
          </div>

          <div className="flex flex-wrap items-start gap-4 md:mt-16">
            <a
              href="tel:+620000000000"
              className="rounded-full border border-white/80 px-6 py-3 text-sm transition-colors hover:bg-white hover:text-black"
            >
              +62 000 0000 0000
            </a>
            <a
              href="mailto:contact@example.com"
              className="rounded-full border
            border-white/80 px-6 py-3 text-sm transition-colors hover:bg-white
            hover:text-black"
            >
              contact@example.com
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-center">
          <Robot className="relative -mb-[10vw] h-40 w-40 md:h-56 md:w-56" />
          <h2 className="translate-y-[12%] z-10  select-none text-[30vw] leading-[0.8] tracking-[-20px] md:text-[24vw]">
            .FST
          </h2>
        </div>
      </footer>
    </>
  );
}
