const board = document.querySelectorAll('.board div');
const statusDisplay = document.querySelector('.status');

function msg(player) {
  alert(`Wygrał gracz ${player}`);
}

let currentPlayer = 'X';
let gameOver = false;

board.forEach((cell) => {
  cell.addEventListener('click', handleCellClick);
});

function makeBtn() {
  const restartBtn = document.createElement('button');
  restartBtn.id = 'restartBtn';
  restartBtn.textContent = 'Restart';
  restartBtn.classList.add('button');
  const gameElem = document.querySelector('.game');
  gameElem.appendChild(restartBtn);
  restartBtn.addEventListener('click', restartGame);
}

function handleCellClick() {
  if (!gameOver && this.textContent === '') {
    this.textContent = currentPlayer;
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    if (!gameOver && currentPlayer === 'O') {
      makeMove();
    }
  }
  checkWinner();
}

function makeMove() {
  let moveMade = false;
  board.forEach((cell) => {
    if (!moveMade && cell.textContent === '') {
      cell.textContent = 'O';
      currentPlayer = 'X';
      moveMade = true;
      // checkWinner();
    }
  });
}

function checkWinner() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winningCombos.length; i++) {
    const [a, b, c] = winningCombos[i];
    if (
      board[a].textContent !== '' &&
      board[a].textContent === board[b].textContent &&
      board[b].textContent === board[c].textContent
    ) {
      gameOver = true;
      makeBtn();
      return msg(board[a].textContent);
    }
  }
  if (!gameOver && isBoardFull()) {
    alert('Remis!');
    makeBtn();
  }
}

function isBoardFull() {
  let fullBoard = true;
  board.forEach((cell) => {
    if (cell.textContent === '') {
      fullBoard = false;
    }
  });
  return fullBoard;
}

function restartGame() {
  board.forEach((cell) => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
  gameOver = false;
  restartBtn.remove();
}
