import Link from "next/link";
import FooterBanner from "./footer-banner";
import { LocalTime } from "../../helpers/local-time";
import { Robot } from "@/helpers/robot";
import { DesktopOnly } from "@/helpers/desktop-only";

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

const pillClass =
  "rounded-full border border-white/80 px-6 py-3 text-center text-sm transition-colors hover:bg-white hover:text-black sm:text-left";

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
      <ul className="flex flex-col gap-1 text-sm text-white/90 md:gap-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="inline-block py-1.5 transition-opacity hover:opacity-60 md:py-0"
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
      <footer className="relative h-auto overflow-hidden rounded-t-[2.5rem] bg-surface text-white md:h-svh md:min-h-[640px]">
        <div className="flex flex-col gap-10 px-4 pb-[max(3rem,env(safe-area-inset-bottom))] pt-16 md:flex-row md:justify-between md:px-8 md:pb-0 md:pt-25">
          <div className="grid grid-cols-2 gap-x-8 gap-y-8 sm:flex sm:flex-wrap sm:gap-x-12">
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

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:gap-4 md:mt-16">
            <a href="tel:+620000000000" className={pillClass}>
              +62 000 0000 0000
            </a>
            <a href="mailto:contact@example.com" className={pillClass}>
              contact@example.com
            </a>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 hidden flex-col items-center md:flex"
        >
          <DesktopOnly>
            <Robot className="relative -mb-[10vw] h-56 w-56" />
          </DesktopOnly>
          <h2 className="z-10 translate-y-[12%] select-none text-[24vw] leading-[0.8] tracking-[-20px]">
            .FST
          </h2>
        </div>
      </footer>
    </>
  );
}
