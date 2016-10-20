var num1;
var num2;
var num3;
var attempts = 10;
var isCorrect1 = false;
var isCorrect2 = false;
var isCorrect3 = false;


function startGame() {

    $("#guessBox1").val(0);
    $("#guessBox2").val(0);
    $("#guessBox3").val(0);

    num1 = parseInt(Math.random() * 10);
    num2 = parseInt(Math.random() * 10);
    num3 = parseInt(Math.random() * 10);

    //Check to make sure there are not the same numbers beside one another.
    if (num1 == num2 || num2 == num3) {
        num2 = parseInt(Math.random() * 10);
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);

    $("#intro").show();
    $("#game").hide();
    $("#winnerDiv").hide();
    $("#outOfAttempts").hide();


};

function playGame() {
    $("#intro").hide();
    $("#game").show();
    $("#guessBox1").focus();

};

function validate(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode(key);
   var regex = /[0-9]|\./;
   if (!regex.test(key)) {
       theEvent.returnValue = false;
       if (theEvent.preventDefault) theEvent.preventDefault();
   }
};

function checkGuess1() {
    var guess1 = $("#guessBox1").val();
    if (+guess1 == num1) {
        $("#guessDiv1").removeClass("main");
        $("#guessDiv1").removeClass("inSequence");
        $("#guessDiv1").removeClass("notInSequence");
        $("#guessDiv1").addClass("correct");
        isCorrect1 = true;
        console.log(isCorrect1);
    }
    else if (+guess1 == num2 || +guess1 == num3) {
        $("#guessDiv1").removeClass("main");
        $("#guessDiv1").removeClass("correct");
        $("#guessDiv1").removeClass("notInSequence");
        $("#guessDiv1").addClass("inSequence");
        isCorrect1 = false;
    } else if(+guess1 !== num1 && +guess1 !== num2 && +guess1 !== num3) {
        $("#guessDiv1").removeClass("main");
        $("#guessDiv1").removeClass("correct");
        $("#guessDiv1").removeClass("inSequence");
        $("#guessDiv1").addClass("notInSequence");
        isCorrect1 = false;
    }
    checkGuess2();

};

function checkGuess2() {
    var guess2 = $("#guessBox2").val();
    if (+guess2 == num2) {
        $("#guessDiv2").removeClass("main");
        $("#guessDiv2").removeClass("inSequence");
        $("#guessDiv2").removeClass("notInSequence");
        $("#guessDiv2").addClass("correct");
        isCorrect2 = true;
        console.log(isCorrect2);
    }
    else if (+guess2 == num1 || +guess2 == num3) {
        $("#guessDiv2").removeClass("main");
        $("#guessDiv2").removeClass("correct");
        $("#guessDiv2").removeClass("notInSequence");
        $("#guessDiv2").addClass("inSequence");
        isCorrect2 = false;
    } 
    else if (+guess2 !== num1 && +guess2 !== num2 && +guess2 !== num3) {
        $("#guessDiv2").removeClass("main");
        $("#guessDiv2").removeClass("inSequence");
        $("#guessDiv2").removeClass("correct");
        $("#guessDiv2").addClass("notInSequence");
        isCorrect2 = false;
    }
    checkGuess3();

};
function checkGuess3() {
    var guess3 = $("#guessBox3").val();
    if (+guess3 == num3) {
        $("#guessDiv3").removeClass("main");
        $("#guessDiv3").removeClass("inSequence");
        $("#guessDiv3").removeClass("notInSequence");
        $("#guessDiv3").addClass("correct");
        isCorrect3 = true;
        console.log(isCorrect3);
    }
    else if (+guess3 == num2 || +guess3 == num1) {
        $("#guessDiv3").removeClass("main");
        $("#guessDiv3").removeClass("correct");
        $("#guessDiv3").removeClass("notInSequence");
        $("#guessDiv3").addClass("inSequence");
        isCorrect3 = false;

    } 
    else if (+guess3 !== num1 && +guess3 !== num2 && +guess3 !== num3) {
        $("#guessDiv3").removeClass("main");
        $("#guessDiv3").removeClass("inSequence");
        $("#guessDiv3").removeClass("correct");
        $("#guessDiv3").addClass("notInSequence");
        isCorrect3 = false
    }
    winner();

};

function winner() {
    if (isCorrect1 == true && isCorrect2 == true && isCorrect3 == true) {
        $("#game").hide();
        $("#winnerDiv").show();
    }
    else {
        attemptsLeft();
    }
};

function attemptsLeft() {
    attempts--;
    if (attempts <= 0) {
        $("#game").hide();
        $("#chances").hide();
        $("#outOfAttempts").show();
        $("#correctNums").text("The correct numbers were " + num1 + ", " + num2 + ", "  + num3 + ". Sorry, please play again.")
    }
    else {
       $("#chances").text("You have " + attempts + " chances left.");
    }
};



function replay() {
    $("#winnerDiv").hide();
    $("#outOfAttempts").hide();
    $("#guessBox1").val(0);
    $("#guessBox2").val(0);
    $("#guessBox3").val(0);
    $("#guessDiv1").attr("class", "col-md-3 col-md-push-1 main");
    $("#guessDiv2").attr("class", "col-md-3 col-md-push-1 main");
    $("#guessDiv3").attr("class", "col-md-3 col-md-push-1 main");
    attempts = 10;
    $("#chances").text("You have " + attempts + " chances left.");

    num1 = parseInt(Math.random() * 10);
    num2 = parseInt(Math.random() * 10);
    num3 = parseInt(Math.random() * 10);

    //Check to make sure there are not the same numbers beside one another.
    if (num1 == num2 || num2 == num3) {
        num2 = parseInt(Math.random() * 10);
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);

    playGame();

};





$(function () {
    $("#startGameBtn").on("click", playGame);
    $("#guessBtn").on("click", checkGuess1);
    $("#outReplayBtn").on("click", replay);
    $("#winReplayBtn").on("click", replay);

    //Start up game

    startGame();



});

