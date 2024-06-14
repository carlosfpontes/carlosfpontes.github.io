var APP_DATA = {
  "scenes": [
    {
      "id": "0-imagem-01",
      "name": "Imagem 01",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "yaw": -1.2499389855003926,
        "pitch": 0.12283840678627023,
        "fov": 1.3346716639207459
      },
      "linkHotspots": [
        {
          "yaw": -1.1827251102701553,
          "pitch": 0.07756573658608623,
          "rotation": 0,
          "target": "1-imagem-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6652398806235036,
          "pitch": -0.1419073011261318,
          "title": "Edifício",
          "text": "Texto aqui!"
        },
        {
          "yaw": -0.10611737651719189,
          "pitch": 0.30050115494169916,
          "title": "Rio",
          "text": "Texto Aqui!"
        }
      ]
    },
    {
      "id": "1-imagem-02",
      "name": "Imagem 02",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 750,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0858910479275181,
          "pitch": -0.02819184478160075,
          "rotation": 0,
          "target": "0-imagem-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.407979857745623,
          "pitch": -0.3783674334856393,
          "title": "Title",
          "text": "Text"
        }
      ]
    }
  ],
  "name": "Testando panorama",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
