import React, { Component } from "react";
import Image from "../../components/image/image.js";
import LinkUrl from "../../components/header/js/linkUrl.js";
import { render } from "react-dom";

class LineCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLineContainer: false,
            isPhotoContainer: true,
            isProductList: true,
            isLine: true,
            isTarget: true,
            selectBrand: {},
            brandButton: {
                basic: require("../../images/basic-line.png").default,
                ess: require("../../images/ess-lin.png").default,
                super: require("../../images/super-line.png").default,
                beo: require("../../images/beo-line.png").default
            }
        }
    }

    handlerTop(value) {

        const defaultBrand = {
            basic: require("../../images/basic-line.png").default,
            ess: require("../../images/ess-lin.png").default,
            super: require("../../images/super-line.png").default,
            beo: require("../../images/beo-line.png").default
        }

        switch (value.brand) {
            case "basic": defaultBrand.basic = require("../../images/logobasic.png").default; break;
            case "ess": defaultBrand.ess = require("../../images/logoEssential.png").default; break;
            case "super": defaultBrand.super = require("../../images/super-line.png").default; break;
            case "beo": defaultBrand.beo = require("../../images/logoBeo.png").default; break;
        }

        this.setState({
            isLineContainer: true,
            isPhotoContainer: false,
            selectBrand: value,
            brandButton: defaultBrand
        })
    }

    handlerIsProductList() {
        this.setState({
            isProductList: !this.state.isProductList
        })
    }

    handlerIsLine() {
        this.setState({
            isLine: !this.state.isLine
        })
    }

    handlerIsTarget() {
        this.setState({
            isTarget: !this.state.isTarget
        })
    }

    render() {

        function ProteinList() {
            return (
                <ul className="product-line__categories">
                    <li><LinkUrl url={"/"} name={"Протеины"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li>
                        <ul>
                            <li><LinkUrl url={"/"} name={"Сывороточный"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Изолят"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Казеин"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Говяжий"} className={"product-line__dropdown-content-link"} /></li>
                        </ul>
                    </li>
                </ul>);
        }

        function Targets() {
            return (
                <ul className="product-line__targets">
                    <li>
                        <ul className="product-line__targets-list">
                            <li><LinkUrl url={"/"} name={"Повышение выносливости"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Похудение и снижение веса"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Набор массы"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Здоровье и долголетие"} className={"product-line__dropdown-content-link"} /></li>
                            <li><LinkUrl url={"/"} name={"Здоровый сон и восстановление"} className={"product-line__dropdown-content-link"} /></li>
                        </ul>
                    </li>
                </ul>);
        }

        return (
            <div className="product-line-categories__container">
                <div className="product-line__drop" onClick={() => this.handlerIsProductList()}>
                    <h2 className={"product-line__dropdown-title-link"}> Категории </h2>
                    {this.state.isProductList ?
                        <Image
                            src={require("../../images/productArrowUp.png").default}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../images/productArrow.png").default}
                            alt="arow"
                            width={7}
                            height={7}
                        />
                    }
                </div>
                {this.state.isProductList ? <ProteinList /> : null}

                <ul className="product-line__categories">
                    <li><LinkUrl url={"/"} name={"Витамины и минералы"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Аминокислоты и ВСАА"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Карнитин"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Специальные препараты"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Батончики"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Предтренировочные комплексы"} className={"product-line__dropdown-content-title-link"} /></li>
                    <li><LinkUrl url={"/"} name={"Препараты для связок и суставов"} className={"product-line__dropdown-content-title-link"} /></li>
                </ul>

                <div className="product-line__drop" onClick={() => this.handlerIsLine()}>
                    <h2 className={"product-line__dropdown-title-link"}>Линейки</h2>
                    {this.state.isLine ? <Image
                        src={require("../../images/productArrowUp.png").default}
                        alt="arow"
                        width={7}
                        height={7}
                    /> :
                        <Image
                            src={require("../../images/productArrow.png").default}
                            alt="arow"
                            width={7}
                            height={7}
                        />}
                </div>
                {this.state.isLine ?
                    (<ul className="product-line__lines">
                        <li>
                            <ul>
                                <li>
                                    <div onClick={() => {

                                        const brand = {
                                            items: [
                                                { value: "95%", text: "Cодержание действующих веществ" },
                                                { value: "65%", text: "Витаминный комплекс" },
                                                { value: "70%", text: "Содержания углеводов" },
                                                { value: "20%", text: "Сахар" }
                                            ],
                                            url: require("../../images/line-logo.png").default,
                                            brand: "basic"
                                        }

                                        this.handlerTop(brand)
                                        this.props.updateData(brand, true)
                                    }}>
                                        <Image
                                            src={this.state.brandButton.basic}
                                            alt={"basic-line"}
                                            className={"line__photo"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div onClick={() => {

                                        const brand = {
                                            items: [
                                                { value: "80%", text: "Cодержание действующих веществ" },
                                                { value: "40%", text: "Витаминный комплекс" },
                                                { value: "70%", text: "Содержания углеводов" },
                                                { value: "25%", text: "Сахар" }
                                            ],
                                            url: require("../../images/line-logo.png").default,
                                            brand: "ess"
                                        }

                                        this.handlerTop(brand)
                                        this.props.updateData(brand, true)
                                    }}>
                                        <Image
                                            src={this.state.brandButton.ess}
                                            alt={"ess-line"}
                                            className={"line__photo"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div onClick={() => {

                                        const brand = {
                                            items: [
                                                { value: "85%", text: "Cодержание действующих веществ" },
                                                { value: "65%", text: "Витаминный комплекс" },
                                                { value: "50%", text: "Содержания углеводов" },
                                                { value: "15%", text: "Сахар" }
                                            ],
                                            url: require("../../images/line-logo.png").default,
                                            brand: "super"
                                        }

                                        this.handlerTop(brand)
                                        this.props.updateData(brand, true)
                                    }}>
                                        <Image
                                            src={this.state.brandButton.super}
                                            alt={"superior-line"}
                                            className={"line__photo"}
                                        />
                                    </div>
                                </li>
                                <li>
                                    <div onClick={() => {

                                        const brand = {
                                            items: [
                                                { value: "65%", text: "Cодержание действующих веществ" },
                                                { value: "70%", text: "Витаминный комплекс" },
                                                { value: "60%", text: "Содержания углеводов" },
                                                { value: "40%", text: "Сахар" }
                                            ],
                                            url: require("../../images/line-logo.png").default,
                                            brand: "beo"
                                        }
                                        
                                        this.handlerTop(brand)
                                        this.props.updateData(brand, true)                             
                                    }}>
                                        <Image
                                            src={this.state.brandButton.beo}
                                            alt={"beo-line"}
                                            className={"line__photo"}
                                        />
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>) : null
                }

                <div className="product-line__drop" onClick={() => this.handlerIsTarget()}>
                    <h2 className={"product-line__dropdown-title-link"}>Цели</h2>
                    {this.state.isTarget ?
                        <Image
                            src={require("../../images/productArrowUp.png").default}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../images/productArrow.png").default}
                            alt="arow"
                            width={7}
                            height={7}
                        />
                    }
                </div>
                {this.state.isTarget ? <Targets /> : null}

            </div >);
    }
}

export default LineCategories;