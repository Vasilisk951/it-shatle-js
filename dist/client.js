/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/client.js":
/*!**********************!*\
  !*** ./js/client.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n\nvar linkOne = document.querySelector('.nav-link:nth-child(2)');\nlinkOne.classList.add('nav-link__active');\nvar tBody = document.querySelector('.t-body');\nfetch('https://gist.githubusercontent.com/oDASCo/3f4014d24dc79e1e29b58bfa96afaa1b/raw/677516ee3bd278f7e3d805108596ca431d00b629/db.json').then(function (response) {\n  return response.json();\n}).then(function (data) {\n  for (var i = 0; i < data.length; i++) {\n    var tr = document.createElement('tr');\n    var tdName = document.createElement('td');\n    var tdCompany = document.createElement('td');\n    var tdEmail = document.createElement('td');\n    var tdPhone = document.createElement('td');\n    var tdBalance = document.createElement('td');\n    var tdDate = document.createElement('td');\n    var tdRemove = document.createElement('td');\n    tBody.appendChild(tr);\n    tr.append(tdName);\n    tr.append(tdCompany);\n    tr.append(tdEmail);\n    tr.append(tdPhone);\n    tr.append(tdBalance);\n    tr.append(tdDate);\n    tr.append(tdRemove);\n    tdName.append(data[i].name);\n    tdCompany.append(data[i].company);\n    tdEmail.append(data[i].email);\n    tdPhone.append(data[i].phone);\n    tdBalance.append(data[i].balance);\n    tdDate.append(data[i].registered);\n    tdRemove.append('❌');\n  } //работа с модальным окном\n\n\n  var users = document.querySelectorAll('tbody tr');\n  var user = document.querySelectorAll('tbody tr td:last-child');\n  var modalText = document.querySelector('.modal-text');\n  var btnRemove = document.querySelector('.remove');\n  var btnCancel = document.querySelector('.cancel');\n  var modal = document.querySelector('.modal');\n  var infoRemove = document.querySelector('.info');\n  var infoClose = document.querySelector('.info-hide');\n  var infoDo = document.querySelector('.info-remove'); //окрашиваем пользователей со значением - isActive: false\n\n  for (var _i = 0; _i < data.length; _i++) {\n    if (data[_i].isActive === false) {\n      users[_i].style.backgroundColor = 'gray';\n    }\n  } //получаю колическо женщин и мужчин \n\n\n  var maleItem = document.querySelector('.male');\n  var femaleItem = document.querySelector('.female');\n  var male = 0;\n  var female = 0;\n\n  for (var _i2 = 0; _i2 < data.length; _i2++) {\n    if (data[_i2].gender == \"male\") {\n      male += 1;\n    } else {\n      female += 1;\n    }\n  }\n\n  maleItem.append(\"\\u0412\\u0441\\u0435\\u0433\\u043E \\u043C\\u0443\\u0436\\u0447\\u0438\\u043D: \".concat(male));\n  femaleItem.append(\"\\u0412\\u0441\\u0435\\u0433\\u043E \\u0436\\u0435\\u043D\\u0449\\u0438\\u043D: \".concat(female)); //получаю массив баланса\n\n  var balance = document.querySelectorAll('tbody td:nth-child(5)');\n  var balanceUser = document.querySelector('.balance');\n  var arr = [];\n\n  for (var _i3 = 0; _i3 < balance.length; _i3++) {\n    var b = balance[_i3].textContent.substr(1);\n\n    b = b.replace(',', '');\n    arr.push(Number(b));\n  } //самое болье число в массиве\n\n\n  var maxNum = function maxNum() {\n    return Math.max.apply(null, arr);\n  };\n\n  var max = maxNum();\n  balanceUser.append(\"\\u041D\\u0430\\u0438\\u0431\\u043E\\u043B\\u044C\\u0448\\u0438\\u0439 \\u0431\\u0430\\u043B\\u0430\\u043D\\u0441: \".concat(max)); //модальное окно для подверждения удаления пользователя \n\n  var _loop = function _loop(_i4) {\n    user[_i4].style.cursor = 'pointer';\n    var b = user[_i4];\n    b.addEventListener('click', function () {\n      scroll(top);\n      document.body.style.overflow = 'hidden';\n      modal.classList.add('active');\n      modalText.innerHTML = \"\\u0412\\u044B \\u0442\\u043E\\u0447\\u043D\\u043E \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0443\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \".concat(data[_i4].name);\n      btnCancel.addEventListener('click', function () {\n        modal.classList.remove('active');\n        document.body.style.overflow = 'visible';\n      });\n      btnRemove.addEventListener('click', function () {\n        users[_i4].remove();\n\n        modal.classList.remove('active');\n        document.body.style.overflow = 'visible';\n        infoRemove.classList.add('active');\n      });\n    });\n  };\n\n  for (var _i4 = 0; _i4 < user.length; _i4++) {\n    _loop(_i4);\n  } //закрытие сообщения об удалении пользователя \n\n\n  infoClose.addEventListener('click', function () {\n    infoRemove.classList.toggle('active');\n  });\n});\n\n//# sourceURL=webpack:///./js/client.js?");

/***/ }),

/***/ "./css/index.css":
/*!***********************!*\
  !*** ./css/index.css ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./css/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/client.js");
/******/ 	
/******/ })()
;