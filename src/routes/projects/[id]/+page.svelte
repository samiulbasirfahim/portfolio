<script lang="ts">
	const { data } = $props();
</script>

<div class="markdown w-full space-y-4 pb-6">
	{#await data.htmlContent}
		<div class="flex h-[50vh] w-full items-center justify-center">
			<span class="w-full text-center">Fetching data...</span>
		</div>
	{:then content}
		{@html content}
	{/await}
</div>
