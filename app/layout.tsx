import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Fasterino — Software Engineer",
    template: "%s — Fasterino",
  },
  description:
    "Portfolio of Fasterino, a software engineer focused on intelligent digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} bg-background text-foreground font-sans transition-colors duration-300`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
