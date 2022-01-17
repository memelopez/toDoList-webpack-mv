/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Styles */\nbody {\n  background-color: #f8f8ff;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\na:focus {\n  color: grey;\n  text-decoration: none;\n}\n\n.black-square {\n  background-color: #062e63;\n  height: 40px;\n  width: 100%;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n}\n\n.app-item {\n  height: 55px;\n  background-color: #fff;\n  border-bottom: 2px #f0fff0 solid;\n  width: 100%;\n}\n\n.app-item-edi {\n  height: 55px;\n  background-color: lightyellow;\n}\n\n.bottom-btn {\n  height: 60px;\n  background-color: #f0fff0;\n}\n\na#clear-comp {\n  color: #195892;\n}\n\n.no-to-dos {\n  color: #945047;\n}\n\n.normal-view {\n  width: 100%;\n}\n\n#task-list {\n  list-style: none;\n}\n\n#app-div {\n  box-shadow: 0 4px 8px 0 #9ac79a, 0 6px 20px 0 #9ac79a;\n  border: 1px #9ac79a solid;\n}\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,WAAW;AACX;EACE,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,sBAAsB;EACtB,gCAAgC;EAChC,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,yBAAyB;AAC3B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,qDAAqD;EACrD,yBAAyB;AAC3B","sourcesContent":["/* Styles */\nbody {\n  background-color: #f8f8ff;\n}\n\na {\n  color: black;\n  text-decoration: none;\n}\n\na:focus {\n  color: grey;\n  text-decoration: none;\n}\n\n.black-square {\n  background-color: #062e63;\n  height: 40px;\n  width: 100%;\n}\n\n.footer {\n  position: fixed;\n  bottom: 0;\n}\n\n.app-item {\n  height: 55px;\n  background-color: #fff;\n  border-bottom: 2px #f0fff0 solid;\n  width: 100%;\n}\n\n.app-item-edi {\n  height: 55px;\n  background-color: lightyellow;\n}\n\n.bottom-btn {\n  height: 60px;\n  background-color: #f0fff0;\n}\n\na#clear-comp {\n  color: #195892;\n}\n\n.no-to-dos {\n  color: #945047;\n}\n\n.normal-view {\n  width: 100%;\n}\n\n#task-list {\n  list-style: none;\n}\n\n#app-div {\n  box-shadow: 0 4px 8px 0 #9ac79a, 0 6px 20px 0 #9ac79a;\n  border: 1px #9ac79a solid;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

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

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_helpfulFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpfulFunctions */ "./src/modules/helpfulFunctions.js");
// index.js




// When content loads
document.addEventListener('DOMContentLoaded', _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].displayTasks());

// Event: when form is submitted
document.querySelector('#addTask').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if ((0,_modules_helpfulFunctions__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(taskDescription)) {
    // Add task
    _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});

// Event: when icon is clicked to add task
document.querySelector('#clickEnterIcon').addEventListener('click', () => {
  // Get form values
  const taskDescription = document.querySelector('#taskDesc').value.trim();
  if ((0,_modules_helpfulFunctions__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(taskDescription)) {
    // Add task
    _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].addTask(taskDescription);
  }
  document.querySelector('#taskDesc').value = '';
});

// Event: click anything on task-list
document.querySelector('#task-list').addEventListener('click', (e) => {
  const classesIcn = e.target.parentElement.className;
  const classesArr = classesIcn.split(' ');

  const li = e.target.parentElement.parentElement.parentElement;
  const ulList = document.querySelector('#task-list');
  const nodes = Array.from(ulList.children);
  const index = nodes.indexOf(li);

  // Event: when the three dots icon gets clicked
  if (classesArr.indexOf('edtIcn') !== -1) {
    _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].changeLiToEditMode(li);
  }

  // Event: when the check icon gets clicked to REMOVE
  if (classesArr.indexOf('removeIcn') !== -1) {
    _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].removeTask(index);
  }

  // Event: when the the trash icon gets clicked to UPDATE
  if (classesArr.indexOf('acceptIcn') !== -1) {
    const newDesc = document.querySelector('#inputEdit').value.trim();
    if ((0,_modules_helpfulFunctions__WEBPACK_IMPORTED_MODULE_2__.validateDescription)(newDesc)) {
      _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].updateTask(index, newDesc);
    }
  }
});

