
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import WhereICanBuy from "./pages/WhereICanBuy.js";

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/WhereICanBuy">
                        <WhereICanBuy/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
