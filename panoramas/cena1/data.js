var APP_DATA = {
  "scenes": [
    {
      "id": "0-cena-1---principal",
      "name": "Cena 1 - Principal",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.694450042637431,
        "pitch": -0.03761240595823523,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": -1.5197267728183483,
          "pitch": 0.08934454342266918,
          "rotation": 0,
          "target": "2-cena-1---vista-3"
        },
        {
          "yaw": 1.561784708799797,
          "pitch": 0.053176048507939555,
          "rotation": 0,
          "target": "1-cena-1---vista-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-cena-1---vista-2",
      "name": "Cena 1 - Vista 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -1.9240177230318345,
        "pitch": -0.060178018437959224,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": -1.5544128689695036,
          "pitch": 0.05446333663090286,
          "rotation": 0,
          "target": "0-cena-1---principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cena-1---vista-3",
      "name": "Cena 1 - Vista 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 2.162391418382665,
        "pitch": 0.0620566558861686,
        "fov": 1.4404666184485553
      },
      "linkHotspots": [
        {
          "yaw": 1.5651844063826559,
          "pitch": 0.06271938597926052,
          "rotation": 0,
          "target": "0-cena-1---principal"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Cena 1",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
