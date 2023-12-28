'use strict';



import addDropdown from './helpers/dropdownModule.js'
import addNodeToDom from './helpers/addNode.js';

function startGame() {
  const root = document.querySelector('.window');
  const lightGray = window
    .getComputedStyle(root)
    .getPropertyValue('--light-gray')
    .trim();
  const cellsNumber = parseInt(
    window.
    getComputedStyle(root).
    getPropertyValue('--cells-number').trim()
  );
  const cellsSize = window
    .getComputedStyle(root)
    .getPropertyValue('--cells-size')
    .trim();

  // generuj komorki
  const cell = document.createElement('div');
  cell.classList.add('cell', 'flagged');
  for (let i = 0; i < cellsNumber; i++) {
    for (let j = 0; j < cellsNumber; j++) {
      addNodeToDom('board', cell);
    }
  }
}


document.addEventListener('DOMContentLoaded', function() {
  startGame();
  addDropdown();
});