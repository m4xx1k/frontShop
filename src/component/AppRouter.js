import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes, publicRoutes, adminRoutes} from "../routes";
import {Context} from "../index";
import MainPage from "../pages/MainPage";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>}/>
            )}

            {user._isAdmin && adminRoutes.map(({path, Component})=>
                    <Route key={path} path={path} element={<Component/>}/>
                )}

            { publicRoutes.map(({path, Component})=>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path='*' element={<MainPage/>}/>
        </Routes>
    );
};

export default AppRouter;