import React, {useContext} from 'react';
import "./css/MakeOrder.css"
import {Context} from "../index";
import {Formik} from "formik";
import * as yup from 'yup';


const MakeOrder = () => {
    const {good}= useContext(Context)


    const validation = yup.object().shape({
        firstName: yup.string().required("Обязательно"),
        secondName: yup.string().required("Обязательно"),
        email: yup.string().required("Обязательно"),
        phone: yup.number().typeError("Должно быть числом").required("Обязательно"),
        town: yup.string().required("Обязательно"),
        deliveryAdress: yup.string().required("Обязательно"),
        deliveryType: yup.string().required("Обязательно"),
        deliveryService: yup.string().required("Обязательно"),
        payment: yup.string().required("Обязательно"),

    })

    return (
        <div className="order-wrapper">
            <div className="container">
                <div className="order">
                    <div className="page__path">
                        Главная > Корзина > Оформление заказа
                    </div>

                    <div className="title">
                        Оформление заказа
                    </div>

                    <Formik
                        initialValues={{
                        firstName:'',
                        secondName:'',
                        phone:'',
                        email:'',
                        deliveryService: 'novaposhta',
                        deliveryType: 'department',
                        deliveryAdress:'',
                        payment:'',
                        town:''
                    }}
                        validateOnBlur
                        validationSchema={validation}
                        onSubmit={(values) => console.log(values)}>

                        {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty})=>(
                           <>
                                <div className={`order__forms`}>
                                    <div className={`registration`}>
                                        <div className={`page__section-title form-title`}>
                                            Регестрация покупателя
                                        </div>
                                        <div className={`registration__form`}>
                                            <label className={`semi-bold label`} htmlFor={``}>Имя</label>
                                            <input type={`text`}
                                                   name={`firstName`}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.firstName}
                                                   className={`input order__form-input`}
                                                   placeholder={`Имя`}/>
                                            {touched.firstName && errors.firstName && <p className="error">{errors.firstName}</p> }

                                            <label className={`semi-bold label`} htmlFor={``}>Фамилия</label>
                                            <input type={`text`}
                                                   name={`secondName`}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.secondName}
                                                   className={`input order__form-input`}
                                                   placeholder={`Фамилия`}/>
                                            {touched.secondName && errors.secondName && <p className="error">{errors.secondName}</p> }

                                            <label className={`semi-bold label`} htmlFor={``}>Email</label>
                                            <input type={`text`}
                                                   name={`email`}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.email}
                                                   className={`input order__form-input`}
                                                   placeholder={`ваш_имейл@gmail.com`}/>
                                            {touched.email && errors.email && <p className="error">{errors.email}</p> }

                                            <label className={`semi-bold label`} htmlFor={``}>Телефон</label>
                                            <input type={`text`}
                                                   name={`phone`}
                                                   onChange={handleChange}
                                                   onBlur={handleBlur}
                                                   value={values.phone}
                                                   className={`input order__form-input`}
                                                   placeholder={`+380 09 902 23 239`}/>
                                            {touched.phone && errors.phone && <p className="error">{errors.phone}</p> }
                                        </div>
                                    </div>


                                    {
                                        values.deliveryService === 'nondelivery'
                                            ?
                                            <>

                                            </>
                                            :
                                            <>
                                                <div className={`delivery`}>
                                                    <div className={`page__section-title form-title`}>Адрес доставки</div>
                                                    <div className={`delivery__form`}>

                                                        <label className={`semi-bold  label`} htmlFor={``}>Город</label>
                                                        <input type={`text`}
                                                               name={`town`}
                                                               onChange={handleChange}
                                                               onBlur={handleBlur}
                                                               value={values.town}
                                                               className={`input order__form-input`}
                                                               placeholder={`Введите Город`}/>
                                                        {touched.town && errors.town && <p className="error">{errors.town}</p> }

                                                        <div className={`deliveryAddress-radio`}>
                                                            <div className={`radio__item`}>
                                                                <input id={`department`}
                                                                       type={`radio`}
                                                                       name={`deliveryType`}
                                                                       onChange={handleChange}
                                                                       onBlur={handleBlur}
                                                                       value={'department'}
                                                                       className={`radio__item-input`}/>
                                                                <label className={`radio__item-label`} htmlFor={`department`}>Доставка у відділення</label>
                                                            </div>
                                                            <div className={`radio__item`}>
                                                                <input id={`courier`}
                                                                       type={`radio`}
                                                                       name={`deliveryType`}
                                                                       onChange={handleChange}
                                                                       onBlur={handleBlur}
                                                                       value={'courier'}
                                                                       className={`radio__item-input`}
                                                                />
                                                                <label className={`radio__item-label`} htmlFor={`courier`}>Доставка курєром</label>
                                                            </div>

                                                        </div>



                                                        {values.deliveryType === 'department'?
                                                            <>
                                                                <label className={`semi-bold label`} htmlFor={``}>Отделение</label>
                                                                <input type={`text`}
                                                                       name={`deliveryAdress`}
                                                                       onChange={handleChange}
                                                                       onBlur={handleBlur}
                                                                       value={values.deliveryAdress}
                                                                       className={`input order__form-input`}
                                                                       placeholder={`Введите Отделение`}
                                                                />
                                                                {touched.deliveryAdress && errors.deliveryAdress && <p className="error">{errors.deliveryAdress}</p> }
                                                            </>
                                                            :
                                                            <>
                                                                <label className={`semi-bold  label`} htmlFor={``}>Адресса</label>
                                                                <input type={`text`}
                                                                       name={`deliveryAdress`}
                                                                       onChange={handleChange}
                                                                       onBlur={handleBlur}
                                                                       value={values.deliveryAdress}
                                                                       className={`input order__form-input`}
                                                                       placeholder={`Введите Адрессу`}/>
                                                                {touched.deliveryAdress && errors.deliveryAdress && <p className="error">{errors.deliveryAdress}</p> }
                                                            </>
                                                        }

                                                    </div>

                                                </div>
                                            </>
                                    }



                                </div>

                               <div className="order__radios">
                                   <div className="type__delivery">
                                       <div className="semi-bold">Доставка</div>
                                       <div className="">
                                           <div className="radio__item">
                                               <input id="delivery1"
                                                      type="radio"
                                                      className="radio__item-input"
                                                      name="deliveryService"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={"novaposhta"}
                                                      />
                                               <label className="radio__item-label" htmlFor="delivery1">Новая почта</label>
                                           </div>
                                           <div className="radio__item">
                                               <input id="delivery2"
                                                      type="radio"
                                                      name="deliveryService"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={"nondelivery"}
                                                      className="radio__item-input"
                                                      />
                                               <label className="radio__item-label" htmlFor="delivery2">Самовывоз (с Академика
                                                   Белецкого 26)</label>
                                           </div>



                                           <div className="radio__item">
                                               <input id="delivery3"
                                                      type="radio"
                                                      className="radio__item-input"
                                                      name="deliveryService"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={"ukrposhta"}/>
                                               <label className="radio__item-label" htmlFor="delivery3">Доставка
                                                   Укрпочта</label>
                                           </div>
                                       </div>
                                   </div>

                                   <div className="type__payment">
                                       <div className="semi-bold">Способ оплаты</div>
                                       <div className="">
                                           <div className="radio__item">
                                               <input id="payment1"
                                                      type="radio"
                                                      className="radio__item-input"
                                                      name="payment"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={"card"}/>
                                               <label className="radio__item-label" htmlFor="payment1">Оплатить сейчас картой
                                                   Visa/Mastercard</label>
                                           </div>
                                           <div className="radio__item">
                                               <input id="payment2"
                                                      type="radio"
                                                      className="radio__item-input"
                                                      name="payment"
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      value={"cash"}/>
                                               <label className="radio__item-label" htmlFor="payment2">Оплатить заказ при
                                                   получении</label>
                                           </div>

                                       </div>
                                   </div>
                               </div>
                               <div className="order__sum semi-bold">Итого: {good.cartSum()}₴</div>

                               <div className="order__btns">
                                   <button
                                       className="btn order__submit-btn"
                                       type="submit"
                                       onClick={handleSubmit}>Оформить заказ</button>
                                   <button className="btn order__continue-btn">Продолжить покупки</button>
                               </div>
                            </>
                        )}

                    </Formik>







                </div>
            </div>
        </div>
    );
};

export default MakeOrder;