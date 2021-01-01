import React from "react";
import {useContent} from "../hook/useContent";
import {Markdown} from "../component/Markdown";
import {Section} from "../component/Section";

export const Index = (): JSX.Element => {
    const [content, isLoading] = useContent(['index.md'])

    // @ts-ignore
    return <Section>
        <Markdown markdown={content["index.md"]}/>
    </Section> as unknown as JSX.Element
}

