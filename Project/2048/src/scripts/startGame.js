import { placeRandom } from "./placeRandom";

export function StartGame(board) {
    let updateBoard = [];
    board.map(board=>{
        let arr = [];
        board.map(b=>arr.push(0))
        updateBoard.push(arr);
    })
    return (placeRandom(placeRandom(updateBoard)));
  }