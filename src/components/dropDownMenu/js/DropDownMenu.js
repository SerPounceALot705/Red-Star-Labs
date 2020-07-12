import React, { Component } from "react";
import LinkUrl from "../../../components/header/js/linkUrl.js";
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
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header__dropdown-menu">
                <span className="link">{this.props.linkName}</span>
                <div className="header__dropdown-content">
                    <div className="header__dropdown-content-categories">
                        <h2 className="header__dropdown-content-title">Категории</h2>
                        <ul>
                            <li>
                                <LinkUrl url={"/"} name={"Протеины"} className={"header__dropdown-content-title-link"} />
                                <ul className="header__dropdown-content-list">
                                    <LinkUrl url={"/"} name={"Сывороточный"} className={"header__dropdown-content-link"} />
                                    <LinkUrl url={"/"} name={"Изолят"} className={"header__dropdown-content-link"} />
                                    <LinkUrl url={"/"} name={"Казеин"} className={"header__dropdown-content-link"} />
                                    <LinkUrl url={"/"} name={"Говяжий"} className={"header__dropdown-content-link"} />
                                </ul>
                            </li>
                            <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Аминокислоты и ВСАА"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Карнитин"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Батончики"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Предтренировочные комплексы"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Препараты для связок и суставов"} className={"header__dropdown-content-title-link"} /></li>
                        </ul>
                        <LinkUrl url={"/Catalog"} name={"Весь каталог"} className={"header__dropdown-content-catalog-link"} />
                    </div>
                    <div className="header__dropdown-content-product">
                        <h2 className="header__dropdown-content-title">Продукты по ценам</h2>
                        <div className="header__dropdown-ul">
                            <ul>
                                <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Аминокислоты и ВСАА"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Карнитин"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Батончики"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Предтренировочные комплексы"} className={"header__dropdown-content-title-link"} /></li>
                                <li><LinkUrl url={"/"} name={"Препараты для связок и суставов"} className={"header__dropdown-content-title-link"} /></li>
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
                                            url: "Card"
                                        },
                                        logo: {
                                            url: require("../../../images/logobasic.png").default,
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/whey.png").default,
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
                                            url: require("../../../images/logoEssential.png").default,
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/Essentialbank.png").default,
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
                                            url: require("../../../images/logoEssential.png").default,
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/premiumwhey.png").default,
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
                                            url: require("../../../images/logoSuperior.png").default,
                                            alt: "logobasic"
                                        },
                                        product: {
                                            url: require("../../../images/beowulfbank.png").default,
                                            alt: "whey"
                                        }
                                    }
                                } />
                        </div>
                    </div>
                    <div className="header__dropdown-image">
                        <Image
                            src={require("../../../images/promo.png").default}
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