import React, { Component } from "react";
import LinkUrl from "./linkUrl.js";
import DropDownMenu from "../../dropDownMenu/js/DropDownMenu.js";

import "../css/nav.css";
import "../css/header__nav-items.css";

class Nav extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <nav className={this.props.className}>
                <ul className="header__nav-items">
                    {this.props.links.map((link, index) => {

                        if (link.isDrop == true) {
                            return <li key={index}>
                               <DropDownMenu linkName={link.name}/>
                            </li>
                        } else {
                            return <li key={index}>
                                <LinkUrl
                                    url={link.url}
                                    name={link.name}
                                    className={"link"}
                                />
                            </li>
                        }
                    })}
                </ul>
            </nav>
        );
    }
}

export default Nav;
