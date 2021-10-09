/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function contactContent(){
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'main');
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    h1.textContent = "Contact!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae obcaecati incidunt hic distinctio sit commodi neque aliquam. Minima quam delectus, aperiam quas cumque at ipsam veritatis tempora magnam rerum."

    divContent.appendChild(h1);
    divContent.appendChild(para);

    return divContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactContent);

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function menuContent(){
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'main');
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    h1.textContent = "Menu!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae obcaecati incidunt hic distinctio sit commodi neque aliquam. Minima quam delectus, aperiam quas cumque at ipsam veritatis tempora magnam rerum."

    divContent.appendChild(h1);
    divContent.appendChild(para);

    return divContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuContent);

/***/ }),

/***/ "./src/createTabs.js":
/*!***************************!*\
  !*** ./src/createTabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabList": () => (/* binding */ tabList),
/* harmony export */   "home": () => (/* binding */ home),
/* harmony export */   "menu": () => (/* binding */ menu),
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });
const tabList = document.createElement('ul');
const home = document.createElement('li');
const menu = document.createElement('li');
const contact = document.createElement('li');

home.textContent = 'Home';
menu.textContent = 'Menu';
contact.textContent = 'Contact';

home.style.cursor = 'pointer';
menu.style.cursor = 'pointer';
contact.style.cursor = 'pointer';

tabList.appendChild(home);
tabList.appendChild(menu);
tabList.appendChild(contact);

tabList.style.listStyleType = 'none';
tabList.style.display = 'flex';
tabList.style.gap = '20px';
tabList.style.justifyContent = 'center'



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Homecontent(){
    const divContent = document.createElement('div');
    divContent.setAttribute('class', 'main');
    const image = document.createElement('img');
    const h1 = document.createElement('h1');
    const para = document.createElement('p');

    image.src = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F8258272.jpg&q=85";
    image.style.width = '1280px';
    image.style.height = '720px';
    h1.textContent = "Welcome To Our Restaurant!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. At quae obcaecati incidunt hic distinctio sit commodi neque aliquam. Minima quam delectus, aperiam quas cumque at ipsam veritatis tempora magnam rerum."

    divContent.appendChild(image);
    divContent.appendChild(h1);
    divContent.appendChild(para);

    return divContent;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homecontent);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTabs.js */ "./src/createTabs.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.js */ "./src/Menu.js");
/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.js */ "./src/Contact.js");





const divAppend = document.querySelector('#content');

document.body.insertBefore(_createTabs_js__WEBPACK_IMPORTED_MODULE_0__.tabList, divAppend);

const makeDiv = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

divAppend.appendChild(makeDiv);

_createTabs_js__WEBPACK_IMPORTED_MODULE_0__.menu.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeMenu = (0,_Menu_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    divAppend.appendChild(makeMenu);
});

_createTabs_js__WEBPACK_IMPORTED_MODULE_0__.contact.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeContact = (0,_Contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    divAppend.appendChild(makeContact);
})

