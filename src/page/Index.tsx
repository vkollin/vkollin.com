import React from "react";
import {useContent} from "../hook/useContent";
import {Section} from "../component/Section";
import {Index as IndexComponent} from "../component/Index";

export const Index = (): JSX.Element => {
    const [content, isLoading] = useContent(['index.md'])

    // @ts-ignore
    return <Section>
        <IndexComponent/>
    </Section> as unknown as JSX.Element
}

