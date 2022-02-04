export function Score(board) {
    let score = 0;
    for(let row = 0; row < board.length; row++)
      for(let cell = 0; cell < board[row].length; cell++){
        score += board[row][cell]
      }
      return score;
  }