import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 pt-10">
      <div className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
      </div>
      <ul className="flex items-center justify-center gap-x-6 text-surface mr-10">
        <li className="text-md font-medium transition hover:text-muted ">
          <Link href="/">Home</Link>
        </li>
        <li className="text-md font-medium transition hover:text-muted ">
          <Link href="/about">About</Link>
        </li>
        <li className="text-md font-medium transition hover:text-muted ">
          <Link href="/work">Work</Link>
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
  );
}
