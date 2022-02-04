import React, { useEffect, useState } from 'react';
import s from './ListView.module.css'
import MyInput from '../UI/MyInput/MyInput';
import MyButton from '../UI/MyButton/MyButton';

const ListView = (props) => {

    const [boards, setBoards] = useState(props.posts);
    useEffect(()=>{setBoards(props.posts)}, props.posts);
    const [currentBoard, setCurrentBoard] = useState(null);
    const [currnetItem, setCurrentItem] = useState(null);

    function dragStartHandler(e, board, item){
        setCurrentBoard(board);
        setCurrentItem(item)
      }
    
      function dragLeaveHandler(e){
        e.target.style.boxShadow = 'none'
      }
    
      function dragEndHandler(e){
        e.target.style.boxShadow = 'none'
      }
    
      function dragOverHandler(e){
        e.preventDefault();
        if(e.target.className == `${s.item}`){
          e.target.style.boxShadow = '0 4px 3px gray'
        }
      }

      function dropHandler(e, board, item){
        e.preventDefault();
        e.stopPropagation()
        const currentIndex = currentBoard.items.indexOf(currnetItem);
        currentBoard.items.splice(currentIndex, 1);
        const dropIndex = board.items.indexOf(item);
        board.items.splice(dropIndex + 1, 0, currnetItem);
        setBoards(boards.map(b => {
          if(b.id === board.id) {
            return board
          }
          if(b.id === currentBoard.id) {
            return currentBoard
          }
          return b
        }))
      }
    
      function dropCardHandler(e, board){
        board.items.push(currnetItem)
        const currentIndex = currentBoard.items.indexOf(currnetItem);
        currentBoard.items.splice(currentIndex, 1);
        setBoards(boards.map(b => {
          if(b.id === board.id) {
            return board
          }
          if(b.id === currentBoard.id) {
            return currentBoard
          }
          return b
        }))
      }

    const newText = (e) => {
        let body = e.target.value;
        props.updateNewPostTextActionCreator(body);
    }
    const title = boards.map(board => {return <div key={board.id} className={s.board}>
        <div className={s.board__title}
        onDragOver={(e)=>dragOverHandler(e)}
        onDrop={(e)=>dropCardHandler(e, board)}
        >
            <h1>{board.title}</h1>
        </div>
        {board.items.map(item => { return <div 
                                          key={item.id}
                                          draggable='true'
                                          onDragStart={(e)=>dragStartHandler(e, board, item)} 
                                          onDragLeave={(e)=>dragLeaveHandler(e)} 
                                          onDragEnd={(e)=>dragEndHandler(e)}
                                          onDragOver={(e)=>dragOverHandler(e)}
                                          onDrop={(e)=>dropHandler(e, board,item)}
                                          className={s.item}>
            {item.title}
            </div>
        })}
    </div>})
    return (
        <div>
        <div className="component-body">
          <MyInput
            value={props.newText}
            onChange={newText}
            placeholder="Write your assignment"
          />
          <MyButton onClick={props.addPostActionCreator}>Add task</MyButton>
        </div>
        <div className={s.viewList}>
            {title}
        </div>
        </div>
    );
};

export default ListView;