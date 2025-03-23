import type { SkillsCategory } from './types/skill';

export const skillset: SkillsCategory[] = [
	{
		title: 'Languages',
		skills: [
			{
				title: 'Rust',
				description:
					'A systems programming language focused on safety, speed, and memory management.',
				icon: 'vscode-icons:file-type-rust'
			},

			{
				title: 'JavaScript',
				description: 'A popular language for building interactive websites and web applications.',
				icon: 'logos:javascript'
			},
			{
				title: 'TypeScript',
				description:
					'A version of JavaScript with static types for better error checking and tooling.',
				icon: 'logos:typescript-icon'
			},
			{
				title: 'C',
				description:
					'A low-level language used for system programming and embedded software development.',
				icon: 'logos:c'
			},
			{
				title: 'C++',
				description:
					'An extension of C, adding object-oriented features for large applications and performance.',
				icon: 'logos:c-plusplus'
			},

			{
				title: 'Bash',
				description: 'A command-line tool for Linux that lets you run commands and scripts easily.',
				icon: 'logos:bash-icon'
			},
			{
				title: 'SQL',
				description: 'A language for managing and querying databases, organizing data like a pro.',
				icon: 'oui:vis-query-sql'
			}
		]
	},
	{
		title: 'Frameworks',
		skills: [
			{
				title: 'React & Next.js',
				description:
					'A JavaScript library and framework combo for building fast web apps with reusable parts and server-side tricks.',
				icon: 'logos:react'
			},
			{
				title: 'Svelte & SvelteKit',
				description:
					'A JavaScript tool and framework duo for creating fast, simple web apps with easy setup.',
				icon: 'logos:svelte-icon'
			},
			{
				title: 'Tauri',
				description:
					'A Rust-based framework for building fast, secure, and lightweight desktop applications.',
				icon: 'logos:tauri'
			}
		]
	},
	{
		title: 'Libraries',
		skills: [
			{
				title: 'TailwindCSS',
				description:
					'A utility-first CSS framework for rapidly building custom designs directly in HTML.',
				icon: 'devicon:tailwindcss'
			},
			{
				title: 'Hono',
				description: 'A fast, lightweight framework for building APIs with Bun and other runtimes.',
				icon: 'logos:hono'
			},
			{
				title: 'Express.js',
				description: 'A minimal and flexible Node.js framework for building web apps and APIs.',
				icon: 'simple-icons:express'
			},
			{
				title: 'Raylib',
				description: 'A simple C library for creating games and graphics applications with ease.',
				icon: 'simple-icons:raylib'
			}
		]
	},
	{
		title: 'Databases',
		skills: [
			{
				title: 'MariaDB, SQLITE',
				description: 'SQL based database',
				icon: 'devicon:mysql'
			},
			{
				title: 'MongoDB',
				description: 'A NoSQL database that stores data in flexible, JSON-like document format.',
				icon: 'logos:mongodb-icon'
			},
			{
				title: 'Prisma',
				description:
					'A modern ORM for Node.js and TypeScript that simplifies database queries and migrations.',
				icon: 'material-icon-theme:prisma'
			},
			{
				title: 'Mongoose',
				description:
					'An ODM for MongoDB that simplifies working with MongoDB data in Node.js applications.',
				icon: 'devicon:mongoose'
			}
		]
	},
	{
		title: 'Other',
		skills: [
			{
				title: 'Node.js',
				description: 'A JavaScript runtime that lets you run JavaScript code on the server side.',
				icon: 'logos:nodejs-icon'
			},
			{
				title: 'Bun',
				description:
					'A fast, modern JavaScript runtime and package manager supporting TypeScript and JSX natively.',
				icon: 'logos:bun'
			},
			{
				title: 'Void Linux',
				description:
					'A lightweight Linux distribution focused on simplicity, performance, and flexibility.',
				icon: 'logos:void'
			},
			{
				title: 'Problem Solving',
				description:
					'Skilled in solving coding challenges using algorithms, data structures, and efficient problem-solving techniques.',
				icon: 'icon-park:thinking-problem'
			}
		]
	}
];
