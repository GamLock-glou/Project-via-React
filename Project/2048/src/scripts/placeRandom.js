function RandomNumber(){
    const number = [2,4];
    return number[Math.floor(Math.random()*number.length)];
  }

function getNullFields(board){
    let nullFields = []
    for(let row = 0; row < board.length; row++)
      for(let cell = 0; cell < board[row].length; cell++){
        if(board[row][cell] === 0)
          nullFields.push([row, cell]);
      }
    return nullFields;
  }

  export function placeRandom(board){
    let nullFields = getNullFields(board);
    if(nullFields[0] != null)
    {
      let randomField = nullFields[Math.floor(Math.random() * nullFields.length)];
      board[randomField[0]][randomField[1]] = RandomNumber();
      return board;
    }
    return board

  }