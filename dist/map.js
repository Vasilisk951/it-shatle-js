/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/map.js":
/*!*******************!*\
  !*** ./js/map.js ***!
  \*******************/
/***/ (function() {

eval("function initMap() {\n  var map = new google.maps.Map(document.getElementById(\"map\"), {\n    zoom: 10,\n    center: {\n      lat: 53.89979378678366,\n      lng: 27.55869137841202\n    }\n  }); //массив координат\n\n  var bounds = [{\n    lat: 53.95085118887747,\n    lng: 27.70882084014367\n  }, {\n    lat: 53.904129365496345,\n    lng: 27.55268293719863\n  }, {\n    lat: 53.902651919950586,\n    lng: 27.552518989008732\n  }, {\n    lat: 54.34678865889989,\n    lng: 26.556622147000812\n  }, {\n    lat: 53.974689164474874,\n    lng: 27.416639638075203\n  }, {\n    lat: 53.85355687152397,\n    lng: 27.586726611674198\n  }, {\n    lat: 55.575682590237086,\n    lng: 27.731685721615467\n  }, {\n    lat: 55.76047166223036,\n    lng: 27.617295942711507\n  }, {\n    lat: 56.046948463407595,\n    lng: 28.119671996519397\n  }, {\n    lat: 55.719975352405,\n    lng: 27.055837430516636\n  }, {\n    lat: 55.57677668619091,\n    lng: 26.685240474369245\n  }, {\n    lat: 53.22276371940064,\n    lng: 26.691720453259734\n  }, {\n    lat: 52.7658293255776,\n    lng: 25.121548867556893\n  }, {\n    lat: 53.25431187821722,\n    lng: 24.42141417903952\n  }, {\n    lat: 53.410546824533874,\n    lng: 24.545528813947513\n  }]; //сообщения по клику на маркер\n\n  var secretMessages = [\"Дворец спорта Уручье\", \"Robinzon.by Магазин туристического снаряжения\", \"Красный дворик\", \"Касцёл Святой Тройцы\", \"Пляж № 5\", 'Развалины мельницы', 'Экологическая тропа «Озеравки-Ельня»', 'Водопад на реке Вята', 'остров Ду', 'Гора Маяк', 'ГЭС Дружба народов', 'Несвижский замок', 'Дворец Пусловских', 'Красносельские карьеры', 'Подвесной мост'];\n\n  for (var i = 0; i < secretMessages.length; ++i) {\n    var marker = new google.maps.Marker({\n      position: bounds[i],\n      map: map\n    });\n    attachSecretMessage(marker, secretMessages[i]);\n  }\n} // Attaches an info window to a marker with the provided message. When the\n// marker is clicked, the info window will open with the secret message.\n\n\nfunction attachSecretMessage(marker, secretMessage) {\n  var infowindow = new google.maps.InfoWindow({\n    content: secretMessage\n  });\n  marker.addListener(\"click\", function () {\n    infowindow.open(marker.get(\"map\"), marker);\n  });\n}\n\nwindow.initMap = initMap;\n\n//# sourceURL=webpack:///./js/map.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/map.js"]();
/******/ 	
/******/ })()
;