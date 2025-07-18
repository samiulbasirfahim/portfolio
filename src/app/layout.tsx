import type { Metadata } from "next";
import "./globals.css";
import PageTransition, { CustomLink } from "@/components/core/PageTransition";
export const metadata: Metadata = {
  title: "Samiul Basir Fahim",
  description:
    "Self-taught full-stack web developer, building clean and scalable web solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PageTransition>
          <div className="space-x-10 p-8">
            <CustomLink href={"/"}>HOME</CustomLink>
            <CustomLink href={"/about"}>About</CustomLink>
            <CustomLink href={"/projects"}>Projects</CustomLink>
            <CustomLink href={"/projects/scholario"}>Scholario</CustomLink>
            <CustomLink href={"/projects/Ghor"}>Ghor</CustomLink>
          </div>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
