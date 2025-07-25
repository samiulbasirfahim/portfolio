"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";

export default function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: string;
}) {
  return (
    <motion.a
      href={href}
      className="flex items-center gap-3 text-xl overflow-y-hidden relative font-semibold text-nowrap"
      whileHover={"hover"}
      initial="rest"
      animate="rest"
      target="_blank"
    >
      {children}
      <motion.span
        variants={{
          rest: {
            transform: "translateY(150%)",
          },
          hover: {
            transform: "translateY(0%)",
          },
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <Icon icon="fluent-mdl2:arrow-up-right-8" />
      </motion.span>
    </motion.a>
  );
}
