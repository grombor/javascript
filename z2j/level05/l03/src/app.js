'use strict';

import {
  getBoardColumns,
  getBoardRows,
  getBoardMines,
  startGame,
} from './helpers/gameModule.js';
import addNewGameDropdown from './helpers/dropdownModule.js';

document.addEventListener('DOMContentLoaded', function () {
  // Dodaj pasek menu 'Nowa gra'
  addNewGameDropdown();

  // Zacznij grę
  const columns = getBoardColumns();
  const rows = getBoardRows();
  const mines = getBoardMines();
  startGame(rows, columns, mines);
});
