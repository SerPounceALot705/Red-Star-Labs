import React, { Component } from "react";
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
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
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