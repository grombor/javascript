const rootElement = document.querySelector('.window');
const boardElement = document.querySelector('.board');

let isFirstMove = true;

export function getBoardColumns() {
  const cellsNumber = parseInt(
    window
      .getComputedStyle(rootElement)
      .getPropertyValue('--columns-number')
      .trim()
  );
  return cellsNumber;
}

function setPropertyValue(propertyName, value) {
  rootElement.style.setProperty(propertyName, value);
}

function setBoardPropertyValues(rows, columns, mines) {
  setPropertyValue('--rows-number', rows.toString());
  setPropertyValue('--columns-number', columns.toString());
  setPropertyValue('--mines-number', mines.toString());
}

export function getBoardRows() {
  const cellsNumber = parseInt(
    window
      .getComputedStyle(rootElement)
      .getPropertyValue('--rows-number')
      .trim()
  );
  return cellsNumber;
}

export function getBoardMines() {
  const minesNumber = parseInt(
    window
      .getComputedStyle(rootElement)
      .getPropertyValue('--mines-number')
      .trim()
  );
  return minesNumber;
}

export function getBoardAttributes(node) {
  try {
    const rows = parseInt(node.getAttribute('data-game-rows'));
    const columns = parseInt(node.getAttribute('data-game-columns'));
    const mines = parseInt(node.getAttribute('data-game-mines'));
    return [rows, columns, mines];
  } catch (error) {
    console.log(error);
  }
}

function clearBoard() {
  // Pętla usuwająca wszystkie dzieci
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
  }
}

function createFields(rows, columns) {
  let board = [];
  let counter = 0;
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      counter++;
      board[i][j] = {
        x: i,
        y: j,
        mine: false,
        discovered: false,
        flag: false,
      }
    }
  }

  return board
}

function addCellsToBoard(board) {
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

function setMines(board, rows, columns, mines) {
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

function handleFirstStep(){
  console.log('first move')
  isFirstMove = false;
  console.log(x, y)
  console.log(board)
}

function handlePlayerMove(){
  console.log('not first move')
  console.log(x, y)
}

function handleCellClick(cell){
  const x = cell.getAttribute('data-game-x');
  const y = cell.getAttribute('data-game-y');

  if (isFirstMove) {
    handleFirstStep(x, y)
  } else {
    handlePlayerMove(x, y)
  }
}

function addEventListenersToCells() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach(cell => {
    cell.addEventListener('click', function(event) {
      handleCellClick(event.target)
  })
  cell.addEventListener('contextmenu', function(event) {
    handleCellClick(event.target)
  });
})
};

export function startGame(rows, columns, mines) {
  clearBoard();
  setBoardPropertyValues(rows, columns, mines);
  let board = createFields(rows, columns);
  board = setMines(board, rows, columns, mines);
  addCellsToBoard(board);
  addEventListenersToCells()

  console.log(board);
  console.log('game has started');

}
