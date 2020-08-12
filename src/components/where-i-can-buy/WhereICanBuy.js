import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FiPhone } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import 'react-tabs/style/react-tabs.css';

import Header from "../home/header/header.js";
import Footer from "../home/footer/js/footer.js";
import Image from "../image/image.js";
import ShopCard from "./shopCard/shopCard.js";
import BuyShopCard from "./buyShopCard/buyShopCard.js";

import "../../components/where.css";

class WhereICanBuy extends Component {
    constructor(props) {
        super(props)

        this.shopCardSelect = this.shopCardSelect.bind(this);

        this.state = {
            mapImageUrl: require("../../images/map.png"),
            innerWidth: window.innerWidth,
            shops: [
                {
                    id: 1,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                },
                {
                    id: 2,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                },
                {
                    id: 3,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                },
                {
                    id: 4,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                },
                {
                    id: 5,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                },
                {
                    id: 6,
                    city: "Москва",
                    phone1: "+7(495) 646-87-80",
                    phone2: "+7(968) 565-82-28",
                    workDay: "ПН-ВС 10:00-21:00",
                    regionPhone: "8(800) 500-87-41",
                    map: require("../../images/map.png")
                }
            ],
            shopCards: [
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                },
                {
                    image: { url: require("../../images/sber.png"), alt: "sber.png", className: "where-i-can-buy__image" },
                    link: { url: "/", text: "Сбермаркет" }
                }
            ],
            selectShop: {
                id: 1,
                city: "Москва",
                phone1: "+7(495) 646-87-80",
                phone2: "+7(968) 565-82-28",
                workDay: "ПН-ВС 10:00-21:00",
                regionPhone: "8(800) 500-87-41",
                map: require("../../images/map.png")
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
                        <a href="/" className="where__menu-item">Главная страница &gt; </a>
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
                                    <select className="where-i-can-buy__select" onChange={this.handlerChange}>
                                        {this.state.shops.map((item, index) => {
                                            return (
                                                <option value={item.id} key={index}>{item.city}</option>
                                            )
                                        })}
                                    </select>
                                    <div className="where-i-can-buy__shop-card">
                                        <div className="where-i-can-buy__first-container">
                                            <span className="where-i-can-buy__name-of-shop">5lb</span>
                                            <p className="where-i-can-buy__shop-description">
                                                Интернет-магазин спортивного питания
                                            </p>
                                        </div>
                                        <div className="where-i-can-buy__adress-container">
                                            
                                            <div className="fip-container"><FiPhone /></div>
                                            <div className="where-i-can-buy__adress">
                                                <span className="where-i-can-buy__town">{this.state.selectShop.city}</span>
                                                <p className="where-i-can-buy__phone-number">{this.state.selectShop.phone1}</p>
                                                <p className="where-i-can-buy__phone-number">{this.state.selectShop.phone2}</p>
                                            </div>
                                        </div>
                                        <div className="where-i-can-buy__adress-container">
                                            <div className="second-fip-container"><FiClock /></div>
                                            <div className="where-i-can-buy__adress">
                                                <p className="where-i-can-buy__subtitle">{this.state.selectShop.workDay}</p>
                                            </div>
                                        </div>
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
                        src={require("../../images/gallery-item2.png")}
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