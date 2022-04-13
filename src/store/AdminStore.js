import {makeAutoObservable} from "mobx";
import {ADMIN_CATEGORY, ADMIN_GOOD,ADMIN_TYPE} from "../utils/consts";

export default  class UserStore {
    constructor() {

        this._aside = [
            {
                name: 'Модифікація товарів',
                id:1,
                path: ADMIN_GOOD
            },
            {
                name: 'Модифікація категорій',
                id:2,
                path: ADMIN_CATEGORY
            },
            {
                name: 'Модифікація типів',
                id:3,
                path: ADMIN_TYPE
            },
        ]

        this.selectedAsideItem = 1

        this.selectedMod = 'add'

        makeAutoObservable(this)
    }


    setModAdd(){
        this.selectedMod = "add"
    }
    setModChange(){
        this.selectedMod = 'change'
    }
}