'use strict';

import {
  getBoardColumns,
  getBoardRows,
  getBoardMines,
  startGame,
} from './helpers/gameModule.js';
import addNewGameDropdown from './helpers/dropdownModule.js';

// function startGame(rows, columns) {

// const boardElement = document.getElementById('board');

// for (let i = 0; i < (rows * columns); i++) {
//   const cell = document.createElement('div');
//   cell.classList.add('cell');
//   boardElement.appendChild(cell);
// }

// }

document.addEventListener('DOMContentLoaded', function () {
  // Dodaj pasek menu 'Nowa gra'
  addNewGameDropdown();

  // Zacznij grę
  const columns = getBoardColumns();
  const rows = getBoardRows();
  const mines = getBoardMines();
  startGame(rows, columns, mines);
});
