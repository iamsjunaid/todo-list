"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([[0],[
/* 0 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderTaskList": () => (/* binding */ renderTaskList),
/* harmony export */   "saveTasks": () => (/* binding */ saveTasks),
/* harmony export */   "tasks": () => (/* binding */ tasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _statusUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);

 // eslint-disable-line import/no-cycle

const TASKS_STORAGE_KEY = 'tasks';
let tasks = []; // eslint-disable-line import/no-mutable-exports
let nextIndex = 0;

const taskList = document.getElementById('task-list');
const taskListPlaceholder = document.getElementById('task-list-placeholder');
const taskDescriptionInput = document.getElementById('task-description-input');
const addTaskButton = document.getElementById('add-task-button');
const clearCompletedBtn = document.getElementById('clear-completed');

const saveTasks = () => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

const editTask = (index, newDescription) => {
  tasks[index].description = newDescription;

  saveTasks();
  renderTaskList(); // eslint-disable-line no-use-before-define
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  nextIndex -= 1;

  for (let i = index; i < tasks.length; i += 1) {
    tasks[i].index -= 1;
  }
  saveTasks();
  renderTaskList(); // eslint-disable-line no-use-before-define
};

const renderTaskList = () => {
  taskList.innerHTML = '';
  tasks.sort((a, b) => a.index - b.index);
  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_1__.markComplete)(index);
      } else {
        (0,_statusUpdates_js__WEBPACK_IMPORTED_MODULE_1__.markIncomplete)(index);
      }
    });

    const taskDescriptionElement = document.createElement('span');
    taskDescriptionElement.textContent = task.description;
    taskDescriptionElement.addEventListener('click', () => {
      const newDescription = prompt('Enter the new task description', task.description); // eslint-disable-line no-alert
      if (newDescription !== null) {
        editTask(task.index, newDescription);
      }
    });

    const deleteButton = document.createElement('button');
    deleteButton.className = 'fas fa-trash icons-btn';
    deleteButton.ariaHidden = 'true';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskDescriptionElement);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
};

const clearCompletedTasks = () => {
  tasks = tasks.filter((item) => !item.completed);
  let i = 0;
  tasks.forEach((task) => {
    task.index = i;
    i += 1;
  });
  saveTasks();
  renderTaskList();
};

clearCompletedBtn.addEventListener('click', () => {
  clearCompletedTasks();
});

const loadTasks = () => {
  const tasksJson = localStorage.getItem(TASKS_STORAGE_KEY);
  if (tasksJson) {
    tasks = JSON.parse(tasksJson);
    nextIndex = tasks.length;
  }
};

const addTask = () => {
  const taskDescription = taskDescriptionInput.value.trim();
  if (taskDescription !== '') {
    const task = {
      description: taskDescription,
      completed: false,
      index: nextIndex,
    };
    tasks.push(task);
    nextIndex += 1;

    saveTasks();
    renderTaskList();

    taskDescriptionInput.value = '';
  }
};

addTaskButton.addEventListener('click', () => {
  addTask();
});

taskDescriptionInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});

loadTasks();
renderTaskList();

taskListPlaceholder.appendChild(taskList);

/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
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
/* 3 */
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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
/* 4 */
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nbody {\r\n  font-family: 'Roboto Mono', monospace;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 100vh;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\nbutton {\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.border-bottom {\r\n  border-bottom: 1px solid #000;\r\n}\r\n\r\n.wrapper {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 40%;\r\n  background-color: #fff;\r\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 1em;\r\n}\r\n\r\nh1 {\r\n  font-weight: 700;\r\n  font-size: 1.3em;\r\n  width: 100%;\r\n  float: left;\r\n  display: flex;\r\n}\r\n\r\n.heading-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 1.5em 1.1em;\r\n}\r\n\r\ni {\r\n  color: #000;\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 1em;\r\n}\r\n\r\nbutton,\r\ninput {\r\n  background-color: transparent;\r\n  border: none;\r\n}\r\n\r\ninput {\r\n  font-size: 1em;\r\n}\r\n\r\nform input,\r\n.edit-todo {\r\n  width: 100%;\r\n  color: #000;\r\n}\r\n\r\n.todo-list {\r\n  margin-top: 5px;\r\n  overflow-y: auto;\r\n}\r\n\r\n.todo-li {\r\n  text-align: left;\r\n}\r\n\r\n.edit-todo {\r\n  color: #ff4c29;\r\n}\r\n\r\nform input:focus,\r\n.edit-todo:focus {\r\n  outline: none;\r\n  width: 100%;\r\n  color: #000;\r\n}\r\n\r\n.list-item {\r\n  width: 100%;\r\n  display: flex;\r\n  gap: 1em;\r\n}\r\n\r\n.desc-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border-top: 2px solid;\r\n  border-bottom: 2px solid;\r\n  padding: 1em;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n  filter: hue-rotate(10deg);\r\n}\r\n\r\n#task {\r\n  border: 2px #f6f6f6;\r\n  border-style: solid none;\r\n  padding: 1em;\r\n}\r\n\r\n.desc-container:focus {\r\n  border: 2px solid #222;\r\n}\r\n\r\n.fa-plus {\r\n  position: fixed;\r\n  top: 50%;\r\n  right: 32%;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\nli {\r\n  display: flex;\r\n  padding: 1em;\r\n  gap: 0.5em;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.clear-btn {\r\n  padding: 1em;\r\n  width: 100%;\r\n  font-size: 1em;\r\n  color: #000;\r\n  border-bottom-left-radius: 10px;\r\n  border-bottom-right-radius: 10px;\r\n  cursor: pointer;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.clear-btn:hover {\r\n  text-decoration: underline;\r\n}\r\n\r\n.icons-btn {\r\n  transition: all 0.1s linear;\r\n}\r\n\r\n.icons-btn:hover {\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
/* 11 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "markComplete": () => (/* binding */ markComplete),
/* harmony export */   "markIncomplete": () => (/* binding */ markIncomplete)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
 // eslint-disable-line import/no-cycle

const markComplete = (index) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = true;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)();
};

const markIncomplete = (index) => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.tasks[index].completed = false;
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveTasks)();
  (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.renderTaskList)();
};


/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ }
]);