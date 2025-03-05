import data from "$lib/data/skills.json";

export const load = async () => {
    return {
        skills: data,
    };
};
