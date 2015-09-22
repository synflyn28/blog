//Creates an Google Web map that displays the current location
function initialize() {

	var myLatlng = new google.maps.LatLng(35.524292, -81.142382);

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
	contentString += "<p>3013 Loop Rd.</p>";
	contentString += "<p>Lincolnton, NC 28092</p>";
	contentString += "<p>Phone: (405)-779-6131</p>";
	contentString += "<p>Email: jlreid@alumni.unca.edu</p>";

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map, marker);
	});
}

google.maps.event.addDomListener(window, 'load', initialize);
