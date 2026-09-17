import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { MessageCircle } from "lucide-react";

export default function HeroMetaLeft() {
  return (
    <div className="flex flex-col items-center mt-5 justify-between gap-10 py-6">
      <div className="flex flex-col items-center">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
        <span className="w-0.5 h-55 opacity-70 rounded-full bg-neutral-800" />
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-800" />
      </div>

      {/* Menu ikon sosial */}
      <div className="flex flex-col items-center gap-5">
        <a
          href="#"
          aria-label="LinkedIn"
          className="text-neutral-800 hover:text-neutral-500 transition-colors"
        >
          <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
        </a>
        <a
          href="#"
          aria-label="WhatsApp"
          className="text-neutral-800 hover:text-neutral-500 transition-colors"
        >
          <MessageCircle size={20} />
        </a>
        <a
          href="#"
          aria-label="GitHub"
          className="text-neutral-800 hover:text-neutral-500 transition-colors"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}

export function HeroMetaRight() {
  return (
    <div className="relative mt-5 w-6 h-40 flex items-center justify-center">
      <h1 className="absolute uppercase leading-0.5 opacity-70 -rotate-90 whitespace-nowrap origin-center">
        Fasterino Rafael Vabiansyah
      </h1>
    </div>
  );
}
