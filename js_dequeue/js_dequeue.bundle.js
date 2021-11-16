/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js_dequeue/dequeue.js":
/*!***********************************!*\
  !*** ./src/js_dequeue/dequeue.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DeQueue = /*#__PURE__*/function () {
  function DeQueue() {
    _classCallCheck(this, DeQueue);

    _defineProperty(this, "items", {});

    _defineProperty(this, "itemToRemoveFrontKey", 0);

    _defineProperty(this, "itemToAddRearKey", 0);
  }

  _createClass(DeQueue, [{
    key: "addToRear",
    value: function addToRear(item) {
      this.items[this.itemToAddRearKey] = item;
      this.itemToAddRearKey++;
    }
  }, {
    key: "removeFromRear",
    value: function removeFromRear() {
      var itemToRemove = this.items[this.itemToAddRearKey - 1];
      delete this.items[this.itemToAddRearKey - 1];
      this.itemToAddRearKey--;
      return itemToRemove;
    }
  }, {
    key: "peekRear",
    value: function peekRear() {
      return this.items[this.itemToAddRearKey - 1];
    }
  }, {
    key: "addToFront",
    value: function addToFront(item) {
      if (this.isEmpty()) {
        this.addToRear(item);
      } else if (this.itemToRemoveFrontKey > 0) {
        this.itemToRemoveFrontKey--;
        this.items[this.itemToRemoveFrontKey] = item;
      } else {
        for (var i = this.itemToAddRearKey; i >= 1; i--) {
          this.items[i] = this.items[i - 1];
        }

        this.items[0] = item;
        this.itemToAddRearKey++;
      }
    }
  }, {
    key: "removeFromFront",
    value: function removeFromFront() {
      var itemToRemove = this.items[this.itemToRemoveFrontKey];
      delete this.items[this.itemToRemoveFrontKey];
      this.itemToRemoveFrontKey++;
      return itemToRemove;
    }
  }, {
    key: "peekFront",
    value: function peekFront() {}
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.size() === 0;
    }
  }, {
    key: "size",
    value: function size() {
      return this.itemToAddRearKey - this.itemToRemoveFrontKey;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.items = {};
      this.itemToRemoveFrontKey = 0;
      this.itemToAddRearKey = 0;
    }
  }]);

  return DeQueue;
}();

/* harmony default export */ __webpack_exports__["default"] = (DeQueue);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js_dequeue/dequeue.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js_dequeue/dequeue.css ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Front';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'Rear';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/js_dequeue/dequeue.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,iBAAiB;EACjB,WAAW;EACX,kBAAkB;AACpB;AACA;EACE,gBAAgB;EAChB,WAAW;AACb;AACA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB","sourcesContent":[".app-container .box_container {\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  width: 400px;\n  max-width: 400px;\n  position: relative;\n}\n\n.app-container .box {\n  flex-direction: row;\n  display: flex;\n  align-items: center;\n}\n\n.app-container .box .box_item {\n  padding: 8px;\n}\n\n.app-container .box_container::before,\n.app-container .box_container::after {\n  font-weight: bold;\n  color: #333;\n  position: absolute;\n}\n.app-container .box_container::before {\n  content: 'Front';\n  left: -50px;\n}\n.app-container .box_container::after {\n  content: 'Rear';\n  right: -50px;\n}\n\n.app-container .buttons-container {\n  flex-direction: column;\n}\n.app-container .buttons-container .btn-group {\n  margin: 10px auto;\n}\n\nsection {\n  margin: 20px auto;\n}\n\n#palindromeBtn {\n  margin-top: 10px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/js_dequeue/dequeue.css":
/*!************************************!*\
  !*** ./src/js_dequeue/dequeue.css ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dequeue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./dequeue.css */ "./node_modules/css-loader/dist/cjs.js!./src/js_dequeue/dequeue.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dequeue_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_dequeue_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/*!********************************!*\
  !*** ./src/js_dequeue/main.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _dequeue_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dequeue.css */ "./src/js_dequeue/dequeue.css");
/* harmony import */ var _dequeue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dequeue */ "./src/js_dequeue/dequeue.js");



var myDequeue = new _dequeue__WEBPACK_IMPORTED_MODULE_2__.default();

var renderDeQueue = function renderDeQueue() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Object.values(myDequeue.items);
  var boxElement = document.querySelector('.box');
  boxElement.querySelectorAll('.box_item').forEach(function (item) {
    return item.remove();
  });
  items.forEach(function (item) {
    var itemElement = document.createElement('DIV');
    itemElement.classList.add('box_item');
    itemElement.textContent = item;
    boxElement.append(itemElement);
  });
};

