<script lang="ts">
    import { themer } from "$lib/utilities/theme.svelte";
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";

    const theme = themer();

    const sidebar = $state({
        hidden: true,
        toggle() {
            this.hidden = !this.hidden;
        },
    });
</script>

<header
    class="border-b-1 border-primary/20 fixed top-0 py-4 w-full bg-background"
>
    <nav class="flex container justify-between items-center">
        <button
            onclick={() => sidebar.toggle()}
            class="cursor-pointer sm:hidden z-[99] w-full"
        >
            {#if sidebar.hidden}
                <Icon icon="line-md:close-to-menu-transition" font-size="28" />
            {:else}
                <Icon icon="line-md:menu-to-close-transition" font-size="28" />
            {/if}
        </button>

        {#if !sidebar.hidden}
            <div
                transition:fade={{
                    duration: 200,
                }}
                onclickcapture={() => sidebar.toggle()}
                class="h-screen w-screen fixed inset-0 bg-background/20 backdrop-blur-sm"
            ></div>
        {/if}

        <a class="text-xl font-semibold" href="/">FAHIM</a>
        <ul
            class="items-center text-base gap-8 flex flex-col sm:flex-row h-screen sm:h-auto fixed sm:static top-0 justify-center sm:justify-end w-2/3 sm:w-auto bg-background sm:bg-transparent transition-all {sidebar.hidden
                ? 'left-[-100%]'
                : 'left-0'}"
        >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <button
                onclick={() => theme.toggle()}
                class="cursor-pointer sm:border-s-3 border-primary/20 sm:ps-4"
            >
                {#if theme.theme === "light"}
                    <Icon
                        icon="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
                        font-size="28"
                    />
                {:else}
                    <Icon
                        icon="line-md:sunny-filled-loop-to-moon-filled-alt-loop-transition"
                        font-size="28"
                    />
                {/if}
            </button>
        </ul>
    </nav>
</header>
