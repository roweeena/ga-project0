// console.log('wow')

$(document).ready(function (){

  //***** Declaring all variables here *******//
let board = [ '','','','','','','','',''];

let currentplayer = 0;
let cellMark = 0;
let playerXScore = 0;
let playerOscore= 0;
const playerX = $('#x');
const playerO = $('#o');
const leaf = $('<img>').attr('src', 'css/img/icons8-leaf-100.png');
const sakura = $('<img>').attr('src', 'css/img/icons8-flower-doodle-100.png');
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


//********* Choose Player **********//


$('#x, #o').on('click', function (){
  if (this.id === 'x') {
    playerX.css( 'opacity', '1');
    playerO.css( 'opacity', '0.5');
    $('.player-button').addClass('playerClick');
     currentPlayer = 1;
    $('.cell').addClass('playLeaf');
  } else if (this.id=== 'o') {
    playerO.css( 'opacity', '1');
    playerX.css( 'opacity', '0.5');
    $('.player-button').addClass('playerClick');
     currentPlayer = 2;
     $('.cell').removeClass('playLeaf');
  }
});

//Mark each cell with image
$('.cell').on('click', function (){
if (!$('.player-button').hasClass('playerClick')){
  alert("Please select an icon before you play.");
}else if ($('.cell').hasClass('gameOver')) {
  $('.announce').html("Press restart to start over");

} else if ($('.cell').html()!== ''){}
else if ($(this).hasClass('playLeaf')){
  $(this).html(leaf);
  $('.cell').removeClass('playLeaf');
  playerO.css( 'opacity', '1');
  playerX.css( 'opacity', '0.5');
  cellMark = cellMark + 1;
} else{
  $(this).html(sakura);
  $('.cell').addClass('playLeaf');

  playerX.css( 'opacity', '1');
  playerO.css( 'opacity', '0.5');

  cellMark = cellMark + 1;
}
});


// ******** GAME TIME - MAIN FUNCTION ********* //

const checkWin = function(){
  //some combinations
  //log score
  //if draw try again
}

//restart game

$('#restart').click(function (){
  location.reload();
});









});
