'use strict';
// this version written for marzipano version 0.3.0

var debugMode = window.APP_DATA.settings.debugMode; 
console.log("debugMode is" , debugMode);
var webPdUsed = window.APP_DATA.settings.webPdUsed;  // is web pd being used? optional
var deviceInitialYaw = window.APP_DATA.settings.deviceInitialYaw; // using the device's orientation for Yaw of initial view, instead of initial view values in data.js
var readyContainer = document.querySelector('#readyContainer');
var readyElement = document.querySelector('#ready');
var loadingElement = document.querySelector('#loading');
var spotSounds = []; // create a new array to hold HTML selector, Howl sounds as objects (via a constructor function)
var globalVolume = 0; // variable for Howler.volume
var volupTimer = null; // timers for increasing and decreasing global volume
var voldownTimer = null;
var soundCount = 0;
var loadCount = 0;
var scenePoint = 0;
var slidesTimeout = window.APP_DATA.settings.slidesTimeout;

if (readyContainer!=null) { // if there is a readyContainer present to get touch start/preload for audio

	// // check whether device has gyro functionality
	// window.addEventListener('deviceorientation', function () {
	//     document.body.classList.remove('no-gyro');
    // 	document.body.classList.add('gyro');
	// });

	// if there are storyIDs for hotspots, add a tracking pixel element
	
	if (window.APP_DATA.settings.tracking) {
	    var logpixel = document.createElement('img');
    	logpixel.height = "1px";
    	logpixel.width = "1px";
    	console.log("tracking pixel created");
    }

	// start pano display either by click or touch, check if touch device at the same time
	// and get the necessary touchend to enable mobile devices to play audio
	
	var goElements = document.querySelectorAll('.goScene');  // if there is more than one go button
	if (goElements) {
		var i;
		for (i = 0; i < goElements.length; i++) { // add event listeners for each button
			goElements[i].addEventListener('click', goClick);
			goElements[i].addEventListener('touchend', goTouch);		
		}		
	}
	if (readyElement) {  // if just one button, add event listeners to it
		readyElement.addEventListener('click', goClick);
		readyElement.addEventListener('touchend', goTouch);		
	}

} else {
	go();
}

function goClick (event) {

	if (window.location.search) { // set scenePoint if set with search string, used when only one go button returning to linked scenes
		scenePoint = parseInt(window.location.search.slice(1));
	}
	
	if (goElements.length > 0) { // if there is more than one go button...
		scenePoint = parseInt(event.currentTarget.id.slice(5));  // ...extract scene id from triggering element and set search string to this
	} 
	console.log("clicked to go to " + scenePoint);
	
	if (webPdUsed) {
		var patch
			$.get(window.APP_DATA.settings.webPdPatch, function(patchStr) {
			  patch = Pd.loadPatch(patchStr)
			});
		Pd.start();
	}
	loadSounds();
}

function goTouch () {

	if (window.location.search) { // set scenePoint if set with search string, used when only one go button returning to linked scenes
		scenePoint = parseInt(window.location.search.slice(1));
	}
	
	if (goElements.length > 0) { // if there is more than one go button...
		scenePoint = parseInt(event.currentTarget.id.slice(5));  // ...extract scene id from triggering element and set search string to this
	} 
	console.log("touched to go to " + scenePoint);

	document.body.classList.remove('no-touch');
	document.body.classList.add('touch');
	if (webPdUsed) {
		var patch
			$.get(window.APP_DATA.settings.webPdPatch, function(patchStr) {
			  patch = Pd.loadPatch(patchStr)
			});
		Pd.start();
	}
	loadSounds();
}

function loadSounds() { 	// preload the gazeSpot audio
	// count the sounds
	var sceneAudio = APP_DATA.scenes.map(function(sceneData) {
		if (sceneData.gazeSpots) {
			sceneData.gazeSpots.forEach(function (gazeSpot) {
				if (gazeSpot.audio) {
					soundCount++; // increment load counter
				};
			});
		}
	});
	console.log(soundCount + " sounds in this interactive");
	// load the sounds
	sceneAudio = APP_DATA.scenes.map(function(sceneData) {
		if (sceneData.gazeSpots) {
			sceneData.gazeSpots.forEach(function (gazeSpot) {
				if (gazeSpot.audio) {
					var sound = new Howl({
						src: gazeSpot.audio,
						loop: true,
						onload: loadCountInc(), // function to check if all sounds loaded yet
						});
					var spotSound = new soundSelect(gazeSpot.selector, sound);
					sound.volume(0); // mute the sound
					if (gazeSpot.offspotaudio) {sound.play();} // start playing if this is an offspot audio
					spotSounds.push(spotSound);
				} 
			});
		} 
	});
	if (soundCount == 0) { 
		readyContainer.style.display = "none"; // hide the ready container
		document.body.style.height = "100%"; // set height back to 100%
		go();
	} 
	console.log(spotSounds); 
}