// Event: when checkboxes are clicked
document.querySelector('#task-list').addEventListener('change', (e) => {

  // checks if this is trigerring for the correct element
  if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
    // Gets the state of the checked checkbox
    const checkboxState = e.target.checked;

    const ulList = document.querySelector('#task-list');
    const itemChecked = e.target.parentElement.parentElement;
    const nodes = Array.from(ulList.children);
    const index = nodes.indexOf(itemChecked);

    _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].taskCompleted(index, checkboxState);
  }
});

document.querySelector('#clear-comp').addEventListener('click', () => {
  _modules_ui__WEBPACK_IMPORTED_MODULE_1__["default"].clearCompleted();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSwyREFBVTtBQUNkO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNFQUFxQjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw4REFBYTtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDhFQUFtQjtBQUMzQixNQUFNLDhEQUFhO0FBQ25CO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxpRUFBZ0I7QUFDcEI7QUFDQSxDQUFDOztBQUVEO0FBQ0EsRUFBRSxrRUFBaUI7QUFDbkIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy9jaGVja2JveGVzLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy9oZWxwZnVsRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy9yZXR1cm5zVW5jb21wbGV0ZWQuanMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi8uL3NyYy9tb2R1bGVzL3N0b3JlLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy90YXNrLmpzIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9Eb0xpc3Qtd2VicGFjay1tdi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvRG9MaXN0LXdlYnBhY2stbXYvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b0RvTGlzdC13ZWJwYWNrLW12Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogU3R5bGVzICovXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGZmO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuYTpmb2N1cyB7XFxuICBjb2xvcjogZ3JleTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuXFxuLmJsYWNrLXNxdWFyZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyZTYzO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb290ZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uYXBwLWl0ZW0ge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDJweCAjZjBmZmYwIHNvbGlkO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5hcHAtaXRlbS1lZGkge1xcbiAgaGVpZ2h0OiA1NXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHR5ZWxsb3c7XFxufVxcblxcbi5ib3R0b20tYnRuIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGZmZjA7XFxufVxcblxcbmEjY2xlYXItY29tcCB7XFxuICBjb2xvcjogIzE5NTg5MjtcXG59XFxuXFxuLm5vLXRvLWRvcyB7XFxuICBjb2xvcjogIzk0NTA0NztcXG59XFxuXFxuLm5vcm1hbC12aWV3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jdGFzay1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNhcHAtZGl2IHtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwICM5YWM3OWEsIDAgNnB4IDIwcHggMCAjOWFjNzlhO1xcbiAgYm9yZGVyOiAxcHggIzlhYzc5YSBzb2xpZDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGdDQUFnQztFQUNoQyxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscURBQXFEO0VBQ3JELHlCQUF5QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBTdHlsZXMgKi9cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4ZmY7XFxufVxcblxcbmEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG5hOmZvY3VzIHtcXG4gIGNvbG9yOiBncmV5O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uYmxhY2stc3F1YXJlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjJlNjM7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5hcHAtaXRlbSB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4ICNmMGZmZjAgc29saWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmFwcC1pdGVtLWVkaSB7XFxuICBoZWlnaHQ6IDU1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcXG59XFxuXFxuLmJvdHRvbS1idG4ge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZmZmMDtcXG59XFxuXFxuYSNjbGVhci1jb21wIHtcXG4gIGNvbG9yOiAjMTk1ODkyO1xcbn1cXG5cXG4ubm8tdG8tZG9zIHtcXG4gIGNvbG9yOiAjOTQ1MDQ3O1xcbn1cXG5cXG4ubm9ybWFsLXZpZXcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiN0YXNrLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI2FwcC1kaXYge1xcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgIzlhYzc5YSwgMCA2cHggMjBweCAwICM5YWM3OWE7XFxuICBib3JkZXI6IDFweCAjOWFjNzlhIHNvbGlkO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgdGhpcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1tfaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBtb2R1bGVzLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2kyXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBjaGVja2JveGVzLmpzXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGlzQ29tcGxldGVkIHZhbHVlIG9mIHRhc2tzXG5jb25zdCB0YXNrQ29tcGxldGVkID0gKHBvc2l0aW9uMmNoYWdlLCB2YWx1ZSkgPT4ge1xuICAvLyBHZXRzIGxpc3QgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHRvRG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcblxuICBjb25zdCB0YXNrMm1vZGlmeSA9IHRvRG9zW3Bvc2l0aW9uMmNoYWdlXTtcbiAgdGFzazJtb2RpZnkuaXNDb21wbGV0ZWQgPSB2YWx1ZTtcbiAgdG9Eb3NbcG9zaXRpb24yY2hhZ2VdID0gdGFzazJtb2RpZnk7XG5cbiAgLy8gU2V0IGl0ZW1zIHRvIHN0b3JhZ2VcbiAgU3RvcmUuc2V0VGFza3ModG9Eb3MpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFza0NvbXBsZXRlZDsiLCIvLyBoZWxwZXIgZnVuY3Rpb25zXG5cbmltcG9ydCBTdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCByZXR1cm5zVW5jb21wbGV0ZWQgZnJvbSAnLi9yZXR1cm5zVW5jb21wbGV0ZWQnO1xuXG4vLyBmdW5jdGlvbiB0byBoZWxwIHZhbGlkYXRlIGlucHV0XG5jb25zdCB2YWxpZGF0ZURlc2NyaXB0aW9uID0gKHRleHQpID0+IHtcbiAgaWYgKHRleHQgPT09IG51bGwgfHwgdGV4dCA9PT0gJycpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5jb25zdCBjbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcbiAgLy8gZ2V0cyB0b2RvcyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgY29uc3QgdGFza3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAvLyBjcmVhdGUgbmV3IGFycmF5IGZyb20gZmlsdGVyKClcbiAgY29uc3QgdW5jb21wbGV0ZWRUYXNrcyA9IHRhc2tzLmZpbHRlcihyZXR1cm5zVW5jb21wbGV0ZWQpO1xuICAvLyB1cGRhdGVzIGluZGV4ZXNcbiAgdW5jb21wbGV0ZWRUYXNrcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4geyB0b2RvLmluZGV4ID0gaW5kZXg7IH0pO1xuXG4gIFN0b3JlLnNldFRhc2tzKHVuY29tcGxldGVkVGFza3MpO1xufTtcblxuZXhwb3J0IHsgdmFsaWRhdGVEZXNjcmlwdGlvbiwgY2xlYXJDb21wbGV0ZWQgfTsiLCIvLyByZXR1cm5zVW5jb21wbGV0ZWQuanNcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmV0dXJuc1VuY29tcGxldGVkKHRhc2spIHtcbiAgcmV0dXJuICF0YXNrLmlzQ29tcGxldGVkO1xufSIsIi8vIFN0b3JlIENsYXNzOiBFbmNhcHN1bGF0ZXMgZGUgbG9jYWNsIHN0b3JhZ2VcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICAvLyBnZXRzIHRhc2tzIGZyb20gc3RvcmFnZSBhbmQgcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzXG4gIHN0YXRpYyBnZXRUYXNrcygpIHtcbiAgICBsZXQgdGFza3M7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpID09PSBudWxsKSB7XG4gICAgICB0YXNrcyA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpO1xuICAgIH1cblxuICAgIHJldHVybiB0YXNrcztcbiAgfVxuXG4gIHN0YXRpYyBzZXRUYXNrcyh0YXNrcykge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gIH1cbn0iLCIvLyBUQVNLOiBjbGFzcyB0aGF0IHJlcHMgYSBzaW5nbGUgdGFzayBvciAndG8tZG8nXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24sIGluZGV4KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gIH1cblxuICB0YXNrMnN0cigpIHtcbiAgICBjb25zdCBpc0RvbmUgPSAoaXNDb21wbGV0ZWQpID0+IChpc0NvbXBsZXRlZCA/ICd5ZXMnIDogJ25vJyk7XG4gICAgY29uc3QgbXlTdHIgPSBgVGFzayMke3RoaXMuaW5kZXh9OiAke3RoaXMuZGVzY3JpcHRpb259IC0tIGRvbmU/ICR7aXNEb25lKHRoaXMuaXNDb21wbGV0ZWQpfWA7XG4gICAgcmV0dXJuIG15U3RyO1xuICB9XG59IiwiLy8gdXNlciBpbnRlcmZhY2VcblxuaW1wb3J0IFN0b3JlIGZyb20gJy4vc3RvcmUnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbmltcG9ydCB0YXNrQ29tcGxldGVkIGZyb20gJy4vY2hlY2tib3hlcyc7XG5pbXBvcnQgeyBjbGVhckNvbXBsZXRlZCB9IGZyb20gJy4vaGVscGZ1bEZ1bmN0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJIHtcbiAgc3RhdGljIGFkZFRhc2sybGlzdCh0YXNrKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcblxuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAvLyBjcmVhdGVzIGxpc3QgaXRlbVxuICAgIGl0ZW0uY2xhc3NOYW1lID0gJ2FwcC1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHgtMic7XG5cbiAgICAvLyBjcmVhdGVzIGRpdiBmb3Igbm9ybWFsIHZpZXdcbiAgICBjb25zdCBkaXZOb3JtYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZOb3JtYWwuY2xhc3NOYW1lID0gJ2QtZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbm9ybWFsLXZpZXcnO1xuXG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpOyAvLyBjcmVhdGVzIGNoZWNrYm94XG4gICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRhc2suaXNDb21wbGV0ZWQ7XG4gICAgY2hlY2tib3guY2xhc3NOYW1lID0gJ2Zvcm0tY2hlY2stbGFiZWwgcC0wJztcbiAgICBkaXZOb3JtYWwuYXBwZW5kQ2hpbGQoY2hlY2tib3gpOyAvLyBhcHBlbmRzIGNoZWNrYm94IHRvIGl0ZW1cblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIGNyZWF0ZXMgcFxuICAgIHRleHQudGV4dENvbnRlbnQgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIHRleHQuY2xhc3NOYW1lID0gJ20tMCBweC0zJztcbiAgICBpZiAodGFzay5pc0NvbXBsZXRlZCA9PT0gdHJ1ZSkge1xuICAgICAgdGV4dC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWRlY29yYXRpb24tbGluZS10aHJvdWdoJyk7XG4gICAgfVxuICAgIGRpdk5vcm1hbC5hcHBlbmRDaGlsZCh0ZXh0KTsgLy8gYXBwZW5kcyBwIHRvIGl0ZW1cblxuICAgIGNvbnN0IGFFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFFZGl0LmNsYXNzTmFtZSA9ICdlZHRJY24gbXMtYXV0byc7XG4gICAgY29uc3QgaWNvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7IC8vIGNyZWF0ZXMgZWRpdCBpY29uXG4gICAgaWNvbkVkaXQuY2xhc3NOYW1lID0gJ2ZhcyBmYS1lbGxpcHNpcy12IHAtMic7XG4gICAgYUVkaXQuYXBwZW5kQ2hpbGQoaWNvbkVkaXQpOyAvLyBhcHBlbmRzIGVkaXQgaWNvbiB0byBhbmNob3JcbiAgICBkaXZOb3JtYWwuYXBwZW5kQ2hpbGQoYUVkaXQpOyAvLyBhcHBlbmRzIGFjaG9yIHRvIGRpdk5vcm1hbFxuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChkaXZOb3JtYWwpOy8vIC0tIGFwcGVuZHMgZGl2Tm9ybWFsIHRvIGl0ZW1cblxuICAgIC8vIENyZWF0ZSBkaXYgZm9yIGVkaXQgdmlld1xuICAgIGNvbnN0IGRpdkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZFZGl0LmNsYXNzTmFtZSA9ICdkLW5vbmUgZmxleC1yb3cganVzdGlmeS1jb250ZW50LWJldHdlZW4gZmxleC1maWxsIGFsaWduLWl0ZW1zLWNlbnRlciBweS0yIGFwcC1pdGVtLWVkaSc7XG5cbiAgICBjb25zdCBpbnB1dEVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RWRpdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGlucHV0RWRpdC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIGJvcmRlci0wIHAtMCBteC0yJztcbiAgICBpbnB1dEVkaXQudmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuXG4gICAgZGl2RWRpdC5hcHBlbmRDaGlsZChpbnB1dEVkaXQpO1xuXG4gICAgY29uc3QgYUFjY2VwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhQWNjZXB0LmNsYXNzTmFtZSA9ICdtcy1hdXRvIGFjY2VwdEljbic7XG4gICAgY29uc3QgaWNvbkFjY2VwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTsgLy8gY3JlYXRlcyBhY2NlcHQgaWNvblxuICAgIGljb25BY2NlcHQuY2xhc3NOYW1lID0gJ2ZhcyBmYS1jaGVjay1jaXJjbGUgcC0yJztcbiAgICBhQWNjZXB0LmFwcGVuZENoaWxkKGljb25BY2NlcHQpOyAvLyBhcHBlbmRzIGFjY2VwdCBpY29uIHRvIGFuY2hvclxuICAgIGRpdkVkaXQuYXBwZW5kQ2hpbGQoYUFjY2VwdCk7IC8vIGFwcGVuZHMgYWNjcGV0IGFuY2hvciB0byBpdGVtXG5cbiAgICBjb25zdCBhUmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGFSZW1vdmUuY2xhc3NOYW1lID0gJ3JlbW92ZUljbic7XG4gICAgY29uc3QgaWNvblJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTsgLy8gY3JlYXRlcyByZW1vdmUgaWNvblxuICAgIGljb25SZW1vdmUuY2xhc3NOYW1lID0gJ2ZhcyBmYS10cmFzaCBwLTInO1xuICAgIGFSZW1vdmUuYXBwZW5kQ2hpbGQoaWNvblJlbW92ZSk7IC8vIGFwcGVuZHMgcmVtb3ZlIGljb24gdG8gYW5jaG9yXG4gICAgZGl2RWRpdC5hcHBlbmRDaGlsZChhUmVtb3ZlKTsgLy8gYXBwZW5kcyByZW1vdmUgYW5jaG9yIHRvIGl0ZW1cblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGl2RWRpdCk7Ly8gLS0gYXBwZW5kcyBkaXZFZGl0IHRvIGl0ZW1cblxuICAgIGxpc3QuYXBwZW5kQ2hpbGQoaXRlbSk7IC8vIGFwcGVuZHMgaXRlbSB0byBsaXN0XG4gIH1cblxuICBzdGF0aWMgYWRkRW1wdHlUb0RvTWVzc2FnZSgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7IC8vIGNyZWF0ZXMgbGlzdCBpdGVtXG4gICAgaXRlbS5jbGFzc05hbWUgPSAnYXBwLWl0ZW0gZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHB4LTInO1xuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTmFtZSA9ICdtLTAgcC0wIG5vLXRvLWRvcyc7XG4gICAgcC50ZXh0Q29udGVudCA9IFwiTm8gdG8tZG8ncyByaWdodCBub3dcIjtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQocCk7XG4gICAgbGlzdC5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5VGFza3MoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICBsaXN0LmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIGlmICh0b2Rvcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuYWRkRW1wdHlUb0RvTWVzc2FnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2Rvcy5mb3JFYWNoKCh0YXNrKSA9PiB0aGlzLmFkZFRhc2sybGlzdCh0YXNrKSk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGFkZFRhc2sobmV3RGVzY3JpcCkge1xuICAgIGNvbnN0IHRvZG9zID0gU3RvcmUuZ2V0VGFza3MoKTtcbiAgICBjb25zdCBuZW8gPSBuZXcgVGFzayhuZXdEZXNjcmlwLCB0b2Rvcy5sZW5ndGgpO1xuICAgIHRvZG9zLnB1c2gobmVvKTtcbiAgICAvLyB1cGRhdGVzIGluZGV4ZXNcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4geyB0b2RvLmluZGV4ID0gaW5kZXg7IH0pO1xuICAgIFN0b3JlLnNldFRhc2tzKHRvZG9zKTtcbiAgICAvLyByZXBvcHVsYXRlcyBsaXN0XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBjaGFuZ2VMaVRvRWRpdE1vZGUobGkpIHtcbiAgICBjb25zdCBsaXNDaGlsZHJlbiA9IGxpLmNoaWxkcmVuO1xuICAgIC8vIGNoYW5nZSBjbGFzZXMgb2YgZGl2c1xuICAgIGNvbnN0IG5vcm1hbFZpZXcgPSBsaXNDaGlsZHJlblswXTtcbiAgICBsZXQgY2xhc3Nlc05WID0gbm9ybWFsVmlldy5jbGFzc05hbWU7XG4gICAgY2xhc3Nlc05WID0gY2xhc3Nlc05WLnJlcGxhY2UoJ2QtZmxleCcsICdkLW5vbmUnKTtcbiAgICBub3JtYWxWaWV3LmNsYXNzTmFtZSA9IGNsYXNzZXNOVjtcblxuICAgIGNvbnN0IGVkaXRWaWV3ID0gbGlzQ2hpbGRyZW5bMV07XG4gICAgbGV0IGNsYXNzZXNFID0gZWRpdFZpZXcuY2xhc3NOYW1lO1xuICAgIGNsYXNzZXNFID0gY2xhc3Nlc0UucmVwbGFjZSgnZC1ub25lJywgJ2QtZmxleCcpO1xuICAgIGVkaXRWaWV3LmNsYXNzTmFtZSA9IGNsYXNzZXNFO1xuXG4gICAgLy8gc2V0cyBmb2N1cyBjb24gdGhlIGlucHV0IHRvIGVkaXRcbiAgICBjb25zdCBpbnB1dEVkaXQgPSBlZGl0Vmlldy5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICAgIGlucHV0RWRpdC5pZCA9ICdpbnB1dEVkaXQnO1xuICAgIGlucHV0RWRpdC5mb2N1cygpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZVRhc2soaW5kZXgpIHtcbiAgICBjb25zdCB0b2RvcyA9IFN0b3JlLmdldFRhc2tzKCk7XG4gICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyB1cGRhdGVzIGluZGV4ZXNcbiAgICB0b2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4geyB0b2RvLmluZGV4ID0gaW5kZXg7IH0pO1xuICAgIFN0b3JlLnNldFRhc2tzKHRvZG9zKTtcbiAgICAvLyByZXBvcHVsYXRlcyBsaXN0XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUYXNrKGluZGV4LCBuZXdEZXNjKSB7XG4gICAgY29uc3QgdG9kb3MgPSBTdG9yZS5nZXRUYXNrcygpO1xuICAgIHRvZG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld0Rlc2M7XG4gICAgU3RvcmUuc2V0VGFza3ModG9kb3MpO1xuICAgIC8vIHJlcG9wdWxhdGVzIGxpc3RcbiAgICB0aGlzLmRpc3BsYXlUYXNrcygpO1xuICB9XG5cbiAgc3RhdGljIHRhc2tDb21wbGV0ZWQoaW5kZXgsIGNoZWNrYm94U3RhdGUpIHtcbiAgICB0YXNrQ29tcGxldGVkKGluZGV4LCBjaGVja2JveFN0YXRlKTtcbiAgICAvLyByZXBvcHVsYXRlcyB0aGUgdG9kbyBsaXN0XG4gICAgdGhpcy5kaXNwbGF5VGFza3MoKTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbXBsZXRlZCgpIHtcbiAgICBjbGVhckNvbXBsZXRlZCgpO1xuICAgIHRoaXMuZGlzcGxheVRhc2tzKCk7XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW5kZXguanNcbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL21vZHVsZXMvdWknO1xuaW1wb3J0IHsgdmFsaWRhdGVEZXNjcmlwdGlvbiB9IGZyb20gJy4vbW9kdWxlcy9oZWxwZnVsRnVuY3Rpb25zJztcblxuLy8gV2hlbiBjb250ZW50IGxvYWRzXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgVUkuZGlzcGxheVRhc2tzKCkpO1xuXG4vLyBFdmVudDogd2hlbiBmb3JtIGlzIHN1Ym1pdHRlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRhc2snKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlLnRyaW0oKTtcbiAgaWYgKHZhbGlkYXRlRGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKSkge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFzayh0YXNrRGVzY3JpcHRpb24pO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlID0gJyc7XG59KTtcblxuLy8gRXZlbnQ6IHdoZW4gaWNvbiBpcyBjbGlja2VkIHRvIGFkZCB0YXNrXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xpY2tFbnRlckljb24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gR2V0IGZvcm0gdmFsdWVzXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlLnRyaW0oKTtcbiAgaWYgKHZhbGlkYXRlRGVzY3JpcHRpb24odGFza0Rlc2NyaXB0aW9uKSkge1xuICAgIC8vIEFkZCB0YXNrXG4gICAgVUkuYWRkVGFzayh0YXNrRGVzY3JpcHRpb24pO1xuICB9XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrRGVzYycpLnZhbHVlID0gJyc7XG59KTtcblxuLy8gRXZlbnQ6IGNsaWNrIGFueXRoaW5nIG9uIHRhc2stbGlzdFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgY29uc3QgY2xhc3Nlc0ljbiA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2xhc3NOYW1lO1xuICBjb25zdCBjbGFzc2VzQXJyID0gY2xhc3Nlc0ljbi5zcGxpdCgnICcpO1xuXG4gIGNvbnN0IGxpID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgY29uc3Qgbm9kZXMgPSBBcnJheS5mcm9tKHVsTGlzdC5jaGlsZHJlbik7XG4gIGNvbnN0IGluZGV4ID0gbm9kZXMuaW5kZXhPZihsaSk7XG5cbiAgLy8gRXZlbnQ6IHdoZW4gdGhlIHRocmVlIGRvdHMgaWNvbiBnZXRzIGNsaWNrZWRcbiAgaWYgKGNsYXNzZXNBcnIuaW5kZXhPZignZWR0SWNuJykgIT09IC0xKSB7XG4gICAgVUkuY2hhbmdlTGlUb0VkaXRNb2RlKGxpKTtcbiAgfVxuXG4gIC8vIEV2ZW50OiB3aGVuIHRoZSBjaGVjayBpY29uIGdldHMgY2xpY2tlZCB0byBSRU1PVkVcbiAgaWYgKGNsYXNzZXNBcnIuaW5kZXhPZigncmVtb3ZlSWNuJykgIT09IC0xKSB7XG4gICAgVUkucmVtb3ZlVGFzayhpbmRleCk7XG4gIH1cblxuICAvLyBFdmVudDogd2hlbiB0aGUgdGhlIHRyYXNoIGljb24gZ2V0cyBjbGlja2VkIHRvIFVQREFURVxuICBpZiAoY2xhc3Nlc0Fyci5pbmRleE9mKCdhY2NlcHRJY24nKSAhPT0gLTEpIHtcbiAgICBjb25zdCBuZXdEZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lucHV0RWRpdCcpLnZhbHVlLnRyaW0oKTtcbiAgICBpZiAodmFsaWRhdGVEZXNjcmlwdGlvbihuZXdEZXNjKSkge1xuICAgICAgVUkudXBkYXRlVGFzayhpbmRleCwgbmV3RGVzYyk7XG4gICAgfVxuICB9XG59KTtcblxuLy8gRXZlbnQ6IHdoZW4gY2hlY2tib3hlcyBhcmUgY2xpY2tlZFxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG5cbiAgLy8gY2hlY2tzIGlmIHRoaXMgaXMgdHJpZ2VycmluZyBmb3IgdGhlIGNvcnJlY3QgZWxlbWVudFxuICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gJ0lOUFVUJyAmJiBlLnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgLy8gR2V0cyB0aGUgc3RhdGUgb2YgdGhlIGNoZWNrZWQgY2hlY2tib3hcbiAgICBjb25zdCBjaGVja2JveFN0YXRlID0gZS50YXJnZXQuY2hlY2tlZDtcblxuICAgIGNvbnN0IHVsTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcbiAgICBjb25zdCBpdGVtQ2hlY2tlZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBub2RlcyA9IEFycmF5LmZyb20odWxMaXN0LmNoaWxkcmVuKTtcbiAgICBjb25zdCBpbmRleCA9IG5vZGVzLmluZGV4T2YoaXRlbUNoZWNrZWQpO1xuXG4gICAgVUkudGFza0NvbXBsZXRlZChpbmRleCwgY2hlY2tib3hTdGF0ZSk7XG4gIH1cbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXItY29tcCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBVSS5jbGVhckNvbXBsZXRlZCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9