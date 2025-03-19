<script lang="ts">
	import { page } from '$app/state';
	import { themer } from '$lib/utilities/theme.svelte';
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';
	import ProjectsBar from './projects/Bar.svelte';

	const theme = themer();

	let sidebar = $state({
		hidden: true,
		toggle() {
			this.hidden = !this.hidden;
		}
	});

	const special_case = () => {
		return page.route.id && page.route.id.split('/')[1] === 'projects';
	};
</script>

{#snippet nav_item(title: string, href: string)}
	<a
		onclickcapture={() => (sidebar.hidden = true)}
		class=" ms-4 border-s-2 py-1.5 ps-4 md:border-s-0 md:py-0 {page.url.pathname.split('/')[1] ===
		href.split('/')[1]
			? 'border-primary/100 font-semibold'
			: 'border-primary/20 hover:border-primary/50 font-light'}"
		{href}>{title}</a
	>
{/snippet}

<header class="border-primary/20 bg-background fixed top-0 w-full border-b-1 py-4">
	<nav class="container flex items-center justify-between">
		<button onclick={() => sidebar.toggle()} class="z-[99] cursor-pointer md:hidden">
			{#if sidebar.hidden}
				<Icon icon="line-md:close-to-menu-transition" font-size="28" />
			{:else}
				<Icon icon="line-md:menu-to-close-transition" font-size="28" />
			{/if}
		</button>

		{#if !sidebar.hidden}
			<div
				transition:fade={{
					duration: 200
				}}
				onclickcapture={() => sidebar.toggle()}
				class="bg-background/20 fixed inset-0 h-screen w-screen backdrop-blur-sm md:hidden"
			></div>
		{/if}

		<a class="text-xl font-semibold" href="/">FAHIM</a>
		<ul
			class="bg-background scrollbar-thin shadow-background fixed inset-0 top-[60px] flex w-2/3 overflow-y-auto text-sm shadow-2xl transition-all md:static md:h-auto
            md:w-auto md:justify-end md:gap-8 md:bg-transparent md:text-base md:shadow-none
            {sidebar.hidden ? 'left-[-100%]' : 'left-0'}
                {special_case()
				? 'items-start justify-start md:pt-0'
				: 'items-center justify-center '}"
		>
			<div class="flex w-full flex-col md:flex-row">
				{@render nav_item('Home', '/')}
				{@render nav_item('Projects', '/projects')}
				{@render nav_item('About', '/about')}
				<button
					onclick={() => theme.toggle()}
					class="border-primary/20 ms-4 cursor-pointer border-s-2 py-1.5 ps-4 md:border-s-3 md:py-0"
				>
					{#if theme.theme === 'light'}
						<Icon icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition" font-size="28" />
					{:else}
						<Icon
							icon="line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"
							font-size="28"
						/>
					{/if}
				</button>
				{#if special_case()}
					<div class="border-primary/20 mt-4 w-full border-t-2 pt-0 md:hidden">
						<ProjectsBar bind:sidebar />
					</div>
				{/if}
			</div>
		</ul>
	</nav>
</header>

<style>
</style>
