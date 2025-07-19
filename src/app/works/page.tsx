"use client";

import PageContainer from "@/components/core/PageContainer";
import ProjectCard from "@/components/ui/ProjectCard";
import Lenis from "lenis";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";

export default function Projects() {
    const projects = [
        {
            title: "Schlario",
            description:
                "Scholario is a fast, offline-capable school management desktop app built with Svelte and Tauri. It features student and staff management, a flexible attendance system, and a clean, customizable dashboard.",
            techUsed: ["Svelte", "Tauri", "Tailwind CSS", "Rust"],
            githubLink: "https://github.com/samiulbasirfahim/scholario.git",
            liveLink: "#",
            imageUrl: "/images/works/scholario.png",
        },

        {
            title: "Schlario",
            description:
                "Scholario is a fast, offline-capable school management desktop app built with Svelte and Tauri. It features student and staff management, a flexible attendance system, and a clean, customizable dashboard.",
            techUsed: ["Svelte", "Tauri", "Tailwind CSS", "Rust"],
            githubLink: "https://github.com/samiulbasirfahim/scholario.git",
            liveLink: "#",
            imageUrl: "/images/works/scholario.png",
        },
        {
            title: "Schlario",
            description:
                "Scholario is a fast, offline-capable school management desktop app built with Svelte and Tauri. It features student and staff management, a flexible attendance system, and a clean, customizable dashboard.",
            techUsed: ["Svelte", "Tauri", "Tailwind CSS", "Rust"],
            githubLink: "https://github.com/samiulbasirfahim/scholario.git",
            liveLink: "#",
            imageUrl: "/images/works/scholario.png",
        },
        {
            title: "Schlario",
            description:
                "Scholario is a fast, offline-capable school management desktop app built with Svelte and Tauri. It features student and staff management, a flexible attendance system, and a clean, customizable dashboard.",
            techUsed: ["Svelte", "Tauri", "Tailwind CSS", "Rust"],
            githubLink: "https://github.com/samiulbasirfahim/scholario.git",
            liveLink: "#",
            imageUrl: "/images/works/scholario.png",
        },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    });

    return (
        <PageContainer>
            <div ref={container}>
                {projects.map((project, i) => {
                    const targetScale = 1 - (projects.length - i) * 0.05;
                    return (
                        <ProjectCard
                            {...project}
                            key={i}
                            index={i}
                            progress={scrollYProgress}
                            range={[i * 0.25, 1]}
                            targetScale={targetScale}
                        />
                    );
                })}
            </div>
        </PageContainer>
    );
}
