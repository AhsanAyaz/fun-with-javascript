/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-recursion/calculateFactorial.js":
/*!************************************************!*\
  !*** ./src/js-recursion/calculateFactorial.js ***!
  \************************************************/
/***/ (function() {

var calculateFactorial = function calculateFactorial(n) {
  if (n === 1 || n === 0) {
    return 1;
  }

  return n * calculateFactorial(n - 1);
};

var result = calculateFactorial(5);
console.log(result);
/*
  /*
  n! = n * (n - 1)!


  5!
  5 * 4!
  5 * 4 * 3!
  5 * 4 * 3 * 2!
  5 * 4 * 3 * 2 * 1!

  5 * 4 * 3 * 2 * 1
  5 * 4 * 3 * 2
  5 * 4 * 6
  5 * 24
  120
*/

/***/ }),

/***/ "./src/js-recursion/calculateFactorialWithUI.js":
/*!******************************************************!*\
  !*** ./src/js-recursion/calculateFactorialWithUI.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var calculateFactorialWithUI = function calculateFactorialWithUI(n, args) {
  var onNested = args.onNested,
      onReturn = args.onReturn;
  var result;

  if (n === 1 || n === 0) {
    result = 1;
  } else {
    onNested(n - 1);
    result = n * calculateFactorialWithUI(n - 1, args);
  }

  onReturn({
    n: n,
    result: result
  });
  return result;
};

/* harmony default export */ __webpack_exports__["default"] = (calculateFactorialWithUI);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/js-recursion/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/js-recursion/style.css ***!
  \**************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".main-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n#calcFactBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.fact-list {\r\n  min-height: 300px;\r\n}\r\n\r\n.fact-list-item {\r\n  animation: nested-item-appear 0.3s ease-in;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  padding: 20px 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes nested-item-appear {\r\n  0% {\r\n    transform: translateY(-100%) scale(0, 0);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(0.5, 0.5);\r\n  }\r\n  100% {\r\n    position: relative;\r\n    transform: translateY(0) scale(1, 1);\r\n  }\r\n}\r\n\r\n@keyframes nested-item-disappear {\r\n  0% {\r\n    transform: translateY(0) scale(1, 1);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(0.5, 0.5);\r\n  }\r\n  100% {\r\n    transform: translateY(-100%) scale(0, 0);\r\n    visibility: hidden;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/js-recursion/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;EAClB,sBAAsB;EACtB,kBAAkB;EAClB,qDAAqD;EACrD,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE;IACE,wCAAwC;EAC1C;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,kBAAkB;IAClB,oCAAoC;EACtC;AACF;;AAEA;EACE;IACE,oCAAoC;EACtC;EACA;IACE,2CAA2C;EAC7C;EACA;IACE,wCAAwC;IACxC,kBAAkB;EACpB;AACF","sourcesContent":[".main-section {\r\n  margin-top: 20px;\r\n}\r\n\r\n#calcFactBtn {\r\n  margin-top: 10px;\r\n}\r\n\r\n.fact-list {\r\n  min-height: 300px;\r\n}\r\n\r\n.fact-list-item {\r\n  animation: nested-item-appear 0.3s ease-in;\r\n  text-align: center;\r\n  background-color: #fff;\r\n  border-radius: 4px;\r\n  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\r\n  padding: 20px 30px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n@keyframes nested-item-appear {\r\n  0% {\r\n    transform: translateY(-100%) scale(0, 0);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(0.5, 0.5);\r\n  }\r\n  100% {\r\n    position: relative;\r\n    transform: translateY(0) scale(1, 1);\r\n  }\r\n}\r\n\r\n@keyframes nested-item-disappear {\r\n  0% {\r\n    transform: translateY(0) scale(1, 1);\r\n  }\r\n  50% {\r\n    transform: translateY(-50%) scale(0.5, 0.5);\r\n  }\r\n  100% {\r\n    transform: translateY(-100%) scale(0, 0);\r\n    visibility: hidden;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/globals.css ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";


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

"use strict";


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

/***/ "./src/js-recursion/style.css":
/*!************************************!*\
  !*** ./src/js-recursion/style.css ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/js-recursion/style.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./src/js-recursion/script.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/js-recursion/style.css");
/* harmony import */ var _calculateFactorial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculateFactorial */ "./src/js-recursion/calculateFactorial.js");
/* harmony import */ var _calculateFactorial__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_calculateFactorial__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _calculateFactorialWithUI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculateFactorialWithUI */ "./src/js-recursion/calculateFactorialWithUI.js");





