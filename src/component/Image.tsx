import React from "react";
import {Image as ImageModel} from "../model/Image";

export const Image = (props: { image: ImageModel }): JSX.Element => {
    return <div className={"Image"}>
        <img src={props.image.src} alt={props.image.license}/>
    </div>
}
