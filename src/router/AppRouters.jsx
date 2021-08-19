import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Home from 'pages/Home';
import About from 'pages/About';
import Gallery from 'pages/Gallery';
import Services from 'pages/Services';
import Contact from 'pages/Contact';

import NavBar from 'components/layaout/NavBar';

function AppRouters() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/contact" component={Contact} />
                <Route path="/gallery" component={Gallery}/>
                <Route path="/services" component={Services} />
                <Route path="/about" component={About} />
                <Route exact path="/" component={Home} />
                <Route path="*" component= {<h1>404 Not Found</h1>} />
            </Switch>
        </Router>
    );
}


export default AppRouters;
