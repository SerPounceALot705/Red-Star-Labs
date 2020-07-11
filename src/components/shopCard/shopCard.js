import React, { Component } from "react";
import Image from "../image/image.js";

import "../../components/where-i-can-buy/css/shop-link.css";
import "../../components/where-i-can-buy/css/where-i-can-buy__grid-item.css";

class ShopCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="where-i-can-buy__grid-item">
                <Image
                    src={this.props.image.url}
                    alt={this.props.image.alt}
                    className={this.props.image.className}
                />
                <a className="shop-link" href={this.props.link.url}>{this.props.link.text}</a>
            </div>
        ); 
    }
}

export default ShopCard;