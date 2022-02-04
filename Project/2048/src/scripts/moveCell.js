import { placeRandom } from "./placeRandom"

export function MoveCell(board, move){
    // console.log(rotateLeft(board))
    const origin = JSON.stringify(board)
    let newBoard = [];
    if(move === "left")
        newBoard = MoveLeft(board);
    if(move === "right")
        newBoard = MoveRight(board);
    if(move === "up")
        newBoard = MoveUp(board);
    if(move === "down")
        newBoard = MoveDown(board);
    
    if(origin === JSON.stringify(newBoard)) {
        return newBoard;
    }
    return placeRandom(newBoard)
}

function MoveUp(board) {
    let rotateBoardLeft = rotateLeft(board)
    let updateBoard = deleteZero(Sum(deleteZero(rotateBoardLeft)))
    let rotateBoardRight = rotateRight(updateBoard);
    return rotateBoardRight;
}

function MoveDown(board) {
    let rotateBoardLeft = rotateRight(board)
    let updateBoard = deleteZero(Sum(deleteZero(rotateBoardLeft)))
    let rotateBoardRight = rotateLeft(updateBoard);
    return rotateBoardRight;
}

function MoveLeft(board) {
    return deleteZero(Sum(deleteZero(board)))
}

function MoveRight(board) {
    return deleteZero(Sum(deleteZero(board, true), true), true)
}


// move the zeros to the end of the matrix
function deleteZero(board, rev) {
    let newBoard = [...board]
    for(let row = 0; row<newBoard.length; row++)
    {
        if(rev)
            newBoard[row].reverse();
        for(let cell = newBoard[row].length - 1; cell >= 0; cell--)
            if(newBoard[row][cell] === 0)
            {
                newBoard[row].splice(cell, 1);
                newBoard[row].push(0)
            }
        if(rev)
            newBoard[row].reverse();
        
    }
    return newBoard
}


// sum up the cells if they are equal
function Sum(board, rev) {
    let newBoard = [...board]
    for(let row = 0; row<newBoard.length; row++)
    {
        if(rev)
            newBoard[row].reverse();
        for(let cell = 0; cell < newBoard[row].length; cell++)
            if(newBoard[row][cell] === newBoard[row][cell+1])
            {
                newBoard[row][cell] += newBoard[row][cell+1]
                newBoard[row][cell+1] = 0
            }
        if(rev)
            newBoard[row].reverse();
    }
    return newBoard
}




// rotate matrix right
function rotateRight(board){
    let updateBoard = [];
	
  	for (let c = 0; c < board.length; c++) {
	  	let row = [];
	  	for (let r = board[c].length - 1; r >= 0; r--) {
			  row.push(board[r][c]);
		  }
      updateBoard.push(row);
	  }
	
	  return updateBoard;
}

// rotate matrix left
function rotateLeft(board){
    let updateBoard = [];

    for (let c = board.length - 1; c >= 0; c--) {
      let row = [];
      for (let r = board[c].length - 1; r >= 0; r--) {
        row.unshift(board[r][c]);
      }
      updateBoard.push(row);
    }

    return updateBoard;
}