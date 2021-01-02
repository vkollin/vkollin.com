import React from "react";
import {Link} from "react-router-dom";
import {Section} from "./Section";

export const Footer = (): JSX.Element | null => {
    return <Section>
        <div className={"Footer"}>
            © 2021 by Vincent Kollin <Link to={'/imprint'}>Imprint</Link>
        </div>
    </Section>
}
