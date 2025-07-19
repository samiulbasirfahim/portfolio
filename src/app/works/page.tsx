"use client";

import PageContainer from "@/components/core/PageContainer";
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
    ];

    return (
        <PageContainer>
            <p className="text-6xl">UPCOMING</p>
        </PageContainer>
    );
}
