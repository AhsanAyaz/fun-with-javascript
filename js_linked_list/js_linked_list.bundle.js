/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js_linked_list/linked_list.js":
/*!*******************************************!*\
  !*** ./src/js_linked_list/linked_list.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultEqFn = function defaultEqFn(a, b) {
  return a === b;
};

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.next = null;
  this.element = element;
};

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    _defineProperty(this, "head", null);

    this.count = 0;
    this.head = null;
    this.equalsFn = defaultEqFn;
  }

  _createClass(LinkedList, [{
    key: "push",
    value: function push(element) {
      var current;
      var node = new Node(element);

      if (this.head === null) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next !== null) {
          current = current.next;
        }

        current.next = node;
      }

      this.count++;
    }
  }, {
    key: "removeAt",
    value: function removeAt(index) {
      if (index < 0 || index >= this.count) {
        return undefined;
      }

      var current = this.head;

      if (index === 0) {
        this.head = current.next;
      } else {
        var previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }

      this.count--;
      return current.element;
    }
  }, {
    key: "getElementAt",
    value: function getElementAt(index) {
      if (index < 0 || index > this.count) {
        return undefined;
      }

      var node = this.head;

      for (var i = 0; i < index && node !== null; i++) {
        node = node.next;
      }

      return node;
    }
  }, {
    key: "insertAt",
    value: function insertAt(element, index) {
      if (index < 0 || index > this.count) {
        return undefined;
      }

      var node = new Node(element);

      if (index === 0) {
        var current = this.head;
        node.next = current;
        this.head = node;
      } else {
        var previous = this.getElementAt(index - 1);
        var _current = previous.next;
        node.next = _current;
        previous.next = node;
      }

      this.count++;
      return true;
    }
  }, {
    key: "indexOf",
    value: function indexOf(element) {
      var current = this.head;

      for (var i = 0; i < this.count && current !== null; i++) {
        if (this.equalsFn(element, current.element)) {
          return i;
        }

        current = current.next;
      }

      return -1;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var index = this.indexOf(element);
      return this.removeAt(index);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.head = null;
      this.count = 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.count;
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this.head;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.head === null) {
        return '';
      }

      var objString = "".concat(this.head.element);
      var current = this.head.next;

      for (var i = 1; i < this.size() && current !== null; i++) {
        objString += ", ".concat(current.element);
        current = current.next;
      }

      return objString;
    }
  }]);

  return LinkedList;
}();

/* harmony default export */ __webpack_exports__["default"] = (LinkedList);

/***/ }),

/***/ "./src/js_linked_list/ui-handlers.js":
/*!*******************************************!*\
  !*** ./src/js_linked_list/ui-handlers.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLinkedList": function() { return /* binding */ renderLinkedList; },
