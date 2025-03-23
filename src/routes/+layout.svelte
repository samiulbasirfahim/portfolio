<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();

	onMount(() => {
		document.title = 'Samiul Basir Fahim';

		document.documentElement.classList.add('scrollbar-thin');
	});
</script>

<main class="pt-[60px]">
	<Navbar />
	<div class="container z-[-100] isolate">
		{@render children()}
	</div>
	<Footer />
</main>
