import React from 'react';
import s from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={s.MyBtn}>
            {children}
        </button>
    );
};


export default MyButton;