/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/checkboxes.js":
/*!***********************************!*\
  !*** ./src/modules/checkboxes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
// checkboxes.js



// function to change isCompleted value of tasks
const taskCompleted = (position2chage, value) => {
  // Gets list from local storage
  const toDos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

  const task2modify = toDos[position2chage];
  task2modify.isCompleted = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(toDos);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskCompleted);

/***/ }),

/***/ "./src/modules/helpfulFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/helpfulFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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



/***/ }),

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

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
// TASK: class that reps a single task or 'to-do'
class Task {
  constructor(description, index) {
    this.description = description;
    this.isCompleted = false;
    this.index = index;
  }

  task2str() {
    const isDone = (isCompleted) => (isCompleted ? 'yes' : 'no');
    const myStr = `Task#${this.index}: ${this.description} -- done? ${isDone(this.isCompleted)}`;
    return myStr;
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
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/modules/store.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/modules/task.js");
/* harmony import */ var _checkboxes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkboxes */ "./src/modules/checkboxes.js");
/* harmony import */ var _helpfulFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpfulFunctions */ "./src/modules/helpfulFunctions.js");
// user interface






class UI {
  static addTask2list(task) {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'app-item d-flex align-items-center px-2';

    // creates div for normal view
    const divNormal = document.createElement('div');
    divNormal.className = 'd-flex flex-row justify-content-between align-items-center normal-view';

    const checkbox = document.createElement('input'); // creates checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = task.isCompleted;
    checkbox.className = 'form-check-label p-0';
    divNormal.appendChild(checkbox); // appends checkbox to item

    const text = document.createElement('p'); // creates p
    text.textContent = task.description;
    text.className = 'm-0 px-3';
    if (task.isCompleted === true) {
      text.classList.add('text-decoration-line-through');
    }
    divNormal.appendChild(text); // appends p to item

    const aEdit = document.createElement('a');
    aEdit.className = 'edtIcn ms-auto';
    const iconEdit = document.createElement('i'); // creates edit icon
    iconEdit.className = 'fas fa-ellipsis-v p-2';
    aEdit.appendChild(iconEdit); // appends edit icon to anchor
    divNormal.appendChild(aEdit); // appends achor to divNormal

    item.appendChild(divNormal);// -- appends divNormal to item

    // Create div for edit view
    const divEdit = document.createElement('div');
    divEdit.className = 'd-none flex-row justify-content-between flex-fill align-items-center py-2 app-item-edi';

    const inputEdit = document.createElement('input');
    inputEdit.setAttribute('type', 'text');
    inputEdit.className = 'form-control border-0 p-0 mx-2';
    inputEdit.value = task.description;

    divEdit.appendChild(inputEdit);

    const aAccept = document.createElement('a');
    aAccept.className = 'ms-auto acceptIcn';
    const iconAccept = document.createElement('i'); // creates accept icon
    iconAccept.className = 'fas fa-check-circle p-2';
    aAccept.appendChild(iconAccept); // appends accept icon to anchor
    divEdit.appendChild(aAccept); // appends accpet anchor to item

    const aRemove = document.createElement('a');
    aRemove.className = 'removeIcn';
    const iconRemove = document.createElement('i'); // creates remove icon
    iconRemove.className = 'fas fa-trash p-2';
    aRemove.appendChild(iconRemove); // appends remove icon to anchor
    divEdit.appendChild(aRemove); // appends remove anchor to item

    item.appendChild(divEdit);// -- appends divEdit to item

    list.appendChild(item); // appends item to list
  }

  static addEmptyToDoMessage() {
    const list = document.querySelector('#task-list');

    const item = document.createElement('li'); // creates list item
    item.className = 'app-item d-flex justify-content-center align-items-center px-2';

    const p = document.createElement('p');
    p.className = 'm-0 p-0 no-to-dos';
    p.textContent = "No to-do's right now";

    item.appendChild(p);
    list.appendChild(item);
  }

  static displayTasks() {
    const list = document.querySelector('#task-list');
    list.innerHTML = '';

    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    if (todos.length === 0) {
      this.addEmptyToDoMessage();
    } else {
      todos.forEach((task) => this.addTask2list(task));
    }
  }

