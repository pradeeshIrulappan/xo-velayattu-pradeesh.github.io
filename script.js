let currentPlayer = 'X'; // Player starts first in single-player mode
let gameBoard = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cellIndex) {
    if (gameBoard[cellIndex] === '' && currentPlayer === 'X') {
        gameBoard[cellIndex] = currentPlayer;
        document.getElementsByClassName('cell')[cellIndex].innerText = currentPlayer;
        if (checkWin()) {
            showResult(`Vetri! Player ${currentPlayer} wins!`);
        } else if (gameBoard.every(cell => cell !== '')) {
            showResult('Draw! Puthu Velayattu?');
        } else {
            currentPlayer = 'O';
            setTimeout(opponentMove, 500); // Introduce delay for better game experience
        }
    }
}

function opponentMove() {
    let emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') acc.push(index);
        return acc;
    }, []);

    let randomIndex = Math.floor(Math.random() * emptyCells.length);
    let randomCellIndex = emptyCells[randomIndex];

    gameBoard[randomCellIndex] = 'O';
    document.getElementsByClassName('cell')[randomCellIndex].innerText = 'O';
    if (checkWin()) {
        showResult('Opponent wins! Puthu Velayattu?');
    } else if (gameBoard.every(cell => cell !== '')) {
        showResult('Draw! Puthu Velayattu?');
    }
    currentPlayer = 'X'; // After opponent's move, it's user's turn
}

function checkWin() {
    return winConditions.some(condition => {
        return condition.every(index => gameBoard[index] === currentPlayer);
    });
}

function resetGame() {
    currentPlayer = 'X'; // Reset to player starts first
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    Array.from(document.getElementsByClassName('cell')).forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#fff'; // Reset background color
    });
    hideResult();
}

function showResult(message) {
    document.getElementById('resultMessage').innerText = message;
    document.getElementById('resultScreen').classList.add('show');
}

function hideResult() {
    document.getElementById('resultScreen').classList.remove('show');
}
