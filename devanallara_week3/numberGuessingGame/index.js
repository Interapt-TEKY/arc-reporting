var num1 = (Math.floor(Math.random() * 9) + 0)
var num2 = (Math.floor(Math.random() * 9) + 0)
var num3 = (Math.floor(Math.random() * 9) + 0)
var attempt=(10);
console.log(num1);
console.log(num2);
console.log(num3);
$(function() {
     $("#submitbutton").click(function() {
         getNumbers();
         attempt-1;
         
     });
    
});


function getNumbers() {
     answer1 = $("#box1").val();
     answer2 = $("#box2").val();
     answer3 = $("#box3").val();
  
    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    if (attempt==0) {
        if(alert('YOU LOST THE CORRECT NUMBERS WERE'+newanswer1+','+newanswer2+','+newanswer3+ '! Click here to try again!')){}
            else    window.location.reload(); 

    };
    processGuess();

};

function processGuess() {
     newanswer1 =parseInt(answer1);
     newanswer2 =parseInt(answer2);
     newanswer3 =parseInt(answer3);
    if (newanswer1==num1) {
        $("#card1").css("background-color","green");
        };
    if (newanswer2==num2) {
        $("#card2").css("background-color","green");
    };
    if (newanswer3==num3) {
        $("#card3").css("background-color","green");
    };
  
     if (newanswer1!=num1) {
        $("#card1").css("background-color","red");
        
        }
    if (newanswer2!=num2) {
        $("#card2").css("background-color","red");
       
    };
    if (newanswer3!=num3) {
        $("#card3").css("background-color","red");
        attempt-=1 ;
    };
      if (newanswer1==num2 || newanswer1==num3){
        $("#card1").css("background-color","yellow");
       
    } ;
    if (newanswer2==num1 || newanswer2==num3){
        $("#card2").css("background-color","yellow");
       
    };
    if (newanswer3==num2 || newanswer3==num1){
        $("#card3").css("background-color","yellow");
        
    };
    if (newanswer1==num1&&newanswer2==num2&&newanswer3==num3){
        if(alert('YOU WON!!!!! CLICK HERE TO RESTART!')){}
            else    window.location.reload();
    };
    
    










};

