import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import Good from "./Good";
import {observer} from "mobx-react-lite";


const GoodList = observer(() => {
    const {good} = useContext(Context)
    const type = good.selectedType
    const  paginationList = []
    for(let i = 0;i<Math.ceil(good.allGoods.length/good.pagination.limit);i++){
        paginationList.push(i+1)
    }

    function paginationBtn(number){
        good.pagination.selectedPage = number
    }

    useEffect(()=>{
        good.getGoods(good.pagination.selectedPage)
    },[good.pagination.selectedPage])

    return (
        <>
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
            <div className="pagination">
                {
                    paginationList.map(elem=>
                        <div onClick={()=>paginationBtn(elem)} className={good.pagination.selectedPage===elem ? 'pagination__item' : "pagination__item pagination__item-active"}>
                            elem
                        </div>
                    )
                }
            </div>
        </>
    );
});

export default GoodList;