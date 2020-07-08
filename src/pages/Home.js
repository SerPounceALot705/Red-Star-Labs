import React, { Component } from "react";
import Header from "../components/header/header.js";
import Basket from "../components/header/js/basket.js";
import ContactForm from "../components/contact-form/js/contact-form.js";
import Footer from "../components/footer/js/footer.js";
import AwesomeSlider from 'react-awesome-slider';
import Image from "../components/image/image.js";

import "react-awesome-slider/dist/styles.css";
import "../components/main.css";
import "../components/page.css";
import "../components/header/css/basket.css";
import "../vendor/fonts.css";
import "../components/slider/slider.css"

class Home extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <section className="main">
                    <Header isDark={true}/>
                    
                    <AwesomeSlider>
                        <div>
                            <Image
                                src={require("../images/slider.png").default}
                                alt={"slider__foto"}
                                className={"slider__foto"}
                               
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../images/slider.png").default}
                                alt={"slider__foto"}
                                className={"slider__foto"}
                              
                            />
                        </div>
                        <div>
                            <Image
                                src={require("../images/slider.png").default}
                                alt={"slider__foto"}
                                className={"slider__foto"}
                            />
                        </div>
                    </AwesomeSlider>
                
                    <ContactForm />
                <footer className="main">
                    <Footer />
                </footer>
                </section>
            </div>
        )
    }
}

export default Home;