$(function() {
    $("#reset").hide();
    var num1 = Math.floor(Math.random()*9) +1;
    var num2 = Math.floor(Math.random()*9) +1;
    var num3 = Math.floor(Math.random()*9) +1;
    console.log(num1);
    console.log(num2);
    console.log(num3);

while( num1 == num2 ||  num1 == num3 || num2 == num3){
     num1 = Math.floor(Math.random()*9) +1;
     num2 = Math.floor(Math.random()*9) +1;
     num3 = Math.floor(Math.random()*9) +1;

     console.log(num1);
    console.log(num2);
    console.log(num3);
}
$("#guess").on("click", function(){
if ($("#num1").val() == num1) {
    $("#col1").css("background-color", "green")
}
else if ($("#num1").val() == num2 || $("#num1").val() == num3) {
$("#col1").css("background-color", "yellow")
}else {
$("#col1").css("background-color", "red")
}
});

$("#guess").on("click", function(){
if ($("#num2").val() == num2) {
    $("#col2").css("background-color", "green")
}
else if ($("#num2").val() == num1 || $("#num2").val() == num3) {
$("#col2").css("background-color", "yellow")
}else {
$("#col2").css("background-color", "red")
}
});
$("#guess").on("click", function(){
if ($("#num3").val() == num3) {
    $("#col3").css("background-color", "green")
}
else if ($("#num3").val() == num2 || $("#num3").val() == num1) {
$("#col3").css("background-color", "yellow")
}else {
$("#col3").css("background-color", "red")
}
if (($("#num1").val() == num1) && ($("#num2").val() == num2) && ($("#num3").val() == num3)) {
    alert("YOU WIN!");
    $("#guess").fadeOut();
    $("#reset").fadeIn();
}
});

var guessesLeft=10;
$("#guess").on("click", function(){
    guessesLeft = guessesLeft - 1
    $("#guessesLeft").html(guessesLeft);
    if (guessesLeft == 0) {
        alert(" YOU LOSE");
        $("#guess").remove();
        $("#reset").fadeIn();
    }
});
$("#reset").on("click", function(){
            location.reload();
});
});





















function isNumberKey(evt) {
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
       return false;
   } else {
       return true;
   }      
}