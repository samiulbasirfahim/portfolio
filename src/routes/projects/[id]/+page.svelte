<script lang="ts">
	const { data } = $props();
</script>

<div class="markdown">
	{#await data.htmlContent}
		<p>Fetching data</p>
	{:then content}
		{@html content}
	{:catch error}
		<p>{error}</p>
	{/await}
</div>
