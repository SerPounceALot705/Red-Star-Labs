import React, { Component } from "react";
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';
import Nav from "../home/header/nav/nav.js";
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
                        <Link to={"/"} className={"header__dropdown-content-title-link"}>Протеины</Link>
                        <ul className="header__dropdown-content-list">
                            <Link to={"/"} className={"header__dropdown-content-link"}>Сывороточный</Link>
                            <Link to={"/"} className={"header__dropdown-content-link"}>Изолят</Link>
                            <Link to={"/"} className={"header__dropdown-content-link"}>Казеин</Link>
                            <Link to={"/"} className={"header__dropdown-content-link"}>Говяжий</Link>
                        </ul>
                    </li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Карнитин</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Батончики</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</Link></li>
                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</Link></li>
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
                            src={require("../../images/fb.png")}
                            alt={"fb-icon"}
                            className={"fb-icon"}
                        />
                        <Link to=""></Link>
                    </div>
                    <div className="icon-container">
                        <Image
                            src={require("../../images/instagram.png")}
                            alt={"inst-icon"}
                            className={"inst-icon"}
                        />
                        <Link to=""></Link>
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