function soundSelect (selector, sound) {	// object constructor for pairs of HTML selector, Howl sounds
	this.selector = selector;
	this.sound = sound;
}

function loadCountInc() {	// function to increment loadCount, check if all sounds loaded, and turn on Go button if so
	loadCount++;
	console.log("sound " + loadCount + " loaded");
	if (loadCount != soundCount) {
// 		loadingElement.style.display = "block";
// 		loadingElement.innerHTML = 'Loading ' + loadCount + ' of ' + soundCount + ' sounds.';
	}
	else {
		readyContainer.style.display = "none"; // hide the ready container
		document.body.style.height = "100%"; // set height back to 100%
		console.log("All sounds loaded");
		go();
	}
}

function logComment(id) {
	var comment = prompt("Please enter your short comment");
	logpixel.src = (id + "_" + comment);
}

function go() { // rather than as a self-invoking anonymous function, call this function when a button has been clicked or tapped

  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var APP_DATA = window.APP_DATA;
  var lastscene; //set up a variable for the lastscene

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var backButtonElement = document.querySelector('#backButton');
//	var deviceOrientationToggleElement = document.querySelector('#deviceOrientationToggle'); // for GYRO on/off
	var debugElement = document.getElementById('debug'); // container for live location data
	var debugElement2 = document.getElementById('debug2'); // container for scene info
	var progressElement = document.getElementById('progress'); // container for gazeSpot progress info
	var middleElement = document.getElementById('middle'); // container for crosshairs 

	// variables for gazeSpots and performance mode
	var switchTimer = null; // empty variable for timer
	var fading = false; // switch for when fading content gazeSpots
	var lastSpot = null; // empty variable for reveal gaze spot timer
	var performTimers = []; // empty array for performance timers
	var performYawSpeed = 0; // yaw spin speed
	var performPitchSpeed = 0; // pitch speed
	var sceneIndex = 0; // index for scene number
	var bgSound = null; // empty variable for bgSound
	var switchSound = null; // empty variable for switchSound
	var switchSoundTimer = null; // empty variable for switchSound timer
	var timeOutSwitch = null; // empty variable for timeOutSwitch timer
	var manySwitchTimer = null; // empty variable for manySpotSwitch timer
	
  // Detect desktop or mobile mode using a matchMedia query for viewport sizes of 500px square or less
  if (window.matchMedia) {
    var setMode = function() {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // Viewer options.
  var viewerOpts = {
    controls: {
      mouseViewMode: APP_DATA.settings.mouseViewMode
    }
  };

  // Initialize viewer.
  var viewer = new Marzipano.Viewer(panoElement, viewerOpts);

	  //  GYRO: Register GYRO control method
	  var deviceOrientationEnabled = false;
	  var deviceOrientationControlMethod = new DeviceOrientationControlMethod();
	  var controls = viewer.controls();
	  controls.registerMethod('deviceOrientation', deviceOrientationControlMethod);

	  // Setup autorotate
	  var autorotate = Marzipano.autorotate({ yawSpeed: 0, pitchSpeed: 0, targetPitch: null });
	  if (APP_DATA.settings.autorotateEnabled) {
		autorotateToggleElement.classList.add('enabled');
	  }

  // Create scenes.
  var scenes = APP_DATA.scenes.map(function(sceneData) {
    var source = Marzipano.ImageUrlSource.fromString(
      "tiles/" + sceneData.id + "/{z}/{f}/{y}/{x}.jpg",
      { cubeMapPreviewUrl: "tiles/" + sceneData.id + "/preview.jpg" });
    var geometry = new Marzipano.CubeGeometry(sceneData.levels);
    var limiter = Marzipano.RectilinearView.limit.traditional(sceneData.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
    var view = new Marzipano.RectilinearView(sceneData.initialViewParameters, limiter);

    var marzipanoScene = viewer.createScene({
      source: source,
      geometry: geometry,
      view: view,
      pinFirstLevel: true
    });
  	var spotsSeen = []; // array to keep track of gazeSpots found
	if (sceneData.manySpotSwitch) { // check if this scene has a many GazeSpot switch and assign variables if so
		var trigger = sceneData.manySpotSwitch.trigger;
		var manySpotTarget = sceneData.manySpotSwitch.target;
		var manySpotTimeout = sceneData.manySpotSwitch.timeout;		
	} else {
		trigger = false;
	}
	if 	(sceneData.bgAudio) { // check if this scene has background audio, assign variable if so
		var bgAudio = sceneData.bgAudio;
	}
	if 	(sceneData.switchAudio) { // check if this scene has scene switch audio, assign variables if so
		var switchAudio = sceneData.switchAudio;
	}
	if (sceneData.slidesTimeout) { // check if this scene has a slideshow, assign slide timeout variable if so
		var slidesTimeout = sceneData.slidesTimeout;
	}

    // Create link hotspots.
    sceneData.linkHotspots.forEach(function(hotspot) {
      var element = createLinkHotspotElement(hotspot);
      marzipanoScene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
    });

    // Create info hotspots - either from data in APP_DATA or from external JSON file, if present
	if (sceneData.infoSpotsUrl) {
		$.getJSON( sceneData.infoSpotsUrl, function(data) {
			console.log("infoSpots loaded");
			data.infoHotspots.forEach(function(hotspot) {
			  var element = createInfoHotspotElement(hotspot);
			  marzipanoScene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
			});
		});
    } else {
		sceneData.infoHotspots.forEach(function(hotspot) {
		  var element = createInfoHotspotElement(hotspot);
		  marzipanoScene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch });
		});
    }
		// Simon's code to create embedded content hotspots.
		if (sceneData.embedHotspots) {
			sceneData.embedHotspots.forEach(function(hotspot) {
				var element = createEmbedHotspotElement(hotspot);
				marzipanoScene.hotspotContainer().createHotspot(element, { yaw: hotspot.yaw, pitch: hotspot.pitch }, { perspective: { radius: hotspot.radius, extraTransforms: hotspot.extraRotations }});
			});	
		}	
		
	// Add Gaze Spots by adding event listener for viewChange on the whole scene
	marzipanoScene.addEventListener('viewChange', function() {
		var yaw = viewer.view().yaw();
		var pitch = viewer.view().pitch();
		var gazing = false;
		if (debugMode) {
			// debugElement.style.display = "block;";
			// middleElement.style.display = "block;";
			debugElement.innerHTML = 'yaw' + yaw + '<br />pitch' + pitch + '<br />fov' + viewer.view().fov();
			middleElement.innerHTML = '+';
		};
		if (sceneData.gazeSpots) {
			sceneData.gazeSpots.forEach(function (gazeSpot) {		
			//for each gazespot, check if view closely matches, set gazing to true if so
				var distance = spotDistance (gazeSpot, pitch, yaw);
				if (distance < gazeSpot.deviation) { // if over a gazeSpot...
					clearInterval(voldownTimer); // stop the global volume decrease interval timer
					voldownTimer = null;
					if (progressElement && (trigger) && (spotsSeen.length != 0)) {progressElement.innerHTML =  spotsSeen.length + '/' + trigger}; // update progress element tally
					if ((switchTimer == null) && (fading == false)) { // if switch timer or fading not started, start them
						lastSpot = gazeSpot; // store this gazeSpot data for when we move off it
						if (gazeSpot.selector) { // if this is an embedded content reveal type gazespot
							console.log('gazeSpot found: '+ gazeSpot.selector);
							fading = true; // switch fading on
							// transition opacity to maxOpacity or 1 over timeout duration
							if (gazeSpot.maxOpacity) {
								document.getElementById(gazeSpot.selector).style.opacity = gazeSpot.maxOpacity;
							} else {
								document.getElementById(gazeSpot.selector).style.opacity = 1;
							}
							
							// Conflicted version in master branch :transition opacity to 1 over timeout duration
							// document.getElementById(gazeSpot.selector).style.opacity = 1;

							document.getElementById(gazeSpot.selector).style.transition = "opacity " + gazeSpot.timeout + "ms ease-in-out";
							if (gazeSpot.audio) { // if there is an audio component, fetch it and start playing at 0 volume
								var sound;
								var offsound;
								var currentVol;
								spotSounds.forEach(function(spotSound) {	// look for sound matching selector
									if (spotSound.selector == gazeSpot.selector) {
										sound = spotSound.sound;	// set sound to be this
									} else {
										offsound = spotSound.sound;
										currentVol = offsound.volume();
										offsound.fade(currentVol, 0, gazeSpot.timeout); // mute any offspot sounds playing
									}
								});
								currentVol = sound.volume();
								if (!sound.playing()) { sound.play(); }; // if the sound hasn't been played yet, start it playing
								console.log('Fade in from ' + currentVol);
								sound.fade (currentVol, 1, gazeSpot.timeout);
							}
							// check to see if we've seen this gazeSpot already, add to spotsSeen if not
							var seen = false;
							var thisSpotSeen = new spotSeen(gazeSpot.selector, true);
							spotsSeen.forEach (function(spotSeen) {	// check if have seen gazeSpot
								if (spotSeen.selector == gazeSpot.selector) {
									seen = true;
								}
							});
							if (!spotsSeen[0] || !seen) { // if not seen this gazeSpot before or spotsSeen is empty 
								spotsSeen.push(thisSpotSeen);
							}
						}
						if (gazeSpot.target) { // if this is a switch type gazeSpot
							console.log("Gaze spot that switches to scene " + gazeSpot.target + " found at yaw: " + gazeSpot.yaw + ' pitch: ' + gazeSpot.pitch + " timer started"); 
							switchTimer = setTimeout(function () {
								console.log("timer elapsed");
								if (gazeSpot.target) {switchScene(findSceneById(gazeSpot.target))}; // if gazeSpot has a target, set up a scene switch
								gazing = false;
							}, gazeSpot.timeout); 
						}
					} 
					gazing = true;				
				};
			});	
		}
		if (!gazing) { // if not gazing 
			if ((switchTimer != null) || (fading == true)) { // and if the timers have not already been cleared
				clearTimeout(switchTimer);  // clear the timer
				switchTimer = null;
				fading = false;  // turn off fading
				console.log("off gazespot, timers cleared"); 
				if (lastSpot) {
					if (lastSpot.selector) { // if moved off an embedded content reveal type gazespot
						document.getElementById(lastSpot.selector).style.opacity = lastSpot.baseOpacity;
						document.getElementById(lastSpot.selector).style.transition = "opacity " + lastSpot.timeout + "ms ease-in-out"; // hide content	
						if (lastSpot.audio) {
							var sound;
							spotSounds.forEach(function(spotSound) {	// look for sound matching selector
								if (spotSound.selector == lastSpot.selector) {
									sound = spotSound.sound;
								};
							});
							var currentVol = sound.volume();
							console.log('Fade out from ' + currentVol);
							sound.fade(currentVol, 0, lastSpot.timeout);
						}
						if (trigger) { // if this scene has a many GazeSpot switch
						// check to see if we've reached the trigger point for many spot switch and if timer not already set
							if ((trigger == spotsSeen.length) && (!manySwitchTimer)) {
								console.log("Sufficient gazeSpots found, switching to " + manySpotTarget + " in " + manySpotTimeout + " milliseconds"); 
								manySwitchTimer = setTimeout(function () {
									console.log("timer elapsed");
									if (manySpotTarget) {switchScene(findSceneById(manySpotTarget))}; // set up a scene switch
									gazing = false;
									manySwitchTimer = null;
								}, manySpotTimeout); 
							} else {
								console.log('Not  enough, yet ' + spotsSeen.length);
							}
						}						
					}
				}
			}
// 			if (sceneData.gazeSpots) {  // adjust offspot audio volumes according to distance
// 				sceneData.gazeSpots.forEach(function (gazeSpot) {
// 					var distance = spotDistance (gazeSpot, pitch, yaw);
// 					if (gazeSpot.offspotaudio) { 
// 						var expdecay = 1/(Math.exp(distance));
// 						var sound;
// 						spotSounds.forEach(function(spotSound) {	// look for sound matching selector
// 							if (spotSound.selector == gazeSpot.selector) {
// 								sound = spotSound.sound;
// 							};
// 						});
// 						sound.volume(expdecay);
// 					}				
// 				});
// 			}				
		} 				
	});
		
    return {
      data: sceneData,
      marzipanoObject: marzipanoScene
    };
  });

  // Display the initial scene.
  switchScene(scenes[scenePoint]);
  console.log("Go to scene " + scenePoint);

	  // GYRO: need to create 'view' variable for use by enable/disableGyro
	  var scene = viewer.scene(); // get the current scene
	  var view = scene.view();    // get the scene's view
	  // add variable for device orientation toggle element here (was lower down, but needed earlier)


	  // turn on GYRO navigation if on a compatible device with both gyro and touch functions
	  // this is because Chrome on MacOS registers deviceorientation events - turning off to see if this is still necessary
	//   if (document.body.classList.contains('gyro') && document.body.classList.contains('touch') ) {
	// 	deviceOrientationToggleElement.classList.add('enabled');
	// 	enableGyro();
	//   }
	  
	  // turn on back button, add event listener to reload page with query string
	  backButtonElement.classList.add('enabled');
	  backButtonElement.classList.add('backButton-enabled');
	  backButtonElement.addEventListener('click', function () {
	  	if (readyContainer !=null) {
			var url = window.location.pathname + "?" + scenePoint;
			window.location = url;
	  	} else {
	  		console.log('back');
	  		window.history.back(); // this doesn't work in Safari on Mac or iOS....
	  	}
	  });
	  
	  // Set handler for DeviceOrientation control (GYRO) toggle. Turned off to see if new code for detecting device orientation
	//   if (APP_DATA.settings.deviceOrientationControl) {
    // 	document.body.classList.add('deviceOrientationControl-enabled');
    // 	deviceOrientationToggleElement.addEventListener('click', toggleDeviceOrientation);
	//   } else {
    // 	document.body.classList.add('deviceOrientationControl-disabled');
	//   }
 
// Note cannot automatically switch full screen mode on, prohibited, needs user input so replace icons with transparent GIFs instead
// Uses screenfull.js  (https://github.com/sindresorhus/screenfull.js) which is not currently compatible with Safari on iOS and Chrome on Android
  if (screenfull.isEnabled && APP_DATA.settings.fullscreenButton) {
	// if (APP_DATA.settings.fullscreenButton) {
document.body.classList.add('fullscreen-enabled');
    fullscreenToggleElement.addEventListener('click', toggleFullscreen);
	console.log("Fullscreen button enabled");
  } else {
    document.body.classList.add('fullscreen-disabled');
  }

		// Simon's handler for performance mode (auto and manual)
		window.addEventListener('keydown', function(event) {
			switch (event.keyCode) {
				case 80: // P key to start auto-performance mode 					
					if (APP_DATA.script) {
						// get the script events, set up Timeout functions for each
						var script = APP_DATA.script;
						script.forEach(function (script){
							switch (script.type) {
								case "scenechange":
									var performTimer = setTimeout (function () {switchScene(findSceneById(script.target)); startAutorotate();}, script.time);
									if (debugMode) {console.log("scenechange timer " + performTimer);};
									performTimers.push(performTimer); // add scene switch timer to the array
								break;
						
								case "rotate":
									var performTimer = setTimeout (function () {
										autorotate = Marzipano.autorotate({ yawSpeed: script.yawSpeed, pitchSpeed: script.pitchSpeed, fovSpeed: script.fovSpeed, yawAccel: script.yawAccel, pitchAccel: script.pitchAccel, fovAccell: script.fovAccel, targetPitch: script.targetPitch, targetFov: script.targetFov });
										startAutorotate();}, script.time);
									if (debugMode) {console.log("rotate event timer " + performTimer);};	
									performTimers.push(performTimer); // add rotation timer to the array
								break;
							
								case "repeat":
									//var performTimer = setTimeout (function () {doScript();}, script.time); // recurse function to repeat
									if (debugMode) {console.log("repeat timer");};
									//performTimers.push(performTimer); // add repeat timer to the array
								break;
							}
						});	
						if (debugMode) {console.log("play");};
					}
				break;
				
				case 32: // SPACE to stop all timers and movement	
					if (debugMode) {console.log("stop");};
					// clear all the timers
					var i;
					for (i in performTimers) { // clear each performance timer
						clearTimeout(performTimers[i]);
						if (debugMode) {console.log ("cleared timer" + performTimers[i]);};
					}
					// stop rotation
					stopAutorotate();
					autorotate = Marzipano.autorotate({ yawSpeed: 0, pitchSpeed: 0, targetPitch: null }); // aslo need to set global variable so rotation does not continue in other scenes
					// reset yaw and pitch speeds
					performYawSpeed = 0;
					performPitchSpeed = 0;
				break;
				
				case 90: // Z to full speed rotate clockwise
					performYawSpeed = 5;
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: performPitchSpeed, yawAccel: Infinity, pitchAccel: Infinity});
					startAutorotate();
					if (debugMode) {console.log("full speed clockwise!");};					
				break;
			 				
				case 88: // X to speed up rotation at an increasing rate
					if (performYawSpeed <= 0.5) {performYawSpeed += 0.1}
					else if (performYawSpeed <= 1) {performYawSpeed += 0.25}
					else if (performYawSpeed > 1) {performYawSpeed = performYawSpeed * 2};
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: performPitchSpeed, yawAccel: Infinity, pitchAccel: Infinity});
					startAutorotate();
					if (debugMode) {console.log("increase yaw spin");};
				break;
				
				case 67: // C to slow down at a decreasing rate rotation
					if (performYawSpeed <= 0.5) {performYawSpeed -= 0.1}
					else if (performYawSpeed <= 1) {performYawSpeed -= 0.25}
					else if (performYawSpeed > 1) {performYawSpeed = performYawSpeed / 2};
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: performPitchSpeed, yawAccel: Infinity, pitchAccel: Infinity});
					startAutorotate();
					if (debugMode) {console.log("decrease yaw spin");};
				break;
				
				case 86: // V to full speed rotate anticlockwise
					performYawSpeed = -5;
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: performPitchSpeed, yawAccel: Infinity, pitchAccel: Infinity});
					startAutorotate();
					if (debugMode) {console.log("full speed anticlockwise!");};					
				break;
				
				case 66: // B to cut to looking up
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: 20, yawAccel: Infinity, pitchAccel: Infinity, targetPitch: -Math.PI/2});
					startAutorotate();
				break;

				case 78: // N to cut to looking ahead
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: 20, yawAccel: Infinity, pitchAccel: Infinity, targetPitch: 0});
					startAutorotate();
				break;
				
				case 77: // M to cut to looking down
					autorotate = Marzipano.autorotate({ yawSpeed: performYawSpeed, pitchSpeed: 20, yawAccel: Infinity, pitchAccel: Infinity, targetPitch: Math.PI/2});
					startAutorotate();				
				break;
				
				case 74: // J to turn debugMode on or off
					debugMode = !debugMode;
					if (!debugMode) {
						debugElement.style.display = "none";
						middleElement.style.display = "none";
					} else {
						debugElement.style.display = "block";
						middleElement.style.display = "block";				
					};
				break;
				
				case 75: // K to move up one scene
					if (debugMode) {console.log("move up one scene");};					
					if (sceneIndex <= (scenes.length-2)) {sceneIndex +=1;} else {sceneIndex = 0;};
					switchScene(scenes[sceneIndex]);
					// call autorotate again to maintain movement				
				break;				
				
				case 76: // L to move down one scene
					if (debugMode) {console.log("move down one scene");};					
					if (sceneIndex >= 1) {sceneIndex -=1;} else {sceneIndex = (scenes.length-1);};
					switchScene(scenes[sceneIndex]);
					// call autorotate again to maintain movement				
				break;
								
				case 48: // 0 to cut to scene 0
					switchScene(scenes[0]);
				break;
				
				case 49: // 1 to cut to scene 1
					if (scenes[1]) {switchScene(scenes[1]);};
				break;

				case 50: // 2 to cut to scene 2
					if (scenes[2]) {switchScene(scenes[2]);};
				break;

				case 51: // 3 to cut to scene 3
					if (scenes[3]) {switchScene(scenes[3]);};
				break;

				case 52: // 4 to cut to scene 4
					if (scenes[4]) {switchScene(scenes[4]);};
				break;

				case 53: // 5 to cut to scene 5
					if (scenes[5]) {switchScene(scenes[5]);};
				break;

				case 54: // 6 to cut to scene 6
					if (scenes[6]) {switchScene(scenes[6]);};
				break;

				case 55: // 7 to cut to scene 7
					if (scenes[7]) {switchScene(scenes[7]);};
				break;

				case 56: // 8 to cut to scene 8
					if (scenes[8]) {switchScene(scenes[8]);};
				break;

				case 57: // 9 to cut to scene 9
					if (scenes[9]) {switchScene(scenes[9]);};
				break;
		  }
		});
		

