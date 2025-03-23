import { browser } from '$app/environment';
import { onMount } from 'svelte';

let theme: string = $state('light');

export const themer = () => {
	onMount(() => {
		theme = 'theme' in localStorage ? localStorage.theme : 'light';
		document.documentElement.dataset.theme = theme;
	});

	return {
		toggle() {
			theme = theme === 'light' ? 'dark' : 'light';
			if (browser) {
				localStorage.theme = theme;
			}
			document.documentElement.dataset.theme = theme;
		},
		get theme() {
			return theme;
		}
	};
};
