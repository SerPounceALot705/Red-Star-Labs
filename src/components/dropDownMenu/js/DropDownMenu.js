import React, { Component } from "react";
import { Link } from 'react-router-dom'

import LineCard from "./LineCard.js";
import Image from "../../image/image.js";

import "../css/imports.css";

class DropDownMenu extends Component {
    render() {
        return (
            <div className="header__dropdown-menu">
                <span className="link">{this.props.linkName}</span>
                <div className="header__dropdown-content">
                    <div className="header__dropdown-content-box">
                        <div className="header__dropdown-content-categories">
                            <h2 className="header__dropdown-content-title">Категории</h2>
                            <ul>
                                <li>
                                    <Link to={"/"} className={"header__dropdown-content-title-link"}>Протеины</Link>
                                    <ul className="header__dropdown-content-list">
                                        <Link to={"/"} className={"header__dropdown-content-link"}>Сывороточный</Link>
                                        <Link to={"/"} className={"header__dropdown-content-link"}>Изолят</Link>
                                        <Link to={"/"} className={"header__dropdown-content-link"}>Казеин</Link>
                                        <Link to={"/"} className={"header__dropdown-content-link"}>Говяжий</Link>
                                    </ul>
                                </li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Карнитин</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Батончики</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</Link></li>
                                <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</Link></li>
                            </ul>
                            <Link to={"catalog"} className={"header__dropdown-content-catalog-link"}>Весь каталог</Link>
                        </div>
                        <div className="header__dropdown-content-product">
                            <h2 className="header__dropdown-content-title">Продукты по ценам</h2>
                            <div className="header__dropdown-ul">
                                <ul>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Витамины и минералы</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Аминокислоты и ВСАА</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Карнитин</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Специальные препараты</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Батончики</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Предтренировочные комплексы</Link></li>
                                    <li><Link to={"/"} className={"header__dropdown-content-title-link"}>Препараты для связок и суставов</Link></li>
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
                                                url: "/LineBasic"
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
                                                url: "/LineBasic"
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
                                                url: "/LineBasic"
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
                                                url: "/LineBasic"
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
                                width={860}
                                height={132}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownMenu;