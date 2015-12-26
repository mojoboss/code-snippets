$(document).ready(function(){	

	getLocation(); //function to get location using geoLocation

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(showPosition);
	    } else {
	        alert("Geolocation is not supported by this browser. This application won't work here.");
	    }
	}
	function showPosition(position) {
	    var lat = position.coords.latitude;
	    var lon = position.coords.longitude;
	    BaseUrl = "http://api.openweathermap.org/data/2.5/weather";
		key = "YOUR KEY HERE";
		$.getJSON( BaseUrl, {
			'lat': lat,
			'lon': lon,
			'units': 'metric',
			'appid': key
		})
		.done(function( data ) {
			var responseArray = data;
			var city = data.name;
			var weather = data.weather[0].description;
			var wind = data.wind.speed;
			var temp = data.main.temp;
			var imageCode = data.weather[0].icon;
			//console.log(imageCode);
			var img = '<img src="http://openweathermap.org/img/w/'+imageCode+'.png">';
			var tempC = '<h3>'+temp+'&#x2103'+'</h3>'
			$('.icon').append(img);
			$('.temp').append(tempC);
			$('.city').html(city);
			$('.descr').html(weather);
			$('.wind').html(wind + ' Knots');

		}); 
	}
	
});



