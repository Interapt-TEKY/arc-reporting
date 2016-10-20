var address;
var latitude;
var longitude;
var idNumber= 1;
var map;
function zipSearchClick(){
        var zipCode = $("#zipCodeEntry").val();
        findGeolocation(zipCode);
    }

function findGeolocation(zipCode){
        address=zipCode.trim();
        var google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDy7ECzyG_dQ1_lbkDW7vsghpBm2_CIvIU";
        var request = {
                url: google,
                success: findGeolocation_Complete
            };

            $.ajax(request);
    }

 function findGeolocation_Complete(result){
        latitude = result.results[0].geometry.location.lat;
        longitude = result.results[0].geometry.location.lng;
        console.log(latitude, longitude);
        embedMap();
    }

function embedMap(){
var options={ 
    zoom:8,
    center: {lat: +latitude, lng: +longitude},
    mapTypeId: google.maps.MapTypeId.ROADMAP
};    
map = new google.maps.Map(document.getElementById('mapRow'),options);
console.log(map);
console.log(map.mapUrl);
generateCard();
}



function generateCard(){
    $("#mapRow").append('<div id="'+idNumber+'" class="col-md-3 cardFormat minusbtn">'+map+'<button onclick="removeDiv(' + idNumber +')"; class="btn pull-right"><span class="glyphicon-minus"></span></button></div>');
}

function removeDiv(divId) {
    $("#" + divId).remove();
}

 $(function(){
        $("#addZip").on("click", zipSearchClick)
    });