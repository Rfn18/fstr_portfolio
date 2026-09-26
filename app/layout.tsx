import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import SmoothScroll from "@/components/ui/smooth-scroll";
import CustomCursor from "@/components/ui/custom-cursor";
import { TransitionProvider } from "./_transition/TransitionProvider";
import { DebugEruda } from "@/components/ui/debug-eruda";
import Script from "next/script";

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
      <head>
        <Script id="error-catcher" strategy="beforeInteractive">
          {`
    var div = document.createElement('div');
    div.style.cssText = 'position:fixed;top:0;left:0;right:0;background:red;color:white;z-index:999999;padding:8px;font-size:14px;';
    div.innerText = 'SCRIPT TEST - JIKA INI MUNCUL BERARTI SCRIPT JALAN';
    document.body.appendChild(div);
  `}
        </Script>
      </head>
      <body
        className={`${poppins.variable} ${geistMono.variable} bg-background text-foreground font-sans transition-colors duration-300`}
      >
        <TransitionProvider>
          <CustomCursor />
          <Navbar />
          <SmoothScroll>{children}</SmoothScroll>
          {/* <DebugEruda /> */}
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}
