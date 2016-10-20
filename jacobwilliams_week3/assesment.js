// FIRST THING THAT HAPPENS//
$(function () {
    $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click)
});

// SECOND THING TO HAPPEN//
function lookupWeatherForPostalCode_Click() {
    var pcode = $("#postalCode").val();
    lookupLatLong("", "", pcode);
}

// THIRD THING TO HAPPEN//

function lookupLatLong(city, state, postalCode) {
    // Create the address.
    var address = "";
    if (postalCode.length != 0) {
        address = postalCode.trim();
    }
    else if (city.length != 0 && state != 0) {
        address = city.trim() + ", " + state;
    }
    else {
        return; // they didn't give me anything valid, so exit
    }

    // Call Google's API.
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAQsMF6GQMAD_JlBLibE1ZprVVwxK0kfac";

    var request = {
        url: googleUrl,
        success: lookupLatLong_Complete
    };

    $.ajax(request);
}

// FOURTH THING TO HAPPEN//

function lookupLatLong_Complete(result) {
     
    var result = result.results[0];
     latitude = result.geometry.location.lat;
     longitude = result.geometry.location.lng;
 longName1 = result.address_components[1].long_name;
 longName2 = result.address_components[2].long_name;
 var html = makeAcard();
      $("#cards").prepend(html);
      $("#map").prepend(initMap); 
}
function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: +latitude, lng: +longitude},
        });
        var marker = new google.maps.Marker({
          position: {lat: +latitude, lng: +longitude},
          map: map
        });
}
// ************************************
// ** Making a Container for my card **
// ************************************
function makeAcard(result) {

var template = $("#templateDiv").html();
template = template.replace("@@AREANAME@@", longName1 + ", " + longName2);
// template = template.replace("#map", initMap(map));
return template;
}
var longName1 = "";
var longName2 = "";
var latitude = "";
var longitude ="";
var latlng="";
var currentLocale="";
var map = "";
// MAKE A MAP//


// DELETE BUTTON//
$(document).on("click", "#removeCard", function(){
   $(this).parent('#rmv').fadeOut();
});