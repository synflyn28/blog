//Creates an Google Web map that displays the current location
function initialize() {

	var myLatlng = new google.maps.LatLng(35.174550, -97.402480);

	var mapOptions = {
		zoom: 15,
		center: myLatlng
	};

	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	
	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map,
		title: 'Hello World!'
	});

	var contentString = "<p>Justin Lynn Reid</p>";
	contentString += "<p>3625 24th Ave. SE Apt. 5</p>";
	contentString += "<p>Norman, OK 73071</p>";
	contentString += "<p>Phone: (405)-312-6891</p>";
	contentString += "<p>Email: jlreid@alumni.unca.edu</p>";

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
