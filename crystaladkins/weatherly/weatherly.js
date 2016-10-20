//Global Variables
var locationName = " ";
var currentTemp = " ";
var precip = " ";
var max = " ";
var min = " ";
var currentSum = " ";
var icon = " ";

//functions to do stuff I want
//this take the lat and long from google and puts it in the url 
function lookupLatLong_Complete(result) {
    var lat = result.results[0].geometry.location.lat;
    var long = result.results[0].geometry.location.lng;

    locationName = result.results[0].formatted_address;


    var darkSkyUrl = "https://api.darksky.net/forecast/f76dbd347401ed83f364678ffc75ffae/" + lat + "," + long;
    localWeather(darkSkyUrl);

}

// Takes the URL that was just made and calls Dark sky to get info
function localWeather(darkSkyUrl) {
    var weather = {
        url: darkSkyUrl,
        dataType: "jsonp", //not always required but with dark sky it is.  
        success: darksky_complete
    };

    $.ajax(weather);

}
// This is the info that we got from dark sky
function darksky_complete(weather) {

    precip = weather.daily.data[1].precipProbability;
    max = weather.daily.data[1].temperatureMax;
    min = weather.daily.data[1].temperatureMin;
    currentTemp = weather.currently.temperature;
    currentSum = weather.currently.summary;
    icon = weather.currently.icon;
    console.log(icon);

    generateNewCard();
}
// This is taking the user input and making sure it is valid, 
function lookupLatLong(city, state, postalCode) {
    // Create the address
    var address = "";
    if (postalCode.length != 0) {
        address = postalCode.trim();
    }
    else if (city.length != 0 && state != 0) {
        address = city.trim() + ", " + state;
    }
    else {
        return;
    }

    // Taking valid info from above and sending it to google to get location info
    var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyBYlXyp7yQ0n8EYG0lotJPD7sdfKj24PNg";

    var request = {
        url: googleUrl,
        success: lookupLatLong_Complete
    };

    $.ajax(request);
}




//  Event Handlers - Doing stuff with what info I have gotten
//This takes the value in the textbox after the button is clicked and sends it up to the other function
function lookupWeatherForPostalCode_Click() {
    var pcode = $("#postalCode").val();
    lookupLatLong("", "", pcode);
}


function newCard() {
    var template =
        $("#templateCard").html(); /* this will get all of the html from the template i created */
    
    //Now we need to put the real values into the actual div
    template = template.replace("@@CURCTY@@", locationName);
    template = template.replace("@@CURTMP@@", parseInt(currentTemp) + "&degF <br/> <br/> <br/>" + currentSum);
    template = template.replace("@@HIGHTEMP@@", "High" + "<br/><br/>" + parseInt(max) + "&degF");
    template = template.replace("@@LOWTEMP@@", "Low" + "<br/><br/>" + parseInt(min) + "&degF");
    template = template.replace("@@RAIN@@", "Rain" + "<br/><br/>" + precip + " %");
    template = template.replace("@@BGCLASS@@", icon);

    return template;
};


function generateNewCard() {

    var card = newCard();
    $("#cards").append(card);

}


//  Document ready - Making things go


$(function () {
    $("#postalCode").focus();
    //This starts the entire process of going through all of the functions to get the data needed
    $("#lookupWeatherForPostalCode").on("click", lookupWeatherForPostalCode_Click);

    $(document).on('click', '#removeCard', function () {
        $(this).closest('div').remove();
    });

});

