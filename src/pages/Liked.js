import React, {useContext} from 'react';
import Good from "../component/Good";
import {Context} from "../index";
import {observer} from "mobx-react-lite";




const Liked = observer(() => {

    const {user} = useContext(Context)

    return (
        <div className="liked container">
            <div className="goods__title">Збереженні товари</div>
            <div className="goods__list liked__list">

                {

                    user.liked.map(item =>
                        <Good key={item.id} info={item}/>
                    )
                }

            </div>
        </div>
    );
});

export default Liked;