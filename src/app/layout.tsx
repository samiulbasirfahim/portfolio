import PageTransition, { CustomLink } from "@/components/core/PageTransition";
import "./globals.css";
import Link from "next/link";
import FIrstLoading from "@/components/core/FirstLoading";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <PageTransition>
                    <div className="space-x-10 p-8">
                        <CustomLink href={"/"}>HOME</CustomLink>
                        <CustomLink href={"/about"}>About</CustomLink>
                        <CustomLink href={"/about/me"}>About</CustomLink>
                        <CustomLink href={"/about/someone"}>About</CustomLink>
                    </div>
                    {children}
                </PageTransition>
            </body>
        </html>
    );
}
