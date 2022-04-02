import {makeAutoObservable} from "mobx";

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

        this.goods = [
            {
                id: 1,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл1",
                price: 400,
                img: 'https:via.placeholder.com/312x290',
                type: 'Антисептики',
                count: 1
            },
            {
                id: 2,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл2",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Антисептики',
                count: 1
            },
            {
                id: 3,
                name: "Гель для душа 450мл3",
                price: 200,
                img: 'https:via.placeholder.com/312x290',
                type: 'Гели для душа',
                count: 1
            },
            {
                id: 4,
                name: "Гель для душа 750мл4",
                price: 380,
                img: 'https:via.placeholder.com/312x290',
                type: 'Гели для душа',
                count: 1
            },
            {
                id: 5,
                name: "Натуральное мыло5",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Натуральное мыло',
                count: 1
            },
            {
                id: 6,
                name: "Скраб6",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Скрабы',
                count: 1
            },
            {
                id: 7,
                name: "Крема7",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1
            },
            {
                id: 8,
                name: "Крема8",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1
            },
            {
                id: 9,
                name: "Крема9",
                price: 80,
                img: 'https:via.placeholder.com/312x290',
                type: 'Крема',
                count: 1
            },
        ]


        this.selectedType = '';
        this.selectedCategory = '';
        this.selectedGood = {};

        makeAutoObservable(this)
    }



    setCategories(categories){
        this.categories = categories
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
        }
    }

    setGood(good){
        this.selectedGood = good
    }

}