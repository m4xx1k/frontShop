import React, {useContext} from 'react';
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";
import {GOOD_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const Good = observer(({info}) => {
    let navigate = useNavigate();
    const {good}= useContext(Context)
    const {user} = useContext(Context)


    function addToCartBtn(info){
        user.addToCart({...info, count: good.allGoods.find(elem=>elem.id===info.id).count})
        good.allGoods.find(elem=>elem.id===info.id).count = 1
    }

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
                    <div className="good-addToCart" onClick={()=>addToCartBtn(info)}>Добавить в корзину</div>
                    <div className="good-addToLiked" onClick={()=>user.addToLiked(info)}>
                        {
                            info.liked ? <i className="fas fa-heart"> </i> : <i className="far fa-heart"> </i>
                        }
                    </div>

                </div>
            </div>
        </div>
    );
});

export default Good;