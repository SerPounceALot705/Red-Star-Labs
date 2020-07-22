import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Image from "../image/image.js";
import LineCard from "../dropDownMenu/js/LineCard.js";
import AnalyticsItem from "../analyticsItem/analyticsItem.js";

import "react-awesome-slider/dist/styles.css";
import "./css/product-card__container.css";
import "./css/product-card__card.css";
import "./css/product-card__description.css";
import "./css/product-card__description-slide.css";
import "./css/slide__photo.css";
import "../about-desctiption/css/main-button.css";
import "../about-desctiption/css/main-button-span.css";
import "../about-desctiption/css/main-button-logo-basic.css";
import "../about-desctiption/css/main-button-text.css";
import "../about-desctiption/css/main-button-text-container.css";
import "../about-desctiption/css/main-button-link.css";

class ProductCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            LineCards: [
                {
                    className: "product-card__card",
                    content:
                    {
                        link: {
                            text: "Для насыщения организма витаминами",
                            url: "About"
                        },
                        logo: {
                            url: require("../../images/logobasic.png"),
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/whey.png"),
                            alt: "whey"
                        }
                    },
                    options: {
                        lables: [
                            { value: "100%", text: "Содержание действующих вешеств" },
                            { value: "60%", text: "Витаминный комплекс" },
                            { value: "85%", text: "Содержания углеводов" },
                            { value: "22%", text: "Сахар" },
                        ],
                        images: [
                            { url: require("../../images/productslide.png"), text: "Сывороточный протеин (Impact Whey Protein)" },
                            { url: require("../../images/productslide.png"), text: "Сывороточный протеин (Impact Whey Protein)" },
                            { url: require("../../images/productslide.png"), text: "Сывороточный протеин (Impact Whey Protein)" },
                            { url: require("../../images/productslide.png"), text: "Сывороточный протеин (Impact Whey Protein)" },
                        ]
                    }
                },
                {
                    className: "product-card__card",
                    content: {

                        link: {
                            text: "Для насыщения организма витаминами",
                            url: "About"
                        },
                        logo: {
                            url: require("../../images/logoEssential.png"),
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/Essentialbank.png"),
                            alt: "whey"
                        }
                    },
                    options: {
                        lables: [
                            { value: "95%", text: "Содержание действующих вешеств" },
                            { value: "65%", text: "Витаминный комплекс" },
                            { value: "91%", text: "Содержания углеводов" },
                            { value: "40%", text: "Сахар" },
                        ],
                        images: [
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                        ]
                    }
                },
                {
                    className: "product-card__card",
                    content:
                    {
                        link: {
                            text: "Для насыщения организма витаминами",
                            url: "About"
                        },
                        logo: {
                            url: require("../../images/logoEssential.png"),
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/premiumwhey.png"),
                            alt: "whey"
                        }
                    },
                    options: {
                        lables: [
                            { value: "75%", text: "Содержание действующих вешеств" },
                            { value: "65%", text: "Витаминный комплекс" },
                            { value: "23%", text: "Содержания углеводов" },
                            { value: "10%", text: "Сахар" },
                        ],
                        images: [
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                            { url: require("../../images/premiumWhey2.png"), text: "test" },
                        ]
                    }
                },
                {
                    className: "product-card__card",
                    content: {

                        link: {
                            text: "Для насыщения организма витаминами",
                            url: "About"
                        },
                        logo: {
                            url: require("../../images/logoSuperior.png"),
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/beowulfbank.png"),
                            alt: "whey"
                        }
                    },
                    options: {
                        lables: [
                            { value: "70%", text: "Содержание действующих вешеств" },
                            { value: "90%", text: "Витаминный комплекс" },
                            { value: "45%", text: "Содержания углеводов" },
                            { value: "26%", text: "Сахар" },
                        ],
                        images: [
                            { url: require("../../images/productslide.png"), text: "test" },
                            { url: require("../../images/productslide.png"), text: "test2" },
                            { url: require("../../images/productslide.png"), text: "test3" },
                            { url: require("../../images/productslide.png"), text: "test5" },
                        ]
                    }
                }
            ],
            selectOptions: []
        }

        this.handlerSelectProduct = this.handlerSelectProduct.bind(this);
    }

    componentWillMount() {
        this.setState({
            selectOptions: this.state.LineCards[0].options
        })
    }

    handlerSelectProduct(e, options) {
        this.setState({
            selectOptions: options
        })
    }

    render() {
        const AutoplaySlider = withAutoplay(AwesomeSlider);

        return (
            <div>
                <div className="product-card__container">
                    {this.state.LineCards.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="product-card__container-card"
                                onClick={(e) => this.handlerSelectProduct(e, item.options)}
                            >
                                <LineCard
                                    className={item.className}
                                    content={
                                        {
                                            link: item.content.link,
                                            logo: item.content.logo,
                                            product: item.content.product
                                        }
                                    } />
                            </div>)
                    })}
                </div>
                <div className="product-card__description">
                    <div className="product-line__container">
                        <div className="product-line__small-description">
                            <p><span>Superior </span>Line</p>
                            <p><span>25 </span>продуктов в линейке</p>
                        </div>
                        <div className="product-line__description">
                            <p>Sports nutrition Red Star Labs corresponds to the high standards,
                                but it's main distinctive feature s the astonishing power of products.</p>
                        </div>
                        <div className="product-line__spec-main-container">
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">При интенсивном стиле тренеровок</p>
                            </div>
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec2.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">Повышенный витаминный комплекс</p>
                            </div>
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec3.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">Для достижения быстрых резуальтатов</p>
                            </div>
                        </div>
                        <div className="analytics__container">
                            <AnalyticsItem items={this.state.selectOptions.lables} />
                        </div>
                        <div className="main-button">
                            <div className="main-button-text-container">
                                <span className="main-button-text">Все продукты линейки</span>
                                <span className="main-button-span">Basic</span>
                            </div>
                            <Image
                                src={require("../../images/logo basic.png")}
                                alt={"logo-basic"}
                                className={"main-button-logo-basic"}
                            />
                        </div>
                    </div>
                    <div className="product-card__description-slide">
                        <AutoplaySlider
                            play={true}
                            interval={6000}
                        >
                            {this.state.selectOptions.images.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <Image
                                            src={item.url}
                                            alt={"slide"}
                                            className={"slide__photo"}
                                        />
                                        <p>{item.text}</p>
                                    </div>
                                )
                            })}

                        </AutoplaySlider>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;