import React, { Component } from "react";
import Image from "../../../../image/image.js";

import "../css/imports.css";

class Basket extends Component {
    constructor(props) {
        super(props)
        this.basketUrl = require("../../../../../images/basket.png");
        this.isDark = this.props.isDark;
    }

    componentWillMount() {
        if (this.isDark === false) {
            this.basketUrl = require("../../../../../images/white-basket.png");
            
        }    
    }

    render() {
        return (
            <div className="basket">
                <Image
                    src={this.basketUrl}
                    alt={"Basket"}
                    className={"header__basket"}                   
                />
                 <div className="basket-active">
                </div>
            </div>
        )
    }
}

export default Basket;