import React, {useContext} from 'react';
import {Context} from "../index";
import Good from "./Good";
import {observer} from "mobx-react-lite";


const GoodList = observer(() => {
    const {good} = useContext(Context)
    const type = good.selectedType
    return (
        <div className="goods__list">

        {
            type !== ''
            ?
            good.goods.filter(item=>item.type === type).map(item =>
                <Good key={item.id} info={item}/>
            )
            :
            good.goods.map(item =>
                <Good key={item.id} info={item}/>
            )

        }

        </div>
    );
});

export default GoodList;