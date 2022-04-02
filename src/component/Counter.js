import React from 'react';
import { useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const Counter = observer(({props}) => {

    const {good} = useContext(Context)
    const {user} = useContext(Context)
    let count;
    if(props.inCart){
         count = user.cart.find(elem => elem.id === props.id).count
    }else{
         count = good.goods.find(elem => elem.id === props.id).count
    }

    const increment = () => {
        if(props.inCart){
            user.cart.find(elem => elem.id === props.id).count+=1
        }else{
            good.goods.find(elem => elem.id === props.id).count+=1
        }

    }


    const decrement = () => {
        if(count>=2){
            if(props.inCart){
                user.cart.find(elem => elem.id === props.id).count-=1
            }else{
                good.goods.find(elem => elem.id === props.id).count-=1
            }
        }
    }

    return (
        <div className="good-amount">
            <div className="good-amount__num">{count} шт</div>
            <div className="good-amount__modify">
                <div className="good-amount__up" onClick={increment}>
                    <i className="fas fa-angle-up good-amount__up"> </i>
                </div>
                <div className="good-amount__down" onClick={decrement}>
                    <i className="fas fa-angle-down good-amount__down"> </i>
                </div>
            </div>
        </div>
    );
});

export default Counter;