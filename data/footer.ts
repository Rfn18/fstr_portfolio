import { body, email, subject } from "./mail";

export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterBannerBand {
  items: string[];
  reverse?: boolean;
}

export const footerNavItems: FooterNavItem[] = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  {
    label: "Contact",
    href: `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  },
];

export const footerSocials: FooterNavItem[] = [
  { label: "Email", href: "mailto:rinofaster89@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "WhatsApp", href: "https://wa.me/6289506027877" },
  { label: "GitHub", href: "https://github.com/Rfn18" },
];

export const footerContact = {
  phone: "+62 8950 6027 877",
  email: "rinofaster89@gmail.com",
  version: "2026 © Edition",
  brandMark: ".FST",
};

export const footerBannerBands: FooterBannerBand[] = [
  {
    items: [
      "Driven by Passion, Built with Code",
      "Innovative Self-Made Creations",
      "Tailored Web Solutions",
    ],
    reverse: false,
  },
  {
    items: [
      "Custom Web Experiences",
      "Driven by Passion, Built with Code",
      "Innovative Self-Made Creations",
    ],
    reverse: true,
  },
];