  static addTask(newDescrip) {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    const neo = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](newDescrip, todos.length);
    todos.push(neo);
    // updates indexes
    todos.forEach((todo, index) => { todo.index = index; });
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    // repopulates list
    this.displayTasks();
  }

  static changeLiToEditMode(li) {
    const lisChildren = li.children;
    // change clases of divs
    const normalView = lisChildren[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-flex', 'd-none');
    normalView.className = classesNV;

    const editView = lisChildren[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-none', 'd-flex');
    editView.className = classesE;

    // sets focus con the input to edit
    const inputEdit = editView.querySelector('input');
    inputEdit.id = 'inputEdit';
    inputEdit.focus();
  }

  static removeTask(index) {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    todos.splice(index, 1);
    // updates indexes
    todos.forEach((todo, index) => { todo.index = index; });
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    // repopulates list
    this.displayTasks();
  }

  static updateTask(index, newDesc) {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    todos[index].description = newDesc;
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    // repopulates list
    this.displayTasks();
  }

  static taskCompleted(index, checkboxState) {
    (0,_checkboxes__WEBPACK_IMPORTED_MODULE_2__["default"])(index, checkboxState);
    // repopulates the todo list
    this.displayTasks();
  }

  static clearCompleted() {
    (0,_helpfulFunctions__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)();
    this.displayTasks();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQSxJQUFJLGlFQUFjO0FBQ2xCO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL2NoZWNrYm94ZXMuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL2hlbHBmdWxGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL3JldHVybnNVbmNvbXBsZXRlZC5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvc3RvcmUuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy91aS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjaGVja2JveGVzLmpzXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGlzQ29tcGxldGVkIHZhbHVlIG9mIHRhc2tzXG5jb25zdCB0YXNrQ29tcGxldGVkID0gKHBvc2l0aW9uMmNoYWdlLCB2YWx1ZSkgPT4ge1xuICAvLyBHZXRzIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHRvRG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcblxuICBjb25zdCB0YXNrMm1vZGlmeSA9IHRvRG9zW3Bvc2l0aW9uMmNoYWdlXTtcbiAgdGFzazJtb2RpZnkuaXNDb21wbGV0ZWQgPSB2YWx1ZTtcbiAgdG9Eb3NbcG9zaXRpb24yY2hhZ2VdID0gdGFzazJtb2RpZnk7XG5cbiAgLy8gU2V0IGl0ZW1zIHRvIHN0b3JhZ2VcbiAgU3RvcmUuc2V0VGFza3ModG9Eb3MpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0NvbXBsZXRlZDsiLCIvLyBoZWxwZXIgZnVuY3Rpb25zXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCByZXR1cm5zVW5jb21wbGV0ZWQgZnJvbSAnLi9yZXR1cm5zVW5jb21wbGV0ZWQnO1xuXG4vLyBmdW5jdGlvbiB0byBoZWxwIHZhbGlkYXRlIGlucHV0XG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKHRleHQpID0+IHtcbiAgaWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBjbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcbiAgLy8gZ2V0cyB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAvLyBjcmVhdGUgbmV3IGFycmF5IGZyb20gZmlsdGVyKClcbiAgY29uc3QgdW5jb21wbGV0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcihyZXR1cm5zVW5jb21wbGV0ZWQpO1xuICAvLyB1cGRhdGVzIGluZGV4ZXNcbiAgdW5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4geyB0b2RvLmluZGV4ID0gaW5kZXg7IH0pO1xuXG4gIFN0b3JlLnNldFRhc2tzKHVuY29tcGxldGVkVGFza3MpO1xufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVEZXNjcmlwdGlvbiwgY2xlYXJDb21wbGV0ZWQgfTsiLCIvLyByZXR1cm5zVW5jb21wbGV0ZWQuanNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuc1VuY29tcGxldGVkKHRhc2spIHtcbiAgcmV0dXJuICF0YXNrLmlzQ29tcGxldGVkO1xufSIsIi8vIFN0b3JlIENsYXNzOiBFbmNhcHN1bGF0ZXMgZGUgbG9jYWNsIHN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICAvLyBnZXRzIHRhc2tzIGZyb20gc3RvcmFnZSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXG4gIHN0YXRpYyBnZXRUYXNrcygpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKSB7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrcyh0YXNrcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cbn0iLCIvLyBUQVNLOiBjbGFzcyB0aGF0IHJlcHMgYSBzaW5nbGUgdGFzayBvciAndG8tZG8nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICB0YXNrMnN0cigpIHtcbiAgICBjb25zdCBpc0RvbmUgPSAoaXNDb21wbGV0ZWQpID0+IChpc0NvbXBsZXRlZCA/ICd5ZXMnIDogJ25vJyk7XG4gICAgY29uc3QgbXlTdHIgPSBgVGFzayMke3RoaXMuaW5kZXh9OiAke3RoaXMuZGVzY3JpcHRpb259IC0tIGRvbmU/ICR7aXNEb25lKHRoaXMuaXNDb21wbGV0ZWQpfWA7XG4gICAgcmV0dXJuIG15U3RyO1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyB1c2VyIGludGVyZmFjZVxuXG5pbXBvcnQgU3RvcmUgZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgVGFzayBmcm9tICcuL3Rhc2snO1xuaW1wb3J0IHRhc2tDb21wbGV0ZWQgZnJvbSAnLi9jaGVja2JveGVzJztcbmltcG9ydCB7IGNsZWFyQ29tcGxldGVkIH0gZnJvbSAnLi9oZWxwZnVsRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgYWRkVGFzazJsaXN0KHRhc2spIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IC8vIGNyZWF0ZXMgbGlzdCBpdGVtXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnYXBwLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweC0yJztcblxuICAgIC8vIGNyZWF0ZXMgZGl2IGZvciBub3JtYWwgdmlld1xuICAgIGNvbnN0IGRpdk5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk5vcm1hbC5jbGFzc05hbWUgPSAnZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBub3JtYWwtdmlldyc7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vIGNyZWF0ZXMgY2hlY2tib3hcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCBwLTAnO1xuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZChjaGVja2JveCk7IC8vIGFwcGVuZHMgY2hlY2tib3ggdG8gaXRlbVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gY3JlYXRlcyBwXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGV4dC5jbGFzc05hbWUgPSAnbS0wIHB4LTMnO1xuICAgIGlmICh0YXNrLmlzQ29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgZGl2Tm9ybWFsLmFwcGVuZENoaWxkKHRleHQpOyAvLyBhcHBlbmRzIHAgdG8gaXRlbVxuXG4gICAgY29uc3QgYUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYUVkaXQuY2xhc3NOYW1lID0gJ2VkdEljbiBtcy1hdXRvJztcbiAgICBjb25zdCBpY29uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTsgLy8gY3JlYXRlcyBlZGl0IGljb25cbiAgICBpY29uRWRpdC5jbGFzc05hbWUgPSAnZmFzIGZhLWVsbGlwc2lzLXYgcC0yJztcbiAgICBhRWRpdC5hcHBlbmRDaGlsZChpY29uRWRpdCk7IC8vIGFwcGVuZHMgZWRpdCBpY29uIHRvIGFuY2hvclxuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZChhRWRpdCk7IC8vIGFwcGVuZHMgYWNob3IgdG8gZGl2Tm9ybWFsXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpdk5vcm1hbCk7Ly8gLS0gYXBwZW5kcyBkaXZOb3JtYWwgdG8gaXRlbVxuXG4gICAgLy8gQ3JlYXRlIGRpdiBmb3IgZWRpdCB2aWV3XG4gICAgY29uc3QgZGl2RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkVkaXQuY2xhc3NOYW1lID0gJ2Qtbm9uZSBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWZpbGwgYWxpZ24taXRlbXMtY2VudGVyIHB5LTIgYXBwLWl0ZW0tZWRpJztcblxuICAgIGNvbnN0IGlucHV0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRFZGl0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgYm9yZGVyLTAgcC0wIG14LTInO1xuICAgIGlucHV0RWRpdC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBkaXZFZGl0LmFwcGVuZENoaWxkKGlucHV0RWRpdCk7XG5cbiAgICBjb25zdCBhQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFBY2NlcHQuY2xhc3NOYW1lID0gJ21zLWF1dG8gYWNjZXB0SWNuJztcbiAgICBjb25zdCBpY29uQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBjcmVhdGVzIGFjY2VwdCBpY29uXG4gICAgaWNvbkFjY2VwdC5jbGFzc05hbWUgPSAnZmFzIGZhLWNoZWNrLWNpcmNsZSBwLTInO1xuICAgIGFBY2NlcHQuYXBwZW5kQ2hpbGQoaWNvbkFjY2VwdCk7IC8vIGFwcGVuZHMgYWNjZXB0IGljb24gdG8gYW5jaG9yXG4gICAgZGl2RWRpdC5hcHBlbmRDaGlsZChhQWNjZXB0KTsgLy8gYXBwZW5kcyBhY2NwZXQgYW5jaG9yIHRvIGl0ZW1cblxuICAgIGNvbnN0IGFSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYVJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlSWNuJztcbiAgICBjb25zdCBpY29uUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBjcmVhdGVzIHJlbW92ZSBpY29uXG4gICAgaWNvblJlbW92ZS5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoIHAtMic7XG4gICAgYVJlbW92ZS5hcHBlbmRDaGlsZChpY29uUmVtb3ZlKTsgLy8gYXBwZW5kcyByZW1vdmUgaWNvbiB0byBhbmNob3JcbiAgICBkaXZFZGl0LmFwcGVuZENoaWxkKGFSZW1vdmUpOyAvLyBhcHBlbmRzIHJlbW92ZSBhbmNob3IgdG8gaXRlbVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkaXZFZGl0KTsvLyAtLSBhcHBlbmRzIGRpdkVkaXQgdG8gaXRlbVxuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTsgLy8gYXBwZW5kcyBpdGVtIHRvIGxpc3RcbiAgfVxuXG4gIHN0YXRpYyBhZGRFbXB0eVRvRG9NZXNzYWdlKCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gY3JlYXRlcyBsaXN0IGl0ZW1cbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdhcHAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMic7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NOYW1lID0gJ20tMCBwLTAgbm8tdG8tZG9zJztcbiAgICBwLnRleHRDb250ZW50ID0gXCJObyB0by1kbydzIHJpZ2h0IG5vd1wiO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChwKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlUYXNrcygpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hZGRFbXB0eVRvRG9NZXNzYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9zLmZvckVhY2goKHRhc2spID0+IHRoaXMuYWRkVGFzazJsaXN0KHRhc2spKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhuZXdEZXNjcmlwKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIGNvbnN0IG5lbyA9IG5ldyBUYXNrKG5ld0Rlc2NyaXAsIHRvZG9zLmxlbmd0aCk7XG4gICAgdG9kb3MucHVzaChuZW8pO1xuICAgIC8vIHVwZGF0ZXMgaW5kZXhlc1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaW5kZXggPSBpbmRleDsgfSk7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIC8vIHJlcG9wdWxhdGVzIGxpc3RcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUxpVG9FZGl0TW9kZShsaSkge1xuICAgIGNvbnN0IGxpc0NoaWxkcmVuID0gbGkuY2hpbGRyZW47XG4gICAgLy8gY2hhbmdlIGNsYXNlcyBvZiBkaXZzXG4gICAgY29uc3Qgbm9ybWFsVmlldyA9IGxpc0NoaWxkcmVuWzBdO1xuICAgIGxldCBjbGFzc2VzTlYgPSBub3JtYWxWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzTlYgPSBjbGFzc2VzTlYucmVwbGFjZSgnZC1mbGV4JywgJ2Qtbm9uZScpO1xuICAgIG5vcm1hbFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc05WO1xuXG4gICAgY29uc3QgZWRpdFZpZXcgPSBsaXNDaGlsZHJlblsxXTtcbiAgICBsZXQgY2xhc3Nlc0UgPSBlZGl0Vmlldy5jbGFzc05hbWU7XG4gICAgY2xhc3Nlc0UgPSBjbGFzc2VzRS5yZXBsYWNlKCdkLW5vbmUnLCAnZC1mbGV4Jyk7XG4gICAgZWRpdFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc0U7XG5cbiAgICAvLyBzZXRzIGZvY3VzIGNvbiB0aGUgaW5wdXQgdG8gZWRpdFxuICAgIGNvbnN0IGlucHV0RWRpdCA9IGVkaXRWaWV3LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XG4gICAgaW5wdXRFZGl0LmlkID0gJ2lucHV0RWRpdCc7XG4gICAgaW5wdXRFZGl0LmZvY3VzKCk7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlVGFzayhpbmRleCkge1xuICAgIGNvbnN0IHRvZG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vIHVwZGF0ZXMgaW5kZXhlc1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaW5kZXggPSBpbmRleDsgfSk7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIC8vIHJlcG9wdWxhdGVzIGxpc3RcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZVRhc2soaW5kZXgsIG5ld0Rlc2MpIHtcbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gICAgdG9kb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3RGVzYztcbiAgICBTdG9yZS5zZXRUYXNrcyh0b2Rvcyk7XG4gICAgLy8gcmVwb3B1bGF0ZXMgbGlzdFxuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cblxuICBzdGF0aWMgdGFza0NvbXBsZXRlZChpbmRleCwgY2hlY2tib3hTdGF0ZSkge1xuICAgIHRhc2tDb21wbGV0ZWQoaW5kZXgsIGNoZWNrYm94U3RhdGUpO1xuICAgIC8vIHJlcG9wdWxhdGVzIHRoZSB0b2RvIGxpc3RcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgc3RhdGljIGNsZWFyQ29tcGxldGVkKCkge1xuICAgIGNsZWFyQ29tcGxldGVkKCk7XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==