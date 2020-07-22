import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu';
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
                        <a href={"/"} className={"header__dropdown-content-title-link"}>Протеины</a>
                        <ul className="header__dropdown-content-list">
                            <a href={"/"} className={"header__dropdown-content-link"}>Сывороточный</a>
                            <a href={"/"} className={"header__dropdown-content-link"}>Изолят</a>
                            <a href={"/"} className={"header__dropdown-content-link"}>Казеин</a>
                            <a href={"/"} className={"header__dropdown-content-link"}>Говяжий</a>
                        </ul>
                    </li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Карнитин</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Батончики</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</a></li>
                    <li><a href={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</a></li>
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
                            { href: "About", name: "о бренде" },
                            { href: "WhereICanBuy", name: "где купить?" },
                            { href: "WholesaleCustomers", name: "оптовым клиентам" },
                            { href: "Contacts", name: "контакты" },
                        ]}
                    />
                </div>
                <div className="burger-social">
                    <p className="social-links__telephone">+7(945)000 00 00</p>
                    <div className="icon-container">
                        <Image
                            src={require("../../images/fb.png")}
                            alt={"fb-icon"}
                            className={"fb-icon"}
                        />
                        <a href=""></a>
                    </div>
                    <div className="icon-container">
                        <Image
                            src={require("../../images/instagram.png")}
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