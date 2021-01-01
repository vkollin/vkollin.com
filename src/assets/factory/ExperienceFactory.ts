import {Experience} from "../model/Experience";
// @ts-ignore
import check24 from '../image/experience/check24.jpg';
// @ts-ignore
import momox from '../image/experience/momox.jpg';

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
        const logos: { [key: string]: string } = {
            check24: check24,
            momox: momox,
        }

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
