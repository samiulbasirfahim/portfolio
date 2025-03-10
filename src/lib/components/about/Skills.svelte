<script lang="ts">
    import { skillset } from "$lib/skill";
    import Icon from "@iconify/svelte";
</script>

<main class="container">
    <h1 class="">Skills</h1>
    <div class="space-y-6 mt-6">
        {#each skillset as { title, skills } (title)}
            <div>
                <h2 class="mb-2">{title}</h2>
                <div
                    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {#each skills as { icon, title, description } (title)}
                        <div
                            class="border-1 border-primary/20 p-4 space-y-2 rounded-sm"
                        >
                            <Icon {icon} font-size="28" />
                            <h4 class="">
                                {title}
                            </h4>
                            <p class="text-sm">{description}</p>
                        </div>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</main>
