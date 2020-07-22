import React, { Component } from "react";
import Image from "../../components/image/image.js";

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
                basic: require("../../images/basic-line.png"),
                ess: require("../../images/ess-lin.png"),
                super: require("../../images/super-line.png"),
                beo: require("../../images/beo-line.png")
            }
        }
    }

    handlerTop(value) {

        const defaultBrand = {
            basic: require("../../images/basic-line.png"),
            ess: require("../../images/ess-lin.png"),
            super: require("../../images/super-line.png"),
            beo: require("../../images/beo-line.png")
        }

        switch (value.brand) {
            case "basic": defaultBrand.basic = require("../../images/logobasic.png"); break;
            case "ess": defaultBrand.ess = require("../../images/logoEssential.png"); break;
            case "super": defaultBrand.super = require("../../images/super-line.png"); break;
            case "beo": defaultBrand.beo = require("../../images/logoBeo.png"); break;
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
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Протеины</a></li>
                    <li>
                        <ul>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Сывороточный</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Изолят</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Казеин</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Говяжий</a></li>
                        </ul>
                    </li>
                </ul>);
        }

        function Targets() {
            return (
                <ul className="product-line__targets">
                    <li>
                        <ul className="product-line__targets-list">
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Повышение выносливости</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Похудение и снижение веса</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Набор массы</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Здоровье и долголетие</a></li>
                            <li><a href={"/"} className={"product-line__dropdown-content-link"}>Здоровый сон и восстановление</a></li>
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
                            src={require("../../images/productArrowUp.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../images/productArrow.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        />
                    }
                </div>
                {this.state.isProductList ? <ProteinList /> : null}

                <ul className="product-line__categories">
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Витамины и минералы</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Аминокислоты и ВСАА</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Карнитин</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Специальные препараты</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Батончики</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Предтренировочные комплексы</a></li>
                    <li><a href={"/"} className={"product-line__dropdown-content-title-link"}>Препараты для связок и суставов</a></li>
                </ul>

                <div className="product-line__drop" onClick={() => this.handlerIsLine()}>
                    <h2 className={"product-line__dropdown-title-link"}>Линейки</h2>
                    {this.state.isLine ? <Image
                        src={require("../../images/productArrowUp.png")}
                        alt="arow"
                        width={7}
                        height={7}
                    /> :
                        <Image
                            src={require("../../images/productArrow.png")}
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
                                            href: require("../../images/line-logo.png"),
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
                                            href: require("../../images/line-logo.png"),
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
                                            href: require("../../images/line-logo.png"),
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
                                            href: require("../../images/line-logo.png"),
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
                            src={require("../../images/productArrowUp.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../images/productArrow.png")}
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