// function definitions
  function sanitize(s) {
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
  }

function switchScene(scene) {
	stopAutorotate();
	if (progressElement) { progressElement.innerHTML = ' ' };
	// set the scenePoint to be new scene
	scenePoint = parseInt(scene.data.id.slice(0,1)); // set scenePoint to be new scene
	if (lastscene!=null) { // if this isn't the first scene switch...
		if (bgSound) {
			bgSound.fade(1,0,1000);
			bgSound.stop();
		} // if there was bgSound, fade out and stop
		if (switchSound) {
			switchSound.fade(1,0,500);
			switchSound.stop();
			clearTimeout(switchSoundTimer);
		} // if there was switchSound, stop it and clear the timer
		var departureView = lastscene.marzipanoObject.view();
		var newView = scene.marzipanoObject.view();
		newView.setParameters({
			yaw: departureView.yaw(),
			pitch: departureView.pitch(),
			fov: departureView.fov()
		});
		if (timeOutSwitch) { // if a timeOutSwitch timer is present, clear it
			clearTimeout(timeOutSwitch);
			timeOutSwitch = null;
			console.log("timeOutSwitch timer cleared");
		}
	}
	scene.marzipanoObject.switchTo(); // changes the scene
	if (scene.data.slidesTimeout) {slideshow(scene.data.slidesTimeout)} // if scene has a slideshow, start it
	if (scene.data.switchAudio) { // if there is switch audio load and play it
		switchSound = new Howl({
			src: scene.data.switchAudio.source,
			});
		switchSoundTimer = setTimeout (function () {switchSound.play();}, scene.data.switchAudio.delay);
	} 
	if (scene.data.bgAudio) { // if there is bg audio load and play it
		bgSound = new Howl({
			src: scene.data.bgAudio.source,
			loop: true,
			volume: 0,
			});
		bgSound.play();
		bgSound.fade(0, scene.data.bgAudio.volume, 2000);
	}
	if (scene.data.timeOutSwitch) { // if new scene has a timeout switch, start the timer
		console.log("timeOutSwitch on this scene, switching to " + scene.data.timeOutSwitch.target + " in " + scene.data.timeOutSwitch.timeout);
		timeOutSwitch = setTimeout(function () {
			console.log("timeOutSwitch timer elapsed");
			switchScene(findSceneById(scene.data.timeOutSwitch.target)); 
		}, scene.data.timeOutSwitch.timeout); 		
	} 
	lastscene = scene; // update lastscene to be the current scene
	startAutorotate();
  }

	  function startAutorotate() {
		viewer.startMovement(autorotate);
		viewer.setIdleMovement(Infinity);
	  }

	  function stopAutorotate() {
		viewer.stopMovement();
		viewer.setIdleMovement(Infinity);
	  }

  function toggleFullscreen() {
    screenfull.toggle();
    if (screenfull.isFullscreen) {
      fullscreenToggleElement.classList.add('enabled');
	  console.log("Fullscreen disabled");
    } else {
      fullscreenToggleElement.classList.remove('enabled');
	  console.log("Fullscreen enabled");
    }
  }

  function createLinkHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('link-hotspot');

    // Create image element.
    var icon = document.createElement('img');
    icon.src = '/img/link.png';
    icon.classList.add('link-hotspot-icon');

    // Set rotation transform.
    var transformProperties = [ '-ms-transform', '-webkit-transform', 'transform' ];
    for (var i = 0; i < transformProperties.length; i++) {
      var property = transformProperties[i];
      icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
    }

    // Add click event handler.
    wrapper.addEventListener('click', function() {
      switchScene(findSceneById(hotspot.target));
    });

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
   stopTouchAndScrollEventPropagation(wrapper);

    // Create tooltip element.
    var tooltip = document.createElement('div');
    tooltip.classList.add('hotspot-tooltip');
    tooltip.classList.add('link-hotspot-tooltip');
    tooltip.innerHTML = findSceneDataById(hotspot.target).name;

    wrapper.appendChild(icon);
    wrapper.appendChild(tooltip);

    return wrapper;
  }

  function createInfoHotspotElement(hotspot) {

    // Create wrapper element to hold icon and tooltip.
    var wrapper = document.createElement('div');
    wrapper.classList.add('hotspot');
    wrapper.classList.add('info-hotspot');

    // Create hotspot/tooltip header.
    var header = document.createElement('div');
    header.classList.add('info-hotspot-header');

    // Create image element.
    var iconWrapper = document.createElement('div');
    iconWrapper.classList.add('info-hotspot-icon-wrapper');
    var icon = document.createElement('img');
    icon.src = '/img/info.png';
    icon.classList.add('info-hotspot-icon');
    iconWrapper.appendChild(icon);

    // Create title element.
    var titleWrapper = document.createElement('div');
    titleWrapper.classList.add('info-hotspot-title-wrapper');
    var title = document.createElement('div');
    title.classList.add('info-hotspot-title');
    title.innerHTML = hotspot.title;
    titleWrapper.appendChild(title);

    // Create close element.
    var closeWrapper = document.createElement('div');
    closeWrapper.classList.add('info-hotspot-close-wrapper');
    var closeIcon = document.createElement('img');
    closeIcon.src = '/img/close.png';
    closeIcon.classList.add('info-hotspot-close-icon');
    closeWrapper.appendChild(closeIcon);

    // Construct header element.
    header.appendChild(iconWrapper);
    header.appendChild(titleWrapper);
    header.appendChild(closeWrapper);

    // Create text element.
    var text = document.createElement('div');
    text.classList.add('info-hotspot-text');
    if (hotspot.storyID) {
    	text.innerHTML = (
    	"<p>" + hotspot.text + "</p>" 
    	+ "<p><a href='#' onclick='alert(\"Thank you, your vote has been registered.\");logpixel.src = \"" + hotspot.storyID + "_up\"'>&#9989; Agree</a> <a href='#' onclick='alert(\"Thank you, your vote has been registered.\");logpixel.src = \"" + hotspot.storyID + "_down\"'>&#10062; Disagree</a></p>" 
    	+ "<p><button onclick='logComment(" + hotspot.storyID + ")'>Comment.</button></p>" 	
    	);
    } else {
    	text.innerHTML = ("<p>" + hotspot.text + "</p>");    
    }

    // Place header and text into wrapper element.
    wrapper.appendChild(header);
    wrapper.appendChild(text);

    // Create a modal for the hotspot content to appear on mobile mode.
    var modal = document.createElement('div');
    modal.innerHTML = wrapper.innerHTML;
    modal.classList.add('info-hotspot-modal');
    document.body.appendChild(modal);

    var toggle = function() {
      wrapper.classList.toggle('visible');
      modal.classList.toggle('visible');
      console.log("toggle");
    };

    // Show content when hotspot is clicked.
    wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

    // Hide content when close icon is clicked.
    modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

    // Prevent touch and scroll events from reaching the parent element.
    // This prevents the view control logic from interfering with the hotspot.
    stopTouchAndScrollEventPropagation(wrapper);

    return wrapper;
  }

