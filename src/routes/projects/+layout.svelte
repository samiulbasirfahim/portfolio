<script lang="ts">
    import Bar from "$lib/components/projects/Bar.svelte";

    const { children } = $props();
</script>

<main>
    <div class="hidden sm:flex container justify-start items-start">
        <Bar />
        {@render children()}
    </div>
</main>
