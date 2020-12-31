import "./index.scss"
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoadableIndexPage} from "./Pages";

const App = (): JSX.Element => {
    return <>
        <Router>
            <Switch>
                <Route path='/' exact={true}><LoadableIndexPage/></Route>
            </Switch>
        </Router>
    </>
}

export default App