//   Prevent touch and scroll events from reaching the parent element.
  function stopTouchAndScrollEventPropagation(element, eventList) {
    var eventList = [ 'touchstart', 'touchmove', 'touchend', 'touchcancel',
                      'wheel', 'mousewheel' ];
    for (var i = 0; i < eventList.length; i++) {
      element.addEventListener(eventList[i], function(event) {
        event.stopPropagation();
      });
    }
  }

  function findSceneById(id) {
    for (var i = 0; i < scenes.length; i++) {
      if (scenes[i].data.id === id) {
        return scenes[i];
      }
    }
    return null;
  }

  function findSceneDataById(id) {
    for (var i = 0; i < APP_DATA.scenes.length; i++) {
      if (APP_DATA.scenes[i].id === id) {
        return APP_DATA.scenes[i];
      }
    }
    return null;
  }
  
// Simon's additional functions from here...
  
 	  // Simon's adapted code to create divs for embedded content
	  function createEmbedHotspotElement(hotspot) { 
  
		// Create wrapper element to embed html.
		var wrapper = document.createElement('div');
		wrapper.classList.add('hotspot');
		wrapper.classList.add('embed-hotspot');
		wrapper.innerHTML = hotspot.html; //add the html to the hotspot

		return wrapper;
	  }
 
	  // GYRO: Gyro functions

	var enabled = false;

	var toggleElement = document.getElementById('toggleDeviceOrientation');

	function requestPermissionForIOS() {
		console.log("Asking permission for device orientation");
		window.DeviceOrientationEvent.requestPermission()
		.then(response => {
			if (response === 'granted') {
			enableDeviceOrientation()
			}
		}).catch((e) => {
			console.error(e)
		})
	}
  
  function enableDeviceOrientation() {
	deviceOrientationControlMethod.getPitch(function (err, pitch) {
	  if (!err) {
		view.setPitch(pitch);
	  }
	});
	controls.enableMethod('deviceOrientation');
	enabled = true;
	toggleElement.className = 'enabled';
	console.log("device orientation enabled");
  }
  
  // note renamed function to enableGyro from enable as it is called in GitHub demo repo
  function enableGyro() {
	if (window.DeviceOrientationEvent) {
	  if (typeof (window.DeviceOrientationEvent.requestPermission) == 'function') {
		requestPermissionForIOS()
	  } else {
		enableDeviceOrientation()
	  }
	}
  }
  

		if (deviceInitialYaw) { // if using device's yaw orientation to set view
			deviceOrientationControlMethod.getYaw(function(err, yaw) {
				if (!err) {
					view.setYaw(yaw);
					console.log("Initial yaw is " + Marzipano.util.radToDeg(yaw));
				}
			});
		}
		// controls.enableMethod('deviceOrientation');
	  
