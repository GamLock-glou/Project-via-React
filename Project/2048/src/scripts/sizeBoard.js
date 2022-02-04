import { StartGame } from "./startGame";

export function SizeBoard(size){      
    let cellSize = []
    let rowSize = [];
    for(let cell = 0; cell < size; cell++)
      cellSize.push(0);
    for(let row = 0; row < size; row++){
      rowSize.push(cellSize);
    }
    return StartGame(rowSize);;
  }