"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

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
            <motion.div
                className="relative lg:p-10 overflow-hidden rounded-md w-full h-[80dvh] bg-teal-400"
                style={{ scale, translateY }}
            >
                <motion.div
                    className="inset-0 z-0 bg-cover absolute overflow-hidden bg-center"
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                        scale: imageScale,
                    }}
                />
                <div>{title}</div>
            </motion.div>
        </div>
    );
}

// <div className="relative w-full rounded-2xl overflow-hidden mb-8 bg-black/60 backdrop-blur-lg text-white shadow-xl">
//   <div
//     className="absolute inset-0 z-0 bg-cover bg-center blur-md opacity-20"
//
//   />
//
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
