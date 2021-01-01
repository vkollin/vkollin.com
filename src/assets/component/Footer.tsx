import React from "react";
import {Link} from "react-router-dom";

export const Footer = (): JSX.Element | null => {
    return <div className={"Footer"}>
        © 2021 by Vincent Kollin <Link to={'/imprint'}>Imprint</Link>
    </div>
}
