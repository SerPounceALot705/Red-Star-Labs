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
            innerWidth: window.innerWidth,
            shops: [
                {
                    id: 1,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    id: 2,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    id: 3,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    id: 4,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    id: 5,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../images/map.png")
                },
                {
                    id: 6,
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
            ],
            selectShop:   {
                id: 1,
                city: "Москва",
                phone1: "+7(495) 646-87-80",
                phone2: "+7(968) 565-82-28",
                workDay: "ПН-ВС 10:00-21:00",
                regionPhone: "8(800) 500-87-41",
                map: require("../images/map.png")
            }
        }

        this.handleResize = this.handleResize.bind(this);
        this.handlerChange = this.handlerChange.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize, false);
    }

    componentWillUnmount() {

        this.setState({
            selectShop: this.state.shops[0]
        })

        window.removeEventListener("resize", this.handleResize, false);
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    handlerChange(event) {
        const selectItem = this.state.shops.find(s => s.id == event.target.value);
        this.setState({ 
            mapImageUrl: selectItem.map,
            selectShop: selectItem
        })
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

                            {this.state.innerWidth > 768
                                ? <div className="where-i-can-buy__shops">
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
                                :
                                <div className="where-i-can-buy__shops">
                                    <select onChange={this.handlerChange}>
                                        {this.state.shops.map((item, index) => {
                                            return (
                                                <option value={item.id} key={index}>{item.city}</option>
                                            )
                                        })}
                                    </select>
                                    <div className="where-i-can-buy__shop-card">
                                        <ul>
                                            <li>{this.state.selectShop.city}</li>
                                            <li>{this.state.selectShop.phone1}</li>
                                            <li>{this.state.selectShop.phone2}</li>
                                            <li>{this.state.selectShop.workDay}</li>
                                            <li>{this.state.selectShop.regionPhone}</li>
                                        </ul>
                                    </div>
                                    <Image
                                        src={this.state.mapImageUrl}
                                        alt={"shop-map"}
                                        className={"shop-map"}
                                    />
                                </div>
                            }

                        </TabPanel>
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