import React, {useContext, useEffect} from 'react';
import './css/Shop.css'
import {Context} from "../index";
import Good from "../component/Good";
import {observer} from "mobx-react-lite";



const Shop = observer(() => {
    const {good}= useContext(Context)

    function paginationBtn(number){
        good.pagination.selectedPage = number
    }


    useEffect(()=>{

        if(good.selectedType===''){
            good.makePagination(good.allGoods)
        }else{
            good.getSortedGoods()
            good.makePagination(good.sortedGoods)
        }
        console.log('ue1')


    },[good.pagination.selectedPage,good.selectedType])

    useEffect(()=>{
        good.selectedType = ''
        good.pagination.selectedPage = 1
        console.log('ue2')
    },[good.selectedCategory])

    return (
        <div className='goods container'>

            <div className="goods__path page__path">Главная > Каталог > {good.selectedCategory}</div>
            <div className="goods__title">{good.selectedCategory}</div>

            <div className='goods__filter'>
                {
                    good.types.map(type=>
                        <div
                            key={type.id}
                            onClick={()=>{
                                good.setType(type.name)
                            }}
                            className={'goods__filter-btn'.concat(type.name === good.selectedType ? ' goods__filter-btn_active' : '')}>
                            {type.name}
                        </div>
                    )
                }
            </div>


            <div className="goods__list">

                {

                        good.goods.map(item =>
                            <Good key={item.id} info={item}/>
                        )
                }

            </div>
            <div className="pagination">
                {
                    good.pagination.list.map(elem=>
                        <div key={elem} onClick={()=>paginationBtn(elem)} className={good.pagination.selectedPage===elem ? 'pagination__item pagination__item-active' : "pagination__item"}>
                            {elem}
                        </div>
                    )
                }
            </div>
        </div>
    );
});

export default Shop;