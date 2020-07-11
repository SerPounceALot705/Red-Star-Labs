import React, { Component } from "react";
import Image from "../image/image.js";

import Nav from "./js/nav.js";
import Language from "./js/language.js";
import Basket from "./js/basket.js";

import "./header.css";
import "./css/header__logo.css";
import "./css/header__nav-links.css"
import "./css/header__nav-social.css";

class Header extends Component {
    constructor(props) {
        super(props)

        this.LogoUrl = require("../../images/logo.png").default;
        this.headerClass = "header";
        this.isDark = this.props.isDark;
    }

    componentWillMount() {
        if (this.isDark == false) {
            this.LogoUrl = require("../../images/white-logo.png").default;
            this.headerClass = "header header-theme-white";
        }
    }

    render() {
        return (
            <section className={this.headerClass}>
                <Image
                    src={this.LogoUrl}
                    alt={"logo"}
                    className={"header__logo"}
                />
                <Nav className="header__nav-links"
                    links={[
                        { url: "#", name: "продукция", isDrop: true},
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
                <Language />
                <Basket  isDark={this.isDark}/>
                
            </section>
        );
    }
}

export default Header;