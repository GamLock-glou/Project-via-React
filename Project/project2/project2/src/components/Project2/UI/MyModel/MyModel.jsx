import React from 'react';
import MyButton from '../Button/MyButton';
import s from './MyModel.module.css'

const MyModel = ({children, visible, setVisible}) => {

    const rootClass = [s.myModel];
    if(visible){
        rootClass.push(s.active);
    }
    //onClick={e=>e.stopPropagation()}
    return (
        <div className={rootClass.join('')}>
            <div className={s.myModelContent} >
                {children}
                <MyButton style={{marginTop: 2, background: 'rgb(248, 116, 107)'}} onClick={()=>setVisible(false)}>Close</MyButton>
            </div>
        </div>
    );
};

export default MyModel;