import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";
import ShopCard from "../components/shopCard/shopCard.js";
import BuyShopCard from "../components/buyShopCard/buyShopCard.js";


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

import "../components/where-i-can-buy/shops/css/shop-map.css";
import "../components/where-i-can-buy/css/mobile__photo.css";
import "../components/where-i-can-buy/css/mobile-photo-container.css";

class WhereICanBuy extends Component {
    constructor(props) {
        super(props)

        this.shopCardSelect = this.shopCardSelect.bind(this);

        this.state = {
            mapImageUrl: require("../images/map.png"),
            shops: [
                {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                }, {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                }, {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                }, {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                }, {
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                }
            ],
            shopCards: [
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                }
            ]
        }
    }

    shopCardSelect(map) {
        this.setState({ mapImageUrl: map })
    }

    render() {
        return (
            <div className="where">
                <Header isDark={true} />
                <section className="where-i-can-buy">
                    <nav className="where-i-can-buy__menu">
                        <a href="/" className="where__menu-item">Главная страница > </a>
                        <a href="/" className="where__menu-item where__menu-item_active">где купить?</a>
                    </nav>

                    <Tabs>
                        <TabList>
                            <Tab>офлайн </Tab>
                            <Tab>онлайн</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="where-i-can-buy__grid-container">
                                {this.state.shopCards.map((item, index) => {
                                    return (
                                        <ShopCard
                                            key={index}
                                            image={item.image}
                                            link={item.link}
                                        />)
                                })}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="where-i-can-buy__shops">
                                <div className="where-i-can-buy__list-shops">
                                    {this.state.shops.map((item, index) => {
                                        return (
                                            <div key={index}
                                                onClick={() => this.shopCardSelect(item.map)}>
                                                <BuyShopCard shop={item} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <Image
                                    src={this.state.mapImageUrl}
                                    alt={"shop-map"}
                                    className={"shop-map"}
                                />
                            </div>
                        </TabPanel>
                    </Tabs>
                </section>
                <div className="mobile-photo-container">
                    <Image
                        src={require("../images/gallery-item2.png")}
                        alt={"mobile__photo"}
                        className={"mobile__photo"}
                    />
                </div>
                <section className="main"><Footer /></section>
            </div>
        )
    }

}

export default WhereICanBuy;