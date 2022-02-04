import React from 'react';
import s from './Project3.module.css';

const Lists = ({cardList, dragEndHandler, dragOverHandler, sortCards, dragStartHandler, dropHandler}) => {

    return (
        <div className={s.project1}>
            {cardList.sort(sortCards).map(card=>
                <div 
                onDragStart={(e)=>dragStartHandler(e, card)} 
                onDragLeave={(e)=>dragEndHandler(e)} 
                onDragEnd={(e)=>dragEndHandler(e)}
                onDragOver={(e)=>dragOverHandler(e)}
                onDrop={(e)=>dropHandler(e,card)}
                draggable='true'
                className={s.card}
                >
                {card.text}
                </div>)}
        </div>
    );
};

export default Lists;