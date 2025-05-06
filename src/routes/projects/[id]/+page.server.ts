import type { Page } from '@sveltejs/kit';
import { marked } from 'marked';

export const load = (page: Page) => {
    const htmlContent = new Promise((resolve) => {
        fetch(`${page.url.origin}/data/projects/${page.params.id}.md`)
            .then((response) => {
                if (response.status == 404) {
                    resolve(`<div class="flex h-[50vh] w-full items-center justify-center"><span class="w-full text-center" > Project not found...</span></div>`);
                }
                return response.text();
            })
            .then((data) => {
                resolve(marked(data, { async: false }));
            })
            .catch(() => {
                resolve('Something went wrong.');
            });
    });

    return {
        htmlContent
    };
};
