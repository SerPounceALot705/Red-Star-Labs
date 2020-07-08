import React, { Component } from "react";
import Image from "../../image/image.js";

import "../css/basket.css";
import "../css/header__basket.css";

class Basket extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="basket">
                <Image
                    src={require("../../../images/basket.png").default}
                    alt={"Basket"}
                    className={"header__basket"}                   
                />
            </div>
        )
    }
}

export default Basket;