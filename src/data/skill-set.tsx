export interface Skill {
    title: string;
    description: string;
    icon: string;
    level: "beginner" | "intermediate" | "advanced";
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
                description:
                    "Systems programming with a focus on performance and concurrency.",
                icon: "vscode-icons:file-type-rust",
            },
            {
                title: "TypeScript",
                level: "advanced",
                description:
                    "My main language for web and cross-platform applications.",
                icon: "logos:typescript-icon",
            },
            {
                title: "C",
                level: "intermediate",
                description: "Low-level programming and system-oriented development.",
                icon: "logos:c",
            },
            {
                title: "C++",
                level: "intermediate",
                description:
                    "Performance-oriented programming with lower-level control.",
                icon: "logos:c-plusplus",
            },
            {
                title: "Python",
                level: "intermediate",
                description: "Scripting, automation, and backend development.",
                icon: "logos:python",
            },
            {
                title: "Lua",
                level: "intermediate",
                description:
                    "Lightweight scripting for configuration and embedded logic.",
                icon: "logos:lua",
            },
        ],
    },

    {
        title: "Frameworks",
        skills: [
            {
                title: "React Native",
                level: "advanced",
                description: "Building mobile apps with native platform integration.",
                icon: "logos:react",
            },
            {
                title: "React",
                level: "advanced",
                description: "Building interactive, component-driven web interfaces.",
                icon: "logos:react",
            },
            {
                title: "Next.js",
                level: "advanced",
                description: "Building production web applications with React.",
                icon: "logos:nextjs-icon",
            },
            {
                title: "Svelte",
                level: "intermediate",
                description: "Building compiled, lightweight web interfaces.",
                icon: "logos:svelte-icon",
            },
            {
                title: "Actix Web",
                level: "intermediate",
                description: "Building backend services and APIs with Rust.",
                icon: "simple-icons:actix",
            },
            {
                title: "Express.js",
                level: "intermediate",
                description: "Building backend services and APIs with Node.js.",
                icon: "simple-icons:express",
            },
            {
                title: "FastAPI",
                level: "intermediate",
                description: "Building backend services and APIs with Python.",
                icon: "logos:fastapi-icon",
            },
            {
                title: "Tauri",
                level: "intermediate",
                description:
                    "Building lightweight cross-platform desktop apps with web frontends.",
                icon: "simple-icons:tauri",
            },
        ],
    },

    {
        title: "Libraries",
        skills: [
            {
                title: "Tailwind CSS",
                level: "advanced",
                description: "My go-to approach for styling web interfaces.",
                icon: "devicon:tailwindcss",
            },
            {
                title: "Motion",
                level: "intermediate",
                description: "Creating smooth animations and interactive interfaces.",
                icon: "logos:framer",
            },
            {
                title: "Tokio",
                level: "intermediate",
                description:
                    "Working with asynchronous and concurrent Rust applications.",
                icon: "simple-icons:tokio",
            },
            {
                title: "Prisma",
                level: "intermediate",
                description: "Type-safe database access for application backends.",
                icon: "material-icon-theme:prisma",
            },
            {
                title: "GraphQL",
                level: "intermediate",
                description: "Querying and shaping data across client and server.",
                icon: "logos:graphql",
            },
            {
                title: "Nitro Modules",
                level: "intermediate",
                description:
                    "Building high-performance native modules for React Native.",
                icon: "mdi:puzzle",
            },
        ],
    },

    {
        title: "Databases",
        skills: [
            {
                title: "PostgreSQL",
                level: "intermediate",
                description: "My main relational database for backend projects.",
                icon: "logos:postgresql",
            },
            {
                title: "MongoDB",
                level: "intermediate",
                description: "Working with document-based application data.",
                icon: "logos:mongodb-icon",
            },
            {
                title: "Redis",
                level: "intermediate",
                description: "Using Redis for caching and real-time workloads.",
                icon: "logos:redis",
            },
        ],
    },

    {
        title: "System",
        skills: [
            {
                title: "Linux",
                level: "advanced",
                description: "My main environment for development and system work.",
                icon: "logos:linux-tux",
            },
            {
                title: "Android",
                level: "advanced",
                description:
                    "Working with Android internals, boot chains, and custom ROMs.",
                icon: "logos:android-icon",
            },
            {
                title: "KernelSU",
                level: "intermediate",
                description:
                    "Working with KernelSU modules and Android system customization.",
                icon: "mdi:shield-key-outline",
            },
            {
                title: "React Native Modules",
                level: "intermediate",
                description:
                    "Building native plugins and bridging Android and iOS features.",
                icon: "logos:react",
            },
            {
                title: "X11 / Xlib",
                level: "intermediate",
                description:
                    "Low-level windowing and display server programming on Linux.",
                icon: "mdi:monitor",
            },
        ],
    },
];
