<script lang="ts">
	const { data } = $props();
</script>

<div class="markdown space-y-4 pb-6">
	{#await data.htmlContent}
		<p>Fetching data</p>
	{:then content}
		{@html content}
	{:catch error}
		<div class="flex h-full w-full items-center justify-center">
			<p class="text-center">{error}</p>
		</div>
	{/await}
</div>
