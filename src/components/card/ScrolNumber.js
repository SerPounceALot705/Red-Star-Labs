import React, { Component } from "react";

class ScrolNumber extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pageYOffset: window.pageYOffset
        }

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll, false);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll, false);
    }

    handleScroll() {
        this.setState({
            pageYOffset: window.pageYOffset
        })
    }

    render() {
        return (
            <div className="card__pagination-container">
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 0 && this.state.pageYOffset < 800 ?
                        <a className="number number_actived">01</a> :
                        <a className="number">01</a>
                    }

                    <p className="pagination-description">карточка</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 800 && this.state.pageYOffset < 1500 ?
                        <a className="number number_actived">02</a> :
                        <a className="number">02</a>
                    }

                    <p className="pagination-description">характеристики</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 1600 && this.state.pageYOffset < 2290 ?
                        <a className="number number_actived">03</a> :
                        <a className="number">03</a>
                    }

                    <p className="pagination-description">отзывы</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 2291 && this.state.pageYOffset < 2900 ?
                        <a className="number number_actived">04</a> :
                        <a className="number">04</a>
                    }

                    <p className="pagination-description">видео</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 3000 ?
                        <a className="number number_actived">05</a> :
                        <a className="number">05</a>
                    }

                    <p className="pagination-description">фото</p>
                </div>
            </div>
        )
    }
}

export default ScrolNumber;