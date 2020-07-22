import React, { Component } from "react";
import Image from "../../components/image/image.js";
import AnalyticsItem from "../../components/analyticsItem/analyticsItem.js";

class DetaieldDescription extends Component {
    constructor(props) {
        super(props)

        this.table = this.table.bind(this);
    }

    table() {
        return (
            <table className="card__table-border">
                <tbody>
                    {this.props.table.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="card__table-text">{item.text}</td>
                                <td className="card__table-text">
                                    {item.value}<span className="card__table-sub"> {item.span}</span>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>)
    }

    render() {
        return (
            <section className="card__detailed-description">
                <div className="card__detailed-desc-first-container">
                    <h2 className="card__detailed-title"> Clear Whey Isolate</h2>
                    <p className="card__detailed-text">Это не просто еще один вид протеинового коктейля.
                    Из высококачественного изолята сывороточного протеина
                    мы сделали продукт для приготовления легкого,
                    освежающего коктейля. По вкусу он больше напоминает сок.
                    </p>
                    <p className="card__detailed-text">
                        В линейке представлено 5 великолепных фруктовых
                        вкусов, среди которых горький лимон, апельсин с манго,
                        персиковый чай, мохито и фруктовая карамель.
                    </p>
                    <h2 className="card__detailed-title-first">Для каких целей</h2>

                    <div className="product-line__spec-main-container">
                        <div className="product-line__spec">
                            <Image
                                src={require("../../images/ico-spec.png")}
                                alt={"icon-spec__photo"}
                                className={"icon-spec__photo"}
                            />
                            <p className="spec__desc">При интенсивном стиле тренеровок</p>
                        </div>
                        <div className="product-line__spec">
                            <Image
                                src={require("../../images/ico-spec2.png")}
                                alt={"icon-spec__photo"}
                                className={"icon-spec__photo"}
                            />
                            <p className="spec__desc">Повышенный витаминный комплекс</p>
                        </div>
                        <div className="product-line__spec">
                            <Image
                                src={require("../../images/ico-spec3.png")}
                                alt={"icon-spec__photo"}
                                className={"icon-spec__photo"}
                            />
                            <p className="spec__desc">Для достижения быстрых резуальтатов</p>
                        </div>
                    </div>
                </div>
                <div className="card__detailed-desc-second-container">
                    <h2 className="card__detailed-title-sec">
                        Ключевые преимущества
                            </h2>
                    <p className="card__detailed-text-sec">20 г протеина;</p>
                    <p className="card__detailed-text-sec">легкий и освежающий;</p>
                    <p className="card__detailed-text-sec">без молочного вкуса и текстуры;</p>
                    <p className="card__detailed-text-sec">4 г BCAA и 3 г глютамина;</p>
                    <p className="card__detailed-text-sec">мало сахара;</p>
                    <p className="card__detailed-text-sec">фруктовые вкусы.</p>
                    <div className="card__analytics">
                        <AnalyticsItem
                            items={[
                                { value: "85%", text: "Cодержание действующих веществ" },
                                { value: "65%", text: "Витаминный комплекс" },
                                { value: "70%", text: "Содержания углеводов" },
                                { value: "20%", text: "Сахар" }
                            ]}
                        />
                    </div>
                </div>
                <div className="card__detailed-desc-third-container">
                    <h2 className="card__detailed-title">Состав</h2>
                    {this.table()}
                </div>
            </section>
        )
    }
}

export default DetaieldDescription