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
var playerMoveCount = 0;
var gameOver = false;
var startPhase = true;

startGame();

function startGame() {
    controler.addEventListener("click", clickButton);
    cells.forEach((cell, index) => cell.addEventListener("click", () => clickCell(index)));
}

function clickButton() {
    resetGame();
    controler.textContent = "Reset Game";
    statusText.textContent = "Player X's turn make 2 moves";
}

function clickCell(index) {
    if (gameOver === true) {
        return;
    }
    if (boardPlacement[index] !== "") {
        return;
    }
    updateCell(cells[index], index);
    playerMoveCount++;
    moveCount++;
    if (startPhase && playerMoveCount < 2) {
        statusText.textContent = "Player X: make one more move";
        return;
    }
    var result = checkWin();
    if (result.win === true) {
        endGame(result);
        return;
    }
    if (playerMoveCount >= 2) {
        startPhase = false;
        setTimeout(computerMove, 1000);
    }
}

function updateCell(cell, index) {
    boardPlacement[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function computerMove() {
    if (gameOver === true) {
        return;
    }

    swopPlayer();
    let move = getComputerMove();
    updateCell(cells[move], move);
    moveCount++;
    swopPlayer();

    var result = checkWin();
    if (result.win === true) {
        endGame(result);
    }
    else {
        statusText.textContent = `Players turn`;
    }
}

function swopPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
}

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        let a = winConditions[i][0];
        let b = winConditions[i][1];
        let c = winConditions[i][2];

        let valA = boardPlacement[a];
        let valB = boardPlacement[b];
        let valC = boardPlacement[c];

        if (valA && valA === valB && valA === valC) {
            return { win: true, player: valA };
        }
    }

    if (moveCount >= 9) {
        return { win: false, player: null };
    }

    return { win: false, player: null };
}

function getComputerMove() {
    for(let i = 0; i < winConditions.length; i++) {
        let a = winConditions[i][0];
        let b = winConditions[i][1];
        let c = winConditions[i][2];
        if (boardPlacement[a] === "O" && boardPlacement[b] === "O" && boardPlacement[c] === ""){
            return c;
        }
        if (boardPlacement[a] === "O" && boardPlacement[c] === "O" && boardPlacement[b] === ""){
            return b;
        }
        if (boardPlacement[b] === "O" && boardPlacement[c] === "O" && boardPlacement[a] === ""){
            return a;
        }
    }
    for(let i = 0; i < winConditions.length; i++) {
        let a = winConditions[i][0];
        let b = winConditions[i][1];
        let c = winConditions[i][2];
        if (boardPlacement[a] === "X" && boardPlacement[b] === "X" && boardPlacement[c] === ""){
            return c;
        } 
        if (boardPlacement[a] === "X" && boardPlacement[c] === "X" && boardPlacement[b] === ""){
            return b;
        } 
        if (boardPlacement[b] === "X" && boardPlacement[c] === "X" && boardPlacement[a] === ""){
            return a;
        }
    }
    if(boardPlacement[4] === ""){
        return 4;
    } 
    for(let i = 0; i < boardPlacement.length; i++) {
        if (boardPlacement[i] === "") {
            return i;
        }
    }
}

function resetGame() {
    boardPlacement = Array(9).fill("");
    currentPlayer = "X";
    moveCount = 0;
    playerMoveCount = 0;
    gameOver = false;
    startPhase = true;
    cells.forEach(cell => {
        cell.textContent = "";
    });
    controler.textContent = "Start";
    statusText.textContent = "Click Start to begin!";
}

function endGame(result) {
    gameOver = true;
    if(result.player) {
        statusText.textContent = "Player " + result.player + " wins!";
    } 
    else {
        statusText.textContent = "It's a draw!";
    }
    controler.textContent = "Restart Game";
}