<script lang="ts">
    import { page } from "$app/state";

    let { sidebar = $bindable() } = $props();

    const projects = [
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
        { title: "Portfolio Website", slug: "portfolio" },
        { title: "Blog CMS", slug: "blog-cms" },
        { title: "Task Manager API", slug: "task-manager" },
        { title: "E-commerce Platform", slug: "ecommerce" },
        { title: "Codeforces Stats Tracker", slug: "cf-tracker" },
    ];

    const navbarLinks = projects.map((project) => ({
        title: project.title,
        href: `/projects/${project.slug}`,
    }));
</script>

{#snippet nav_item(title: string, href: string)}
    <a
        onclickcapture={() => {
            if (sidebar) {
                sidebar.hidden = true;
            }
        }}
        class="ms-4 border-s-2 sm:border-s-0 ps-4 py-1 sm:py-0 {page.url
            .pathname === href
            ? 'border-primary/100'
            : 'border-primary/20 hover:border-primary/50'}"
        {href}>{title}</a
    >
{/snippet}

<main class="flex flex-col overflow-scroll">
    {#each navbarLinks as link}
        {@render nav_item(link.title, link.href)}
    {/each}
</main>
