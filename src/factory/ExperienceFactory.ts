import {Experience} from "../model/Experience";
import {logos} from "../image/experience";
import {Image} from "../model/Image";

export type ExperienceType = {
    from: string,
    company: string,
    location: string,
    position: string
    to?: string,
    image?: {
        src: string,
        license?: string
    },
    skills?: string[],
    highlights?: string[]
}

export class ExperienceFactory {
    public static createFromRaw(raw?: ExperienceType[]): Experience[] {
        if (!raw) {
            return []
        }

        return raw.map(r => {
            let image = undefined;

            if (r.image && r.image.src in logos) {
                image = new Image(logos[r.image.src], r.image.license)
            }

            const e = new Experience(r.company, r.location, r.position, image, r.skills, r.highlights)

            e.setFrom(r.from)
            if (r.to) {
                e.setTo(r.to)
            }

            return e;
        });
    }
}
