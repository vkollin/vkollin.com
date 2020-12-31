import React from 'react';
import {useContent} from "../hook/useContent";
import {SkillFactory} from "../factory/SkillFactory";
import {Skills} from "../component/Skills";
import {ExperienceFactory} from "../factory/ExperienceFactory";
import {Experiences} from "../component/Experiences";

export const Index = (): JSX.Element => {

    // const [content, isLoading] = useContent(['index.md', 'skills.json'])
    const [content, isLoading] = useContent(['index.md'])

    if (isLoading) {
        return <div>...</div>;
    }

    const skills = SkillFactory.createFromRaw(require('../../../content/skills.json'))
    const experiences = ExperienceFactory.createFromRaw(require('../../../content/experiences.json'))

    return <div>
        <Skills skills={skills}/>
        <Experiences experiences={experiences}/>
    </div>
}

