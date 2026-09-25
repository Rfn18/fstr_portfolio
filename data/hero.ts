export interface HeroSocialLink {
  label: string;
  href: string;
  icon: "linkedin" | "whatsapp" | "github";
}

export interface HeroContent {
  name: string;
  intro: string;
  title: string[];
  socialLinks: HeroSocialLink[];
}

export const heroContent: HeroContent = {
  name: "Fasterino Rafael Vabiansyah",
  intro: "Hi! Im Fasterino",
  title: ["Full-stack Developer", "Engineer & AI Enthusiast"],
  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/fasterino-rafael-work",
      icon: "linkedin",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/6289506027877",
      icon: "whatsapp",
    },
    {
      label: "GitHub",
      href: "https://github.com/Rfn18",
      icon: "github",
    },
  ],
};
