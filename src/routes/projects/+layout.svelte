<script lang="ts">
	import Bar from '$lib/components/projects/Bar.svelte';

	const { children } = $props();
</script>

<main class="flex relative">
	<div class="sidebar sticky z-[0] top-[60px] hidden overflow-y-auto md:block md:w-1/5">
		<Bar />
	</div>

	<div class="md:max-w-4/5">
		{@render children()}
	</div>
</main>

<style>
	.sidebar {
		max-height: calc(100vh - 65px);
	}
</style>
