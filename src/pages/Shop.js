import React from 'react';
import './css/Shop.css'
import TypeBar from "../component/TypeBar";
import GoodList from "../component/GoodList";

const Shop = () => {
    return (
        <div className='goods container'>
            shop
            <div className="goods__path page__path">Главная &gt; Каталог &gt; Для тела</div>
            <div className="goods__title">Для тела</div>
            <TypeBar/>
            <GoodList/>
        </div>
    );
};

export default Shop;