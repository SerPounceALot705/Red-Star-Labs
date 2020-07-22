import React, { Component } from "react";
import LineCard from "../dropDownMenu/js/LineCard.js";

class BurgerProductLine extends Component {
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
                                    url: require("../../images/logobasic.png"),
                                    alt: "logobasic"
                                },
                                product: {
                                    url: require("../../images/whey.png"),
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
                                    url: require("../../images/logoEssential.png"),
                                    alt: "logobasic"
                                },
                                product: {
                                    url: require("../../images/Essentialbank.png"),
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
                                    url: require("../../images/logoEssential.png"),
                                    alt: "logobasic"
                                },
                                product: {
                                    url: require("../../images/premiumwhey.png"),
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
                                    url: require("../../images/logoSuperior.png"),
                                    alt: "logobasic"
                                },
                                product: {
                                    url: require("../../images/beowulfbank.png"),
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