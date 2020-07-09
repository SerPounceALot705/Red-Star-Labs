import React, { Component } from "react";
import LinkUrl from "../../../components/header/js/linkUrl.js";

import "../css/header__dropdown-menu.css";
import "../css/header__dropdown-content.css";
import "../css/header__dropdown-content-title.css";
import "../css/header__dropdown-content-link.css";
import "../css/header__dropdown-content-title-link.css";
import "../css/header__dropdown-content-list.css";
import "../css/header__dropdown-content-categories.css";
import "../css/header__dropdown-content-product.css";
import "../css/header__dropdown-content-catalog-link.css";

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
                            <li><LinkUrl url={"/"} name={"Аминакислоты и ВСАА"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Батончики"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Предтренировачные комплексы"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Препараты для связок и сустовов"} className={"header__dropdown-content-title-link"} /></li>
                        </ul>
                        <LinkUrl url={"/"} name={"Весь каталог"} className={"header__dropdown-content-catalog-link"}/>
                    </div>
                    <div className="header__dropdown-content-product">
                        <h2 className="header__dropdown-content-title">Продукты по ценам</h2>
                        <ul>
                            <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Аминакислоты и ВСАА"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Специаьные препараты"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Батончики"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Предтренировачные комплексы"} className={"header__dropdown-content-title-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Препараты для связок и сустовов"} className={"header__dropdown-content-title-link"} /></li>
                        </ul>
                    </div>
                    <div className="header__dropdown-content-product">
                        <h2 className="header__dropdown-content-title">Линейки</h2>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DropDownMenu;