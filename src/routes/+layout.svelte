<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	let { children } = $props();

	onMount(() => {
		document.title = 'Samiul Basir Fahim';

		document.documentElement.classList.add('scrollbar-thin');
	});
</script>

<main class="pt-[60px]">
	<Navbar />
	{@render children()}
</main>
