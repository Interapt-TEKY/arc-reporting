function handleCalc()
{
    var bill= ($("#billBox").val()*1);
    var tipPercent= ($("#tipPercentBox").val()*1);
    var partySize= ($("#partySizeBox").val()*1);
    if(partySize==0){
        partySize=1;
    }
    var totalCost= bill + (bill*tipPercent);
    var costPerPerson = totalCost/partySize;
    var tipPerPerson = (bill*tipPercent)/partySize;
    costPerPerson = (Math.round(100*costPerPerson)/100).toFixed(2);
    tipPerPerson = (Math.round(100*tipPerPerson)/100).toFixed(2);
    if(bill==0||tipPercent==0){
        alert("Please Fill Required Fields");
    }
    else{
    document.getElementById("insertTip").innerHTML="$ "+tipPerPerson;
    document.getElementById("insertTotal").innerHTML="$ "+costPerPerson;
    $("#btnSubmit").on("click", showDivs);
    }
}

function resetCalc()
{
    location.reload();
}

function showDivs(){
    $("#showTip").show();
    $("#showTotal").show();
}

$(function(){
    $("#btnSubmit").on("click", handleCalc);
   
    $("#btnReset").on("click", resetCalc);
    $("#showTip").hide();
    $("#showTotal").hide();
});

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 46 || charCode > 57)) {
        return false;
    }
    return true;
}