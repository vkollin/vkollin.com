import React from 'react';
import {useContent} from "../hook/useContent";
import {SkillFactory} from "../factory/SkillFactory";
import {SkillGroups} from "../component/SkillGroups";
import {ExperienceFactory} from "../factory/ExperienceFactory";
import {Experiences} from "../component/Experiences";

export const CV = (): JSX.Element => {
    const [content, isLoading] = useContent(['skills.json', 'experiences.json'])

    if (isLoading) {
        return <div>...</div>;
    }

    const skillGroups = SkillFactory.createFromRaw(content['skills.json'])
    const experiences = ExperienceFactory.createFromRaw(content['experiences.json'])

    return <div>
        <SkillGroups groups={skillGroups}/>
        <Experiences experiences={experiences}/>
    </div>
}

