<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import { onMount } from "svelte";
    import "../app.css";
    let { children } = $props();

    onMount(() => {
        document.title = "Samiul Basir Fahim";
    });
</script>

<main class="pt-[60px]">
    <Navbar />
    {@render children()}
</main>
