import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ACCOUNT_ROUTE, CART_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "./../utils/consts";
import {Context} from "../index";

const Header = () => {
    const {good} = useContext(Context)

    return (
        <div>
            <div className="header__upper-wrapper">
                <div className="container">
                    <div className="header__upper">

                        <div className="header__upper-menu__left">
                            {
                                good.categories.map(category =>
                                    <NavLink to={SHOP_ROUTE} key={category.id} >
                                        <div className="header__upper-menu__item">
                                            {category.name}
                                        </div>
                                    </NavLink>
                                )
                            }
                        </div>
                        <NavLink to={SHOP_ROUTE}>
                            <div className="header__upper-menu__item">
                                Другое
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="header-wrapper">
                <div className="container">
                    <div className="header">
                        <img src="https://via.placeholder.com/122x48" alt=""/>
                        <nav className="header__nav">
                            <NavLink to={CART_ROUTE}>
                                <div className="header__nav-element">
                                    <i className="fas fa-heart"></i>
                                </div>
                            </NavLink>
                            <NavLink to={CART_ROUTE}>
                                <div className="header__nav-element">
                                    <i className="fas fa-shopping-cart"></i>
                                </div>
                            </NavLink>
                            <NavLink to={ACCOUNT_ROUTE}>
                                <div className="header__nav-element">
                                    <i className="fas fa-user-circle"></i>
                                </div>
                            </NavLink>
                            <NavLink to={CART_ROUTE}>
                                <div className="header__nav-element">
                                    <i className="fas fa-search"></i>
                                </div>
                            </NavLink>


                        </nav>
                        <div className="header__info">
                            <div className="header__info-phone">
                                +38 (063) 644 92 23
                            </div>
                            <div className="header__info-phone">
                                +38 (063) 644 92 23
                            </div>
                            <div className="header__info-schedule">
                                Пн-Пт 9:00 – 18:00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;