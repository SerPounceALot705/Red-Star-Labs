import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiPhone } from "react-icons/fi";
import {FiClock} from "react-icons/fi";
import 'react-tabs/style/react-tabs.css';
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";


import "../components/where.css";
import "../components/where-i-can-buy/css/where-i-can-buy.css";
import "../components/where-i-can-buy/css/where-i-can-buy__menu.css";
import "../components/where-i-can-buy/css/where__menu-item.css";
import "../components/where-i-can-buy/css/where-i-can-buy__button.css";
import "../components/where-i-can-buy/css/where-i-can-buy__grid-container.css";
import "../components/where-i-can-buy/css/where-i-can-buy__grid-item.css";
import "../components/where-i-can-buy/css/where-i-can-buy__image.css";
import "../components/where-i-can-buy/css/shop-link.css";


import "../components/where-i-can-buy/shops/css/where-i-can-buy__shops.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__list-shops.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__shop.css";
import "../components/where-i-can-buy/shops/css/shop-item-foto.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__first-container.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__name-of-shop.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__shop-description.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__second-container.css"
import "../components/where-i-can-buy/shops/css/where-i-can-buy__adress-container.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__adress.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__town.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__phone-number.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__mode-of-operation.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__time.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__third-container.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__title.css";
import "../components/where-i-can-buy/shops/css/where-i-can-buy__subtitle.css";
import "../components/where-i-can-buy/shops/css/shop-map.css";

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
                            <div className="where-i-can-buy__shops">
                                <div className="where-i-can-buy__list-shops">
                                <div className="where-i-can-buy__shop">
                                        <Image
                                            src={require("../images/shop-item.png").default}
                                            alt={"shop-item-foto"}
                                            className={"shop-item-foto"}
                                        />
                                    <div className="where-i-can-buy__first-container">
                                    <span className="where-i-can-buy__name-of-shop">5lb</span>
                                    <p className="where-i-can-buy__shop-description">
                                        Интернет-магазин спортивного питания
                                    </p>
                                    </div>
                                    <div className="where-i-can-buy__second-container">
                                        <div className="where-i-can-buy__adress-container">
                                        <FiPhone />
                                        <div className="where-i-can-buy__adress">
                                            <span className="where-i-can-buy__town">Москва:</span>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(495) 646-87-80
                                                
                                            </p>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(968) 565-82-28
                                            </p>
                                        </div>
                                        </div>
                                        <div className="where-i-can-buy__mode-of-operation"> 
                                            <FiClock />
                                            <p className="where-i-can-buy__time">
                                                ПН-ВС 10:00-21:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="where-i-can-buy__third-container">
                                        <span className="where-i-can-buy__title">
                                            Регионы:
                                        </span>
                                        <p className="where-i-can-buy__subtitle">
                                            8(800) 500-87-41
                                        </p>
                                    </div>
                                </div>
                                <div className="where-i-can-buy__shop">
                                        <Image
                                            src={require("../images/shop-item.png").default}
                                            alt={"shop-item-foto"}
                                            className={"shop-item-foto"}
                                        />
                                    <div className="where-i-can-buy__first-container">
                                    <span className="where-i-can-buy__name-of-shop">5lb</span>
                                    <p className="where-i-can-buy__shop-description">
                                        Интернет-магазин спортивного питания
                                    </p>
                                    </div>
                                    <div className="where-i-can-buy__second-container">
                                        <div className="where-i-can-buy__adress-container">
                                        <FiPhone />
                                        <div className="where-i-can-buy__adress">
                                            <span className="where-i-can-buy__town">Москва:</span>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(495) 646-87-80
                                                
                                            </p>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(968) 565-82-28
                                            </p>
                                        </div>
                                        </div>
                                        <div className="where-i-can-buy__mode-of-operation"> 
                                            <FiClock />
                                            <p className="where-i-can-buy__time">
                                                ПН-ВС 10:00-21:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="where-i-can-buy__third-container">
                                        <span className="where-i-can-buy__title">
                                            Регионы:
                                        </span>
                                        <p className="where-i-can-buy__subtitle">
                                            8(800) 500-87-41
                                        </p>
                                    </div>
                                </div>
                                <div className="where-i-can-buy__shop">
                                        <Image
                                            src={require("../images/shop-item.png").default}
                                            alt={"shop-item-foto"}
                                            className={"shop-item-foto"}
                                        />
                                    <div className="where-i-can-buy__first-container">
                                    <span className="where-i-can-buy__name-of-shop">5lb</span>
                                    <p className="where-i-can-buy__shop-description">
                                        Интернет-магазин спортивного питания
                                    </p>
                                    </div>
                                    <div className="where-i-can-buy__second-container">
                                        <div className="where-i-can-buy__adress-container">
                                        <FiPhone />
                                        <div className="where-i-can-buy__adress">
                                            <span className="where-i-can-buy__town">Москва:</span>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(495) 646-87-80
                                                
                                            </p>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(968) 565-82-28
                                            </p>
                                        </div>
                                        </div>
                                        <div className="where-i-can-buy__mode-of-operation"> 
                                            <FiClock />
                                            <p className="where-i-can-buy__time">
                                                ПН-ВС 10:00-21:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="where-i-can-buy__third-container">
                                        <span className="where-i-can-buy__title">
                                            Регионы:
                                        </span>
                                        <p className="where-i-can-buy__subtitle">
                                            8(800) 500-87-41
                                        </p>
                                    </div>
                                </div>
                                <div className="where-i-can-buy__shop">
                                        <Image
                                            src={require("../images/shop-item.png").default}
                                            alt={"shop-item-foto"}
                                            className={"shop-item-foto"}
                                        />
                                    <div className="where-i-can-buy__first-container">
                                    <span className="where-i-can-buy__name-of-shop">5lb</span>
                                    <p className="where-i-can-buy__shop-description">
                                        Интернет-магазин спортивного питания
                                    </p>
                                    </div>
                                    <div className="where-i-can-buy__second-container">
                                        <div className="where-i-can-buy__adress-container">
                                        <FiPhone />
                                        <div className="where-i-can-buy__adress">
                                            <span className="where-i-can-buy__town">Москва:</span>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(495) 646-87-80
                                                
                                            </p>
                                            <p className="where-i-can-buy__phone-number">
                                                +7(968) 565-82-28
                                            </p>
                                        </div>
                                        </div>
                                        <div className="where-i-can-buy__mode-of-operation"> 
                                            <FiClock />
                                            <p className="where-i-can-buy__time">
                                                ПН-ВС 10:00-21:00
                                            </p>
                                        </div>
                                    </div>
                                    <div className="where-i-can-buy__third-container">
                                        <span className="where-i-can-buy__title">
                                            Регионы:
                                        </span>
                                        <p className="where-i-can-buy__subtitle">
                                            8(800) 500-87-41
                                        </p>
                                    </div>
                                </div>
                               
                                </div>
                                <Image
                                    src={require("../images/map.png").default}
                                    alt={"shop-map"}
                                    className={"shop-map"}
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </section>
                <Footer />
            </div>
        )
    }

}

export default WhereICanBuy;