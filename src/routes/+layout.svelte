<script lang="ts">
    import "../app.css";
    import { page } from "$app/state";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    let { children } = $props();
    let nav_hidden: boolean = $state<boolean>(true);
    let scrolled: boolean = $state<boolean>(false);

    onMount(() => {
        document.addEventListener("scroll", () => {
            scrolled = window.scrollY > 50;
        });
    });
</script>

{#snippet link(title: string, href: string)}
    <a
        class="cursor-pointer hover:bg-teal-400/10 px-3 py-1 rounded-md hover:italic hover:text-teal-100 {page
            .route.id === href
            ? 'bg-teal-400 text-teal-900'
            : 'bg-transparent'}"
        {href}>{title}</a
    >
{/snippet}

<header
    class="fixed top-0 backdrop-blur-sm w-full debug-border isolate
        {scrolled ? 'bg-gray-900/80' : 'bg-transparent'}"
>
    <div class="py-5 flex items-center justify-between container debug-border">
        <div>
            <a href="/" class="text-center hover:italic">
                <p>Samiul Basir</p>
                <p>FAHIM</p>
            </a>
        </div>

        <Icon
            onclick={() => {
                nav_hidden = !nav_hidden;
            }}
            class="sm:hidden cursor-pointer"
            font-size="34"
            icon="gg:menu-right-alt"
        />
        {#if !nav_hidden}
            <div
                onclickcapture={() => {
                    console.log("Clicked");
                    nav_hidden = true;
                }}
                class="sm:hidden fixed bg-gray-900/90 backdrop-blur-sm inset-0 z-[5] h-screen"
            ></div>
        {/if}
        <nav
            class="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6 fixed sm:static h-screen bg-gray-900 sm:bg-transparent top-0 w-2/3 z-10 transition-all ease-in-out {nav_hidden
                ? 'right-[-100%]'
                : 'right-0'}"
        >
            {@render link("Home", "/")}
            {@render link("Projects", "/projects")}
            {@render link("About", "/about")}
        </nav>
    </div>
</header>

<div class="container mt-30 debug-border">
    {@render children()}
</div>
