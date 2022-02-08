import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./component/AppRouter";
import Header from "./component/Header";
import './normalize.css'
import './App.css'
import Footer from "./component/Footer";

function App() {

    return (

        <BrowserRouter>
            <Header/>
            <AppRouter/>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
