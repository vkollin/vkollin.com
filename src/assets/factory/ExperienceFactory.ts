import {Experience} from "../model/Experience";
import {logos} from "../image/experience";

export type ExperienceType = {
    from: string,
    company: string,
    location: string,
    position: string
    to?: string,
    logo?: string,
    skills?: string[],
}

export class ExperienceFactory {
    public static createFromRaw(raw?: ExperienceType[]): Experience[] {
        if (!raw) {
            return []
        }

        return raw.map(r => {
            let logo = undefined;

            if (r.logo && r.logo in logos) {
                logo = logos[r.logo]
            }

            const e = new Experience(r.company, r.location, r.position, logo, r.skills)

            e.setFrom(r.from)
            if (r.to) {
                e.setTo(r.to)
            }

            return e;
        });
    }
}
