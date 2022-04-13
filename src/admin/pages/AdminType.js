import React,{useContext,useState} from 'react';
import AdminAside from "../components/AdminAside";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import Swal from 'sweetalert2'

const AdminType = observer(() => {
    const {good} = useContext(Context)

    const [newType,setNewType] = useState("")

    return (
        <div className="admin__wrapper">
            <AdminAside/>
            <div className="admin__main">
                <div className="title">Додати новий тип</div>

                <div className="add">
                    <input type={`text`}
                           onChange={(e)=>setNewType(e.target.value)}
                           className={"input admin-input"}
                           placeholder={`Введіть назву категорії`}/>
                    <div onClick={()=>{good.addNewType(newType)}} className="add-btn">+</div>
                </div>

                <div className="title">Змінити або видалити наявні типи</div>
                {
                    good.types.map(elem=>
                        <div className="change" key={elem.id}>
                            <input onChange={(e)=> {
                                good.changeType(elem.id, e.target.value)
                            }} className="input admin-input" type="text" value={elem.name}/>
                            <div onClick={()=>{
                                Swal.fire({
                                    title: "Ви впевненні?",
                                    text: 'В результаті видалення типа "'+elem.name+'"'+"\n 666 товарів будуть видаленні також ",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: 'red',
                                    cancelButtonColor: 'grey',
                                    confirmButtonText: 'Так, видалити тип та всі товари'
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        good.deleteType(elem.id, elem.name)
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

export default AdminType;