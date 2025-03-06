<script lang="ts">
    const { title, ...rest } = $props();
</script>

<h2 {...rest} class="text-3xl font-semibold mt-10 italic text-teal-400">
    {title}
</h2>
