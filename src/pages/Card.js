import React, { Component } from "react";
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";

class Card extends Component {

    render() {
        return(
            <div className="main">
                <Header/>
                <Footer/>
            </div>
        )
    }
}

export default Card