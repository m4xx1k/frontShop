import {makeAutoObservable} from "mobx";

export default  class UserStore {
    constructor() {
        this._categories = [
            {id:1, name:"Для тела"},
            {id:2, name:"Для волос"},
            {id:3, name:"Для лица"},
            {id:4, name:"Мужчинам"},
            {id:5, name:"Подарочные наборы"}
        ]
        this._types = [
            {id:1, name:'Гели для душа'},
            {id:2, name:'Натуральное мыло'},
            {id:3, name:'Скрабы'},
            {id:4, name:'Антисептики'},
            {id:5, name:'Крема'},
            {id:6, name:'Масла'},
            {id:7, name:'Соли для ванн'},
            {id:8, name:'Бомбочки для ванн'}

        ]

        // this._types = [
        //     {id:1,categoryName:'Для тела', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]},
        //     {id:2,categoryName:'Для волос', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]},
        //     {id:3,categoryName:'Для лица', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]},
        //     {id:4,categoryName:'Мужчинам', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]},
        //     {id:5,categoryName:'Подарочные наборы', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]},
        //     {id:6,categoryName:'Другое', list:[
        //             'Гели для душа',
        //             'Натуральное мыло',
        //             'Антисептики',
        //             'Скрабы',
        //             'Крема',
        //             'Масла',
        //             'Соли для ванн',
        //             'Бомбочки для ванн'
        //         ]}
        // ]
        this._goods = [
            {
                id: 1,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 400,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 2,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 3,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 700,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 4,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 5,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 6,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 7,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 8,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
            {
                id: 9,
                name: "Антибактериальный антисептик спрей для рук Грейпфрут 50мл",
                price: 80,
                img: 'https:via.placeholder.com/312x290'
            },
        ]

        this._selectedType = {}
        makeAutoObservable(this)
    }

    setCategories(categories){
        this._categories = categories
    }

    setTypes(types){
        this._types = types
    }

    setGoods(goods){
        this._goods = goods
    }

    setSelectedType(type){
        this._selectedType = type
    }

    get categories(){
        return this._categories
    }

    get types(){
        return this._types
    }

    get goods(){
        return this._goods
    }

    get selectedType(){
        return this._selectedType
    }




}