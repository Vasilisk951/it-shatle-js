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

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.css */ \"./css/index.css\");\n\nvar btnEnter = document.querySelector('.reg-btn_enter');\nvar formEnter = document.querySelector('.reg-enter-form');\nvar btnReg = document.querySelector('.btn-register');\nvar formReg = document.querySelector('.reg-register-form');\nvar regBg = document.querySelector('.reg');\nvar parentFormEnter = document.querySelector('.reg-enter');\nvar parentFormRegister = document.querySelector('.reg-register');\nvar closeModal = document.querySelector('.bg-opacity');\nbtnEnter.addEventListener('click', function () {\n  regBg.classList.toggle('active');\n  formEnter.classList.add('active');\n  formReg.classList.remove('active');\n  parentFormRegister.classList.remove('center');\n  parentFormEnter.classList.add('center');\n});\nbtnReg.addEventListener('click', function () {\n  formEnter.classList.remove('active');\n  formReg.classList.add('active');\n  parentFormEnter.classList.remove('center');\n  parentFormRegister.classList.add('center');\n});\ncloseModal.addEventListener('click', function () {\n  formEnter.classList.remove('active');\n  formReg.classList.remove('active');\n  regBg.classList.remove('active');\n}); // validation\n// validation enter\n\nvar link = document.querySelectorAll('.nav-link');\nvar nav = document.querySelector('.nav');\nvar content = document.querySelector('.content');\nvar userEmail = document.querySelector('.userEmail');\nvar userPswrd = document.querySelector('.userPswrd');\nvar sendFormBtn = document.querySelector('.send-form');\nvar EMAIL_REGEXP = /^(((?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+(\\.(?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+)*)|(\"(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+\"))@(((?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+\\.)+(?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S]){2,})$/i;\nvar PASSORD_REGEXP = /^(?=.*[A-Z].)(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{6,}$/;\nformEnter.addEventListener('submit', function (event) {\n  event.preventDefault();\n\n  if (!EMAIL_REGEXP.test(userEmail.value)) {\n    event.preventDefault();\n    userEmail.style.borderColor = 'red';\n  }\n\n  if (!PASSORD_REGEXP.test(userPswrd.value)) {\n    event.preventDefault();\n    userPswrd.style.borderColor = 'red';\n  } //организован вход в аккаунт и появление сайта авторизованному пользователю\n\n\n  for (var i in users) {\n    for (var key in users[i]) {\n      if (users[i][key] == userEmail.value) {\n        for (var value in users[i]) {\n          if (users[i][value] == userPswrd.value) {\n            location.href = 'homepage.html';\n          }\n        }\n      }\n    }\n  }\n});\n\nfunction validateEmail(value) {\n  return EMAIL_REGEXP.test(value);\n}\n\nfunction validatePassword(value) {\n  return PASSORD_REGEXP.test(value);\n}\n\nfunction updateInput() {\n  if (validateEmail(userEmail.value)) {\n    userEmail.style.borderColor = 'green';\n  } else {\n    userEmail.style.borderColor = 'red';\n  }\n}\n\nfunction updatePassword() {\n  if (validatePassword(userPswrd.value)) {\n    userPswrd.style.borderColor = 'green';\n  } else {\n    userPswrd.style.borderColor = 'red';\n  }\n}\n\nuserEmail.addEventListener('input', updateInput);\nuserPswrd.addEventListener('input', updatePassword); // validation registration\n\nvar PHONE_REGEXP = /^\\+?(\\d{1,3})?[- .]?\\(?(?:\\d{2,3})\\)?[- .]?\\d\\d\\d[- .]?\\d\\d\\d\\d$/;\nvar USER_REGEXP = /^[A-Za-z0-9_-]{2,16}$/;\nvar userName = document.querySelector('.userName');\nvar pswrdReg = document.querySelector('.pswrd-reg');\nvar pswrdRedDB = document.querySelector('.pswrd-reg-db');\nvar userCompany = document.querySelector('.user-Company');\nvar userEmailReg = document.querySelector('.user-email');\nvar userPhone = document.querySelector('.user-phone');\nvar userBalance = document.querySelector('.user-balance');\nvar newUser = document.querySelectorAll('form.reg-register-form input'); //получаем ключи из local storage и добавляем в массив обекты полльзователей \n\nvar keyLocalStorage = Object.keys(localStorage);\nvar users = []; //получаем пользователей из LocalStorage и добавляем их в массив\n\nfor (var i = 0; i < keyLocalStorage.length; i++) {\n  users.push(JSON.parse(localStorage.getItem(keyLocalStorage[i])));\n}\n\nformReg.addEventListener('submit', function (event) {\n  if (!USER_REGEXP.test(userName.value)) {\n    event.preventDefault();\n    userName.style.borderColor = 'red';\n  }\n\n  if (!PASSORD_REGEXP.test(pswrdReg.value)) {\n    event.preventDefault();\n    pswrdReg.style.borderColor = 'red';\n  }\n\n  if (pswrdReg.value !== pswrdRedDB.value) {\n    event.preventDefault();\n    pswrdRedDB.style.borderColor = 'red';\n    pswrdReg.style.borderColor = 'transparent';\n  }\n\n  if (!EMAIL_REGEXP.test(userEmailReg.value)) {\n    event.preventDefault();\n    userEmailReg.style.borderColor = 'red';\n  }\n\n  if (!PHONE_REGEXP.test(userPhone.value)) {\n    event.preventDefault();\n    userPhone.style.borderColor = 'red';\n  }\n\n  if (userCompany.value == '') {\n    event.preventDefault();\n    userCompany.style.borderColor = 'red';\n  }\n\n  if (userBalance.value == '') {\n    event.preventDefault();\n    userBalance.style.borderColor = 'red';\n  } //создаем пользователя\n\n\n  var us = {\n    name: newUser[0].value,\n    password: newUser[1].value,\n    company: newUser[3].value,\n    email: newUser[4].value,\n    phone: newUser[5].value,\n    balance: \" $\".concat(newUser[6].value),\n    registered: new Date()\n  }; //добавляем пол пользователя\n\n  for (var _i = 6; _i < newUser.length; _i++) {\n    if (newUser[_i].checked == true) {\n      us.gender = newUser[_i].value;\n    }\n  } //отправляем пользователя в localStorage\n\n\n  if (us.name != '' && us.password != '' && us.company != '' && us.email != '' && us.phone != '' && us.balance != '') {\n    localStorage.setItem(us.name, JSON.stringify(us));\n  }\n});\n\nfunction updateRegName() {\n  if (USER_REGEXP.test(userName.value)) {\n    userName.style.borderColor = 'green';\n  } else {\n    userName.style.borderColor = 'red';\n  }\n}\n\nfunction updateRegPswrd() {\n  if (PASSORD_REGEXP.test(pswrdReg.value)) {\n    pswrdReg.style.borderColor = 'green';\n  } else {\n    pswrdReg.style.borderColor = 'red';\n  }\n}\n\nfunction samePassword() {\n  if (pswrdReg.value === pswrdRedDB.value) {\n    pswrdRedDB.style.borderColor = 'green';\n  } else {\n    pswrdRedDB.style.borderColor = 'red';\n  }\n}\n\nfunction updateRegEmail() {\n  if (EMAIL_REGEXP.test(userEmailReg.value)) {\n    userEmailReg.style.borderColor = 'green';\n  } else {\n    userEmailReg.style.borderColor = 'red';\n  }\n}\n\nfunction updateRegCompany() {\n  if (userCompany.value.length >= 2) {\n    userCompany.style.borderColor = 'green';\n  } else {\n    userCompany.style.borderColor = 'red';\n  }\n}\n\nfunction updateRegPhone() {\n  if (PHONE_REGEXP.test(userPhone.value)) {\n    userPhone.style.borderColor = 'green';\n  } else {\n    userPhone.style.borderColor = 'red';\n  }\n}\n\nfunction updateRegBalance() {\n  if (userBalance.value != '') {\n    userBalance.style.borderColor = 'green';\n  } else {\n    userBalance.style.borderColor = 'red';\n  }\n}\n\nuserName.addEventListener('input', updateRegName);\npswrdReg.addEventListener('input', updateRegPswrd);\nuserEmailReg.addEventListener('input', updateRegEmail);\nuserPhone.addEventListener('input', updateRegPhone);\npswrdRedDB.addEventListener('input', samePassword);\nuserCompany.addEventListener('input', updateRegCompany);\nuserBalance.addEventListener('input', updateRegBalance);\n\n//# sourceURL=webpack:///./js/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;