import React, { Component } from "react";
import Image from "../image/image.js"
import AnalyticsItem from "../analyticsItem/analyticsItem.js";

class LineContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLineContainer: true
        }

        this.Container = this.applayContainer.bind(this);
        this.handlerLine = this.handlerLine.bind(this);
    }

    handlerLine() {
        this.setState({
            isLineContainer: !this.state.isLineContainer
        })
    }

    applayContainer() {

        console.log(this.props.value)

        return (
            <div className="catalog__line-product">
                <Image
                    src={require("../../images/line-photo.png")}
                    alt={"line-photo__photo"}
                    className={"line-photo__photo"}
                />
                <section className="product-line">
                    <div className="product-line__container">
                        <div className="product-line__adaptive-image-container">
                            <Image
                                src={require("../../images/gallery-item2.png")}
                                alt={"adaptive-image01"}
                                className={"product-line__adaptive-image"}
                            />
                            <Image
                                src={require("../../images/super-line.png")}
                                alt={"adaptive-image-logo"}
                                className={"product-line__adaptive-image-logo"}
                            />
                        </div>
                        <div className="product-line-photo__container">
                            <Image
                                src={this.props.value.url}
                                alt={"line-logo__foto"}
                                className={"line-logo__photo"}
                            />
                            <Image
                                src={require("../../images/pattern.png")}
                                alt={"pattern__photo"}
                                className={"pattern__photo"}
                            />
                        </div>
                        <div className="product-line__small-description">
                            <p><span>Superior </span>Line</p>
                            <p><span>25 </span>продуктов в линейке</p>
                        </div>
                        <div className="product-line__description">
                            <p>Sports nutrition Red Star Labs corresponds to the high standards,
                        but it's main distinctive feature s the astonishing power of products.</p>
                        </div>
                        <div className="product-line__spec-main-container">
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">При интенсивном стиле тренеровок</p>
                            </div>
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec2.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">Повышенный витаминный комплекс</p>
                            </div>
                            <div className="product-line__spec">
                                <Image
                                    src={require("../../images/ico-spec3.png")}
                                    alt={"icon-spec__photo"}
                                    className={"icon-spec__photo"}
                                />
                                <p className="spec__desc">Для достижения быстрых резуальтатов</p>
                            </div>
                        </div>
                        <div className="analytics__container">
                            <AnalyticsItem
                                items={this.props.value.items}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.state.isLineContainer ? this.applayContainer() : null}
                <div className="product-line__button"
                    onClick={() => this.handlerLine()}>
                    <p>Все характеристики</p>

                    {
                        this.state.isLineContainer ?
                            <Image
                                src={require("../../images/arrowUp.png")}
                                alt={"arrow"}
                                className={"arrow__photo"}
                            /> :
                            <Image
                                src={require("../../images/arrow.png")}
                                alt={"arrow"}
                                className={"arrow__photo"}
                            />
                    }

                </div>
            </div>
        );
    }
}

export default LineContainer;