export function gameOver(board) {
    let isGameOver = true;
    const position = [
        [1, 0],
        [-1, 0],
        [0, -1],
        [0, 1]
    ];

    for (let row = 0; row < board.length; row++)
        for (let cell = 0; cell < board[row].length; cell++)
            position.forEach(pos => {
                
                const lenRow = board.length;
                const lenCell = board[row].length;
                
                if (isNull(row, cell, lenRow, lenCell, pos))
                    if (board[row][cell] == 0 || board[row][cell] == board[row + pos[0]][cell + pos[1]])
                        isGameOver = false;
            })
    return isGameOver
}


function isNull(row, cell, lenRow, lenCell, pos) {
    if (row + pos[0] >= 0 && row + pos[0] < lenRow &&
        cell + pos[1] >= 0 && cell + pos[1] < lenCell)
        return true;
}