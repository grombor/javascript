const rootElement = document.querySelector('.window');
const boardElement = document.querySelector('.board');

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

export function getBoardAttributes(node) {
  try {
    const rows = parseInt(node.getAttribute('data-game-rows'))
    const columns = parseInt(node.getAttribute('data-game-columns'))
    const mines = parseInt(node.getAttribute('data-game-mines'))
    return [rows, columns, mines]
  } catch (error) {
    console.log(error)
  }
}

function clearBoard() {
            // TODO:
          // usun obecne pola
          // odczytaj atrybuty rows i cols z node
          // zapisz ich wartosci do zmiennych do css
          // narysuj tablice ze zmiennych css
          
  // Pętla usuwająca wszystkie dzieci
  while (boardElement.firstChild) {
    boardElement.removeChild(boardElement.firstChild);
  }
}

export function startGame(rows, columns, mines) {
  clearBoard();
  console.log(rows, columns, mines);
  console.log('game has started');
}
