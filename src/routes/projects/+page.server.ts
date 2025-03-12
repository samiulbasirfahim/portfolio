import { projects } from '$lib/projects';
import { redirect } from '@sveltejs/kit';

export const load = async () => {
    if (!projects.length) {
        throw new Error('No projects found');
    }

    throw redirect(308, `/projects/${projects[0].slug}`);
};
