import React, { Component } from "react";
import Image from "../image/image.js";
import LineCard from "../dropDownMenu/js/LineCard.js";

import "./css/product-card__container.css";
import "./css/product-card__card.css";

class ProductCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="product-card__container"> 
                <div className="product-card__container-card">
                    <LineCard 
                        className={"product-card__card"}
                        content={
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
                    } />
                </div>
                <div className="product-card__container-card">
                    <LineCard
                        className={"product-card__card"}
                        content={
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
                                url: require("../../images/Essentialbank.png").default,
                                alt: "whey"
                            }
                        }
                    } />
                </div>
                <div className="product-card__container-card">
                    <LineCard 
                        className={"product-card__card"}
                        content={
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
                    } />
                </div>
                <div className="product-card__container-card">
                    <LineCard 
                        className={"product-card__card"}
                        content={
                        {
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
                    } />
                </div>
            </div>
        )
    }
}

export default ProductCard;