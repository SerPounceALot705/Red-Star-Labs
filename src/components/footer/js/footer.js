import React, { Component } from "react";
import Image from "../../image/image.js";

import Nav from "../../header/js/nav.js";

import "../css/footer__logo.css";
import "../css/footer__nav-links.css"
import "../css/footer__nav-social.css";
import "../css/footer.css";
import "../css/footer__container.css";
import "../css/footer-figure__container.css";
import "../css/footer__text.css";
import "../css/footer__figure.css";

class Footer extends Component {
    render() {
        return (
            <section className="footer">
                <div className="footer__container">
                    <Image
                        src={require("../../../images/logo.png")}
                        alt={"logo"}
                        className={"footer__logo"}
                    />
                    <Nav className="footer__nav-links"
                        links={[
                            { url: "#", name: "продукция" },
                            { url: "#", name: "о бренде" },
                            { url: "#", name: "где купить?" },
                            { url: "#", name: "оптовым клиентам" },
                            { url: "#", name: "контакты" },
                        ]}
                    />
                    <div className="footer-figure__container">
                        <Image
                            src={require("../../../images/figure.png")}
                            alt={"figure"}
                            className={"footer__figure"}
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