import React, { Component } from "react";
import Image from "../../../image/image.js";

import "./css/imports.css";

class Language extends Component {
    render() {
        return (
            <div className="header__language-container">
                <p>eng</p>
                <Image
                    src={require("../../../../images/usa.png")}
                    alt={"USA"}
                    className={"lang__usa"}
                />
            </div>
        )
    }
}

export default Language;

