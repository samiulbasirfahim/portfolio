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
		class="border-s-2 ps-4 py-1.5 font-semibold {page.url.pathname === href
			? 'border-primary/100 text-primary'
			: 'border-primary/20 opacity-70'}"
		{href}>{title}</a
	>
{/snippet}

<main class="flex max-w-xl flex-col items-start py-2 sm:ps-0">
	{#each navbarLinks as link, i (i)}
		{@render nav_item(link.title, link.href)}
	{/each}
</main>
