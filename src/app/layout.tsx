import PageTransition from "@/components/core/PageTransition";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import LayoutWrapper from "@/components/core/LayoutWrapper";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
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
