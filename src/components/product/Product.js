import React, { Component } from "react";
import Image from "../image/image.js"

import "./product-line__card-info.css";
import "./product-line__card-item.css";

class Product extends Component {
    render() {
        return (
            <div className="product-line__card">
                <div className="product-line__card-info">
                    <Image
                        src={require("../../images/logobasic.png")}
                        alt={"card-logobasic"}
                        className={"card-logobasic__photo"}
                    />
                    <p className="card-text">Содержит 60% жира, идеален для кето-диеты</p>
                    <Image />
                </div>
                <div className="product-line__card-item">
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
            </div>
        );
    }
}

export default Product;