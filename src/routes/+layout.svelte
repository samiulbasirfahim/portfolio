<script lang="ts">
    import "../app.css";
    import { page } from "$app/state";

    import Icon from "@iconify/svelte";

    import { onMount } from "svelte";
    let { children } = $props();

    onMount(() => {
        document.addEventListener("scroll", () => {
            document
                .querySelector("header")
                ?.classList.toggle("bg-gray-900/90", window.scrollY > 40);
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

<header class="fixed top-0 backdrop-blur-sm w-full debug-border">
    <div class="py-5 flex items-center justify-between container debug-border">
        <div>
            <a href="/" class="text-center hover:italic">
                <p>Samiul Basir</p>
                <p>FAHIM</p>
            </a>
        </div>
        <nav class="flex justify-end items-center gap-6">
            {@render link("Home", "/")}
            {@render link("Projects", "/projects")}
            {@render link("About", "/about")}
        </nav>
    </div>
</header>

<div class="container mt-30 debug-border">
    {@render children()}
</div>
