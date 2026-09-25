"use client";

import Link from "next/link";
import { useTransitionCtx } from "./TransitionProvider";

function getPageName(pathname: string) {
  if (pathname === "/") return "Home";
  const seg = pathname.split("/").filter(Boolean).pop() ?? "";
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}

function isExternalLink(href: string) {
  return (
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("//") ||
    href.startsWith("#")
  );
}

export function TransitionLink({
  href,
  children,
  onClick,
  ...rest
}: React.ComponentProps<typeof Link>) {
  const { navigate } = useTransitionCtx();
  const hrefStr = href.toString();

  if (isExternalLink(hrefStr)) {
    return (
      <a href={hrefStr} onClick={onClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        navigate(hrefStr, getPageName(hrefStr));
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
