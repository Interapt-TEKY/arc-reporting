
$( document ).ready(function() {
    clickEvents();
    $("#xWin").html(xWin);
$("#oWin").html(yWin);
alert("X starts the game click on the blocks to place your X or O")
});
var turn = 1;
var xWin = 0;
var yWin = 0;
//XWINS//
var xWinRow1 = 0;
var xWinRow2 = 0;
var xWinRow3 = 0;
var xWinCol1 = 0;
var xWinCol2 = 0;
var xWinCol3 = 0;
var xWinDiag1 = 0;
var xWinDiag2 = 0;
//YWINS//
var yWinRow1 = 0;
var yWinRow2 = 0;
var yWinRow3 = 0;
var yWinCol1 = 0;
var yWinCol2 = 0;
var yWinCol3 = 0;
var yWinDiag1 = 0;
var yWinDiag2 = 0;

function clickEvents(){
    $("#newGame").on("click", function( ) {
        $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
     xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
});
     $("#0b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
           xWinRow1 = xWinRow1 + 1;
        xWinCol1 = xWinCol1 + 1;
        xWinDiag1 = xWinDiag1 + 1;
        $("#0b").html("X");
        $("#0b").prop("disabled", true);
        
     } if(turn % 2 == 1){
      $("#0b").html("O");
      $("#0b").prop("disabled", true);
       yWinRow1 = yWinRow1 + 1;
        yWinCol1 = yWinCol1 + 1;
        yWinDiag1 = yWinDiag1 + 1;
       };
       whoWins();
       catWins();
     });


$("#1b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#1b").html("X");
        $("#1b").prop("disabled", true);
