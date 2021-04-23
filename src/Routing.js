import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NavBar from './components/NavBar/NavBar';

export default function Routing() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/About">
                    <About />
                </Route>
                <Route exact path="/Contact">
                    <Contact />
                </Route>
            </Switch>
        </Router>
    )
}