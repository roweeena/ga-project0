//sshow who won or if tied
//log score
//restart the game
// track clicks
// update game state
// validate win/with
// stop the game or change active player
// reflec the update made on UI
// repeat
$(document).ready(function (){

const displayMessage = $('announce');
let gameStatus = true;

let board  = ['','','','','','','','',''];

let currentPlayer = "X";
let player2 = "O";


const cellPlayed  = function (clickedCell, clickedCellIndex) {
board[clickedCellIndex] = currentPlayer;
clickedCell.html(currentPlayer);
}

const playerChange =  function() {
currentPlayer = currentPlayer === "X" ? "O" :"X";
displayMessage.html("It's " + currentPlayer +"'s turn");
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];
const resultValidate = function () {
    let gameWon = false; //start off false
    for (let i=0; i<=7; i++) {
      const wins = winningConditions[i];
      let firstScen = board[wins[0]];
      let secondScen = board[wins[1]];
      let thirdScen = board[wins[2]];
      if (firstScen === '' || secondScen === '' || thirdScen === '') {
      continue;
      }
      if(firstScen === secondScen && secondScen === thirdScen) {
        gameWon = true;
        break;
      };
    };

    if(gameWon) {
      displayMessage.html(currentPlayer + " has won!")
      gameStatus = false;
      return
    }
  // log score
};

const cellClick = function (e) {
//check if cell has been clicked
const clickedCell = e.target;
const clickedCellIndex  = Number($('cell'));
if (board[clickedCellIndex] !== '' || !gameStatus){
  return;
};
cellPlayed(cellClick, clickedCellIndex);
resultValidate();
};

const restartGame = function () {
gameStatus = true;
currentPlayer = $('#player-1');
board = ['','','','','','','','',''];
displayMessage.html("It's " + currentPlayer + "'s turn.")
$('cell').forEach(cell => cell.html(""));
};

// event listeners there
$('.cell').on('click',cellClick);

$('#restart').on('click',restartGame);
});
