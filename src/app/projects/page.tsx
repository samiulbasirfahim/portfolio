"use client";

import PageContainer from "@/components/core/PageContainer";
import ProjectCard from "@/components/ui/ProjectCard";
import { useScroll } from "motion/react";
import { useRef } from "react";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A sleek and modern personal portfolio built to showcase my work and skills.",
      techUsed: ["React", "Next.js", "Tailwind CSS", "Framer Motion"],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://portfolio.example.com",
      imageUrl: "https://picsum.photos/seed/portfolio/1200/800",
    },
    {
      title: "Task Manager App",
      description:
        "A simple productivity app to manage daily tasks with drag-and-drop and dark mode.",
      techUsed: ["Vue", "Vite", "Pinia", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/task-manager",
      liveLink: "https://tasks.example.com",
      imageUrl: "https://picsum.photos/seed/tasks/1200/800",
    },
    {
      title: "Blog CMS",
      description:
        "A full-stack blog platform with markdown support, admin dashboard, and SEO features.",
      techUsed: ["Next.js", "Prisma", "PostgreSQL", "Clerk Auth"],
      githubLink: "https://github.com/yourusername/blog-cms",
      liveLink: "https://blogcms.example.com",
      imageUrl: "https://picsum.photos/seed/blog/1200/800",
    },
    {
      title: "E-commerce Store",
      description:
        "An online store with product search, cart, Stripe checkout, and order history.",
      techUsed: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Stripe"],
      githubLink: "https://github.com/yourusername/ecommerce-store",
      liveLink: "https://store.example.com",
      imageUrl: "https://picsum.photos/seed/ecommerce/1200/800",
    },
    {
      title: "Real-time Chat App",
      description:
        "A real-time chat application using WebSockets, with typing indicators and message history.",
      techUsed: ["Svelte", "Socket.IO", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/yourusername/chat-app",
      liveLink: "https://chat.example.com",
      imageUrl: "https://picsum.photos/seed/chat/1200/800",
    },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <PageContainer>
      <h1>PROJECTS</h1>

      <div className="mt-[10dvh] mb-[100dvh]" ref={containerRef}>
        {projects.map((project, i) => (
          <ProjectCard {...project} key={i} index={i} />
        ))}
      </div>
    </PageContainer>
  );
}