var onCalcBtnClick = function onCalcBtnClick() {
  var factorialInput = document.querySelector('#factorialInput');
  var jobQueue = [];
  var jobTimer = 1000;
  var number = factorialInput.value;
  var result = 0;
  document.getElementById('factorialNumber').textContent = "".concat(number, "!");
  jobQueue.push({
    action: 'nested',
    n: number
  });
  showCalculation();
  (0,_calculateFactorialWithUI__WEBPACK_IMPORTED_MODULE_3__.default)(number, {
    onNested: function onNested(n) {
      jobQueue.push({
        action: 'nested',
        n: n
      });
    },
    onReturn: function onReturn(_ref) {
      var n = _ref.n,
          result = _ref.result;
      jobQueue.push.apply(jobQueue, [{
        action: 'calculated',
        n: n,
        result: result
      }, {
        action: 'return',
        n: n,
        result: result
      }]);
    }
  });
  var timer = setInterval(function () {
    var job = jobQueue.shift();

    if (!job) {
      clearInterval(timer);
      document.getElementById('factorialNumber').textContent += " = ".concat(result);
      enableCaclBtn();
      enableInput();
      return;
    }

    var factList = document.querySelector('.fact-list');

    switch (job.action) {
      case 'nested':
        if (factList.children.length) {
          factList.lastChild.textContent = "calculating ".concat(job.n + 1, " x ").concat(job.n, "! \uD83D\uDC47");
        }

        var div = document.createElement('DIV');
        div.textContent = "calculating ".concat(job.n, "!");
        div.classList.add('fact-list-item');
        var margin = "".concat(factList.children.length * 16, "px");
        div.style.marginLeft = margin;
        div.style.marginRight = margin;
        factList.appendChild(div);
        break;

      case 'calculated':
        if (factList.children.length) {
          var targetDiv = factList.lastChild;
          targetDiv.textContent = "Calculated ".concat(job.n, " factorial. Result = ").concat(job.result, "  \uD83D\uDC46");
          var divId = "job_".concat(job.n);
          targetDiv.id = divId;
          setTimeout(function () {
            var animationTime = 500;
            var delayTime = jobTimer / 2 - animationTime;
            targetDiv.style.animation = "nested-item-disappear ".concat(animationTime, "ms ease-in ").concat(delayTime, "ms");
            targetDiv.addEventListener('webkitAnimationEnd', function () {
              targetDiv.remove();
            });
          }, jobTimer / 2);
        }

        break;

      case 'return':
        if (factList.children.length) {
          factList.lastChild.remove();
          result = job.result;
        }

      default:
        break;
    }
  }, jobTimer);
};

var showCalculation = function showCalculation() {
  var calculationContainer = document.getElementById('calculationContainer');
  calculationContainer.style.visibility = 'visible';
};

var hideCalculation = function hideCalculation() {
  var calculationContainer = document.getElementById('calculationContainer');
  calculationContainer.style.visibility = 'hidden';
};

var disableInput = function disableInput() {
  var factorialInput = document.getElementById('factorialInput');
  factorialInput.setAttribute('disabled', true);
};

var enableInput = function enableInput() {
  var factorialInput = document.getElementById('factorialInput');
  factorialInput.removeAttribute('disabled');
};

var enableCaclBtn = function enableCaclBtn() {
  var calcFactBtn = document.getElementById('calcFactBtn');
  calcFactBtn.removeAttribute('disabled');
};

var disableCaclBtn = function disableCaclBtn() {
  var calcFactBtn = document.getElementById('calcFactBtn');
  calcFactBtn.setAttribute('disabled', true);
};

var main = function main() {
  disableCaclBtn();
  hideCalculation();
  var factorialInput = document.getElementById('factorialInput');
  var calcFactBtn = document.getElementById('calcFactBtn');
  factorialInput.addEventListener('input', function (e) {
    var inputVal = e.target.value;
    inputVal ? enableCaclBtn() : disableCaclBtn();
    hideCalculation();
  });
  calcFactBtn.addEventListener('click', function () {
    disableCaclBtn();
    disableInput();
    onCalcBtnClick();
  });
};

