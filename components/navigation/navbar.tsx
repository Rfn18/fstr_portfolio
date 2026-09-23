import Image from "next/image";
import MobileMenu from "./mobile-menu";
import TextHover from "../animation/text-hover";
import { ArrowButton } from "../ui/arrow-button";

export default function Navbar() {
  return (
    <>
      <div className="relative dark:bg-surface transition-colors duration-700 ease-in-ou">
        <nav
          id="main-nav"
          className="flex items-center justify-between px-6 pt-6 t sm:px-8 md:py-10"
        >
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full transition-[filter] duration-700 ease-in-out dark:invert"
            />
          </div>
          <ul className="mr-10 hidden items-center justify-center gap-x-6 text-surface transition-colors duration-700 ease-in-out dark:text-white md:flex">
            <li className="text-md font-light transition hover:text-muted dark:hover:text-white/70">
              <TextHover text="Home" href="/" />
            </li>
            <li className="text-md font-light transition hover:text-muted dark:hover:text-white/70">
              <TextHover text="About" href="/about" />
            </li>
            <li className="text-md font-light transition hover:text-muted dark:hover:text-white/70">
              <TextHover text="Works" href="/works" />
            </li>
            <li className="ml-3">
              <ArrowButton
                href="/contact"
                color="dark"
                size="xs"
                ariaLabel="Go to contacct page"
                className="mt-0 dark:invert sm:mt-0"
              >
                Contact
              </ArrowButton>
            </li>
          </ul>
        </nav>
        <div
          id="nav-sentinel"
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-[220px] size-px"
        />
      </div>
      <MobileMenu />
    </>
  );
}
