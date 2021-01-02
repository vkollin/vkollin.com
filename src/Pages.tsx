import loadable from "@loadable/component";
import React from "react";

export const LoadableIndexPage = (): JSX.Element => {
    const Component = loadable(() => import('./page/Index'), {resolveComponent: mod => mod.Index});

    return <Component/>;
};

export const LoadableImprintPage = (): JSX.Element => {
    const Component = loadable(() => import('./page/Imprint'), {resolveComponent: mod => mod.Imprint});

    return <Component/>;
};

export const LoadableCVPage = (): JSX.Element => {
    const Component = loadable(() => import('./page/CV'), {resolveComponent: mod => mod.CV});

    return <Component/>;
};