//note this function is called disable in GitHut demo repo
	  function disableGyro() {
			controls.disableMethod('deviceOrientation');
			enabled = false;
			toggleElement.className = '';
		}
// previous toggle device orentation function
	//   function toggleDeviceOrientation() {
	// 	if (deviceOrientationToggleElement.classList.contains('enabled')) {
	// 	  deviceOrientationToggleElement.classList.remove('enabled');
	// 	  console.log("Gyro disabled");
	// 	  disableGyro();
	// 	} else {
	// 	  deviceOrientationToggleElement.classList.add('enabled');
	// 	  console.log("Gyro enabled");
	// 	  enableGyro();
	// 	}
	//   }

	function toggle() {
		if (enabled) {
		  disableGyro();
		} else {
		  enableGyro();
		}
	  }
	  
	toggleElement.addEventListener('click', toggle);
   


	function spotDistance (gazeSpot, pitch, yaw) {
	  	var yawFactor; 
	  	// check if pitch and gazeSpot.pitch in same hemisphere
	  	// if so, bias the contribution of yaw according to view pitch so that it decreases to zero at the poles
	  	if (((pitch > 0) && (gazeSpot.pitch > 0)) || ((pitch < 0) && (gazeSpot.pitch < 0))) { 
		  	yawFactor = Math.abs(Math.cos(pitch)); // cos of +/- PI/2 returns close to zero but not zero
		} 
		else {
			yawFactor = 1;
		}		
	  	var dPitch = gazeSpot.pitch - pitch;
	  	// convert yaw values into range 0 to 2PI
	  	yaw = yaw + Math.PI;
	  	var gazeYaw = gazeSpot.yaw + Math.PI;
	  	// calculate difference in yaw in both directions around full circle and use the smallest difference
	  	var dYaw1 = Math.abs(gazeYaw - yaw);
	  	var dYaw2 = (2 * Math.PI) - dYaw1;
	  	var dYaw;
	  	if (dYaw1 < Math.PI) {
	  		dYaw = yawFactor * dYaw1;
	  	} else {
	  		dYaw = yawFactor * dYaw2;
	  	}
	  	var distance = Math.sqrt((dPitch*dPitch)+(dYaw*dYaw));
	  	// maximum distance is square root of 2 * PI squared = 4.443
// 	  	console.log("Distance to "+ gazeSpot.selector + " is " + distance); 
	  	// return distance
		return (distance);
	  }
	  
	function spotSeen (selector, seen) {	// object constructor for pairs of gazeSpot and boolean seen value
		this.selector = selector;
		this.seen = seen;
	}

	// Based on Snook's Simplest JavaScript Slideshow: https://snook.ca/archives/javascript/simplest-javascript-slideshow
	function slideshow(timeout) {
		console.log("slides started");
		var i;
		var root = document.querySelector('.fadein');
		var els = root.querySelectorAll(':not(:first-child)');
		for (i=0; i < els.length; i++) {
			els[i].classList.add('is-hidden');
		}

		root.addEventListener('transitionend', function(){
			var el = root.querySelector(':first-child.is-hidden');
			if (el != null) { 
				root.insertBefore(el, null);
			}
		});

		setInterval(function(){
			root.querySelector(':first-child').classList.add('is-hidden');
			root.querySelector(':nth-child(2)').classList.remove('is-hidden');
			}, timeout);
	}
		
}	   // end go function 