import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/header/header";
import Footer from "../components/footer/js/footer";
import Image from "../components/image/image.js";
import LinkUrl from "../components/header/js/linkUrl.js";

import "../components/catalog/css/imports.css";


class Catalog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="catalog-main">
                <Header />
                <section className="catalog">
                    <section className="catalog__line-product">
                        <div className="catalog__photo-container">
                            <Image
                                src={require("../images/banner.png").default}
                                alt={"banner__photo"}
                                className={"banner__photo"}
                            />
                            <div className="banner-photo__container-info">
                                <p className="banner-photo__text"><span>50%</span> на все товары линейки</p>
                                <Image
                                    src={require("../images/logobasic.png").default}
                                    alt={"logo-basic__photo"}
                                    className={"logo-basic__photo"}
                                />
                            </div>
                        </div>
                        <nav className="catalog__menu">
                            <Link to="/" className="catalog__menu-item">{"Главная страница > "}</Link>
                            <Link to="/" className="caralog__menu-item catalog__menu-item_active">{"Каталог продукции"}</Link>
                        </nav>
                        <section className="product-line">
                            <div className="product-line__container">
                                <div className="product-line-photo__container">
                                    <Image
                                        src={require("../images/line-logo.png").default}
                                        alt={"line-logo__foto"}
                                        className={"line-logo__photo"}
                                    />
                                    <Image
                                        src={require("../images/pattern.png").default}
                                        alt={"pattern__photo"}
                                        className={"pattern__photo"}
                                    />
                                </div>
                                <div className="product-line__small-description">
                                    <p>
                                        <span>Superior</span>
                                    Line
                                </p>
                                    <p>
                                        <span>25</span>
                                    продуктов в линейке
                                </p>
                                </div>
                                <div className="product-line__description">
                                    <p>Sports nutrition Red Star Labs corresponds to the high standards,
                                    but it's main distinctive feature s the astonishing power of products.</p>
                                </div>
                                <div className="product-line__spec-container">
                                    <div className="product-line__spec">
                                        <Image
                                            src={require("../images/ico-spec.png").default}
                                            alt={"icon-spec__photo"}
                                            className={"icon-spec__photo"}
                                        />
                                        <p className="spec__desc">При интенсивном стиле тренеровок</p>
                                    </div>
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
                                <div className="analytics__container">
                                    <ul>
                                        <li>Содержание действующих вешеств</li>
                                        <li>Витаминный комплекс</li>
                                        <li>Содержания углеводов</li>
                                        <li>Содержания углеводов</li>
                                    </ul>
                                </div>
                            </div>
                            <Image
                                src={require("../images/line-photo.png").default}
                                alt={"line-photo__photo"}
                                className={"line-photo__photo"}
                            />
                            <div className="product-line__button">
                                <p>Все характеристики</p>
                                <Image
                                    src={require("../images/arrow.png").default}
                                    alt={"arrow"}
                                    className={"arrow__photo"}
                                />
                            </div>
                        </section>
                    </section>
                    <section className="product-line__catalog">
                        <div className="product-line-categories__container">
                            <ul className="product-line__categories">
                                <li>
                                    <LinkUrl url={"/"} name={"Протеины"} className={"product-line__dropdown-content-title-link"} />
                                    <ul className="product-line__dropdown-content-list">
                                        <li><LinkUrl url={"/"} name={"Сывороточный"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Изолят"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Казеин"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Говяжий"} className={"product-line__dropdown-content-link"} /></li>
                                    </ul>
                                </li>
                                <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Аминокислоты и ВСАА"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Карнитин"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Батончики"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Предтренировочные комплексы"} className={"product-line__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Препараты для связок и суставов"} className={"product-line__dropdown-content-title-link"} /></li>
                            </ul>
                            <ul className="product-line__lines">
                                <LinkUrl url={"/"} name={"Линейки"} className={"product-line__dropdown-content-title-link"} />
                                <Image
                                    src={require("../images/basic-line.png").default}
                                    alt={"basic-line"}
                                    className={"basic-line__photo"}
                                />
                                <Image
                                    src={require("../images/ess-lin.png").default}
                                    alt={"ess-line"}
                                    className={"ess-line__photo"}
                                />
                                <Image
                                    src={require("../images/super-line.png").default}
                                    alt={"superior-line"}
                                    className={"superior__photo"}
                                />
                                <Image
                                    src={require("../images/beo-line.png").default}
                                    alt={"beo-line"}
                                    className={"beo-line__photo"}
                                />
                            </ul>
                            <ul className="product-line__targets">
                                <li>
                                    <LinkUrl url={"/"} name={"Цели"} className={"product-line__dropdown-content-title-link"} />
                                    <ul>
                                        <li><LinkUrl url={"/"} name={"Повышение выносливости"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Похудение и снижение веса"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Набор массы"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Здоровье и долголетие"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Здоровый сон и восстановление"} className={"product-line__dropdown-content-link"} /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="product-line__cards-container">
                            <div className="product-line__filters-container">
                                <p>Сортировать продукт</p>
                                <select className="product-line__select">
                                    <option className="product-line__option">По популярности</option>
                                    <option className="product-line__option">Продукт 1</option>
                                    <option className="product-line__option">Продукт 2</option>
                                    <option className="product-line__option">Продукт 3</option>
                                </select>
                                <p>Вкус</p>
                                <select className="product-line__select">
                                    <option className="product-line__option">Темный шоколад</option>
                                    <option className="product-line__option">Вкус 1</option>
                                    <option className="product-line__option">Вкус 2</option>
                                    <option className="product-line__option">Вкус 3</option>
                                </select>
                                <p>Цена</p>
                                <select className="product-line__select">
                                    <option className="product-line__option"></option>
                                    <option className="product-line__option"></option>
                                    <option className="product-line__option"></option>
                                    <option className="product-line__option">Продукт 3</option>
                                </select>
                            </div>
                            <div className="product-line__card">
                                <Image
                                    src={require("../images/product.png").default}
                                    alt={"product"}
                                    className={"product__photo"}
                                />
                                <p className="product-description">Протеин Meal Whey 800г.</p>
                                <p className="product-price">2400 руб</p>
                                <Image
                                    src={require("../images/RED-basket.png").default}
                                    alt={"red-basket"}
                                    className={"red-basket__photo"}
                                />
                            </div>
                        </div>
                        <div className="product-line__catalog-pagination">
                            <button className="button-pagination-left"></button>
                            <div className="number-page">1</div>
                            <div className="number-page">2</div>
                            <div className="number-page">3</div>
                        </div>
                    </section>
                    <section className="catalog__gallery">
                        <Image
                            src={require("../images/gallery-item1.png").default}
                            alt={"gallery-photo01"}
                            className={"gallery-item__photo"}
                        />
                        <Image
                            src={require("../images/gallery-item2.png").default}
                            alt={"gallery-photo02"}
                            className={"gallery-item__photo"}
                        />
                        <Image
                            src={require("../images/gallery-item3.png").default}
                            alt={"gallery-photo03"}
                            className={"gallery-item__photo"}
                        />
                    </section>
                    <section className="main">
                        <Footer />
                    </section>
                </section>
            </div>
        )
    }
}

export default Catalog;