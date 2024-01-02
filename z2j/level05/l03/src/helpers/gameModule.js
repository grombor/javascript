import {
  handleFirstMove,
  handlePlayerMove,
  addCellsToBoard,
} from './cellsHelpers.js';
import { setMines } from './minesHelper.js';
import { setBoardPropertyValues, clearBoard } from './boardHelpers.js';

const rootElement = document.querySelector('.window');
const boardElement = document.querySelector('.board');
let isFirstMove = true;

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
      };
    }
  }

  return board;
}

function handleCellClick(board, cell) {
  const cellXPosition = cell.getAttribute('data-game-x');
  const cellYPosition = cell.getAttribute('data-game-y');
  const cellCoordinates = [cellXPosition, cellYPosition];

  if (isFirstMove) {
    isFirstMove = false;
    handleFirstMove(board, cellCoordinates);
  } else {
    handlePlayerMove(board, cellCoordinates);
  }
}

function addEventListenersToCells(board) {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', function (event) {
      handleCellClick(board, event.target);
    });
    cell.addEventListener('contextmenu', function (event) {
      handleCellClick(board, event.target);
    });
  });
}

export function startGame(rows, columns, mines) {
  clearBoard(boardElement);
  setBoardPropertyValues(rows, columns, mines, rootElement);
  let board = createFields(rows, columns);
  board = setMines(board, rows, columns, mines);
  addCellsToBoard(board, boardElement);
  addEventListenersToCells(board);

  console.log('game has started');
}
