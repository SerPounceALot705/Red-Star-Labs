import React, { Component } from "react";
import Image from "../../image/image.js";
import { Link } from 'react-router-dom'

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
                basic: require("../../../images/basic-line.png"),
                ess: require("../../../images/ess-lin.png"),
                super: require("../../../images/super-line.png"),
                beo: require("../../../images/beo-line.png")
            }
        }
    }

    handlerTop(value) {

        const defaultBrand = {
            basic: require("../../../images/basic-line.png"),
            ess: require("../../../images/ess-lin.png"),
            super: require("../../../images/super-line.png"),
            beo: require("../../../images/beo-line.png")
        }

        switch (value.brand) {
            case "basic": defaultBrand.basic = require("../../../images/logobasic.png"); break;
            case "ess": defaultBrand.ess = require("../../../images/logoEssential.png"); break;
            case "super": defaultBrand.super = require("../../../images/super-line.png"); break;
            case "beo": defaultBrand.beo = require("../../../images/logoBeo.png"); break;
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
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Протеины</Link></li>
                    <li>
                        <ul>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Сывороточный</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Изолят</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Казеин</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Говяжий</Link></li>
                        </ul>
                    </li>
                </ul>);
        }

        function Targets() {
            return (
                <ul className="product-line__targets">
                    <li>
                        <ul className="product-line__targets-list">
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Повышение выносливости</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Похудение и снижение веса</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Набор массы</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Здоровье и долголетие</Link></li>
                            <li><Link to={"/"} className={"product-line__dropdown-content-link"}>Здоровый сон и восстановление</Link></li>
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
                            src={require("../../../images/productArrowUp.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../../images/productArrow.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        />
                    }
                </div>
                {this.state.isProductList ? <ProteinList /> : null}

                <ul className="product-line__categories">
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Витамины и минералы</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Аминокислоты и ВСАА</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Карнитин</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Специальные препараты</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Батончики</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Предтренировочные комплексы</Link></li>
                    <li><Link to={"/"} className={"product-line__dropdown-content-title-link"}>Препараты для связок и суставов</Link></li>
                </ul>

                {this.props.isLineBlock ?
                    <div className="product-line__drop" onClick={() => this.handlerIsLine()}>
                        <h2 className={"product-line__dropdown-title-link"}>Линейки</h2>
                       
                        {this.state.isLine ? <Image
                            src={require("../../../images/productArrowUp.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                            <Image
                                src={require("../../../images/productArrow.png")}
                                alt="arow"
                                width={7}
                                height={7}
                            />}
                    </div> : null}

                {this.state.isLine && this.props.isLineBlock ?
                    (<ul className="product-line__lines">
                        <li>
                            <ul>
                                <li><Link to="/LineBasic" className="basic-line"></Link></li>
                                <li><Link to="/LineEss" className="ess-line"></Link></li>
                                <li><Link to="/LineSuperior" className="superior-line"></Link></li>
                                <li><Link to="/LineBeo" className="beo-line"></Link></li>
                            </ul>
                        </li>
                    </ul>) : null
                }

                <div className="product-line__drop" onClick={() => this.handlerIsTarget()}>
                    <h2 className={"product-line__dropdown-title-link"}>Цели</h2>
                    {this.state.isTarget ?
                        <Image
                            src={require("../../../images/productArrowUp.png")}
                            alt="arow"
                            width={7}
                            height={7}
                        /> :
                        <Image
                            src={require("../../../images/productArrow.png")}
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