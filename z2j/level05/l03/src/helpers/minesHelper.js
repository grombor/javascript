export function setMines(board, rows, columns, mines) {
    function randomInRange(n) {
      return Math.floor(Math.random() * n);
    }
  
    for (let i=0; i < mines; i++) {
      let randomRow = randomInRange(rows);
      let randomColumn = randomInRange(columns);
  
      let cell = board[randomRow][randomColumn];
      cell.mine = true;
    }
  
    return board
  }