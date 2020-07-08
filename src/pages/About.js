import React, { Component } from "react";
import Header from "../components/header/header.js";
import Basket from "../components/header/js/basket.js";
import ContactForm from "../components/contact-form/js/contact-form.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";

class About extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Header isDark={false}/>
                <Basket />
                <section>
                    <ContactForm />
                </section>
                <footer className="main">
                    <Footer />
                </footer>
            </div>
        )
    }
}

export default About;