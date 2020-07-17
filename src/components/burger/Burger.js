import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import LinkUrl from "../header/js/linkUrl.js";
import LineCard from "../dropDownMenu/js/LineCard.js";
import Nav from "../header/js/nav.js";

import "./css/burger.css";

class Burger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: window.innerWidth
        }

        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    burgerMenu() {
        return (
            <Menu right>
                <div>
                
                    <ul>
                    <h2 className="header__dropdown-content-title">Продукция</h2>
                        <li>
                            <LinkUrl url={"/"} name={"Протеины"} className={"header__dropdown-content-title-link"} />
                            <ul className="header__dropdown-content-list">
                                <LinkUrl url={"/"} name={"Сывороточный"} className={"header__dropdown-content-link"} />
                                <LinkUrl url={"/"} name={"Изолят"} className={"header__dropdown-content-link"} />
                                <LinkUrl url={"/"} name={"Казеин"} className={"header__dropdown-content-link"} />
                                <LinkUrl url={"/"} name={"Говяжий"} className={"header__dropdown-content-link"} />
                            </ul>
                        </li>
                        <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Аминокислоты и ВСАА"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Карнитин"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Батончики"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Предтренировочные комплексы"} className={"header__dropdown-content-title-link"} /></li>
                        <li><LinkUrl url={"/"} name={"Препараты для связок и суставов"} className={"header__dropdown-content-title-link"} /></li>
                    </ul>
                </div>
                <div className="header__dropdown-content-product">
                    <h2 className="header__dropdown-content-title">Линейки</h2>
                    <div className="header__dropdown-content-product-card">
                        <LineCard
                            className={"header__dropdown-content-card"}
                            content={
                                {
                                    link: {
                                        text: "Для насыщения организма витаминами",
                                        url: "Card"
                                    },
                                    logo: {
                                        url: require("../../images/logobasic.png").default,
                                        alt: "logobasic"
                                    },
                                    product: {
                                        url: require("../../images/whey.png").default,
                                        alt: "whey"
                                    }
                                }
                            } />
                        <LineCard
                            className={"header__dropdown-content-card"}
                            content={
                                {
                                    link: {
                                        text: "Для насыщения организма витаминами",
                                        url: "Card"
                                    },
                                    logo: {
                                        url: require("../../images/logoEssential.png").default,
                                        alt: "logobasic"
                                    },
                                    product: {
                                        url: require("../../images/Essentialbank.png").default,
                                        alt: "whey"
                                    }
                                }
                            } />
                    </div>
                    <div className="header__dropdown-content-product-card">
                        <LineCard
                            className={"header__dropdown-content-card"}
                            content={
                                {
                                    link: {
                                        text: "Для насыщения организма витаминами",
                                        url: "Card"
                                    },
                                    logo: {
                                        url: require("../../images/logoEssential.png").default,
                                        alt: "logobasic"
                                    },
                                    product: {
                                        url: require("../../images/premiumwhey.png").default,
                                        alt: "whey"
                                    }
                                }
                            } />
                        <LineCard
                            className={"header__dropdown-content-card"}
                            content={
                                {
                                    link: {
                                        text: "Для насыщения организма витаминами",
                                        url: "Card"
                                    },
                                    logo: {
                                        url: require("../../images/logoSuperior.png").default,
                                        alt: "logobasic"
                                    },
                                    product: {
                                        url: require("../../images/beowulfbank.png").default,
                                        alt: "whey"
                                    }
                                }
                            } />
                    </div>
                </div>
                <div>
                <Nav className="header__nav-links"
                    links={[
                        { url: "#", name: "продукция", isDrop: true },
                        { url: "About", name: "о бренде" },
                        { url: "WhereICanBuy", name: "где купить?" },
                        { url: "WholesaleCustomers", name: "оптовым клиентам" },
                        { url: "Contacts", name: "контакты" },
                    ]}
                />
                <Nav className="header__nav-social"
                    links={[
                        { url: "#", name: "fb" },
                        { url: "#", name: "vk" },
                        { url: "#", name: "in" },
                    ]}
                />

                </div>
            </Menu>)
    }

    render() {
        return (
            <div>
                {this.state.innerWidth > 768 ? null : this.burgerMenu()}
            </div>
        );
    }
}

export default Burger;