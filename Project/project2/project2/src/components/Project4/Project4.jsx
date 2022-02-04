import React from 'react';
import s from './Project4.module.css'

const Project4 = ({dragEndHandler2, dragLeaveHandler2, dragOverHandler2, dragStartHandler2, dropHandler2, dropCardHandler,  boards}) => {
    return (
        <div className={s.project2}>
        {boards.map(board=>
          <div 
          className={s.board}
          onDragOver={(e)=>dragOverHandler2(e, s.item)}
          onDrop={(e)=>dropCardHandler(e, board)}
          >
            <div className={s.board__title}>
              {board.title}
            </div>
            {board.items.map(item => 
            <div 
            draggable='true'
            onDragStart={(e)=>dragStartHandler2(e, board, item)} 
            onDragLeave={(e)=>dragLeaveHandler2(e)} 
            onDragEnd={(e)=>dragEndHandler2(e)}
            onDragOver={(e)=>dragOverHandler2(e)}
            onDrop={(e)=>dropHandler2(e, board,item)}
            className={s.item}>
              {item.title}
            </div>)}
          </div>)}  
        </div>
    );
};

export default Project4;