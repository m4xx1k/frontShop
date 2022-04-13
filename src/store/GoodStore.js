import {makeAutoObservable} from "mobx";
import rn from 'random-number'


export default  class UserStore {
    constructor() {
        this.categories = [
            {id:1, name:"Для тела"},
            {id:2, name:"Для волос"},
            {id:3, name:"Для лица"},
            {id:4, name:"Мужчинам"},
            {id:5, name:"Подарочные наборы"}
        ]

        this.types = [
            {id:1, name:'Гели для душа'},
            {id:2, name:'Натуральное мыло'},
            {id:3, name:'Скрабы'},
            {id:4, name:'Антисептики'},
            {id:5, name:'Крема'},
            {id:6, name:'Масла'},
            {id:7, name:'Соли для ванн'},
            {id:8, name:'Бомбочки для ванн'}

        ]

        this.allGoods = [
            {
                id: 1,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл1",
                price: 400,
                img: 'https:via.placeholder.com/312x290',
                type: 'Антисептики',
                count: 1,
                liked:false
            },
            {
                id: 2,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл2",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Антисептики',
                count: 1,
                liked:false
            },
            {
                id: 3,
                name: "Гель для душа 450мл3",
                price: 200,
                img: 'https:via.placeholder.com/312x290',
                type: 'Гели для душа',
                count: 1,
                liked:false
            },
            {
                id: 4,
                name: "Гель для душа 750мл4",
                price: 380,
                img: 'https:via.placeholder.com/312x290',
                type: 'Гели для душа',
                count: 1,
                liked:false
            },
            {
                id: 5,
                name: "Натуральное мыло5",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Натуральное мыло',
                count: 1,
                liked:false
            },
            {
                id: 6,
                name: "Скраб6",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Скрабы',
                count: 1,
                liked:false
            },
            {
                id: 7,
                name: "Крема7",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1,
                liked:false
            },
            {
                id: 8,
                name: "Крема8",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1,
                liked:false
            },
            {
                id: 9,
                name: "Крема9",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1,
                liked:false
            },
        ]
        this.goods = []

        this.pagination = {
            limit:3,
            selectedPage: 1,
            list: []

        }

        this.sortedGoods = [];
        this.selectedType = '';
        this.selectedCategory = '';
        this.selectedGood = {};

        makeAutoObservable(this)
    }




    setGoods(goods){
        this.goods = goods
    }

    setCategory(category){
        this.selectedCategory = category
    }

    setType(type){
        if(this.selectedType===type){
            this.selectedType = ''
        }else{
            this.selectedType = type
            this.pagination.selectedPage = 1
        }
    }

    setGood(good){
        this.selectedGood = good
    }

    getSortedGoods(){
        this.sortedGoods = this.allGoods.filter(item=>item.type === this.selectedType)
    }

    makePagination(list){
        const limit = this.pagination.limit
        const page = this.pagination.selectedPage
        this.pagination.list = []
        for(let i = 0;i<Math.ceil(list.length/this.pagination.limit);i++) this.pagination.list.push(i+1)
        this.goods = list.slice(limit*(page-1),limit*page)
    }

    addNewCategory(name){
        this.categories.push({
            id: rn({min:1000,max:100000, integer: true}),
            name:name
        })
    }

    changeCategory(id,newName){
        this.categories = this.categories.map(elem=>{
            if(elem.id===id) {
                return {...elem, name: newName}
            }else{
                return elem
            }
        })
    }


    deleteCategory(id){
        this.categories = this.categories.filter(elem=>elem.id!==id)
    }

    addNewType(name){
        this.types.push({
            id: rn({min:1000,max:100000, integer: true}),
            name:name
        })
    }

    changeType(id,newName){
        this.types = this.types.map(elem=>{
            if(elem.id===id) {
                return {...elem, name: newName}
            }else{
                return elem
            }
        })
    }


    deleteType(id,type){
        this.types = this.types.filter(elem=>elem.id!==id)
        this.allGoods = this.allGoods.filter(elem=>elem.type!==type)
        console.log(type)
    }

}