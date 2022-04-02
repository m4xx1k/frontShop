import React, {useContext} from 'react';
import {Context} from "../index";

import './css/Account.css'

const Account = () => {
    const {user}= useContext(Context)
    return (
        <div className="account-wrapper">
            <div className="container">
                <div className="account">
                    <div className="page__path">Главная > Мой аккаунт</div>

                    <div className="title">Мой аккаунт</div>

                    <div className="account__quit">
                        <span className="account__quit-text">Выйти</span>
                        <img src="https://via.placeholder.com/20x20" alt="" className="account__quit-img"/>
                    </div>

                    <div className="account__edit">
                        <div className="page__section-title">Профиль</div>
                        <div className="account__edit-name">
                            <div className="account__edit-name__text semi-bold">Отображаемое имя</div>
                            <div className="account__edit-name__subtext">Оно будет отображаться в разделе учётной записи
                                и при просмотрах
                            </div>
                            <input type="text" placeholder="Вольнов Евгений Павлович"
                                   className="account__edit-input input"/>
                        </div>
                        <div className="account__edit-pass">
                            <div className="account__edit-email semi-bold">Email</div>
                            <input type="text" placeholder="volnov@prankota.com" className="account__edit-input input"/>
                                <button className="btn account__edit-pass__btn">Сменить пароль</button>
                        </div>
                    </div>

                    <div className="account__orders">
                        <div className="page__section-title">Заказы</div>
                        <div className="account__orders__list">

                            {
                                user.orders.map(item=>
                                    <div key={item.id} className="mini__order">
                                        <div className="mini__order__info">
                                            <div className="mini__order-id">{item.id}</div>
                                            <div className="mini__order-date">{item.date}</div>
                                        </div>
                                        <div className="mini__order-status mini__order-status_inprogress">{item.status}</div>
                                        <div className="mini__order-sum">${item.sum}</div>
                                        <div className="mini__order-amount">{item.count} единиц товара</div>
                                        <a className="mini__order-btn btn">Подробнее</a>
                                    </div>
                                )
                            }



                        </div>
                    </div>

                    <div className="account__addinfo">
                        <div className="page__section-title">Платежный адрес</div>
                        <div className="account__addinfo__form">

                            <label htmlFor="" className="account__addinfo-label semi-bold">Имя Фамилия</label>
                            <input
                                placeholder="Вольнов Евгений Павлович"
                                type="text"
                                className="account__addinfo-input input"
                                id="addinfo-name"/>

                                <label htmlFor="" className="account__addinfo-label semi-bold">Адрес</label>
                                <input
                                    placeholder="г. Москва, улица Пушкина, дом Калатушкина"
                                    type="text"
                                    className="input account__addinfo-input"
                                    id="addinfo-adress"/>

                                    <label htmlFor="" className="account__addinfo-label semi-bold">Телефон</label>
                                    <input
                                        placeholder="+38 (066) 879 28 60"
                                        type="text"
                                        className="account__addinfo-input input"
                                        id="addinfo-phone"/>

                                        <label htmlFor="" className="account__addinfo-label semi-bold">Email</label>
                                        <input
                                            placeholder="volnov@prankota.com"
                                            type="text"
                                            className="account__addinfo-input input"
                                            id="addinfo-email"/>

                                            <button className="account__addinfo-btn btn">Сохранить адрес</button>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
};

export default Account;