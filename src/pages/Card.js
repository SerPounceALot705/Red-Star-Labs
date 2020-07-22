import React, { Component } from "react";
import ReactStars from 'react-stars'

import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";
import Calculator from "../components/calculator/Calculator.js";
import DetaieldDescription from "../components/detaieldDescription/DetaieldDescription.js";

import "../components/card.css";
import "../components/card/css/imports.css";
class Card extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isDetaield: true
        }

        this.handlerIsDetaield = this.handlerIsDetaield.bind(this);
    }

    handlerIsDetaield() {
        this.setState({
            isDetaield: !this.state.isDetaield
        })
    }

    render() {

        const ratingChanged = (newRating) => {
            console.log(newRating)
        }

        return (
            <div className="main">
                <section className="card">
                    <Header />
            
                    <div className="card__container">
                        <nav className="contacts__menu">
                            <a href="/" className="contacts__menu-item">Главная страница > </a>
                            <a href="/catalog" className="contacts__menu-item">Протеины > </a>
                            <a href="/" className="contacts__menu-item contacts__menu-item_active">premium whey concentrate</a>
                        </nav>
                        <div className="card-description__main-container">
                            <div className="card__description">
                                <Image
                                    src={require("../images/logoSuperior.png")}
                                    alt={"superior"}
                                    className={"superior__photo"}
                                />
                                <h2 className="card__title">PREMIUM WHEY CONCENTRATE</h2>
                                <p className="card__subtitle">Изолят сывороточного белка</p>
                                <div className="card__description-container">
                                    <h3 className="card__description-title">Питательная ценность на 100г. продукта</h3>
                                    <div className="card__description-both-container">
                                        <div className="card__description-first-container">
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Энергетическая ценность
                                                        <p className="card__description__text">391Ккал</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Белки
                                                        <p className="card__description__text">72,9 г.</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Углеводы
                                                        <p className="card__description__text">7,9 г.</p>
                                                    </span>
                                                </div>
                                                <p className="card-description__additionaly-text">из которых сахара 5,5 г.</p>

                                            </div>
                                        </div>
                                        <div className="card__description-second-container">
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Энергетическая ценность
                                                    <p className="card__description__text">1652Кдж</p>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Пищевые волокна
                                                        <p className="card__description__text">2,2 г.</p>
                                                    </span>
                                                </div></div>
                                            <div className="card__small-container">
                                                <div className="card__description-text-container">
                                                    <span className="card__description-text-title">
                                                        Жиры
                                                        <p className="card__description__text">7,1 г.</p>
                                                    </span>
                                                </div>
                                                <p className="card-description__additionaly-text">из них насыщенные жирные кислоты 4,4 г.</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="label__container">
                                    <label className="label__title">Вкус:</label>
                                    <select className="card-select">
                                        <option>апельсин, манго и маракуйя</option>
                                    </select>
                                </div>
                                <div className="card-price__container">
                                    <Calculator price={1000}
                                    />
                                    <button className="card__button">Добавить в корзину</button>
                                </div>
                                <div onClick={() => this.handlerIsDetaield()} className="product-line__button">
                                    <p>Все характеристики</p>

                                    {this.state.isDetaield 
                                        ? <Image
                                            src={require("../images/arrowUp.png")}
                                            alt={"arrow"}
                                            className={"arrow__photo"}
                                        />
                                        : <Image
                                            src={require("../images/arrow.png")}
                                            alt={"arrow"}
                                            className={"arrow__photo"}
                                        />
                                    }
                                </div>
                            </div>
                            <Image
                                src={require("../images/premiumWhey2.png")}
                                alt={"logoSuperior"}
                                className={"logoSuperior"}
                            />
                        </div>
                    </div>
                </section>

                {
                    this.state.isDetaield ?
                        <DetaieldDescription table={
                            [
                                { text: "Порция", value: "40", span: " г" },
                                { text: "Количество порций", value: "20", span: "" },
                                { text: "Калории", value: "140", span: " ккал" },
                                { text: "Калории из жиров", value: "18", span: " ккал" },
                                { text: "Всего жиров", value: "2", span: "" },
                                { text: "Глюкоза", value: "2,1", span: " г" },
                                { text: "Белка", value: "28", span: " г" },
                                { text: "Витамин А", value: "0,21", span: " мг" },
                                { text: "Витамин Д3", value: "1,8", span: " мкг" },
                                { text: "Витамин Е", value: "1,2", span: " мг" },
                                { text: "Витамин В1", value: "0,21", span: " мг" },
                                { text: "Витамин В6", value: "0,21", span: " мг" },
                                { text: "Ниацин", value: "0,21", span: " мг" },
                                { text: "Фолиевая кислота", value: "3,15", span: " мг" },
                                { text: "Пантотеновая кислота", value: "0,08", span: " мг" },
                                { text: "Биотин", value: "1,15", span: " мг" },
                                { text: "Витамин В12", value: "0,031", span: " мкг" },
                                { text: "Витамин С", value: "147", span: " мг" },
                            ]
                        } />
                        : null
                }

                <section className="card__rewiew">
                    <div className="card__rewiew-form-container-main">
                        <h2 className="card__rewiew-title">Оставить свой отзыв</h2>
                        <form className="card__rewiew-form-container">
                            <div className="card-rewiew-rating-container">
                                <h4 className="card__rewiew-form-subtitle">Пожалуйста поставьте оценку</h4>
                                <div>
                                    <ReactStars
                                        count={5}
                                        onChange={ratingChanged}
                                        size={24}
                                        color2={'#ad1410'} />
                                </div>
                            </div>
                            <input className="card__input-name" placeholder="* Имя" type="text" minLength="2" maxLength="30" required />
                            <input className="card__input-email" placeholder="* Email" type="email" minLength="2" maxLength="30" required />
                            <div className="card__rewiew-input-container">
                                <input className="card__input-topic" placeholder="* Тема" type="text" minLength="2" maxLength="30" required />
                                <textarea className="card__select-input" placeholder="Сообщение" type="text" minLength="2" maxLength="30" required />
                            </div>
                            <div className="card__form-rewiew-button-container">
                                <button className="card__form-rewiew-button" type="submit">Отправить</button>
                                <div className="contact-form__cheackbox-container">
                                    <input type="checkbox" id="scales" name="scales" defaultChecked
                                    />
                                    <label className="contacts-form__label" htmlFor="scales">Даю согласие на обработку персональных данных</label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card__rewiew-container">
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                        <div className="card__user-rewiew">
                            <div className="card__user-rewiew-info">
                                <p className="user-name">Кирилл</p>
                                <p className="date">21.03.2020</p>
                            </div>
                            <div className="user-rewiew">
                                <h4 className="user-rewiew__title">Очень вкусный протеин</h4>
                                <p className="rewiew">С другой стороны сложившаяся структура организации в
                                значительной степени обуславливает создание позиций, занимаемых участниками
                                в отношении поставленных задач. Повседневная практика показывает, что рамки и
                                место обучения кадров позволяет оценить значение соответствующий условий активизации.
                                Значимость этих проблем настолько очевидна, что новая модель организационной
                                деятельности представляет собой интересный эксперимент проверки существенных
                                финансовых и административных условий. Равным образом консультация с широким
                                активом представляет собой интересный эксперимент проверки форм развития.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="card__video-rewiew">
                    <div className="video-rewiew__text-container">
                        <h2 className="video-rewiew__title">Видео обзор Clear Whey Isolate</h2>
                        <p className="video-rewiew__text">Это не просто еще один вид протеинового коктейля.
                        Из высококачественного изолята сывороточного протеина мы сделали продукт
                        для приготовления легкого, освежающего коктейля. По вкусу он больше напоминает сок.
                        В линейке представлено 5 великолепных фруктовых вкусов, среди которых горький лимон,
                        апельсин с манго, персиковый чай, мохито и фруктовая карамель.</p>
                    </div>
                    <iframe id="ytplayer" type="text/html" width="720" height="405"
                        src="https://www.youtube.com/embed/iAjXRSvnMG0"
                    >
                    </iframe>
                </section>
                <section className="card__other-product-line">
                    <div className="other-product__title-container">
                        <h3 className="other-product-line__title">Другие продукты линейки</h3>
                        <Image
                            src={require("../images/logoSuperior.png")}
                            alt={"logoSuperior"}
                            className={"logoSuperior__photo"}
                        />
                    </div>
                    <div className="other-product-line-main-container">
                        <div className="card__other-product-line-container">
                            <Image
                                src={require("../images/line-product-item.png")}
                                alt={"product-line-item"}
                                className={"product-line-item__photo"}
                            />
                            <div className="other-product__description-of-product">
                                <p className="denomination-of-product">Сывороточный протеин</p>
                                <p className="name-of-product">Whey Isolate</p>
                                <p className="card__other-product-description">Чистый сывороточный протеин</p>
                            </div>
                        </div>
                        <div className="card__other-product-line-container">
                            <Image
                                src={require("../images/line-product-item.png")}
                                alt={"product-line-item"}
                                className={"product-line-item__photo"}
                            />
                            <div className="other-product__description-of-product">
                                <p className="denomination-of-product">Сывороточный протеин</p>
                                <p className="name-of-product">Whey Isolate</p>
                                <p className="card__other-product-description">Чистый сывороточный протеин</p>
                            </div>
                        </div>
                        <div className="card__other-product-line-container">
                            <Image
                                src={require("../images/line-product-item.png")}
                                alt={"product-line-item"}
                                className={"product-line-item__photo"}
                            />
                            <div className="other-product__description-of-product">
                                <p className="denomination-of-product">Сывороточный протеин</p>
                                <p className="name-of-product">Whey Isolate</p>
                                <p className="card__other-product-description">Чистый сывороточный протеин</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Card