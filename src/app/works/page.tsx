"use client";

import PageContainer from "@/components/core/PageContainer";
import Text from "@/components/ui/Text";
import { projects, Project } from "@/data/projects";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect, useState, useCallback } from "react";
import { Icon } from "@iconify/react";

interface WorkCardProps {
    project: Project;
    index: number;
    total: number;
    currentRef: React.RefObject<HTMLDivElement | null>;
    nextRef: React.RefObject<HTMLDivElement | null> | null;
    onNavigatePrev?: () => void;
    onNavigateNext?: () => void;
}

function WorkCard({
    project,
    index,
    total,
    currentRef,
    nextRef,
    onNavigatePrev,
    onNavigateNext,
}: WorkCardProps) {
    const [selectedImage, setSelectedImage] = useState(project.images[0] || "");

    useEffect(() => {
        if (project.images.length > 0) {
            setSelectedImage(project.images[0]);
        }
    }, [project.images]);

    const { scrollYProgress } = useScroll({
        target: nextRef || undefined,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <div ref={currentRef} className="bg-forground top-0 sticky w-full min-h-dvh">
            <motion.div
                id={`project-${index}`}
                className="min-h-dvh w-full flex flex-col justify-between items-center sticky top-0 bg-background text-foreground py-5 md:py-8"
                style={nextRef ? { scale, rotate, opacity: scale } : {}}
            >
                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:pl-32 lg:pl-44 flex justify-between items-center z-20 shrink-0">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-foreground/60">
                            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                        </span>
                        {project.headerTags?.map((tag) => (
                            <span
                                key={tag}
                                className="font-mono text-[10px] sm:text-xs uppercase px-2.5 py-0.5 border border-foreground/30 rounded-full text-foreground/80"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {index > 0 ? (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onNavigatePrev?.();
                            }}
                            aria-label="Previous project"
                            className="cursor-pointer p-1 hover:opacity-60 transition-opacity"
                        >
                            <motion.span
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, -4, 0],
                                    transition: { repeat: Infinity, duration: 1.5 },
                                }}
                                className="inline-block"
                            >
                                <Icon icon="lineicons:scroll-down-2" fontSize={22} className="rotate-180 md:text-2xl" />
                            </motion.span>
                        </button>
                    ) : (
                        <div className="w-6" />
                    )}
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:pl-32 lg:pl-44 flex-1 flex items-center z-10 my-auto py-4">
                    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-center">
                        <div className="lg:col-span-6 flex flex-col gap-3 sm:gap-4 md:gap-5 order-2 lg:order-1">
                            <h2 className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-black uppercase tracking-tight leading-tight break-words">
                                {project.title}
                            </h2>

                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                {project.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="font-mono text-[10px] sm:text-xs uppercase px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-foreground/30 bg-foreground/5"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <Text className="font-mono text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed max-w-lg">
                                {project.description}
                            </Text>

                            <div className="flex flex-wrap gap-2.5 sm:gap-3 pt-1">
                                {project.links.map((link, i) => (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs md:text-sm font-mono font-bold uppercase border-2 border-foreground hover:bg-foreground hover:text-background transition-colors duration-200 cursor-pointer"
                                    >
                                        <Icon icon={link.icon} fontSize={18} />
                                        <span>{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex flex-col gap-2.5 sm:gap-3 items-center w-full order-1 lg:order-2">
                            {selectedImage && (
                                <div className="max-w-full max-h-[36dvh] sm:max-h-[44dvh] md:max-h-[48dvh] w-fit h-fit flex items-center justify-center">
                                    <img
                                        src={selectedImage}
                                        alt={project.title}
                                        className="max-w-full max-h-[34dvh] sm:max-h-[42dvh] md:max-h-[46dvh] w-auto h-auto object-contain transition-transform duration-500 hover:scale-[1.02] block"
                                    />
                                </div>
                            )}

                            {project.images.length > 1 && (
                                <div className="flex gap-2 w-full justify-start sm:justify-center lg:justify-start overflow-x-auto pb-1 max-w-full">
                                    {project.images.map((img, i) => (
                                        <button
                                            type="button"
                                            key={i}
                                            onClick={() => setSelectedImage(img)}
                                            className={`h-10 sm:h-12 md:h-14 w-fit max-w-[70px] sm:max-w-[80px] shrink-0 transition-all cursor-pointer flex items-center justify-center ${selectedImage === img
                                                ? "scale-105 opacity-100"
                                                : "opacity-40 hover:opacity-80"
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`Thumbnail ${i + 1}`}
                                                className="max-h-full w-auto object-contain block"
                                            />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 md:pl-32 lg:pl-44 flex justify-end items-center z-20 shrink-0">
                    {index < total - 1 ? (
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                onNavigateNext?.();
                            }}
                            aria-label="Next project"
                            className="cursor-pointer p-1 hover:opacity-60 transition-opacity"
                        >
                            <motion.span
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, 4, 0],
                                    transition: { repeat: Infinity, duration: 1.5 },
                                }}
                                className="inline-block"
                            >
                                <Icon icon="lineicons:scroll-down-2" fontSize={22} className="md:text-2xl" />
                            </motion.span>
                        </button>
                    ) : (
                        <div className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-foreground/40">
                            END OF WORKS
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
}

export default function WorksPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const targetRefs = useRef(
        projects.map(() => ({ current: null as HTMLDivElement | null }))
    );

    const scrollToProject = useCallback((index: number) => {
        const clampedIndex = Math.max(0, Math.min(projects.length - 1, index));
        const targetElement = targetRefs.current[clampedIndex]?.current;
        if (targetElement) {
            setActiveIndex(clampedIndex);
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    useEffect(() => {
        let ticking = false;

        const updateActiveSection = () => {
            const scrollPos = window.scrollY + window.innerHeight * 0.4;
            for (let i = projects.length - 1; i >= 0; i--) {
                const el = targetRefs.current[i]?.current;
                if (el && el.offsetTop <= scrollPos) {
                    setActiveIndex(i);
                    break;
                }
            }
            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(updateActiveSection);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <PageContainer>
            <aside className="fixed left-6 md:left-10 lg:left-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 font-mono select-none">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        onClick={() => scrollToProject(index)}
                        className={`flex items-center gap-2 cursor-pointer transition-all duration-200 group ${activeIndex === index
                            ? "opacity-100 font-bold text-foreground translate-x-1"
                            : "opacity-35 hover:opacity-80 text-foreground"
                            }`}
                    >
                        <span className="text-xs opacity-60">
                            {String(index + 1).padStart(2, "0")}.
                        </span>
                        <Text className="text-xs lg:text-sm uppercase tracking-wider">
                            {project.title}
                        </Text>
                    </div>
                ))}
            </aside>

            <div ref={containerRef} className="relative w-full">
                {projects.map((project, index) => (
                    <WorkCard
                        key={project.id}
                        project={project}
                        index={index}
                        total={projects.length}
                        currentRef={targetRefs.current[index]}
                        nextRef={
                            index < projects.length - 1
                                ? targetRefs.current[index + 1]
                                : null
                        }
                        onNavigatePrev={() => scrollToProject(index - 1)}
                        onNavigateNext={() => scrollToProject(index + 1)}
                    />
                ))}
            </div>
        </PageContainer>
    );
}