var PEEK_SIDES = {
  FRONT: 'front',
  REAR: 'rear'
};

var peekDequeue = function peekDequeue(side) {
  var target = side === PEEK_SIDES.FRONT ? '.box_item:first-child' : '.box_item:last-child';
  var peekedElement = document.querySelector(target);

  if (!peekedElement) {
    return;
  }

  peekedElement.scrollIntoView();
  peekedElement.classList.add('peeking');
  setTimeout(function () {
    peekedElement.classList.remove('peeking');
  }, 500);
};

var checkIfPalindrome = function checkIfPalindrome(str) {
  var isPalindrome = true; // radar

  var palDeq = new _dequeue__WEBPACK_IMPORTED_MODULE_2__.default();
  str.split('').forEach(function (char) {
    return palDeq.addToRear(char);
  });

  while (palDeq.size() > 1 && isPalindrome) {
    var front = palDeq.removeFromFront();
    var rear = palDeq.removeFromRear();

    if (front !== rear) {
      isPalindrome = false;
    }
  }

  return isPalindrome;
};

var initiateHandlers = function initiateHandlers() {
  var addToRearBtn = document.querySelector('#addToRearBtn');
  var peekRearBtn = document.querySelector('#peekRearBtn');
  var removeFromRearBtn = document.querySelector('#removeFromRearBtn');
  var addToFrontBtn = document.querySelector('#addToFrontBtn');
  var peekFrontBtn = document.querySelector('#peekFrontBtn');
  var removeFromFrontBtn = document.querySelector('#removeFromFrontBtn');
  var clearBtn = document.querySelector('#clearBtn');
  var palindromeBtn = document.querySelector('#palindromeBtn');
  palindromeBtn.addEventListener('click', function () {
    var palindromeInput = document.querySelector('#palindromeInput');
    var result = checkIfPalindrome(palindromeInput.value);
    alert("The string ".concat(palindromeInput.value, " is ").concat(result ? '' : 'not ', "a palindrome"));
  });
  clearBtn.addEventListener('click', function () {
    myDequeue.clear();
    renderDeQueue();
  });
  addToRearBtn.addEventListener('click', function () {
    var randomNumber = Math.round(Math.random() * 50 + 1);
    myDequeue.addToRear(randomNumber);
    renderDeQueue();
  });
  removeFromRearBtn.addEventListener('click', function () {
    myDequeue.removeFromRear();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.REAR);
  });
  peekRearBtn.addEventListener('click', function () {
    peekDequeue(PEEK_SIDES.REAR);
  });
  addToFrontBtn.addEventListener('click', function () {
    var randomNumber = Math.round(Math.random() * 50 + 1);
    myDequeue.addToFront(randomNumber);
    renderDeQueue();
  });
  removeFromFrontBtn.addEventListener('click', function () {
    myDequeue.removeFromFront();
    renderDeQueue();
    peekDequeue(PEEK_SIDES.FRONT);
  });
  peekFrontBtn.addEventListener('click', function () {
    peekDequeue(PEEK_SIDES.FRONT);
  });
};

var main = function main() {
  initiateHandlers();
};

