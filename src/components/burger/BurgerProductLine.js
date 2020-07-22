import React, { Component } from "react";
import Burger from "./Burger";
import LineCard from "../dropDownMenu/js/LineCard.js";

class BurgerProductLine extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header__dropdown-content-product">
                <h2 className="header__dropdown-content-title">Линейки</h2>
                <div className="header__dropdown-content-product-card">
                    <LineCard
                        className={"header__dropdown-content-card"}
                        content={
                            {
                                link: {
                                    text: "Для насыщения организма витаминами",
                                    url: "Card"
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
                    <LineCard
                        className={"header__dropdown-content-card"}
                        content={
                            {
                                link: {
                                    text: "Для насыщения организма витаминами",
                                    url: "Card"
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
                <div className="header__dropdown-content-product-card">
                    <LineCard
                        className={"header__dropdown-content-card"}
                        content={
                            {
                                link: {
                                    text: "Для насыщения организма витаминами",
                                    url: "Card"
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
                    <LineCard
                        className={"header__dropdown-content-card header__dropdown-content-card_burger"}
                        content={
                            {
                                link: {
                                    text: "Для насыщения организма витаминами",
                                    url: "Card"
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
        );
    }
}

export default BurgerProductLine;