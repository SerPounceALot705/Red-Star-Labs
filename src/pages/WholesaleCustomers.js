import React, { Component } from "react";
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";

import "../components/contact-form/css/star.css";
import "../components/wholesaleCustomers/css/wholesale-customers__main.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__text-container.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__title.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__subtitle.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__text.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__input-container.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__input.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-form__button.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__container.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__button.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__buttons-container.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__text.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__title.css";
import "../components/wholesaleCustomers/css/advantages__foto.css";
import "../components/wholesaleCustomers/css/buttons__foto.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages__button-container.css";
import "../components/wholesaleCustomers/css/for-wholesale-customers-advantages.css";
import "../components/wholesaleCustomers/css/wholesale-customers__main-container.css";


class WholesaleCustomers extends Component {
    render() {
        return (
            <section className="wholesale-customers">
                <div className="wholesale-customers__main">
                    <Header />
                    <div className="wholesale-customers__main-container">
                        <nav className="contacts__menu">
                            <a href="/" className="contacts__menu-item">Главная страница ></a>
                            <a href="/" className="contacts__menu-item contacts__menu-item_active">Оптовым клиентам</a>
                        </nav>
                        <div className="for-wholesale-customers">
                            <div className="for-wholesale-customers-form">
                                <div className="for-wholesale-customers-form__text-container">
                                    <h2 className="for-wholesale-customers-form__title">Приглашаем к партнерству оптовых дистрибьюторов</h2>
                                    <h3 className="for-wholesale-customers-form__subtitle">Оставьте заявку, заполните поля ниже</h3>
                                    <p className="for-wholesale-customers-form__text">
                                        <span className="star">* </span>
                            - поля, обязательнные для заполнения
                            </p>
                                </div>
                                <form className="for-wholesale-customers-form__input-container">
                                    <input className="for-wholesale-customers-form__input" placeholder="* Имя" type="text" minLength="2" maxLength="30" required></input>
                                    <input className="for-wholesale-customers-form__input" placeholder="* Email" type="email" minLength="2" maxLength="30" required></input>
                                    <input className="for-wholesale-customers-form__input" placeholder="* +7" type="telephone" required></input>
                                    <input className="for-wholesale-customers-form__input" placeholder="Сообщение" type="text" minLength="2" maxLength="30" required></input>
                                    <button className="for-wholesale-customers-form__button" type="submit" name="submit">Отправить</button>
                                </form>
                            </div>
                            <div className="for-wholesale-customers-advantages">
                                <h2 className="for-wholesale-customers-advantages__title">Наши преимущества:</h2>
                                <div className="for-wholesale-customers-advantages__container">
                                    <Image
                                        src={require("../images/advantages1.png")}
                                        alt={"advantages__foto01"}
                                        className={"advantages__foto"}
                                    />
                                    <p className="for-wholesale-customers-advantages__text">Более 10 лет на рынке</p>
                                </div>
                                <div className="for-wholesale-customers-advantages__container">
                                    <Image
                                        src={require("../images/advantages2.png")}
                                        alt={"advantages__foto02"}
                                        className={"advantages__foto"}
                                    />
                                    <p className="for-wholesale-customers-advantages__text">Индивидуальный подход к каждому клиенту</p>
                                </div>
                                <div className="for-wholesale-customers-advantages__container">
                                    <Image
                                        src={require("../images/advantages3.png")}
                                        alt={"advantages__foto03"}
                                        className={"advantages__foto"}
                                    />
                                    <p className="for-wholesale-customers-advantages__text">Наличие товара на складе в России</p>
                                </div>
                                <div className="for-wholesale-customers-advantages__container">
                                    <Image
                                        src={require("../images/advantages4.png")}
                                        alt={"advantages__foto04"}
                                        className={"advantages__foto"}
                                    />
                                    <p className="for-wholesale-customers-advantages__text">Высокая частота повторных покупок</p>
                                </div>
                                <div className="for-wholesale-customers-advantages__buttons-container">
                                    <div className="for-wholesale-customers-advantages__button-container">
                                        <Image
                                            src={require("../images/icon1.png")}
                                            alt={"buttons__foto-01"}
                                            className={"buttons__foto"}
                                        />
                                        <button className="for-wholesale-customers-advantages__button" type="submit" name="submit">Запросить прайс</button>
                                    </div>
                                    <div className="for-wholesale-customers-advantages__button-container">
                                        <Image
                                            src={require("../images/icon2.png")}
                                            alt={"buttons__foto-02"}
                                            className={"buttons__foto"}
                                        />
                                        <button className="for-wholesale-customers-advantages__button" type="submit" name="submit">Скачать каталог</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <footer className="main">
                    <Footer />
                </footer>
            </section>
        )
    }
}

export default WholesaleCustomers;