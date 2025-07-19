"use client";

import { motion, useScroll, useTransform } from "motion/react";
import PageContainer from "@/components/core/PageContainer";
import SlideUpText from "@/components/ui/SlideUpText";
import Skills from "@/components/ui/Skills";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
    const skillsRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: skillsRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <PageContainer>
            <div className="bg-forground top-0 sticky">
                <motion.div
                    className="hero text-5xl md:text-6xl lg:text-8xl h-screen w-full flex items-center justify-center sticky top-0 flex-col bg-background text-center"
                    style={{ scale, rotate, opacity: scale }}
                >
                    <div>
                        <div className="hidden lg:block">
                            <SlideUpText>Samiul Basir Fahim</SlideUpText>
                        </div>
                        <h1 className="md:hidden font-bold uppercase">
                            Samiul Basir Fahim
                        </h1>
                        <motion.p
                            className="font-semibold text-sm lg:text-xl text-center mt-4 uppercase text-wrap"
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

                    <div
                        className="w-full flex justify-center mb-40 cursor-pointer mt-10"
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
                </motion.div>
            </div>
            <div
                id="skills"
                className="py-8 sticky top-0 pb-40 bg-background w-full"
                ref={skillsRef}
            >
                <Skills />
            </div>
        </PageContainer>
    );
}
