"use client";

import { motion } from "motion/react";
import PageContainer from "@/components/core/PageContainer";
import SlideUpText from "@/components/ui/SlideUpText";
import Skills from "@/components/ui/Skills";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Home() {
    return (
        <PageContainer>
            <div className="hero text-4xl md:text-6xl lg:text-8xl h-[70dvh] w-full flex items-center justify-center relative">
                <div>
                    <SlideUpText>Samiul Basir Fahim</SlideUpText>
                    <motion.p
                        className="font-semibold text-xl text-center mt-4 uppercase"
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.2,
                                delay: 1,
                            },
                        }}
                    >
                        Svelte | NextJS | React | Tailwind | Rust | Tauri
                    </motion.p>
                </div>
            </div>
            <div
                className="w-full flex justify-center mb-40 cursor-pointer"
                onClick={() => {
                    const section = document.getElementById("skills");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
            >
                <motion.span
                    initial={{
                        y: 0,
                    }}
                    animate={{
                        y: [0, 40, 0],
                        transition: {
                            repeat: Infinity,
                            duration: 2,
                        },
                    }}
                >
                    <Icon icon="lineicons:scroll-down-2" fontSize={38} />
                </motion.span>
            </div>
            <div id="skills" className="py-8 sticky top-0">
                <Skills />
            </div>
        </PageContainer>
    );
}
