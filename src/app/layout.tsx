import PageTransition from "@/components/core/PageTransition";

import { Geist, Geist_Mono, Victor_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LayoutWrapper from "@/components/core/LayoutWrapper";
import { Metadata } from "next";
import CursorWrapper from "@/components/core/CursorWrapper";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const victorMono = Victor_Mono({
  subsets: ["latin"],
  variable: "--font-victor-mono"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Samiul Basir Fahim",
  description:
    "A self-taught web developer skilled in Svelte, Next.js, React, and Rust. Explore projects, skills, and experience in building modern, performant applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${victorMono.variable} antialiased`}
    >
      <LayoutWrapper>
        <body>
          <CursorWrapper>
            <PageTransition>
              <Navbar />
              {children}
            </PageTransition>
          </CursorWrapper>
        </body>
      </LayoutWrapper>
    </html>
  );
}
