<script lang="ts">
	import { page } from '$app/state';
	import { projects } from '$lib/projects';

	let { sidebar = $bindable() } = $props();

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
		class="border-s-2 py-1.5 ps-4 text-sm font-semibold {page.url.pathname === href
			? 'border-primary/100 opacity-100'
			: 'border-primary/20 hover:border-primary/50 opacity-60'}"
		{href}>{title}</a
	>
{/snippet}

<main class="flex max-w-xl flex-col items-start py-2 ps-4 sm:ps-0">
	{#each navbarLinks as link}
		{@render nav_item(link.title, link.href)}
	{/each}
</main>
