import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import { div } from "framer-motion/client";

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
              <Link href="/">Home</Link>
            </li>
            <li className="text-md font-light transition hover:text-muted ">
              <Link href="/about">About</Link>
            </li>
            <li className="text-md font-light transition hover:text-muted ">
              <Link href="/works">Works</Link>
            </li>
            <li className="text-xs font-medium">
              <Link href="/contact">
                <div className="flex items-center gap-x-.5">
                  <h3 className="bg-surface text-white py-3 px-4 rounded-full flex items-center gap-x-2">
                    Contact
                  </h3>
                  <div className="mt-1 bg-surface text-white py-3 px-3 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Link>
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