main();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qc19kZXF1ZXVlL2RlcXVldWUuanMiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanNfZGVxdWV1ZS9kZXF1ZXVlLmNzcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanNfZGVxdWV1ZS9kZXF1ZXVlLmNzcz8xZDg5Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanNfZGVxdWV1ZS9tYWluLmpzIl0sIm5hbWVzIjpbIkRlUXVldWUiLCJpdGVtIiwiaXRlbXMiLCJpdGVtVG9BZGRSZWFyS2V5IiwiaXRlbVRvUmVtb3ZlIiwiaXNFbXB0eSIsImFkZFRvUmVhciIsIml0ZW1Ub1JlbW92ZUZyb250S2V5IiwiaSIsInNpemUiLCJteURlcXVldWUiLCJEZXF1ZXVlIiwicmVuZGVyRGVRdWV1ZSIsIk9iamVjdCIsInZhbHVlcyIsImJveEVsZW1lbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJlbW92ZSIsIml0ZW1FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwiUEVFS19TSURFUyIsIkZST05UIiwiUkVBUiIsInBlZWtEZXF1ZXVlIiwic2lkZSIsInRhcmdldCIsInBlZWtlZEVsZW1lbnQiLCJzY3JvbGxJbnRvVmlldyIsInNldFRpbWVvdXQiLCJjaGVja0lmUGFsaW5kcm9tZSIsInN0ciIsImlzUGFsaW5kcm9tZSIsInBhbERlcSIsInNwbGl0IiwiY2hhciIsImZyb250IiwicmVtb3ZlRnJvbUZyb250IiwicmVhciIsInJlbW92ZUZyb21SZWFyIiwiaW5pdGlhdGVIYW5kbGVycyIsImFkZFRvUmVhckJ0biIsInBlZWtSZWFyQnRuIiwicmVtb3ZlRnJvbVJlYXJCdG4iLCJhZGRUb0Zyb250QnRuIiwicGVla0Zyb250QnRuIiwicmVtb3ZlRnJvbUZyb250QnRuIiwiY2xlYXJCdG4iLCJwYWxpbmRyb21lQnRuIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhbGluZHJvbWVJbnB1dCIsInJlc3VsdCIsInZhbHVlIiwiYWxlcnQiLCJjbGVhciIsInJhbmRvbU51bWJlciIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsImFkZFRvRnJvbnQiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE87Ozs7bUNBQ0ksRTs7a0RBQ2UsQzs7OENBQ0osQzs7Ozs7V0FDbkIsbUJBQVVD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LFVBQVUsQ0FBQ0MsS0FBWixDQUFYO0FBQ0QsR0FKRDtBQUtBdUIsY0FBWSxDQUFDSSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDekIsZUFBVyxDQUFDSCxVQUFVLENBQUNDLEtBQVosQ0FBWDtBQUNELEdBRkQ7QUFHRCxDQWhERDs7QUFrREEsSUFBTXNDLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFDakJwQixrQkFBZ0I7QUFDakIsQ0FGRDs7QUFJQW9CLElBQUksRyIsImZpbGUiOiJqc19kZXF1ZXVlL2pzX2RlcXVldWUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRGVRdWV1ZSB7XG4gIGl0ZW1zID0ge307XG4gIGl0ZW1Ub1JlbW92ZUZyb250S2V5ID0gMDtcbiAgaXRlbVRvQWRkUmVhcktleSA9IDA7XG4gIGFkZFRvUmVhcihpdGVtKSB7XG4gICAgdGhpcy5pdGVtc1t0aGlzLml0ZW1Ub0FkZFJlYXJLZXldID0gaXRlbTtcbiAgICB0aGlzLml0ZW1Ub0FkZFJlYXJLZXkrKztcbiAgfVxuICByZW1vdmVGcm9tUmVhcigpIHtcbiAgICBjb25zdCBpdGVtVG9SZW1vdmUgPSB0aGlzLml0ZW1zW3RoaXMuaXRlbVRvQWRkUmVhcktleSAtIDFdO1xuICAgIGRlbGV0ZSB0aGlzLml0ZW1zW3RoaXMuaXRlbVRvQWRkUmVhcktleSAtIDFdO1xuICAgIHRoaXMuaXRlbVRvQWRkUmVhcktleS0tO1xuICAgIHJldHVybiBpdGVtVG9SZW1vdmU7XG4gIH1cbiAgcGVla1JlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5pdGVtVG9BZGRSZWFyS2V5IC0gMV07XG4gIH1cbiAgYWRkVG9Gcm9udChpdGVtKSB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSgpKSB7XG4gICAgICB0aGlzLmFkZFRvUmVhcihpdGVtKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXRlbVRvUmVtb3ZlRnJvbnRLZXkgPiAwKSB7XG4gICAgICB0aGlzLml0ZW1Ub1JlbW92ZUZyb250S2V5LS07XG4gICAgICB0aGlzLml0ZW1zW3RoaXMuaXRlbVRvUmVtb3ZlRnJvbnRLZXldID0gaXRlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbVRvQWRkUmVhcktleTsgaSA+PSAxOyBpLS0pIHtcbiAgICAgICAgdGhpcy5pdGVtc1tpXSA9IHRoaXMuaXRlbXNbaSAtIDFdO1xuICAgICAgfVxuICAgICAgdGhpcy5pdGVtc1swXSA9IGl0ZW07XG4gICAgICB0aGlzLml0ZW1Ub0FkZFJlYXJLZXkrKztcbiAgICB9XG4gIH1cbiAgcmVtb3ZlRnJvbUZyb250KCkge1xuICAgIGNvbnN0IGl0ZW1Ub1JlbW92ZSA9IHRoaXMuaXRlbXNbdGhpcy5pdGVtVG9SZW1vdmVGcm9udEtleV07XG4gICAgZGVsZXRlIHRoaXMuaXRlbXNbdGhpcy5pdGVtVG9SZW1vdmVGcm9udEtleV07XG4gICAgdGhpcy5pdGVtVG9SZW1vdmVGcm9udEtleSsrO1xuICAgIHJldHVybiBpdGVtVG9SZW1vdmU7XG4gIH1cbiAgcGVla0Zyb250KCkge31cbiAgaXNFbXB0eSgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplKCkgPT09IDA7XG4gIH1cbiAgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtVG9BZGRSZWFyS2V5IC0gdGhpcy5pdGVtVG9SZW1vdmVGcm9udEtleTtcbiAgfVxuICBjbGVhcigpIHtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgdGhpcy5pdGVtVG9SZW1vdmVGcm9udEtleSA9IDA7XG4gICAgdGhpcy5pdGVtVG9BZGRSZWFyS2V5ID0gMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZVF1ZXVlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3gge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjpiZWZvcmUsXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmFmdGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0Zyb250JztcXG4gIGxlZnQ6IC01MHB4O1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1JlYXInO1xcbiAgcmlnaHQ6IC01MHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5idG4tZ3JvdXAge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbiNwYWxpbmRyb21lQnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9qc19kZXF1ZXVlL2RlcXVldWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lciB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3gge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjpiZWZvcmUsXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXI6OmFmdGVyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICMzMzM7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5hcHAtY29udGFpbmVyIC5ib3hfY29udGFpbmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogJ0Zyb250JztcXG4gIGxlZnQ6IC01MHB4O1xcbn1cXG4uYXBwLWNvbnRhaW5lciAuYm94X2NvbnRhaW5lcjo6YWZ0ZXIge1xcbiAgY29udGVudDogJ1JlYXInO1xcbiAgcmlnaHQ6IC01MHB4O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmFwcC1jb250YWluZXIgLmJ1dHRvbnMtY29udGFpbmVyIC5idG4tZ3JvdXAge1xcbiAgbWFyZ2luOiAxMHB4IGF1dG87XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcblxcbiNwYWxpbmRyb21lQnRuIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RlcXVldWUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWxzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCAnLi9kZXF1ZXVlLmNzcyc7XG5pbXBvcnQgRGVxdWV1ZSBmcm9tICcuL2RlcXVldWUnO1xuXG5jb25zdCBteURlcXVldWUgPSBuZXcgRGVxdWV1ZSgpO1xuXG5jb25zdCByZW5kZXJEZVF1ZXVlID0gKGl0ZW1zID0gT2JqZWN0LnZhbHVlcyhteURlcXVldWUuaXRlbXMpKSA9PiB7XG4gIGNvbnN0IGJveEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm94Jyk7XG4gIGJveEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJveF9pdGVtJykuZm9yRWFjaCgoaXRlbSkgPT4gaXRlbS5yZW1vdmUoKSk7XG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGl0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2JveF9pdGVtJyk7XG4gICAgaXRlbUVsZW1lbnQudGV4dENvbnRlbnQgPSBpdGVtO1xuICAgIGJveEVsZW1lbnQuYXBwZW5kKGl0ZW1FbGVtZW50KTtcbiAgfSk7XG59O1xuXG5jb25zdCBQRUVLX1NJREVTID0ge1xuICBGUk9OVDogJ2Zyb250JyxcbiAgUkVBUjogJ3JlYXInLFxufTtcblxuY29uc3QgcGVla0RlcXVldWUgPSAoc2lkZSkgPT4ge1xuICBjb25zdCB0YXJnZXQgPVxuICAgIHNpZGUgPT09IFBFRUtfU0lERVMuRlJPTlRcbiAgICAgID8gJy5ib3hfaXRlbTpmaXJzdC1jaGlsZCdcbiAgICAgIDogJy5ib3hfaXRlbTpsYXN0LWNoaWxkJztcbiAgY29uc3QgcGVla2VkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgaWYgKCFwZWVrZWRFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBlZWtlZEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgcGVla2VkRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdwZWVraW5nJyk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHBlZWtlZEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGVla2luZycpO1xuICB9LCA1MDApO1xufTtcblxuY29uc3QgY2hlY2tJZlBhbGluZHJvbWUgPSAoc3RyKSA9PiB7XG4gIGxldCBpc1BhbGluZHJvbWUgPSB0cnVlO1xuICAvLyByYWRhclxuICBjb25zdCBwYWxEZXEgPSBuZXcgRGVxdWV1ZSgpO1xuICBzdHIuc3BsaXQoJycpLmZvckVhY2goKGNoYXIpID0+IHBhbERlcS5hZGRUb1JlYXIoY2hhcikpO1xuICB3aGlsZSAocGFsRGVxLnNpemUoKSA+IDEgJiYgaXNQYWxpbmRyb21lKSB7XG4gICAgY29uc3QgZnJvbnQgPSBwYWxEZXEucmVtb3ZlRnJvbUZyb250KCk7XG4gICAgY29uc3QgcmVhciA9IHBhbERlcS5yZW1vdmVGcm9tUmVhcigpO1xuICAgIGlmIChmcm9udCAhPT0gcmVhcikge1xuICAgICAgaXNQYWxpbmRyb21lID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzUGFsaW5kcm9tZTtcbn07XG5cbmNvbnN0IGluaXRpYXRlSGFuZGxlcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZFRvUmVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb1JlYXJCdG4nKTtcbiAgY29uc3QgcGVla1JlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVla1JlYXJCdG4nKTtcbiAgY29uc3QgcmVtb3ZlRnJvbVJlYXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVtb3ZlRnJvbVJlYXJCdG4nKTtcbiAgY29uc3QgYWRkVG9Gcm9udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb0Zyb250QnRuJyk7XG4gIGNvbnN0IHBlZWtGcm9udEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwZWVrRnJvbnRCdG4nKTtcbiAgY29uc3QgcmVtb3ZlRnJvbUZyb250QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlbW92ZUZyb21Gcm9udEJ0bicpO1xuICBjb25zdCBjbGVhckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbGVhckJ0bicpO1xuICBjb25zdCBwYWxpbmRyb21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BhbGluZHJvbWVCdG4nKTtcbiAgcGFsaW5kcm9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBwYWxpbmRyb21lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFsaW5kcm9tZUlucHV0Jyk7XG4gICAgY29uc3QgcmVzdWx0ID0gY2hlY2tJZlBhbGluZHJvbWUocGFsaW5kcm9tZUlucHV0LnZhbHVlKTtcbiAgICBhbGVydChcbiAgICAgIGBUaGUgc3RyaW5nICR7cGFsaW5kcm9tZUlucHV0LnZhbHVlfSBpcyAke1xuICAgICAgICByZXN1bHQgPyAnJyA6ICdub3QgJ1xuICAgICAgfWEgcGFsaW5kcm9tZWBcbiAgICApO1xuICB9KTtcbiAgY2xlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbXlEZXF1ZXVlLmNsZWFyKCk7XG4gICAgcmVuZGVyRGVRdWV1ZSgpO1xuICB9KTtcbiAgYWRkVG9SZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDUwICsgMSk7XG4gICAgbXlEZXF1ZXVlLmFkZFRvUmVhcihyYW5kb21OdW1iZXIpO1xuICAgIHJlbmRlckRlUXVldWUoKTtcbiAgfSk7XG4gIHJlbW92ZUZyb21SZWFyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG15RGVxdWV1ZS5yZW1vdmVGcm9tUmVhcigpO1xuICAgIHJlbmRlckRlUXVldWUoKTtcbiAgICBwZWVrRGVxdWV1ZShQRUVLX1NJREVTLlJFQVIpO1xuICB9KTtcbiAgcGVla1JlYXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcGVla0RlcXVldWUoUEVFS19TSURFUy5SRUFSKTtcbiAgfSk7XG4gIGFkZFRvRnJvbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogNTAgKyAxKTtcbiAgICBteURlcXVldWUuYWRkVG9Gcm9udChyYW5kb21OdW1iZXIpO1xuICAgIHJlbmRlckRlUXVldWUoKTtcbiAgfSk7XG4gIHJlbW92ZUZyb21Gcm9udEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBteURlcXVldWUucmVtb3ZlRnJvbUZyb250KCk7XG4gICAgcmVuZGVyRGVRdWV1ZSgpO1xuICAgIHBlZWtEZXF1ZXVlKFBFRUtfU0lERVMuRlJPTlQpO1xuICB9KTtcbiAgcGVla0Zyb250QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHBlZWtEZXF1ZXVlKFBFRUtfU0lERVMuRlJPTlQpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1haW4gPSAoKSA9PiB7XG4gIGluaXRpYXRlSGFuZGxlcnMoKTtcbn07XG5cbm1haW4oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=