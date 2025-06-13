const box = document.getElementById("board");
const control = document.getElementById("control");

var board = Array(9).fill("");
var currentPlayer = "X";
var gameOver = false;
var moveCount = 0;

