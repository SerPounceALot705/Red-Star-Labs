import React, { Component } from "react";
import Header from "../components/header/header.js";
import Basket from "../components/header/js/basket.js";
import ContactForm from "../components/contact-form/js/contact-form.js";
import Footer from "../components/footer/js/footer.js";
import AwesomeSlider from 'react-awesome-slider';
import Image from "../components/image/image.js";
import ProductCard from "../components/productCard/ProductCard.js";

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
                <section>
                    <div className="main">
                        <Header isDark={true} />
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
                    </div>
                    <div className="about-description">
                        <div className="about-description__top-container">
                            <Image
                                src={require("../images/logo.png").default}
                                alt={"mainlogo"}
                                className={"red-star-labs__home"}
                            />
                            <p className="home-brand-text">
                                Sports nutrition Red Star Labs corresponds to the high standards, but it's main distinctive
                                feature s the astonishing power of products.
                                Only the most contemporary and effective formulas  developed with the help of recent
                                scientific achievements are used for production of sports supplements of this brand.
                            </p>
                        </div>
                        <ProductCard/>
                    </div>
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