import React, { Component } from "react";
import DropDownMenu from "../../dropDownMenu/js/DropDownMenu.js";

import "../css/nav.css";
import "../css/header__nav-items.css";
import "../css/link.css";

class Nav extends Component {

    render() {
        return (
            <nav className={this.props.className}>
                <ul className="header__nav-items">
                    {this.props.links.map((link, index) => {

                        if (link.isDrop === true) {
                            return <li key={index}>
                               <DropDownMenu linkName={link.name}/>
                            </li>
                        } else {
                            return <li key={index}>
                                <a href={`/${link.url}`} className={"link"}>{link.name}</a>
                            </li>
                        }
                    })}
                </ul>
            </nav>
        );
    }
}

export default Nav;
