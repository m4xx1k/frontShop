import React, {useContext} from 'react';
import './css/Shop.css'
import TypeBar from "../component/TypeBar";
import GoodList from "../component/GoodList";
import {Context} from "../index";


const Shop = () => {
    const {good}= useContext(Context)

    return (
        <div className='goods container'>

            <div className="goods__path page__path">Главная > Каталог > {good.selectedCategory}</div>
            <div className="goods__title">{good.selectedCategory}</div>
            <TypeBar/>
            <GoodList/>
        </div>
    );
};

export default Shop;