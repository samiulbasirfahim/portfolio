<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    let { children } = $props();
</script>

<main class="pt-20">
    <Navbar />
    {@render children()}
</main>
