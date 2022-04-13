import React, {useContext} from 'react';
import {Formik} from "formik";
import * as yup from 'yup';
import {observer} from "mobx-react-lite";
import {Context} from "../../../index";
import rn from 'random-number'

const AddGood = observer(() => {

    const {good} = useContext(Context)

    const validation = yup.object().shape({
        name: yup.string().required("Обязательно"),
        price: yup.number().typeError("Должно быть числом").positive().integer().required("Обязательно"),
        type: yup.string().required("Обязательно"),
        category: yup.string().required("Обязательно"),
        desc: yup.string().required("Обязательно"),
    })

    function AddGoodSubmit(info){
        console.log(info)
        const newGood = {
            id: rn({min:1000,max:100000, integer: true}),
            name: info.name,
            price: info.price,
            type: info.type,
            img: 'https:via.placeholder.com/312x290',
            count: 1,
            liked:false
        }
        good.allGoods.push(newGood)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name: '',
                    price: '',
                    type: '',
                    category: '',
                    desc: ''
                }}
                    validateOnBlur
                    validationSchema={validation}
                    onSubmit={(values)=>AddGoodSubmit(values)}>

                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) =>
                    (
                    <div className="admin-form">

                        <label className={`semi-bold label`} htmlFor={``}>Назва товару</label>
                        <input type={`text`}
                               name={`name`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.name}
                               className={`input `}
                               placeholder={`Введіть назву товару`}/>
                        {touched.name && errors.name && <p className="error">{errors.name}></p> }

                        <label className={`semi-bold label`} htmlFor={``}> price</label>
                        <input type={`text`}
                               name={`price`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.price}
                               className={`input `}
                               placeholder={`Введіть price`}/>
                        {touched.price && errors.price && <p className="error">{errors.price}></p> }

                        <label className={`semi-bold label`} htmlFor={``}>Назва type</label>
                        <input type={`text`}
                               name={`type`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.type}
                               className={`input `}
                               placeholder={`Введіть назву type`}/>
                        {touched.type && errors.type && <p className="error">{errors.type}></p> }

                        <label className={`semi-bold label`} htmlFor={``}>Назва category</label>
                        <input type={`text`}
                               name={`category`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.category}
                               className={`input `}
                               placeholder={`Введіть category`}/>
                        {touched.category && errors.category && <p className="error">{errors.category}></p> }

                        <label className={`semi-bold label`} htmlFor={``}>desc</label>
                        <textarea type={`text`}
                               name={`desc`}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.desc}
                               className={`textarea `}
                               placeholder={`Введіть desc`}> </textarea>
                        {touched.desc && errors.desc && <p className="error">{errors.desc}></p> }


                        <button onClick={handleSubmit} className="btn">Create good</button>
                    </div>
                    )

                }
            </Formik>
        </div>
    );
});

export default AddGood;