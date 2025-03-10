<script lang="ts">
    import { themer } from "$lib/utilities/theme.svelte";
    import Icon from "@iconify/svelte";
    const theme = themer();
</script>

<header class="border-b-1 border-primary/20 py-4">
    <nav class="flex container justify-between items-center">
        <a class="text-base font-semibold" href="/">FAHIM</a>
        <ul class="flex items-center text-base gap-8">
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <button onclick={() => theme.toggle()}>
                {#if theme.theme === "light"}
                    <Icon
                        icon="line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"
                        font-size="28"
                    />
                {:else}
                    <Icon
                        icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                        font-size="28"
                    />
                {/if}
            </button>
        </ul>
    </nav>
</header>
