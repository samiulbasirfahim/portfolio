<script lang="ts">
	const { data } = $props();
</script>

<div class="markdown w-full space-y-4 pb-6">
	{#await data.htmlContent}
		<div class="">Fetching data</div>
	{:then content}
		{@html content}
	{:catch error}
		<div class="flex h-full w-full items-center justify-center">
			<p class="text-center">{error}</p>
		</div>
	{/await}
</div>
