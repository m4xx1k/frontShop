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
                        onClick={()=>{
                            good.setType(type.name)
                            console.log(good.selectedType)
                        }}
                        className={'goods__filter-btn'.concat(type.name === good.selectedType ? ' goods__filter-btn_active' : '')}>
                        {type.name}
                    </div>
                )
            }
        </div>
    );
});

export default TypeBar;