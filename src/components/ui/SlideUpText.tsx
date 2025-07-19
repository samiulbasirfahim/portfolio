"use client";

import { motion } from "motion/react";
import Text from "./Text";
import { HTMLAttributes } from "react";

const DURATION = 0.25;
const STAGGER = 0.025;

export default function SlideUpText({
  children,
  ...rest
}: { children: string } & HTMLAttributes<HTMLElement>) {
  return (
    <Text {...rest}>
      <motion.span
        initial="initial"
        whileHover="hovered"
        className="relative block overflow-hidden whitespace-nowrap font-black uppercase"
        style={{
          lineHeight: 1,
        }}
      >
        <div className="">
          {children.split("").map((l: string, i: number) => (
            <motion.span
              className="inline-block"
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
      </motion.span>
    </Text>
  );
}
