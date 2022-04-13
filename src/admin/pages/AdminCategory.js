import React,{useContext, useState} from 'react';
import AdminAside from "../components/AdminAside";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Swal from "sweetalert2";


const AdminCategory = observer(() => {
    const {good} = useContext(Context)

    const [newCategory,setNewCategory]=useState("")

    return (
        <div className="admin__wrapper">
            <AdminAside/>
            <div className="admin__main">
                <div className="title">Додати нову категорію</div>

                <div className="add">
                    <input type={`text`}
                           onChange={(e)=>setNewCategory(e.target.value)}
                           className={"input admin-input"}
                           placeholder={`Введіть назву категорії`}/>
                    <div onClick={()=>{good.addNewCategory(newCategory)}} className="add-btn">+</div>
                </div>

                <div className="title">Змінити або видалити наявні категорії</div>
                {
                    good.categories.map(elem=>
                        <div className="change" key={elem.id}>
                            <input onChange={(e)=> {
                                good.changeCategory(elem.id, e.target.value)
                                console.log(e.target.value)
                            }} className="input admin-input" type="text" value={elem.name}/>
                            <div onClick={()=>{
                                Swal.fire({
                                    title: "Ви впевненні?",
                                    text: 'В результаті видалення категорії "'+elem.name+'"'+"\n 666 товарів будуть видаленні також",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: 'red',
                                    cancelButtonColor: 'grey',
                                    confirmButtonText: 'Видаляти'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        good.deleteCategory(elem.id)
                                    }
                                })
                            }} className="delete-btn">
                                X
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
});

export default AdminCategory;