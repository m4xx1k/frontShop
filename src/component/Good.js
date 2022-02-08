import React from 'react';
import Counter from "./Counter";
import {NavLink} from "react-router-dom";
import {GOOD_ROUTE} from "../utils/consts";

const Good = ({info}) => {
    return (
        <div className="good">
            <NavLink to={GOOD_ROUTE + '/'+info.id}>
                <img src="https://via.placeholder.com/350x325" alt="" className="good-img"/>
            </NavLink>
            <div className="good-content">
                <div className="good-name">
                    <NavLink to={GOOD_ROUTE + '/'+info.id}>
                        {info.name}
                    </NavLink>
                </div>
                <div className="good-info">
                    <div className="good-price">{info.price}</div>
                    <Counter/>
                </div>
                <div className="good-save">
                    <div className="good-save__text">Добавить в корзину</div>
                    <i className="far fa-heart"></i>
                </div>
            </div>
        </div>
    );
};

export default Good;