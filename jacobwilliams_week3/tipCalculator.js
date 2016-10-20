$(function () {
   $("#calculate").on("click", calculateTipVariables);
   $("#reset").hide();
   $("#tipamt").hide();
   $("#perPs").hide();
   $("#totalBill").hide();
   $("#totAMY").hide();
   $("#reset").on("click", function() {
       location.reload();   });

});

function calculateTipVariables(){
   var billTotal = $("#cost").val();
  

   var tip = $("#tipChoice").val();

   var amountOfPeople = $("#ofPeople").val();

    if (billTotal == "" || tip == null) {
       alert("You must enter all fields");  
     }
     else {
   calculateTip(billTotal, tip, amountOfPeople);
     }
}

function calculateTip(billTotal, tip, amountOfPeople){
var result = Math.round(+billTotal * +tip / +amountOfPeople).toFixed(2);
console.log(result);
$("#totalCost").append("$" + result);
$("#calculate").hide();
$("#reset").fadeIn();
$("#perPs").fadeIn();
 $("#tipamt").fadeIn();
 $("#totalBill").fadeIn();
 $("#totAMY").fadeIn();
 if (amountOfPeople > 1) {
    var complete = ((+billTotal/+amountOfPeople)+ +result);
    $("#totalBill").append("$" + complete);

}else{
    var singleRes = +billTotal + +result;
    $("#totalBill").append("$" + singleRes);
}
}


function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }      
}
