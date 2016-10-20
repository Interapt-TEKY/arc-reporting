alert("Hello, make sure to click the FACEBOOK button and share this!!");
// ************************************
// ** Making a Container for my card **
// ************************************
function makeAcard(weatherData) {

var template = $("#templateDiv").html();


template = template.replace("@@AREANAME@@", longName1 + ", " + longName2);

template = template.replace("@@CURRENTTEMP@@", weatherData.currentTemp);
template = template.replace("@@SUMMARY@@", weatherData.weatherSummary);
template = template.replace("@@HIGHTEMP@@", weatherData.highTemp);
template = template.replace("@@RAINCHANCE@@", weatherData.precipProb);
template = template.replace("@@LOWTEMP@@", weatherData.lowTemp);
return template;
}


// ***************************
// **  Google Web Services  **
// ***************************


var longName1 = "";
var longName2 = "";

function lookupLatLong_Complete(result) {

    var result = result.results[0];
    var latitude = result.geometry.location.lat;
    var longitude = result.geometry.location.lng;
    console.log("The lat and long is " + latitude + "," + longitude);

 longName1 = result.address_components[1].long_name;
 longName2 = result.address_components[2].long_name; 



    var darkSkyUrl = "https://api.darksky.net/forecast/4632e8545a2898126defa5846fff0637/" + latitude + "," + longitude;

    var request = {
        url: darkSkyUrl,
        dataType: "jsonp",
        success: darksky_Complete
    };
    $.ajax(request);
}


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
function darksky_Complete(request) {

    var weatherResult = {

   

currentTemp: request.currently.temperature + "&deg; F",

highTemp: Math.round(request.daily.data[0].temperatureMax) + "&deg;F",

precipProb: Math.round(request.currently.precipProbability) * 100  + "%",

lowTemp: Math.round(request.daily.data[0].temperatureMin) + "&deg;F",

weatherSummary: request.currently.summary,

};
 var html = makeAcard(weatherResult);
            $("#cards").append(html);
}
// **********************
// **  Event Handlers  **
// **********************
function lookupWeatherForPostalCode_Click() {
    var pcode = $("#postalCode").val();
    lookupLatLong("", "", pcode);
}

$(document).on("click", "#removeCard", function(){
   $(this).parent('#rmv').fadeOut();
});
// ***********************
// **  Document ready.  **
// ***********************

$(function () {
    $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click)

});