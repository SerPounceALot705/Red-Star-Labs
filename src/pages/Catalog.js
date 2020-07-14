import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InputRange from 'react-input-range';
import Header from "../components/header/header";
import Footer from "../components/footer/js/footer";
import Image from "../components/image/image.js";
import LinkUrl from "../components/header/js/linkUrl.js";
import LineContainer from "../components/lineContainer/LineContainer.js";
import Product from "../components/product/Product.js";

import "../components/catalog/css/imports.css";

class Catalog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            range: {
                value: {min: 1500, max: 2500},
                min: 0,
                max: 5000
            },
            isLineContainer: false,
            isPhotoContainer: true,
            selectBrand: {},
            brandButton: {
                basic: require("../images/basic-line.png").default,
                ess: require("../images/ess-lin.png").default,
                super: require("../images/super-line.png").default,
                beo: require("../images/beo-line.png").default
            },
            products: [
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../images/product.png").default,
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
            ]
        };

        this.handlerTop = this.handlerTop.bind(this);
        this.habdlerRange = this.habdlerRange.bind(this);
    }

    habdlerRange(value) {
        const defaultValue = {
            value: value,
            min: this.state.range.min,
            max: this.state.range.max,
        }

        this.setState({
            range: defaultValue
        })
    }

    handlerTop(e, value) {

        const defaultBrand = {
            basic: require("../images/basic-line.png").default,
            ess: require("../images/ess-lin.png").default,
            super: require("../images/super-line.png").default,
            beo: require("../images/beo-line.png").default
        }

        switch (value.brand) {
            case "basic": defaultBrand.basic = require("../images/logobasic.png").default; break;
            case "ess": defaultBrand.ess = require("../images/logoEssential.png").default; break;
            case "super": defaultBrand.super = require("../images/super-line.png").default; break;
            case "beo": defaultBrand.beo = require("../images/logoBeo.png").default; break;
        }

        this.setState({
            isLineContainer: true,
            isPhotoContainer: false,
            selectBrand: value,
            brandButton: defaultBrand
        })
    }

    render() {

        function PhotoContainer() {
            return (<div className="catalog__photo-container">
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
            </div>);
        };

        return (
            <div className="catalog-main">
                <Header />
                <section className="catalog">
                    <nav className="catalog__menu">
                        <Link to="/" className="catalog__menu-item">{"Главная страница > "}</Link>
                        <Link to="/" className="caralog__menu-item catalog__menu-item_active">{"Каталог продукции"}</Link>
                    </nav>
                    {this.state.isLineContainer ? <LineContainer value={this.state.selectBrand} /> : <PhotoContainer />}

                    <section className="product-line__catalog">
                        <div className="product-line-categories__container">
                            <ul className="product-line__categories">
                                <li> <LinkUrl url={"/"} name={"Категории"} className={"product-line__dropdown-title-link"} />
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
                                <LinkUrl url={"/"} name={"Линейки"} className={"product-line__dropdown-title-link"} />
                                <div onClick={(e) => this.handlerTop(e,
                                    {
                                        items: [
                                            { value: "95%", text: "Cодержание действующих веществ" },
                                            { value: "65%", text: "Витаминный комплекс" },
                                            { value: "70%", text: "Содержания углеводов" },
                                            { value: "20%", text: "Сахар" }
                                        ],
                                        url: require("../images/line-logo.png").default,
                                        brand: "basic"
                                    }
                                )}>
                                    <Image
                                        src={this.state.brandButton.basic}
                                        alt={"basic-line"}
                                        className={"line__photo"}
                                    />
                                </div>
                                <div onClick={(e) => this.handlerTop(e,
                                    {
                                        items: [
                                            { value: "80%", text: "Cодержание действующих веществ" },
                                            { value: "40%", text: "Витаминный комплекс" },
                                            { value: "70%", text: "Содержания углеводов" },
                                            { value: "25%", text: "Сахар" }
                                        ],
                                        url: require("../images/line-logo.png").default,
                                        brand: "ess"
                                    }
                                )}>
                                    <Image
                                        src={this.state.brandButton.ess}
                                        alt={"ess-line"}
                                        className={"line__photo"}
                                    />
                                </div>
                                <div onClick={(e) => this.handlerTop(e,
                                    {
                                        items: [
                                            { value: "85%", text: "Cодержание действующих веществ" },
                                            { value: "65%", text: "Витаминный комплекс" },
                                            { value: "50%", text: "Содержания углеводов" },
                                            { value: "15%", text: "Сахар" }
                                        ],
                                        url: require("../images/line-logo.png").default,
                                        brand: "super"
                                    }
                                )}>
                                    <Image
                                        src={this.state.brandButton.super}
                                        alt={"superior-line"}
                                        className={"line__photo"}
                                    />
                                </div>
                                <div onClick={(e) => this.handlerTop(e,
                                    {
                                        items: [
                                            { value: "65%", text: "Cодержание действующих веществ" },
                                            { value: "70%", text: "Витаминный комплекс" },
                                            { value: "60%", text: "Содержания углеводов" },
                                            { value: "40%", text: "Сахар" }
                                        ],
                                        url: require("../images/line-logo.png").default,
                                        brand: "beo"
                                    }
                                )}>
                                    <Image
                                        src={this.state.brandButton.beo}
                                        alt={"beo-line"}
                                        className={"line__photo"}
                                    />
                                </div>
                            </ul>
                            <ul className="product-line__targets">
                                <li>
                                    <LinkUrl url={"/"} name={"Цели"} className={"product-line__dropdown-title-link"} />
                                    <ul className="product-line__targets-list">
                                        <li><LinkUrl url={"/"} name={"Повышение выносливости"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Похудение и снижение веса"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Набор массы"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Здоровье и долголетие"} className={"product-line__dropdown-content-link"} /></li>
                                        <li><LinkUrl url={"/"} name={"Здоровый сон и восстановление"} className={"product-line__dropdown-content-link"} /></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="product-line__catalog-cards-container">
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

                                <InputRange
                                    draggableTrack
                                    maxValue={this.state.range.max}
                                    minValue={this.state.range.min}
                                    value={this.state.range.value}
                                    onChange={value => this.habdlerRange(value)}
                                    onChangeComplete={value => console.log(value)} />
                            </div>
                            <div className="product-line__cards">
                                {this.state.products.map((item, index) => {
                                    return <Product key={index} product={item} />
                                })}
                            </div>
                            <div className="product-line__catalog-pagination">
                                <button className="button-pagination-left"></button>
                                <div className="number-page">1</div>
                                <div className="number-page">2</div>
                                <div className="number-page">3</div>
                                <button className="button-pagination-right"></button>
                            </div>
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