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
      "id": "0-28",
      "name": "28",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -1.4648143779901055,
        "pitch": 0.19649957798331918,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -1.322347655582881,
          "pitch": 0.4091159643015203,
          "rotation": 0,
          "target": "8-21"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-22",
      "name": "22",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.012496098466284522,
          "pitch": 0.11938891478125235,
          "rotation": 0,
          "target": "8-21"
        },
        {
          "yaw": 3.08584346089396,
          "pitch": 0.011085109882852606,
          "rotation": 0,
          "target": "3-27"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-29-palco",
      "name": "29 palco",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5370157093108672,
          "pitch": 0.0974821741934413,
          "rotation": 0,
          "target": "28-01-fotoesfera-frente-ao-palco"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-27",
      "name": "27",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.318538116164735,
        "pitch": 0.46602401142624217,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": 0.27934342065544726,
          "pitch": 0.11818089073719662,
          "rotation": 0,
          "target": "1-22"
        },
        {
          "yaw": -2.336231172159117,
          "pitch": 0.42071552908682364,
          "rotation": 0,
          "target": "6-24"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-26",
      "name": "26",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.685688118118616,
          "pitch": 0.44279235106744785,
          "rotation": 0,
          "target": "6-24"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-25",
      "name": "25",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -1.6277187018582175,
        "pitch": -0.17649519101853173,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -2.2006900017106403,
          "pitch": 0.049587127368976525,
          "rotation": 0,
          "target": "27-02-fotoesfera-vipdj-em-frente-01"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-24",
      "name": "24",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 2.967639036971784,
        "pitch": 0.2695686700617035,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": 0.8066904471632803,
          "pitch": 0.39237632388037014,
          "rotation": 0,
          "target": "3-27"
        },
        {
          "yaw": 2.531114179710614,
          "pitch": 0.34399923263609367,
          "rotation": 0,
          "target": "4-26"
        },
        {
          "yaw": -2.6447189275011986,
          "pitch": 0.4455192338677989,
          "rotation": 0,
          "target": "26-03-fotoesfera-ao--lado-da-02-saida"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-23-entrando-no-salao",
      "name": "23-ENTRANDO NO SALAO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6758272301117305,
          "pitch": 0.09476864138634866,
          "rotation": 0,
          "target": "8-21"
        },
        {
          "yaw": -0.45053922748777175,
          "pitch": 0.04573297699104728,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        },
        {
          "yaw": -1.3931942997716575,
          "pitch": 0.060953992095925,
          "rotation": 0,
          "target": "17-12-em-frente-ao-bar-do-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-21",
      "name": "21",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -3.0919241250923086,
        "pitch": 0.026999408234811284,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": 3.14110124794815,
          "pitch": 0.17074763298724527,
          "rotation": 0,
          "target": "1-22"
        },
        {
          "yaw": 2.274392078143011,
          "pitch": 0.17109231986833073,
          "rotation": 0,
          "target": "0-28"
        },
        {
          "yaw": 0.16583081499016217,
          "pitch": -0.05781134112407571,
          "rotation": 0,
          "target": "9-20-recepo"
        },
        {
          "yaw": -2.031404856159682,
          "pitch": 0.05845715249694905,
          "rotation": 0,
          "target": "7-23-entrando-no-salao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-20-recepo",
      "name": "20-RECEPÇÃO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 2.9231741607274895,
        "pitch": -0.05121262986226682,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -3.086039402976951,
          "pitch": -0.0341772785798895,
          "rotation": 0,
          "target": "8-21"
        },
        {
          "yaw": -1.195457479744304,
          "pitch": 0.016537278008167178,
          "rotation": 0,
          "target": "10-19-chapelarias"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-19-chapelarias",
      "name": "19-CHAPELARIAS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.1582655694324284,
        "pitch": -0.019889707000364965,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -1.4969756409411676,
          "pitch": 0.07472490911478147,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        },
        {
          "yaw": -1.8676298813545298,
          "pitch": 0.12126394483388481,
          "rotation": 0,
          "target": "9-20-recepo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-18-wcmascfrente",
      "name": "18-WCMASCFRENTE",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.0288873309039097,
        "pitch": 0.06443094176412423,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -2.0288873309039097,
          "pitch": 0.06443094176412423,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-16-depositoatrasdobar",
      "name": "16-DEPOSITOATRASDOBAR",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": -2.6229353134980435,
        "pitch": -0.06417164119941354,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -3.106509318073364,
          "pitch": 0.06914926388980547,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-17-wc-fem-frente",
      "name": "17-WC-FEM-FRENTE",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 2.3259916919277117,
        "pitch": -0.00020068773345371937,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": 3.0545073792693227,
          "pitch": 0.08912778837258628,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-15-cozinha",
      "name": "15-COZINHA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7190406971491345,
          "pitch": 0.008581205841201367,
          "rotation": 0,
          "target": "16-13-bar-meio"
        },
        {
          "yaw": 2.327171465090922,
          "pitch": 0.07200791115254113,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-14-ao-lado-bar-meio",
      "name": "14-AO-LADO-BAR-MEIO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3420012565188646,
          "pitch": -0.022833450832207447,
          "rotation": 0,
          "target": "16-13-bar-meio"
        },
        {
          "yaw": -0.4713448288561253,
          "pitch": -0.07549858622913064,
          "rotation": 0,
          "target": "14-15-cozinha"
        },
        {
          "yaw": -0.10293990008333687,
          "pitch": 0.025451660647993535,
          "rotation": 0,
          "target": "12-16-depositoatrasdobar"
        },
        {
          "yaw": 0.17066988884664092,
          "pitch": 0.017252346842425936,
          "rotation": 0,
          "target": "13-17-wc-fem-frente"
        },
        {
          "yaw": 0.2834259476693717,
          "pitch": 0.01694797249193236,
          "rotation": 0,
          "target": "11-18-wcmascfrente"
        },
        {
          "yaw": 0.41979699298601325,
          "pitch": 0.01629292792494752,
          "rotation": 0,
          "target": "10-19-chapelarias"
        },
        {
          "yaw": 2.4113637167155204,
          "pitch": 0.032088023385611564,
          "rotation": 0,
          "target": "7-23-entrando-no-salao"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-13-bar-meio",
      "name": "13-BAR-MEIO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 3.092930471631698,
        "pitch": -0.10052388193477313,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -3.099016826263094,
          "pitch": 0.05542201715210915,
          "rotation": 0,
          "target": "17-12-em-frente-ao-bar-do-meio"
        },
        {
          "yaw": 1.4944980271034893,
          "pitch": 0.014205134659540875,
          "rotation": 0,
          "target": "15-14-ao-lado-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-12-em-frente-ao-bar-do-meio",
      "name": "12-EM-FRENTE-AO-BAR-DO-MEIO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8821061899968257,
          "pitch": 0.017229562909720997,
          "rotation": 0,
          "target": "24-05-saindo-do-palcoprincipal-indo-aos-wc-dos-fundos"
        },
        {
          "yaw": -2.6375854214314813,
          "pitch": 0.0391043451427322,
          "rotation": 0,
          "target": "28-01-fotoesfera-frente-ao-palco"
        },
        {
          "yaw": -0.9225381453708383,
          "pitch": 0.06553087351649545,
          "rotation": 0,
          "target": "21-08-palco-secundario-meio"
        },
        {
          "yaw": 0.34413447998727165,
          "pitch": -0.02038338950806029,
          "rotation": 0,
          "target": "16-13-bar-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-11-palco-secundario-lado-bar-meio",
      "name": "11-PALCO-SECUNDARIO-LADO-BAR-MEIO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0763760952576806,
          "pitch": 0.07565601134138333,
          "rotation": 0,
          "target": "21-08-palco-secundario-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-10-palco-secundario-lado-bar-fundos",
      "name": "10-PALCO-SECUNDARIO-LADO-BAR-FUNDOS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.513019340526263,
          "pitch": 0.11622101375533056,
          "rotation": 0,
          "target": "21-08-palco-secundario-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-09-palco-secundario-bar-fundos",
      "name": "09-PALCO-SECUNDARIO-BAR-FUNDOS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4529835437037493,
          "pitch": -0.02873187112086306,
          "rotation": 0,
          "target": "21-08-palco-secundario-meio"
        },
        {
          "yaw": 0.10985734153395654,
          "pitch": -0.05344275753729377,
          "rotation": 0,
          "target": "19-10-palco-secundario-lado-bar-fundos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-08-palco-secundario-meio",
      "name": "08-PALCO-SECUNDARIO-MEIO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5227606046616042,
          "pitch": 0.06560645237214935,
          "rotation": 0,
          "target": "17-12-em-frente-ao-bar-do-meio"
        },
        {
          "yaw": 0.9852271539269122,
          "pitch": -0.005389391379560848,
          "rotation": 0,
          "target": "18-11-palco-secundario-lado-bar-meio"
        },
        {
          "yaw": -0.7616789128142631,
          "pitch": -0.020136322563569564,
          "rotation": 0,
          "target": "19-10-palco-secundario-lado-bar-fundos"
        },
        {
          "yaw": -1.7145651458544258,
          "pitch": -0.008964401110707954,
          "rotation": 0,
          "target": "20-09-palco-secundario-bar-fundos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-07-banheiro-masc-fundos",
      "name": "07-BANHEIRO-MASC-FUNDOS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.3840311277030093,
          "pitch": 0.1813572875552385,
          "rotation": 0,
          "target": "24-05-saindo-do-palcoprincipal-indo-aos-wc-dos-fundos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-06-entrada-wc-feminino-fundos",
      "name": "06-ENTRADA-WC-FEMININO-FUNDOS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5108380481535697,
          "pitch": 0.05287706317141705,
          "rotation": 0,
          "target": "24-05-saindo-do-palcoprincipal-indo-aos-wc-dos-fundos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-05-saindo-do-palcoprincipal-indo-aos-wc-dos-fundos",
      "name": "05-SAINDO-DO-PALCOPRINCIPAL-INDO-AOS-WC-DOS-FUNDOS",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6754107235017202,
          "pitch": 0.06283119515586577,
          "rotation": 0,
          "target": "22-07-banheiro-masc-fundos"
        },
        {
          "yaw": -1.3614493342568323,
          "pitch": 0.07367177159108529,
          "rotation": 0,
          "target": "23-06-entrada-wc-feminino-fundos"
        },
        {
          "yaw": -3.0916727424328165,
          "pitch": 0.10642167185582352,
          "rotation": 0,
          "target": "28-01-fotoesfera-frente-ao-palco"
        },
        {
          "yaw": 0.0738472482330792,
          "pitch": 0.06686980148050559,
          "rotation": 0,
          "target": "21-08-palco-secundario-meio"
        },
        {
          "yaw": 1.1612960004784103,
          "pitch": 0.034267372614984026,
          "rotation": 0,
          "target": "17-12-em-frente-ao-bar-do-meio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-04-bar-em-frente-ao-palco-principal",
      "name": "04-BAR-EM-FRENTE-AO-PALCO-PRINCIPAL",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.06719006539286809,
          "pitch": 0.1773247175412429,
          "rotation": 0,
          "target": "28-01-fotoesfera-frente-ao-palco"
        },
        {
          "yaw": 1.6518081301574945,
          "pitch": 0.12147997670353483,
          "rotation": 0,
          "target": "26-03-fotoesfera-ao--lado-da-02-saida"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-03-fotoesfera-ao--lado-da-02-saida",
      "name": "03-FOTOESFERA-AO -LADO-DA-02-SAIDA",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.517697177431078,
          "pitch": 0.3753087626809233,
          "rotation": 0,
          "target": "6-24"
        },
        {
          "yaw": 0.07858698213486726,
          "pitch": 0.15318442799258314,
          "rotation": 0,
          "target": "27-02-fotoesfera-vipdj-em-frente-01"
        },
        {
          "yaw": -1.5190862288202247,
          "pitch": 0.06331443543056636,
          "rotation": 0,
          "target": "25-04-bar-em-frente-ao-palco-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-02-fotoesfera-vipdj-em-frente-01",
      "name": "02-FOTOESFERA-VIPDJ-EM-FRENTE-01",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3688884264360957
      },
      "linkHotspots": [
        {
          "yaw": -1.5357192393910566,
          "pitch": 0.08426833699064318,
          "rotation": 0,
          "target": "28-01-fotoesfera-frente-ao-palco"
        },
        {
          "yaw": 3.0077486026770703,
          "pitch": 0.23109047590959797,
          "rotation": 0,
          "target": "26-03-fotoesfera-ao--lado-da-02-saida"
        },
        {
          "yaw": 0.695593990620722,
          "pitch": -0.030689309418235666,
          "rotation": 0,
          "target": "5-25"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6035135746411129,
          "pitch": -0.01689772028334602,
          "title": "TESTE",
          "text": "TESTANDO<div>https://www.youtube.com/?app=desktop&amp;hl=pt<br><div><br></div></div>"
        }
      ]
    },
    {
      "id": "28-01-fotoesfera-frente-ao-palco",
      "name": "01-FOTOESFERA-FRENTE-AO-PALCO",
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
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1536,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5436635276742976,
          "pitch": -0.01555426316001629,
          "rotation": 0,
          "target": "2-29-palco"
        },
        {
          "yaw": -0.11775965348638096,
          "pitch": 0.0362946394743453,
          "rotation": 0,
          "target": "24-05-saindo-do-palcoprincipal-indo-aos-wc-dos-fundos"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
