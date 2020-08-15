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

        console.log(this.state.pageYOffset);
    }

    render() {
        return (
            <div className="card__pagination-container">
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 0 && this.state.pageYOffset < 799 ?
                        <a href="#card" className="number number_actived">01</a> :
                        <a href="#card" className="number">01</a>
                    }

                    <p className="pagination-description">карточка</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 800 && this.state.pageYOffset < 1559 ?
                        <a href="#stats" className="number number_actived">02</a> :
                        <a href="#stats" className="number">02</a>
                    }

                    <p className="pagination-description">характеристики</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 1600 && this.state.pageYOffset < 2290 ?
                        <a href="#rewiew" className="number number_actived">03</a> :
                        <a href="#rewiew" className="number">03</a>
                    }

                    <p className="pagination-description">отзывы</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 2300 && this.state.pageYOffset < 2699 ?
                        <a href="#video" className="number number_actived">04</a> :
                        <a href="#video" className="number">04</a>
                    }

                    <p className="pagination-description">видео</p>
                </div>
                <div className="pagination-container__card">

                    {this.state.pageYOffset >= 2700 ?
                        <a href="#photo" className="number number_actived">05</a> :
                        <a href="#photo" className="number">05</a>
                    }

                    <p className="pagination-description">фото</p>
                </div>
            </div>
        )
    }
}

export default ScrolNumber;