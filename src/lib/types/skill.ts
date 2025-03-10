export interface Skill {
    title: string;
    description: string;
    icon: string;
}

export interface SkillsCategory {
    title: string;
    skills: Skill[];
}
