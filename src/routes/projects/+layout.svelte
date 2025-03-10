<script lang="ts">
    import Bar from "$lib/components/projects/Bar.svelte";

    const { children } = $props();
</script>

<main>
    <div class="hidden sm:block">
        <Bar />
    </div>
    {@render children()}
</main>
