import React, { Component } from "react";
import Image from "../../image/image.js";
import { FiPhone } from "react-icons/fi";
import { FiClock } from "react-icons/fi";

import "./css/imports.css";

class BuyShopCard extends Component {
    
    render() {
        return (
            <div className="where-i-can-buy__shop">
                <div>
                    <Image
                        src={require("../../../images/shop-item.png")}
                        alt={"shop-item-foto"}
                        className={"shop-item-foto"}
                    />
                </div>
                <div className="where-i-can-buy__first-container">
                    <span className="where-i-can-buy__name-of-shop">5lb</span>
                    <p className="where-i-can-buy__shop-description">
                        Интернет-магазин спортивного питания
                    </p>
                </div>
                <div className="where-i-can-buy__second-container">
                    <div className="where-i-can-buy__adress-container">
                        <FiPhone />
                        <div className="where-i-can-buy__adress">
                            <span className="where-i-can-buy__town">{this.props.shop.city}</span>
                            <p className="where-i-can-buy__phone-number">{this.props.shop.phone1}</p>
                            <p className="where-i-can-buy__phone-number">{this.props.shop.phone2}</p>
                        </div>
                    </div>
                    <div className="where-i-can-buy__adress-container">
                        <FiClock />
                        <div className="where-i-can-buy__adress">
                            <p className="where-i-can-buy__subtitle">{this.props.shop.workDay}</p>
                        </div>
                    </div>
                </div>
                <div className="where-i-can-buy__third-container">

                    <div className="where-i-can-buy__mode-of-operation">
                        <span className="where-i-can-buy__town"> Регионы:</span>
                        <p className="where-i-can-buy__time"> {this.props.shop.regionPhone} </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BuyShopCard;