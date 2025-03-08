<script lang="ts">
    import Icon from "@iconify/svelte";
    import Heading from "$lib/Components/Heading.svelte";

    const { data } = $props();
</script>

<section class="space-y-4 relative">
    <div class="space-y-4">
        <Heading title="About" />
        <p class="">
            I'm Fahim, a self-taught developer from Mymensingh, Bangladesh. I’ve
            been coding for three years, working on both frontend and backend
            development.
        </p>
        <p>
            For frontend, I use <strong>React</strong>,
            <strong>Next.js</strong>, and <strong>SvelteKit</strong>, along with
            <strong>TailwindCSS</strong>
            for UI design. On the backend, I work with <strong>Node.js</strong>,
            <strong>Bun</strong>, <strong>Express</strong>, and
            <strong>Hono</strong>, using <strong>MongoDB</strong> as my
            database. Depending on the project, I use either
            <strong>Mongoose</strong>
            or <strong>Prisma</strong> for schema management. I primarily code
            in <strong>JavaScript</strong>,
            <strong>TypeScript</strong>, <strong>C</strong>,
            <strong>C++</strong>, and <strong>Rust</strong>.
        </p>
        <p>
            Beyond web development, I enjoy problem-solving and sharpening my
            algorithmic thinking through competitive programming. I'm also
            interested in <strong>machine learning</strong>
            and low-level topics like
            <strong>system engineering</strong>, always looking to deepen my
            understanding of how systems work under the hood. I love learning
            new technologies and building efficient, well-structured software.
        </p>
    </div>

    <section class="space-y-4">
        <Heading title="Skills" />
        {#each Object.entries(data.skills) as [category, skillset]}
            <div class="rounded-md p-2 space-y-2">
                <h3 class="text-xl uppercase font-semibold">{category}</h3>
                <ul class="grid md:grid-cols-2 grid-cols-1 gap-4">
                    {#each skillset as { name, icon } ([name, icon])}
                        <li
                            class="flex py-4 px-3 rounded-sm items-center gap-2 hover:bg-teal-400/20 bg-teal-400/10 cursor-default"
                        >
                            <Icon {icon} font-size="22" class="text-cyan-400" />
                            <p class="text-">{name}</p>
                        </li>
                    {/each}
                </ul>
            </div>
        {/each}
    </section>

    <section class="space-y-4">
        <Heading title="Links" />
        <ul class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {#each data.links as { name, icon, href } (href)}
                <li
                    class="flex px-3 py-2 rounded-sm items-center gap-2 hover:bg-teal-400/20 relative bg-teal-400/10"
                >
                    <Icon {icon} font-size="26" />
                    <div class="">
                        <a {href} target="_blank">
                            <span class="absolute inset-0"></span>
                            <p>{name}</p>
                        </a>
                        <p class="text-xs">Samiul Basir Fahim</p>
                    </div>
                </li>
            {/each}
        </ul>
    </section>
</section>
