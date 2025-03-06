<script lang="ts">
    import "../app.css";
    import { page } from "$app/state";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";
    import { setTitle } from "$lib";

    let { children } = $props();
    let nav_hidden: boolean = $state<boolean>(true);
    let scrolled: boolean = $state<boolean>(false);
    let footerH: number = $state<number>(0);

    onMount(() => {
        setTitle("Samiul Basir Fahim");
        scrolled = window.scrollY > 50;
        document.addEventListener("scroll", () => {
            scrolled = window.scrollY > 50;
        });

        const footer = document.querySelector("footer");

        if (footer) {
            footerH = footer.clientHeight;
        }
    });
</script>

{#snippet link(title: string, href: string)}
    <a
        class="cursor-pointer hover:bg-teal-400/20 px-3 py-1 rounded-sm hover:italic hover:text-teal-100 {page
            .route.id === href
            ? 'bg-teal-400/10'
            : 'bg-transparent'}"
        {href}>{title}</a
    >
{/snippet}

<header
    class="fixed top-0 backdrop-blur-sm w-full debug-border z-[9999]
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
            class="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-6 fixed sm:static h-screen sm:h-auto bg-gray-900 sm:bg-transparent top-0 w-2/3 z-10 transition-all ease-in-out {nav_hidden
                ? 'right-[-100%]'
                : 'right-0'}"
        >
            {@render link("Home", "/")}
            {@render link("Projects", "/projects")}
            {@render link("About", "/about")}
        </nav>
    </div>
</header>

<div id="parent" class="container mt-30 debug-border mb-10 min-h-screen">
    {@render children()}
</div>
<footer class="bg-gray-900 text-white text-center h-20 py-6">
    <p>
        &copy; {new Date().getFullYear()} Samiul Basir Fahim. All rights reserved.
    </p>
</footer>
