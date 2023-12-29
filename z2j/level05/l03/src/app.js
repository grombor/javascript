'use strict';

import { getBoardColumns, getBoardRows, clearBoard } from './helpers/gameModule.js';
import addNewGameDropdown from './helpers/dropdownModule.js';

function startGame(rows, columns) {

const boardElement = document.getElementById('board');

for (let i = 0; i < (rows * columns); i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  boardElement.appendChild(cell);
}

// clearBoard();

}

document.addEventListener('DOMContentLoaded', function () {
    // Dodaj pasek menu 'Nowa gra'
    addNewGameDropdown();

  // Zacznij grę z domyślną wielkością tablicy do gry
  const columns = getBoardColumns();
  const rows = getBoardRows();
  startGame(columns, rows);


});
