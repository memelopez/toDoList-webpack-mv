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
const taskCompleted = (position2chage, value, pSib) => {
  // Gets list from local storage
  const toDos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();

  const task2modify = toDos[position2chage];
  task2modify.isCompleted = value;
  toDos[position2chage] = task2modify;

  // Set items to storage
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(toDos);

  // change strike through class
  if (value) {
    pSib.classList.add('text-decoration-line-through');
  } else {
    let pClasses = pSib.className;
    pClasses = pClasses.replace('text-decoration-line-through', '');
    pSib.className = pClasses;
  }
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
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "retsIndexInTaskList": () => (/* binding */ retsIndexInTaskList),
/* harmony export */   "retsLiFromIndex": () => (/* binding */ retsLiFromIndex)
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

const retsIndexInTaskList = (li) => {
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);
  return index;
};

const retsLiFromIndex = (index) => {
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  return nodes[index];
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
    if (todos.length === 1) {
      const list = document.querySelector('#task-list');
      list.innerHTML = '';
    }
    // adds single task: neo
    this.addTask2list(todos[todos.length - 1]);
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

  static removeTask(index, li) {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    todos.splice(index, 1);
    // updates indexes
    todos.forEach((todo, index) => { todo.index = index; });
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    li.remove();
    if (todos.length === 0) {
      this.addEmptyToDoMessage();
    }
  }

  static updateTask(index, newDesc) {
    const todos = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getTasks();
    todos[index].description = newDesc;
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setTasks(todos);
    // changes li to normal view with new task description
    this.changeLiToNormalView(index, newDesc);
  }

  static changeLiToNormalView(index, newDesc) {
    const li = (0,_helpfulFunctions__WEBPACK_IMPORTED_MODULE_3__.retsLiFromIndex)(index);
    const lisChildren = li.children;
    // change clases of divs
    const normalView = lisChildren[0];
    let classesNV = normalView.className;
    classesNV = classesNV.replace('d-none', 'd-flex');
    normalView.className = classesNV;

    const editView = lisChildren[1];
    let classesE = editView.className;
    classesE = classesE.replace('d-flex', 'd-none');
    editView.className = classesE;

    // change task desc
    const childrenNV = normalView.children;
    childrenNV[1].textContent = newDesc;
  }

  static taskCompleted(index, value, pSib) {
    (0,_checkboxes__WEBPACK_IMPORTED_MODULE_2__["default"])(index, value, pSib);
  }

  static clearCompleted() {
    (0,_helpfulFunctions__WEBPACK_IMPORTED_MODULE_3__.clearCompleted)();
    this.displayTasks();
  }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLHVEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsdURBQWM7QUFDaEM7QUFDQSxJQUFJLHVEQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1REFBYTtBQUNqQjs7QUFFQTtBQUNBLElBQUksaUVBQWM7QUFDbEI7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvY2hlY2tib3hlcy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvaGVscGZ1bEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvcmV0dXJuc1VuY29tcGxldGVkLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL21vZHVsZXMvdGFzay5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL3VpLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNoZWNrYm94ZXMuanNcblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgaXNDb21wbGV0ZWQgdmFsdWUgb2YgdGFza3NcbmNvbnN0IHRhc2tDb21wbGV0ZWQgPSAocG9zaXRpb24yY2hhZ2UsIHZhbHVlLCBwU2liKSA9PiB7XG4gIC8vIEdldHMgbGlzdCBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdG9Eb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuXG4gIGNvbnN0IHRhc2sybW9kaWZ5ID0gdG9Eb3NbcG9zaXRpb24yY2hhZ2VdO1xuICB0YXNrMm1vZGlmeS5pc0NvbXBsZXRlZCA9IHZhbHVlO1xuICB0b0Rvc1twb3NpdGlvbjJjaGFnZV0gPSB0YXNrMm1vZGlmeTtcblxuICAvLyBTZXQgaXRlbXMgdG8gc3RvcmFnZVxuICBTdG9yZS5zZXRUYXNrcyh0b0Rvcyk7XG5cbiAgLy8gY2hhbmdlIHN0cmlrZSB0aHJvdWdoIGNsYXNzXG4gIGlmICh2YWx1ZSkge1xuICAgIHBTaWIuY2xhc3NMaXN0LmFkZCgndGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaCcpO1xuICB9IGVsc2Uge1xuICAgIGxldCBwQ2xhc3NlcyA9IHBTaWIuY2xhc3NOYW1lO1xuICAgIHBDbGFzc2VzID0gcENsYXNzZXMucmVwbGFjZSgndGV4dC1kZWNvcmF0aW9uLWxpbmUtdGhyb3VnaCcsICcnKTtcbiAgICBwU2liLmNsYXNzTmFtZSA9IHBDbGFzc2VzO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrQ29tcGxldGVkOyIsIi8vIGhlbHBlciBmdW5jdGlvbnNcblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IHJldHVybnNVbmNvbXBsZXRlZCBmcm9tICcuL3JldHVybnNVbmNvbXBsZXRlZCc7XG5cbi8vIGZ1bmN0aW9uIHRvIGhlbHAgdmFsaWRhdGUgaW5wdXRcbmNvbnN0IHZhbGlkYXRlRGVzY3JpcHRpb24gPSAodGV4dCkgPT4ge1xuICBpZiAodGV4dCA9PT0gbnVsbCB8fCB0ZXh0ID09PSAnJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGNsZWFyQ29tcGxldGVkID0gKCkgPT4ge1xuICAvLyBnZXRzIHRvZG9zIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCB0YXNrcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gIC8vIGNyZWF0ZSBuZXcgYXJyYXkgZnJvbSBmaWx0ZXIoKVxuICBjb25zdCB1bmNvbXBsZXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKHJldHVybnNVbmNvbXBsZXRlZCk7XG4gIC8vIHVwZGF0ZXMgaW5kZXhlc1xuICB1bmNvbXBsZXRlZFRhc2tzLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaW5kZXggPSBpbmRleDsgfSk7XG5cbiAgU3RvcmUuc2V0VGFza3ModW5jb21wbGV0ZWRUYXNrcyk7XG59O1xuXG5jb25zdCByZXRzSW5kZXhJblRhc2tMaXN0ID0gKGxpKSA9PiB7XG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVsTGlzdC5jaGlsZHJlbik7XG4gIGNvbnN0IGluZGV4ID0gbm9kZXMuaW5kZXhPZihsaSk7XG4gIHJldHVybiBpbmRleDtcbn07XG5cbmNvbnN0IHJldHNMaUZyb21JbmRleCA9IChpbmRleCkgPT4ge1xuICBjb25zdCB1bExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gIGNvbnN0IG5vZGVzID0gQXJyYXkuZnJvbSh1bExpc3QuY2hpbGRyZW4pO1xuICByZXR1cm4gbm9kZXNbaW5kZXhdO1xufTtcblxuZXhwb3J0IHtcbiAgdmFsaWRhdGVEZXNjcmlwdGlvbiwgY2xlYXJDb21wbGV0ZWQsIHJldHNJbmRleEluVGFza0xpc3QsIHJldHNMaUZyb21JbmRleCxcbn07IiwiLy8gcmV0dXJuc1VuY29tcGxldGVkLmpzXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJldHVybnNVbmNvbXBsZXRlZCh0YXNrKSB7XG4gIHJldHVybiAhdGFzay5pc0NvbXBsZXRlZDtcbn0iLCIvLyBTdG9yZSBDbGFzczogRW5jYXBzdWxhdGVzIGRlIGxvY2FjbCBzdG9yYWdlXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlIHtcbiAgLy8gZ2V0cyB0YXNrcyBmcm9tIHN0b3JhZ2UgYW5kIHJldHVybnMgYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICBzdGF0aWMgZ2V0VGFza3MoKSB7XG4gICAgbGV0IHRhc2tzO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSA9PT0gbnVsbCkge1xuICAgICAgdGFza3MgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza3M7XG4gIH1cblxuICBzdGF0aWMgc2V0VGFza3ModGFza3MpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xuICB9XG59IiwiLy8gVEFTSzogY2xhc3MgdGhhdCByZXBzIGEgc2luZ2xlIHRhc2sgb3IgJ3RvLWRvJ1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBpbmRleCkge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLmlzQ29tcGxldGVkID0gZmFsc2U7XG4gICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICB9XG5cbiAgdGFzazJzdHIoKSB7XG4gICAgY29uc3QgaXNEb25lID0gKGlzQ29tcGxldGVkKSA9PiAoaXNDb21wbGV0ZWQgPyAneWVzJyA6ICdubycpO1xuICAgIGNvbnN0IG15U3RyID0gYFRhc2sjJHt0aGlzLmluZGV4fTogJHt0aGlzLmRlc2NyaXB0aW9ufSAtLSBkb25lPyAke2lzRG9uZSh0aGlzLmlzQ29tcGxldGVkKX1gO1xuICAgIHJldHVybiBteVN0cjtcbiAgfVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gdXNlciBpbnRlcmZhY2VcblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB0YXNrQ29tcGxldGVkIGZyb20gJy4vY2hlY2tib3hlcyc7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZCwgcmV0c0xpRnJvbUluZGV4IH0gZnJvbSAnLi9oZWxwZnVsRnVuY3Rpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUkge1xuICBzdGF0aWMgYWRkVGFzazJsaXN0KHRhc2spIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IC8vIGNyZWF0ZXMgbGlzdCBpdGVtXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnYXBwLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBweC0yJztcblxuICAgIC8vIGNyZWF0ZXMgZGl2IGZvciBub3JtYWwgdmlld1xuICAgIGNvbnN0IGRpdk5vcm1hbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdk5vcm1hbC5jbGFzc05hbWUgPSAnZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBub3JtYWwtdmlldyc7XG5cbiAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7IC8vIGNyZWF0ZXMgY2hlY2tib3hcbiAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBjaGVja2JveC5jaGVja2VkID0gdGFzay5pc0NvbXBsZXRlZDtcbiAgICBjaGVja2JveC5jbGFzc05hbWUgPSAnZm9ybS1jaGVjay1sYWJlbCBwLTAnO1xuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZChjaGVja2JveCk7IC8vIGFwcGVuZHMgY2hlY2tib3ggdG8gaXRlbVxuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTsgLy8gY3JlYXRlcyBwXG4gICAgdGV4dC50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGV4dC5jbGFzc05hbWUgPSAnbS0wIHB4LTMnO1xuICAgIGlmICh0YXNrLmlzQ29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICB0ZXh0LmNsYXNzTGlzdC5hZGQoJ3RleHQtZGVjb3JhdGlvbi1saW5lLXRocm91Z2gnKTtcbiAgICB9XG4gICAgZGl2Tm9ybWFsLmFwcGVuZENoaWxkKHRleHQpOyAvLyBhcHBlbmRzIHAgdG8gaXRlbVxuXG4gICAgY29uc3QgYUVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYUVkaXQuY2xhc3NOYW1lID0gJ2VkdEljbiBtcy1hdXRvJztcbiAgICBjb25zdCBpY29uRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTsgLy8gY3JlYXRlcyBlZGl0IGljb25cbiAgICBpY29uRWRpdC5jbGFzc05hbWUgPSAnZmFzIGZhLWVsbGlwc2lzLXYgcC0yJztcbiAgICBhRWRpdC5hcHBlbmRDaGlsZChpY29uRWRpdCk7IC8vIGFwcGVuZHMgZWRpdCBpY29uIHRvIGFuY2hvclxuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZChhRWRpdCk7IC8vIGFwcGVuZHMgYWNob3IgdG8gZGl2Tm9ybWFsXG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGRpdk5vcm1hbCk7Ly8gLS0gYXBwZW5kcyBkaXZOb3JtYWwgdG8gaXRlbVxuXG4gICAgLy8gQ3JlYXRlIGRpdiBmb3IgZWRpdCB2aWV3XG4gICAgY29uc3QgZGl2RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkVkaXQuY2xhc3NOYW1lID0gJ2Qtbm9uZSBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBmbGV4LWZpbGwgYWxpZ24taXRlbXMtY2VudGVyIHB5LTIgYXBwLWl0ZW0tZWRpJztcblxuICAgIGNvbnN0IGlucHV0RWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRFZGl0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgaW5wdXRFZGl0LmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgYm9yZGVyLTAgcC0wIG14LTInO1xuICAgIGlucHV0RWRpdC52YWx1ZSA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICBkaXZFZGl0LmFwcGVuZENoaWxkKGlucHV0RWRpdCk7XG5cbiAgICBjb25zdCBhQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFBY2NlcHQuY2xhc3NOYW1lID0gJ21zLWF1dG8gYWNjZXB0SWNuJztcbiAgICBjb25zdCBpY29uQWNjZXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBjcmVhdGVzIGFjY2VwdCBpY29uXG4gICAgaWNvbkFjY2VwdC5jbGFzc05hbWUgPSAnZmFzIGZhLWNoZWNrLWNpcmNsZSBwLTInO1xuICAgIGFBY2NlcHQuYXBwZW5kQ2hpbGQoaWNvbkFjY2VwdCk7IC8vIGFwcGVuZHMgYWNjZXB0IGljb24gdG8gYW5jaG9yXG4gICAgZGl2RWRpdC5hcHBlbmRDaGlsZChhQWNjZXB0KTsgLy8gYXBwZW5kcyBhY2NwZXQgYW5jaG9yIHRvIGl0ZW1cblxuICAgIGNvbnN0IGFSZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYVJlbW92ZS5jbGFzc05hbWUgPSAncmVtb3ZlSWNuJztcbiAgICBjb25zdCBpY29uUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpOyAvLyBjcmVhdGVzIHJlbW92ZSBpY29uXG4gICAgaWNvblJlbW92ZS5jbGFzc05hbWUgPSAnZmFzIGZhLXRyYXNoIHAtMic7XG4gICAgYVJlbW92ZS5hcHBlbmRDaGlsZChpY29uUmVtb3ZlKTsgLy8gYXBwZW5kcyByZW1vdmUgaWNvbiB0byBhbmNob3JcbiAgICBkaXZFZGl0LmFwcGVuZENoaWxkKGFSZW1vdmUpOyAvLyBhcHBlbmRzIHJlbW92ZSBhbmNob3IgdG8gaXRlbVxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkaXZFZGl0KTsvLyAtLSBhcHBlbmRzIGRpdkVkaXQgdG8gaXRlbVxuXG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTsgLy8gYXBwZW5kcyBpdGVtIHRvIGxpc3RcbiAgfVxuXG4gIHN0YXRpYyBhZGRFbXB0eVRvRG9NZXNzYWdlKCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gY3JlYXRlcyBsaXN0IGl0ZW1cbiAgICBpdGVtLmNsYXNzTmFtZSA9ICdhcHAtaXRlbSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMic7XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NOYW1lID0gJ20tMCBwLTAgbm8tdG8tZG9zJztcbiAgICBwLnRleHRDb250ZW50ID0gXCJObyB0by1kbydzIHJpZ2h0IG5vd1wiO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChwKTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGl0ZW0pO1xuICB9XG5cbiAgc3RhdGljIGRpc3BsYXlUYXNrcygpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuICAgIGxpc3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gICAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5hZGRFbXB0eVRvRG9NZXNzYWdlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9zLmZvckVhY2goKHRhc2spID0+IHRoaXMuYWRkVGFzazJsaXN0KHRhc2spKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgYWRkVGFzayhuZXdEZXNjcmlwKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIGNvbnN0IG5lbyA9IG5ldyBUYXNrKG5ld0Rlc2NyaXAsIHRvZG9zLmxlbmd0aCk7XG4gICAgdG9kb3MucHVzaChuZW8pO1xuICAgIC8vIHVwZGF0ZXMgaW5kZXhlc1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaW5kZXggPSBpbmRleDsgfSk7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG4gICAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuICAgIH1cbiAgICAvLyBhZGRzIHNpbmdsZSB0YXNrOiBuZW9cbiAgICB0aGlzLmFkZFRhc2sybGlzdCh0b2Rvc1t0b2Rvcy5sZW5ndGggLSAxXSk7XG4gIH1cblxuICBzdGF0aWMgY2hhbmdlTGlUb0VkaXRNb2RlKGxpKSB7XG4gICAgY29uc3QgbGlzQ2hpbGRyZW4gPSBsaS5jaGlsZHJlbjtcbiAgICAvLyBjaGFuZ2UgY2xhc2VzIG9mIGRpdnNcbiAgICBjb25zdCBub3JtYWxWaWV3ID0gbGlzQ2hpbGRyZW5bMF07XG4gICAgbGV0IGNsYXNzZXNOViA9IG5vcm1hbFZpZXcuY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNOViA9IGNsYXNzZXNOVi5yZXBsYWNlKCdkLWZsZXgnLCAnZC1ub25lJyk7XG4gICAgbm9ybWFsVmlldy5jbGFzc05hbWUgPSBjbGFzc2VzTlY7XG5cbiAgICBjb25zdCBlZGl0VmlldyA9IGxpc0NoaWxkcmVuWzFdO1xuICAgIGxldCBjbGFzc2VzRSA9IGVkaXRWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzRSA9IGNsYXNzZXNFLnJlcGxhY2UoJ2Qtbm9uZScsICdkLWZsZXgnKTtcbiAgICBlZGl0Vmlldy5jbGFzc05hbWUgPSBjbGFzc2VzRTtcblxuICAgIC8vIHNldHMgZm9jdXMgY29uIHRoZSBpbnB1dCB0byBlZGl0XG4gICAgY29uc3QgaW5wdXRFZGl0ID0gZWRpdFZpZXcucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICBpbnB1dEVkaXQuaWQgPSAnaW5wdXRFZGl0JztcbiAgICBpbnB1dEVkaXQuZm9jdXMoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUYXNrKGluZGV4LCBsaSkge1xuICAgIGNvbnN0IHRvZG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcbiAgICB0b2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vIHVwZGF0ZXMgaW5kZXhlc1xuICAgIHRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7IHRvZG8uaW5kZXggPSBpbmRleDsgfSk7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIGxpLnJlbW92ZSgpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuYWRkRW1wdHlUb0RvTWVzc2FnZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrKGluZGV4LCBuZXdEZXNjKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIHRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIC8vIGNoYW5nZXMgbGkgdG8gbm9ybWFsIHZpZXcgd2l0aCBuZXcgdGFzayBkZXNjcmlwdGlvblxuICAgIHRoaXMuY2hhbmdlTGlUb05vcm1hbFZpZXcoaW5kZXgsIG5ld0Rlc2MpO1xuICB9XG5cbiAgc3RhdGljIGNoYW5nZUxpVG9Ob3JtYWxWaWV3KGluZGV4LCBuZXdEZXNjKSB7XG4gICAgY29uc3QgbGkgPSByZXRzTGlGcm9tSW5kZXgoaW5kZXgpO1xuICAgIGNvbnN0IGxpc0NoaWxkcmVuID0gbGkuY2hpbGRyZW47XG4gICAgLy8gY2hhbmdlIGNsYXNlcyBvZiBkaXZzXG4gICAgY29uc3Qgbm9ybWFsVmlldyA9IGxpc0NoaWxkcmVuWzBdO1xuICAgIGxldCBjbGFzc2VzTlYgPSBub3JtYWxWaWV3LmNsYXNzTmFtZTtcbiAgICBjbGFzc2VzTlYgPSBjbGFzc2VzTlYucmVwbGFjZSgnZC1ub25lJywgJ2QtZmxleCcpO1xuICAgIG5vcm1hbFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc05WO1xuXG4gICAgY29uc3QgZWRpdFZpZXcgPSBsaXNDaGlsZHJlblsxXTtcbiAgICBsZXQgY2xhc3Nlc0UgPSBlZGl0Vmlldy5jbGFzc05hbWU7XG4gICAgY2xhc3Nlc0UgPSBjbGFzc2VzRS5yZXBsYWNlKCdkLWZsZXgnLCAnZC1ub25lJyk7XG4gICAgZWRpdFZpZXcuY2xhc3NOYW1lID0gY2xhc3Nlc0U7XG5cbiAgICAvLyBjaGFuZ2UgdGFzayBkZXNjXG4gICAgY29uc3QgY2hpbGRyZW5OViA9IG5vcm1hbFZpZXcuY2hpbGRyZW47XG4gICAgY2hpbGRyZW5OVlsxXS50ZXh0Q29udGVudCA9IG5ld0Rlc2M7XG4gIH1cblxuICBzdGF0aWMgdGFza0NvbXBsZXRlZChpbmRleCwgdmFsdWUsIHBTaWIpIHtcbiAgICB0YXNrQ29tcGxldGVkKGluZGV4LCB2YWx1ZSwgcFNpYik7XG4gIH1cblxuICBzdGF0aWMgY2xlYXJDb21wbGV0ZWQoKSB7XG4gICAgY2xlYXJDb21wbGV0ZWQoKTtcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9