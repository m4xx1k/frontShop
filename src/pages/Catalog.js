import {React, useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import './css/Catalog.css'
import {SHOP_ROUTE} from "../utils/consts";


const Catalog = () => {
    const {good}= useContext(Context)
    const categories = good.categories
    return (

        <div className="catalog-wrapper">
            <div className="container">
                <div className="catalog">
                    <div className="page__path">Главная > Каталог</div>

                    <div className="title catalog-title">Каталог - выберите категорию</div>
                    
                    <div className="catalog__list">
                        {
                            categories.map(category =>

                                <NavLink to={SHOP_ROUTE}>
                                    <div className="catalog__item" onClick={()=>good.setCategory(category.name)}>
                                        <div className="catalog-img">
                                            <img src="https://via.placeholder.com/145" alt=""/>
                                        </div>
                                        <div className="catalog-name">
                                            {category.name}
                                        </div>
                                    </div>
                                </NavLink>
                            )
                            
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;