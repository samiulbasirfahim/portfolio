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
                description:
                    "A systems programming language focused on safety, speed, and memory management.",
                icon: "vscode-icons:file-type-rust",
            },
            {
                title: "JavaScript",
                level: "advanced",
                description:
                    "A popular language for building interactive websites and web applications.",
                icon: "logos:javascript",
            },
            {
                title: "TypeScript",
                level: "advanced",
                description:
                    "A version of JavaScript with static types for better error checking and tooling.",
                icon: "logos:typescript-icon",
            },
            {
                title: "C",
                level: "intermediate",
                description:
                    "A low-level language used for system programming and embedded software development.",
                icon: "logos:c",
            },
            {
                title: "C++",
                level: "intermediate",
                description:
                    "An extension of C, adding object-oriented features for large applications and performance.",
                icon: "logos:c-plusplus",
            },
            {
                title: "Bash",
                level: "intermediate",
                description:
                    "A command-line tool for Linux that lets you run commands and scripts easily.",
                icon: "logos:bash-icon",
            },
            {
                title: "SQL",
                level: "intermediate",
                description:
                    "A language for managing and querying databases, organizing data like a pro.",
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
                description:
                    "A JavaScript library for building user interfaces using reusable components.",
                icon: "logos:react",
            },
            {
                title: "Next.js",
                level: "advanced",
                description:
                    "A React framework that adds server-side rendering, routing, and API capabilities.",
                icon: "logos:nextjs-icon",
            },
            {
                title: "Svelte",
                level: "intermediate",
                description:
                    "A compiler-based UI framework that turns components into efficient JavaScript.",
                icon: "logos:svelte-icon",
            },
            {
                title: "SvelteKit",
                level: "intermediate",
                description:
                    "The official Svelte framework for building modern apps with routing and SSR.",
                icon: "logos:svelte-icon",
            },
            {
                title: "Tauri",
                level: "intermediate",
                description:
                    "A Rust-based framework for building fast, secure, and lightweight desktop applications.",
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
                description:
                    "A utility-first CSS framework for rapidly building custom designs directly in markup.",
                icon: "devicon:tailwindcss",
            },
            {
                title: "Framer Motion",
                level: "intermediate",
                description:
                    "A motion library for React to create fluid animations and transitions.",
                icon: "logos:framer",
            },
            {
                title: "Zustand",
                level: "intermediate",
                description:
                    "A small, fast state-management library for React applications.",
                icon: "logos:zustand",
            },
            {
                title: "TanStack Query",
                level: "intermediate",
                description:
                    "Powerful data fetching and caching tool for React and TypeScript apps.",
                icon: "logos:react-query",
            },
            {
                title: "Hono",
                level: "beginner",
                description:
                    "A fast, lightweight framework for building APIs with Bun and other runtimes.",
                icon: "logos:hono",
            },
            {
                title: "Express.js",
                level: "intermediate",
                description:
                    "A minimal and flexible Node.js framework for building web apps and APIs.",
                icon: "simple-icons:express",
            },
            {
                title: "Raylib",
                level: "beginner",
                description:
                    "A simple C library for creating games and graphics applications.",
                icon: "simple-icons:raylib",
            },
        ],
    },
    {
        title: "Databases",
        skills: [
            {
                title: "SQLite",
                level: "intermediate",
                description:
                    "A lightweight SQL database engine used in desktop apps and embedded systems.",
                icon: "devicon:sqlite",
            },
            {
                title: "MariaDB",
                level: "beginner",
                description:
                    "An open-source MySQL-compatible database system used in web and server apps.",
                icon: "devicon:mysql",
            },
            {
                title: "MongoDB",
                level: "intermediate",
                description:
                    "A NoSQL database that stores data in flexible, JSON-like document format.",
                icon: "logos:mongodb-icon",
            },
            {
                title: "Prisma",
                level: "intermediate",
                description:
                    "A modern ORM for Node.js and TypeScript that simplifies database queries and migrations.",
                icon: "material-icon-theme:prisma",
            },
            {
                title: "Mongoose",
                level: "beginner",
                description:
                    "An ODM for MongoDB that helps you define schemas and interact with data using models.",
                icon: "devicon:mongoose",
            },
        ],
    },
    {
        title: "Other",
        skills: [
            {
                title: "Node.js",
                level: "advanced",
                description:
                    "A JavaScript runtime that lets you run code outside the browser, mainly for backend tasks.",
                icon: "logos:nodejs-icon",
            },
            {
                title: "Bun",
                level: "beginner",
                description:
                    "A fast, modern JavaScript runtime and package manager supporting TypeScript and JSX natively.",
                icon: "logos:bun",
            },
            {
                title: "Void Linux",
                level: "intermediate",
                description:
                    "A lightweight Linux distribution focused on simplicity, performance, and flexibility.",
                icon: "logos:void",
            },
            {
                title: "Problem Solving",
                level: "advanced",
                description:
                    "Skilled in solving coding challenges using algorithms, data structures, and efficient logic.",
                icon: "icon-park:thinking-problem",
            },
        ],
    },
];
