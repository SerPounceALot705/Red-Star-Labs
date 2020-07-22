import React, { Component } from "react";
import LineCard from "../../dropDownMenu/js/LineCard.js";
import Image from "../../image/image.js";

import "../css/header__dropdown-menu.css";
import "../css/header__dropdown-content.css";
import "../css/header__dropdown-content-title.css";
import "../css/header__dropdown-content-link.css";
import "../css/header__dropdown-content-title-link.css";
import "../css/header__dropdown-content-list.css";
import "../css/header__dropdown-content-categories.css";
import "../css/header__dropdown-content-product.css";
import "../css/header__dropdown-content-catalog-link.css";
import "../css/header__dropdown-content-product-card.css";
import "../css/header__dropdown-image.css";

class DropDownMenu extends Component {
    render() {
        return (
            <div className="header__dropdown-menu">
                <span className="link">{this.props.linkName}</span>
                <div className="header__dropdown-content">
                    <div className="header__dropdown-content-categories">
                        <h2 className="header__dropdown-content-title">Категории</h2>
                        <ul>
                            <li>
                                <a href={"/"} className={"header__dropdown-content-title-link"}>Протеины</a>
                                <ul className="header__dropdown-content-list">
                                    <a href={"/"} className={"header__dropdown-content-link"}>Сывороточный</a>
                                    <a href={"/"} className={"header__dropdown-content-link"}>Изолят</a>
                                    <a href={"/"} className={"header__dropdown-content-link"}>Казеин</a>
                                    <a href={"/"} className={"header__dropdown-content-link"}>Говяжий</a>
                                </ul>
                            </li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Карнитин</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Батончики</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</a></li>
                            <li><a href={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</a></li>
                        </ul>
                        <a href={"catalog"} className={"header__dropdown-content-catalog-link"}>Весь каталог</a>
                    </div>
                    <div className="header__dropdown-content-product">
                        <h2 className="header__dropdown-content-title">Продукты по ценам</h2>
                        <div className="header__dropdown-ul">
                            <ul>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Карнитин</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Батончики</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</a></li>
                                <li><a href={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="header__dropdown-content-product">
                        <h2 className="header__dropdown-content-title">Линейки</h2>
                        <div className="header__dropdown-content-product-card">
                            <LineCard
                                className={"header__dropdown-content-card"}
                                content={
                                    {
                                        link: {
                                            text: "Для насыщения организма витаминами",
                                            url: "/Card"
                                        },
                                        logo: {
                                            url: require("../../../images/logobasic.png"),
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/whey.png"),
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
                                            url: "/Card"
                                        },
                                        logo: {
                                            url: require("../../../images/logoEssential.png"),
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/Essentialbank.png"),
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
                                            url: "/Card"
                                        },
                                        logo: {
                                            url: require("../../../images/logoEssential.png"),
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/premiumwhey.png"),
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
                                            url: "/Card"
                                        },
                                        logo: {
                                            url: require("../../../images/logoSuperior.png"),
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/beowulfbank.png"),
                                            alt: "whey"
                                        }
                                    }
                                } />
                        </div>
                    </div>
                    <div className="header__dropdown-image">
                        <Image
                            src={require("../../../images/promo.png")}
                            alt={"promo"}
                            width={900}
                            height={132}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownMenu;