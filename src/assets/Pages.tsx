import loadable from "@loadable/component";
import React from "react";

export const LoadableIndexPage = (): JSX.Element => {
    const Component = loadable(() => import('./page/Index'), {resolveComponent: mod => mod.Index});

    return <Component/>;
};
