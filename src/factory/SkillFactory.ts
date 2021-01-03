import {Group, Skill} from "../model/Skill";
import {logos} from "../image/skill";
import {Image} from "../model/Image";

export type SkillsType = {
    groups: {
        [_: string]: {
            title: string,
        }
    },
    items: {
        title: string,
        group: string,
        subtitle?: string,
        confidence?: number,
        image?: {
            src: string,
            license?: string
        },
    }[]
}

export class SkillFactory {

    static OTHER_GROUP_KEY = "other";

    public static createFromRaw(raw?: SkillsType): Group[] {

        if (!raw) {
            return [];
        }

        const groups: { [_: string]: Group } = {}

        for (const [key, rawGroup] of Object.entries(raw.groups)) {
            groups[key] = new Group(rawGroup.title)
        }

        groups[this.OTHER_GROUP_KEY] = new Group()

        for (const item of raw.items) {
            let image = undefined;

            if (item.image && item.image.src in logos) {
                image = new Image(logos[item.image.src], item.image.license)
            }

            const skill = new Skill(item.title, item.subtitle, image, item.confidence);

            if (item.group in groups) {
                groups[item.group].addSkill(skill)
            } else {
                groups[this.OTHER_GROUP_KEY].addSkill(skill)
            }
        }

        return Object.values(groups)
    }
}
