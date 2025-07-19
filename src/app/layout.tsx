import PageTransition from "@/components/core/PageTransition";

import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LayoutWrapper from "@/components/core/LayoutWrapper";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
    subsets: ["latin"],
    variable: "--font-geist-mono",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={`${geist.variable} ${geistMono.variable} antialiased`}
        >
            <LayoutWrapper>
                <body>
                    <PageTransition>
                        <Navbar />
                        {children}
                    </PageTransition>
                </body>
            </LayoutWrapper>
        </html>
    );
}
