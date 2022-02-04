import React, { useState } from "react";
import './App.css'


function App() {

  //task 1
  const [cardList, setCardList] = useState([
    {id: 1, order: 3, text: 'C#'},
    {id: 2, order: 1, text: 'React'},
    {id: 3, order: 2, text: 'Js'},
    {id: 4, order: 4, text: 'C++'},
    {id: 5, order: 6, text: 'Java'},
    {id: 6, order: 5, text: 'Петухон'},
  ]);

  const [currnetCard, setCurrentCard] = useState(null);

  const sortCards = (a,b) => {
    if(a.order > b.order)
      return 1;
    else
      return -1
  }

  function dragStartHandler(e, card){
    setCurrentCard(card);
    console.log("drag", card);
  }

  function dragEndHandler(e){
    e.target.style.background = 'white';
    console.log("end");
  }

  function dragOverHandler(e){
    e.preventDefault();
    e.target.style.background = 'teal'
    console.log("over");
  }

  function dropHandler(e, card){
    console.log("drop", card);
    e.preventDefault();
    setCardList(cardList.map(c=>{
      if(c.id === card.id){
        return {...c, order: currnetCard.order}
      }
      if(c.id === currnetCard.id){
        return {...c, order: card.order}
      }
      return c;
    }));
    e.target.style.background = 'white'
  }



  // task 2
  const [boards, setBoards] = useState([
    {id: 1, title: "Do", items:[{id: 1, title: 'Go to the shop'}]},
    {id: 2, title: "Check", items:[{id: 1, title: 'Code'}]},
    {id: 3, title: "Done", items:[{id: 1, title: 'to eat'},{id: 2, title: 'to eat'},{id: 2, title: 'to eat'},{id: 2, title: 'to eat'},]},
  ]);

  const [currentBoard, setCurrentBoard] = useState(null);
  const [currnetItem, setCurrentItem] = useState(null);

  function dragStartHandler2(e, board, item){
    setCurrentBoard(board);
    setCurrentItem(item)
  }

  function dragLeaveHandler2(e){
    e.target.style.boxShadow = 'none'
  }

  function dragEndHandler2(e){
    e.target.style.boxShadow = 'none'
  }

  function dragOverHandler2(e){
    e.preventDefault();
    if(e.target.className == 'item'){
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dropHandler2(e, board, item){
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

  return (
    <div className="App">
      {/* <div className="project1">
        {cardList.sort(sortCards).map(card=>
        <div 
        onDragStart={(e)=>dragStartHandler(e, card)} 
        onDragLeave={(e)=>dragEndHandler(e)} 
        onDragEnd={(e)=>dragEndHandler(e)}
        onDragOver={(e)=>dragOverHandler(e)}
        onDrop={(e)=>dropHandler(e,card)}
        draggable='true'
        className='card'
        >
            {card.text}
        </div>)}
        </div> */}

        <div className="project2">
        {boards.map(board=>
          <div 
          className="board"
          onDragOver={(e)=>dragOverHandler2(e)}
          onDrop={(e)=>dropCardHandler(e, board)}
          >
            <div className="board__title">
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
            className="item">
              {item.title}
            </div>)}
          </div>)}  
        </div>
    </div>
  );
}

export default App;
