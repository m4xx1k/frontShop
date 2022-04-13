import React, {useContext} from 'react';
import AdminAside from "../components/AdminAside";
import AddGood from './../components/good/AddGood'
import ChangeGood from './../components/good/ChangeGood'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";




const AdminGood = observer(() => {
    const {admin} = useContext(Context)



    return (
        <div className="admin__wrapper">
            <AdminAside/>
            <div className="admin__main">
                <div className="typesOfMod">
                    <div onClick={()=>admin.setModAdd()} className={"typesOfMod-item".concat(admin.selectedMod==="add"?" active":" ")}>Add</div>
                    <div onClick={()=>admin.setModChange()} className={"typesOfMod-item".concat(admin.selectedMod!=="add"?" active":" ")}>Change</div>
                </div>
                {
                   admin.selectedMod === 'add' ? <AddGood/> : <ChangeGood/>
                }
            </div>
        </div>
    );
});

export default AdminGood;