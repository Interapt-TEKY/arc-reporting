var grandtotal=0;
var printtotal="";
$(function() {
    $("#submit").on("click", function() {
        getData();
        getTotal();
    
    })
    $(document).on('click', "button.delButton", function()  {
          console.log("hi");
             $(this).parent().remove();
})
 $(document).on('click', "button.up", function()  {
          console.log("hi");
             var row = $(this).parents("tr:first");
            row.insertBefore(row.prev());
       
            
    });
     $(document).on('click',  "button.down", function()  {
          console.log("hi");
             var row = $(this).parents("tr:first");
            row.insertAfter(row.next());
        })
            
    
     });



function getData() {
    var row = $("<tr></tr>")
    var table = $("#grid");
    var billname= $("#billName").val();
    var billPrice=$("#billPrice").val();
    var billpriceFixed=parseInt(billPrice)
    printtotal= grandtotal+billpriceFixed;
    $("#finalPrice").text(printtotal);
    
    row.append("<td>"+billname+"</td>");
    row.append("<td>"+billPrice+"</td>");
    row.append("<button class='delButton' type='button'>Delete</button>")
    row.append("<button class='up' type='button'>Move up</button>")
    row.append("<button class='down' type='button'>move Down</button>")
    table.append(row);
    
   
}

function delRow() {
    console.log("hi");
    $(this).parent().remove();
}

function getTotal() {
    for (i=0;i<$("#grid").length; i+=2){
     var total= $("#grid td");
     console.log(total)
    
}
};
