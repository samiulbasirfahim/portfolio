<script lang="ts">
	import { skillset } from '$lib/skills';
	import Icon from '@iconify/svelte';
</script>

<main class="">
	<h3 class="">Skills</h3>
	<div class="mt-6 space-y-6">
		{#each skillset as { title, skills } (title)}
			<div>
				<h4 class="mb-2">{title}</h4>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
					{#each skills as { icon, title, description } (title)}
						<div class="border-primary/20 space-y-2 rounded- border-[1.5px] p-4">
							<Icon {icon} font-size="28" />
							<h4 class="text-base">
								{title}
							</h4>
							<span>{description}</span>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>
