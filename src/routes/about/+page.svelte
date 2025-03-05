<script lang="ts">
    const { data } = $props();
</script>

<section class="space-y-4">
    <div class="space-y-4">
        <h2 class="text-2xl font-semibold mb-4 italic">About</h2>
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

    <h2 class="text-2xl font-semibold mt-6 mb-4 italic">Skills</h2>
    {#each Object.entries(data.skills) as [category, skillset]}
        <div class="hover:bg-teal-400/10 p-4 rounded-md my-4">
            <h3 class="text-xl uppercase">{category}</h3>
            <ul class="grid space-x-1 mt-2">
                {#each skillset as skill}
                    <li class="list-disc list-inside">{skill.name}</li>
                {/each}
            </ul>
        </div>
    {/each}
</section>
