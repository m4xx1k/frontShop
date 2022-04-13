import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import GoodStore from "./store/GoodStore"
import AdminStore from "./store/AdminStore"


export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        good: new GoodStore(),
        admin: new AdminStore()
    }}
    >
        <App/>
    </Context.Provider>,
    document.getElementById('root')
);
