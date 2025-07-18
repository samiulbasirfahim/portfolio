import PageTransition from "@/components/core/PageTransition";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <PageTransition>
          <Navbar />
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
