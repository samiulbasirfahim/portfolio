import ExternalLink from "../ui/ExternalLink";
import Text from "../ui/Text";

export default function Footer() {
    const socialLinks = [
        ["GitHub", "https://github.com/samiulbasirfahim"],
        ["LinkedIn", "https://www.linkedin.com/in/samiulbasirfahim"],
        ["CodeChef", "https://www.codechef.com/users/samiulbsrfahim"],
    ];

    const bangladeshTime = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
    ).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });

    return (
        <footer className="sticky bottom-0 z-0 bg-foreground text-background">
            <div className="w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-background/20">
                <div className="flex flex-col gap-6 max-w-sm">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">Samiul Basir Fahim</h2>
                        <Text className="text-background/70">
                            Crafting digital experiences with purpose. Available for freelance opportunities.
                        </Text>
                    </div>

                    <div className="flex flex-col gap-1">
                        <a href="mailto:samiulbasirfahim.rxen@gmail.com" className="font-semibold text-lg hover:underline underline-offset-4 decoration-2">
                            samiulbasirfahim.rxen@gmail.com
                        </a>
                        <p className="text-background/70 text-sm">
                            Mymensingh, Bangladesh • {bangladeshTime} (BST)
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end gap-6">
                    <div className="flex flex-wrap gap-4 md:gap-8">
                        {socialLinks.map(([title, href], i) => (
                            <ExternalLink key={i} href={href}>
                                {title}
                            </ExternalLink>
                        ))}
                    </div>

                    <Text className="text-sm text-background/50">
                        &copy; {new Date().getFullYear()} Samiul Basir Fahim. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    );
}
