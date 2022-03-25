import React, {useContext} from 'react';
import './css/GoodPage.css'
import {Context} from "../index";
import Counter from "../component/Counter";
import {observer} from "mobx-react-lite";

const GoodPage = observer(() => {

    const {good} = useContext(Context)
    const category = good.selectedCategory
    const type = good.selectedType
    const name = good.selectedGood.name
    console.log(good.selectedGood)

    return (
        <div>
            <div className="item-wrapper">
                <div className="container">
                    <div className="item">
                        <div className="page__path item__path">
                            Главная > Каталог > {category} > {name}
                        </div>
                        <div className="item__opening">
                            <div className="item__opening-img">
                                <img src="https://via.placeholder.com/540x500" alt=""/>
                            </div>

                            <div className="item__opening__info">
                                <div className="item-name page__section-title">{name}</div>
                                <div className="item-type">{type}</div>
                                <p className="item__opening-desc">
                                    Тёплое и уютное настроение подарит вам мыло, выполненное вручную из натуральных
                                    компонентов.
                                    Аромат апельсина, смешанный с благоуханием корицы и чуточку какао — что может быть
                                    приятнее
                                    прохладным вечером, когда так хочется расслабиться после бесконечного и хлопотного
                                    дня?
                                </p>
                                <div className="item-amount_and_sum">
                                    <div className="good-price item-price">₴400.00</div>
                                    <Counter props={{id:good.selectedGood.id, inCart: false}}/>
                                </div>
                                <div className="item-btns">
                                    <button
                                        className="btn"
                                        onClick={()=> {
                                            good.addToCart(good.selectedGood)
                                        }}>
                                        Добавить в корзину
                                    </button>
                                    <button className="item-save">
                                        <i className="far fa-heart"> </i>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className="item__desc">
                            <div className="page__section-title">Описание</div>
                            <p className="item__desc-part">Сыворотка стимулирует выработку коллагена, уменьшая
                                тонкие линии и морщины, делая кожу лица более яркой и молодой!</p>
                            <p className="item__desc-part">
                        <span className="semi-bold">
                            Способ применения:
                        </span>
                                наносить средство перед сном на очищенную кожу лица и шеи. Несколько капель нанести
                                круговыми движениями, и после вбирание нанести крем.
                                В случае использование перед выходом на улицу наносить средства с SPF защиту.
                            </p>
                            <p className="item__desc-part">
                        <span className="semi-bold">
                            Противопоказания:
                        </span>
                                индивидуальная непереносимость компонентов средства, чрезмерная сухость кожи.
                            </p>
                            <p className="item__desc-part">
                        <span className="semi-bold">
                            Условия хранения:
                        </span>
                                при температуре от + 5 ° С до + 25 ° С, держа подальше вид прямых солнечных лучей.
                            </p>
                            <p className="item__desc-part">
                        <span className="semi-bold">
                            Срок годности:
                        </span>
                                9 месяцев от даты производства, 6 месяцев с момента открытия
                            </p>
                            <p className="item__desc-part">
                        <span className="semi-bold">
                            Состав (INCI):
                        </span>
                                diazonidated water, MethylSulphonylMethane, Aloe barbadensis leaf juice, Ascorbic acid
                                (vitamin c),
                                Tocopherol, Simmondsia Chinensis (Jojoba) Seed Oil, NaOH, Hyaluronic acid, Equisetum
                                arvense
                                (horsetail) extract, Geranium pratense extract, Amorphophallus konjac, Gluconolactone,
                                Sodium Benzoate, Perfume.
                            </p>
                        </div>
                        <div className="item__components">
                            <div className="item__components-title page__section-title  ">Компоненты</div>
                            <div className="item__components__list">
                                <div className="item__component">
                                    <div className="component-img">
                                        <img src="https://via.placeholder.com/178" alt=""/>
                                    </div>
                                    <div className="component-name semi-bold">Экстракт алоэ</div>
                                </div>
                                <div className="item__component">
                                    <div className="component-img">
                                        <img src="https://via.placeholder.com/178" alt=""/>
                                    </div>
                                    <div className="component-name semi-bold">Экстракт зверобоя</div>
                                </div>
                                <div className="item__component">
                                    <div className="component-img">
                                        <img src="https://via.placeholder.com/178" alt=""/>
                                    </div>
                                    <div className="component-name semi-bold">Экстракт мать-и-мачехи</div>
                                </div>
                                <div className="item__component">
                                    <div className="component-img">
                                        <img src="https://via.placeholder.com/178" alt=""/>
                                    </div>
                                    <div className="component-name semi-bold">травы крапивы</div>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        </div>
    );
});

export default GoodPage;