import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import { TransitionProvider } from "./_transition/TransitionProvider";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} bg-background text-foreground font-sans transition-colors duration-300`}
      >
        <TransitionProvider>
          <CustomCursor />
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
