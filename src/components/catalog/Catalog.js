import React, { Component } from "react";
import { Link } from 'react-router-dom'
import InputRange from 'react-input-range';

import Header from "../home/header/header.js";
import Footer from "../home/footer/js/footer.js";
import Image from "../image/image.js";
import LineContainer from "../line/lineContainer/LineContainer.js";
import Product from "../line/product/Product.js";
import LineCategories from "../line/lineCategories/LineCategories.js";

import "./css/imports.css";

class Catalog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: window.innerWidth,
            isDrop: false,
            range: {
                value: { min: 1500, max: 2500 },
                min: 0,
                max: 5000
            },
            selectBrand: {},
            products: [
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
                {
                    src: require("../../images/product.png"),
                    alt: "product",
                    text: "Протеин Meal Whey 800г.",
                    price: "2400 руб",
                    url: "/Card"
                },
            ],
        };

        this.handleResize = this.handleResize.bind(this);
        this.updateData = this.updateData.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize, false);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleResize, false);
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    handlerDrop() {
        this.setState({
            isDrop: !this.state.isDrop
        })
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

    updateData(brand, isOpen) {
        this.setState({
            selectBrand: brand,
            isLineContainer: isOpen
        })
    }

    render() {
        function PhotoContainer() {
            return (<div className="catalog__photo-container">
                <Image
                    src={require("../../images/banner.png")}
                    alt={"banner__photo"}
                    className={"banner__photo"}
                />
                <div className="banner-photo__container-info">
                    <p className="banner-photo__text"><span>50%</span> на все товары линейки</p>
                    <Image
                        src={require("../../images/logobasic.png")}
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

                    {
                        this.state.innerWidth > 768 ? null :
                            <div className="catalog-adaptive-drop">
                                <div className="drop-container" onClick={() => this.handlerDrop()}>
                                    <h2 className={"product-line__dropdown-title-link"}>Категории и линейки</h2>
                                    {this.state.isDrop ?
                                        <Image
                                            src={require("../../images/productArrowUp.png")}
                                            alt="arow"
                                            width={7}
                                            height={7}
                                        /> :
                                        <Image
                                            src={require("../../images/productArrow.png")}
                                            alt="arow"
                                            width={7}
                                            height={7}
                                        />
                                    }
                                </div>
                                <div>
                                    {this.state.isDrop ? <LineCategories isLineBlock={true} /> : null}
                                </div>
                            </div>
                    }

                    <nav className="catalog__menu">
                        <Link to="/" className="catalog__menu-item">Главная страница &gt; </Link>
                        <Link to="/" className="caralog__menu-item catalog__menu-item_active">Каталог продукции</Link>
                    </nav>

                    {this.state.isLineContainer ? <LineContainer value={this.state.selectBrand} /> : <PhotoContainer />}

                    <section className="product-line__catalog">
                        {this.state.innerWidth < 768 ? null : <LineCategories isLineBlock={true} />}

                        <div className="product-line__catalog-cards-container">
                            <div className="product-line__filters-container">
                                <div className="product-line__filter-item">
                                    <p>Сортировать продукт</p>
                                    <select className="product-line__select">
                                        <option className="product-line__option">По популярности</option>
                                        <option className="product-line__option">Продукт 1</option>
                                        <option className="product-line__option">Продукт 2</option>
                                        <option className="product-line__option">Продукт 3</option>
                                    </select>
                                </div>
                                <div className="product-line__filter-item product-line__filter_price">
                                    <select className="product-line__select ">
                                        <option className="product-line__option">По цене</option>
                                        <option className="product-line__option">Опция 1</option>
                                        <option className="product-line__option">Опция 2</option>
                                        <option className="product-line__option">Опция 3</option>
                                    </select>
                                </div>
                                <div className="product-line__filter-item">
                                    <p>Вкус</p>
                                    <select className="product-line__select">
                                        <option className="product-line__option">Темный шоколад</option>
                                        <option className="product-line__option">Вкус 1</option>
                                        <option className="product-line__option">Вкус 2</option>
                                        <option className="product-line__option">Вкус 3</option>
                                    </select>
                                </div>
                                <div className="product-line__filter-item">
                                    <p>Цена</p>
                                    <InputRange
                                        draggableTrack
                                        maxValue={this.state.range.max}
                                        minValue={this.state.range.min}
                                        value={this.state.range.value}
                                        onChange={value => this.habdlerRange(value)}
                                        onChangeComplete={value => console.log(value)} />
                                </div>
                            </div>
                            <div className="product-line__cards">
                                {this.state.products.map((item, index) => {
                                    return <Product key={index} product={item} />
                                })}
                            </div>
                            <div className="product-line__catalog-pagination">
                                <div className="button-pagination-left"></div>
                                <div className="number-page number-page_selected">1</div>
                                <div className="number-page">2</div>
                                <div className="number-page">3</div>
                                <div className="button-pagination-right"></div>
                            </div>
                        </div>
                    </section>

                    <section className="catalog__gallery">
                        <Image
                            src={require("../../images/gallery-item1.png")}
                            alt={"gallery-photo01"}
                            className={"gallery-item__photo"}
                        />
                        <Image
                            src={require("../../images/gallery-item2.png")}
                            alt={"gallery-photo02"}
                            className={"gallery-item__photo"}
                        />
                        <Image
                            src={require("../../images/gallery-item3.png")}
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