_createTabs_js__WEBPACK_IMPORTED_MODULE_0__.home.addEventListener('click', ()=>{
    divAppend.innerHTML = '';
    const makeHome = (0,_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    divAppend.appendChild(makeHome);
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUNmN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2YxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXOzs7Ozs7VUNwQjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNONkQ7QUFDekI7QUFDQTtBQUNNOztBQUUxQzs7QUFFQSwyQkFBMkIsbURBQU87O0FBRWxDLGdCQUFnQixvREFBVzs7QUFFM0I7O0FBRUEsaUVBQXFCO0FBQ3JCO0FBQ0EscUJBQXFCLG9EQUFXO0FBQ2hDO0FBQ0EsQ0FBQzs7QUFFRCxvRUFBd0I7QUFDeEI7QUFDQSx3QkFBd0IsdURBQWM7QUFDdEM7QUFDQSxDQUFDOztBQUVELGlFQUFxQjtBQUNyQjtBQUNBLHFCQUFxQixvREFBVztBQUNoQztBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXV0YXJhbnQtcGFnZS8uL3NyYy9Db250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXRhcmFudC1wYWdlLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1dGFyYW50LXBhZ2UvLi9zcmMvY3JlYXRlVGFicy5qcyIsIndlYnBhY2s6Ly9yZXN0YXV0YXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXRhcmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXRhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXV0YXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXRhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1dGFyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKXtcbiAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2Q29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ21haW4nKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGgxLnRleHRDb250ZW50ID0gXCJDb250YWN0IVwiO1xuICAgIHBhcmEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEF0IHF1YWUgb2JjYWVjYXRpIGluY2lkdW50IGhpYyBkaXN0aW5jdGlvIHNpdCBjb21tb2RpIG5lcXVlIGFsaXF1YW0uIE1pbmltYSBxdWFtIGRlbGVjdHVzLCBhcGVyaWFtIHF1YXMgY3VtcXVlIGF0IGlwc2FtIHZlcml0YXRpcyB0ZW1wb3JhIG1hZ25hbSByZXJ1bS5cIlxuXG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChoMSk7XG4gICAgZGl2Q29udGVudC5hcHBlbmRDaGlsZChwYXJhKTtcblxuICAgIHJldHVybiBkaXZDb250ZW50O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0Q29udGVudDsiLCJmdW5jdGlvbiBtZW51Q29udGVudCgpe1xuICAgIGNvbnN0IGRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250ZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnbWFpbicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaDEudGV4dENvbnRlbnQgPSBcIk1lbnUhXCI7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXQgcXVhZSBvYmNhZWNhdGkgaW5jaWR1bnQgaGljIGRpc3RpbmN0aW8gc2l0IGNvbW1vZGkgbmVxdWUgYWxpcXVhbS4gTWluaW1hIHF1YW0gZGVsZWN0dXMsIGFwZXJpYW0gcXVhcyBjdW1xdWUgYXQgaXBzYW0gdmVyaXRhdGlzIHRlbXBvcmEgbWFnbmFtIHJlcnVtLlwiXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnVDb250ZW50OyIsImNvbnN0IHRhYkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG5ob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xubWVudS50ZXh0Q29udGVudCA9ICdNZW51JztcbmNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbmhvbWUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xubWVudS5zdHlsZS5jdXJzb3IgPSAncG9pbnRlcic7XG5jb250YWN0LnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcblxudGFiTGlzdC5hcHBlbmRDaGlsZChob21lKTtcbnRhYkxpc3QuYXBwZW5kQ2hpbGQobWVudSk7XG50YWJMaXN0LmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuXG50YWJMaXN0LnN0eWxlLmxpc3RTdHlsZVR5cGUgPSAnbm9uZSc7XG50YWJMaXN0LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG50YWJMaXN0LnN0eWxlLmdhcCA9ICcyMHB4JztcbnRhYkxpc3Quc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnY2VudGVyJ1xuXG5leHBvcnQge3RhYkxpc3QsIGhvbWUsIG1lbnUsIGNvbnRhY3R9OyIsImZ1bmN0aW9uIEhvbWVjb250ZW50KCl7XG4gICAgY29uc3QgZGl2Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdtYWluJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGltYWdlLnNyYyA9IFwiaHR0cHM6Ly9pbWFnZXN2Yy5tZXJlZGl0aGNvcnAuaW8vdjMvbW0vaW1hZ2U/dXJsPWh0dHBzJTNBJTJGJTJGaW1hZ2VzLm1lZGlhLWFsbHJlY2lwZXMuY29tJTJGdXNlcnBob3RvcyUyRjgyNTgyNzIuanBnJnE9ODVcIjtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9ICcxMjgwcHgnO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9ICc3MjBweCc7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgVG8gT3VyIFJlc3RhdXJhbnQhXCI7XG4gICAgcGFyYS50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gQXQgcXVhZSBvYmNhZWNhdGkgaW5jaWR1bnQgaGljIGRpc3RpbmN0aW8gc2l0IGNvbW1vZGkgbmVxdWUgYWxpcXVhbS4gTWluaW1hIHF1YW0gZGVsZWN0dXMsIGFwZXJpYW0gcXVhcyBjdW1xdWUgYXQgaXBzYW0gdmVyaXRhdGlzIHRlbXBvcmEgbWFnbmFtIHJlcnVtLlwiXG5cbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKGgxKTtcbiAgICBkaXZDb250ZW50LmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gICAgcmV0dXJuIGRpdkNvbnRlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVjb250ZW50OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0YWJMaXN0LCBob21lLCBtZW51LCBjb250YWN0fSBmcm9tICcuL2NyZWF0ZVRhYnMuanMnO1xuaW1wb3J0IEhvbWVjb250ZW50IGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgbWVudUNvbnRlbnQgZnJvbSAnLi9NZW51LmpzJztcbmltcG9ydCBjb250YWN0Q29udGVudCBmcm9tICcuL0NvbnRhY3QuanMnO1xuXG5jb25zdCBkaXZBcHBlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh0YWJMaXN0LCBkaXZBcHBlbmQpO1xuXG5jb25zdCBtYWtlRGl2ID0gSG9tZWNvbnRlbnQoKTtcblxuZGl2QXBwZW5kLmFwcGVuZENoaWxkKG1ha2VEaXYpO1xuXG5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBkaXZBcHBlbmQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgbWFrZU1lbnUgPSBtZW51Q29udGVudCgpO1xuICAgIGRpdkFwcGVuZC5hcHBlbmRDaGlsZChtYWtlTWVudSk7XG59KTtcblxuY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZGl2QXBwZW5kLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IG1ha2VDb250YWN0ID0gY29udGFjdENvbnRlbnQoKTtcbiAgICBkaXZBcHBlbmQuYXBwZW5kQ2hpbGQobWFrZUNvbnRhY3QpO1xufSlcblxuaG9tZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgZGl2QXBwZW5kLmlubmVySFRNTCA9ICcnO1xuICAgIGNvbnN0IG1ha2VIb21lID0gSG9tZWNvbnRlbnQoKTtcbiAgICBkaXZBcHBlbmQuYXBwZW5kQ2hpbGQobWFrZUhvbWUpO1xufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9