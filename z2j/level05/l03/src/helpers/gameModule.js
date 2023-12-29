const rootElement = document.querySelector('.window');
const boardElement = document.querySelector('.board');

export function getBoardColumns() {
    const cellsNumber = parseInt(
      window.
      getComputedStyle(rootElement).
      getPropertyValue('--columns-number').trim()
    );
    return cellsNumber
}

export function getBoardRows() {
  const cellsNumber = parseInt(
    window.
    getComputedStyle(rootElement).
    getPropertyValue('--rows-number').trim()
  );
  return cellsNumber
}

export function getMinesSize() {
    const minesNumber = parseInt(
      window.
      getComputedStyle(rootElement).
      getPropertyValue('--miness-number').trim()
    );
    return minesNumber
}

export function clearBoard() {
  console.log(boardElement.children.length);
// Pętla usuwająca wszystkie dzieci
while (boardElement.firstChild) {
  boardElement.removeChild(boardElement.firstChild);
}
}