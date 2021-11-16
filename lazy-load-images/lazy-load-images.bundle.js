/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lazy-load-images/CardItem.js":
/*!******************************************!*\
  !*** ./src/lazy-load-images/CardItem.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
var CardItem = function CardItem(index) {
  var imageBaseSize = 120;
  var imageHeight = imageBaseSize + index;
  var imageWidth = imageBaseSize + index; // We can even return a string built using a template literal

  return "\n    <div class=\"card\" style=\"width: 18rem\">\n      <img\n        loading=\"lazy\"\n        data-src=\"https://picsum.photos/".concat(imageWidth, "/").concat(imageHeight, "\"\n        class=\"card-img-top lazyload\"\n        alt=\"...\"\n      />\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">Card title</h5>\n        <p class=\"card-text\">\n          Some quick example text to build on the card title and make up\n          the bulk of the card's content.\n        </p>\n        <a href=\"https://ahsanayaz.com\" class=\"btn btn-primary\">AhsanAyaz.com</a>\n      </div>\n    </div>\n  ");
};

/* harmony default export */ __webpack_exports__["default"] = (CardItem);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/loaders.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/loaders.css ***!
  \********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* HEART */\n.lds-heart {\n  display: inline-block;\n  position: relative;\n  width: 160px;\n  height: 160px;\n  transform: rotate(45deg);\n  transform-origin: 80px 80px;\n}\n.lds-heart div {\n  top: 64px;\n  left: 64px;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  background: #f196ae;\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.lds-heart div:after,\n.lds-heart div:before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  width: 64px;\n  height: 64px;\n  background: #f196ae;\n}\n.lds-heart div:before {\n  left: -48px;\n  border-radius: 50% 0 0 50%;\n}\n.lds-heart div:after {\n  top: -48px;\n  border-radius: 50% 50% 0 0;\n}\n@keyframes lds-heart {\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}\n\n/* GRID */\n\n.lds-grid {\n  display: inline-block;\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.lds-grid div {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #cef;\n  animation: lds-grid 1.2s linear infinite;\n}\n.lds-grid div:nth-child(1) {\n  top: 8px;\n  left: 8px;\n  animation-delay: 0s;\n}\n.lds-grid div:nth-child(2) {\n  top: 8px;\n  left: 48px;\n  animation-delay: -0.4s;\n}\n.lds-grid div:nth-child(3) {\n  top: 8px;\n  left: 88px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(4) {\n  top: 48px;\n  left: 8px;\n  animation-delay: -0.4s;\n}\n.lds-grid div:nth-child(5) {\n  top: 48px;\n  left: 48px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(6) {\n  top: 48px;\n  left: 88px;\n  animation-delay: -1.2s;\n}\n.lds-grid div:nth-child(7) {\n  top: 88px;\n  left: 8px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(8) {\n  top: 88px;\n  left: 48px;\n  animation-delay: -1.2s;\n}\n.lds-grid div:nth-child(9) {\n  top: 88px;\n  left: 88px;\n  animation-delay: -1.6s;\n}\n@keyframes lds-grid {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n/* Ripple */\n\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 144px;\n  height: 144px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 8px solid #f196ae;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 72px;\n    left: 72px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 144px;\n    height: 144px;\n    opacity: 0;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/lazy-load-images/loaders.css"],"names":[],"mappings":"AAAA,UAAU;AACV;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;AACA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sEAAsE;AACxE;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA,SAAS;;AAET;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,wCAAwC;AAC1C;AACA;EACE,QAAQ;EACR,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,QAAQ;EACR,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,QAAQ;EACR,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE;;IAEE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;;AAEA,WAAW;;AAEX;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,8DAA8D;AAChE;AACA;EACE,sBAAsB;AACxB;AACA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;EACA;IACE,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["/* HEART */\n.lds-heart {\n  display: inline-block;\n  position: relative;\n  width: 160px;\n  height: 160px;\n  transform: rotate(45deg);\n  transform-origin: 80px 80px;\n}\n.lds-heart div {\n  top: 64px;\n  left: 64px;\n  position: absolute;\n  width: 64px;\n  height: 64px;\n  background: #f196ae;\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n.lds-heart div:after,\n.lds-heart div:before {\n  content: ' ';\n  position: absolute;\n  display: block;\n  width: 64px;\n  height: 64px;\n  background: #f196ae;\n}\n.lds-heart div:before {\n  left: -48px;\n  border-radius: 50% 0 0 50%;\n}\n.lds-heart div:after {\n  top: -48px;\n  border-radius: 50% 50% 0 0;\n}\n@keyframes lds-heart {\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}\n\n/* GRID */\n\n.lds-grid {\n  display: inline-block;\n  position: relative;\n  width: 120px;\n  height: 120px;\n}\n.lds-grid div {\n  position: absolute;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #cef;\n  animation: lds-grid 1.2s linear infinite;\n}\n.lds-grid div:nth-child(1) {\n  top: 8px;\n  left: 8px;\n  animation-delay: 0s;\n}\n.lds-grid div:nth-child(2) {\n  top: 8px;\n  left: 48px;\n  animation-delay: -0.4s;\n}\n.lds-grid div:nth-child(3) {\n  top: 8px;\n  left: 88px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(4) {\n  top: 48px;\n  left: 8px;\n  animation-delay: -0.4s;\n}\n.lds-grid div:nth-child(5) {\n  top: 48px;\n  left: 48px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(6) {\n  top: 48px;\n  left: 88px;\n  animation-delay: -1.2s;\n}\n.lds-grid div:nth-child(7) {\n  top: 88px;\n  left: 8px;\n  animation-delay: -0.8s;\n}\n.lds-grid div:nth-child(8) {\n  top: 88px;\n  left: 48px;\n  animation-delay: -1.2s;\n}\n.lds-grid div:nth-child(9) {\n  top: 88px;\n  left: 88px;\n  animation-delay: -1.6s;\n}\n@keyframes lds-grid {\n  0%,\n  100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n/* Ripple */\n\n.lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 144px;\n  height: 144px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 8px solid #f196ae;\n  opacity: 1;\n  border-radius: 50%;\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes lds-ripple {\n  0% {\n    top: 72px;\n    left: 72px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: 0px;\n    left: 0px;\n    width: 144px;\n    height: 144px;\n    opacity: 0;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/styles.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/styles.css ***!
  \*******************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./loaders.css */ "./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/loaders.css");
