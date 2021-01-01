export class Group {
    constructor(readonly title?: string) {
    }

    private _skills: Skill[] = [];

    get skills(): Skill[] {
        return this._skills;
    }

    addSkill(value: Skill) {
        this._skills.push(value);
    }
}

export class Skill {
    constructor(readonly title: string, readonly subtitle?: string, readonly logo?: string, readonly confidence?: number) {

    }
}
