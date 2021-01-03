import React from "react";
import {useContent} from "../hook/useContent";
import {Markdown} from "./Markdown";

export const Index = (): JSX.Element => {
    const [content] = useContent(['index.md'])

    return <div className={"Index"}>
        <div className={"title"}>Vinny</div>
        <Markdown markdown={content['index.md']}/>
    </div>
}
