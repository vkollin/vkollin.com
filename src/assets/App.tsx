import "./index.scss"
import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {LoadableCVPage, LoadableIndexPage} from "./Pages";
import {Header} from "./component/Header";
import {Footer} from "./component/Footer";

const App = (): JSX.Element => {
    return <>
        <Router>
            <Header/>
            <Switch>
                <Route path='/' exact={true}><LoadableIndexPage/></Route>
                <Route path='/cv' exact={true}><LoadableCVPage/></Route>
            </Switch>
            <Footer/>
        </Router>
    </>
}

export default App
