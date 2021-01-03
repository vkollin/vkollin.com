import React, {useEffect, useRef} from "react";
import {NavLink} from "react-router-dom";
import {navObserver} from "../observer/navObserver";


export const Header = (): JSX.Element | null => {

    const navRef = useRef(null);

    const isRootActive = (): boolean => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    useEffect(() => {
        const navigation = navRef.current;
        if (navigation !== null) {
            navObserver(navigation)
        }
    }, [])

    return <nav className={"Navigation"} ref={navRef}>
        <ul>
            <li><NavLink to="/" activeClassName="selected" isActive={isRootActive}>Vincent Kollin</NavLink></li>
            <li><NavLink to="/cv" activeClassName="selected">CV</NavLink></li>
        </ul>
    </nav>
}
