import Image from "next/image";
import MobileMenu from "./mobile-menu";
import TextHover from "../animation/text-hover";
import { ArrowButton } from "../ui/arrow-button";

export default function Navbar() {
  return (
    <>
      <div className="relative">
        <nav
          id="main-nav"
          className="flex items-center justify-between px-6 pt-6 sm:px-8 md:py-10"
        >
          <div className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>
          <ul className="hidden items-center justify-center gap-x-6 text-surface mr-10 md:flex">
            <li className="text-md font-light transition hover:text-muted ">
              <TextHover text="Home" href="/" />
            </li>
            <li className="text-md font-light transition hover:text-muted ">
              <TextHover text="About" href="/about" />
            </li>
            <li className="text-md font-light transition hover:text-muted ">
              <TextHover text="Works" href="/works" />
            </li>
            <li className="ml-3">
              <ArrowButton
                href="/contact"
                color="dark"
                size="xs"
                ariaLabel="Go to contacct page"
                className="mt-0 sm:mt-0"
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
