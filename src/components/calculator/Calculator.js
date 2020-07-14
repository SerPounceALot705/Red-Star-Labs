import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./calc__container.css";
import "./calc__input.css";
import "./calc__button.css";
import "./../card/css/card__product-price.css";

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: this.props.price,
            count: 1
        }

        this.handlerMinusSum = this.handlerMinusSum.bind(this);
        this.handlerPlusSum = this.handlerPlusSum.bind(this);
        this.handlerChangeSum = this.handlerChangeSum.bind(this);
    }

    handlerPlusSum() {
        this.setState({
            count: this.state.count + 1,
            sum: this.state.sum + this.props.price
        })
    }

    handlerMinusSum() {
        if (this.state.count > 1) {
            this.setState({
                count: this.state.count - 1,
                sum: this.state.sum - this.props.price
            })
        }
    }

    handlerChangeSum(e) {
        const value = e.target.value;

        if (value > 1 && value != "") {
            this.setState({
                count: e.target.value,
                sum: value * this.props.price 
            })   
        } else {
            this.setState({
                count: 1,
                sum: this.props.price
            })
        }
    }

    render() {
        return (
            <div className="calc__container">
                <span className="card__product-price">{this.state.sum}&#8381;</span>
                <button className="calc__button" onClick={() => this.handlerMinusSum()}>-</button>
                <input  className="calc__input" type="number" value={this.state.count} onChange={this.handlerChangeSum}  />
                <button className="calc__button" onClick={() => this.handlerPlusSum()}>+</button>
            </div>
        )
    }
}

export default Calculator;