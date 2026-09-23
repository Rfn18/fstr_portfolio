export interface FooterNavItem {
  label: string;
  href: string;
}

export interface FooterColumnProps {
  title: string;
  items: FooterNavItem[];
}

export interface StarburstProps {
  className?: string;
}

export interface FooterBannerGroupProps {
  items: string[];
}

export interface FooterBannerBandProps {
  items: string[];
  className?: string;
  reverse?: boolean;
}