xWinRow1 = xWinRow1 + 1;
xWinCol2 = xWinCol2 + 1;
     } if(turn % 2 == 1){
      $("#1b").html("O");
      $("#1b").prop("disabled", true);
      yWinRow1 = yWinRow1 + 1;
yWinCol2 = yWinCol2 + 1;
       };
       whoWins();
       catWins();
     });

     $("#2b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#2b").html("X");
        $("#2b").prop("disabled", true);
        xWinRow1 = xWinRow1 + 1;
        xWinCol3 = xWinCol3 + 1;
        xWinDiag2 = xWinDiag2 + 1;
     }if(turn % 2 == 1){
      $("#2b").html("O");
      $("#2b").prop("disabled", true);
      yWinRow1 = yWinRow1 + 1;
        yWinCol3 = yWinCol3 + 1;
        yWinDiag2 = yWinDiag2 + 1;
       };
       whoWins();
       catWins();
     });
     $("#3b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#3b").html("X");
        $("#3b").prop("disabled", true);
        xWinRow2 = xWinRow2 + 1;
        xWinCol1 = xWinCol1 + 1;
     } if(turn % 2 == 1){
      $("#3b").html("O");
      $("#3b").prop("disabled", true);
      yWinRow2 = yWinRow2 + 1;
        yWinCol1 = yWinCol1 + 1;
       };
       whoWins();
       catWins();
     });
     $("#4b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#4b").html("X");
        $("#4b").prop("disabled", true);
        xWinRow2 = xWinRow2 + 1;
        xWinCol2 = xWinCol2 + 1;
        xWinDiag1 = xWinDiag1 + 1;
        xWinDiag2 = xWinDiag2 + 1;
     } if(turn % 2 == 1){
      $("#4b").html("O");
      $("#4b").prop("disabled", true);
      yWinRow2 = yWinRow2 + 1;
        yWinCol2 = yWinCol2 + 1;
        yWinDiag1 = yWinDiag1 + 1;
        yWinDiag2 = yWinDiag2 + 1;
       };
       whoWins();
       catWins();
     });
     $("#5b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#5b").html("X");
        $("#5b").prop("disabled", true);
        xWinRow2 = xWinRow2 + 1;
        xWinCol3 = xWinCol3 + 1;
     } if(turn % 2 == 1){
      $("#5b").html("O");
      $("#5b").prop("disabled", true);
       yWinRow2 = yWinRow2 + 1;
        yWinCol3 = yWinCol3 + 1;
       };
       whoWins();
       catWins();
     });
     $("#6b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#6b").html("X");
        $("#6b").prop("disabled", true);
        xWinRow3 = xWinRow3 + 1;
        xWinCol1 = xWinCol1 + 1;
        xWinDiag2 = xWinDiag2 + 1;
     } if(turn % 2 == 1){
      $("#6b").html("O");
      $("#6b").prop("disabled", true);
      yWinRow3 = yWinRow3 + 1;
        yWinCol1 = yWinCol1 + 1;
        yWinDiag2 = yWinDiag2 + 1;
       };
       whoWins();
       catWins();
     });
     $("#7b").on("click", function() {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#7b").html("X");
        $("#7b").prop("disabled", true);
    xWinRow3 = xWinRow3 + 1;
    xWinCol2 = xWinCol2 + 1;
     } if(turn % 2 == 1){
      $("#7b").html("O");
      $("#7b").prop("disabled", true);
       yWinRow3 = yWinRow3 + 1;
    yWinCol2 = yWinCol2 + 1;
       };
       whoWins();
       catWins();
     });
     $("#8b").on("click", function( ) {
      turn = turn + 1;
       if (turn % 2 == 0) {
        $("#8b").html("X");
        $("#8b").prop("disabled", true);
        xWinRow3 = xWinRow3 + 1;
        xWinCol3 = xWinCol3 + 1;
        xWinDiag1 = xWinDiag1 + 1;
     } if(turn % 2 == 1){
      $("#8b").html("O");
      $("#8b").prop("disabled", true);
      yWinRow3 = yWinRow3 + 1;
        yWinCol3 = yWinCol3 + 1;
        yWinDiag1 = yWinDiag1 + 1;
       };
       whoWins();
       catWins();
     });
};
function whoWins(){
     //XWINS//
if (xWinRow1 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
    xWinRow1 = xWinRow1 * 0;
    //XWINS//
    xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
 if (xWinRow2 == 3) {
     alert("X WINS");
     xWin = xWin + 1;
     $("#xWin").html(xWin);
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
       xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
     turn = 1;
 }
if (xWinRow3 == 3) {
     alert("X WINS");
     xWin = xWin + 1;
     $("#xWin").html(xWin);
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
       xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
     turn = 1;
}
if (xWinCol1 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
if (xWinCol2 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
if (xWinCol3 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
if (xWinDiag1 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
if (xWinDiag2 == 3) {
    alert("X WINS");
    xWin = xWin + 1;
    $("#xWin").html(xWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
//YWINS//
if (yWinRow1 == 3) {
    alert("O WINS");
    yWin = yWin + 1;
    $("#oWin").html(yWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 0;
}
 if (yWinRow2 == 3) {
     alert("O WINS");
     yWin = yWin + 1;
     $("#oWin").html(yWin);
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
       xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
     turn = 0;
 }
if (yWinRow3 == 3) {
     alert("O WINS");
     yWin = yWin + 1;
     $("#oWin").html(yWin);
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
       xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
     turn = 0;
}
if (yWinCol1 == 3) {
    alert("O WINS");
    yWin = yWin + 1;$("#oWin").html(yWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 0;
}
if (yWinCol2 == 3) {
    alert("O WINS");
    yWin = yWin + 1;$("#oWin").html(yWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 0;
}
if (yWinCol3 == 3) {
    alert("O WINS");
   yWin = yWin + 1;
   $("#oWin").html(yWin);
   $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
   $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
     xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
   turn = 0;
}
if (yWinDiag1 == 3) {
    alert("O WINS");
    yWin = yWin + 1;
    $("#oWin").html(yWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 0;
}
if (yWinDiag2 == 3) {
    alert("O WINS");
    yWin = yWin + 1;
    $("#oWin").html(yWin);
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
    $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
      xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
//YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 0;
}

//XWINS//
// console.log( xWinRow2);
// console.log( xWinRow3);
// console.log( xWinCol1);
// console.log( xWinCol2);
// console.log( xWinCol3);
// console.log( xWinDiag1);
// console.log( xWinDiag2);
// //YWINS//
// console.log( yWinRow1);
// console.log( yWinRow2);
// console.log( yWinRow3);
// console.log( yWinCol1);
// console.log( yWinCol2);
// console.log( yWinCol3);
// console.log( yWinDiag1);
// console.log( yWinDiag2);
console.log(xWin);
    console.log(yWin);
};

function catWins(){
    if (turn == 10) {
    alert("CAT WINS");

     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").html("");
     $("#0b, #1b, #2b, #3b, #4b, #5b, #6b, #7b, #8b").prop("disabled", false);
     xWinRow1 = xWinRow1 * 0;
 xWinRow2  = xWinRow2 * 0;
 xWinRow3 = xWinRow3 * 0;
 xWinCol1 = xWinCol1 * 0;
 xWinCol2 = xWinCol2 * 0;
 xWinCol3 = xWinCol3 * 0;
 xWinDiag1 = xWinDiag1 * 0;
 xWinDiag2 = xWinDiag2 * 0;
 
 //YWINS//
   yWinRow1 = yWinRow1 * 0;
 yWinRow2  = yWinRow2 * 0;
 yWinRow3 = yWinRow3 * 0;
 yWinCol1 = yWinCol1 * 0;
 yWinCol2 = yWinCol2 * 0;
 yWinCol3 = yWinCol3 * 0;
 yWinDiag1 = yWinDiag1 * 0;
 yWinDiag2 = yWinDiag2 * 0;
    turn = 1;
}
};


  