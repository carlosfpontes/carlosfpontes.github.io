// the data.js file produced by marzipano web-based tool, to include data for embedded hotspots
// format for embedHotspots is:
// yaw, pitch location on rectilinear projection
// radius, extraRotations see Marzipano documentation on hotspots..
// gazeSpot latitude is +/- radians area around gazeSpot location to activate it
// yawLatitude needs to be larger nearer the poles
// All yaw, pitch values need to be in radians (use Google convertor) and -pitch is up, +pitch is down    

var APP_DATA = {
  "scenes": [
    {
      "linkHotspots": [],
      "infoHotspots": [],
      "embedHotspots": [],
      "gazeSpots": []
    },
    {
      "linkHotspots": [],
      "infoHotspots": [],
      "embedHotspots": [],
      "gazeSpots": []
    }
  ],
  "script": [],     
  "name": "Panorama name here",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false, // must be set to true for performance mode to work
    "fullscreenButton": true,
    "viewControlButtons": false,
    "deviceOrientationControl": true,
    "debugMode": false,
    "webPdUsed": false,
    "manySpotSwitch": false,
  }
};