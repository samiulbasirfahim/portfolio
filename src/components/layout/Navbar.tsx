"use client";

import { motion } from "motion/react";

import { CustomLink } from "../core/PageTransition";
import { usePathname } from "next/navigation";
import Text from "../ui/Text";
import Link from "next/link";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 right-0 z-[99] bg-blue-400 w-10 font-mono">
      <motion.div whileHover={"hovered"} whileTap={"taped"} className="">
        <motion.div className="w-dvw fixed top-0 left-0 flex justify-end h-dvw pointer-events-none ">
          <motion.div
            className="w-1/4 bg-black relative"
            initial={{
              height: 0,
            }}
            variants={{
              taped: {
                top: 0,
                height: "50dvh",
                transition: {
                  duration: 0.2,
                },
              },
              hovered: {
                top: 0,
                height: "40dvh",
                transition: {
                  duration: 0.3,
                },
              },
            }}
          />
        </motion.div>

        <motion.div
          className="z-[99] rotate-90 text-xl font-semibold flex justify-end gap-4 top-10 fixed right-[-60px] lg:right-[-40px]"
          animate={{
            translateX: [60, 50, 60],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          variants={{
            taped: {
              color: "var(--color-background)",
            },
            hovered: {
              color: "var(--color-background)",
            },
          }}
        >
          <CustomLink href={path === "/works" ? "/" : "/works"}>
            <Text>{path === "/works" ? "HOME" : "WORKS"}</Text>
          </CustomLink>

          <motion.div
            className="border-l-2"
            variants={{
              taped: {
                borderColor: "var(--color-background)",
              },
              hovered: {
                borderColor: "var(--color-background)",
              },
            }}
          />

          <Link href="https://www.dropbox.com/scl/fi/q6yd8kdl2i0tnwsn8njq2/SamiulBasirFahim.pdf?rlkey=5hsn27wke4i0295evuern8osb&st=mwwkake8&dl=0" target="_blank">
            RESUME
          </Link>
        </motion.div>
      </motion.div>
    </nav>
  );
}
