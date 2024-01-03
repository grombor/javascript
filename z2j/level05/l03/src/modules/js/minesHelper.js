export function setMines(board, rows, columns, mines) {
  
    for (let i=0; i < mines; i++) {
      let randomRow = randomInRange(rows);
      let randomColumn = randomInRange(columns);
  
      let cell = board[randomRow][randomColumn];
      cell.mine = true;
    }
    return board
  }

  function randomInRange(n) {
    return Math.floor(Math.random() * n);
  }

  function findEmptyField(board){
    let emptyFields = [];
    board.forEach(rows => {
      rows.forEach(cell => {
        if (!cell.mine) {
          emptyFields.push(cell)
        }
      })
    });
    const emptyFieldForMine = randomInRange(emptyFields.length);
    let newMineLocation = [emptyFields[emptyFieldForMine].x, emptyFields[emptyFieldForMine].y];
    return newMineLocation
  }

  export function relocateMine(board, field) {
    const [ newMineXPosition, newMineyPosition ] = findEmptyField(board)
    board[field.x][field.y].mine = false;
    board[newMineXPosition][newMineyPosition].mine = true;
    return board;
  }