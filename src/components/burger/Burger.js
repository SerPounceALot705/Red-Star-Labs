import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import LinkUrl from "../header/js/linkUrl.js";
import Nav from "../header/js/nav.js";
import BurgerProductLine from "./BurgerProductLine.js";
import Image from "../image/image.js";

import "./css/burger.css";

class Burger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: window.innerWidth,
            isLine: true
        }

        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize, false);
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    handkerIsLine() {
        this.setState({
            isLine: !this.state.isLine
        })
    }

    product() {
        return (
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
        );
    }

    burgerMenu() {
        return (
            <Menu right>

                {this.state.isLine ? this.product() : <BurgerProductLine />}

                <div className="header__dropdown-content-title" onClick={() => this.handkerIsLine()}>
                    Линейки
                </div>

                <div>
                    <Nav className="header__nav-links"
                        links={[
                            { url: "About", name: "о бренде" },
                            { url: "WhereICanBuy", name: "где купить?" },
                            { url: "WholesaleCustomers", name: "оптовым клиентам" },
                            { url: "Contacts", name: "контакты" },
                        ]}
                    />
                </div>
                <div className="burger-social">
                    <p className="social-links__telephone">+7(945)000 00 00</p>
                    <div className="icon-container">
                        <Image
                            src={require("../../images/fb.png").default}
                            alt={"fb-icon"}
                            className={"fb-icon"}
                        />
                        <a href=""></a>
                    </div>
                    <div className="icon-container">
                        <Image
                            src={require("../../images/instagram.png").default}
                            alt={"inst-icon"}
                            className={"inst-icon"}
                        />
                        <a href=""></a>
                    </div>
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