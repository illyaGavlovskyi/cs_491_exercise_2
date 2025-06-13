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
var gameOver = false;
var moveCount = 0;

startGame();

function startGame() {
    cells.forEach((cell => cell.addEventListener("click", clickCell())));
    
}

function clickCell() {

}

function updateCell(cell, index){

}

function swopPlayer() {

}

function checkWin() {

}

function resetGame() {

}