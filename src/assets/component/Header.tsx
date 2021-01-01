import React from "react";
import {NavLink} from "react-router-dom";

export const Header = (): JSX.Element | null => {

    const isRootActive = (): boolean => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return <nav className={"Navigation"}>
        <ul>
            <li><NavLink to="/" activeClassName="selected" isActive={isRootActive}>Vincent Kollin</NavLink></li>
            <li><NavLink to="/cv" activeClassName="selected">CV</NavLink></li>
        </ul>
    </nav>
}
