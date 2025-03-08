<script lang="ts">
    import { fade, fly, slide } from "svelte/transition";
    import Heading from "./Heading.svelte";
    const { project, handleClicker, selected, ...rest } = $props();
</script>

<div
    out:slide={{
        axis: "y",
        duration: 500,
    }}
    in:slide={{
        axis: "y",
        duration: 500,
    }}
    class="bg-gray-900/80 rounded-xs shadow-md overflow-hidden h-100 flex flex-col justify-between w-full"
    {...rest}
>
    <img
        class="w-full h-2/5 object-cover"
        src={project.image}
        alt={project.title}
    />
    <h2 class="text-xl font-semibold text-teal-400 mx-2 mt-2">
        {project.title}
    </h2>
    <p class="text-gray-400 text-sm mt-2 mx-2">{project.description}</p>

    <div class="flex flex-wrap gap-2 mt-3 mx-2">
        {#each project.tech as tech (tech)}
            {#if selected.indexOf(tech) < 0}
                <button
                    class="bg-teal-400/5 px-1 mx-1 rounded-xs text-nowrap cursor-pointer"
                    onclick={() => {
                        handleClicker(tech);
                    }}>{tech}</button
                >
            {:else}
                <button
                    class="bg-teal-400 px-1 mx-1 rounded-xs text-nowrap cursor-pointer"
                    onclick={() => {
                        handleClicker(tech);
                    }}>{tech}</button
                >
            {/if}
        {/each}
    </div>

    <div class="mt-4 flex justify-between mx-2 mb-2">
        <a
            href={project.live}
            target="_blank"
            class="text-blue-500 hover:underline text-sm">Live Site</a
        >
        <a
            href={project.source}
            target="_blank"
            class="text-blue-500 hover:underline text-sm">Source Code</a
        >
    </div>
</div>
