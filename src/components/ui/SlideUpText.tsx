"use client";

import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function SlideUpText({ children }: { children: string }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
      }}
    >
      <div className="">
        {children.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },

              hovered: {
                y: "-120%",
              },
            }}
            transition={{
              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {children.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },

              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,

              ease: "easeInOut",

              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? "\u00A0" : l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
}
