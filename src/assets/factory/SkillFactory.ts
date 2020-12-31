import {Skill} from "../model/Skill";

export type SkillType = {
    title: string,
    subtitle: string,
}

export class SkillFactory {
    public static createFromRaw(raw?: SkillType[]): Skill[] {
        if (!raw) {
            return [];
        }

        return raw.map(r => new Skill(r.title, r.subtitle));
    }
}
