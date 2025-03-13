<script lang="ts">
	import { goto } from '$app/navigation';
	import { projects } from '$lib/projects';
	import { onMount } from 'svelte';

	onMount(() => {
		goto(`/projects/${projects[0].slug}`, { replaceState: true });
	});
</script>

<main>
	<p>Fetching Data</p>
</main>
