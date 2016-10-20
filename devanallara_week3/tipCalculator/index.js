var tiptotal =" ";
var newtotal = "";
var withtip=""
$(function() {
    $("#submitButton").on("click", function() {
        getTotal();
});
$("#clearButton").on ("click", function() {
  location.reload();
});

function getTotal() {
  if ($("#priceBox").val()==null) {
    console.log("test");
  }
  else {
  var roughtotal =  $("#priceBox").val();
  finaltotal = parseInt(roughtotal);
  console.log(finaltotal);
  getService();
  }
};
});
  
  function getService() {
   var percentage=$("#service").val();
   console.log(percentage);
   if (percentage=="Average 15%"){
     tiptotal=finaltotal*.15;
     newtotal=tiptotal+finaltotal;
     returnValue();
   };
   if (percentage=="Amazing! 30%"){
     tiptotal=finaltotal*.30;
     newtotal=finaltotal+tiptotal
     returnValue();
   };
   if (percentage=="Good 20%"){
     tiptotal=finaltotal*.20;
     newtotal=finaltotal+tiptotal;
     returnValue();
   };
   if (percentage=="Poor 10%"){
     tiptotal=finaltotal*.10;
     newtotal=finaltotal+tiptotal;
     returnValue();
   };
   if (percentage=="Terrible 5%"){
     tiptotal=finaltotal*.05;
     newtotal=finaltotal+tiptotal;
     returnValue();
   };


  };

  function returnValue() {
    var people =$("#numberofpeople").val()
    var bigcost= newtotal/people;
    var finalcost= bigcost.toFixed(2);
    $("#price").text(finalcost);
    console.log(people);
    
  };
  function isNumberKey(evt) {
   var charCode = (evt.which) ? evt.which : event.keyCode;
   if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
       return false;
   } else {
       return true;
   }
}

