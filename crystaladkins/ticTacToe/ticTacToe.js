var xTurn = true;
var oTurn = false;
var spaceLoc;
var lastWin = 0;
var turns = 0;
var xWins = 0;
var oWins = 0;
var occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


//check to see if space has been used
function checkSpace() {

    if (occupied[spaceLoc] < 1) {
        setSpace();

    }
    else {
        alert("This space is already occupied, choose another space please.");
    }

}
//place mark in box, set number for array to check for winner
function setSpace() {
    if (xTurn == true) {
        $("#" + spaceLoc).text("X");
        occupied[spaceLoc] = 5;

    }
    else {
        $("#" + spaceLoc).text("O");
        occupied[spaceLoc] = 1;


    }
    turns++;
    checkTurns();
}
//check to see if there was a tie
function checkTurns() {
    if (turns == 9) {
        alert("It's a tie, try again?");
        reset();
    }
    else if (xTurn == true) {
        xTurn = false;
        oTurn = true;
        $("#turn").text("It's O's Turn");
        winner();
    }
    else if (oTurn == true) {
        oTurn = false;
        xTurn = true;
        $("#turn").text("It's X's Turn");
        winner();
    }
}

//This will handle how to tell if someone has won 
function winner() {
    for (i = 0; i < winningCombo.length; i++) {
        if ((occupied[(winningCombo[i][0])]) + (occupied[(winningCombo[i][1])]) + (occupied[(winningCombo[i][2])]) == 15) {
            alert("X Wins! Better luck next time, O");
            xWins++;
            lastWin = 1;
            $("#xScore").text(xWins);
            $("#restartGame").show();
            occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            turns = 0;
            console.log(turns);
            for (x = 0; x <= 8; x++) {
                $("#" + x).text(" ");
            }
            lastWinner();
        }
        else if ((occupied[(winningCombo[i][0])]) + (occupied[(winningCombo[i][1])]) + (occupied[(winningCombo[i][2])]) == 3) {
            alert("O Wins! Better luck next time, X");
            oWins++;
            lastwin = 2;
            $("#oScore").text(oWins);
            $("#restartGame").show();
            occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
            turns = 0;
            console.log(turns);
            for (x = 0; x <= 8; x++) {
                $("#" + x).text(" ");
            }
            console.log(lastWin)
            lastWinner();
        }
    }
}



function lastWinner() {
    if (lastWin == 1 || lastWin == 2) {
        xTurn = true;
        oTurn = false;
        lastWin = 0;
        $("#turn").text("It's X's Turn");
    }
    else {
        xTurn = false;
        oTurn = true;
        lastWin = 0;
        $("#turn").text("It's O's Turn");
    }
}

//this will take care of resetting the board to play again
function reset() {
    occupied = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    turns = 0;
    oTurn = false;
    xTurn = true;
    lastWin = 2;
    for (x = 0; x <= 8; x++) {
        $("#" + x).text(" ");
    }
    lastWinner();
}


//making things go
$(function () {
    $("#xScore").text(xWins);
    $("#oScore").text(oWins);
    $("#turn").text("It's X's Turn");
    $("#restartBtn").on("click", reset);

    $("div.box").click(function () {
        spaceLoc = $(this).attr("id");
        checkSpace();
    });


});