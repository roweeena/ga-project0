let playerTurn = 1;
let cellMark = 0;
let playerOScore = 0
let playerXScore = 0
 $(document).ready(function() {

////////CHOOSING PLAYER//////////

$('#x, #o').on('click', function() {
    $('.player-button').addClass('playerClick');
    console.log(this)
    if (this.id === 'x') { //if player id is "x", play as the leaf
        $('#x').css('opacity', '1');
        $('#o').css('opacity', '0.5');
        playerTurn = 1;
    } else if (this.id === 'o') { // or if play as the flower
        $('#o').css('opacity', '1');
        $('#x').css('opacity', '0.5');
        playerTurn = 2;
    }
    $('h3').hide();
});

///////SWITCHING TURNS///////////
const cellClick = function(){
   $('.cell').click(function() {
     if (!$('.player-button').hasClass('playerClick')) {
         alert("Please select an icon before you play.");
     } else if ($('.cell').hasClass('gameOver')) {
         alert("Press restart to start over");
     } else if ($(this).hasClass('leaf') || $(this).hasClass('flower')) {
        console.log($(this))
       return;
     } else if(playerTurn === 1) {
         $(this).addClass("leaf");
         playerTurn = 2;
         cellMark++;
         checkWin('leaf', '🍃')
       }
       else {
           $(this).addClass("flower");
           playerTurn = 1;
           cellMark++;
           checkWin('flower','🌸')
       }
    })
}
cellClick()

const checkWin = function (symbol, player){
  if($('#0').hasClass(symbol)&& $('#1').hasClass(symbol)&& $('#2').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#3').hasClass(symbol)&& $('#4').hasClass(symbol)&& $('#5').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#6').hasClass(symbol)&& $('#7').hasClass(symbol)&& $('#8').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#0').hasClass(symbol)&& $('#4').hasClass(symbol)&& $('#8').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#2').hasClass(symbol)&& $('#4').hasClass(symbol)&& $('#6').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#0').hasClass(symbol)&& $('#3').hasClass(symbol)&& $('#6').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#1').hasClass(symbol)&& $('#4').hasClass(symbol)&& $('#7').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if ($('#2').hasClass(symbol)&& $('#5').hasClass(symbol)&& $('#8').hasClass(symbol)) {
    $(".announce").text(`${player} has won! Press restart to play again.`);
  } else if (!$(".announce").text().includes("won") && cellMark === 9) {
      $(".announce").text("It's a tie! Hit restart to start over.")
  }
  ////Disabling the board
  if ($(".announce").text().includes("won") || $(".announce").text().includes("tie")) {
      $('.cell').off("click");
      $('#board').off("click");
      $('.cell').addClass('gameOver');
  }
  ////displaying score////
  if ($(".announce").text().includes("🌸 has won")) {
    playerOScore++
    $('.second-player').text("🌸's score: " + playerOScore);
  } else if ($(".announce").text().includes("🍃 has won")){
    playerXScore++
    $('.first-player').text("🍃's score: " + playerXScore);
  }

  if ($(".first-player").text().includes("🍃's score: 3") || $(".second-player").text().includes("🌸's score: 3")) {
      alert("Congratulations, you've unlocked the secret🎉! Type 'pikachu' see what happens.");
  }

}

///////RESTART///////
    $('#restart').click(function() {
      $('.player-button').removeClass('playerClick');
      cellMark = 0;
      $('.cell').removeClass('leaf');
      $('.cell').removeClass('flower');
      $('.cell').removeClass('gameOver');
      $('#x').css('opacity', '0.5');
      $('#o').css('opacity', '0.5');
      $('h3').show();
      $('.announce').empty();
      cellClick();
    });
 })
