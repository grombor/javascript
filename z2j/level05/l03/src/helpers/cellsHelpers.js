function findObject(cellCoordinates, board) {
  console.log(`szukam ${cellCoordinates} w tablicy`);
}

export function handleFirstMove(board, cellXY) {
  console.log('first move');
  console.log(cellXY);
  findObject(cellXY, board);
}

export function handlePlayerMove(board, cellXY) {
  console.log('not first move');
  console.log(cellXY);
}

export function addCellsToBoard(board, boardElement) {
  board.forEach((row) => {
    row.forEach((column) => {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.setAttribute('data-game-x', column.x);
      cell.setAttribute('data-game-y', column.y);
      boardElement.appendChild(cell);
    });
  });
}
