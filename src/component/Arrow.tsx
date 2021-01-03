import React from "react";

export enum ArrowDirection {
    UP,
    DOWN
}

export const Arrow = (props: { direction: ArrowDirection }): JSX.Element | null => {
    const classNames = ['Arrow']

    if (props.direction === ArrowDirection.DOWN) {
        classNames.push('down');
    }

    if (props.direction === ArrowDirection.UP) {
        classNames.push('up');
    }

    return <div className={classNames.join(" ")}/>
}
