import React from 'react';
import {useState} from "react";

const Counter = () => {
    const [count,setCount]=useState(1)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        if(count<2){
            //pas
        }else{
            setCount(count-1)
        }

    }

    return (
        <div className="good-amount">
            <div className="good-amount__num">{count} шт</div>
            <div className="good-amount__modify">
                <div className="good-amount__up" onClick={increment}>
                    <i className="fas fa-angle-up good-amount__up"></i>
                </div>
                <div className="good-amount__down" onClick={decrement}>
                    <i className="fas fa-angle-down good-amount__down"></i>
                </div>
            </div>
        </div>
    );
};

export default Counter;