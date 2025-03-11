<script lang="ts">
	import { marked } from 'marked';

	let htmlContent = marked(
		`
# H1
## H2
### H3
                                                        `,
		{ async: false }
	);
</script>

<div>
	{@html htmlContent}
</div>
