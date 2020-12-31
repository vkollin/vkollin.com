import React from "react";

export const Image = (props: { src: string }): JSX.Element => {
    return <img src={props.src} alt=""/>
}
