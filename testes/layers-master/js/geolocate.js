var x = document.getElementById("geoalert");

getLocation();

// something to detect if not on desktop before calling getLocation?

function getLocation() {
    if (navigator.geolocation) {
        // need to enableHighAccuracy or GPS coords on mobiles vary too much
        navigator.geolocation.getCurrentPosition(checkPosition, showError, {'enableHighAccuracy':true,'timeout':10000,'maximumAge':0});
    } else {
    	x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function checkPosition(position) {
    var locations = GEO_DATA.locations.map(function(geoData) {
//     	console.log("Checking " + geoData.url); 
		if (atLocation(geoData, position.coords.latitude, position.coords.longitude)) {
			parent.location=geoData.url;
		} else {
	    	console.log("Not at " + geoData.url); 
	    	x.innerHTML = "You're not at a layers location. <br />" + "Latitude: " + position.coords.latitude + "<br />Longitude: " + position.coords.longitude;
		};	
	}); 
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation."
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable."
            break;
        case error.TIMEOUT:
            "The request to get user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred."
            break;
    }
}

function atLocation (location, latitude, longitude) {
	// convert coordinates to radians, and yaw into range 0 to 2PI
	var pitch = latitude * (Math.PI/180);
	var locationpitch = location.latitude * (Math.PI/180);
	var yaw = (longitude * (Math.PI/180)) + Math.PI;
	var locationyaw = (location.longitude * (Math.PI/180)) + Math.PI;
	var locationdeviation = location.deviation * (Math.PI/180);
	
	var yawFactor; 
	// check if pitch and locationpitch are in same hemisphere
	// if so, bias the contribution of yaw according to  pitch so that it decreases to zero at the poles
	if (((pitch > 0) && (locationpitch > 0)) || ((pitch < 0) && (locationpitch < 0))) { 
		yawFactor = Math.abs(Math.cos(pitch)); // cos of +/- PI/2 returns close to zero but not zero
	} 
	else {
		yawFactor = 1;
	}		
	var dPitch = locationpitch - pitch;

	// calculate difference in yaw in both directions around full circle and use the smallest difference
	var dYaw1 = Math.abs(locationyaw - yaw);
	var dYaw2 = (2 * Math.PI) - dYaw1;
	var dYaw;
	if (dYaw1 < Math.PI) {
		dYaw = yawFactor * dYaw1;
	} else {
		dYaw = yawFactor * dYaw2;
	}
	var distance = Math.sqrt((dPitch*dPitch)+(dYaw*dYaw));
	// return true if distance is less than location deviation
	return (distance < locationdeviation);
}

// Geolocation API needs to be via https on Chrome 50+