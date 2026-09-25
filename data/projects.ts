export interface ProjectItem {
  title: string;
  image: string;
  category: string;
}

export const projects: ProjectItem[] = [
  {
    title: "CCTV Face Recognition",
    image: "/images/laptop.png",
    category: "Computer Vision",
  },
  {
    title: "Pasient Tracker",
    image: "/images/laptop.webp",
    category: "Landing Page",
  },
  { title: "Medistaff", image: "/images/laptop.webp", category: "Web App" },
  { title: "Schetelebot", image: "/images/laptop.webp", category: "Bot" },
];
