/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/returnsUncompleted.js":
/*!*******************************************!*\
  !*** ./src/modules/returnsUncompleted.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ returnsUncompleted)
/* harmony export */ });
// returnsUncompleted.js

function returnsUncompleted(task) {
  return !task.isCompleted;
}

/***/ }),

/***/ "./src/modules/store.js":
/*!******************************!*\
  !*** ./src/modules/store.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
// Store Class: Encapsulates de locacl storage

class Store {
  // gets tasks from storage and returns an array of objects
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    return tasks;
  }

  static setTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

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
/*!*****************************************!*\
  !*** ./src/modules/helpfulFunctions.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateDescription": () => (/* binding */ validateDescription),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
/* harmony import */ var _returnsUncompleted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./returnsUncompleted */ "./src/modules/returnsUncompleted.js");
// helper functions




// function to help validate input
const validateDescription = (text) => {
  if (text === null || text === '') {
    return false;
  }
  return true;
};

const clearCompleted = () => {
  // gets todos from local storage
  const tasks = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
  // create new array from filter()
  const uncompletedTasks = tasks.filter(_returnsUncompleted__WEBPACK_IMPORTED_MODULE_1__["default"]);
  // updates indexes
  uncompletedTasks.forEach((todo, index) => { todo.index = index; });

  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(uncompletedTasks);
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUU0QjtBQUMwQjs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1REFBYztBQUM5QjtBQUNBLHdDQUF3QywyREFBa0I7QUFDMUQ7QUFDQSw4Q0FBOEMscUJBQXFCOztBQUVuRSxFQUFFLHVEQUFjO0FBQ2hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL3JldHVybnNVbmNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy9oZWxwZnVsRnVuY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJldHVybnNVbmNvbXBsZXRlZC5qc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXR1cm5zVW5jb21wbGV0ZWQodGFzaykge1xuICByZXR1cm4gIXRhc2suaXNDb21wbGV0ZWQ7XG59IiwiLy8gU3RvcmUgQ2xhc3M6IEVuY2Fwc3VsYXRlcyBkZSBsb2NhY2wgc3RvcmFnZVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdG9yZSB7XG4gIC8vIGdldHMgdGFza3MgZnJvbSBzdG9yYWdlIGFuZCByZXR1cm5zIGFuIGFycmF5IG9mIG9iamVjdHNcbiAgc3RhdGljIGdldFRhc2tzKCkge1xuICAgIGxldCB0YXNrcztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykgPT09IG51bGwpIHtcbiAgICAgIHRhc2tzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tzO1xuICB9XG5cbiAgc3RhdGljIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaGVscGVyIGZ1bmN0aW9uc1xuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgcmV0dXJuc1VuY29tcGxldGVkIGZyb20gJy4vcmV0dXJuc1VuY29tcGxldGVkJztcblxuLy8gZnVuY3Rpb24gdG8gaGVscCB2YWxpZGF0ZSBpbnB1dFxuY29uc3QgdmFsaWRhdGVEZXNjcmlwdGlvbiA9ICh0ZXh0KSA9PiB7XG4gIGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09ICcnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufTtcblxuY29uc3QgY2xlYXJDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIC8vIGdldHMgdG9kb3MgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHRhc2tzID0gU3RvcmUuZ2V0VGFza3MoKTtcbiAgLy8gY3JlYXRlIG5ldyBhcnJheSBmcm9tIGZpbHRlcigpXG4gIGNvbnN0IHVuY29tcGxldGVkVGFza3MgPSB0YXNrcy5maWx0ZXIocmV0dXJuc1VuY29tcGxldGVkKTtcbiAgLy8gdXBkYXRlcyBpbmRleGVzXG4gIHVuY29tcGxldGVkVGFza3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHsgdG9kby5pbmRleCA9IGluZGV4OyB9KTtcblxuICBTdG9yZS5zZXRUYXNrcyh1bmNvbXBsZXRlZFRhc2tzKTtcbn07XG5cbmV4cG9ydCB7IHZhbGlkYXRlRGVzY3JpcHRpb24sIGNsZWFyQ29tcGxldGVkIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9