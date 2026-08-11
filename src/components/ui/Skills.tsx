"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skillset } from "@/data/skill-set";
import { Icon } from "@iconify/react";
import Text from "./Text";

const ACTIVATION_POINT = 0.35;

export default function SkillSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const categoryRefs = useRef<(HTMLElement | null)[]>([]);
    const ticking = useRef(false);

    useEffect(() => {
        const updateActiveSection = () => {
            const sections = categoryRefs.current;

            if (!sections.length) {
                ticking.current = false;
                return;
            }

            const activationPoint = window.innerHeight * ACTIVATION_POINT;
            let candidateIndex = 0;

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];

                if (!section) continue;

                if (section.getBoundingClientRect().top <= activationPoint) {
                    candidateIndex = i;
                } else {
                    break;
                }
            }

            setActiveIndex((previousIndex) => {
                if (previousIndex === candidateIndex) {
                    return previousIndex;
                }

                setDirection(candidateIndex > previousIndex ? 1 : -1);

                return candidateIndex;
            });

            ticking.current = false;
        };

        const handleScroll = () => {
            if (ticking.current) return;

            ticking.current = true;
            requestAnimationFrame(updateActiveSection);
        };

        updateActiveSection();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    const scrollToCategory = (index: number) => {
        const section = categoryRefs.current[index];

        if (!section) return;

        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);

        const top = window.scrollY + section.getBoundingClientRect().top - 80;

        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    const variants = {
        initial: (direction: number) => ({
            opacity: 0,
            y: direction > 0 ? 30 : -30,
        }),
        animate: {
            opacity: 1,
            y: 0,
        },
        exit: (direction: number) => ({
            opacity: 0,
            y: direction > 0 ? -30 : 30,
        }),
    };

    return (
        <section className="mb-[20dvh] flex w-full justify-center">
            <div className="flex w-full max-w-[1800px] flex-col gap-12 px-4 md:flex-row md:gap-20 md:px-8 lg:px-16">
                <aside className="sticky top-0 z-20 h-max w-full shrink-0 md:top-32 md:w-auto">
                    <div className="sticky top-0 z-10 w-full overflow-hidden bg-background py-3 text-center md:hidden">
                        <AnimatePresence mode="wait" initial={false} custom={direction}>
                            <motion.span
                                key={activeIndex}
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                custom={direction}
                                transition={{
                                    duration: 0.2,
                                    ease: "easeInOut",
                                }}
                                className="inline-block text-4xl font-semibold"
                            >
                                {skillset[activeIndex].title}
                            </motion.span>
                        </AnimatePresence>
                    </div>

                    <ul className="hidden flex-col gap-8 md:flex">
                        {skillset.map((category, index) => (
                            <motion.li
                                key={category.title}
                                animate={{
                                    opacity: activeIndex === index ? 1 : 0.35,
                                }}
                                transition={{
                                    duration: 0.15,
                                    ease: "easeOut",
                                }}
                                onClick={() => scrollToCategory(index)}
                                className="cursor-pointer select-none text-5xl font-extrabold capitalize lg:text-6xl"
                            >
                                <Text>{category.title}</Text>
                            </motion.li>
                        ))}
                    </ul>
                </aside>

                <main className="w-full space-y-20 pb-[50vh]">
                    {skillset.map((category, categoryIndex) => (
                        <section
                            key={category.title}
                            id={`skills-${category.title}`}
                            ref={(element) => {
                                categoryRefs.current[categoryIndex] = element;
                            }}
                        >
                            <ul className="grid w-full grid-cols-1 gap-6">
                                {category.skills.map((skill) => (
                                    <li
                                        key={skill.title}
                                        className="flex flex-col items-center space-y-2 border-b border-muted bg-background/10 pb-4 text-center transition-all"
                                    >
                                        <Icon icon={skill.icon} fontSize={30} className="mb-2" />

                                        <p className="text-xl font-semibold">{skill.title}</p>

                                        <Text className="font-mono text-sm text-foreground/70">
                                            {skill.description}
                                        </Text>

                                        {skill.level && (
                                            <Text
                                                className={`mt-2 rounded-full px-2 py-0.5 text-xs ${skill.level === "beginner"
                                                        ? "border border-yellow-400/30 bg-yellow-400/10 text-yellow-500"
                                                        : skill.level === "intermediate"
                                                            ? "border border-blue-400/30 bg-blue-400/10 text-blue-500"
                                                            : "border border-green-400/30 bg-green-400/10 text-green-500"
                                                    }`}
                                            >
                                                {skill.level}
                                            </Text>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </main>
            </div>
        </section>
    );
}