/* harmony export */   "initiateHandlers": function() { return /* binding */ initiateHandlers; }
/* harmony export */ });
var renderLinkedList = function renderLinkedList(linkedList) {
  var boxElement = document.querySelector('.box');
  boxElement.querySelectorAll('.box_item').forEach(function (item) {
    return item.remove();
  });
  var current = linkedList.head;

  if (linkedList.head === null) {
    return;
  }

  for (var i = 0; i < linkedList.size() && current !== null; i++) {
    var itemElement = document.createElement('DIV');
    itemElement.classList.add('box_item');
    itemElement.classList.add('icon', 'icon-arrow-right');
    itemElement.textContent = current.element;
    boxElement.append(itemElement);
    current = current.next;
  }
};
var initiateHandlers = function initiateHandlers(linkedList) {
  var pushBtn = document.querySelector('#pushBtn');
  var insertAtBtn = document.querySelector('#insertAtBtn');
  var removeElementBtn = document.querySelector('#removeElementBtn');
  var getElementAtBtn = document.querySelector('#getElementAtBtn');
  var indexOfBtn = document.querySelector('#indexOfBtn');
  var removeElementAtBtn = document.querySelector('#removeElementAtBtn');
  var toStringBtn = document.querySelector('#toStringBtn');
  var sizeBtn = document.querySelector('#sizeBtn');
  var isEmptyBtn = document.querySelector('#isEmptyBtn');
  var clearBtn = document.querySelector('#clearBtn');
  pushBtn.addEventListener('click', function () {
    var element = prompt('Enter element to add to linkedlist');
    linkedList.push(element);
    renderLinkedList(linkedList);
  });
  removeElementBtn.addEventListener('click', function () {
    var element = prompt('Enter element to remove from linkedlist');
    var removedEl = linkedList.remove(element);

    if (removedEl) {
      alert('Element removed');
      renderLinkedList(linkedList);
    } else {
      alert('Element not found');
    }
  });
  insertAtBtn.addEventListener('click', function () {
    var element = prompt('Enter element to add to linkedlist');
    var index = prompt('Enter the index the element is to be added at');
    linkedList.insertElementAt(element, Number(index));
    renderLinkedList(linkedList);
  });
  getElementAtBtn.addEventListener('click', function () {
    var index = prompt('Enter the index the element is to be retrieved from');
    var node = linkedList.getElementAt(Number(index));

    if (node) {
      alert("Element retrieved = ".concat(node.element));
    } else {
      alert('Element not found');
    }
  });
  removeElementAtBtn.addEventListener('click', function () {
    var index = prompt('Enter the index the element is to be removed from');
    var removedEl = linkedList.removeAt(Number(index));

    if (removedEl) {
      alert('Element removed');
      renderLinkedList(linkedList);
    } else {
      alert('Element not found');
    }
  });
  indexOfBtn.addEventListener('click', function () {
    var element = prompt('Enter element you want to find index of');
    var index = linkedList.indexOf(element);

    if (index >= 0) {
      alert("Index of element '".concat(element, "' is ").concat(index));
    } else {
      alert('Element not found');
    }
  });
  toStringBtn.addEventListener('click', function () {
    alert(linkedList.toString());
  });
  sizeBtn.addEventListener('click', function () {
    alert("The size of the linked list is ".concat(linkedList.size()));
  });
  isEmptyBtn.addEventListener('click', function () {
    alert("Linked list is".concat(linkedList.isEmpty() ? '' : ' not', " empty"));
  });
  clearBtn.addEventListener('click', function () {
    linkedList.clear();
    alert('Linked list cleared');
    renderLinkedList(linkedList);
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js_linked_list/linked_list.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js_linked_list/linked_list.css ***!
  \**********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\n.icon.icon-arrow-right::before {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  content: '\\f061';\n  position: absolute;\n  left: -18px;\n}\n\n.app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box__line {\n  background: black;\n  flex: 1;\n  height: 2px;\n  margin-left: 4px;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n  position: relative;\n  margin-left: 20px;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Head';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'null';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/js_linked_list/linked_list.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;;EAEE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\n.icon.icon-arrow-right::before {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  content: '\\f061';\n  position: absolute;\n  left: -18px;\n}\n\n.app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box__line {\n  background: black;\n  flex: 1;\n  height: 2px;\n  margin-left: 4px;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n  position: relative;\n  margin-left: 20px;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Head';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'null';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody > main,\r\nbody > .main {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n* {\r\n  outline: none;\r\n}\r\n\r\n.app-container {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  background-color: #f2f2f2;\r\n  padding: 30px;\r\n}\r\n\r\n.app-container h1 {\r\n  text-align: center;\r\n}\r\n\r\n.app-container .box_container {\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  height: 300px;\r\n  background-color: white;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app-container .box {\r\n  overflow: auto;\r\n}\r\n\r\n.app-container .box .box_item {\r\n  border: 1px solid black;\r\n  padding: 4px 80px;\r\n  text-align: center;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.app-container .box .box_item.peeking {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container .buttons-container {\r\n  max-width: max-content;\r\n  margin: 30px auto 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/globals.css"],"names":[],"mappings":"AAAA;;EAEE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;;EAEE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;EACzB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,uBAAuB;EACvB,iBAAiB;EACjB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;EACb,mBAAmB;AACrB","sourcesContent":["html,\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody > main,\r\nbody > .main {\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n* {\r\n  outline: none;\r\n}\r\n\r\n.app-container {\r\n  max-width: 600px;\r\n  margin: auto;\r\n  background-color: #f2f2f2;\r\n  padding: 30px;\r\n}\r\n\r\n.app-container h1 {\r\n  text-align: center;\r\n}\r\n\r\n.app-container .box_container {\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n  display: flex;\r\n  height: 300px;\r\n  background-color: white;\r\n  max-width: 200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app-container .box {\r\n  overflow: auto;\r\n}\r\n\r\n.app-container .box .box_item {\r\n  border: 1px solid black;\r\n  padding: 4px 80px;\r\n  text-align: center;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.app-container .box .box_item.peeking {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container .buttons-container {\r\n  max-width: max-content;\r\n  margin: 30px auto 0 auto;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ (function(module) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./src/js_linked_list/linked_list.css":
/*!********************************************!*\
  !*** ./src/js_linked_list/linked_list.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_linked_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./linked_list.css */ "./node_modules/css-loader/dist/cjs.js!./src/js_linked_list/linked_list.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_linked_list_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_linked_list_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./globals.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_globals_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************************!*\
  !*** ./src/js_linked_list/main.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _linked_list_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linked_list.css */ "./src/js_linked_list/linked_list.css");
/* harmony import */ var _linked_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linked_list */ "./src/js_linked_list/linked_list.js");
/* harmony import */ var _ui_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui-handlers */ "./src/js_linked_list/ui-handlers.js");




var linkedList = new _linked_list__WEBPACK_IMPORTED_MODULE_2__.default();

var main = function main() {
  (0,_ui_handlers__WEBPACK_IMPORTED_MODULE_3__.initiateHandlers)(linkedList);
  (0,_ui_handlers__WEBPACK_IMPORTED_MODULE_3__.renderLinkedList)(linkedList);
};

main();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC9saW5rZWRfbGlzdC5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC91aS1oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC9saW5rZWRfbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2pzX2xpbmtlZF9saXN0L2xpbmtlZF9saXN0LmNzcz9hYTU2Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanNfbGlua2VkX2xpc3QvbWFpbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RXFGbiIsImEiLCJiIiwiTm9kZSIsImVsZW1lbnQiLCJuZXh0IiwiTGlua2VkTGlzdCIsImNvdW50IiwiaGVhZCIsImVxdWFsc0ZuIiwiY3VycmVudCIsIm5vZGUiLCJpbmRleCIsInVuZGVmaW5lZCIsInByZXZpb3VzIiwiZ2V0RWxlbWVudEF0IiwiaSIsImluZGV4T2YiLCJyZW1vdmVBdCIsInNpemUiLCJvYmpTdHJpbmciLCJyZW5kZXJMaW5rZWRMaXN0IiwibGlua2VkTGlzdCIsImJveEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJyZW1vdmUiLCJpdGVtRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsImluaXRpYXRlSGFuZGxlcnMiLCJwdXNoQnRuIiwiaW5zZXJ0QXRCdG4iLCJyZW1vdmVFbGVtZW50QnRuIiwiZ2V0RWxlbWVudEF0QnRuIiwiaW5kZXhPZkJ0biIsInJlbW92ZUVsZW1lbnRBdEJ0biIsInRvU3RyaW5nQnRuIiwic2l6ZUJ0biIsImlzRW1wdHlCdG4iLCJjbGVhckJ0biIsImFkZEV2ZW50TGlzdGVuZXIiLCJwcm9tcHQiLCJwdXNoIiwicmVtb3ZlZEVsIiwiYWxlcnQiLCJpbnNlcnRFbGVtZW50QXQiLCJOdW1iZXIiLCJ0b1N0cmluZyIsImlzRW1wdHkiLCJjbGVhciIsIm1haW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxTQUFVRCxDQUFDLEtBQUtDLENBQWhCO0FBQUEsQ0FBcEI7O0lBQ01DLEksR0FDSixjQUFZQyxPQUFaLEVB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Q0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBRyxJQUFJaEIsaURBQUosRUFBbkI7O0FBRUEsSUFBTW1ELElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJyQixnRUFBZ0IsQ0FBQ2QsVUFBRCxDQUFoQjtBQUNBRCxnRUFBZ0IsQ0FBQ0MsVUFBRCxDQUFoQjtBQUNELENBSEQ7O0FBS0FtQyxJQUFJLEciLCJmaWxlIjoianNfbGlua2VkX2xpc3QvanNfbGlua2VkX2xpc3QuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVmYXVsdEVxRm4gPSAoYSwgYikgPT4gYSA9PT0gYjtcbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5uZXh0ID0gbnVsbDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBoZWFkID0gbnVsbDtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLmVxdWFsc0ZuID0gZGVmYXVsdEVxRm47XG4gIH1cbiAgcHVzaChlbGVtZW50KSB7XG4gICAgbGV0IGN1cnJlbnQ7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBOb2RlKGVsZW1lbnQpO1xuICAgIGlmICh0aGlzLmhlYWQgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICB3aGlsZSAoY3VycmVudC5uZXh0ICE9PSBudWxsKSB7XG4gICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICB9XG4gICAgICBjdXJyZW50Lm5leHQgPSBub2RlO1xuICAgIH1cbiAgICB0aGlzLmNvdW50Kys7XG4gIH1cblxuICByZW1vdmVBdChpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5jb3VudCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICB0aGlzLmhlYWQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5nZXRFbGVtZW50QXQoaW5kZXggLSAxKTtcbiAgICAgIGN1cnJlbnQgPSBwcmV2aW91cy5uZXh0O1xuICAgICAgcHJldmlvdXMubmV4dCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgdGhpcy5jb3VudC0tO1xuICAgIHJldHVybiBjdXJyZW50LmVsZW1lbnQ7XG4gIH1cblxuICBnZXRFbGVtZW50QXQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5jb3VudCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgbm9kZSA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4ICYmIG5vZGUgIT09IG51bGw7IGkrKykge1xuICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBpbnNlcnRBdChlbGVtZW50LCBpbmRleCkge1xuICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPiB0aGlzLmNvdW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoZWxlbWVudCk7XG4gICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgICAgbm9kZS5uZXh0ID0gY3VycmVudDtcbiAgICAgIHRoaXMuaGVhZCA9IG5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByZXZpb3VzID0gdGhpcy5nZXRFbGVtZW50QXQoaW5kZXggLSAxKTtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBwcmV2aW91cy5uZXh0O1xuICAgICAgbm9kZS5uZXh0ID0gY3VycmVudDtcbiAgICAgIHByZXZpb3VzLm5leHQgPSBub2RlO1xuICAgIH1cbiAgICB0aGlzLmNvdW50Kys7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpbmRleE9mKGVsZW1lbnQpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQgJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5lcXVhbHNGbihlbGVtZW50LCBjdXJyZW50LmVsZW1lbnQpKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9XG5cbiAgcmVtb3ZlKGVsZW1lbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuaW5kZXhPZihlbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcy5yZW1vdmVBdChpbmRleCk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLmhlYWQgPSBudWxsO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICB9XG5cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudDtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZSgpID09PSAwO1xuICB9XG5cbiAgZ2V0SGVhZCgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWFkO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQgb2JqU3RyaW5nID0gYCR7dGhpcy5oZWFkLmVsZW1lbnR9YDtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZC5uZXh0O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgdGhpcy5zaXplKCkgJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKSB7XG4gICAgICBvYmpTdHJpbmcgKz0gYCwgJHtjdXJyZW50LmVsZW1lbnR9YDtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuICAgIHJldHVybiBvYmpTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua2VkTGlzdDtcbiIsImV4cG9ydCBjb25zdCByZW5kZXJMaW5rZWRMaXN0ID0gKGxpbmtlZExpc3QpID0+IHtcbiAgY29uc3QgYm94RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib3gnKTtcbiAgYm94RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm94X2l0ZW0nKS5mb3JFYWNoKChpdGVtKSA9PiBpdGVtLnJlbW92ZSgpKTtcbiAgbGV0IGN1cnJlbnQgPSBsaW5rZWRMaXN0LmhlYWQ7XG4gIGlmIChsaW5rZWRMaXN0LmhlYWQgPT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rZWRMaXN0LnNpemUoKSAmJiBjdXJyZW50ICE9PSBudWxsOyBpKyspIHtcbiAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JveF9pdGVtJyk7XG4gICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaWNvbicsICdpY29uLWFycm93LXJpZ2h0Jyk7XG4gICAgaXRlbUVsZW1lbnQudGV4dENvbnRlbnQgPSBjdXJyZW50LmVsZW1lbnQ7XG4gICAgYm94RWxlbWVudC5hcHBlbmQoaXRlbUVsZW1lbnQpO1xuICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBpbml0aWF0ZUhhbmRsZXJzID0gKGxpbmtlZExpc3QpID0+IHtcbiAgY29uc3QgcHVzaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwdXNoQnRuJyk7XG4gIGNvbnN0IGluc2VydEF0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luc2VydEF0QnRuJyk7XG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlRWxlbWVudEJ0bicpO1xuICBjb25zdCBnZXRFbGVtZW50QXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2V0RWxlbWVudEF0QnRuJyk7XG4gIGNvbnN0IGluZGV4T2ZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5kZXhPZkJ0bicpO1xuICBjb25zdCByZW1vdmVFbGVtZW50QXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlRWxlbWVudEF0QnRuJyk7XG4gIGNvbnN0IHRvU3RyaW5nQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvU3RyaW5nQnRuJyk7XG4gIGNvbnN0IHNpemVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2l6ZUJ0bicpO1xuICBjb25zdCBpc0VtcHR5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lzRW1wdHlCdG4nKTtcbiAgY29uc3QgY2xlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xlYXJCdG4nKTtcbiAgcHVzaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gcHJvbXB0KCdFbnRlciBlbGVtZW50IHRvIGFkZCB0byBsaW5rZWRsaXN0Jyk7XG4gICAgbGlua2VkTGlzdC5wdXNoKGVsZW1lbnQpO1xuICAgIHJlbmRlckxpbmtlZExpc3QobGlua2VkTGlzdCk7XG4gIH0pO1xuICByZW1vdmVFbGVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQoJ0VudGVyIGVsZW1lbnQgdG8gcmVtb3ZlIGZyb20gbGlua2VkbGlzdCcpO1xuICAgIGNvbnN0IHJlbW92ZWRFbCA9IGxpbmtlZExpc3QucmVtb3ZlKGVsZW1lbnQpO1xuICAgIGlmIChyZW1vdmVkRWwpIHtcbiAgICAgIGFsZXJ0KCdFbGVtZW50IHJlbW92ZWQnKTtcbiAgICAgIHJlbmRlckxpbmtlZExpc3QobGlua2VkTGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSk7XG4gIGluc2VydEF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQoJ0VudGVyIGVsZW1lbnQgdG8gYWRkIHRvIGxpbmtlZGxpc3QnKTtcbiAgICBjb25zdCBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IHRoZSBlbGVtZW50IGlzIHRvIGJlIGFkZGVkIGF0Jyk7XG4gICAgbGlua2VkTGlzdC5pbnNlcnRFbGVtZW50QXQoZWxlbWVudCwgTnVtYmVyKGluZGV4KSk7XG4gICAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbiAgfSk7XG4gIGdldEVsZW1lbnRBdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IHRoZSBlbGVtZW50IGlzIHRvIGJlIHJldHJpZXZlZCBmcm9tJyk7XG4gICAgY29uc3Qgbm9kZSA9IGxpbmtlZExpc3QuZ2V0RWxlbWVudEF0KE51bWJlcihpbmRleCkpO1xuICAgIGlmIChub2RlKSB7XG4gICAgICBhbGVydChgRWxlbWVudCByZXRyaWV2ZWQgPSAke25vZGUuZWxlbWVudH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9KTtcbiAgcmVtb3ZlRWxlbWVudEF0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvbXB0KCdFbnRlciB0aGUgaW5kZXggdGhlIGVsZW1lbnQgaXMgdG8gYmUgcmVtb3ZlZCBmcm9tJyk7XG4gICAgY29uc3QgcmVtb3ZlZEVsID0gbGlua2VkTGlzdC5yZW1vdmVBdChOdW1iZXIoaW5kZXgpKTtcbiAgICBpZiAocmVtb3ZlZEVsKSB7XG4gICAgICBhbGVydCgnRWxlbWVudCByZW1vdmVkJyk7XG4gICAgICByZW5kZXJMaW5rZWRMaXN0KGxpbmtlZExpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydCgnRWxlbWVudCBub3QgZm91bmQnKTtcbiAgICB9XG4gIH0pO1xuICBpbmRleE9mQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQoJ0VudGVyIGVsZW1lbnQgeW91IHdhbnQgdG8gZmluZCBpbmRleCBvZicpO1xuICAgIGNvbnN0IGluZGV4ID0gbGlua2VkTGlzdC5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICBhbGVydChgSW5kZXggb2YgZWxlbWVudCAnJHtlbGVtZW50fScgaXMgJHtpbmRleH1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9KTtcbiAgdG9TdHJpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxlcnQobGlua2VkTGlzdC50b1N0cmluZygpKTtcbiAgfSk7XG4gIHNpemVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxlcnQoYFRoZSBzaXplIG9mIHRoZSBsaW5rZWQgbGlzdCBpcyAke2xpbmtlZExpc3Quc2l6ZSgpfWApO1xuICB9KTtcbiAgaXNFbXB0eUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhbGVydChgTGlua2VkIGxpc3QgaXMke2xpbmtlZExpc3QuaXNFbXB0eSgpID8gJycgOiAnIG5vdCd9IGVtcHR5YCk7XG4gIH0pO1xuICBjbGVhckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsaW5rZWRMaXN0LmNsZWFyKCk7XG4gICAgYWxlcnQoJ0xpbmtlZCBsaXN0IGNsZWFyZWQnKTtcbiAgICByZW5kZXJMaW5rZWRMaXN0KGxpbmtlZExpc3QpO1xuICB9KTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5pY29uOjpiZWZvcmUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxuICB0ZXh0LXJlbmRlcmluZzogYXV0bztcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5cXG4uaWNvbi5pY29uLWFycm93LXJpZ2h0OjpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6ICdGb250IEF3ZXNvbWUgNSBGcmVlJztcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICBjb250ZW50OiAnXFxcXGYwNjEnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogLTE4cHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveCB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3hfX2xpbmUge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxuICBmbGV4OiAxO1xcbiAgaGVpZ2h0OiAycHg7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmJlZm9yZSxcXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZCc7XFxuICBsZWZ0OiAtNTBweDtcXG59XFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdudWxsJztcXG4gIHJpZ2h0OiAtNTBweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hcHAtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4jcGFsaW5kcm9tZUJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvanNfbGlua2VkX2xpc3QvbGlua2VkX2xpc3QuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi5pY29uLmljb24tYXJyb3ctcmlnaHQ6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbnRlbnQ6ICdcXFxcZjA2MSc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMThweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9fbGluZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YmVmb3JlLFxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjphZnRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkJztcXG4gIGxlZnQ6IC01MHB4O1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ251bGwnO1xcbiAgcmlnaHQ6IC01MHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5idG4tZ3JvdXAge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbiNwYWxpbmRyb21lQnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xpbmtlZF9saXN0LmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFscy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgJy4vbGlua2VkX2xpc3QuY3NzJztcbmltcG9ydCBMaW5rZWRMaXN0IGZyb20gJy4vbGlua2VkX2xpc3QnO1xuaW1wb3J0IHsgcmVuZGVyTGlua2VkTGlzdCwgaW5pdGlhdGVIYW5kbGVycyB9IGZyb20gJy4vdWktaGFuZGxlcnMnO1xuXG5jb25zdCBsaW5rZWRMaXN0ID0gbmV3IExpbmtlZExpc3QoKTtcblxuY29uc3QgbWFpbiA9ICgpID0+IHtcbiAgaW5pdGlhdGVIYW5kbGVycyhsaW5rZWRMaXN0KTtcbiAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbn07XG5cbm1haW4oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=