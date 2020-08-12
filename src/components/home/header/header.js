import React, { Component } from "react";
import Image from "../../image/image.js";
import { slide as Menu } from 'react-burger-menu';


import Nav from "./nav/nav.js";
import Language from "./language/language.js";
import Basket from "./basket/js/basket.js";
import Burger from "../../burger/Burger.js";

import "./css/imports.css";

class Header extends Component {
    constructor(props) {
        super(props)

        this.LogoUrl = require("../../../images/logo.png");

        this.headerClass = "header header-border";
        this.isDark = this.props.isDark;

        this.state = {
            innerWidth: window.innerWidth
        }

        window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillMount() {
        if (this.isDark === false) {
            this.LogoUrl = require("../../../images/white-logo.png");
            this.headerClass = "header header-theme-white";
        }
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    headerNav() {
        return (
            <div className="header">
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
                <Language />
                <Basket isDark={this.isDark} />
            </div>
        )
    }

    render() {
        return (
            <section className={this.headerClass}>
                <a href="/">
                <Image
                    src={this.LogoUrl}
                    alt={"logo"}
                    className={"header__logo"}
                />
               </a>
                {this.state.innerWidth > 768 ? this.headerNav() : <div><Basket/> <Burger/> </div>}
                
            </section>
        );
    }
}

export default Header;