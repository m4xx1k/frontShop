import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {ACCOUNT_ROUTE, CART_ROUTE, MAIN_ROUTE, SHOP_ROUTE, LIKED_ROUTE} from "../utils/consts";
import {Context} from "../index";
import logo from './../img/main-logo.png'
import { useNavigate } from "react-router-dom";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    const {good} = useContext(Context)
    let navigate = useNavigate();

    return (
        <div>
            <div className={"header__upper-wrapper"}>
                <div className="container">
                    <div className="header__upper">

                        <div className="header__upper-menu__left">
                            {
                                good.categories.map(category =>
                                    <div
                                        key={category.id}
                                        className="header__upper-menu__item"
                                        onClick={()=>{
                                            navigate(SHOP_ROUTE)
                                            good.setCategory(category.name)
                                        }}>
                                        {category.name}
                                    </div>
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
                        <img src={logo} alt="" onClick={()=>navigate(MAIN_ROUTE)}/>
                        <nav className="header__nav">

                            <div className="header__nav-element" onClick={()=>navigate(LIKED_ROUTE)}>
                                <i className="fas fa-heart"></i>
                            </div>
                            <div className="header__nav-element" onClick={()=>navigate(CART_ROUTE)}>
                                <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="header__nav-element" onClick={()=>navigate(ACCOUNT_ROUTE)}>
                                <i className="fas fa-user-circle"></i>
                            </div>
                            <div className="header__nav-element" onClick={()=>navigate(CART_ROUTE)}>
                                <i className="fas fa-search"></i>
                            </div>

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
});

export default Header;