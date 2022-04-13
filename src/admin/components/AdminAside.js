import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {Context} from "./../../index";
import {observer} from "mobx-react-lite";


const AdminAside = observer(() => {
    let navigate = useNavigate();
    const {admin} = useContext(Context)

    return (
        <div className="admin__aside">
            {
                admin._aside.map(elem=>
                    <div key={elem.id} className={"admin__aside-item".concat(admin.selectedAsideItem === elem.id ? " admin__aside-item-active" : "")}
                         onClick={()=> {
                             navigate(elem.path)
                             admin.selectedAsideItem = elem.id
                         }}>
                        {elem.name}
                    </div>
                )
            }


        </div>
    );
});

export default AdminAside;