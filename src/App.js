import React, { Component } from "react";
import { Route } from "react-router-dom";

import About from "./components/about/About.js";
import Home from "./components/home/Home.js";
import WhereICanBuy from "./components/where-i-can-buy/WhereICanBuy.js";
import WholesaleCustomers from "./components/wholesaleCustomers/WholesaleCustomers.js";
import Contacts from "./components/contacts/Contacts.js";
import Catalog from "./components/catalog/Catalog.js";
import Card from "./components/card/Card.js";
import Line from "./components/line/Line.js";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/whereICanBuy" component={WhereICanBuy} />
                <Route path="/wholesaleCustomers" component={WholesaleCustomers} />
                <Route path="/contacts" component={Contacts} />
                <Route path="/catalog" component={Catalog} />
                <Route path="/card" component={Card} />
                <Route path="/lineBasic">
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
                <Route path="/lineEss">
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
                <Route path="/lineSuperior">
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
                <Route path="/lineBeo">
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
            </div>
        )
    }
}

export default App;