main();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9qcy1yZWN1cnNpb24vY2FsY3VsYXRlRmFjdG9yaWFsLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2pzLXJlY3Vyc2lvbi9jYWxjdWxhdGVGYWN0b3JpYWxXaXRoVUkuanMiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanMtcmVjdXJzaW9uL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanMtcmVjdXJzaW9uL3N0eWxlLmNzcz81MjU3Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL3N0eWxlcy9nbG9iYWxzLmNzcz9kYTMwIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvanMtcmVjdXJzaW9uL3NjcmlwdC5qcyJdLCJuYW1lcyI6WyJjYWxjdWxhdGVGYWN0b3JpYWwiLCJuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhbGN1bGF0ZUZhY3RvcmlhbFdpdGhVSSIsImFyZ3MiLCJvbk5lc3RlZCIsIm9uUmV0dXJuIiwib25DYWxjQnRuQ2xpY2siLCJmYWN0b3JpYWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImpvYlF1ZXVlIiwiam9iVGltZXIiLCJudW1iZXIiLCJ2YWx1ZSIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJwdXNoIiwiYWN0aW9uIiwic2hvd0NhbGN1bGF0aW9uIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImpvYiIsInNoaWZ0IiwiY2xlYXJJbnRlcnZhbCIsImVuYWJsZUNhY2xCdG4iLCJlbmFibGVJbnB1dCIsImZhY3RMaXN0IiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJsYXN0Q2hpbGQiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWFyZ2luIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJhcHBlbmRDaGlsZCIsInRhcmdldERpdiIsImRpdklkIiwiaWQiLCJzZXRUaW1lb3V0IiwiYW5pbWF0aW9uVGltZSIsImRlbGF5VGltZSIsImFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmUiLCJjYWxjdWxhdGlvbkNvbnRhaW5lciIsInZpc2liaWxpdHkiLCJoaWRlQ2FsY3VsYXRpb24iLCJkaXNhYmxlSW5wdXQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjYWxjRmFjdEJ0biIsImRpc2FibGVDYWNsQnRuIiwibWFpbiIsImUiLCJpbnB1dFZhbCIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUFDQyxDQUFELEVBQU87QUFDaEMsTUFBSUEsQ0FBQyxLQUFLLENBQU4sSUFBV0EsQ0FBQyxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCLFdBQU8sQ0FBUDtBQUNEOztBQUNELFNBQU9BLENBQUMsR0FBR0Qsa0JBQWtCLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQTdCO0FBQ0QsQ0FMRDs7QUFPQSxJQUFNQyxNQUFNLEdBQUdGLGtCQUFrQixDQUFDLENBQUQsQ0FBakM7QUFDQUcsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzFCQSxJQUFNRyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUNKLENBQUQsRUFBSUssSUFBSixFQUFhO0FBQzVDLE1BQVFDLFFBQVIsR0FBK0JELElBQS9CLENBQVFDLFFBQVI7QUFBQSxNQUFrQkMsUUFBbEIsR0FBK0JGLElBQS9CLENBQWtCRSxRQUFsQjtBQUNBLE1BQUlOLE1BQUo7O0FBQ0EsTUFBSUQsQ0FBQyxLQUFLLENBQU4sSUFBV0EsQ0FBQyxLQUFLLENBQXJCLEVBQXdCO0FBQ3RCQyxVQUFNLEdBQUcsQ0FBVDtBQUNELEdBRkQsTUFFTztBQUNMSyxZQUFRLENBQUNOLENBQUMsR0FBRyxDQUFMLENBQVI7QUFDQUMsVUFBTSxHQUFHRCxDQUFDLEdBQUdJLHdCQUF3QixDQUFDSixDQUFDLEdBQUcsQ0FBTCxFQUFRSyxJQUFSLENBQXJDO0FBQ0Q7O0FBQ0RFLFVBQVEsQ0FBQztBQUFFUCxLQUFDLEVBQURBLENBQUY7QUFBS0MsVUFBTSxFQUFOQTtBQUFMLEdBQUQsQ0FBUjtBQUNBLFNBQU9BLE1BQVA7QUFDRCxDQVhEOztBQWFBLCtEQUFlRyx3QkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHlEQUF5RCx1QkFBdUIsS0FBSyxzQkFBc0IsdUJBQXVCLEtBQUssb0JBQW9CLHdCQUF3QixLQUFLLHlCQUF5QixpREFBaUQseUJBQXlCLDZCQUE2Qix5QkFBeUIsNERBQTRELHlCQUF5QiwwQkFBMEIsS0FBSyx1Q0FBdUMsVUFBVSxpREFBaUQsT0FBTyxXQUFXLG9EQUFvRCxPQUFPLFlBQVksMkJBQTJCLDZDQUE2QyxPQUFPLEtBQUssMENBQTBDLFVBQVUsNkNBQTZDLE9BQU8sV0FBVyxvREFBb0QsT0FBTyxZQUFZLGlEQUFpRCwyQkFBMkIsT0FBTyxLQUFLLFdBQVcsNkZBQTZGLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sd0NBQXdDLHVCQUF1QixLQUFLLHNCQUFzQix1QkFBdUIsS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUsseUJBQXlCLGlEQUFpRCx5QkFBeUIsNkJBQTZCLHlCQUF5Qiw0REFBNEQseUJBQXlCLDBCQUEwQixLQUFLLHVDQUF1QyxVQUFVLGlEQUFpRCxPQUFPLFdBQVcsb0RBQW9ELE9BQU8sWUFBWSwyQkFBMkIsNkNBQTZDLE9BQU8sS0FBSywwQ0FBMEMsVUFBVSw2Q0FBNkMsT0FBTyxXQUFXLG9EQUFvRCxPQUFPLFlBQVksaURBQWlELDJCQUEyQixPQUFPLEtBQUssdUJBQXVCO0FBQ3Y1RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GO0FBQ0EseURBQXlELGtCQUFrQixtQkFBbUIsZ0JBQWdCLGlCQUFpQixLQUFLLHNDQUFzQyxtQkFBbUIsb0JBQW9CLDZCQUE2Qiw4QkFBOEIsMEJBQTBCLEtBQUssV0FBVyxvQkFBb0IsS0FBSyx3QkFBd0IsdUJBQXVCLG1CQUFtQixnQ0FBZ0Msb0JBQW9CLEtBQUssMkJBQTJCLHlCQUF5QixLQUFLLHVDQUF1Qyw2QkFBNkIsZ0NBQWdDLG9CQUFvQixvQkFBb0IsOEJBQThCLHVCQUF1QixxQkFBcUIsS0FBSyw2QkFBNkIscUJBQXFCLEtBQUssdUNBQXVDLDhCQUE4Qix3QkFBd0IseUJBQXlCLGdDQUFnQyxLQUFLLCtDQUErQyw2QkFBNkIsbUJBQW1CLEtBQUssMkNBQTJDLDZCQUE2QiwrQkFBK0Isb0JBQW9CLDBCQUEwQixLQUFLLFdBQVcsMEZBQTBGLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLHlDQUF5QyxrQkFBa0IsbUJBQW1CLGdCQUFnQixpQkFBaUIsS0FBSyxzQ0FBc0MsbUJBQW1CLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixLQUFLLFdBQVcsb0JBQW9CLEtBQUssd0JBQXdCLHVCQUF1QixtQkFBbUIsZ0NBQWdDLG9CQUFvQixLQUFLLDJCQUEyQix5QkFBeUIsS0FBSyx1Q0FBdUMsNkJBQTZCLGdDQUFnQyxvQkFBb0Isb0JBQW9CLDhCQUE4Qix1QkFBdUIscUJBQXFCLEtBQUssNkJBQTZCLHFCQUFxQixLQUFLLHVDQUF1Qyw4QkFBOEIsd0JBQXdCLHlCQUF5QixnQ0FBZ0MsS0FBSywrQ0FBK0MsNkJBQTZCLG1CQUFtQixLQUFLLDJDQUEyQyw2QkFBNkIsK0JBQStCLG9CQUFvQiwwQkFBMEIsS0FBSyx1QkFBdUI7QUFDNzZGO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7OztBQ1AxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDhGQUE4Rix3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUVuZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQy9CNEY7QUFDNUYsWUFBMEY7O0FBRTFGOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG1GQUFPOzs7O0FBSXhCLCtEQUFlLDBGQUFjLE1BQU0sRTs7Ozs7Ozs7Ozs7Ozs7O0FDWnlEO0FBQzVGLFlBQTRGOztBQUU1Rjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxxRkFBTzs7OztBQUl4QiwrREFBZSw0RkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7O0FDWnRCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7O1VDNVFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsY0FBYyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLEVBQWpCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHLElBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHTCxjQUFjLENBQUNNLEtBQTlCO0FBQ0EsTUFBSWQsTUFBTSxHQUFHLENBQWI7QUFDQVMsVUFBUSxDQUFDTSxjQUFULENBQXdCLGlCQUF4QixFQUEyQ0MsV0FBM0MsYUFBNERILE1BQTVEO0FBQ0FGLFVBQVEsQ0FBQ00sSUFBVCxDQUFjO0FBQ1pDLFVBQU0sRUFBRSxRQURJO0FBRVpuQixLQUFDLEVBQUVjO0FBRlMsR0FBZDtBQUlBTSxpQkFBZTtBQUNmaEIsb0VBQXdCLENBQUNVLE1BQUQsRUFBUztBQUMvQlIsWUFBUSxFQUFFLGtCQUFDTixDQUFELEVBQU87QUFDZlksY0FBUSxDQUFDTSxJQUFULENBQWM7QUFDWkMsY0FBTSxFQUFFLFFBREk7QUFFWm5CLFNBQUMsRUFBREE7QUFGWSxPQUFkO0FBSUQsS0FOOEI7QUFPL0JPLFlBQVEsRUFBRSx3QkFBbUI7QUFBQSxVQUFoQlAsQ0FBZ0IsUUFBaEJBLENBQWdCO0FBQUEsVUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQzNCVyxjQUFRLENBQUNNLElBQVQsT0FBQU4sUUFBUSxFQUNILENBQ0Q7QUFDRU8sY0FBTSxFQUFFLFlBRFY7QUFFRW5CLFNBQUMsRUFBREEsQ0FGRjtBQUdFQyxjQUFNLEVBQU5BO0FBSEYsT0FEQyxFQU1EO0FBQ0VrQixjQUFNLEVBQUUsUUFEVjtBQUVFbkIsU0FBQyxFQUFEQSxDQUZGO0FBR0VDLGNBQU0sRUFBTkE7QUFIRixPQU5DLENBREcsQ0FBUjtBQWNEO0FBdEI4QixHQUFULENBQXhCO0FBeUJBLE1BQU1vQixLQUFLLEdBQUdDLFdBQVcsQ0FBQyxZQUFNO0FBQzlCLFFBQU1DLEdBQUcsR0FBR1gsUUFBUSxDQUFDWSxLQUFULEVBQVo7O0FBQ0EsUUFBSSxDQUFDRCxHQUFMLEVBQVU7QUFDUkUsbUJBQWEsQ0FBQ0osS0FBRCxDQUFiO0FBQ0FYLGNBQVEsQ0FBQ00sY0FBVCxDQUF3QixpQkFBeEIsRUFBMkNDLFdBQTNDLGlCQUFnRWhCLE1BQWhFO0FBQ0F5QixtQkFBYTtBQUNiQyxpQkFBVztBQUNYO0FBQ0Q7O0FBQ0QsUUFBTUMsUUFBUSxHQUFHbEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWpCOztBQUNBLFlBQVFZLEdBQUcsQ0FBQ0osTUFBWjtBQUNFLFdBQUssUUFBTDtBQUNFLFlBQUlTLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsTUFBdEIsRUFBOEI7QUFDNUJGLGtCQUFRLENBQUNHLFNBQVQsQ0FBbUJkLFdBQW5CLHlCQUFnRE0sR0FBRyxDQUFDdkIsQ0FBSixHQUFRLENBQXhELGdCQUNFdUIsR0FBRyxDQUFDdkIsQ0FETjtBQUdEOztBQUNELFlBQU1nQyxHQUFHLEdBQUd0QixRQUFRLENBQUN1QixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsV0FBRyxDQUFDZixXQUFKLHlCQUFpQ00sR0FBRyxDQUFDdkIsQ0FBckM7QUFDQWdDLFdBQUcsQ0FBQ0UsU0FBSixDQUFjQyxHQUFkLENBQWtCLGdCQUFsQjtBQUNBLFlBQU1DLE1BQU0sYUFBTVIsUUFBUSxDQUFDQyxRQUFULENBQWtCQyxNQUFsQixHQUEyQixFQUFqQyxPQUFaO0FBQ0FFLFdBQUcsQ0FBQ0ssS0FBSixDQUFVQyxVQUFWLEdBQXVCRixNQUF2QjtBQUNBSixXQUFHLENBQUNLLEtBQUosQ0FBVUUsV0FBVixHQUF3QkgsTUFBeEI7QUFDQVIsZ0JBQVEsQ0FBQ1ksV0FBVCxDQUFxQlIsR0FBckI7QUFDQTs7QUFDRixXQUFLLFlBQUw7QUFDRSxZQUFJSixRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLE1BQXRCLEVBQThCO0FBQzVCLGNBQU1XLFNBQVMsR0FBR2IsUUFBUSxDQUFDRyxTQUEzQjtBQUNBVSxtQkFBUyxDQUFDeEIsV0FBVix3QkFBc0NNLEdBQUcsQ0FBQ3ZCLENBQTFDLGtDQUFtRXVCLEdBQUcsQ0FBQ3RCLE1BQXZFO0FBQ0EsY0FBTXlDLEtBQUssaUJBQVVuQixHQUFHLENBQUN2QixDQUFkLENBQVg7QUFDQXlDLG1CQUFTLENBQUNFLEVBQVYsR0FBZUQsS0FBZjtBQUNBRSxvQkFBVSxDQUFDLFlBQU07QUFDZixnQkFBTUMsYUFBYSxHQUFHLEdBQXRCO0FBQ0EsZ0JBQU1DLFNBQVMsR0FBR2pDLFFBQVEsR0FBRyxDQUFYLEdBQWVnQyxhQUFqQztBQUNBSixxQkFBUyxDQUFDSixLQUFWLENBQWdCVSxTQUFoQixtQ0FBcURGLGFBQXJELHdCQUFnRkMsU0FBaEY7QUFDQUwscUJBQVMsQ0FBQ08sZ0JBQVYsQ0FBMkIsb0JBQTNCLEVBQWlELFlBQU07QUFDckRQLHVCQUFTLENBQUNRLE1BQVY7QUFDRCxhQUZEO0FBR0QsV0FQUyxFQU9QcEMsUUFBUSxHQUFHLENBUEosQ0FBVjtBQVFEOztBQUNEOztBQUNGLFdBQUssUUFBTDtBQUNFLFlBQUllLFFBQVEsQ0FBQ0MsUUFBVCxDQUFrQkMsTUFBdEIsRUFBOEI7QUFDNUJGLGtCQUFRLENBQUNHLFNBQVQsQ0FBbUJrQixNQUFuQjtBQUNBaEQsZ0JBQU0sR0FBR3NCLEdBQUcsQ0FBQ3RCLE1BQWI7QUFDRDs7QUFDSDtBQUNFO0FBckNKO0FBdUNELEdBakR3QixFQWlEdEJZLFFBakRzQixDQUF6QjtBQWtERCxDQXZGRDs7QUF5RkEsSUFBTU8sZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCLE1BQU04QixvQkFBb0IsR0FBR3hDLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixzQkFBeEIsQ0FBN0I7QUFDQWtDLHNCQUFvQixDQUFDYixLQUFyQixDQUEyQmMsVUFBM0IsR0FBd0MsU0FBeEM7QUFDRCxDQUhEOztBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUM1QixNQUFNRixvQkFBb0IsR0FBR3hDLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixzQkFBeEIsQ0FBN0I7QUFDQWtDLHNCQUFvQixDQUFDYixLQUFyQixDQUEyQmMsVUFBM0IsR0FBd0MsUUFBeEM7QUFDRCxDQUhEOztBQUtBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDekIsTUFBTTVDLGNBQWMsR0FBR0MsUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBUCxnQkFBYyxDQUFDNkMsWUFBZixDQUE0QixVQUE1QixFQUF3QyxJQUF4QztBQUNELENBSEQ7O0FBS0EsSUFBTTNCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTWxCLGNBQWMsR0FBR0MsUUFBUSxDQUFDTSxjQUFULENBQXdCLGdCQUF4QixDQUF2QjtBQUNBUCxnQkFBYyxDQUFDOEMsZUFBZixDQUErQixVQUEvQjtBQUNELENBSEQ7O0FBS0EsSUFBTTdCLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUMxQixNQUFNOEIsV0FBVyxHQUFHOUMsUUFBUSxDQUFDTSxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0F3QyxhQUFXLENBQUNELGVBQVosQ0FBNEIsVUFBNUI7QUFDRCxDQUhEOztBQUtBLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixNQUFNRCxXQUFXLEdBQUc5QyxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7QUFDQXdDLGFBQVcsQ0FBQ0YsWUFBWixDQUF5QixVQUF6QixFQUFxQyxJQUFyQztBQUNELENBSEQ7O0FBS0EsSUFBTUksSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkQsZ0JBQWM7QUFDZEwsaUJBQWU7QUFDZixNQUFNM0MsY0FBYyxHQUFHQyxRQUFRLENBQUNNLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQXZCO0FBQ0EsTUFBTXdDLFdBQVcsR0FBRzlDLFFBQVEsQ0FBQ00sY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBUCxnQkFBYyxDQUFDdUMsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQ1csQ0FBRCxFQUFPO0FBQzlDLFFBQU1DLFFBQVEsR0FBR0QsQ0FBQyxDQUFDRSxNQUFGLENBQVM5QyxLQUExQjtBQUNBNkMsWUFBUSxHQUFHbEMsYUFBYSxFQUFoQixHQUFxQitCLGNBQWMsRUFBM0M7QUFDQUwsbUJBQWU7QUFDaEIsR0FKRDtBQUtBSSxhQUFXLENBQUNSLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDMUNTLGtCQUFjO0FBQ2RKLGdCQUFZO0FBQ1o3QyxrQkFBYztBQUNmLEdBSkQ7QUFLRCxDQWZEOztBQWlCQWtELElBQUksRyIsImZpbGUiOiJqcy1yZWN1cnNpb24vanMtcmVjdXJzaW9uLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhbGN1bGF0ZUZhY3RvcmlhbCA9IChuKSA9PiB7XHJcbiAgaWYgKG4gPT09IDEgfHwgbiA9PT0gMCkge1xyXG4gICAgcmV0dXJuIDE7XHJcbiAgfVxyXG4gIHJldHVybiBuICogY2FsY3VsYXRlRmFjdG9yaWFsKG4gLSAxKTtcclxufTtcclxuXHJcbmNvbnN0IHJlc3VsdCA9IGNhbGN1bGF0ZUZhY3RvcmlhbCg1KTtcclxuY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcbi8qXHJcbiAgLypcclxuICBuISA9IG4gKiAobiAtIDEpIVxyXG5cclxuXHJcbiAgNSFcclxuICA1ICogNCFcclxuICA1ICogNCAqIDMhXHJcbiAgNSAqIDQgKiAzICogMiFcclxuICA1ICogNCAqIDMgKiAyICogMSFcclxuXHJcbiAgNSAqIDQgKiAzICogMiAqIDFcclxuICA1ICogNCAqIDMgKiAyXHJcbiAgNSAqIDQgKiA2XHJcbiAgNSAqIDI0XHJcbiAgMTIwXHJcbiovXHJcbiIsImNvbnN0IGNhbGN1bGF0ZUZhY3RvcmlhbFdpdGhVSSA9IChuLCBhcmdzKSA9PiB7XHJcbiAgY29uc3QgeyBvbk5lc3RlZCwgb25SZXR1cm4gfSA9IGFyZ3M7XHJcbiAgbGV0IHJlc3VsdDtcclxuICBpZiAobiA9PT0gMSB8fCBuID09PSAwKSB7XHJcbiAgICByZXN1bHQgPSAxO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvbk5lc3RlZChuIC0gMSk7XHJcbiAgICByZXN1bHQgPSBuICogY2FsY3VsYXRlRmFjdG9yaWFsV2l0aFVJKG4gLSAxLCBhcmdzKTtcclxuICB9XHJcbiAgb25SZXR1cm4oeyBuLCByZXN1bHQgfSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhbGN1bGF0ZUZhY3RvcmlhbFdpdGhVSTtcclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubWFpbi1zZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbiNjYWxjRmFjdEJ0biB7XFxyXFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFjdC1saXN0IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmFjdC1saXN0LWl0ZW0ge1xcclxcbiAgYW5pbWF0aW9uOiBuZXN0ZWQtaXRlbS1hcHBlYXIgMC4zcyBlYXNlLWluO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYmEoMTAwLCAxMDAsIDExMSwgMC4yKSAwcHggN3B4IDI5cHggMHB4O1xcclxcbiAgcGFkZGluZzogMjBweCAzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBuZXN0ZWQtaXRlbS1hcHBlYXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHNjYWxlKDAsIDApO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuNSwgMC41KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxLCAxKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBuZXN0ZWQtaXRlbS1kaXNhcHBlYXIge1xcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSwgMSk7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgc2NhbGUoMC41LCAwLjUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSkgc2NhbGUoMCwgMCk7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2pzLXJlY3Vyc2lvbi9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLG9DQUFvQztFQUN0QztFQUNBO0lBQ0UsMkNBQTJDO0VBQzdDO0VBQ0E7SUFDRSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW4tc2VjdGlvbiB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2FsY0ZhY3RCdG4ge1xcclxcbiAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhY3QtbGlzdCB7XFxyXFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZhY3QtbGlzdC1pdGVtIHtcXHJcXG4gIGFuaW1hdGlvbjogbmVzdGVkLWl0ZW0tYXBwZWFyIDAuM3MgZWFzZS1pbjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICBib3gtc2hhZG93OiByZ2JhKDEwMCwgMTAwLCAxMTEsIDAuMikgMHB4IDdweCAyOXB4IDBweDtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbmVzdGVkLWl0ZW0tYXBwZWFyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKSBzY2FsZSgwLCAwKTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSBzY2FsZSgwLjUsIDAuNSk7XFxyXFxuICB9XFxyXFxuICAxMDAlIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSwgMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgbmVzdGVkLWl0ZW0tZGlzYXBwZWFyIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEsIDEpO1xcclxcbiAgfVxcclxcbiAgNTAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHNjYWxlKDAuNSwgMC41KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHNjYWxlKDAsIDApO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbHMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmJvZHkgPiBtYWluLFxcclxcbmJvZHkgPiAubWFpbiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIGgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveF9jb250YWluZXIge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IHtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYm94IC5ib3hfaXRlbSB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gIHBhZGRpbmc6IDRweCA4MHB4O1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgLmJveCAuYm94X2l0ZW0ucGVla2luZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgbWF4LXdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMzBweCBhdXRvIDAgYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFscy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgY2FsY3VsYXRlRmFjdG9yaWFsIGZyb20gJy4vY2FsY3VsYXRlRmFjdG9yaWFsJztcclxuaW1wb3J0IGNhbGN1bGF0ZUZhY3RvcmlhbFdpdGhVSSBmcm9tICcuL2NhbGN1bGF0ZUZhY3RvcmlhbFdpdGhVSSc7XHJcblxyXG5jb25zdCBvbkNhbGNCdG5DbGljayA9ICgpID0+IHtcclxuICBjb25zdCBmYWN0b3JpYWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYWN0b3JpYWxJbnB1dCcpO1xyXG4gIGNvbnN0IGpvYlF1ZXVlID0gW107XHJcbiAgY29uc3Qgam9iVGltZXIgPSAxMDAwO1xyXG4gIGNvbnN0IG51bWJlciA9IGZhY3RvcmlhbElucHV0LnZhbHVlO1xyXG4gIGxldCByZXN1bHQgPSAwO1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWN0b3JpYWxOdW1iZXInKS50ZXh0Q29udGVudCA9IGAke251bWJlcn0hYDtcclxuICBqb2JRdWV1ZS5wdXNoKHtcclxuICAgIGFjdGlvbjogJ25lc3RlZCcsXHJcbiAgICBuOiBudW1iZXIsXHJcbiAgfSk7XHJcbiAgc2hvd0NhbGN1bGF0aW9uKCk7XHJcbiAgY2FsY3VsYXRlRmFjdG9yaWFsV2l0aFVJKG51bWJlciwge1xyXG4gICAgb25OZXN0ZWQ6IChuKSA9PiB7XHJcbiAgICAgIGpvYlF1ZXVlLnB1c2goe1xyXG4gICAgICAgIGFjdGlvbjogJ25lc3RlZCcsXHJcbiAgICAgICAgbixcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25SZXR1cm46ICh7IG4sIHJlc3VsdCB9KSA9PiB7XHJcbiAgICAgIGpvYlF1ZXVlLnB1c2goXHJcbiAgICAgICAgLi4uW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdjYWxjdWxhdGVkJyxcclxuICAgICAgICAgICAgbixcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYWN0aW9uOiAncmV0dXJuJyxcclxuICAgICAgICAgICAgbixcclxuICAgICAgICAgICAgcmVzdWx0LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIGNvbnN0IGpvYiA9IGpvYlF1ZXVlLnNoaWZ0KCk7XHJcbiAgICBpZiAoIWpvYikge1xyXG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY3RvcmlhbE51bWJlcicpLnRleHRDb250ZW50ICs9IGAgPSAke3Jlc3VsdH1gO1xyXG4gICAgICBlbmFibGVDYWNsQnRuKCk7XHJcbiAgICAgIGVuYWJsZUlucHV0KCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGZhY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhY3QtbGlzdCcpO1xyXG4gICAgc3dpdGNoIChqb2IuYWN0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ25lc3RlZCc6XHJcbiAgICAgICAgaWYgKGZhY3RMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmFjdExpc3QubGFzdENoaWxkLnRleHRDb250ZW50ID0gYGNhbGN1bGF0aW5nICR7am9iLm4gKyAxfSB4ICR7XHJcbiAgICAgICAgICAgIGpvYi5uXHJcbiAgICAgICAgICB9ISDwn5GHYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XHJcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gYGNhbGN1bGF0aW5nICR7am9iLm59IWA7XHJcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2ZhY3QtbGlzdC1pdGVtJyk7XHJcbiAgICAgICAgY29uc3QgbWFyZ2luID0gYCR7ZmFjdExpc3QuY2hpbGRyZW4ubGVuZ3RoICogMTZ9cHhgO1xyXG4gICAgICAgIGRpdi5zdHlsZS5tYXJnaW5MZWZ0ID0gbWFyZ2luO1xyXG4gICAgICAgIGRpdi5zdHlsZS5tYXJnaW5SaWdodCA9IG1hcmdpbjtcclxuICAgICAgICBmYWN0TGlzdC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdjYWxjdWxhdGVkJzpcclxuICAgICAgICBpZiAoZmFjdExpc3QuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICBjb25zdCB0YXJnZXREaXYgPSBmYWN0TGlzdC5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgICB0YXJnZXREaXYudGV4dENvbnRlbnQgPSBgQ2FsY3VsYXRlZCAke2pvYi5ufSBmYWN0b3JpYWwuIFJlc3VsdCA9ICR7am9iLnJlc3VsdH0gIPCfkYZgO1xyXG4gICAgICAgICAgY29uc3QgZGl2SWQgPSBgam9iXyR7am9iLm59YDtcclxuICAgICAgICAgIHRhcmdldERpdi5pZCA9IGRpdklkO1xyXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvblRpbWUgPSA1MDA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGF5VGltZSA9IGpvYlRpbWVyIC8gMiAtIGFuaW1hdGlvblRpbWU7XHJcbiAgICAgICAgICAgIHRhcmdldERpdi5zdHlsZS5hbmltYXRpb24gPSBgbmVzdGVkLWl0ZW0tZGlzYXBwZWFyICR7YW5pbWF0aW9uVGltZX1tcyBlYXNlLWluICR7ZGVsYXlUaW1lfW1zYDtcclxuICAgICAgICAgICAgdGFyZ2V0RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdEFuaW1hdGlvbkVuZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICB0YXJnZXREaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSwgam9iVGltZXIgLyAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JldHVybic6XHJcbiAgICAgICAgaWYgKGZhY3RMaXN0LmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgZmFjdExpc3QubGFzdENoaWxkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgcmVzdWx0ID0gam9iLnJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfSwgam9iVGltZXIpO1xyXG59O1xyXG5cclxuY29uc3Qgc2hvd0NhbGN1bGF0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbGN1bGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGN1bGF0aW9uQ29udGFpbmVyJyk7XHJcbiAgY2FsY3VsYXRpb25Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxufTtcclxuXHJcbmNvbnN0IGhpZGVDYWxjdWxhdGlvbiA9ICgpID0+IHtcclxuICBjb25zdCBjYWxjdWxhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxjdWxhdGlvbkNvbnRhaW5lcicpO1xyXG4gIGNhbGN1bGF0aW9uQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxufTtcclxuXHJcbmNvbnN0IGRpc2FibGVJbnB1dCA9ICgpID0+IHtcclxuICBjb25zdCBmYWN0b3JpYWxJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYWN0b3JpYWxJbnB1dCcpO1xyXG4gIGZhY3RvcmlhbElucHV0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxufTtcclxuXHJcbmNvbnN0IGVuYWJsZUlucHV0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGZhY3RvcmlhbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY3RvcmlhbElucHV0Jyk7XHJcbiAgZmFjdG9yaWFsSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG59O1xyXG5cclxuY29uc3QgZW5hYmxlQ2FjbEJ0biA9ICgpID0+IHtcclxuICBjb25zdCBjYWxjRmFjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYWxjRmFjdEJ0bicpO1xyXG4gIGNhbGNGYWN0QnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxufTtcclxuXHJcbmNvbnN0IGRpc2FibGVDYWNsQnRuID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhbGNGYWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGNGYWN0QnRuJyk7XHJcbiAgY2FsY0ZhY3RCdG4uc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG59O1xyXG5cclxuY29uc3QgbWFpbiA9ICgpID0+IHtcclxuICBkaXNhYmxlQ2FjbEJ0bigpO1xyXG4gIGhpZGVDYWxjdWxhdGlvbigpO1xyXG4gIGNvbnN0IGZhY3RvcmlhbElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZhY3RvcmlhbElucHV0Jyk7XHJcbiAgY29uc3QgY2FsY0ZhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FsY0ZhY3RCdG4nKTtcclxuICBmYWN0b3JpYWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChlKSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dFZhbCA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgaW5wdXRWYWwgPyBlbmFibGVDYWNsQnRuKCkgOiBkaXNhYmxlQ2FjbEJ0bigpO1xyXG4gICAgaGlkZUNhbGN1bGF0aW9uKCk7XHJcbiAgfSk7XHJcbiAgY2FsY0ZhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBkaXNhYmxlQ2FjbEJ0bigpO1xyXG4gICAgZGlzYWJsZUlucHV0KCk7XHJcbiAgICBvbkNhbGNCdG5DbGljaygpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxubWFpbigpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9