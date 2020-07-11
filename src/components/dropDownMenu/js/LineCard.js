import React, { Component } from "react";
import Image from "../../image/image.js";
import LinkUrl from "../../header/js/linkUrl.js";

import "../css/header__dropdown-content-card.css"
import "../css/header__dropdown-content-text.css";
import "../css/header__dropdown-content-card-brand.css";

class LineCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={this.props.className}>
                <div className="header__dropdown-content-card-brand">
                    <Image
                        src={this.props.content.logo.url}
                        alt={this.props.content.logo.alt}
                        height={22}
                    />
                    <LinkUrl 
                        url={this.props.content.link.url}
                        className={"header__dropdown-content-text"} 
                        name={this.props.content.link.text}/>
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