import ExternalLink from "../ui/ExternalLink";

export default function Footer() {
  const socialLinks = [
    ["GitHub", "https://github.com/samiulbasirfahim"],
    ["LinkedIn", "#"],
    ["Twitter", "#"],
    ["CodeChef", "#"],
    ["LeetCode", "#"],
  ];

  const bangladeshTime = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }),
  ).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="sticky bottom-0 z-0 bg-foreground text-background overflow-x-hidden">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 px-6 py-16">
        <div className="w-full flex flex-col items-center md:items-end justify-end gap-4 order-2 md:order-1 border-t-3 border-t-background/30 md:border-0 pt-12 md:pt-0">
          {socialLinks.map(([title, href], i) => (
            <ExternalLink key={i} href={href}>
              {title}
            </ExternalLink>
          ))}
        </div>

        <div className="w-full flex flex-col items-center md:items-start justify-end gap-4 font-semibold text-lg md:text-xl order-1 md:order-2">
          <p className="text-3xl md:text-5xl font-bold">Samiul Basir Fahim</p>
          <p>Mymensingh, Bangladesh</p>
          <a
            href="mailto:samiulbasirfahim.rxen@gmail.com"
            className="underline underline-offset-2"
          >
            samiulbasirfahim.rxen@gmail.com
          </a>
          <p>+8801728071074</p>
          <p className="text-sm md:text-base">Time: {bangladeshTime} (BST)</p>
        </div>
      </div>

      <p className="text-sm text-center pb-6">
        Built with Next.js, Tailwind CSS, and Framer Motion.
      </p>
    </div>
  );
}
