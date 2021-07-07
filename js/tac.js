// console.log('wow')

$(document).ready(function (){

  //***** Declaring all variables here *******//

let cellMark = 0;

const playerX = $('#x');
const playerO = $('#o');
// const leaf = $('<img>').attr('src', 'css/img/icons8-leaf-100.png');
// const sakura = $('<img>').attr('src', 'css/img/icons8-flower-doodle-100.png');



//********* Choose Player **********//


$('#x, #o').on('click', function (){
  $('.player-button').addClass('playerClick');
  // console.log('click to choose');
  if (this.id === 'x') {
    playerX.css( 'opacity', '1');
    playerO.css( 'opacity', '0.5');
     currentPlayer = 1;
     $('.cell').removeClass('playFlower');
    $('.cell').addClass('playLeaf');

  } else if (this.id=== 'o') {
    playerO.css( 'opacity', '1');
    playerX.css( 'opacity', '0.5');
     currentPlayer = 2;
     $('.cell').addClass('playFlower');
     $('.cell').removeClass('playLeaf');

  }
});

// ******** GAME TIME  ********* //
//Mark each cell with image
$('.cell').on('click', function (){
  if (!$('.player-button').hasClass('playerClick')){
    alert("Please select an icon before you play.");
  }else if ($('.cell').hasClass('gameOver')) {
    $('.announce').html("Press restart to start over");
  } else if ($(this).text() === 'X' || $(this).text() === 'O'){
  } else if ($(this).hasClass('playLeaf')) {
    $(this).text("X");
    $('.cell').removeClass('playLeaf');
    playerO.css( 'opacity', '1');
    playerX.css( 'opacity', '0.5');
    cellMark = cellMark + 1;
  } else {
    $(this).text("O");
    $('.cell').addClass('playLeaf');
    playerX.css( 'opacity', '1');
    playerO.css( 'opacity', '0.5');
    cellMark = cellMark + 1;
  }
  checkWin();
});
 const checkWin = function(){
   let playerXScore = 0;
   let playerOscore= 0;

  if ($(this).text() === '' || $(this).text() === ''){
    //continue to play game
  } //check if text in cells are equal in each row/diagonal
//check X wins - rows
  else if ($("#0,#1,#2").text() === "XXX"){
     alert("Player X has won!");
   }
   else if($("#3,#4,#5").text() === "XXX"){
     alert("Player X has won!");
   }
   else if($("#6,#7,#8").text() === "XXX"){
     alert("Player X has won!");
   } // columns
  else if ($("#0,#3,#6").text() === "XXX"){
     alert("Player X has won!");
   }
  else if ($("#1,#4,#7").text() === "XXX"){
     alert("Player X has won!");
   }
   else if($("#2,#5,#8").text() === "XXX"){
     alert("Player X has won!");
   } // diagonally
   else if($("#0,#4,#8").text() === "XXX"){
     alert("Player X has won!");
   }
  else if ($("#2,#4,#6").text() === "XXX"){
     alert("Player X has won!");
   } // check O wins
   if ($("#0,#1,#2").text() === "OOO"){
     alert("Player O has won!");

   }
   else if($("#3,#4,#5").text() === "OOO"){
     alert("Player O has won!");
   }
   else if($("#6,#7,#8").text() === "OOO"){
     alert("Player O has won!");
   } // columns
  else if ($("#0,#3,#6").text() === "OOO"){
    alert("Player O has won!");
   }
  else if ($("#1,#4,#7").text() === "OOO"){
    alert("Player O has won!");
   }
   else if($("#2,#5,#8").text() === "OOO"){
     alert("Player O has won!");
   } // diagonally
   else if($("#0,#4,#8").text() === "OOO"){
     alert("Player O has won!");
   }
  else if ($("#2,#4,#6").text() === "OOO"){
    alert("Player O has won!");
    playerOScore = playerOscore + 1;
  } else if (cellMark == 9){
    alert("It's a tie. Hit restart to start over.")
  }
  if ($('.cell').text() === "XXX" || $('.cell').text() === "OOO" ||  cellMark == 9 ) {
    $('.cell').off("click");
    $('.cell').addClass('gameOver');
  }
logScore();
};

const logScore = function () {
  if ($('.cell').hasClass('gameOver')){
    //do nothing
  } else if ($('.cell').text() === "XXX" ){
    playerXScore = playerXScore + 1;
    $('span#player1-score').html(playerXScore );
    //animate leaves spinning
  } else if ($('.cell').text() === "OOO") {
    playerOScore = playerOScore + 1;
    $('span#player2-score').html( playerOScore );
    //animate flowers spinning
  }

}

//restart game

$('#restart').click(function (){
  $('.player-button').removeClass('playerClick');
  playerO.css( 'opacity', '0.5');
  playerX.css( 'opacity', '0.5')
  $('.cell').removeClass('playLeaf');
  $('.cell').removeClass('playFlower');
  $('.cell').empty('X');
  $('.cell').empty('O');
});









});
