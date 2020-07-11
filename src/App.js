
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About.js";
import Home from "./pages/Home.js";
import WhereICanBuy from "./pages/WhereICanBuy.js";
import WholesaleCustomers from "./pages/WholesaleCustomers.js";
import Contacts from "./pages/Contacts.js";

class App extends Component {
    constructor(props) {
        super(props)        
    }

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
                    <Route path="/WholesaleCustomers">
                        <WholesaleCustomers/>
                    </Route>
                    <Route path="/Contacts">
                        <Contacts/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
