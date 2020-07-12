import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../components/header/header.js";
import Footer from "../components/footer/js/footer.js";
import Image from "../components/image/image.js";
import Calculator from "../components/calculator/Calculator.js";

import "../components/card.css";

class Card extends Component {

    render() {
        return (
            <div className="main">
                <Header />
                <div className="card">
                    <nav className="contacts__menu">
                        <Link to="/" className="contacts__menu-item">{"Главная страница > "}</Link>
                        <Link to="/catalog" className="contacts__menu-item">{"Протеины > "}</Link>
                        <Link to="/" className="contacts__menu-item contacts__menu-item_active">{"premium whey concentrate"}</Link>
                    </nav>
                    <div>
                        <div>
                            <Image
                                src={require("../images/logoSuperior.png").default}
                                alt={"logoSuperior"}
                            />
                            <h2>PREMIUM WHEY CONCENTRATE</h2>
                            <p>Изолят сывороточного белка</p>
                            <div>
                                <h2></h2>
                            </div>
                            <label>Вкус:</label>
                            <select>
                                <option>апельсин, манго и маракуя</option>
                            </select>
                            <div>
                                <Calculator price={1000}/>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={require("../images/premiumWhey2.png").default}
                                alt={"logoSuperior"}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h2>Изолят сывороточного белка</h2>
                            <p>Это не просто еще один вид протеинового коктейля.
                            Из высококачественного изолята сывороточного протеина
                            мы сделали продукт для приготовления легкого,
                            освежающего коктейля. По вкусу он больше напоминает сок.
                            </p>
                            <p>
                                В линейке представлено 5 великолепных фруктовых
                                вкусов, среди которых горький лимон, апельсин с манго,
                                персиковый чай, мохито и фруктовая карамель.
                            </p>
                            <h2>Для каких целей</h2>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Card