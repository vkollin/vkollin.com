import React from "react";
import {Group, Skill as SkillModel} from "../model/Skill";
import {Section} from "./Section";
import {Image} from "./Image";

export const SkillGroups = (props: { groups: Group[] }): JSX.Element => {

    const renderedSkills: JSX.Element[] = []

    for (const group of props.groups) {
        for (const skill of group.skills) {
            renderedSkills.push(<Skill skill={skill}/>)
        }
    }

    return <Section title={"Skills"}>
        <div className="Skills">
            {renderedSkills}
        </div>
    </Section>
}

const Skill = (props: { skill: SkillModel }): JSX.Element => {

    return <div className="SkillWrapper">
        <div className={"Skill"}>
            <div className="ImageWrapper">{props.skill.logo && <Image src={props.skill.logo}/>}</div>
            <span>{props.skill.title}</span>
        </div>
    </div>
}
