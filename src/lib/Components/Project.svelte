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
    class="bg-gray-900/85 rounded-xs shadow-md overflow-hidden h-100 flex flex-col justify-between w-full relative isolate"
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
                    class="bg-teal-400/5 px-1 rounded-xs text-nowrap cursor-pointer z-10"
                    onclick={() => {
                        handleClicker(tech);
                    }}>{tech}</button
                >
            {:else}
                <button
                    class="bg-teal-400 px-1 rounded-xs text-nowrap cursor-pointer z-10"
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
            class="text-teal-400 hover:underline text-sm hover:text-blue-500"
        >
            <span
                class="absolute left-0 top-0 w-1/2 h-full hover:bg-pink-400/5 z-5"
            ></span>
            Live Site
        </a>
        <a
            href={project.source}
            target="_blank"
            class="text-teal-400 hover:underline hover:text-blue-500 text-sm"
        >
            <span
                class="absolute right-0 top-0 w-1/2 h-full hover:bg-pink-400/5 z-5"
            ></span>
            Source Code</a
        >
    </div>
</div>
