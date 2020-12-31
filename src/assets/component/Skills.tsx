import React from "react";
import {Skill as SkillModel} from "../model/Skill";
import {Section} from "./Section";

export const Skills = (props: { skills: SkillModel[] }): JSX.Element => {

    return <Section title={"Skills"}>
        <div className="Skills">
            {props.skills.map((skill) => <Skill key={JSON.stringify(skill)} skill={skill}/>)}
        </div>
    </Section>
}

const Skill = (props: { skill: SkillModel }): JSX.Element => {

    return <div className="SkillWrapper">
        <div className={"Skill"}>
            {props.skill.title}
        </div>
    </div>
}
