import React, { Component } from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';

import Image from "../image/image.js";

import Header from "./header/header.js";
import ContactForm from "./contact-form/js/contact-form.js";
import Footer from "./footer/js/footer.js";
import ProductCard from "../productCard/ProductCard.js";


import "../main.css";
import "../page.css";
import "../../vendor/fonts.css";
import "../slider/slider.css"
import "./about-desctiption/css/imports.css";

class Home extends Component {
    render() {
        const AutoplaySlider = withAutoplay(AwesomeSlider);

        return (
            <div>
                <section>
                    <div className="main">
                        <Header isDark={true} />
                        <AutoplaySlider
                            play={true}
                            interval={9000}
                        >
                            <div>
                                <Image
                                    src={require("../../images/slider.png")}
                                    alt={"slider__foto"}
                                    className={"slider__foto"}
                                />
                            </div>
                            <div>
                                <Image
                                    src={require("../../images/slider.png")}
                                    alt={"slider__foto"}
                                    className={"slider__foto"}
                                />
                            </div>
                            <div>
                                <Image
                                    src={require("../../images/slider.png")}
                                    alt={"slider__foto"}
                                    className={"slider__foto"}
                                />
                            </div>
                        </AutoplaySlider>
                    </div>
                    <div className="about-description">
                        <div className="about-description__top-container">
                            <Image
                                src={require("../../images/logo.png")}
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
                        <ProductCard />
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