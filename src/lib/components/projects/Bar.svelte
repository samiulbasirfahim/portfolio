<script lang="ts">
	import { page } from '$app/state';

	let { sidebar = $bindable() } = $props();

	const projects = [
		{ title: 'Portfolio Website', slug: 'portfolio' },
		{ title: 'Blog CMS', slug: 'blog-cms' },
		{ title: 'Task Manager API', slug: 'task-manager' },
		{ title: 'E-commerce Platform', slug: 'ecommerce' },
		{ title: 'Codeforces Stats Tracker', slug: 'cf-tracker' }
	];

	const navbarLinks = projects.map((project) => ({
		title: project.title,
		href: `/projects/${project.slug}`
	}));
</script>

{#snippet nav_item(title: string, href: string)}
	<a
		onclickcapture={() => {
			if (sidebar) {
				sidebar.hidden = true;
			}
		}}
		class="border-s-2 py-1 ps-4 text-sm {page.url.pathname === href
			? 'border-primary/100 font-semibold '
			: 'border-primary/20 hover:border-primary/50 font-light'}"
		{href}>{title}</a
	>
{/snippet}

<main class="flex max-w-xl flex-col items-start overflow-x-scroll py-2 ps-4 sm:ps-0">
	{#each navbarLinks as link}
		{@render nav_item(link.title, link.href)}
	{/each}
</main>

<style>
	main {
		height: calc(100vh - 60px);
	}
</style>
