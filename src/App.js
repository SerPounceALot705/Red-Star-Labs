import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About.js";
import Home from "./pages/Home.js";
import WhereICanBuy from "./pages/WhereICanBuy.js";
import WholesaleCustomers from "./pages/WholesaleCustomers.js";
import Contacts from "./pages/Contacts.js";
import Catalog from "./pages/Catalog.js";
import Card from "./pages/Card.js";
import Line from "./pages/Line.js";

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
                        <WhereICanBuy />
                    </Route>
                    <Route path="/WholesaleCustomers">
                        <WholesaleCustomers />
                    </Route>
                    <Route path="/Contacts">
                        <Contacts />
                    </Route>
                    <Route path="/Catalog">
                        <Catalog />
                    </Route>
                    <Route path="/Card">
                        <Card />
                    </Route>
                    <Route path="/LineBasic">
                        <Line selectBrand={{
                            items: [
                                { value: "85%", text: "Cодержание действующих веществ" },
                                { value: "65%", text: "Витаминный комплекс" },
                                { value: "50%", text: "Содержания углеводов" },
                                { value: "15%", text: "Сахар" }
                            ],
                            url: require("./images/line-logo.png"),
                            brand: "super"
                        }} />
                    </Route>
                    <Route path="/LineEss">
                        <Line selectBrand={{
                            items: [
                                { value: "85%", text: "Cодержание действующих веществ" },
                                { value: "65%", text: "Витаминный комплекс" },
                                { value: "50%", text: "Содержания углеводов" },
                                { value: "15%", text: "Сахар" }
                            ],
                            url: require("./images/line-logo.png"),
                            brand: "super"
                        }} />
                    </Route>
                    <Route path="/LineSuperior">
                        <Line selectBrand={{
                            items: [
                                { value: "85%", text: "Cодержание действующих веществ" },
                                { value: "65%", text: "Витаминный комплекс" },
                                { value: "50%", text: "Содержания углеводов" },
                                { value: "15%", text: "Сахар" }
                            ],
                            url: require("./images/line-logo.png"),
                            brand: "super"
                        }} />
                    </Route>
                    <Route path="/LineBeo">
                        <Line selectBrand={{
                            items: [
                                { value: "85%", text: "Cодержание действующих веществ" },
                                { value: "65%", text: "Витаминный комплекс" },
                                { value: "50%", text: "Содержания углеводов" },
                                { value: "15%", text: "Сахар" }
                            ],
                            url: require("./images/line-logo.png"),
                            brand: "super"
                        }} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
