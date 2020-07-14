import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";
import Calculator from "../components/calculator/Calculator.js";
import AnalyticsItem from "../components/analyticsItem/analyticsItem.js";

import "../components/card.css";
import "../components/card/css/imports.css";
class Card extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="main">

                <section className="card">
                    <Header />
                    <div className="card__container">
                        <nav className="contacts__menu">
                            <Link to="/" className="contacts__menu-item">{"Главная страница > "}</Link>
                            <Link to="/catalog" className="contacts__menu-item">{"Протеины > "}</Link>
                            <Link to="/" className="contacts__menu-item contacts__menu-item_active">{"premium whey concentrate"}</Link>
                        </nav>
                        <div className="card-description__main-container">
                            <div className="card__description">
                                <Image
                                    src={require("../images/logoSuperior.png").default}
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
                                <div className="product-line__button">
                                    <p>Все характеристики</p>
                                    <Image
                                        src={require("../images/arrow.png").default}
                                        alt={"arrow"}
                                        className={"arrow__photo"}
                                    />
                                </div>
                            </div>
                            <Image
                                src={require("../images/premiumWhey2.png").default}
                                alt={"logoSuperior"}
                                className={"logoSuperior"}
                            />
                        </div>
                    </div>
                </section>
                <section className="card__detailed-description">
                    <div className="card__detailed-desc-first-container">
                        <h2 className="card__detailed-title">
                            Clear Whey Isolate
                        </h2>
                        <p className="card__detailed-text">Это не просто еще один вид протеинового коктейля.
                        Из высококачественного изолята сывороточного протеина
                        мы сделали продукт для приготовления легкого,
                        освежающего коктейля. По вкусу он больше напоминает сок.
                        </p>
                        <p className="card__detailed-text">
                            В линейке представлено 5 великолепных фруктовых
                            вкусов, среди которых горький лимон, апельсин с манго,
                            персиковый чай, мохито и фруктовая карамель.
                            </p>
                        <h2 className="card__detailed-title-first">Для каких целей</h2>
                        <div>
                            <div className="product-line__spec-main-container">

                                <div className="product-line__spec">
                                    <Image
                                        src={require("../images/ico-spec.png").default}
                                        alt={"icon-spec__photo"}
                                        className={"icon-spec__photo"}
                                    />
                                    <p className="spec__desc">При интенсивном стиле тренеровок</p>
                                </div>
                                <div className="product-line__spec">
                                    <Image
                                        src={require("../images/ico-spec2.png").default}
                                        alt={"icon-spec__photo"}
                                        className={"icon-spec__photo"}
                                    />
                                    <p className="spec__desc">Повышенный витаминный комплекс</p>
                                </div>
                                <div className="product-line__spec">
                                    <Image
                                        src={require("../images/ico-spec3.png").default}
                                        alt={"icon-spec__photo"}
                                        className={"icon-spec__photo"}
                                    />
                                    <p className="spec__desc">Для достижения быстрых резуальтатов</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card__detailed-desc-second-container">
                        <h2 className="card__detailed-title-sec">
                            Ключевые преимущества
                            </h2>
                        <p className="card__detailed-text-sec">20 г протеина;</p>
                        <p className="card__detailed-text-sec">легкий и освежающий;</p>
                        <p className="card__detailed-text-sec">без молочного вкуса и текстуры;</p>
                        <p className="card__detailed-text-sec">4 г BCAA и 3 г глютамина;</p>
                        <p className="card__detailed-text-sec">мало сахара;</p>
                        <p className="card__detailed-text-sec">фруктовые вкусы.</p>
                        <div className="card__analytics">
                            <AnalyticsItem
                                items={[
                                    { value: "85%", text: "Cодержание действующих веществ" },
                                    { value: "65%", text: "Витаминный комплекс" },
                                    { value: "70%", text: "Содержания углеводов" },
                                    { value: "20%", text: "Сахар" }
                                ]}
                            />
                        </div>
                    </div>
                    <div className="card__detailed-desc-third-container">
                        <h2 className="card__detailed-title">Состав</h2>
                        <table>
                            <tbody>
                                <tr><td className="card__table-text">Порция</td><td className="card__table-text">40<span className="card__table-sub">г</span></td></tr>
                                <tr><td className="card__table-text">Количество порций</td><td className="card__table-text">20<span className="card__table-sub"></span></td></tr>
                                <tr><td className="card__table-text">Калории</td><td className="card__table-text">140<span className="card__table-sub">ккал</span></td></tr>
                                <tr><td className="card__table-text">Калории из жиров</td><td className="card__table-text">18<span className="card__table-sub">ккал</span></td></tr>
                                <tr><td className="card__table-text">Всего жиров</td><td className="card__table-text">2<span className="card__table-sub"></span></td></tr>
                                <tr><td className="card__table-text">Глюкоза</td><td className="card__table-text">2,1<span className="card__table-sub"></span></td></tr>
                                <tr><td className="card__table-text">Белка</td><td className="card__table-text">28<span className="card__table-sub"></span></td></tr>
                                <tr><td className="card__table-text">Витамин А</td><td className="card__table-text">0,21<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Витамин Д3</td><td className="card__table-text">1,8<span className="card__table-sub">мкг</span></td></tr>
                                <tr><td className="card__table-text">Витамин Е</td><td className="card__table-text">1,2<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Витамин В1</td><td className="card__table-text">0,21<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Витамин В2</td><td className="card__table-text">0,21<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Витамин В6</td><td className="card__table-text">0,21<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Ниацин</td><td className="card__table-text">3,15<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Фолиевая кислота</td><td className="card__table-text">0,08<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Пантотеновая кислота</td><td className="card__table-text">1,15<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Биотин</td><td className="card__table-text">0,031<span className="card__table-sub">мг</span></td></tr>
                                <tr><td className="card__table-text">Витамин В12</td><td className="card__table-text">0,525<span className="card__table-sub">мкг</span></td></tr>
                                <tr><td className="card__table-text">Витамин С</td><td className="card__table-text">147<span className="card__table-sub">мг</span></td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <Footer />
            </div>
        )
    }
}

export default Card