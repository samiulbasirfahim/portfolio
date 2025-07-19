"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import ExternalLink from "./ExternalLink";

export default function ProjectCard({
    title,
    description,
    techUsed,
    githubLink,
    liveLink,
    imageUrl,
    index,
    progress,
    range,
    targetScale,
}) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);
    const translateY = useTransform(scale, [1, targetScale], [0, -200]);

    return (
        <div
            className="h-dvh flex items-start justify-center sticky w-full lg:top-[10dvh] top-[5dvh] lg:px-20"
            ref={container}
        >
            <motion.div className="relative p-4 rounded-md w-full h-[55dvh] flex bg-dark gap-4 text-background overflow-hidden">
                {/* Left: Image */}
                <div className="w-[40%] h-full overflow-hidden rounded relative">
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover rounded shadow-lg"
                        priority
                    />
                </div>

                {/* Right: Text Content */}
                <div className="w-[60%] h-full flex flex-col justify-between gap-2 pr-1">
                    <div>
                        <h2 className="text-xl font-semibold mb-1">{title}</h2>
                        <p className="text-xs text-muted-foreground leading-snug line-clamp-5">
                            Scholario is a fast, offline-capable school management desktop app
                            built with Svelte and Tauri. It features student and staff
                            management, custom attendance states, and a modular, customizable
                            dashboard with low-memory performance. Designed for small to
                            medium institutions, Scholario makes administrative tasks more
                            efficient and delightful.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1 text-[10px] mt-2">
                        {techUsed.map((tech) => (
                            <span
                                key={tech}
                                className="bg-muted text-foreground px-2 py-0.5 rounded font-mono"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 text-xs mt-2">
                        <ExternalLink href={githubLink}>Source</ExternalLink>
                        {liveLink !== "#" && (
                            <ExternalLink href={liveLink}>Live</ExternalLink>
                        )}
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

// <div className="relative w-full rounded-2xl overflow-hidden mb-8 bg-black/60 backdrop-blur-lg text-white shadow-xl">
//   <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8">
//     <div className="w-full md:w-1/2 h-60 md:h-auto overflow-hidden rounded-xl">
//       <Image
//         src={imageUrl}
//         alt={title}
//         fill
//         className="object-cover rounded-xl shadow-lg"
//         priority
//       />
//     </div>
//
//     {/* Info */}
//     <div className="w-full md:w-1/2 flex flex-col justify-center">
//       <h2 className="text-2xl md:text-3xl font-semibold mb-3">{title}</h2>
//       <p className="text-sm md:text-base text-gray-200 mb-4">
//         {description}
//       </p>
//
//       {/* Tech Used */}
//       <div className="flex flex-wrap gap-2 text-xs md:text-sm mb-4">
//         {techUsed.map((tech) => (
//           <span
//             key={tech}
//             className="bg-white/10 border border-white/20 px-3 py-1 rounded-full"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>
//
//       {/* Links */}
//       <div className="flex gap-4">
//         <a
//           href={githubLink}
//           target="_blank"
//           className="underline underline-offset-2 text-blue-400 hover:text-blue-300 transition"
//         >
//           GitHub
//         </a>
//         <a
//           href={liveLink}
//           target="_blank"
//           className="underline underline-offset-2 text-green-400 hover:text-green-300 transition"
//         >
//           Live Demo
//         </a>
//       </div>
//     </div>
//   </div>
// </div>
