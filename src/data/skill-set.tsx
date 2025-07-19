export interface Skill {
    title: string;
    description: string;
    icon: string;
    level: string;
}

export interface SkillsCategory {
    title: string;
    skills: Skill[];
}

export const skillset: SkillsCategory[] = [
    {
        title: "Languages",
        skills: [
            {
                title: "Rust",
                level: "intermediate",
                description: "Safe, fast, and powerful system programming language.",
                icon: "vscode-icons:file-type-rust",
            },
            {
                title: "JavaScript",
                level: "advanced",
                description: "The go-to language for interactive web development.",
                icon: "logos:javascript",
            },
            {
                title: "TypeScript",
                level: "advanced",
                description: "Typed superset of JS for better tooling and safety.",
                icon: "logos:typescript-icon",
            },
            {
                title: "C",
                level: "advanced",
                description:
                    "Low-level language for systems and performance-critical code.",
                icon: "logos:c",
            },
            {
                title: "C++",
                level: "advanced",
                description: "C with object-oriented features and performance.",
                icon: "logos:c-plusplus",
            },
            {
                title: "Bash",
                level: "advanced",
                description: "Scripting language for Linux command-line tasks.",
                icon: "logos:bash-icon",
            },
            {
                title: "SQL",
                level: "intermediate",
                description: "Language for querying and managing structured data.",
                icon: "oui:vis-query-sql",
            },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            {
                title: "React",
                level: "advanced",
                description: "Component-based library for building UIs.",
                icon: "logos:react",
            },
            {
                title: "Next.js",
                level: "advanced",
                description: "Full-stack React framework with routing and SSR.",
                icon: "logos:nextjs-icon",
            },
            {
                title: "Svelte",
                level: "intermediate",
                description: "Compiler-first UI framework with minimal overhead.",
                icon: "logos:svelte-icon",
            },
            {
                title: "SvelteKit",
                level: "intermediate",
                description: "App framework for Svelte with routing and SSR.",
                icon: "logos:svelte-icon",
            },
            {
                title: "Tauri",
                level: "intermediate",
                description: "Build desktop apps using Rust and frontend tech.",
                icon: "logos:tauri",
            },
        ],
    },
    {
        title: "Libraries",
        skills: [
            {
                title: "Tailwind CSS",
                level: "advanced",
                description: "Utility-first CSS for rapid UI development.",
                icon: "devicon:tailwindcss",
            },
            {
                title: "Framer Motion",
                level: "intermediate",
                description: "Powerful animations for React components.",
                icon: "logos:framer",
            },
            {
                title: "Hono",
                level: "intermediate",
                description: "Tiny web framework for fast APIs and servers.",
                icon: "logos:hono",
            },
            {
                title: "Express.js",
                level: "intermediate",
                description: "Lightweight backend framework for Node.js.",
                icon: "simple-icons:express",
            },
            {
                title: "Raylib",
                level: "beginner",
                description: "Simple C library for making games and graphics.",
                icon: "simple-icons:raylib",
            },
        ],
    },
    {
        title: "Databases",
        skills: [
            {
                title: "SQLite",
                level: "beginner",
                description: "Lightweight SQL database for apps and tools.",
                icon: "devicon:sqlite",
            },
            {
                title: "MariaDB",
                level: "beginner",
                description: "Open-source SQL database, MySQL-compatible.",
                icon: "devicon:mysql",
            },
            {
                title: "MongoDB",
                level: "intermediate",
                description: "NoSQL database using flexible JSON-like docs.",
                icon: "logos:mongodb-icon",
            },
            {
                title: "Prisma",
                level: "intermediate",
                description: "Type-safe ORM for Node.js and SQL databases.",
                icon: "material-icon-theme:prisma",
            },
            {
                title: "Mongoose",
                level: "beginner",
                description: "MongoDB ODM for schema and model handling.",
                icon: "devicon:mongoose",
            },
        ],
    },
    {
        title: "Other",
        skills: [
            {
                title: "Node.js",
                level: "intermediate",
                description: "JS runtime for backend, APIs, and tools.",
                icon: "logos:nodejs-icon",
            },
            {
                title: "Bun",
                level: "intermediate",
                description: "Fast JS runtime with native TS and bundler.",
                icon: "logos:bun",
            },
            {
                title: "Void Linux",
                level: "advanced",
                description: "Minimal Linux distro focused on performance.",
                icon: "logos:void",
            },
            {
                title: "Problem Solving",
                level: "intermediate",
                description: "Strong skills in logic, patterns, and challenges.",
                icon: "icon-park:thinking-problem",
            },
        ],
    },
];
