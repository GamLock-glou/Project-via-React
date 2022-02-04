import { MoveCell } from "./moveCell";
import { StartGame } from "./startGame";

export function ClickKey(e, keys, board){
    switch (e.keyCode) {
        case keys.up: return MoveCell(board, "up");  
        case keys.down: return MoveCell(board, "down"); 
        case keys.left: return MoveCell(board, "left") 
        case keys.right: return MoveCell(board, "right")  
        case keys.newGame: return StartGame(board); 
        default: return 0
      }
}