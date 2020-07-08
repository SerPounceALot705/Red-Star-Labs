import React, { Component } from "react";
import Image from "../image/image.js";


class DropDownMenu extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <section className="dropdown-menu">
                <div className="dropdown-menu__categories">
                    <div className="dropdown-menu__categorie">
                        <a href="#"></a>
                        <a></a>
                        <a></a>
                        <a></a>
                    </div>
                    <a className="dropdown-menu__all-catalog"></a>
                </div>
                <div></div>
                <div></div>
            </section>
        )
    }
}