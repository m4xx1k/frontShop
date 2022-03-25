import React, {useContext} from 'react';
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import {GOOD_ROUTE} from "../utils/consts";
import {Context} from "../index";


const Good = ({info}) => {
    let navigate = useNavigate();
    const {good}= useContext(Context)

    return (
        <div className="good">
                <img
                    className="good-img"
                    src="https://via.placeholder.com/350x325"
                    alt=""
                    onClick={()=>{
                        good.setGood(info)
                        navigate(GOOD_ROUTE + '/'+info.id)
                    }}
                />
            <div className="good-content">
                <div
                    className="good-name"
                    onClick={()=>{
                        good.setGood(info)
                        navigate(GOOD_ROUTE + '/'+info.id)
                    }}
                >
                        {info.name}

                </div>
                <div className="good-info">
                    <div className="good-price">{info.price}₴</div>
                    <Counter props={{id: info.id, inCart: false}}/>
                </div>
                <div className="good-save">
                    <div className="good-save__text"
                         onClick={()=>good.addToCart({...info, count: good.goods.find(elem=>elem.id===info.id).count})}>
                            Добавить в корзину
                    </div>
                    <i className="far fa-heart"> </i>
                </div>
            </div>
        </div>
    );
};

export default Good;