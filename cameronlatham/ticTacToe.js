var player = 2;
var marker = "X";
var turn = 0;
var xWins = 0;
var yWins = 0;

function createMark() {
    $("#turnPrompt").text("It is Player " + (player) + "'s turn");
    if ($(this).text() == "") {
        if (turn % 2 == 0) {
            player = 1;
            marker = "X";
        }
        else if (turn % 2 !== 0) {
            player = 2;
            marker = "O";
        }

        if (player == 2) {
            $(this).text("O");
        }
        if (player == 1) {
            $(this).text("X");
        }
        testWin();
        turn++;
    }
}


function testWin() {
    if ($("#a").text() == marker && ($("#b").text() == marker) && ($("#c").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#d").text() == marker && ($("#e").text() == marker) && ($("#f").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#g").text() == marker && ($("#h").text() == marker) && ($("#i").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#a").text() == marker && ($("#d").text() == marker) && ($("#g").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#b").text() == marker && ($("#e").text() == marker) && ($("#h").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#c").text() == marker && ($("#f").text() == marker) && ($("#i").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#a").text() == marker && ($("#e").text() == marker) && ($("#i").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#c").text() == marker && ($("#e").text() == marker) && ($("#g").text() == marker)) {
        alert("Player " + player + " Wins!");
        $(".cell").off("click");
        winCount();
    }
    else if ($("#a").text() != "" && $("#b").text() != "" && $("#c").text() != "" && $("#d").text() != "" && $("#e").text() != "" && $("#f").text() != "" && $("#g").text() != "" && $("#h").text() != "" && $("#i").text() != "") {
        alert("It is a Draw!");
        if(player==2){
            player=1;
        }
        else if(player==1){
            player=2;
        }
    }
    
}

function winCount() {
    if (player == 2) {
        yWins++;
        player = 1;
        marker = "X";
        turn++;
    }
    else if (player == 1) {
        xWins++;
        player = 2;
        marker = "O";
        turn++;
    }
    $("#wins").text("Player 1: " + xWins + "     " + " Player 2: " + yWins);
}

function resetGame() {
    $(".cell").text("");
    $(".cell").on("click", createMark);
}

$(function () {
    $(".cell").on("click", createMark);
    $("#btnReset").on("click", resetGame);
});