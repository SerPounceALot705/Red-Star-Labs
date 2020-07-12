import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
            <div>
                <span>{this.state.sum}</span>
                <button onClick={() => this.handlerMinusSum()}>-</button>
                <input type="number" value={this.state.count} onChange={this.handlerChangeSum} />
                <button onClick={() => this.handlerPlusSum()}>+</button>
            </div>
        )
    }
}

export default Calculator;