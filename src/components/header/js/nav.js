import React, { Component } from "react";
import LinkUrl from "./linkUrl.js"

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
                        
                        if (link.isDrop) {
                            // тут бахнуть return
                            //console.log(link.name);

                        } else {
                            return <li key={index}>
                                <LinkUrl
                                    url={link.url}
                                    name={link.name}
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
