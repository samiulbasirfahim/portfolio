"use client";

import { motion } from "motion/react";

import { CustomLink } from "../core/PageTransition";
import { usePathname } from "next/navigation";
import SlideUpText from "../ui/SlideUpText";

export default function Navbar() {
    const path = usePathname();

    return (
        <nav className="p-4 flex justify-end items-center mb-10 py-4 sticky top-0  z-[9999]">
            <motion.div whileHover={"hovered"} whileTap={"taped"}>
                <motion.div className="w-dvw fixed top-0 left-0 flex justify-end h-dvw pointer-events-none ">
                    <motion.div
                        className="w-1/4 h-full bg-black relative top-[-100%]"
                        variants={{
                            taped: {
                                top: "-70%",
                                transition: {
                                    duration: 0.2,
                                },
                            },
                            hovered: {
                                top: "-90%",
                                transition: {
                                    duration: 0.3,
                                },
                            },
                        }}
                    />
                </motion.div>

                <motion.div
                    className="z-[99] py-4 rotate-90 text-xl font-semibold"
                    animate={{
                        translateX: [15, 10, 15],
                        transition: {
                            duration: 2,
                            repeat: Infinity,
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
                        {path === "/works" ? "HOME" : "WORKS"}
                    </CustomLink>
                </motion.div>
            </motion.div>
        </nav>
    );
}
