import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import About from "./pages/About.js";
import Home from "./pages/Home.js";
import WhereICanBuy from "./pages/WhereICanBuy.js";
import WholesaleCustomers from "./pages/WholesaleCustomers.js";
import Contacts from "./pages/Contacts.js";
import Catalog from "./pages/Catalog.js";
import Card from "./pages/Card.js";

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
                  <Route path="/WholesaleCustomers">
                      <WholesaleCustomers/>
                  </Route>
                  <Route path="/Contacts">
                      <Contacts/>
                  </Route>
                  <Route path="/Catalog">
                      <Catalog/>
                  </Route>
                  <Route path="/Card">
                      <Card/>
                  </Route>
              </Switch>
          </Router>
      )
  }
}

export default App;
