import React from "react";
import {useContent} from "../hook/useContent";
import {Markdown} from "../component/Markdown";
import {Section} from "../component/Section";

export const Imprint = (): JSX.Element => {
    const [content, isLoading] = useContent(['imprint.md'])

    // @ts-ignore
    return <Section title={"Imprint"}>
        <Markdown markdown={content["imprint.md"]}/>
    </Section> as unknown as JSX.Element
}

