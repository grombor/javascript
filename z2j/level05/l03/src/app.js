'use strict';

import { startGame } from './modules/js/gameModule.js';
import {
  getBoardColumns,
  getBoardRows,
  getBoardMines,
} from './modules/js/boardHelpers.js';
import addNewGameDropdown from './modules/js/dropdownModule.js';

document.addEventListener('DOMContentLoaded', function () {
  // Dodaj pasek menu 'Nowa gra'
  addNewGameDropdown();

  // Zacznij grę
  const columns = getBoardColumns();
  const rows = getBoardRows();
  const mines = getBoardMines();
  startGame(rows, columns, mines);
});
