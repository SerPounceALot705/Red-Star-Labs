import React, { Component } from "react";
import Image from "../image/image.js";
import LineCard from "../dropDownMenu/js/LineCard.js";

import "./css/product-card__container.css";
import "./css/product-card__card.css";
import "./css/product-card__description.css";

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
                            url: require("../../images/logobasic.png").default,
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/whey.png").default,
                            alt: "whey"
                        }
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
                            url: require("../../images/logoEssential.png").default,
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/Essentialbank.png").default,
                            alt: "whey"
                        }
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
                            url: require("../../images/logoEssential.png").default,
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/premiumwhey.png").default,
                            alt: "whey"
                        }
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
                            url: require("../../images/logoSuperior.png").default,
                            alt: "logobasic"
                        },
                        product: {
                            url: require("../../images/beowulfbank.png").default,
                            alt: "whey"
                        }
                    }

                }
            ]
        }
    }

    render() {
        return (
            <div>
                <div className="product-card__container">
                    {this.state.LineCards.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="product-card__container-card"
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
                    <div className="product-card__props">
                        <div className="product-card__props">
                            <p><span>Basic</span>line</p>
                            <p><span>25</span>продуктов в ленейки</p>
                        </div>
                        <p>
                            Sports nutrition Red Star Labs corresponds to the high standards,
                            but it's main distinctive feature s the astonishing power of products.
                        </p>
                    </div>
                    <div className="product-card__description-slide">
                        <Image
                            src={require("../../images/productslide.png").default}
                            alt={"productslide"}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductCard;