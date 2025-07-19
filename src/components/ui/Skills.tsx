"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skillset } from "@/data/skill-set";
import { Icon } from "@iconify/react";

export default function SkillSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

    const prevIndex = useRef(0);
    const [direction, setDirection] = useState<"up" | "down">("up");
    const hasMounted = useRef(false);

    useEffect(() => {
        if (hasMounted.current) {
            setDirection(activeIndex > prevIndex.current ? "up" : "down");
        } else {
            hasMounted.current = true;
        }
        prevIndex.current = activeIndex;
    }, [activeIndex]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        const index = categoryRefs.current.findIndex(
                            (el) => el === entry.target,
                        );
                        if (index !== -1) {
                            setActiveIndex(index);
                            break;
                        }
                    }
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            },
        );

        categoryRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full justify-center flex">
            <div className="flex gap-20 px-4 md:px-8 lg:px-16 flex-col md:flex-row">
                <div className="sticky md:top-32 h-max top-0 w-full flex">
                    <div className="md:hidden text-4xl font-semibold top-0 sticky bg-background w-full py-3 text-center overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={activeIndex}
                                initial={{
                                    opacity: 0,
                                    y: direction === "up" ? 40 : -40,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                exit={{
                                    opacity: 0,
                                    y: direction === "up" ? -40 : 40,
                                }}
                                transition={{ duration: 0.1, ease: "easeInOut" }}
                                className="inline-block"
                            >
                                {skillset[activeIndex].title}
                            </motion.span>
                        </AnimatePresence>
                    </div>
                    <ul className="space-y-8 hidden md:block">
                        {skillset.map((category, i) => (
                            <motion.li
                                key={category.title}
                                animate={{
                                    opacity: activeIndex === i ? 1 : 0.4,
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`text-6xl capitalize transition-all duration-200 font-extrabold`}
                            >
                                {category.title}
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="overflow-y-auto space-y-4 w-full">
                    {skillset.map((category, i) => {
                        return (
                            <div
                                key={category.title}
                                ref={(el) => {
                                    categoryRefs.current[i] = el;
                                }}
                            >
                                <ul className="grid grid-cols-1 gap-6 w-full">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill.title}
                                            className="pb-4 border-b border-muted bg-background/10 transition-all flex flex-col items-center text-center space-y-2"
                                        >
                                            <Icon icon={skill.icon} fontSize={30} className="mb-2" />
                                            <p className="font-semibold text-xl">{skill.title}</p>
                                            <p className="text-sm text-forground/70 font-mono">
                                                {skill.description}
                                            </p>
                                            {skill.level && (
                                                <span
                                                    className={`text-xs mt-2 px-2 py-0.5 rounded-full ${skill.level === "beginner"
                                                            ? "bg-yellow-400/10 text-yellow-500 border border-yellow-400/30"
                                                            : skill.level === "intermediate"
                                                                ? "bg-blue-400/10 text-blue-500 border border-blue-400/30"
                                                                : "bg-green-400/10 text-green-500 border border-green-400/30"
                                                        }`}
                                                >
                                                    {skill.level}
                                                </span>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
