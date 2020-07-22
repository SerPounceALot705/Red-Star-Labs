import React, { Component } from "react";
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";

import "../components/contacts.css";
import "../components/contacts/css/contacts__main.css";
import "../components/contacts/css/contacts-main-container.css";
import "../components/contacts/css/contacts__menu.css";
import "../components/contacts/css/contacts__menu-item.css";
import "../components/contacts/css/contacts__title.css";
import "../components/contacts/css/contacts__phone-number.css";
import "../components/contacts/css/contacts__adress-container.css";
import "../components/contacts/css/contacts__subtitle.css";
import "../components/contacts/css/contacts__time.css";
import "../components/contacts/css/contacts__container.css";
import "../components/contacts/css/contacts__information-container.css";
import "../components/contacts/css/contacts-form__container.css";
import "../components/contacts/css/contacts-form__title.css";
import "../components/contacts/css/contact-form__input-container.css";
import "../components/contacts/css/contacts-form__input.css";
import "../components/contacts/css/contacts-form__select-main-container.css";
import "../components/contacts/css/contacts-form__select-container.css";
import "../components/contacts/css/contact-form__select.css";
import "../components/contacts/css/contact-form__option.css";
import "../components/contacts/css/contacts-form__select-input.css";
import "../components/contacts/css/contacts-form__select-button.css";
import "../components/contacts/css/contacts-form__button-container.css";
import "../components/contacts/css/contacts-form__label.css";
import "../components/contacts/css/contact-form__cheackbox-container.css";
import "../components/contacts/css/contacts-form.css";


class Contacts extends Component {
    render() {
        return (
            <section className="contacts">
                <div className="contacts__main">
                    <Header />
                    <div className="contacts-main-container">
                        <nav className="contacts__menu">
                            <a href="/" className="contacts__menu-item">Главная страница > </a>
                            <a href="/" className="contacts__menu-item contacts__menu-item_active">контакты</a>
                        </nav>
                        <div className="contacts__container">
                            <div className="contacts__information-container">
                                <div className="contacts__adress-container">
                                    <h2 className="contacts__title">По всем вопросам:</h2>
                                    <p className="contacts__phone-number">+7(495) 646-87-80</p>
                                    <p className="contacts__phone-number">+7(968) 565-82-28</p>
                                </div>
                                <div className="contacts__shop-container">
                                    <h2 className="contacts__title">Интернет магазин:</h2>
                                    <span className="contacts__operating-mode">
                                        <p className="contacts__subtitle">Работаем ежедневно:</p>
                                        <p className="contacts__time">9:00 - 21:00</p>
                                    </span>
                                </div>
                            </div>
                            <div className="contacts-form">
                                <h2 className="contacts-form__title">Обратная связь</h2>
                                <div className="contacts-form__container">
                                    <form className="contact-form__input-container">
                                        <input className="contacts-form__input" placeholder="* Имя" type="text" minLength="2" maxLength="30" required />
                                        <input className="contacts-form__input" placeholder="* Email" type="email" minLength="2" maxLength="30" required />
                                        <input className="contacts-form__input" placeholder="* +7" type="telephone" required />
                                    </form>
                                    <form className="contacts-form__select-main-container">
                                        <div className="contacts-form__select-container">
                                            <select className="contact-form__select">
                                                <option className="contact-form__option">Выберите тему</option>
                                                <option className="contact-form__option">Тема 1</option>
                                                <option className="contact-form__option">Тема 2</option>
                                                <option className="contact-form__option">Тема 3</option>
                                            </select>
                                            <textarea className="contacts-form__select-input" placeholder="Сообщение" type="text" minLength="2" maxLength="30" required />
                                        </div>
                                        <div className="contacts-form__button-container">
                                            <button className="contacts-form__select-button">Отправить</button>
                                            <div className="contact-form__cheackbox-container">
                                                <input type="checkbox" id="scales" name="scales" defaultChecked
                                                />
                                                <label className="contacts-form__label" htmlFor="scales">Даю согласие на обработку персональных данных</label>
                                            </div>
                                        </div>
                                    </form>
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

export default Contacts;