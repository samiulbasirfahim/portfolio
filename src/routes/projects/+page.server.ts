import { projects } from '$lib/projects';
import { redirect } from '@sveltejs/kit';

redirect(308, `/projects/${projects[0].slug}`);
