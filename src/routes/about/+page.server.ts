import skills from "$lib/data/skills.json";
import type { Skills } from "$lib/types/skill";
import links from "$lib/data/links.json";

export const load = async () => {
    return {
        skills,
        links,
    };
};