// Imports



var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_loaders_css__WEBPACK_IMPORTED_MODULE_2__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".app-container {\n  margin-top: 30px;\n}\n.app-container__heading {\n  margin: 20px auto 40px auto;\n}\n.app-container section {\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 300px;\n}\n\n.app-container section:nth-child(even) {\n  background-color: #f1f1f1;\n  color: #333;\n}\n\n.app-container section:nth-child(odd) {\n  background-color: #333;\n  color: white;\n}\n\n.app-container section .card .card-body {\n  color: #333;\n}\n\n.app-container .card .card-img-top {\n  height: 160px;\n  object-fit: cover;\n}\n\n.app-container section .col-md-6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media all and (max-width: 767px) {\n  .app-container section .col-md-6 {\n    margin-bottom: 60px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/lazy-load-images/styles.css"],"names":[],"mappings":"AACA;EACE,gBAAgB;AAClB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF","sourcesContent":["@import './loaders.css';\n.app-container {\n  margin-top: 30px;\n}\n.app-container__heading {\n  margin: 20px auto 40px auto;\n}\n.app-container section {\n  height: 100vh;\n  padding: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  min-height: 300px;\n}\n\n.app-container section:nth-child(even) {\n  background-color: #f1f1f1;\n  color: #333;\n}\n\n.app-container section:nth-child(odd) {\n  background-color: #333;\n  color: white;\n}\n\n.app-container section .card .card-body {\n  color: #333;\n}\n\n.app-container .card .card-img-top {\n  height: 160px;\n  object-fit: cover;\n}\n\n.app-container section .col-md-6 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n@media all and (max-width: 767px) {\n  .app-container section .col-md-6 {\n    margin-bottom: 60px;\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/lazy-load-images/styles.css":
/*!*****************************************!*\
  !*** ./src/lazy-load-images/styles.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/lazy-load-images/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
/*!****************************************!*\
  !*** ./src/lazy-load-images/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/lazy-load-images/styles.css");
/* harmony import */ var _CardItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardItem */ "./src/lazy-load-images/CardItem.js");



