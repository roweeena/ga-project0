
$(document).ready(function (){

  //***** Declaring all variables here *******//

let cellMark = 0;
let playerXScore = 0;
let playerOScore= 0;
const playerX = $('#x');
const playerO = $('#o');
const x = $('<img>').attr('src', 'css/img/icons8-leaf-100.png');
const o = $('<img>').attr('src', 'css/img/icons8-flower-doodle-100.png');


//********* Choose Player **********//

$('#x, #o').on('click', function (){
  $('.player-button').addClass('playerClick');
  // console.log('click to choose');
  if (this.id === 'x') {
    playerX.css( 'opacity', '1');
    playerO.css( 'opacity', '0.5');
     $('.cell').removeClass('playFlower');
    $('.cell').addClass('playLeaf');

  } else if (this.id=== 'o') {
    playerO.css( 'opacity', '1');
    playerX.css( 'opacity', '0.5');
     $('.cell').addClass('playFlower');
     $('.cell').removeClass('playLeaf');
  }
  $('h3').hide();
});

              // ******** GAME TIME  ********* //
  //this is the point where I started flailing like a confused T-Rex

//Mark each cell with image
$('.cell').on('click', function (){
  if (!$('.player-button').hasClass('playerClick')){
    alert("Please select an icon before you play.");
  }else if ($('.cell').hasClass('gameOver')) {
    alert("Press restart to start over");
  } else if ($(this).html() === x || $(this).html() === o){
  } else if ($(this).hasClass('playLeaf')) {
    $(this).addClass('leaf');
    $('.cell').removeClass('playLeaf');
    $('#board').on('click', function (event) {
         $target = $(event.target);
            $target.addClass('leaf');
            $target.removeClass('flower');
        });
    playerO.css( 'opacity', '1');
    playerX.css( 'opacity', '0.5');
    cellMark = cellMark + 1;
  } else {
    $(this).addClass('flower');
    $('.cell').addClass('playLeaf');
    $('#board').on('click', function (event) {
       $target = $(event.target);
           $target.addClass('flower');
           $target.removeClass('leaf');
       });
    playerX.css( 'opacity', '1');
    playerO.css( 'opacity', '0.5');
    cellMark = cellMark + 1;
  }

  checkWin();
});
//check if text in cells are equal in each row/diagonal
 const checkWin = function(){
//check X wins - rows
  if ($("#0").hasClass('leaf')&& $("#1").hasClass('leaf') && $("#2").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
   else if($("#3").hasClass('leaf')&& $("#4").hasClass('leaf') && $("#5").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
   else if($("#6").hasClass('leaf')&& $("#7").hasClass('leaf') && $("#8").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   } // columns
  else if ($("#0").hasClass('leaf')&& $("#3").hasClass('leaf') && $("#6").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
  else if ($("#1").hasClass('leaf')&& $("#4").hasClass('leaf') && $("#7").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
   else if($("#2").hasClass('leaf')&& $("#5").hasClass('leaf') && $("#8").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   } // diagonally
   else if($("#0").hasClass('leaf')&& $("#4").hasClass('leaf') && $("#8").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
  else if ($("#2").hasClass('leaf')&& $("#4").hasClass('leaf') && $("#6").hasClass('leaf')){
     alert("🍃 has won! Press restart to play again.");
     playerXScore = playerXScore + 1;
     $('.first-player').text("🍃's score: " + playerXScore);
   }
    // check O wins
   if ($("#0").hasClass('flower')&& $("#1").hasClass('flower') && $("#2").hasClass('flower')){
     alert("🌸 has won! Press restart to play again.");
     playerOScore = playerOScore + 1;
     $('.second-player').text("🌸's score: " + playerOScore);
   }
   else if($("#3").hasClass('flower')&& $("#4").hasClass('flower') && $("#5").hasClass('flower')){
     alert("🌸 has won! Press restart to play again.");
     playerOScore = playerOScore + 1;
     $('.second-player').text("🌸's score: " + playerOScore);
   }
   else if($("#6").hasClass('flower')&& $("#7").hasClass('flower') && $("#8").hasClass('flower')){
     alert("🌸 has won! Press restart to play again.");
     playerOScore = playerOScore + 1;
     $('.second-player').text("🌸's score: " + playerOScore);
   } // columns
  else if ($("#0").hasClass('flower')&& $("#3").hasClass('flower') && $("#6").hasClass('flower')){
    alert("🌸 has won! Press restart to play again.");
    playerOScore = playerOScore + 1;
    $('.second-player').text("🌸's score: " + playerOScore);
   }
  else if ($("#1").hasClass('flower')&& $("#4").hasClass('flower') && $("#7").hasClass('flower')){
    alert("🌸 has won! Press restart to play again.");
    playerOScore = playerOScore + 1;
    $('.second-player').text("🌸's score: " + playerOScore);
   }
   else if($("#2").hasClass('flower')&& $("#5").hasClass('flower') && $("#8").hasClass('flower')){
     alert("🌸 has won! Press restart to play again.");
     playerOScore = playerOScore + 1;
     $('.second-player').text("🌸's score: " + playerOScore);
   } // diagonally
   else if($("#0").hasClass('flower')&& $("#4").hasClass('flower') && $("#8").hasClass('flower')){
     alert("🌸 has won! Press restart to play again.");
     playerOScore = playerOScore + 1;
     $('.second-player').text("🌸's score: " + playerOScore);
   }
  else if ($("#2").hasClass('flower')&& $("#4").hasClass('flower') && $("#6").hasClass('flower')){
    alert("🌸 has won! Press restart to play again.");
    playerOScore = playerOScore + 1;
    $('.second-player').text("🌸's score: " + playerOScore);
  }
//if draw
  if (cellMark === 9){
    alert("It's a tie. Hit restart to start over.")
  }

  if ($(this).hasClass('leaf') || $(this).hasClass('flower') ||  cellMark == 9 ) {
    $('.cell').off("click");
    $('#board').off("click");
    $('.cell').addClass('gameOver');
  }

  if (playerXScore === 3 || playerOScore === 3) {
    $('#audio').attr('src','css/img/Omae Wa Mou.mp3','volume', 0.4,'autoplay');

  }
};

// ******** RESTART GAME *********//
$('#restart').click(function (){
  $('.player-button').removeClass('playerClick');
  playerO.css( 'opacity', '0.5');
  playerX.css( 'opacity', '0.5');
  $('.cell').removeClass('gameOver');
  $('.cell').removeClass('playLeaf');
  $('.cell').removeClass('playFlower');
  $('.cell').removeClass('leaf');
  $('.cell').removeClass('flower');
  $('.cell').empty('X');
  $('.cell').empty('O');
  cellMark = 0;
  $('h3').show();
});

});
