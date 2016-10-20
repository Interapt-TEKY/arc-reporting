var gameState = true
var turnCount = 9
var xRow1=0
var xRow2=0
var xRow3=0
var xCol1=0
var xCol2=0
var xCol3=0
var xDiag1=0
var xDiag2=0
var oRow1=0
var oRow2=0
var oRow3=0
var oCol1=0
var oCol2=0
var oCol3=0
var oDiag1=0
var oDiag2=0
$(function(){
 
    
$('#box1-1').click(function(){
 if (gameState == true) {
        $(this).addClass("x").disabled = true;
        gameState = false;
        xRow1++;
        xDiag1++;
        xCol1++;
        console.log(xRow1,xDiag1, xCol1);
        xWins();
        turnCount--;
        tieGame();
         player2();
         

    }
    else if (gameState == false) {
        $(this).addClass("o").disabled = true;
        gameState = true;
        oRow1++;
        oDiag1++;
        oCol1++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }

});
$('#box1-2').click(function(){
     if (gameState == true) {
        $(this).addClass("x").disabled = true;
        gameState = false;
        xRow1++;
        xCol2++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o").disabled = true;
        gameState = true;
        oRow1++;
        oCol2++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }

});
$('#box1-3').click(function(){
     if (gameState == true) {
        $(this).addClass("x").disabled = true;
        gameState = false;
        xRow1++;
        xDiag2++;
        xCol3++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o").disabled = true;
        gameState = true;
        oRow1++;
        oDiag2++;
        oCol3++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }
 
});
$('#box2-1').click(function(){
    if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow2++;
        xCol1++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow2++;
        oCol1++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 

    }

});
$('#box2-2').click(function(){
     if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow2++;
        xCol2++;
        xDiag1++;
        xDiag2++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow2++;
        oCol2++;
        oDiag1++;
        oDiag2++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }
 
});
$('#box2-3').click(function(){
  if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow2++;
        xCol3++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow2++;
        oCol3++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }
  
});
$('#box3-1').click(function(){
     if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow3++;
        xCol1++;
        xDiag2++;
        xWins();
        turnCount--;
        tieGame();
         player2();
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow3++;
        oCol1++;
        oDiag2++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }

});
$('#box3-2').click(function(){
    if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow3++;
        xCol2++;
        xWins();
        turnCount--;
        tieGame();
         player2();  
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow3++;
        oCol2++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }

});
$('#box3-3').click(function(){
     if (gameState == true) {
        $(this).addClass("x");
        gameState = false;
        xRow3++;
        xCol3++;
        xDiag1++;
        xWins();
        turnCount--;
        tieGame();
    }
    else if (gameState == false) {
        $(this).addClass("o");
        gameState = true;
        oRow3++;
        oCol3++;
        oDiag1++;
        oWins();
        turnCount--;
        tieGame();
        player1(); 
    }

});
});
var xwins=0
var owins=0
function xWins() {
    if(xRow1==3||xRow2==3||xRow3==3||xCol1==3||xCol2==3||xCol3==3||xDiag1==3||xDiag2==3) {
        xwins++
        alert("X Wins! Click below to start a new game!");
        $("#xScore").text(xwins);
        $("#box1-1").removeClass("x o");
        $("#box1-2").removeClass("x o");
        $("#box1-3").removeClass("x o");
        $("#box2-1").removeClass("x o");
        $("#box2-2").removeClass("x o");
        $("#box2-3").removeClass("x o");
        $("#box3-1").removeClass("x o");
        $("#box3-2").removeClass("x o");
        $("#box3-3").removeClass("x o");
         xRow1=0
        xRow2=0
         xRow3=0
         xCol1=0
         xCol2=0
         xCol3=0
         xDiag1=0
         xDiag2=0
         oRow1=0
         oRow2=0
         oRow3=0
         oCol1=0
         oCol2=0
         oCol3=0
         oDiag1=0
         oDiag2=0
        turnCount=9;
        gameState=true;
        
    };
};
function oWins(){
     if(oRow1==3||oRow2==3||oRow3==3||oCol1==3||oCol2==3||oCol3==3||oDiag1==3||oDiag2==3) {
        owins++;
        alert("O Wins!!! Click below to start a new game!"); 
        $("#oScore").text(owins);
        $("#box1-1").removeClass("x o");
        $("#box1-2").removeClass("x o");
        $("#box1-3").removeClass("x o");
        $("#box2-1").removeClass("x o");
        $("#box2-2").removeClass("x o");
        $("#box2-3").removeClass("x o");
        $("#box3-1").removeClass("x o");
        $("#box3-2").removeClass("x o");
        $("#box3-3").removeClass("x o");
         xRow1=0;
        xRow2=0;
         xRow3=0;
         xCol1=0;
         xCol2=0;
         xCol3=0;
         xDiag1=0;
         xDiag2=0;
         oRow1=0;
         oRow2=0;
         oRow3=0;
         oCol1=0;
         oCol2=0;
         oCol3=0;
         oDiag1=0;
         oDiag2=0;
        turnCount=9;
        gameState=false;
        };
       
        
};


function tieGame() {
    if(turnCount==0){
    alert("TIE GAME Cick below to start a new game!")
    };
};

function player1() {
    $("#player").text("Player 1's Turn!");
}
function player2() {
    $("#player").text("Player 2's Turn!"); 
};