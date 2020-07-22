import React, { Component } from "react";
import Image from "../../image/image.js";

import "../css/header__dropdown-content-card.css"
import "../css/header__dropdown-content-text.css";
import "../css/header__dropdown-content-card-brand.css";

class LineCard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="header__dropdown-content-card-brand">
                    <Image
                        src={this.props.content.logo.url}
                        alt={this.props.content.logo.alt}
                        height={22}
                    />

                    <a href={this.props.content.link.url} className={"header__dropdown-content-text"}>{this.props.content.link.text}</a>
                </div>
                <div className="header__dropdown-content-card-image">
                    <Image
                        src={this.props.content.product.url}
                        alt={this.props.content.product.alt}
                        width={90}
                    />
                </div>
            </div>
        );
    }
}

export default LineCard;