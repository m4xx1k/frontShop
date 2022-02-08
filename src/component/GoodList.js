import React, {useContext} from 'react';
import {Context} from "../index";
import Good from "./Good";


const GoodList = () => {
    const {good} = useContext(Context)
    return (
        <div className="goods__list">
            {
                good.goods.map(item =>
                    <Good key={item.id} info={item}/>
                )

            }
        </div>
    );
};

export default GoodList;