import React from "react";

type PropsType = {
    title: string,
    className?: string,
    children: JSX.Element | JSX.Element[]
}

export class Section extends React.Component<PropsType> {
    render() {
        let className = "Section";

        if (this.props.className) {
            className += ` ${this.props.className}`;
        }

        return <section className={className}>
            <h1>{this.props.title}</h1>
            {this.props.children}
        </section>
    }
}
