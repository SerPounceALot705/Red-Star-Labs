import React, { Component } from "react";
import Image from "../../image/image.js";
import "../css/contact-form.css";
import "../css/contact-form__main-container.css";
import "../css/contact-form__container.css";
import "../css/contact-form__title.css";
import "../css/contact-form__subtitle.css";
import "../css/contact-form__text.css";
import "../css/contact-form__input-container.css";
import "../css/contact-form__input.css";
import "../css/star.css";
import "../css/contact-form__button.css";
import "../css/contact-foto.css";

class ContactForm extends Component {
    render() {
        return (
            <section className="contact-form">
                <div className="contact-form__main-container">
                    <Image
                        src={require("../../../images/contact-foto.png")}
                        alt={"contact-foto"}
                        className={"contact-foto"}
                    />
                    <div className="contact-form__container">
                        <h2 className="contact-form__title">Приглашаем партнёров</h2>
                        <h3 className="contact-form__subtitle">Оставьте заявку, заполните поля ниже</h3>
                        <p className="contact-form__text">
                            <span className="star">* </span>
                            - поля, обязательнные для заполнения
                        </p>
                        <form className="contact-form__input-container">
                            <input className="contact-form__input" placeholder="* Имя" type="text" minLength="2" maxLength="30" required></input>
                            <input className="contact-form__input" placeholder="* Email" type="email" minLength="2" maxLength="30" required></input>
                            <input className="contact-form__input" placeholder="* +7" type="telephone" required></input>
                            <input className="contact-form__input" placeholder="Сообщение" type="text" minLength="2" maxLength="30" required></input>
                            <button className="contact-form__button" type="submit" name="submit">Отправить</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContactForm;