import React from "react";
import {Group, Skill as SkillModel} from "../model/Skill";
import {Section} from "./Section";
import {Image} from "./Image";

export const SkillGroups = (props: { groups: Group[] }): JSX.Element => {

    const renderedSkills: JSX.Element[] = []

    for (const group of props.groups) {
        for (const skill of group.skills) {
            renderedSkills.push(<Skill key={JSON.stringify(skill)} skill={skill}/>)
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
            <div className="ImageWrapper">{props.skill.image && <Image image={props.skill.image}/>}</div>
            <span>{props.skill.title}</span>
            <Confidence score={props.skill.confidence}/>
        </div>
    </div>
}

const Confidence = (props: { score?: number }) => {
    if (!props.score && props.score !== 0) {
        return <div className={"Confidence"}/>
    }

    const confidenceScore = props.score * 10;

    return <div className={"Confidence"}>
        <div className={"Confidence-Total"}/>
        <div className={"Confidence-My"} style={{width: `${confidenceScore}%`}}/>
    </div>
}
