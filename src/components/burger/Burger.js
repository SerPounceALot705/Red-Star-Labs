import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import "./css/burger.css";

class Burger extends Component {
    constructor(props) {
        super(props)

        this.state = {
            innerWidth: window.innerWidth
        }

        window.addEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        this.setState({
            innerWidth: window.innerWidth
        })
    }

    burgerMenu() {
        return (
            <Menu right>
                <div>
                    <ul>
                        <li>123123</li>
                    </ul>
                </div>
                <Link className="menu-item" to="/">Home</Link>
                <Link className="menu-item" to="/about">About</Link>
                <Link className="menu-item" to="/contact">Contact</Link>
            </Menu>)
    }

    render() {
        return (
            <div>
                {this.state.innerWidth > 768 ? null : this.burgerMenu()}
            </div>
        );
    }
}

export default Burger;