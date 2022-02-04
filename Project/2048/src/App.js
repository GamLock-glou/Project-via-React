import React, { useEffect, useState } from 'react';
import './App.css';
import Buttons from './components/Buttons';
import { Row } from './components/Row';
import { ClickKey } from './scripts/clickKey';
import { gameOver } from './scripts/gameOver';
import { Score } from './scripts/score';
import { SizeBoard } from './scripts/sizeBoard';
import { StartGame } from './scripts/startGame';

function App() {

  // Variables
  const keys = {
    up: 119,
    down: 115,
    left: 97,
    right: 100,
    newGame: 114
  }
  //[[2, 4, 6, 8], [10, 12, 14, 16], [18, 20, 22, 24], [26, 28, 30, 32]]
  const [board, setBoard] = useState([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [size, setSize] = useState(4);

  // Score
  useEffect(() => {
    setScore(Score(board));
    setIsGameOver(gameOver(board));
  }, [board]);

  useEffect(() => { 
    setBoard(StartGame(board)) 
  }, [])

  useEffect(() => {
    function onKeypress(e) {
      if (!isGameOver) {
        let updateBoard = ClickKey(e, keys, board);
        if (updateBoard !== 0) {
          setBoard(updateBoard)
        }
      }
    };
    document.addEventListener("keypress", onKeypress);
    return () => {
      document.removeEventListener("keypress", onKeypress);
    };
  })
  
  function incSize() {
    setSize(size + 1)
    setBoard(SizeBoard(size + 1));
  }

  function decSize() {
    setSize(size - 1);
    setBoard(SizeBoard(size - 1));
  }

  const newGame = () => {
    setBoard(StartGame(board))
  }



  return (
    <div className="App">
      <h1>Welcome to the 2048 game</h1>
      <Buttons decSize={decSize} newGame={newGame} incSize={incSize} size={size} />
      <div className='score'>Score: {score}</div>
      <div>
        {
          isGameOver ?
            <div>Oh my... Fuck this game! Maybe again? Click <b>R</b></div>
            :
            <div>Play! This is fun!</div>
        }
      </div>
      <table>
        <thead>
          {
            board.map((row, i) => {
              return <Row key={i} row={row} />
            })
          }
        </thead>
      </table>
    </div>
  );
}

export default App;
