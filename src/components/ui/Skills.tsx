"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { skillset } from "@/data/skill-set";
import { Icon } from "@iconify/react";
import Text from "./Text";

export default function SkillSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const index = categoryRefs.current.findIndex(
              (el) => el === entry.target,
            );
            if (index !== -1) {
              setActiveIndex((prevIndex) => {
                setDirection(index > prevIndex ? 1 : -1);
                return index;
              });
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

  const variants = {
    initial: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 40 : -40,
    }),
    animate: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? -40 : 40,
    }),
  };
  return (
    <div className="w-full justify-center flex mb-[20dvh]">
      <div className="flex gap-20 px-4 md:px-8 lg:px-16 flex-col md:flex-row">
        <div className="sticky md:top-32 h-max top-0 w-full flex">
          <div className="md:hidden text-4xl font-semibold top-0 sticky bg-background w-full py-3 text-center overflow-hidden">
            <AnimatePresence mode="wait" initial={false} custom={direction}>
              <motion.span
                key={activeIndex}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.15, ease: "easeInOut" }}
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
                onClick={() => {
                  const section = document.getElementById(
                    `skills-${category.title}`,
                  );
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`text-6xl capitalize transition-all duration-200 font-extrabold cursor-pointer`}
              >
                <Text>{category.title}</Text>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="overflow-y-auto space-y-4 w-full">
          {skillset.map((category, i) => {
            return (
              <div
                id={`skills-${category.title}`}
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
                      <Text className="text-sm text-forground/70 font-mono">
                        {skill.description}
                      </Text>
                      {skill.level && (
                        <Text
                          className={`text-xs mt-2 px-2 py-0.5 rounded-full ${
                            skill.level === "beginner"
                              ? "bg-yellow-400/10 text-yellow-500 border border-yellow-400/30"
                              : skill.level === "intermediate"
                                ? "bg-blue-400/10 text-blue-500 border border-blue-400/30"
                                : "bg-green-400/10 text-green-500 border border-green-400/30"
                          }`}
                        >
                          {skill.level}
                        </Text>
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