var generateImages = function generateImages() {
  var container = document.querySelector('.app-container');
  var sections = container.querySelectorAll('section');

  for (var i = 0, len = sections.length; i < len; ++i) {
    var section = sections[i];
    var columns = section.querySelectorAll('.col-md-6');
    var targetColumn = i % 2 === 0 ? columns[1] : columns[0];
    targetColumn.innerHTML = (0,_CardItem__WEBPACK_IMPORTED_MODULE_1__.default)(i);
  }
};

var imageLazyLoadingFallback = function imageLazyLoadingFallback() {
  if ('loading' in HTMLImageElement.prototype) {
    var images = document.querySelectorAll('img[loading=lazy]');

    for (var index = 0; index < images.length; index++) {
      var element = images[index];
      element.src = element.dataset.src;
    }
  } else if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(function (entries, observer) {
      entries.filter(function (entry) {
        return entry.isIntersecting;
      }).map(function (entry) {
        var image = entry.target;
        var dataSrcValue = image.getAttribute('data-src');

        if (!dataSrcValue) {
          return;
        }

        image.src = dataSrcValue;
        observer.unobserve(image);
      });
    });

    var _images = document.querySelectorAll('img[data-src]');

    for (var _index = 0; _index < _images.length; _index++) {
      var image = _images[_index];
      observer.observe(image);
    }
  } else {
    var scriptTag = document.createElement('script');
    scriptTag.src = 'http://afarkas.github.io/lazysizes/lazysizes.min.js';
    document.body.appendChild(scriptTag);
    console.log('Works in IE11');
  }
};

var main = function main() {
  console.log('JS is awesome!');
  generateImages();
  imageLazyLoadingFallback();
};

