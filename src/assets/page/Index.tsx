import React from 'react';
import {useContent} from "../hook/useContent";
import {Markdown} from "../component/Markdown";

export const Index = (): JSX.Element => {

    const [content, isLoading] = useContent(['index.md'])

    if (isLoading) {
        return <div>...</div>;
    }

    return <Markdown markdown={content['index.md']}/>
}

