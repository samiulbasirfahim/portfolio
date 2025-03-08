<script lang="ts">
    import type { MouseEventHandler, UIEventHandler } from "svelte/elements";
    import { onMount } from "svelte";
    import Icon from "@iconify/svelte";
    import Project from "$lib/Components/Project.svelte";

    const { data } = $props();
    let projects = $state(data.projects);
    let selected: string[] = $state([]);
    let techs = [...new Set(projects.flatMap((pr) => pr.tech))];
    let sortedTechs = $derived.by(() => {
        return [
            ...techs.filter((t) => selected.includes(t)),
            ...techs.filter((t) => !selected.includes(t)),
        ];
    });

    let container: HTMLDivElement;
    let indicator = $state({
        right: false,
        left: false,
    });

    let dragHandler: {
        isDown: boolean;
        startx: number;
        scrollLeft: number;
        mouseDown: MouseEventHandler<HTMLDivElement>;
        mouseMove: MouseEventHandler<HTMLDivElement>;
        mouseUp: MouseEventHandler<HTMLDivElement>;
    } = {
        isDown: false,
        startx: 0,
        scrollLeft: 0,
        mouseDown(event) {
            this.isDown = true;
            this.startx = event.pageX - container?.offsetLeft;
            this.scrollLeft = container.scrollLeft;
        },
        mouseMove(event) {
            if (!this.isDown || !container) return;
            event.preventDefault();
            const x = event.pageX - container.offsetLeft;
            const walk = (x - this.startx) * 0.5;
            container.scrollLeft = this.scrollLeft - walk;
            updateIndicators();
        },
        mouseUp(event) {
            this.isDown = false;
        },
    };

    function updateIndicators() {
        if (!container) return;
        indicator.right =
            container.scrollLeft + container.clientWidth <
            container.scrollWidth;
        indicator.left = container.scrollLeft > 0;
    }
    onMount(() => {
        if (container) {
            updateIndicators();
        }
    });

    let filteredProjects = $derived.by(() => {
        if (selected.length === 0) return data.projects; // Show all if no tech is selected

        return data.projects.filter((project) =>
            selected.every((tech) => project.tech.includes(tech)),
        );
    });

    let handleClicker = (tech: string) => {
        if (selected.indexOf(tech) < 0) {
            selected.push(tech);
        } else {
            selected = selected.filter((s) => s !== tech);
        }
    };
</script>

<main>
    <div class="flex gap-2 items-center">
        {#if indicator.left}
            <span>
                <Icon
                    icon="mingcute:left-fill"
                    font-size="22"
                    class="text-cyan-400"
                />
            </span>
        {/if}
        <div
            role="button"
            tabindex="0"
            bind:this={container}
            onmousedown={dragHandler.mouseDown}
            onmouseup={dragHandler.mouseUp}
            onmouseleave={dragHandler.mouseUp}
            onmousemove={dragHandler.mouseMove}
            onscroll={updateIndicators}
            class="whitespace-nowrap cursor-grab active:cursor-grabbing overflow-x-auto py-4"
        >
            <div>
                {#each sortedTechs as tech (tech)}
                    {#if selected.indexOf(tech) < 0}
                        <button
                            class="bg-teal-400/5 px-1 mx-1 rounded-xs text-nowrap cursor-grab active:cursor-grabbing"
                            onclick={() => {
                                handleClicker(tech);
                            }}>{tech}</button
                        >
                    {:else}
                        <button
                            class="bg-teal-400 px-1 mx-1 rounded-xs text-nowrap cursor-grab active:cursor-grabbing"
                            onclick={() => {
                                handleClicker(tech);
                            }}>{tech}</button
                        >
                    {/if}
                {/each}
            </div>
        </div>
        {#if indicator.right}
            <span>
                <Icon
                    icon="mingcute:right-fill"
                    font-size="22"
                    class="text-cyan-400"
                />
            </span>
        {/if}
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {#each filteredProjects as project (project.title)}
            <Project {project} {handleClicker} {selected} />
        {/each}
    </div>
</main>
