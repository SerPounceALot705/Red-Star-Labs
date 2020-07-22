import React, { Component } from "react";
import Image from "../image/image.js"

class Product extends Component {
    render() {
        return (
            <div className="product-line__card">
                <Image
                    src={this.props.product.src}
                    alt={this.props.product.alt}
                    className={"product__photo"}
                />
                <a href={this.props.product.url} className="product-description">{this.props.product.text}</a>
                <div className="product__container">
                    <p className="product-price">{this.props.product.price}</p>
                    <Image
                        src={require("../../images/RED-basket.png")}
                        alt={"red-basket"}
                        className={"red-basket__photo"}
                    />
                </div>
            </div>
        );
    }
}

export default Product;