/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth.js */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu.js */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBcUM7QUFDQTtBQUNyQztBQUNBLDREQUFJO0FBQ0osNERBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZWxpdmVyeUZvb2QvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhdXRoIGZyb20gXCIuL21vZHVsZXMvYXV0aC5qc1wiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnUuanNcIjtcclxuXHJcbmF1dGgoKTtcclxubWVudSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth');\r\nconst modalAuth  = document.querySelector('.modal-auth');\r\nconst closeAuth  = document.querySelector('.close-auth');\r\nconst logInForm  = document.getElementById('logInForm');\r\nconst inputLogin = document.getElementById('login');\r\nconst inputPassword = document.getElementById('password');\r\nconst buttonOut = document.querySelector('.button-out');\r\nconst userName = document.querySelector('.user-name');\r\n\r\nconst login = (user) => {\r\n    buttonAuth.style.display = 'none';\r\n\r\n    buttonOut.style.display = 'flex';\r\n    userName.style.display = 'flex';\r\n\r\n    userName.textContent = user.login;\r\n    modalAuth.style.display = 'none';\r\n}\r\n\r\nconst logout = () => {\r\n    buttonAuth.style.display = 'flex';\r\n\r\n    buttonOut.style.display = 'none';\r\n    userName.style.display = 'none';\r\n\r\n    userName.textContent = '';\r\n\r\n    localStorage.removeItem('user');\r\n}\r\n\r\nbuttonAuth.addEventListener('click', () => {\r\n    modalAuth.style.display = 'flex';\r\n});\r\n\r\ncloseAuth.addEventListener('click', () => {\r\n    modalAuth.style.display = 'none';\r\n});\r\n\r\nlogInForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n    \r\n    if (inputLogin.value == '') {\r\n        const message = alert('Необходимо ввести логин!')\r\n    } else {\r\n        const user = {\r\n            login: inputLogin.value,\r\n            password: inputPassword.value,\r\n        }\r\n        \r\n        localStorage.setItem('user',JSON.stringify(user));\r\n        login(user);  \r\n}  \r\n});\r\n\r\nbuttonOut.addEventListener('click', () => {\r\n    logout();\r\n});\r\n\r\nif (localStorage.getItem('user')) {\r\n    login(JSON.parse(localStorage.getItem('user')));\r\n};\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vRGVsaXZlcnlGb29kLy4vc3JjL21vZHVsZXMvYXV0aC5qcz9lN2IxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF1dGggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBidXR0b25BdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1hdXRoJyk7XHJcbmNvbnN0IG1vZGFsQXV0aCAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpO1xyXG5jb25zdCBjbG9zZUF1dGggID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKTtcclxuY29uc3QgbG9nSW5Gb3JtICA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dJbkZvcm0nKTtcclxuY29uc3QgaW5wdXRMb2dpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbicpO1xyXG5jb25zdCBpbnB1dFBhc3N3b3JkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkJyk7XHJcbmNvbnN0IGJ1dHRvbk91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tb3V0Jyk7XHJcbmNvbnN0IHVzZXJOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItbmFtZScpO1xyXG5cclxuY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9IHVzZXIubG9naW47XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufVxyXG5cclxuY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgYnV0dG9uQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG5cclxuICAgIGJ1dHRvbk91dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbn1cclxuXHJcbmJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufSk7XHJcblxyXG5jbG9zZUF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBtb2RhbEF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxufSk7XHJcblxyXG5sb2dJbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBpZiAoaW5wdXRMb2dpbi52YWx1ZSA9PSAnJykge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBhbGVydCgn0J3QtdC+0LHRhdC+0LTQuNC80L4g0LLQstC10YHRgtC4INC70L7Qs9C40L0hJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IHtcclxuICAgICAgICAgICAgbG9naW46IGlucHV0TG9naW4udmFsdWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsSlNPTi5zdHJpbmdpZnkodXNlcikpO1xyXG4gICAgICAgIGxvZ2luKHVzZXIpOyAgXHJcbn0gIFxyXG59KTtcclxuXHJcbmJ1dHRvbk91dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxvZ291dCgpO1xyXG59KTtcclxuXHJcbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICBsb2dpbihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpKTtcclxufTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXV0aDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const restourant = 'food-band';\r\nconst renderItems = (data) => {\r\n    data.forEach((elem) => {\r\n        console.log(elem);\r\n    });    \r\n}\r\n\r\nfetch(`https://deliveryfood-3eb10-default-rtdb.firebaseio.com/db/${restourant}.json`)\r\n.then((Response) => Response.json())\r\n.then((data) => renderItems(data))\r\n.catch((error) => {console.log(error)});\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RTtBQUNBO0FBQ0EsbUJBQW1CLG1CQUFtQjtBQUN0QztBQUNBO0FBQ0EsaUVBQWUsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL0RlbGl2ZXJ5Rm9vZC8uL3NyYy9tb2R1bGVzL21lbnUuanM/MmZhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzdG91cmFudCA9ICdmb29kLWJhbmQnO1xyXG5jb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcbiAgICBkYXRhLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlbGVtKTtcclxuICAgIH0pOyAgICBcclxufVxyXG5cclxuZmV0Y2goYGh0dHBzOi8vZGVsaXZlcnlmb29kLTNlYjEwLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbS9kYi8ke3Jlc3RvdXJhbnR9Lmpzb25gKVxyXG4udGhlbigoUmVzcG9uc2UpID0+IFJlc3BvbnNlLmpzb24oKSlcclxuLnRoZW4oKGRhdGEpID0+IHJlbmRlckl0ZW1zKGRhdGEpKVxyXG4uY2F0Y2goKGVycm9yKSA9PiB7Y29uc29sZS5sb2coZXJyb3IpfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;