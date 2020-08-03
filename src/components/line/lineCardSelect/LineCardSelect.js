import React, { Component } from "react";
import Image from "../../image/image.js";

import "../../dropDownMenu/css/imports.css";

class LineCardSelect extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <div className="header__dropdown-content-scroll">
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
            </div>
        );
    }
}

export default LineCardSelect;