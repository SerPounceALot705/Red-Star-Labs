import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Image from "../image/image.js"

class Product extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="product-line__card">
                <Image
                    src={this.props.product.src}
                    alt={this.props.product.alt}
                    className={"product__photo"}
                />
                <Link to={this.props.product.url} className="product-description">{this.props.product.text}</Link>
                <div className="product__container">
                    <p className="product-price">{this.props.product.price}</p>
                    <Image
                        src={require("../../images/RED-basket.png").default}
                        alt={"red-basket"}
                        className={"red-basket__photo"}
                    />
                </div>
            </div>
        );
    }
}

export default Product;