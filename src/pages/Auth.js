import React, {useContext} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import {Context} from "../index";
import Account from "./Account";
import {REGISTRATION_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import './css/Auth.css'
const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const {user} = useContext(Context);
    return (
        <div>{
            user.isAuth
                ?
                <Account/>
                :
                <form action="" className="auth">
                    <div className="title">
                        {isLogin ? 'Вход' : 'Форма Регистрации'}
                    </div>

                    <div className="phone">
                        <input type="text" className="input phone-input" placeholder="Ваш Номер Телефона"/>
                    </div>
                    <div className="pass">
                        <input type="password" className="input password-input" placeholder="Ваш Пароль"/>
                    </div>
                    <NavLink to={isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE}>
                        <div  className="link">{isLogin ? 'нет акка? Регистрация' : 'есть акк? войти'}</div>
                    </NavLink>
                    <button className="btn auth__confirm">{isLogin ? 'Вайти' : 'Зарегестрироватся'}</button>
                </form>
        }
        </div>
    );
};

export default Auth;