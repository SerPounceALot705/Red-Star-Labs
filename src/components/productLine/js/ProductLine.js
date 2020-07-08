import React, { Component } from "react";
import Image from "../image/image.js";


class ProductLine extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="product-line">
                <Image
                    src={require("../../images/logo.png").default}
                    alt={"logo"}
                    className={"product-line__logo"}
                />
                <p className="product-line__text">Sports nutrition Red Star Labs corresponds to the high standards,
                but it's main distinctive feature s the astonishing power of products. Only the most contemporary
                and effective formulas  developed with the help of recent scientific achievements are used for
                production of sports supplements of this brand.</p>
                <div className="product-line__container">
                    <div className="product-line__item">
                        <Image
                            src={require("../../../images/Basic.png").default}
                            alt={"product-line-item"}
                            className={"product-line__item"}
                        />
                    </div>
                    <div className="product-line__item">
                        <Image
                            src={require("../../../images/Essential.png").default}
                            alt={"product-line-item"}
                            className={"product-line__item"}
                        />
                    </div>
                    <div className="product-line__item">
                        <Image
                            src={require("../../../images/Superior.png").default}
                            alt={"product-line-item"}
                            className={"product-line__item"}
                        />
                    </div>
                    <div className="product-line__item">
                        <Image
                            src={require("../../../images/Beowulf.png").default}
                            alt={"product-line-item"}
                            className={"product-line__item"}
                        />
                    </div>
                </div>
                <div className="product-line__descpription-container">
                    <div className="prosuct-line__description">
                        
                    </div>
                </div>
            </section>
        )
    }
}    