import {ContentService} from "../service/ContentService";
import {useEffect, useState} from "react";
import {SkillsType} from "../factory/SkillFactory";
import {ExperienceType} from "../factory/ExperienceFactory";

type UseContentReturnType = {
    "skills.json"?: SkillsType,
    "experiences.json"?: ExperienceType[],
    "index.md"?: string
};

export const useContent = (files: string[]): [UseContentReturnType, boolean] => {
    const service = new ContentService()

    const [loading, setLoading] = useState<boolean>(true);
    const [loadedContent, setLoadedContent] = useState<UseContentReturnType>({});

    useEffect(() => {
        service
            .getFiles(files)
            .then(f => {
                setLoadedContent(f);
                setLoading(false);
            })
    }, []);

    return [loadedContent, loading]
}