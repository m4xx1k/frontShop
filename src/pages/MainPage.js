import React, {useContext} from 'react';
import bg from './../img/main-bg.jpg'
import {Context} from "../index";
import Good from "../component/Good";
import {NavLink} from "react-router-dom";
import {CATALOG_ROUTE} from "../utils/consts";

const MainPage = () => {

    const {good} = useContext(Context)

    return (
        <div>
            <div className="opening-wrapper" style={{background: "url("+bg+")"}}>
                <div className="container">
                    <div className="opening">
                        <div className="opening__inner">
                            <h1 className="opening__title">
                                Подарите красоту себе и окружающим
                            </h1>
                            <div className="opening__subtitle">
                                Косметика по России
                            </div>
                            <NavLink to={CATALOG_ROUTE}>
                                <div className="btn opening__btn">К каталогу</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hits-wrapper section">
                <div className="container">
                    <div className="hits ">
                        <div className="hits__title section__title">
                            <div className="hits__title-line section__title-line"> </div>
                            <div className="hits__title-text section__title-text">Топ 3 хита продаж</div>
                        </div>
                        <div className="hits__list">
                            {
                                good.allGoods.slice(0,3).map(item=>

                                        <Good info={item} key={item.id}/>

                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

            <div className="preferences-wrapper section">
                <div className="container">
                    <div className="preferences ">
                        <div className="preferences__title section__title">
                            <div className="section__title-line"></div>
                            <div className="section__title-text">Почему мы</div>
                        </div>
                        <div className="preferences__list">
                            <div className="preferences__item">
                                <div className="preferences__item-img"><img src="https://via.placeholder.com/128" alt=""/></div>
                                <div className="preferences__item-text">Натуральные ингредиенты</div>
                            </div>
                            <div className="preferences__item">
                                <div className="preferences__item-img"><img src="https://via.placeholder.com/128" alt=""/></div>
                                <div className="preferences__item-text">100% гарантия качества</div>
                            </div>
                            <div className="preferences__item">
                                <div className="preferences__item-img"><img src="https://via.placeholder.com/128" alt=""/></div>
                                <div className="preferences__item-text">Не тестируеться на животных</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="advices-wrapper section">
                <div className="container">
                    <div className="advices">
                        <div className="advices__item">
                            <div className="advices__item-text">Советы по уходу за собой в инстаграмме</div>
                            <div className="advices__item-author">
                                <div className="advices__item-img">
                                    <img src="https://via.placeholder.com/32" alt=""/>
                                </div>
                                <div className="advices__item-author__name">lapush_cosmetics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-wrapper section">
                <div className="container">
                    <div className="form ">
                        <div className="form__title">
                            Подпишитесь на нас и получите купон на скидку -10%
                        </div>
                        <input className="form__input input" type="text" placeholder="ваш_имейл@gmail.com"/>
                        <div className="form__btn btn">Подписаться</div>
                        <NavLink to={CATALOG_ROUTE}>
                            <div className="form__link">Сначала закупиться</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;