main();
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9sYXp5LWxvYWQtaW1hZ2VzL0NhcmRJdGVtLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvbG9hZGVycy5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvc3R5bGVzLmNzcz80YjM0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9zY3JpcHQuanMiXSwibmFtZXMiOlsiQ2FyZEl0ZW0iLCJpbmRleCIsImltYWdlQmFzZVNpemUiLCJpbWFnZUhlaWdodCIsImltYWdlV2lkdGgiLCJnZW5lcmF0ZUltYWdlcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJzZWN0aW9uIiwiY29sdW1ucyIsInRhcmdldENvbHVtbiIsImlubmVySFRNTCIsImltYWdlTGF6eUxvYWRpbmdGYWxsYmFjayIsIkhUTUxJbWFnZUVsZW1lbnQiLCJwcm90b3R5cGUiLCJpbWFnZXMiLCJlbGVtZW50Iiwic3JjIiwiZGF0YXNldCIsIndpbmRvdyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm1hcCIsImltYWdlIiwidGFyZ2V0IiwiZGF0YVNyY1ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNjcmlwdFRhZyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUMsYUFBYSxHQUFHLEdBQXRCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxhQUFhLEdBQUdELEtBQXBDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRixhQUFhLEdBQUdELEtBQW5DLENBSDBCLENBSTFCOztBQUNBLHFKQUl3Q0csVUFKeEMsY0FJc0RELFdBSnREO0FBa0JELENBdkJEOztBQXlCQSwrREFBZUgsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLG1FQUFtRSwwQkFBMEIsdUJBQXVCLGlCQUFpQixrQkFBa0IsNkJBQTZCLGdDQUFn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Q29udGVudCI6WyJjb25zdCBDYXJkSXRlbSA9IChpbmRleCkgPT4ge1xuICBjb25zdCBpbWFnZUJhc2VTaXplID0gMTIwO1xuICBjb25zdCBpbWFnZUhlaWdodCA9IGltYWdlQmFzZVNpemUgKyBpbmRleDtcbiAgY29uc3QgaW1hZ2VXaWR0aCA9IGltYWdlQmFzZVNpemUgKyBpbmRleDtcbiAgLy8gV2UgY2FuIGV2ZW4gcmV0dXJuIGEgc3RyaW5nIGJ1aWx0IHVzaW5nIGEgdGVtcGxhdGUgbGl0ZXJhbFxuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJ3aWR0aDogMThyZW1cIj5cbiAgICAgIDxpbWdcbiAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICBkYXRhLXNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8ke2ltYWdlV2lkdGh9LyR7aW1hZ2VIZWlnaHR9XCJcbiAgICAgICAgY2xhc3M9XCJjYXJkLWltZy10b3AgbGF6eWxvYWRcIlxuICAgICAgICBhbHQ9XCIuLi5cIlxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPkNhcmQgdGl0bGU8L2g1PlxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgIFNvbWUgcXVpY2sgZXhhbXBsZSB0ZXh0IHRvIGJ1aWxkIG9uIHRoZSBjYXJkIHRpdGxlIGFuZCBtYWtlIHVwXG4gICAgICAgICAgdGhlIGJ1bGsgb2YgdGhlIGNhcmQncyBjb250ZW50LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Foc2FuYXlhei5jb21cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPkFoc2FuQXlhei5jb208L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJdGVtO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBIRUFSVCAqL1xcbi5sZHMtaGVhcnQge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gIHRyYW5zZm9ybS1vcmlnaW46IDgwcHggODBweDtcXG59XFxuLmxkcy1oZWFydCBkaXYge1xcbiAgdG9wOiA2NHB4O1xcbiAgbGVmdDogNjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZDogI2YxOTZhZTtcXG4gIGFuaW1hdGlvbjogbGRzLWhlYXJ0IDEuMnMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XFxufVxcbi5sZHMtaGVhcnQgZGl2OmFmdGVyLFxcbi5sZHMtaGVhcnQgZGl2OmJlZm9yZSB7XFxuICBjb250ZW50OiAnICc7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiA2NHB4O1xcbiAgaGVpZ2h0OiA2NHB4O1xcbiAgYmFja2dyb3VuZDogI2YxOTZhZTtcXG59XFxuLmxkcy1oZWFydCBkaXY6YmVmb3JlIHtcXG4gIGxlZnQ6IC00OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlIDAgMCA1MCU7XFxufVxcbi5sZHMtaGVhcnQgZGl2OmFmdGVyIHtcXG4gIHRvcDogLTQ4cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcXG59XFxuQGtleWZyYW1lcyBsZHMtaGVhcnQge1xcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgfVxcbiAgNSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB9XFxuICAzOSUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xcbiAgfVxcbiAgNDUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIH1cXG4gIDYwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgfVxcbn1cXG5cXG4vKiBHUklEICovXFxuXFxuLmxkcy1ncmlkIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGhlaWdodDogMTIwcHg7XFxufVxcbi5sZHMtZ3JpZCBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMycHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBiYWNrZ3JvdW5kOiAjY2VmO1xcbiAgYW5pbWF0aW9uOiBsZHMtZ3JpZCAxLjJzIGxpbmVhciBpbmZpbml0ZTtcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiA4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IDBzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgyKSB7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDQ4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgzKSB7XFxuICB0b3A6IDhweDtcXG4gIGxlZnQ6IDg4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg0KSB7XFxuICB0b3A6IDQ4cHg7XFxuICBsZWZ0OiA4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg1KSB7XFxuICB0b3A6IDQ4cHg7XFxuICBsZWZ0OiA0OHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNikge1xcbiAgdG9wOiA0OHB4O1xcbiAgbGVmdDogODhweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XFxufVxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDcpIHtcXG4gIHRvcDogODhweDtcXG4gIGxlZnQ6IDhweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XFxufVxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDgpIHtcXG4gIHRvcDogODhweDtcXG4gIGxlZnQ6IDQ4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg5KSB7XFxuICB0b3A6IDg4cHg7XFxuICBsZWZ0OiA4OHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS42cztcXG59XFxuQGtleWZyYW1lcyBsZHMtZ3JpZCB7XFxuICAwJSxcXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgfVxcbn1cXG5cXG4vKiBSaXBwbGUgKi9cXG5cXG4ubGRzLXJpcHBsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTQ0cHg7XFxuICBoZWlnaHQ6IDE0NHB4O1xcbn1cXG4ubGRzLXJpcHBsZSBkaXYge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyOiA4cHggc29saWQgI2YxOTZhZTtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBhbmltYXRpb246IGxkcy1yaXBwbGUgMXMgY3ViaWMtYmV6aWVyKDAsIDAuMiwgMC44LCAxKSBpbmZpbml0ZTtcXG59XFxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjVzO1xcbn1cXG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xcbiAgMCUge1xcbiAgICB0b3A6IDcycHg7XFxuICAgIGxlZnQ6IDcycHg7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgd2lkdGg6IDE0NHB4O1xcbiAgICBoZWlnaHQ6IDE0NHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9sb2FkZXJzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxVQUFVO0FBQ1Y7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsc0VBQXNFO0FBQ3hFO0FBQ0E7O0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBLFNBQVM7O0FBRVQ7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsUUFBUTtFQUNSLFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsU0FBUztFQUNULHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTs7SUFFRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw4REFBOEQ7QUFDaEU7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0U7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtFQUNaO0VBQ0E7SUFDRSxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtFQUNaO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogSEVBUlQgKi9cXG4ubGRzLWhlYXJ0IHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIGhlaWdodDogMTYwcHg7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA4MHB4IDgwcHg7XFxufVxcbi5sZHMtaGVhcnQgZGl2IHtcXG4gIHRvcDogNjRweDtcXG4gIGxlZnQ6IDY0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJhY2tncm91bmQ6ICNmMTk2YWU7XFxuICBhbmltYXRpb246IGxkcy1oZWFydCAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcbn1cXG4ubGRzLWhlYXJ0IGRpdjphZnRlcixcXG4ubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xcbiAgY29udGVudDogJyAnO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogNjRweDtcXG4gIGhlaWdodDogNjRweDtcXG4gIGJhY2tncm91bmQ6ICNmMTk2YWU7XFxufVxcbi5sZHMtaGVhcnQgZGl2OmJlZm9yZSB7XFxuICBsZWZ0OiAtNDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xcbn1cXG4ubGRzLWhlYXJ0IGRpdjphZnRlciB7XFxuICB0b3A6IC00OHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XFxufVxcbkBrZXlmcmFtZXMgbGRzLWhlYXJ0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gIH1cXG4gIDUlIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbiAgfVxcbiAgMzklIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXG4gIH1cXG4gIDQ1JSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICB9XFxuICA2MCUge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG4gIH1cXG59XFxuXFxuLyogR1JJRCAqL1xcblxcbi5sZHMtZ3JpZCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMTIwcHg7XFxuICBoZWlnaHQ6IDEyMHB4O1xcbn1cXG4ubGRzLWdyaWQgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogI2NlZjtcXG4gIGFuaW1hdGlvbjogbGRzLWdyaWQgMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gIHRvcDogOHB4O1xcbiAgbGVmdDogOHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMikge1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiA0OHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMykge1xcbiAgdG9wOiA4cHg7XFxuICBsZWZ0OiA4OHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xcbiAgdG9wOiA0OHB4O1xcbiAgbGVmdDogOHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNSkge1xcbiAgdG9wOiA0OHB4O1xcbiAgbGVmdDogNDhweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XFxufVxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDYpIHtcXG4gIHRvcDogNDhweDtcXG4gIGxlZnQ6IDg4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg3KSB7XFxuICB0b3A6IDg4cHg7XFxuICBsZWZ0OiA4cHg7XFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcbn1cXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg4KSB7XFxuICB0b3A6IDg4cHg7XFxuICBsZWZ0OiA0OHB4O1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcXG59XFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoOSkge1xcbiAgdG9wOiA4OHB4O1xcbiAgbGVmdDogODhweDtcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNnM7XFxufVxcbkBrZXlmcmFtZXMgbGRzLWdyaWQge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gIH1cXG59XFxuXFxuLyogUmlwcGxlICovXFxuXFxuLmxkcy1yaXBwbGUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDE0NHB4O1xcbiAgaGVpZ2h0OiAxNDRweDtcXG59XFxuLmxkcy1yaXBwbGUgZGl2IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlcjogOHB4IHNvbGlkICNmMTk2YWU7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxufVxcbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXG59XFxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXG4gIDAlIHtcXG4gICAgdG9wOiA3MnB4O1xcbiAgICBsZWZ0OiA3MnB4O1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIHdpZHRoOiAxNDRweDtcXG4gICAgaGVpZ2h0OiAxNDRweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2xvYWRlcnMuY3NzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5pKF9fX0NTU19MT0FERVJfQVRfUlVMRV9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuYXBwLWNvbnRhaW5lciB7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbn1cXG4uYXBwLWNvbnRhaW5lcl9faGVhZGluZyB7XFxuICBtYXJnaW46IDIwcHggYXV0byA0MHB4IGF1dG87XFxufVxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb24ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDMwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzAwcHg7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb246bnRoLWNoaWxkKGV2ZW4pIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmFwcC1jb250YWluZXIgc2VjdGlvbjpudGgtY2hpbGQob2RkKSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uIC5jYXJkIC5jYXJkLWJvZHkge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIC5jYXJkIC5jYXJkLWltZy10b3Age1xcbiAgaGVpZ2h0OiAxNjBweDtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uIC5jb2wtbWQtNiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLmFwcC1jb250YWluZXIgc2VjdGlvbiAuY29sLW1kLTYge1xcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJy4vbG9hZGVycy5jc3MnO1xcbi5hcHAtY29udGFpbmVyIHtcXG4gIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5hcHAtY29udGFpbmVyX19oZWFkaW5nIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvIDQwcHggYXV0bztcXG59XFxuLmFwcC1jb250YWluZXIgc2VjdGlvbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMzBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAzMDBweDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIgc2VjdGlvbjpudGgtY2hpbGQoZXZlbikge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uOm50aC1jaGlsZChvZGQpIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb24gLmNhcmQgLmNhcmQtYm9keSB7XFxuICBjb2xvcjogIzMzMztcXG59XFxuXFxuLmFwcC1jb250YWluZXIgLmNhcmQgLmNhcmQtaW1nLXRvcCB7XFxuICBoZWlnaHQ6IDE2MHB4O1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb24gLmNvbC1tZC02IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuYXBwLWNvbnRhaW5lciBzZWN0aW9uIC5jb2wtbWQtNiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBDYXJkSXRlbSBmcm9tICcuL0NhcmRJdGVtJztcblxuY29uc3QgZ2VuZXJhdGVJbWFnZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJyk7XG4gIGNvbnN0IHNlY3Rpb25zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKTtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHNlY3Rpb25zLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xuICAgIGNvbnN0IGNvbHVtbnMgPSBzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb2wtbWQtNicpO1xuICAgIGNvbnN0IHRhcmdldENvbHVtbiA9IGkgJSAyID09PSAwID8gY29sdW1uc1sxXSA6IGNvbHVtbnNbMF07XG4gICAgdGFyZ2V0Q29sdW1uLmlubmVySFRNTCA9IENhcmRJdGVtKGkpO1xuICB9XG59O1xuXG5jb25zdCBpbWFnZUxhenlMb2FkaW5nRmFsbGJhY2sgPSAoKSA9PiB7XG4gIGlmICgnbG9hZGluZycgaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGUpIHtcbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbbG9hZGluZz1sYXp5XScpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gaW1hZ2VzW2luZGV4XTtcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyYztcbiAgICB9XG4gIH0gZWxzZSBpZiAod2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICBlbnRyaWVzXG4gICAgICAgIC5maWx0ZXIoKGVudHJ5KSA9PiBlbnRyeS5pc0ludGVyc2VjdGluZylcbiAgICAgICAgLm1hcCgoZW50cnkpID0+IHtcbiAgICAgICAgICBjb25zdCBpbWFnZSA9IGVudHJ5LnRhcmdldDtcbiAgICAgICAgICBjb25zdCBkYXRhU3JjVmFsdWUgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgaWYgKCFkYXRhU3JjVmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YVNyY1ZhbHVlO1xuICAgICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGltYWdlc1tpbmRleF07XG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgc2NyaXB0VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0VGFnLnNyYyA9ICdodHRwOi8vYWZhcmthcy5naXRodWIuaW8vbGF6eXNpemVzL2xhenlzaXplcy5taW4uanMnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0VGFnKTtcbiAgICBjb25zb2xlLmxvZygnV29ya3MgaW4gSUUxMScpO1xuICB9XG59O1xuXG5jb25zdCBtYWluID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZygnSlMgaXMgYXdlc29tZSEnKTtcbiAgZ2VuZXJhdGVJbWFnZXMoKTtcbiAgaW1hZ2VMYXp5TG9hZGluZ0ZhbGxiYWNrKCk7XG59O1xuXG5tYWluKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9