import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";


import "../components/where.css";
import "../components/where-i-can-buy/css/where-i-can-buy.css";
import "../components/where-i-can-buy/css/where-i-can-buy__menu.css";
import "../components/where-i-can-buy/css/where__menu-item.css";
import "../components/where-i-can-buy/css/where-i-can-buy__button.css";
import "../components/where-i-can-buy/css/where-i-can-buy__grid-container.css";
import "../components/where-i-can-buy/css/where-i-can-buy__grid-item.css";
import "../components/where-i-can-buy/css/where-i-can-buy__image.css";
import "../components/where-i-can-buy/css/shop-link.css";

class WhereICanBuy extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="where">
                <Header isDark={true} />


                <section className="where-i-can-buy">
                    <nav className="where-i-can-buy__menu">
                        <Link to="/" className="where__menu-item">{"Главная страница > "}</Link>
                        <Link to="/" className="where__menu-item where__menu-item_active">{"где купить?"}</Link>
                    </nav>

                    <Tabs>
                        <TabList>
                            <Tab>офлайн </Tab>
                            <Tab>онлайн</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="where-i-can-buy__grid-container">
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                                <div className="where-i-can-buy__grid-item">
                                    <div className="where-i-can-buy__image"></div>
                                    <a className="shop-link" href="">Сбермаркет</a>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                    </Tabs>
                </section>
                <Footer />
            </div>
        )
    }

}

export default WhereICanBuy;