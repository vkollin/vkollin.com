import React from 'react';
import {useContent} from "../hook/useContent";
import {SkillFactory} from "../factory/SkillFactory";
import {Skills} from "../component/Skills";

export const Index = (): JSX.Element => {

    // const [content, isLoading] = useContent(['index.md', 'skills.json'])
    const [content, isLoading] = useContent(['index.md'])

    if (isLoading) {
        return <div>...</div>;
    }

    const skills = SkillFactory.createFromRaw(require('../../../content/skills.json'))

    return <div>
        <Skills skills={skills}/>
    </div>
}

