import {makeAutoObservable} from "mobx";
import rn from 'random-number'

export default  class UserStore {

    constructor() {

        this._isAuth = true
        this._isAdmin = true
        this.user ={
            email: '',
            phone: '',
            firstName: '',
            secondName: '',
            userDeliveryInfo: {
                firstName: '',
                secondName: '',
                email: '',
                phone: '',
                deliveryAdress: '',
                deliveryType: '',
                town: ''
            }
        }


        this.cart = []

        this.liked = []

        this.orders = [
            {
                id: 123,
                status: "Доставлений",
                date: '24.01.2222',
                sum: 560,
                count: 2,
                details: {
                    goods: [
                        {
                            id: 33,
                            name: '',
                            type: '',
                            count: '',
                            price: '',
                            img: 'https:via.placeholder.com/312x290',
                        },
                        {
                            id: 34,
                            name: '',
                            type: '',
                            count: '',
                            price: '',
                            img: 'https:via.placeholder.com/312x290',
                        },
                    ],
                    delivery: {
                        firstName:'',
                        secondName:'',
                        phone:'',
                        email:'',
                        deliveryService: '',
                        deliveryType: '',
                        deliveryAdress:'',
                        payment:'',
                        town:''
                    }
                }
            },
            {
                id: 192,
                status: "Доставлений",
                sum: 1120,
                count: 4,
                details: {
                    goods: [
                        {
                            id: 35,
                            name: '',
                            type: '',
                            count: '',
                            price: '',
                            img: 'https:via.placeholder.com/312x290',
                        },
                        {
                            id: 36,
                            name: '',
                            type: '',
                            count: '',
                            price: '',
                            img: 'https:via.placeholder.com/312x290',
                        },
                    ],
                    delivery: {
                        firstName:'',
                        secondName:'',
                        phone:'',
                        email:'',
                        deliveryService: '',
                        deliveryType: '',
                        deliveryAdress:'',
                        payment:'',
                        town:''
                    }
                }
            },
        ]

        makeAutoObservable(this)
    }




    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this.user = user
    }

    get isAuth() {
        return this._isAuth
    }

    get userInfo() {
        return this.user
    }

    addToLiked(good){
        if(!good.liked){
            good.liked = true
            this.liked.push(good)
            console.log(this.liked)
        }else{
            good.liked = false
            this.liked = this.liked.filter(elem=>elem.id!==good.id)
            console.log(this.liked)
        }
    }

    addToCart(good){
        const alreadyInCart = this.cart.find(elem=>elem.id===good.id)
        if(!alreadyInCart) {
            this.cart.push(good)
        }else{
            this.cart.find(elem=>elem.id===good.id).count += good.count
        }
    }

    cartSum(){
        let sum = 0
        this.cart.map(elem=>{
            elem.count > 1 ? sum+=elem.price*elem.count : sum+=elem.price
        })
        return sum
    }



    removeFromCart(id){
        this.cart = this.cart.filter(good=>good.id!==id)
    }

    makeOrder(info){
        const orderSum = this.cartSum()
        const orderCount = this.cart.reduce((a,b)=>a+b.count,0)
        const order = {
                id: rn({min:1000,max:100000, integer: true}),
                status: "Обробляється",
                date: '24.01.2222',
                sum: orderSum,
                count: orderCount,
                details: {
                    goods: this.cart,
                    delivery: {
                        firstName:info.firstName,
                        secondName:info.secondName,
                        phone:info.phone,
                        email:info.email,
                        deliveryService: info.deliveryService,
                        deliveryType: info.deliveryType,
                        deliveryAdress:info.deliveryAdress,
                        payment:info.payment,
                        town:info.town
                    }
                }
            }

            this.orders.push(order)
    }

}