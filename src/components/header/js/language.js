import React, { Component } from "react";
import Image from "../../image/image.js";

import "../css/header__language-container.css";
import "../css/lang__usa.css";

class Language extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="header__language-container">
                <p>eng</p>
                <Image
                    src={require("../../../images/usa.png").default}
                    alt={"USA"}
                    className={"lang__usa"}
                />
            </div>
        )
    }
}

export default Language;

