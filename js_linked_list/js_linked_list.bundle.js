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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultEqFn = function defaultEqFn(a, b) {
  return a === b;
};

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = null;
};

var LinkedList = /*#__PURE__*/function () {
  function LinkedList() {
    var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultEqFn;

    _classCallCheck(this, LinkedList);

    this.head = null;
    this.count = 0;
    this.equalsFn = equalsFn;
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
      if (index < 0 || index >= this.size()) {
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
      if (index < 0 || index > this.size()) {
        return undefined;
      }

      var current = this.head;

      for (var i = 0; i < index && current !== null; i++) {
        current = current.next;
      }

      return current;
    }
  }, {
    key: "insertAt",
    value: function insertAt(element, index) {
      if (index < 0 || index > this.size()) {
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

      for (var i = 0; i < this.size() && current !== null; i++) {
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
      if (this.isEmpty()) {
        return '';
      }

      var linkedListArr = [];
      var current = this.head;

      for (var i = 0; i < this.size() && current !== null; i++) {
        linkedListArr.push(current.element);
        current = current.next;
      }

      return linkedListArr.join(', ');
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
    linkedList.insertAt(element, Number(index));
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
___CSS_LOADER_EXPORT___.push([module.id, ".icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\n.icon.icon-arrow-right::before {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  content: '\\f061';\n  position: absolute;\n  left: -18px;\n}\n\n.app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box__line {\n  background: black;\n  flex: 1;\n  height: 2px;\n  margin-left: 4px;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n  position: relative;\n  margin-left: 20px;\n  transition: all ease 0.2s;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Head';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'null';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/js_linked_list/linked_list.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,oBAAoB;EACpB,oBAAoB;EACpB,mCAAmC;AACrC;;AAEA;EACE,kCAAkC;EAClC,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,OAAO;EACP,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;;EAEE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".icon::before {\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n}\n\n.icon.icon-arrow-right::before {\n  font-family: 'Font Awesome 5 Free';\n  font-weight: 900;\n  content: '\\f061';\n  position: absolute;\n  left: -18px;\n}\n\n.app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box__line {\n  background: black;\n  flex: 1;\n  height: 2px;\n  margin-left: 4px;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n  position: relative;\n  margin-left: 20px;\n  transition: all ease 0.2s;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Head';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'null';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
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
  linkedList.push('22');
  linkedList.push('33');
  linkedList.push('abc');
  linkedList.push('xyz');
  (0,_ui_handlers__WEBPACK_IMPORTED_MODULE_3__.initiateHandlers)(linkedList);
  (0,_ui_handlers__WEBPACK_IMPORTED_MODULE_3__.renderLinkedList)(linkedList);
};

main();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC9saW5rZWRfbGlzdC5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC91aS1oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19saW5rZWRfbGlzdC9saW5rZWRfbGlzdC5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2pzX2xpbmtlZF9saXN0L2xpbmtlZF9saXN0LmNzcz9hYTU2Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanNfbGlua2VkX2xpc3QvbWFpbi5qcyJdLCJuYW1lcyI6WyJkZWZhdWx0RXFGbiIsImEiLCJiIiwiTm9kZSIsImVsZW1lbnQiLCJuZXh0IiwiTGlua2VkTGlzdCIsImVxdWFsc0ZuIiwiaGVhZCIsImNvdW50IiwiY3VycmVudCIsIm5vZGUiLCJpbmRleCIsInNpemUiLCJ1bmRlZmluZWQiLCJwcmV2aW91cyIsImdldEVsZW1lbnRBdCIsImkiLCJpbmRleE9mIiwicmVtb3ZlQXQiLCJpc0VtcHR5IiwibGlua2VkTGlzdEFyciIsInB1c2giLCJqb2luIiwicmVuZGVyTGlua2VkTGlzdCIsImxpbmtlZExpc3QiLCJib3hFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlIiwiaXRlbUVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJhcHBlbmQiLCJpbml0aWF0ZUhhbmRsZXJzIiwicHVzaEJ0biIsImluc2VydEF0QnRuIiwicmVtb3ZlRWxlbWVudEJ0biIsImdldEVsZW1lbnRBdEJ0biIsImluZGV4T2ZCdG4iLCJyZW1vdmVFbGVtZW50QXRCdG4iLCJ0b1N0cmluZ0J0biIsInNpemVCdG4iLCJpc0VtcHR5QnRuIiwiY2xlYXJCdG4iLCJhZGRFdmVudExpc3RlbmVyIiwicHJvbXB0IiwicmVtb3ZlZEVsIiwiYWxlcnQiLCJpbnNlcnRBdCIsIk51bWJlciIsInRvU3RyaW5nIiwiY2xlYXIiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLFNBQVVELENBQUMsS0FBS0MsQ0FBaEI7QUFBQSxDQUFwQjs7SUFFTUMsSSxHQUNKLGNBQVlDLE9BQVos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Z0VBQWdCLENBQUNkLFVBQUQsQ0FBaEI7QUFDQUQsZ0VBQWdCLENBQUNDLFVBQUQsQ0FBaEI7QUFDRCxDQVBEOztBQVNBaUMsSUFBSSxHIiwiZmlsZSI6ImpzX2xpbmtlZF9saXN0L2pzX2xpbmtlZF9saXN0LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRlZmF1bHRFcUZuID0gKGEsIGIpID0+IGEgPT09IGI7XG5cbmNsYXNzIE5vZGUge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm5leHQgPSBudWxsO1xuICB9XG59XG5cbmNsYXNzIExpbmtlZExpc3Qge1xuICBjb25zdHJ1Y3RvcihlcXVhbHNGbiA9IGRlZmF1bHRFcUZuKSB7XG4gICAgdGhpcy5oZWFkID0gbnVsbDtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLmVxdWFsc0ZuID0gZXF1YWxzRm47XG4gIH1cblxuICBwdXNoKGVsZW1lbnQpIHtcbiAgICBsZXQgY3VycmVudDtcbiAgICBjb25zdCBub2RlID0gbmV3IE5vZGUoZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuaGVhZCA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICAgIHdoaWxlIChjdXJyZW50Lm5leHQgIT09IG51bGwpIHtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQubmV4dCA9IG5vZGU7XG4gICAgfVxuICAgIHRoaXMuY291bnQrKztcbiAgfVxuXG4gIHJlbW92ZUF0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLnNpemUoKSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBsZXQgY3VycmVudCA9IHRoaXMuaGVhZDtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIHRoaXMuaGVhZCA9IGN1cnJlbnQubmV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmdldEVsZW1lbnRBdChpbmRleCAtIDEpO1xuICAgICAgY3VycmVudCA9IHByZXZpb3VzLm5leHQ7XG4gICAgICBwcmV2aW91cy5uZXh0ID0gY3VycmVudC5uZXh0O1xuICAgIH1cblxuICAgIHRoaXMuY291bnQtLTtcbiAgICByZXR1cm4gY3VycmVudC5lbGVtZW50O1xuICB9XG5cbiAgZ2V0RWxlbWVudEF0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuc2l6ZSgpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXggJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKSB7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIGluc2VydEF0KGVsZW1lbnQsIGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMuc2l6ZSgpKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IG5vZGUgPSBuZXcgTm9kZShlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgICBub2RlLm5leHQgPSBjdXJyZW50O1xuICAgICAgdGhpcy5oZWFkID0gbm9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJldmlvdXMgPSB0aGlzLmdldEVsZW1lbnRBdChpbmRleCAtIDEpO1xuICAgICAgY29uc3QgY3VycmVudCA9IHByZXZpb3VzLm5leHQ7XG4gICAgICBub2RlLm5leHQgPSBjdXJyZW50O1xuICAgICAgcHJldmlvdXMubmV4dCA9IG5vZGU7XG4gICAgfVxuXG4gICAgdGhpcy5jb3VudCsrO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaW5kZXhPZihlbGVtZW50KSB7XG4gICAgbGV0IGN1cnJlbnQgPSB0aGlzLmhlYWQ7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemUoKSAmJiBjdXJyZW50ICE9PSBudWxsOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmVxdWFsc0ZuKGVsZW1lbnQsIGN1cnJlbnQuZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0O1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIHJldHVybiB0aGlzLnJlbW92ZUF0KGluZGV4KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuaGVhZCA9IG51bGw7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gIH1cblxuICBzaXplKCkge1xuICAgIHJldHVybiB0aGlzLmNvdW50O1xuICB9XG5cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG4gIH1cblxuICBnZXRIZWFkKCkge1xuICAgIHJldHVybiB0aGlzLmhlYWQ7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5pc0VtcHR5KCkpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgY29uc3QgbGlua2VkTGlzdEFyciA9IFtdO1xuICAgIGxldCBjdXJyZW50ID0gdGhpcy5oZWFkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplKCkgJiYgY3VycmVudCAhPT0gbnVsbDsgaSsrKSB7XG4gICAgICBsaW5rZWRMaXN0QXJyLnB1c2goY3VycmVudC5lbGVtZW50KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpbmtlZExpc3RBcnIuam9pbignLCAnKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rZWRMaXN0O1xuIiwiZXhwb3J0IGNvbnN0IHJlbmRlckxpbmtlZExpc3QgPSAobGlua2VkTGlzdCkgPT4ge1xuICBjb25zdCBib3hFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJveCcpO1xuICBib3hFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib3hfaXRlbScpLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0ucmVtb3ZlKCkpO1xuICBsZXQgY3VycmVudCA9IGxpbmtlZExpc3QuaGVhZDtcbiAgaWYgKGxpbmtlZExpc3QuaGVhZCA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtlZExpc3Quc2l6ZSgpICYmIGN1cnJlbnQgIT09IG51bGw7IGkrKykge1xuICAgIGNvbnN0IGl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgaXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYm94X2l0ZW0nKTtcbiAgICBpdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpY29uJywgJ2ljb24tYXJyb3ctcmlnaHQnKTtcbiAgICBpdGVtRWxlbWVudC50ZXh0Q29udGVudCA9IGN1cnJlbnQuZWxlbWVudDtcbiAgICBib3hFbGVtZW50LmFwcGVuZChpdGVtRWxlbWVudCk7XG4gICAgY3VycmVudCA9IGN1cnJlbnQubmV4dDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGluaXRpYXRlSGFuZGxlcnMgPSAobGlua2VkTGlzdCkgPT4ge1xuICBjb25zdCBwdXNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1c2hCdG4nKTtcbiAgY29uc3QgaW5zZXJ0QXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zZXJ0QXRCdG4nKTtcbiAgY29uc3QgcmVtb3ZlRWxlbWVudEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVFbGVtZW50QnRuJyk7XG4gIGNvbnN0IGdldEVsZW1lbnRBdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNnZXRFbGVtZW50QXRCdG4nKTtcbiAgY29uc3QgaW5kZXhPZkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmRleE9mQnRuJyk7XG4gIGNvbnN0IHJlbW92ZUVsZW1lbnRBdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZW1vdmVFbGVtZW50QXRCdG4nKTtcbiAgY29uc3QgdG9TdHJpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9TdHJpbmdCdG4nKTtcbiAgY29uc3Qgc2l6ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaXplQnRuJyk7XG4gIGNvbnN0IGlzRW1wdHlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaXNFbXB0eUJ0bicpO1xuICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhckJ0bicpO1xuICBwdXNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBwcm9tcHQoJ0VudGVyIGVsZW1lbnQgdG8gYWRkIHRvIGxpbmtlZGxpc3QnKTtcbiAgICBsaW5rZWRMaXN0LnB1c2goZWxlbWVudCk7XG4gICAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbiAgfSk7XG4gIHJlbW92ZUVsZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHByb21wdCgnRW50ZXIgZWxlbWVudCB0byByZW1vdmUgZnJvbSBsaW5rZWRsaXN0Jyk7XG4gICAgY29uc3QgcmVtb3ZlZEVsID0gbGlua2VkTGlzdC5yZW1vdmUoZWxlbWVudCk7XG4gICAgaWYgKHJlbW92ZWRFbCkge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgcmVtb3ZlZCcpO1xuICAgICAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9KTtcbiAgaW5zZXJ0QXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgZWxlbWVudCA9IHByb21wdCgnRW50ZXIgZWxlbWVudCB0byBhZGQgdG8gbGlua2VkbGlzdCcpO1xuICAgIGNvbnN0IGluZGV4ID0gcHJvbXB0KCdFbnRlciB0aGUgaW5kZXggdGhlIGVsZW1lbnQgaXMgdG8gYmUgYWRkZWQgYXQnKTtcbiAgICBsaW5rZWRMaXN0Lmluc2VydEF0KGVsZW1lbnQsIE51bWJlcihpbmRleCkpO1xuICAgIHJlbmRlckxpbmtlZExpc3QobGlua2VkTGlzdCk7XG4gIH0pO1xuICBnZXRFbGVtZW50QXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBwcm9tcHQoJ0VudGVyIHRoZSBpbmRleCB0aGUgZWxlbWVudCBpcyB0byBiZSByZXRyaWV2ZWQgZnJvbScpO1xuICAgIGNvbnN0IG5vZGUgPSBsaW5rZWRMaXN0LmdldEVsZW1lbnRBdChOdW1iZXIoaW5kZXgpKTtcbiAgICBpZiAobm9kZSkge1xuICAgICAgYWxlcnQoYEVsZW1lbnQgcmV0cmlldmVkID0gJHtub2RlLmVsZW1lbnR9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSk7XG4gIHJlbW92ZUVsZW1lbnRBdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBpbmRleCA9IHByb21wdCgnRW50ZXIgdGhlIGluZGV4IHRoZSBlbGVtZW50IGlzIHRvIGJlIHJlbW92ZWQgZnJvbScpO1xuICAgIGNvbnN0IHJlbW92ZWRFbCA9IGxpbmtlZExpc3QucmVtb3ZlQXQoTnVtYmVyKGluZGV4KSk7XG4gICAgaWYgKHJlbW92ZWRFbCkge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgcmVtb3ZlZCcpO1xuICAgICAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYWxlcnQoJ0VsZW1lbnQgbm90IGZvdW5kJyk7XG4gICAgfVxuICB9KTtcbiAgaW5kZXhPZkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gcHJvbXB0KCdFbnRlciBlbGVtZW50IHlvdSB3YW50IHRvIGZpbmQgaW5kZXggb2YnKTtcbiAgICBjb25zdCBpbmRleCA9IGxpbmtlZExpc3QuaW5kZXhPZihlbGVtZW50KTtcbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgYWxlcnQoYEluZGV4IG9mIGVsZW1lbnQgJyR7ZWxlbWVudH0nIGlzICR7aW5kZXh9YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFsZXJ0KCdFbGVtZW50IG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgfSk7XG4gIHRvU3RyaW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFsZXJ0KGxpbmtlZExpc3QudG9TdHJpbmcoKSk7XG4gIH0pO1xuICBzaXplQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFsZXJ0KGBUaGUgc2l6ZSBvZiB0aGUgbGlua2VkIGxpc3QgaXMgJHtsaW5rZWRMaXN0LnNpemUoKX1gKTtcbiAgfSk7XG4gIGlzRW1wdHlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWxlcnQoYExpbmtlZCBsaXN0IGlzJHtsaW5rZWRMaXN0LmlzRW1wdHkoKSA/ICcnIDogJyBub3QnfSBlbXB0eWApO1xuICB9KTtcbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGlua2VkTGlzdC5jbGVhcigpO1xuICAgIGFsZXJ0KCdMaW5rZWQgbGlzdCBjbGVhcmVkJyk7XG4gICAgcmVuZGVyTGlua2VkTGlzdChsaW5rZWRMaXN0KTtcbiAgfSk7XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuaWNvbjo6YmVmb3JlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xcbiAgdGV4dC1yZW5kZXJpbmc6IGF1dG87XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuXFxuLmljb24uaWNvbi1hcnJvdy1yaWdodDo6YmVmb3JlIHtcXG4gIGZvbnQtZmFtaWx5OiAnRm9udCBBd2Vzb21lIDUgRnJlZSc7XFxuICBmb250LXdlaWdodDogOTAwO1xcbiAgY29udGVudDogJ1xcXFxmMDYxJztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xOHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3gge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94X19saW5lIHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgZmxleDogMTtcXG4gIGhlaWdodDogMnB4O1xcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ge1xcbiAgcGFkZGluZzogOHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjJzO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YmVmb3JlLFxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjphZnRlciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6ICdIZWFkJztcXG4gIGxlZnQ6IC01MHB4O1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ251bGwnO1xcbiAgcmlnaHQ6IC01MHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5idG4tZ3JvdXAge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbiNwYWxpbmRyb21lQnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qc19saW5rZWRfbGlzdC9saW5rZWRfbGlzdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCOztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmljb246OmJlZm9yZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXG4gIHRleHQtcmVuZGVyaW5nOiBhdXRvO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcblxcbi5pY29uLmljb24tYXJyb3ctcmlnaHQ6OmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogJ0ZvbnQgQXdlc29tZSA1IEZyZWUnO1xcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gIGNvbnRlbnQ6ICdcXFxcZjA2MSc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtMThweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9fbGluZSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gIGZsZXg6IDE7XFxuICBoZWlnaHQ6IDJweDtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtIHtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UgMC4ycztcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmJlZm9yZSxcXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjb2xvcjogIzMzMztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiAnSGVhZCc7XFxuICBsZWZ0OiAtNTBweDtcXG59XFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICdudWxsJztcXG4gIHJpZ2h0OiAtNTBweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5hcHAtY29udGFpbmVyIC5idXR0b25zLWNvbnRhaW5lciAuYnRuLWdyb3VwIHtcXG4gIG1hcmdpbjogMTBweCBhdXRvO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG5cXG4jcGFsaW5kcm9tZUJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbWFpbixcXHJcXG5ib2R5ID4gLm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggODBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtLnBlZWtpbmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5ID4gbWFpbixcXHJcXG5ib2R5ID4gLm1haW4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBoMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCB7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICBwYWRkaW5nOiA0cHggODBweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5ib3ggLmJveF9pdGVtLnBlZWtpbmcge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIHtcXHJcXG4gIG1heC13aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDMwcHggYXV0byAwIGF1dG87XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9saW5rZWRfbGlzdC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dsb2JhbHMuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICcuL2xpbmtlZF9saXN0LmNzcyc7XG5pbXBvcnQgTGlua2VkTGlzdCBmcm9tICcuL2xpbmtlZF9saXN0JztcbmltcG9ydCB7IHJlbmRlckxpbmtlZExpc3QsIGluaXRpYXRlSGFuZGxlcnMgfSBmcm9tICcuL3VpLWhhbmRsZXJzJztcblxuY29uc3QgbGlua2VkTGlzdCA9IG5ldyBMaW5rZWRMaXN0KCk7XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGxpbmtlZExpc3QucHVzaCgnMjInKTtcbiAgbGlua2VkTGlzdC5wdXNoKCczMycpO1xuICBsaW5rZWRMaXN0LnB1c2goJ2FiYycpO1xuICBsaW5rZWRMaXN0LnB1c2goJ3h5eicpO1xuICBpbml0aWF0ZUhhbmRsZXJzKGxpbmtlZExpc3QpO1xuICByZW5kZXJMaW5rZWRMaXN0KGxpbmtlZExpc3QpO1xufTtcblxubWFpbigpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==