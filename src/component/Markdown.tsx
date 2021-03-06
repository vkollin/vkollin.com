import React from "react";
import Showdown from "showdown";

export const Markdown = (props: { markdown?: string }): JSX.Element | null => {
    if (!props.markdown) {
        return null;
    }

    const mdConverter = new Showdown.Converter();

    const html = mdConverter.makeHtml(props.markdown)

    return <div dangerouslySetInnerHTML={{__html: html}}/>
}
