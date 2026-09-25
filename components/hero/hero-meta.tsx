import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { MessageCircle } from "lucide-react";
import { heroContent } from "@/data/hero";

const linkClass =
  "inline-flex size-11 items-center justify-center text-neutral-800 transition-colors hover:text-neutral-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-800 md:size-auto";

const socialIcons = {
  linkedin: <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />,
  whatsapp: <MessageCircle size={20} />,
  github: <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />,
};

export default function HeroMetaLeft() {
  return (
    <div className="order-2 flex flex-row items-center justify-center gap-4 py-0 md:order-none md:flex-col md:justify-between md:gap-10 md:py-6 sm:px-8 lg:px-0">
      <div className="hidden flex-col items-center md:flex" aria-hidden="true">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
        <span className="h-55 w-0.5 rounded-full bg-neutral-800 opacity-70" />
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-800" />
      </div>

      <nav
        aria-label="Social links"
        className="flex items-center gap-2 md:flex-col md:gap-5"
      >
        {heroContent.socialLinks.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className={linkClass}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            {socialIcons[icon]}
          </a>
        ))}
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
        {heroContent.name}
      </p>
    </div>
  );
}
