import { relocateMine } from './minesHelper.js';

function findObject(cellCoordinates, board) {
  const [x, y] = cellCoordinates;
  return board[x][y];
}

function gameOver() {
  console.log('Mina! Koniec gry.');
  // zatrzymaj timer
  // odslon wszystkie pola
  // pokaz jakis komunikat
  alert('Mina! Koniec gry.');
}

function showField(board, field, firstMove = false) {
  field.discovered = true;
  // jezeli to pierwszy krok i mina to nie zakanczaj gry
  // jezeli nie ma miny to odkrywaj sasiadow
  // jezeli jest mina to:
  // - pokaz ikonke miny
  // - zakoncz gre
  console.log(field);
  if (firstMove && field.mine) {
    relocateMine(board, field);
  }
  if (!firstMove && field.mine) {
    gameOver();
  }
}

export function handleFirstMove(board, cellXY) {
  const field = findObject(cellXY, board);
  const firstMove = true;
  showField(board, field, firstMove);
}

export function handlePlayerMove(board, cellXY) {
  const field = findObject(cellXY, board);
  showField(board, field);
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
