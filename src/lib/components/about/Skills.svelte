<script lang="ts">
	import { skillset } from '$lib/skills';
	import Icon from '@iconify/svelte';
</script>

<main class="">
	<h1 class="">Skills</h1>
	<div class="mt-6 space-y-6">
		{#each skillset as { title, skills } (title)}
			<div>
				<h2 class="mb-2">{title}</h2>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each skills as { icon, title, description } (title)}
						<div class="border-primary/20 space-y-2 rounded-sm border-1 p-4">
							<Icon {icon} font-size="28" />
							<h4 class="text-base">
								{title}
							</h4>
							<small class="text-sm opacity-80">{description}</small>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>
