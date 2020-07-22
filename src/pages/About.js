import React, { Component } from "react";
import Header from "../components/header/header.js";
import ContactForm from "../components/contact-form/js/contact-form.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";


import "../components/main-about.css";
import "../components/about-brand/css/about-brand.css";
import "../components/about-brand/css/about__menu-item.css";
import "../components/about-brand/css/about__container.css";
import "../components/about-brand/css/about__about-brand-text.css";
import "../components/about-desctiption/css/about-description__top-container.css";
import "../components/about-desctiption/css/red-star-labs__logo.css";
import "../components/about-desctiption/css/about-description.css";
import "../components/about-desctiption/css/about-description-brand-text.css";
import "../components/about-desctiption/css/about-description__bottom-container.css";
import "../components/about-desctiption/css/about-description-igredients-text.css";
import "../components/our-mission/css/our-mission.css";
import "../components/our-mission/css/our-mission__title.css";
import "../components/our-mission/css/our-mission__text.css";
import "../components/our-mission/css/our-mission__container.css";
import "../components/our-mission/css/our-mission__container-item.css";
import "../components/our-mission/css/our-mission__text-item.css";
import "../components/about-desctiption/css/product-photo.css";
import "../components/about-desctiption/css/our-mission__photo-item.css";

class About extends Component {
    render() {
        return (
            <div className="about">
                <section className="main-about">
                    <Header isDark={false} />
                    <section className="about-brand">
                        <nav className="about__menu">
                            <a href="/" className="about__menu-item">Главная страница > </a>
                            <a href="/About" className="about__menu-item about__menu-item_active">о бренде</a>
                        </nav>
                        <div className="about__container">
                            <Image
                                src={require("../images/quality-mark.png")}
                                alt={"quality-mark"}
                                className={"about__quality-mark"}
                            />
                            <p className="about__about-brand-text">
                                Red Star Labs - международная компания по производству спортивного питания высочайшего качества,
                                головной офис которой находится в Таллахасси (Флорида, США).
                        </p>
                        </div>
                    </section>
                </section>
                <section className="about-description">
                    <div className="about-description__top-container">
                        <Image
                            src={require("../images/red-star-labs-logo.png")}
                            alt={"red-star-labs-logo"}
                            className={"red-star-labs__logo"}
                        />
                        <p className="about-description-brand-text">
                            Бренд основан в 2010 г с целью изменить положение на рынке спортивного питания, предлагая максимально эффективные продукты
                            из безопасного сырья. Добавки Red Star Labs производятся на лучших фабриках США, Европы и России с
                            использованием только самых современных и дейественных формул, разработанных специалистами
                            из США и соответствующих самым высоким стандартам качества.
                        </p>
                    </div>
                    <div className="about-description__bottom-container">
                        <Image
                            src={require("../images/product-photo.png")}
                            alt={"product-photo"}
                            className={"product-photo"}
                        />
                        <p className="about-description-igredients-text">
                            Ингредиенты, из которых изготавливается продукция компании, проходят тщательную проверку на чистоту и пригодность -
                            это неотъемлемое условие производства. Когда вы покупаете спортивное питание Red Star Labs,
                            вы можете быть полностью уверены в его эффективности и в том, что оно будет работать как ожидалось.
                    </p>
                    </div>
                </section>
                <section className="our-mission">
                    <h2 className="our-mission__title">Наша миссия:</h2>
                    <p className="our-mission__text">Доказать эффективность спортивных добавок,
                    предлагая потребителю “рабочие” продукты по справедливой цене.
                    </p>
                    <div className="our-mission__container">
                        <div className="our-mission__container-item">
                            <Image
                                src={require("../images/honest.png")}
                                alt={"honest"}
                                className={"our-mission__photo-item"}
                            />
                            <p className="our-mission__text-item">честный состав</p>
                        </div>
                        <div className="our-mission__container-item">
                            <Image
                                src={require("../images/raw-materials.png")}
                                alt={"honest"}
                                className={"our-mission__photo-item"}
                            />
                            <p className="our-mission__text-item">качественное сырье</p>
                        </div>
                        <div className="our-mission__container-item">
                            <Image
                                src={require("../images/price.png")}
                                alt={"honest"}
                                className={"our-mission__photo-item"}
                            />
                            <p className="our-mission__text-item">справедливая цена</p>
                        </div>
                        <div className="our-mission__container-item">
                            <Image
                                src={require("../images/standarts.png")}
                                alt={"honest"}
                                className={"our-mission__photo-item"}
                            />
                            <p className="our-mission__text-item">высокие стандарты производства</p>
                        </div>
                    </div>
                </section>
                    <ContactForm />
                <footer className="main">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default About;