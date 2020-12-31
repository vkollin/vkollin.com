import React from "react";
import {Experience as ExperienceModel} from "../model/Experience";
import {Section} from "./Section";
import {Image} from "./Image";


export const Experiences = (props: { experiences: ExperienceModel[] }): JSX.Element => {

    return <Section title={"Experience"}>
        <div className={"Experiences"}>
            {props.experiences.map(
                (experience) => <Experience key={JSON.stringify(experience)} experience={experience}/>
            )}
        </div>
    </Section>
}

const Experience = (props: { experience: ExperienceModel }): JSX.Element => {

    function renderDate(date: Date | null) {
        if (typeof date === 'undefined' || date === null) {
            return '…'
        }

        return date.toLocaleString('default', {
            month: 'short',
            year: 'numeric'
        });
    }

    return <div className="ExperienceWrapper">
        <div className={"Experience"}>
            <div className="Experience-Text">
                <span className={"Experience-Dates"}>
                    {renderDate(props.experience.from)} - {renderDate(props.experience.to)}
                </span>
                <span className={"Experience-Position"}>{props.experience.position}</span>
                <span className={"Experience-Company"}>{props.experience.company}, {props.experience.location}</span>
                <div className={"Experience-Tags"}>{props.experience.skills?.map(s => <SkillTag tag={s}/>)}</div>
            </div>
            <div className={"Experience-Image"}>{props.experience.logo && <Image src={props.experience.logo}/>}</div>
        </div>
    </div>
}

const SkillTag = (props: { tag: string }): JSX.Element => {
    return <div className="Tag">{props.tag}</div>
}
