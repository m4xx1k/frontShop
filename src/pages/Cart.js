import React, {useContext} from 'react';
import './css/Cart.css'
import Counter from "../component/Counter";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import remove from "./../img/cart-remove.png"
import {useNavigate} from "react-router-dom";
import {MAKEORDER_ROUTE} from "../utils/consts";


const Cart = observer(() => {
    let navigate = useNavigate();
    const {user}= useContext(Context)

    function makeOrderSubmit(){
        navigate(MAKEORDER_ROUTE)

    }

    return (
        <div>
            <div className="cart-wrapper">
                <div className="container">
                    <div className="cart">

                        <div className="cart__path page__path">Главная > Корзина</div>

                        <div className="title">Корзина</div>

                        <div className="cart__subtitle">
                            <span className="bold">Бесплатная доставка </span>
                            при заказе от
                            <span className="bold"> 600 грн</span>
                        </div>

                        <div className="cart__list">
                            {
                                user.cart.map(item=>
                                    <div key={item.id} className="cart__item">
                                        <img src="https://via.placeholder.com/128" alt="" className="good-img cart-img"/>
                                        <div className="good-content cart-content">
                                            <div className="good-name cart-name">{item.name}</div>
                                            <Counter props={{id: item.id, inCart: true}}/>
                                            <div className="good-price cart-price">{item.price}₴</div>
                                            <div className="good-remove cart-remove__btn">
                                                <img
                                                    src={remove}
                                                    alt=""
                                                    className="good-remove__img cart-remove__img"
                                                    onClick={()=>user.removeFromCart(item.id)}/>

                                            </div>

                                        </div>
                                    </div>
                                )
                            }


                        </div>

                        <div className="cart__promo">
                            <div className="cart__promo-text semi-bold ">Введите промокод</div>
                            <input type="text" className="cart__promo-input input" placeholder="Промокод"/>
                        </div>



                        <div className="cart__sum semi-bold">Итого: {user.cartSum()}₴</div>

                        <div className="cart__btns">
                            <button className="btn cart__submit-btn" onClick={makeOrderSubmit}>Оформить заказ</button>
                            <a className="btn cart__continue-btn">Продолжить покупки</a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
});

export default Cart;