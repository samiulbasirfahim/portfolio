<script lang="ts">
	import Bar from '$lib/components/projects/Bar.svelte';

	const { children } = $props();
</script>

<main class="container flex">
	<div class="hidden w-1/4 sm:block">
		<Bar />
	</div>
	<div class="max-w-3/4">
		{@render children()}
	</div>
</main>
