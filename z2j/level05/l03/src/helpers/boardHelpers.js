const rootElement = document.querySelector('.window');

export function setBoardPropertyValues(rows, columns, mines, rootElement) {
  setPropertyValue('--rows-number', rows.toString(), rootElement);
  setPropertyValue('--columns-number', columns.toString(), rootElement);
  setPropertyValue('--mines-number', mines.toString(), rootElement);
}

function setPropertyValue(propertyName, value, rootElement) {
  rootElement.style.setProperty(propertyName, value);
}

export function getBoardColumns() {
  const cellsNumber = parseInt(
    window
      .getComputedStyle(rootElement)
      .getPropertyValue('--columns-number')
      .trim()
  );
  return cellsNumber;
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

export function clearBoard(boardElement) {
  // Pętla usuwająca wszystkie dzieci
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
  }
}
