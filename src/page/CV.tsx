import React from 'react';
import {SkillFactory} from "../factory/SkillFactory";
import {SkillGroups} from "../component/SkillGroups";
import {ExperienceFactory} from "../factory/ExperienceFactory";
import {Timeline} from "../component/Timeline";

export const CV = (): JSX.Element => {
    const skillGroups = SkillFactory.createFromRaw(require('../../content/skills.json'))
    const experiences = ExperienceFactory.createFromRaw(require('../../content/experiences.json'))

    return <div>
        <SkillGroups groups={skillGroups}/>
        <Timeline experiences={experiences}/>
    </div>
}

