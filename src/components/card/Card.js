import React, { Component } from "react";
import { Link } from 'react-router-dom'
import ReactStars from 'react-stars';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import Header from "../home/header/header.js";
import Footer from "../home/footer/js/footer.js";
import Image from "../image/image.js";
import Calculator from "../calculator/Calculator.js";
import DetailedDescription from "../detailedDescription/DetailedDescription.js";
import ScrolNumber from "./ScrolNumber.js";

import "./css/imports.css";
import "react-awesome-slider/dist/styles.css";


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

        const AutoplaySlider = withAutoplay(AwesomeSlider);

        const ratingChanged = (newRating) => {
            console.log(newRating)
        }

        return (
            <div className="main">
                <section className="card">
                    <Header />

                    <div className="card__container">
                        <nav className="contacts__menu">
                            <Link to="/" className="contacts__menu-item">Главная страница &gt; </Link>
                            <Link to="/catalog" className="contacts__menu-item">Протеины &gt; </Link>
                            <Link to="/" className="contacts__menu-item contacts__menu-item_active">premium whey concentrate</Link>
                        </nav>
                        <div className="card-description__main-container" id="card">
                            <div className="card__description">
                                <Image
                                    src={require("../../images/logoSuperior.png")}
                                    alt={"superior"}
                                    className={"superior__photo"}
                                />
                                <h2 className="card__title">PREMIUM WHEY CONCENTRATE</h2>
                                <p className="card__subtitle">Изолят сывороточного белка</p>
                                <p className="card__adaptive-text">750 мг</p>
                                <div className="card__adaptive">

                                    <div className="card__adaptive-slider">
                                        <AutoplaySlider
                                            play={true}
                                            interval={6000}
                                        >
                                            <div className="card__adaptive-photo">
                                                <Image
                                                    src={require("../../images/premiumWhey2.png")}
                                                    alt={"logoSuperior"}
                                                    className={"logoSuperior"}
                                                />
                                            </div>
                                            <div className="card__adaptive-photo">
                                                <Image
                                                    src={require("../../images/premiumWhey2.png")}
                                                    alt={"logoSuperior"}
                                                    className={"logoSuperior"}
                                                />
                                            </div>
                                            <div className="card__adaptive-photo">
                                                <Image
                                                    src={require("../../images/premiumWhey2.png")}
                                                    alt={"logoSuperior"}
                                                    className={"logoSuperior"}
                                                />
                                            </div>
                                        </AutoplaySlider>
                                    </div>
                                    <Calculator price={1000}
                                    />
                                </div>
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
                                <div className="card-price__container">
                                    <Calculator price={1000}
                                    />
                                </div>
                                <div onClick={() => this.handlerIsDetaield()} className="product-line__button">
                                    <p id="stats">Все характеристики</p>

                                    {this.state.isDetaield
                                        ? <Image
                                            src={require("../../images/arrowUp.png")}
                                            alt={"arrow"}
                                            className={"arrow__photo"}
                                        />
                                        : <Image
                                            src={require("../../images/arrow.png")}
                                            alt={"arrow"}
                                            className={"arrow__photo"}
                                        />
                                    }
                                </div>
                            </div>
                            <div className="card__img-container">
                                <Image
                                    src={require("../../images/premiumWhey2.png")}
                                    alt={"logoSuperior"}
                                    className={"logoSuperior"}
                                />
                            </div>
                            <ScrolNumber/>
                        </div>
                        
                    </div>
                  
                    <div className="card-product-back"></div>
                    <Image
                        src={require("../../images/_quality mark.png")}
                        alt={"quality-mark"}
                        className={"card-quality-mark"}
                    />        
                        
                </section>

                {
                    this.state.isDetaield ?
                        <DetailedDescription table={
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
                    <h3 className="card__rewiew-title-adaptive">Отзывы</h3>
                    <div className="card__rewiew-button-adaptive">
                        <p>Оставить отзыв</p>
                    </div>
                    <div className="card__rewiew-form-container-main">
                        <h2 className="card__rewiew-title" id="rewiew">Оставить свой отзыв</h2>
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
                <section className="card__video-rewiew" id="video">
                    <div className="video-rewiew__text-container">
                        <h2 className="video-rewiew__title">Видео обзор Clear Whey Isolate</h2>
                        <p className="video-rewiew__text">Это не просто еще один вид протеинового коктейля.
                        Из высококачественного изолята сывороточного протеина мы сделали продукт
                        для приготовления легкого, освежающего коктейля. По вкусу он больше напоминает сок.
                        В линейке представлено 5 великолепных фруктовых вкусов, среди которых горький лимон,
                        апельсин с манго, персиковый чай, мохито и фруктовая карамель.</p>
                    </div>
                    <div className="video">
                        <iframe id="ytplayer" type="text/html" width="720" height="405"
                            src="https://www.youtube.com/embed/iAjXRSvnMG0">
                        </iframe>
                    </div>
                </section>
                <section className="card-adaptive__photo-gallery">
                    <h3 className="adaptive__photo-gallery-title">Фотогалерея</h3>
                    <div className="photo-gallery__slider">
                        <AutoplaySlider
                            play={true}
                            interval={6000}
                        >
                            <div className="adaptive__photo-slide">
                                <Image
                                    src={require("../../images/adaptive-photo-gal.png")}
                                    alt={"adaptive-photo-gal01"}
                                    className={"adaptive-photo-gal"}
                                />
                            </div>
                            <div className="adaptive__photo-slide">
                                <Image
                                    src={require("../../images/adaptive-photo-gal.png")}
                                    alt={"adaptive-photo-gal02"}
                                    className={"adaptive-photo-gal"}
                                />
                            </div>
                            <div className="adaptive__photo-slide">
                                <Image
                                    src={require("../../images/adaptive-photo-gal.png")}
                                    alt={"adaptive-photo-gal03"}
                                    className={"adaptive-photo-gal"}
                                />
                            </div>
                        </AutoplaySlider>
                    </div>
                </section>
                <section className="card__other-product-line">
                    <div className="other-product__title-container">
                        <h3 className="other-product-line__title" id="photo">Другие продукты линейки</h3>
                        <Link to="LineBasic">
                            <Image
                                src={require("../../images/logoSuperior.png")}
                                alt={"logoSuperior"}
                                className={"logoSuperior__photo"}
                            />
                        </Link>
                    </div>
                    <div className="other-product-line-products-container">
                        <div className="other-product-line-main-container">
                            <div className="card__other-product-line-container">
                                <Image
                                    src={require("../../images/line-product-item.png")}
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
                                    src={require("../../images/line-product-item.png")}
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
                                    src={require("../../images/line-product-item.png")}
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
                    </div>

                </section>
                <Footer />
            </div>
        )
    }
}

export default Card