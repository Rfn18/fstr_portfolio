// hero-meta.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { MessageCircle } from "lucide-react";

const linkClass =
  "inline-flex size-11 items-center justify-center text-neutral-800 transition-colors hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 md:size-auto";

export default function HeroMetaLeft() {
  return (
    <div className="order-2 flex flex-row items-center justify-center gap-4 py-0 md:order-none md:mt-5 md:flex-col md:justify-between md:gap-10 md:py-6">
      {/* Garis vertikal: hanya md+ */}
      <div className="hidden flex-col items-center md:flex" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
        <span className="h-55 w-0.5 rounded-full bg-neutral-800 opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
      </div>

      {/* Ikon sosial: horizontal di mobile, vertikal di md+ */}
      <nav
        aria-label="Social links"
        className="flex items-center gap-2 md:flex-col md:gap-5"
      >
        <a href="#" aria-label="LinkedIn" className={linkClass}>
          <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
        </a>
        <a href="#" aria-label="WhatsApp" className={linkClass}>
          <MessageCircle size={20} />
        </a>
        <a href="#" aria-label="GitHub" className={linkClass}>
          <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
        </a>
      </nav>
    </div>
  );
}

export function HeroMetaRight() {
  return (
    <div
      aria-hidden="true"
      className="relative mt-5 hidden h-40 w-6 items-center justify-center md:flex"
    >
      <p className="absolute origin-center -rotate-90 whitespace-nowrap uppercase leading-0.5 opacity-70">
        Fasterino Rafael Vabiansyah
      </p>
    </div>
  );
}
