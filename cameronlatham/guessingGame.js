var a,b,c;
var guess1, guess2, guess3;
var guessCounter = 10;

function randomNumberGenerator(){
    $("#btnReset").hide();
    a = Math.floor( Math.random() * 10 );
    b = Math.floor( Math.random() * 10 );
    while(b == a)
    {
        b = Math.floor( Math.random() * 10 );
    }
    c = Math.floor( Math.random() * 10 );
    while(c==a || c==b){
    c = Math.floor( Math.random() * 10 );
    }
    console.log(a,b,c);
}

function handleGuess(){
 guessCounter--;
 document.getElementById("counterSpan").innerHTML="You have " +guessCounter+ " tries remaining";
 if(guessCounter<=0){
     alert("You Lose. The numbers were: " + a + " " + b + " " + c);
 }
 if(guessCounter<=0){
     $("#btnReset").show();
     $("#btnGuess").hide();
 }
 guess1 = $("#tbxGuess1").val();
 guess2 = $("#tbxGuess2").val();
 guess3 = $("#tbxGuess3").val();
 console.log(guess1, guess2, guess3);

if(guess1==a){
$("#div1").css("background-color", "green");
}
else if(guess1==b || guess1==c){
$("#div1").css("background-color", "yellow");
}
else{
$("#div1").css("background-color", "red");
}

if(guess2==b){
$("#div2").css("background-color", "green");
}
else if(guess2==a || guess2==c){
$("#div2").css("background-color", "yellow");
}
else{
$("#div2").css("background-color", "red");
}

if(guess3==c){
$("#div3").css("background-color", "green");
}
else if(guess3==a || guess3==b){
$("#div3").css("background-color", "yellow");
}
else{
$("#div3").css("background-color", "red");
}

if((guess1==a && guess2==b && guess3==c)&&(guessCounter>0)){
    alert("YOU WIN!");
    $("#btnReset").show();
    $("#btnGuess").hide();
}
}

function resetGame(){
    location.reload();
}

function testValues(){
 var test1 = $("#tbxGuess1").val();
 var test2 = $("#tbxGuess2").val();
 var test3 = $("#tbxGuess3").val();
 if( test1=="" || test2=="" || test3==""){
     alert("Please Fill Required Fields");
 }
 else{
     handleGuess();
 }
}

$(function(){
    $("#btnGuess").on("click", testValues);
    $("#btnReset").on("click", resetGame);
    randomNumberGenerator();
});