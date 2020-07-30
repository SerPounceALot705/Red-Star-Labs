import React, { Component } from "react";
import Image from "../image/image.js"

import "./product-line__card-info.css";
import "./product-line__card-item.css";
import "./product__photo.css";
import "./card-logobasic__photo.css";
import "./card-text.css";
import "./product-button.css";

class Product extends Component {
    render() {
        return (
            <div className="product-line__card">
                <div className="product-line__card-item">
                    <div className="product-line__card-info">
                        <Image
                            src={require("../../images/logobasic.png")}
                            alt={"card-logobasic"}
                            className={"card-logobasic__photo"}
                        />
                        <p className="card-text">Содержит 60% жира, идеален для кето-диеты</p>
                        <Image />
                    </div>
                    <Image
                        src={this.props.product.src}
                        alt={this.props.product.alt}
                        className={"product__photo"}
                    />
                </div>
                <div>
                    <a href={this.props.product.url} className="product-description">{this.props.product.text}</a>
                    <div className="product__container">
                        <p className="product-price">{this.props.product.price}</p>
                        <div className="product-button">Купить &#43; </div>
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