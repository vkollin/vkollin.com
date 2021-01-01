import "./index.scss"
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoadableCVPage} from "./Pages";

const App = (): JSX.Element => {
    return <>
        <Router>
            <Switch>
                <Route path='/' exact={true}><LoadableCVPage/></Route>
            </Switch>
        </Router>
    </>
}

export default App
