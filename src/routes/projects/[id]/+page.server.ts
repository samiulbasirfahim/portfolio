import type { Page } from '@sveltejs/kit';
import { marked } from 'marked';

export const load = (page: Page) => {
    const htmlContent = new Promise(async (resolve, reject) => {
        let origin = page.url.origin;
        let slug = page.params.id;

        let response = await fetch(`${origin}/data/projects/${slug}.md`);

        if (response.ok) {
            let data = await response.text();
            resolve(marked(data, { async: false }));
        } else {
            resolve('Projects not found.');
        }
    });

    return {
        htmlContent
    };
};
