import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const TypeBar = observer(() => {
    const {good} = useContext(Context)
    return (
        <div className='goods__filter'>
            {
                good.types.map(type=>
                    <div
                        key={type.id}
                        onClick={()=>good.setSelectedType(type)}
                        className={'goods__filter-btn'.concat(type.id === good.selectedType.id ? ' goods__filter-btn_active' : '')}>
                        {type.name}
                    </div>
                )
            }
        </div>
    );
});

export default TypeBar;