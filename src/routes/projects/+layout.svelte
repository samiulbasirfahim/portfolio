<script lang="ts">
	import Bar from '$lib/components/projects/Bar.svelte';

	const { children } = $props();
</script>

<main class="flex">
	<div class="max-w-4/5">
		{@render children()}
	</div>
	<div class="sidebar scrollbar-thin sticky top-[60px] hidden w-1/5 overflow-y-auto md:block">
		<Bar />
	</div>
</main>

<style>
	.sidebar {
		max-height: calc(100vh - 65px);
	}
</style>
