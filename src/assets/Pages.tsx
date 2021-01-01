import loadable from "@loadable/component";
import React from "react";

export const LoadableCVPage = (): JSX.Element => {
    const Component = loadable(() => import('./page/CV'), {resolveComponent: mod => mod.CV});

    return <Component/>;
};
