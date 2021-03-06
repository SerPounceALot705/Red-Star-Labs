import React, { Component } from "react";
import DropDownMenu from "../../../dropDownMenu/js/DropDownMenu.js";
import { Link } from 'react-router-dom'

import "./css/imports.css";
import "./link/link.css";

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
                                <Link to={`/${link.url}`} className={"link"}>{link.name}</Link>
                            </li>
                        }
                    })}
                </ul>
            </nav>
        );
    }
}

export default Nav;
