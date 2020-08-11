import React, { Component } from "react";
import Image from "../../../image/image.js";

import Nav from "../../header/nav/nav.js";

import "../css/imports.css";

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer__container">
                    <a href="/">
                        <Image
                            src={require("../../../../images/logo.png")}
                            alt={"logo"}
                            className={"footer__logo"}
                        />
                    </a>
                    <Nav className="footer__nav-links"
                        links={[
                            { url: "About", name: "о бренде" },
                            { url: "WhereICanBuy", name: "где купить?" },
                            { url: "WholesaleCustomers", name: "оптовым клиентам" },
                            { url: "Contacts", name: "контакты" },
                        ]}
                    />
                    <div className="footer-figure__container">
                        <Image
                            src={require("../../../../images/figure.png")}
                            alt={"figure"}
                            className={"footer__figure"}
                        />
                         <Image
                            src={require("../../../../images/tringle.png")}
                            alt={"tringle"}
                            className={"footer__tringle"}
                        />
                        <Nav className="footer__nav-social footer__nav-social_theme-white"
                            links={
                                [
                                    { url: "#", name: "fb" },
                                    { url: "#", name: "vk" },
                                    { url: "#", name: "in" },
                                ]}
                        />
                    </div>
                </div>
                <div className="footer__text-container">
                    <span className="footer__text">
                        2020 &copy; 2018 The Hut.com Limited - компания, зарегистрированная в Англии и Уэльсе
                        (регистрационный номер компании 05016010). Адрес регистрации: Voyager House,
                        Chicago Avenue, Manchester Airport, M90 3DQ.
                    </span>
                </div>
            </section>
        )
    }
}

export default Footer;