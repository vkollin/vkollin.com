import React from "react";

export const Image = (props: { src: string }): JSX.Element => {
    return <div className={"Image"}>
        <img src={props.src} alt=""/>
    </div>
}
