import React, { Component } from "react";

class AnalyticsItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ul>
                {this.props.items.map((item, index) => {
                    return <li key={index} className="analytics-item" style={{width : item.value}}>{item.text}</li>
                })}
            </ul>
        )
    }
}

export default AnalyticsItem;