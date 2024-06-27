Code for creating interactive spherical panoramas based on Marzipano (v0.3.0)

This version by Simon Bowen May 2017, minor updates December 2023.
[www.simon-bowen.com] ([www.simon-bowen.com])

# Modified Marzipano
Uses the code created by Marzipano tools as a starting point: [http://www.marzipano.net/tool/] (http://www.marzipano.net/tool/)

I have modified the contents of index.js, style.css and index.html and extended the format of data.js

index.js modifications:

* removed all functions for displaying and controlling scene list
* removed all functions for view control buttons
* removed all functions for autorotate button
* added functionality from DeviceOrientationControlMethod
* added embed hotspots (my term for embedding HTML in hotspot container)
* added gazespots (my term for a hotspot that is activated by looking in one particular direction for a set period of time, i.e. rather than by tapping/clicking on something)
* added code to run basic image slideshows within embed hotspots

## Audio Integration
Using [howler.js] (https://github.com/goldfire/howler.js)

## style.css modifications:
* styling for device orientation control elements

## index.html modifications:
* removed #sceneList, #sceneListToggle, #titleBar, #autorotateToggle <div>s
* reference to DeviceOrientationControlMethod.js

## data.js modifications:
Modified data.js file produced by marzipano web-based tool
to include additional data for:

* embedded html (embedHotspots)
* hotspots that respond to looking at a particular location (gazeSpots)
* scene to switch to after certain number of gazeSpots found (manySpotSwitch)
* audio to play on scene switch (switchAudio)
* background audio (bgAudio)
* timeout between slides (slidesTimeout), allows one slideshow per scene created as several images within a div using the class fadein 
* and, a script data object for an automatic playlist of view and scene changes

### Variables within embedHotspots, gazeSpots:

* yaw, pitch - location on rectilinear projection (in radians), -pitch is up, +pitch is down 

### embedHotspot specific variables:
* radius - radius in pixels of sphere that html is placed upon (so, lower is closer)
* extraRotations - rotate embedded content in X,Y direction so rectangle is no longer placed tangential to surface of sphere, uses strings of the form 'rotateX(#rad) rotateY(#deg)' 

Tip: to place rectangle vertically, rotate X equivalent to pitch of embeddedHotspot.

Tip: to place rectangle horizontally, rotate X equivalent to PI/2 - pitch of embeddedHotspot.

Tip: to rotate rectangle so that it is appears parallel with walls, rotate Y equivalent to difference between embeddedHotspot yaw and yaw when looking directly at wall.

### gazeSpot specific variables:
* deviation - tolerance in radians around gazeSpot location to activate it
* target (optional, 'scene switch' type gazeSpot) - id of scenes object this gazeSpot will switch to
* selector (optional, 'embedded content reveal' type gazeSpot) - selector of embedded html to be revealed
* audio (optional, for gazeSpots with audio elements) - array of URLs of audio to be played, i.e. to enable different formats
* timeout - duration in milliseconds of scene switch or reveal
* baseOpacity - opacity element will return to once move off gazeSpot. So, can make elements remain in view if set to 1.0
* maxOpacity (optional) - maximum opacity embedded element will transition to

### manySpotSwitch specific variables:
* target - scene to switch to
* trigger - number of gazeSpots to be found before switching
* timeout - duration in milliseconds of scene switch - Note: timeout activates once off gazeSpot, but can accidentally move on/off gazeSpot so this value should be equal to or greater than duration of longest spoken audio clip in scene

### script object variables:
* type: "rotate" or "scenechange"
* time: time in milliseconds after which to execute rotation or scene change.

Time is cummulative, so to execute every second use time = 1000, 2000, 3000 etc.

For rotate parameters, see [Marzipano documentation:](http://www.marzipano.net/reference/global.html#autorotate) 

	yawSpeed, pitchSpeed, fovSpeed
  	yawAccel, pitchAccel, fovAccel
	targetPitch, targetFov
	
To prevent movement stopping between rotate events, set accelerations to Infinity.

# Adding New Panoramas

Begin with the web root folder containing the following folders/contents from the repository:

	/css
	/img
	/js
	/sounds
	/vector
	/template
	index.js

1. Use the [Marzipano Tool](https://www.marzipano.net/tool/) to upload rectilinear image and create files for a web application.
2. Duplicate the /template folder and rename with panorama title
3. Copy the /tiles folder from the exported web application into new panorama folder
4. Cut and paste ‘scenes’ data objects from the exported data.js into panorama folder data.js (and add embedhotspots, gazeSpots and script data objects if using)

