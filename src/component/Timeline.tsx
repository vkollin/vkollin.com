import React, {useState} from "react";
import {Experience as ExperienceModel} from "../model/Experience";
import {Section} from "./Section";
import {Arrow, ArrowDirection} from "./Arrow";


export const Timeline = (props: { experiences: ExperienceModel[] }): JSX.Element => {

    return <Section title={"Experience"}>
        <div className={"Experiences"}>
            {props.experiences.map(
                (experience: ExperienceModel) => <Experience key={JSON.stringify(experience)} experience={experience}/>
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

    const experience = props.experience;

    return <div className="ExperienceWrapper">
        <div className={"Experience"}>
            <div className="Experience-Main">
                <div className="Experience-Text">
                <span className={"Experience-Dates"}>
                    {renderDate(experience.from)} - {renderDate(experience.to)}
                </span>
                    <span className={"Experience-Position"}>{experience.position}</span>
                    <span className={"Experience-Company"}>{experience.company}, {experience.location}</span>
                    <div className={"Experience-Tags"}>{experience.skills?.map(s => <SkillTag key={s} tag={s}/>)}</div>
                </div>
                {/*<div className={"Experience-Image"}>{experience.image && <Image image={experience.image}/>}</div>*/}
            </div>
            <Highlights highlights={experience.highlights}/>
        </div>
    </div>
}

const SkillTag = (props: { tag: string }): JSX.Element => {
    return <div className="Tag">{props.tag}</div>
}

const Highlights = (props: { highlights?: string[] }) => {
    const [showHighlights, setShowHighlights] = useState(false);

    if (typeof props.highlights === "undefined" || props.highlights.length === 0) {
        return null
    }

    return <div className={"Experience-Highlights"}>
        <ul className={showHighlights ? "Highlights-Show" : undefined}>
            {props.highlights.map(h => <li key={h}>{h}</li>)}
        </ul>
        <div
            className={`Highlights-Toggle`}
            onClick={() => setShowHighlights(!showHighlights)}
        >
            <Arrow direction={showHighlights ? ArrowDirection.UP : ArrowDirection.DOWN}/>
        </div>
    </div>
}
