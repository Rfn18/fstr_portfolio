"use client";

import Link from "next/link";
import { useTransitionCtx } from "./TransitionProvider";

function getPageName(pathname: string) {
  if (pathname === "/") return "Home";
  const seg = pathname.split("/").filter(Boolean).pop() ?? "";
  return seg.charAt(0).toUpperCase() + seg.slice(1);
}

export function TransitionLink({
  href,
  children,
  onClick,
  ...rest
}: React.ComponentProps<typeof Link>) {
  const { navigate } = useTransitionCtx();

  return (
    <Link
      href={href}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
        navigate(href.toString(), getPageName(href.toString()));
      }}
      {...rest}
    >
      {children}
    </Link>
  );
}
