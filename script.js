let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            displayResult(`${currentPlayer} wins!`);
            return;
        }
    }

    if (!gameBoard.includes('')) {
        displayResult('It\'s a draw!');
        return;
    }
}

function displayResult(result) {
    gameActive = false;
    document.getElementById('result').textContent = result;
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    document.getElementById('result').textContent = '';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
}
