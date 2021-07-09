$(document).ready(function() {

    //***** Declaring all variables here *******//
    let player =0;
    let cellMark = 0;
    let playerXScore = 0;
    let playerOScore = 0;
    const playerX = $('#x');
    const playerO = $('#o');
    const x = $('<img>').attr('src', 'css/img/icons8-leaf-100.png');
    const o = $('<img>').attr('src', 'css/img/icons8-flower-doodle-100.png');

    //********* Choose Player **********//

    $('#x, #o').on('click', function() {
        $('.player-button').addClass('playerClick');
        if (this.id === 'x') { //if player id is "x", play as the leaf
            playerX.css('opacity', '1');
            playerO.css('opacity', '0.5');
            $('.cell').removeClass('playFlower');
            $('.cell').addClass('playLeaf');
            player = 1;
        } else if (this.id === 'o') { // or if play as the flower
            playerO.css('opacity', '1');
            playerX.css('opacity', '0.5');
            $('.cell').addClass('playFlower');

            player = 2;
        }
        $('h3').hide();
    });

    // ******** GAME TIME  ********* //
    //this is the point where I started flailing like a confused T-Rex

    //Mark each cell with image
    const cellClick = function () {
    $('.cell').click(function (){
        if (!$('.player-button').hasClass('playerClick')) {
            alert("Please select an icon before you play.");
        } else if ($('.cell').hasClass('gameOver')) {
            alert("Press restart to start over");
        } else if ($(this).html() === x || $(this).html() === o) {
        } else if ($(this).hasClass('playLeaf')) {
            $(this).addClass('leaf'); //marking each clicked cell with the leaf class and appending the cell with the image
            $('.cell').removeClass('playLeaf');
            $('#board').on('click', function(event) {
                $target = $(event.target);
                $target.addClass('leaf');
                $target.removeClass('flower');
            });
            playerO.css('opacity', '1'); //toggle player button to signify turn
            playerX.css('opacity', '0.5');
            cellMark = cellMark + 1; // keep track of clicked cell
        } else {
            $('.cell').addClass('playLeaf'); //marking each clicked cell with the flower class and appending the cell with the image
            $('#board').on('click', function(event) {
                $target = $(event.target);
                $target.addClass('flower');
                $target.removeClass('leaf');
            });
            playerX.css('opacity', '1');
            playerO.css('opacity', '0.5');
            cellMark = cellMark + 1;
        }

        checkWin();
    });
  };
    const checkWin = function() {
        //check X wins - rows
        if ($('.cell').hasClass('gameOver')) {
            alert("Press restart to start over"); //if game is over, alert to start over
        } else if ($('#0.leaf,#1.leaf,#2.leaf').length === 3) {
          playerXScore = playerXScore + 1; //add up score
          $('.first-player').text("🍃's score: " + playerXScore); // log it to the div
          $(".announce").text("🍃 has won! Press restart to play again.");
        } else if ($('#3.leaf,#4.leaf,#5.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } else if ($('#6.leaf,#7.leaf,#8.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } // columns
        else if ($('#0.leaf,#3.leaf,#6.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } else if ($('#1.leaf,#4.leaf,#7.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } else if ($('#2.leaf,#5.leaf,#8.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } // diagonally
        else if ($('#0.leaf,#4.leaf,#8.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        } else if ($('#2.leaf,#4.leaf,#6.leaf').length === 3) {
          playerXScore = playerXScore + 1;
          $('.first-player').text("🍃's score: " + playerXScore);
          $(".announce").text("🍃 has won! Press restart to play again.");
        }
        // check O wins
         if ($('#0.flower,#1.flower,#2.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } else if ($('#3.flower,#4.flower,#5.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } else if ($('#6.flower,#7.flower,#8.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } // columns
        else if ($('#0.flower,#3.flower,#6.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } else if ($('#1.flower,#4.flower,#7.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } else if ($('#2.flower,#5.flower,#8.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } // diagonally
        else if ($('#0.flower,#4.flower,#8.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        } else if ($('#2.flower,#4.flower,#6.flower').length === 3) {
          playerOScore = playerOScore + 1;
          $('.second-player').text("🌸's score: " + playerOScore);
          $(".announce").text("🌸 has won! Press restart to play again.");
        }

         if ($(".announce").text().includes("won")) { //don't do anything
         } else if (cellMark === 9) {
          $(".announce").text("It's a tie! Hit restart to start over.")
        }
          //disable board when game is over
        if ($(".announce").text().includes("won") || $(".announce").text().includes("tie")) {
            $('.cell').off("click");
            $('#board').off("click");
            $('.cell').addClass('gameOver');
        }
    };
    // ******** RESTART GAME *********//
    $('#restart').click(function() {
        cellMark = 0;
        $('.player-button').removeClass('playerClick');
        playerO.css('opacity', '0.5');
        playerX.css('opacity', '0.5');
        $('.cell').removeClass('gameOver');
        $('.cell').removeClass('playLeaf');
        $('.cell').removeClass('playFlower');
        $('.cell').removeClass('leaf');
        $('.cell').removeClass('flower');
        $('.announce').empty();
        $('h3').show();
        $('.cell').on("click");
        $('#board').on("click");
        cellClick();

     });

cellClick();
});
