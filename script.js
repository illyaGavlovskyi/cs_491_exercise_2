const cells = document.querySelectorAll('#board td');
const statusText = document.getElementById("statusText");
const controler = document.getElementById("controler");
const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
]

var boardPlacement = Array(9).fill("");
var currentPlayer = "X";
var moveCount = 0;
var gameOver = false;
var startPhase = true;

startGame();

function startGame() {
    controler.addEventListener("click", clickButton);     
    cells.forEach((cell => cell.addEventListener("click", clickCell)));
}

function clickButton() {
    resetGame();
    controler.textContent = "Reset Game";
    statusText.textContent = "Player X's turn make 2 moves";
}

function clickCell() {
    if(gameOver) {
        return;
    }

}

function updateCell(cell, index){

}

function swopPlayer() {

}

function checkWin() {

}

function resetGame() {
    boardPlacement = Array(9).fill("");
    currentPlayer = "X";
    moveCount = 0;
    playerMoveCount = 0;
    gameOver = false;
    startPhase = true;
    controler.textContent = "Start";
    statusText.textContent = "Click Start to begin!";
}

