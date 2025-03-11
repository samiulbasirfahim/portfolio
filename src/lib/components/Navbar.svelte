<script lang="ts">
    import { page } from "$app/state";
    import { themer } from "$lib/utilities/theme.svelte";
    import Icon from "@iconify/svelte";
    import { fade } from "svelte/transition";
    import ProjectsBar from "./projects/Bar.svelte";

    const theme = themer();

    let sidebar = $state({
        hidden: true,
        toggle() {
            this.hidden = !this.hidden;
        },
    });

    const special_case = () => {
        return page.route.id && page.route.id.split("/")[1] === "projects";
    };
</script>

{#snippet nav_item(title: string, href: string)}
    <a
        onclickcapture={() => (sidebar.hidden = true)}
        class="ms-4 border-s-2 sm:border-s-0 ps-4 py-1.5 sm:py-0 {page.url.pathname.split(
            '/',
        )[1] === href.split('/')[1]
            ? 'border-primary/100'
            : 'border-primary/20 hover:border-primary/50'}"
        {href}>{title}</a
    >
{/snippet}

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
                class="h-screen w-screen fixed inset-0 bg-background/20 backdrop-blur-sm sm:hidden"
            ></div>
        {/if}

        <a class="text-xl font-semibold" href="/">FAHIM</a>
        <ul
            class="text-sm sm:text-base sm:gap-8 flex sm:h-auto fixed sm:static top-0 sm:justify-end w-2/3 sm:w-auto bg-background sm:bg-transparent transition-all h-screen overflow-scroll sm:overflow-auto {sidebar.hidden
                ? 'left-[-100%]'
                : 'left-0'}
                {special_case()
                ? 'justify-start items-start sm:pt-0 pt-[60px]'
                : 'items-center justify-center '}"
        >
            <div class="flex flex-col sm:flex-row w-full">
                {@render nav_item("Home", "/")}
                {@render nav_item("Projects", "/projects")}
                {@render nav_item("About", "/about")}
                <button
                    onclick={() => theme.toggle()}
                    class="cursor-pointer ms-4 border-s-2 sm:border-s-3 ps-4 py-1.5 sm:py-0 border-primary/20"
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
                {#if special_case()}
                    <div
                        class="sm:hidden border-t-2 border-primary/20 mt-4 pt-4 w-full"
                    >
                        <ProjectsBar bind:sidebar />
                    </div>
                {/if}
            </div>
        </ul>
    </nav>
</header>
