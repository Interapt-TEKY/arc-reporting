    var latitude;
    var longitude;
    var city;
    var state;
    var cityState;
    var weatherIcon;
    var idNumber= 1;
    var weatherObject = new Object();
    var backgroundpic;

    function generateCard(){

        switch(weatherIcon){
    case "clear-day":
    case "clear-night":
        backgroundpic = "skyclear.jpg";
        break;
    case "rain":
        backgroundpic = "skyrain.jpeg";
        break;
    case "sleet":
        backgroundpic = "skysleet.jpg";
        break;
    case "fog":
    case "cloudy":
    case "partly-cloudy-day":
    case "partly-cloudy-night":
        backgroundpic = "skycloudy.jpg";
        break;
    case "wind":
        backgroundpic = "skywind.jpg";
        break;
}
        setTimeout(function(){
        $("#cardRow").append('<div id="'+idNumber+'" class="col-md-3 cardFormat minusbtn" style="background-image: url(' + backgroundpic + ')"><div class="locationStyle">'+cityState+'<button onclick="removeDiv(' + idNumber +')"; class="btn pull-right"><span class="glyphicon-minus"></span></button></div><div class="currentTemp">'+weatherObject.currentTemp+'</div><div class="weatherStatus">'+weatherObject.summary+'</div><div class="row"><div class="col-md-4"> </div><div class="col-md-4"></div><div class="col-md-4"></div><br/><div class="col-md-4">Min:<br/>'+weatherObject.low+'</div><div class="col-md-4">Rain<br/>'+weatherObject.precip+'</div><div class="col-md-4">Max:<br/>'+weatherObject.high+'</div></div>');
    }, 200);
    idNumber++;
    }

$("#"+idNumber).on("click", ".minusbtn", function() {
    $(this).parent().remove();
});

function removeDiv(divId) {
    $("#" + divId).remove();
}

/*var divId = "#"+idNumber;
$("#removeDiv").on("click", function(){
    divId.remove();}
);*/

    function findGeolocation_Complete(result){
        latitude = result.results[0].geometry.location.lat;
        longitude = result.results[0].geometry.location.lng;
        /*city = result.results[0].address_components[1].long_name;     Possibly remove in favor of formatted_address
        state = result.results[0].address_components[3].short_name;*/
        cityState = result.results[0].formatted_address;
        findWeather(latitude, longitude);
    }

    function findGeolocation(zipCode){
        var address=zipCode.trim();
        var google = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyDy7ECzyG_dQ1_lbkDW7vsghpBm2_CIvIU";
        var request = {
                url: google,
                success: findGeolocation_Complete
            };

            $.ajax(request);
    }

    function zipSearchClick(){
        var zipCode = $("#zipCodeEntry").val();
        findGeolocation(zipCode);
    }

function findWeather(latitude, longitude){
    var request = {
            url: "https://api.darksky.net/forecast/18720de6bc1659faf49f04836e26caea/" + latitude + "," + longitude,
            dataType:"jsonp",
            success: darkskyComplete
        };
    $.ajax(request);
}

function darkskyComplete(result){
    var weather=result;
    var summary=weather.currently.summary;
    var currentTemp=weather.currently.temperature;
    currentTemp=parseInt(currentTemp)+ "&#176;";
    var low=weather.daily.data["0"].temperatureMin;
    low=parseInt(low)+ "&#176;";
    var high=weather.daily.data["0"].temperatureMax;
    high=parseInt(high)+ "&#176;";
    var precip=weather.daily.data["0"].precipProbability;
    precip=parseInt(precip*100) + "%";
    weatherIcon=weather.currently.icon;
   

  weatherObject.summary=summary;
  weatherObject.currentTemp=currentTemp;
  weatherObject.low=low;
  weatherObject.high=high;
  weatherObject.precip=precip;
  weatherObject.cityState=cityState;
  
    generateCard();
}



    $(function(){
        $("#addZip").on("click", zipSearchClick)
    });