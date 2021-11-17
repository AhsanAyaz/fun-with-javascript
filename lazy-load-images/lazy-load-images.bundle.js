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
___CSS_LOADER_EXPORT___.push([module.id, "/* HEART */\r\n.lds-heart {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 160px;\r\n  height: 160px;\r\n  transform: rotate(45deg);\r\n  transform-origin: 80px 80px;\r\n}\r\n.lds-heart div {\r\n  top: 64px;\r\n  left: 64px;\r\n  position: absolute;\r\n  width: 64px;\r\n  height: 64px;\r\n  background: #f196ae;\r\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n.lds-heart div:after,\r\n.lds-heart div:before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  background: #f196ae;\r\n}\r\n.lds-heart div:before {\r\n  left: -48px;\r\n  border-radius: 50% 0 0 50%;\r\n}\r\n.lds-heart div:after {\r\n  top: -48px;\r\n  border-radius: 50% 50% 0 0;\r\n}\r\n@keyframes lds-heart {\r\n  0% {\r\n    transform: scale(0.95);\r\n  }\r\n  5% {\r\n    transform: scale(1.1);\r\n  }\r\n  39% {\r\n    transform: scale(0.85);\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n  }\r\n  60% {\r\n    transform: scale(0.95);\r\n  }\r\n  100% {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n/* GRID */\r\n\r\n.lds-grid {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n.lds-grid div {\r\n  position: absolute;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  background: #cef;\r\n  animation: lds-grid 1.2s linear infinite;\r\n}\r\n.lds-grid div:nth-child(1) {\r\n  top: 8px;\r\n  left: 8px;\r\n  animation-delay: 0s;\r\n}\r\n.lds-grid div:nth-child(2) {\r\n  top: 8px;\r\n  left: 48px;\r\n  animation-delay: -0.4s;\r\n}\r\n.lds-grid div:nth-child(3) {\r\n  top: 8px;\r\n  left: 88px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(4) {\r\n  top: 48px;\r\n  left: 8px;\r\n  animation-delay: -0.4s;\r\n}\r\n.lds-grid div:nth-child(5) {\r\n  top: 48px;\r\n  left: 48px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(6) {\r\n  top: 48px;\r\n  left: 88px;\r\n  animation-delay: -1.2s;\r\n}\r\n.lds-grid div:nth-child(7) {\r\n  top: 88px;\r\n  left: 8px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(8) {\r\n  top: 88px;\r\n  left: 48px;\r\n  animation-delay: -1.2s;\r\n}\r\n.lds-grid div:nth-child(9) {\r\n  top: 88px;\r\n  left: 88px;\r\n  animation-delay: -1.6s;\r\n}\r\n@keyframes lds-grid {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n/* Ripple */\r\n\r\n.lds-ripple {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 144px;\r\n  height: 144px;\r\n}\r\n.lds-ripple div {\r\n  position: absolute;\r\n  border: 8px solid #f196ae;\r\n  opacity: 1;\r\n  border-radius: 50%;\r\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n}\r\n.lds-ripple div:nth-child(2) {\r\n  animation-delay: -0.5s;\r\n}\r\n@keyframes lds-ripple {\r\n  0% {\r\n    top: 72px;\r\n    left: 72px;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 144px;\r\n    height: 144px;\r\n    opacity: 0;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/lazy-load-images/loaders.css"],"names":[],"mappings":"AAAA,UAAU;AACV;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,wBAAwB;EACxB,2BAA2B;AAC7B;AACA;EACE,SAAS;EACT,UAAU;EACV,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,sEAAsE;AACxE;AACA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,0BAA0B;AAC5B;AACA;EACE,UAAU;EACV,0BAA0B;AAC5B;AACA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,mBAAmB;EACrB;EACA;IACE,sBAAsB;EACxB;EACA;IACE,qBAAqB;EACvB;AACF;;AAEA,SAAS;;AAET;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,wCAAwC;AAC1C;AACA;EACE,QAAQ;EACR,SAAS;EACT,mBAAmB;AACrB;AACA;EACE,QAAQ;EACR,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,QAAQ;EACR,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,SAAS;EACT,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;AACA;EACE;;IAEE,UAAU;EACZ;EACA;IACE,YAAY;EACd;AACF;;AAEA,WAAW;;AAEX;EACE,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,yBAAyB;EACzB,UAAU;EACV,kBAAkB;EAClB,8DAA8D;AAChE;AACA;EACE,sBAAsB;AACxB;AACA;EACE;IACE,SAAS;IACT,UAAU;IACV,QAAQ;IACR,SAAS;IACT,UAAU;EACZ;EACA;IACE,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;IACb,UAAU;EACZ;AACF","sourcesContent":["/* HEART */\r\n.lds-heart {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 160px;\r\n  height: 160px;\r\n  transform: rotate(45deg);\r\n  transform-origin: 80px 80px;\r\n}\r\n.lds-heart div {\r\n  top: 64px;\r\n  left: 64px;\r\n  position: absolute;\r\n  width: 64px;\r\n  height: 64px;\r\n  background: #f196ae;\r\n  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\r\n}\r\n.lds-heart div:after,\r\n.lds-heart div:before {\r\n  content: ' ';\r\n  position: absolute;\r\n  display: block;\r\n  width: 64px;\r\n  height: 64px;\r\n  background: #f196ae;\r\n}\r\n.lds-heart div:before {\r\n  left: -48px;\r\n  border-radius: 50% 0 0 50%;\r\n}\r\n.lds-heart div:after {\r\n  top: -48px;\r\n  border-radius: 50% 50% 0 0;\r\n}\r\n@keyframes lds-heart {\r\n  0% {\r\n    transform: scale(0.95);\r\n  }\r\n  5% {\r\n    transform: scale(1.1);\r\n  }\r\n  39% {\r\n    transform: scale(0.85);\r\n  }\r\n  45% {\r\n    transform: scale(1);\r\n  }\r\n  60% {\r\n    transform: scale(0.95);\r\n  }\r\n  100% {\r\n    transform: scale(0.9);\r\n  }\r\n}\r\n\r\n/* GRID */\r\n\r\n.lds-grid {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 120px;\r\n  height: 120px;\r\n}\r\n.lds-grid div {\r\n  position: absolute;\r\n  width: 32px;\r\n  height: 32px;\r\n  border-radius: 50%;\r\n  background: #cef;\r\n  animation: lds-grid 1.2s linear infinite;\r\n}\r\n.lds-grid div:nth-child(1) {\r\n  top: 8px;\r\n  left: 8px;\r\n  animation-delay: 0s;\r\n}\r\n.lds-grid div:nth-child(2) {\r\n  top: 8px;\r\n  left: 48px;\r\n  animation-delay: -0.4s;\r\n}\r\n.lds-grid div:nth-child(3) {\r\n  top: 8px;\r\n  left: 88px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(4) {\r\n  top: 48px;\r\n  left: 8px;\r\n  animation-delay: -0.4s;\r\n}\r\n.lds-grid div:nth-child(5) {\r\n  top: 48px;\r\n  left: 48px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(6) {\r\n  top: 48px;\r\n  left: 88px;\r\n  animation-delay: -1.2s;\r\n}\r\n.lds-grid div:nth-child(7) {\r\n  top: 88px;\r\n  left: 8px;\r\n  animation-delay: -0.8s;\r\n}\r\n.lds-grid div:nth-child(8) {\r\n  top: 88px;\r\n  left: 48px;\r\n  animation-delay: -1.2s;\r\n}\r\n.lds-grid div:nth-child(9) {\r\n  top: 88px;\r\n  left: 88px;\r\n  animation-delay: -1.6s;\r\n}\r\n@keyframes lds-grid {\r\n  0%,\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0.5;\r\n  }\r\n}\r\n\r\n/* Ripple */\r\n\r\n.lds-ripple {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 144px;\r\n  height: 144px;\r\n}\r\n.lds-ripple div {\r\n  position: absolute;\r\n  border: 8px solid #f196ae;\r\n  opacity: 1;\r\n  border-radius: 50%;\r\n  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\r\n}\r\n.lds-ripple div:nth-child(2) {\r\n  animation-delay: -0.5s;\r\n}\r\n@keyframes lds-ripple {\r\n  0% {\r\n    top: 72px;\r\n    left: 72px;\r\n    width: 0;\r\n    height: 0;\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    top: 0px;\r\n    left: 0px;\r\n    width: 144px;\r\n    height: 144px;\r\n    opacity: 0;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, ".app-container {\r\n  margin-top: 30px;\r\n}\r\n.app-container__heading {\r\n  margin: 20px auto 40px auto;\r\n}\r\n.app-container section {\r\n  height: 100vh;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  min-height: 300px;\r\n}\r\n\r\n.app-container section:nth-child(even) {\r\n  background-color: #f1f1f1;\r\n  color: #333;\r\n}\r\n\r\n.app-container section:nth-child(odd) {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container section .card .card-body {\r\n  color: #333;\r\n}\r\n\r\n.app-container .card .card-img-top {\r\n  height: 160px;\r\n  object-fit: cover;\r\n}\r\n\r\n.app-container section .col-md-6 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@media all and (max-width: 767px) {\r\n  .app-container section .col-md-6 {\r\n    margin-bottom: 60px;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/lazy-load-images/styles.css"],"names":[],"mappings":"AACA;EACE,gBAAgB;AAClB;AACA;EACE,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE;IACE,mBAAmB;EACrB;AACF","sourcesContent":["@import './loaders.css';\r\n.app-container {\r\n  margin-top: 30px;\r\n}\r\n.app-container__heading {\r\n  margin: 20px auto 40px auto;\r\n}\r\n.app-container section {\r\n  height: 100vh;\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  min-height: 300px;\r\n}\r\n\r\n.app-container section:nth-child(even) {\r\n  background-color: #f1f1f1;\r\n  color: #333;\r\n}\r\n\r\n.app-container section:nth-child(odd) {\r\n  background-color: #333;\r\n  color: white;\r\n}\r\n\r\n.app-container section .card .card-body {\r\n  color: #333;\r\n}\r\n\r\n.app-container .card .card-img-top {\r\n  height: 160px;\r\n  object-fit: cover;\r\n}\r\n\r\n.app-container section .col-md-6 {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@media all and (max-width: 767px) {\r\n  .app-container section .col-md-6 {\r\n    margin-bottom: 60px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL3NyYy9sYXp5LWxvYWQtaW1hZ2VzL0NhcmRJdGVtLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvbG9hZGVycy5jc3MiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvc3R5bGVzLmNzcz80YjM0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mdW4td2l0aC1qcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Z1bi13aXRoLWpzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZnVuLXdpdGgtanMvLi9zcmMvbGF6eS1sb2FkLWltYWdlcy9zY3JpcHQuanMiXSwibmFtZXMiOlsiQ2FyZEl0ZW0iLCJpbmRleCIsImltYWdlQmFzZVNpemUiLCJpbWFnZUhlaWdodCIsImltYWdlV2lkdGgiLCJnZW5lcmF0ZUltYWdlcyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlY3Rpb25zIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW4iLCJsZW5ndGgiLCJzZWN0aW9uIiwiY29sdW1ucyIsInRhcmdldENvbHVtbiIsImlubmVySFRNTCIsImltYWdlTGF6eUxvYWRpbmdGYWxsYmFjayIsIkhUTUxJbWFnZUVsZW1lbnQiLCJwcm90b3R5cGUiLCJpbWFnZXMiLCJlbGVtZW50Iiwic3JjIiwiZGF0YXNldCIsIndpbmRvdyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZmlsdGVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm1hcCIsImltYWdlIiwidGFyZ2V0IiwiZGF0YVNyY1ZhbHVlIiwiZ2V0QXR0cmlidXRlIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNjcmlwdFRhZyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFDMUIsTUFBTUMsYUFBYSxHQUFHLEdBQXRCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHRCxhQUFhLEdBQUdELEtBQXBDO0FBQ0EsTUFBTUcsVUFBVSxHQUFHRixhQUFhLEdBQUdELEtBQW5DLENBSDBCLENBSTFCOztBQUNBLHFKQUl3Q0csVUFKeEMsY0FJc0RELFdBSnREO0FBa0JELENBdkJEOztBQXlCQSwrREFBZUgsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLHFFQUFxRSw0QkFBNEIseUJBQXlCLG1CQUFtQixvQkFBb0IsK0JBQStCLGtDQUFrQyxLQUFLLG9CQUFvQixnQkFBZ0IsaUJBQWlCLHlCQUF5QixrQkFBa0IsbUJBQW1CLDBCQUEwQiw2RUFBNkUsS0FBSyxvREFBb0QsbUJBQW1CLHlCQUF5QixxQkFBcUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsS0FBSywyQkFBMkIsa0JBQWtCLGlDQUFpQyxLQUFLLDBCQUEwQixpQkFBaUIsaUNBQWlDLEtBQUssMEJBQTBCLFVBQVUsK0JBQStCLE9BQU8sVUFBVSw4QkFBOEIsT0FBTyxXQUFXLCtCQUErQixPQUFPLFdBQVcsNEJBQTRCLE9BQU8sV0FBVywrQkFBK0IsT0FBTyxZQUFZLDhCQUE4QixPQUFPLEtBQUsscUNBQXFDLDRCQUE0Qix5QkFBeUIsbUJBQW1CLG9CQUFvQixLQUFLLG1CQUFtQix5QkFBeUIsa0JBQWtCLG1CQUFtQix5QkFBeUIsdUJBQXVCLCtDQUErQyxLQUFLLGdDQUFnQyxlQUFlLGdCQUFnQiwwQkFBMEIsS0FBSyxnQ0FBZ0MsZUFBZSxpQkFBaUIsNkJBQTZCLEtBQUssZ0NBQWdDLGVBQWUsaUJBQWlCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsZ0JBQWdCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsZ0JBQWdCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLDZCQUE2QixLQUFLLHlCQUF5QixxQkFBcUIsbUJBQW1CLE9BQU8sV0FBVyxxQkFBcUIsT0FBTyxLQUFLLHlDQUF5Qyw0QkFBNEIseUJBQXlCLG1CQUFtQixvQkFBb0IsS0FBSyxxQkFBcUIseUJBQXlCLGdDQUFnQyxpQkFBaUIseUJBQXlCLHFFQUFxRSxLQUFLLGtDQUFrQyw2QkFBNkIsS0FBSywyQkFBMkIsVUFBVSxrQkFBa0IsbUJBQW1CLGlCQUFpQixrQkFBa0IsbUJBQW1CLE9BQU8sWUFBWSxpQkFBaUIsa0JBQWtCLHFCQUFxQixzQkFBc0IsbUJBQW1CLE9BQU8sS0FBSyxXQUFXLHdHQUF3RyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxNQUFNLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLFdBQVcsS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxvREFBb0QsNEJBQTRCLHlCQUF5QixtQkFBbUIsb0JBQW9CLCtCQUErQixrQ0FBa0MsS0FBSyxvQkFBb0IsZ0JBQWdCLGlCQUFpQix5QkFBeUIsa0JBQWtCLG1CQUFtQiwwQkFBMEIsNkVBQTZFLEtBQUssb0RBQW9ELG1CQUFtQix5QkFBeUIscUJBQXFCLGtCQUFrQixtQkFBbUIsMEJBQTBCLEtBQUssMkJBQTJCLGtCQUFrQixpQ0FBaUMsS0FBSywwQkFBMEIsaUJBQWlCLGlDQUFpQyxLQUFLLDBCQUEwQixVQUFVLCtCQUErQixPQUFPLFVBQVUsOEJBQThCLE9BQU8sV0FBVywrQkFBK0IsT0FBTyxXQUFXLDRCQUE0QixPQUFPLFdBQVcsK0JBQStCLE9BQU8sWUFBWSw4QkFBOEIsT0FBTyxLQUFLLHFDQUFxQyw0QkFBNEIseUJBQXlCLG1CQUFtQixvQkFBb0IsS0FBSyxtQkFBbUIseUJBQXlCLGtCQUFrQixtQkFBbUIseUJBQXlCLHVCQUF1QiwrQ0FBK0MsS0FBSyxnQ0FBZ0MsZUFBZSxnQkFBZ0IsMEJBQTBCLEtBQUssZ0NBQWdDLGVBQWUsaUJBQWlCLDZCQUE2QixLQUFLLGdDQUFnQyxlQUFlLGlCQUFpQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGdCQUFnQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyxnQ0FBZ0MsZ0JBQWdCLGlCQUFpQiw2QkFBNkIsS0FBSyx5QkFBeUIscUJBQXFCLG1CQUFtQixPQUFPLFdBQVcscUJBQXFCLE9BQU8sS0FBSyx5Q0FBeUMsNEJBQTRCLHlCQUF5QixtQkFBbUIsb0JBQW9CLEtBQUsscUJBQXFCLHlCQUF5QixnQ0FBZ0MsaUJBQWlCLHlCQUF5QixxRUFBcUUsS0FBSyxrQ0FBa0MsNkJBQTZCLEtBQUssMkJBQTJCLFVBQVUsa0JBQWtCLG1CQUFtQixpQkFBaUIsa0JBQWtCLG1CQUFtQixPQUFPLFlBQVksaUJBQWlCLGtCQUFrQixxQkFBcUIsc0JBQXNCLG1CQUFtQixPQUFPLEtBQUssdUJBQXVCO0FBQ3o5TztBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUN5SDtBQUM3QjtBQUNjO0FBQzFHLDhCQUE4QixtRkFBMkIsQ0FBQyx3R0FBcUM7QUFDL0YsMEJBQTBCLHFGQUFpQztBQUMzRDtBQUNBLDBEQUEwRCx1QkFBdUIsS0FBSyw2QkFBNkIsa0NBQWtDLEtBQUssNEJBQTRCLG9CQUFvQixvQkFBb0Isb0JBQW9CLDZCQUE2Qiw4QkFBOEIsd0JBQXdCLEtBQUssZ0RBQWdELGdDQUFnQyxrQkFBa0IsS0FBSywrQ0FBK0MsNkJBQTZCLG1CQUFtQixLQUFLLGlEQUFpRCxrQkFBa0IsS0FBSyw0Q0FBNEMsb0JBQW9CLHdCQUF3QixLQUFLLDBDQUEwQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixLQUFLLDJDQUEyQyx3Q0FBd0MsNEJBQTRCLE9BQU8sS0FBSyxXQUFXLGtHQUFrRyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLEtBQUssWUFBWSxNQUFNLGlEQUFpRCxvQkFBb0IsdUJBQXVCLEtBQUssNkJBQTZCLGtDQUFrQyxLQUFLLDRCQUE0QixvQkFBb0Isb0JBQW9CLG9CQUFvQiw2QkFBNkIsOEJBQThCLHdCQUF3QixLQUFLLGdEQUFnRCxnQ0FBZ0Msa0JBQWtCLEtBQUssK0NBQStDLDZCQUE2QixtQkFBbUIsS0FBSyxpREFBaUQsa0JBQWtCLEtBQUssNENBQTRDLG9CQUFvQix3QkFBd0IsS0FBSywwQ0FBMEMsb0JBQW9CLDBCQUEwQiw4QkFBOEIsS0FBSywyQ0FBMkMsd0NBQXdDLDRCQUE0QixPQUFPLEtBQUssdUJBQXVCO0FBQzl5RTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsOEZBQThGLHdCQUF3QixlQUFlLGVBQWUsZ0JBQWdCLFlBQVksTUFBTSx3QkFBd0IsK0JBQStCLGFBQWEscUJBQXFCLG1DQUFtQyxFQUFFLEVBQUUsY0FBYyxXQUFXLFVBQVUsRUFBRSxVQUFVLE1BQU0saURBQWlELEVBQUUsVUFBVSxrQkFBa0IsRUFBRSxFQUFFLGFBQWE7O0FBRW5mLCtCQUErQixvQ0FBb0M7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsRTs7Ozs7Ozs7Ozs7Ozs7QUMvQjRGO0FBQzVGLFlBQTJGOztBQUUzRjs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyxvRkFBTzs7OztBQUl4QiwrREFBZSwyRkFBYyxNQUFNLEU7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7VUM1UUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsY0FBYywwQkFBMEIsRUFBRTtXQUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQSxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDM0IsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZ0JBQXZCLENBQWxCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHSCxTQUFTLENBQUNJLGdCQUFWLENBQTJCLFNBQTNCLENBQWpCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHSCxRQUFRLENBQUNJLE1BQS9CLEVBQXVDRixDQUFDLEdBQUdDLEdBQTNDLEVBQWdELEVBQUVELENBQWxELEVBQXFEO0FBQ25ELFFBQU1HLE9BQU8sR0FBR0wsUUFBUSxDQUFDRSxDQUFELENBQXhCO0FBQ0EsUUFBTUksT0FBTyxHQUFHRCxPQUFPLENBQUNKLGdCQUFSLENBQXlCLFdBQXpCLENBQWhCO0FBQ0EsUUFBTU0sWUFBWSxHQUFHTCxDQUFDLEdBQUcsQ0FBSixLQUFVLENBQVYsR0FBY0ksT0FBTyxDQUFDLENBQUQsQ0FBckIsR0FBMkJBLE9BQU8sQ0FBQyxDQUFELENBQXZEO0FBQ0FDLGdCQUFZLENBQUNDLFNBQWIsR0FBeUJqQixrREFBUSxDQUFDVyxDQUFELENBQWpDO0FBQ0Q7QUFDRixDQVREOztBQVdBLElBQU1PLHdCQUF3QixHQUFHLFNBQTNCQSx3QkFBMkIsR0FBTTtBQUNyQyxNQUFJLGFBQWFDLGdCQUFnQixDQUFDQyxTQUFsQyxFQUE2QztBQUMzQyxRQUFNQyxNQUFNLEdBQUdkLFFBQVEsQ0FBQ0csZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWY7O0FBQ0EsU0FBSyxJQUFJVCxLQUFLLEdBQUcsQ0FBakIsRUFBb0JBLEtBQUssR0FBR29CLE1BQU0sQ0FBQ1IsTUFBbkMsRUFBMkNaLEtBQUssRUFBaEQsRUFBb0Q7QUFDbEQsVUFBTXFCLE9BQU8sR0FBR0QsTUFBTSxDQUFDcEIsS0FBRCxDQUF0QjtBQUNBcUIsYUFBTyxDQUFDQyxHQUFSLEdBQWNELE9BQU8sQ0FBQ0UsT0FBUixDQUFnQkQsR0FBOUI7QUFDRDtBQUNGLEdBTkQsTUFNTyxJQUFJRSxNQUFNLENBQUNDLG9CQUFYLEVBQWlDO0FBQ3RDLFFBQU1DLFFBQVEsR0FBRyxJQUFJRCxvQkFBSixDQUF5QixVQUFDRSxPQUFELEVBQVVELFFBQVYsRUFBdUI7QUFDL0RDLGFBQU8sQ0FDSkMsTUFESCxDQUNVLFVBQUNDLEtBQUQ7QUFBQSxlQUFXQSxLQUFLLENBQUNDLGNBQWpCO0FBQUEsT0FEVixFQUVHQyxHQUZILENBRU8sVUFBQ0YsS0FBRCxFQUFXO0FBQ2QsWUFBTUcsS0FBSyxHQUFHSCxLQUFLLENBQUNJLE1BQXBCO0FBQ0EsWUFBTUMsWUFBWSxHQUFHRixLQUFLLENBQUNHLFlBQU4sQ0FBbUIsVUFBbkIsQ0FBckI7O0FBQ0EsWUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCO0FBQ0Q7O0FBQ0RGLGFBQUssQ0FBQ1YsR0FBTixHQUFZWSxZQUFaO0FBQ0FSLGdCQUFRLENBQUNVLFNBQVQsQ0FBbUJKLEtBQW5CO0FBQ0QsT0FWSDtBQVdELEtBWmdCLENBQWpCOztBQWNBLFFBQU1aLE9BQU0sR0FBR2QsUUFBUSxDQUFDRyxnQkFBVCxDQUEwQixlQUExQixDQUFmOztBQUNBLFNBQUssSUFBSVQsTUFBSyxHQUFHLENBQWpCLEVBQW9CQSxNQUFLLEdBQUdvQixPQUFNLENBQUNSLE1BQW5DLEVBQTJDWixNQUFLLEVBQWhELEVBQW9EO0FBQ2xELFVBQU1nQyxLQUFLLEdBQUdaLE9BQU0sQ0FBQ3BCLE1BQUQsQ0FBcEI7QUFDQTBCLGNBQVEsQ0FBQ1csT0FBVCxDQUFpQkwsS0FBakI7QUFDRDtBQUNGLEdBcEJNLE1Bb0JBO0FBQ0wsUUFBTU0sU0FBUyxHQUFHaEMsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixRQUF2QixDQUFsQjtBQUNBRCxhQUFTLENBQUNoQixHQUFWLEdBQWdCLHFEQUFoQjtBQUNBaEIsWUFBUSxDQUFDa0MsSUFBVCxDQUFjQyxXQUFkLENBQTBCSCxTQUExQjtBQUNBSSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7QUFDRixDQWpDRDs7QUFtQ0EsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUNqQkYsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDQXZDLGdCQUFjO0FBQ2RhLDBCQUF3QjtBQUN6QixDQUpEOztBQU1BMkIsSUFBSSxHIiwiZmlsZSI6ImxhenktbG9hZC1pbWFnZXMvbGF6eS1sb2FkLWltYWdlcy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBDYXJkSXRlbSA9IChpbmRleCkgPT4ge1xyXG4gIGNvbnN0IGltYWdlQmFzZVNpemUgPSAxMjA7XHJcbiAgY29uc3QgaW1hZ2VIZWlnaHQgPSBpbWFnZUJhc2VTaXplICsgaW5kZXg7XHJcbiAgY29uc3QgaW1hZ2VXaWR0aCA9IGltYWdlQmFzZVNpemUgKyBpbmRleDtcclxuICAvLyBXZSBjYW4gZXZlbiByZXR1cm4gYSBzdHJpbmcgYnVpbHQgdXNpbmcgYSB0ZW1wbGF0ZSBsaXRlcmFsXHJcbiAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgc3R5bGU9XCJ3aWR0aDogMThyZW1cIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICBkYXRhLXNyYz1cImh0dHBzOi8vcGljc3VtLnBob3Rvcy8ke2ltYWdlV2lkdGh9LyR7aW1hZ2VIZWlnaHR9XCJcclxuICAgICAgICBjbGFzcz1cImNhcmQtaW1nLXRvcCBsYXp5bG9hZFwiXHJcbiAgICAgICAgYWx0PVwiLi4uXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj5DYXJkIHRpdGxlPC9oNT5cclxuICAgICAgICA8cCBjbGFzcz1cImNhcmQtdGV4dFwiPlxyXG4gICAgICAgICAgU29tZSBxdWljayBleGFtcGxlIHRleHQgdG8gYnVpbGQgb24gdGhlIGNhcmQgdGl0bGUgYW5kIG1ha2UgdXBcclxuICAgICAgICAgIHRoZSBidWxrIG9mIHRoZSBjYXJkJ3MgY29udGVudC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYWhzYW5heWF6LmNvbVwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+QWhzYW5BeWF6LmNvbTwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZEl0ZW07XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogSEVBUlQgKi9cXHJcXG4ubGRzLWhlYXJ0IHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxNjBweDtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiA4MHB4IDgwcHg7XFxyXFxufVxcclxcbi5sZHMtaGVhcnQgZGl2IHtcXHJcXG4gIHRvcDogNjRweDtcXHJcXG4gIGxlZnQ6IDY0cHg7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMTk2YWU7XFxyXFxuICBhbmltYXRpb246IGxkcy1oZWFydCAxLjJzIGluZmluaXRlIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xcclxcbn1cXHJcXG4ubGRzLWhlYXJ0IGRpdjphZnRlcixcXHJcXG4ubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyAnO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB3aWR0aDogNjRweDtcXHJcXG4gIGhlaWdodDogNjRweDtcXHJcXG4gIGJhY2tncm91bmQ6ICNmMTk2YWU7XFxyXFxufVxcclxcbi5sZHMtaGVhcnQgZGl2OmJlZm9yZSB7XFxyXFxuICBsZWZ0OiAtNDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSAwIDAgNTAlO1xcclxcbn1cXHJcXG4ubGRzLWhlYXJ0IGRpdjphZnRlciB7XFxyXFxuICB0b3A6IC00OHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlIDUwJSAwIDA7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbGRzLWhlYXJ0IHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG4gIH1cXHJcXG4gIDUlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgfVxcclxcbiAgMzklIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXHJcXG4gIH1cXHJcXG4gIDQ1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxuICB9XFxyXFxuICA2MCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogR1JJRCAqL1xcclxcblxcclxcbi5sZHMtZ3JpZCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTIwcHg7XFxyXFxuICBoZWlnaHQ6IDEyMHB4O1xcclxcbn1cXHJcXG4ubGRzLWdyaWQgZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHdpZHRoOiAzMnB4O1xcclxcbiAgaGVpZ2h0OiAzMnB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYmFja2dyb3VuZDogI2NlZjtcXHJcXG4gIGFuaW1hdGlvbjogbGRzLWdyaWQgMS4ycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDEpIHtcXHJcXG4gIHRvcDogOHB4O1xcclxcbiAgbGVmdDogOHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwcztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgdG9wOiA4cHg7XFxyXFxuICBsZWZ0OiA0OHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoMykge1xcclxcbiAgdG9wOiA4cHg7XFxyXFxuICBsZWZ0OiA4OHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNCkge1xcclxcbiAgdG9wOiA0OHB4O1xcclxcbiAgbGVmdDogOHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNSkge1xcclxcbiAgdG9wOiA0OHB4O1xcclxcbiAgbGVmdDogNDhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDYpIHtcXHJcXG4gIHRvcDogNDhweDtcXHJcXG4gIGxlZnQ6IDg4cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xcclxcbn1cXHJcXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg3KSB7XFxyXFxuICB0b3A6IDg4cHg7XFxyXFxuICBsZWZ0OiA4cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcclxcbn1cXHJcXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg4KSB7XFxyXFxuICB0b3A6IDg4cHg7XFxyXFxuICBsZWZ0OiA0OHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoOSkge1xcclxcbiAgdG9wOiA4OHB4O1xcclxcbiAgbGVmdDogODhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuNnM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbGRzLWdyaWQge1xcclxcbiAgMCUsXFxyXFxuICAxMDAlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDUwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogUmlwcGxlICovXFxyXFxuXFxyXFxuLmxkcy1yaXBwbGUge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDE0NHB4O1xcclxcbiAgaGVpZ2h0OiAxNDRweDtcXHJcXG59XFxyXFxuLmxkcy1yaXBwbGUgZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlcjogOHB4IHNvbGlkICNmMTk2YWU7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYW5pbWF0aW9uOiBsZHMtcmlwcGxlIDFzIGN1YmljLWJlemllcigwLCAwLjIsIDAuOCwgMSkgaW5maW5pdGU7XFxyXFxufVxcclxcbi5sZHMtcmlwcGxlIGRpdjpudGgtY2hpbGQoMikge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcXHJcXG59XFxyXFxuQGtleWZyYW1lcyBsZHMtcmlwcGxlIHtcXHJcXG4gIDAlIHtcXHJcXG4gICAgdG9wOiA3MnB4O1xcclxcbiAgICBsZWZ0OiA3MnB4O1xcclxcbiAgICB3aWR0aDogMDtcXHJcXG4gICAgaGVpZ2h0OiAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgMTAwJSB7XFxyXFxuICAgIHRvcDogMHB4O1xcclxcbiAgICBsZWZ0OiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxNDRweDtcXHJcXG4gICAgaGVpZ2h0OiAxNDRweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvbG9hZGVycy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTtBQUNWO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLHdCQUF3QjtFQUN4QiwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHNFQUFzRTtBQUN4RTtBQUNBOztFQUVFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQSxTQUFTOztBQUVUO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHdDQUF3QztBQUMxQztBQUNBO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxRQUFRO0VBQ1IsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0U7O0lBRUUsVUFBVTtFQUNaO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsOERBQThEO0FBQ2hFO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFO0lBQ0UsU0FBUztJQUNULFVBQVU7SUFDVixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7RUFDWjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEhFQVJUICovXFxyXFxuLmxkcy1oZWFydCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB3aWR0aDogMTYwcHg7XFxyXFxuICBoZWlnaHQ6IDE2MHB4O1xcclxcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogODBweCA4MHB4O1xcclxcbn1cXHJcXG4ubGRzLWhlYXJ0IGRpdiB7XFxyXFxuICB0b3A6IDY0cHg7XFxyXFxuICBsZWZ0OiA2NHB4O1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjE5NmFlO1xcclxcbiAgYW5pbWF0aW9uOiBsZHMtaGVhcnQgMS4ycyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcXHJcXG59XFxyXFxuLmxkcy1oZWFydCBkaXY6YWZ0ZXIsXFxyXFxuLmxkcy1oZWFydCBkaXY6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcgJztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgd2lkdGg6IDY0cHg7XFxyXFxuICBoZWlnaHQ6IDY0cHg7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZjE5NmFlO1xcclxcbn1cXHJcXG4ubGRzLWhlYXJ0IGRpdjpiZWZvcmUge1xcclxcbiAgbGVmdDogLTQ4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCUgMCAwIDUwJTtcXHJcXG59XFxyXFxuLmxkcy1oZWFydCBkaXY6YWZ0ZXIge1xcclxcbiAgdG9wOiAtNDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxkcy1oZWFydCB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxyXFxuICB9XFxyXFxuICA1JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gIH1cXHJcXG4gIDM5JSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxyXFxuICB9XFxyXFxuICA0NSUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbiAgfVxcclxcbiAgNjAlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEdSSUQgKi9cXHJcXG5cXHJcXG4ubGRzLWdyaWQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEyMHB4O1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJhY2tncm91bmQ6ICNjZWY7XFxyXFxuICBhbmltYXRpb246IGxkcy1ncmlkIDEuMnMgbGluZWFyIGluZmluaXRlO1xcclxcbn1cXHJcXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCgxKSB7XFxyXFxuICB0b3A6IDhweDtcXHJcXG4gIGxlZnQ6IDhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMHM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIHRvcDogOHB4O1xcclxcbiAgbGVmdDogNDhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDMpIHtcXHJcXG4gIHRvcDogOHB4O1xcclxcbiAgbGVmdDogODhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDQpIHtcXHJcXG4gIHRvcDogNDhweDtcXHJcXG4gIGxlZnQ6IDhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNHM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDUpIHtcXHJcXG4gIHRvcDogNDhweDtcXHJcXG4gIGxlZnQ6IDQ4cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC0wLjhzO1xcclxcbn1cXHJcXG4ubGRzLWdyaWQgZGl2Om50aC1jaGlsZCg2KSB7XFxyXFxuICB0b3A6IDQ4cHg7XFxyXFxuICBsZWZ0OiA4OHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoNykge1xcclxcbiAgdG9wOiA4OHB4O1xcclxcbiAgbGVmdDogOHB4O1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcXHJcXG59XFxyXFxuLmxkcy1ncmlkIGRpdjpudGgtY2hpbGQoOCkge1xcclxcbiAgdG9wOiA4OHB4O1xcclxcbiAgbGVmdDogNDhweDtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTEuMnM7XFxyXFxufVxcclxcbi5sZHMtZ3JpZCBkaXY6bnRoLWNoaWxkKDkpIHtcXHJcXG4gIHRvcDogODhweDtcXHJcXG4gIGxlZnQ6IDg4cHg7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IC0xLjZzO1xcclxcbn1cXHJcXG5Aa2V5ZnJhbWVzIGxkcy1ncmlkIHtcXHJcXG4gIDAlLFxcclxcbiAgMTAwJSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuICA1MCUge1xcclxcbiAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIFJpcHBsZSAqL1xcclxcblxcclxcbi5sZHMtcmlwcGxlIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHdpZHRoOiAxNDRweDtcXHJcXG4gIGhlaWdodDogMTQ0cHg7XFxyXFxufVxcclxcbi5sZHMtcmlwcGxlIGRpdiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXI6IDhweCBzb2xpZCAjZjE5NmFlO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xcclxcbn1cXHJcXG4ubGRzLXJpcHBsZSBkaXY6bnRoLWNoaWxkKDIpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XFxyXFxufVxcclxcbkBrZXlmcmFtZXMgbGRzLXJpcHBsZSB7XFxyXFxuICAwJSB7XFxyXFxuICAgIHRvcDogNzJweDtcXHJcXG4gICAgbGVmdDogNzJweDtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0b3A6IDBweDtcXHJcXG4gICAgbGVmdDogMHB4O1xcclxcbiAgICB3aWR0aDogMTQ0cHg7XFxyXFxuICAgIGhlaWdodDogMTQ0cHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18gZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9sb2FkZXJzLmNzc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18uaShfX19DU1NfTE9BREVSX0FUX1JVTEVfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmFwcC1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMzBweDtcXHJcXG59XFxyXFxuLmFwcC1jb250YWluZXJfX2hlYWRpbmcge1xcclxcbiAgbWFyZ2luOiAyMHB4IGF1dG8gNDBweCBhdXRvO1xcclxcbn1cXHJcXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBwYWRkaW5nOiAzMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uOm50aC1jaGlsZChldmVuKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb246bnRoLWNoaWxkKG9kZCkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgc2VjdGlvbiAuY2FyZCAuY2FyZC1ib2R5IHtcXHJcXG4gIGNvbG9yOiAjMzMzO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciAuY2FyZCAuY2FyZC1pbWctdG9wIHtcXHJcXG4gIGhlaWdodDogMTYwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgc2VjdGlvbiAuY29sLW1kLTYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcXHJcXG4gIC5hcHAtY29udGFpbmVyIHNlY3Rpb24gLmNvbC1tZC02IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2xhenktbG9hZC1pbWFnZXMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL2xvYWRlcnMuY3NzJztcXHJcXG4uYXBwLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcclxcbn1cXHJcXG4uYXBwLWNvbnRhaW5lcl9faGVhZGluZyB7XFxyXFxuICBtYXJnaW46IDIwcHggYXV0byA0MHB4IGF1dG87XFxyXFxufVxcclxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIHBhZGRpbmc6IDMwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgbWluLWhlaWdodDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIHNlY3Rpb246bnRoLWNoaWxkKGV2ZW4pIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XFxyXFxuICBjb2xvcjogIzMzMztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcC1jb250YWluZXIgc2VjdGlvbjpudGgtY2hpbGQob2RkKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uIC5jYXJkIC5jYXJkLWJvZHkge1xcclxcbiAgY29sb3I6ICMzMzM7XFxyXFxufVxcclxcblxcclxcbi5hcHAtY29udGFpbmVyIC5jYXJkIC5jYXJkLWltZy10b3Age1xcclxcbiAgaGVpZ2h0OiAxNjBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYXBwLWNvbnRhaW5lciBzZWN0aW9uIC5jb2wtbWQtNiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcclxcbiAgLmFwcC1jb250YWluZXIgc2VjdGlvbiAuY29sLW1kLTYge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XHJcbmltcG9ydCBDYXJkSXRlbSBmcm9tICcuL0NhcmRJdGVtJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlSW1hZ2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hcHAtY29udGFpbmVyJyk7XHJcbiAgY29uc3Qgc2VjdGlvbnMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpO1xyXG4gIGZvciAobGV0IGkgPSAwLCBsZW4gPSBzZWN0aW9ucy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IHNlY3Rpb25zW2ldO1xyXG4gICAgY29uc3QgY29sdW1ucyA9IHNlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmNvbC1tZC02Jyk7XHJcbiAgICBjb25zdCB0YXJnZXRDb2x1bW4gPSBpICUgMiA9PT0gMCA/IGNvbHVtbnNbMV0gOiBjb2x1bW5zWzBdO1xyXG4gICAgdGFyZ2V0Q29sdW1uLmlubmVySFRNTCA9IENhcmRJdGVtKGkpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGltYWdlTGF6eUxvYWRpbmdGYWxsYmFjayA9ICgpID0+IHtcclxuICBpZiAoJ2xvYWRpbmcnIGluIEhUTUxJbWFnZUVsZW1lbnQucHJvdG90eXBlKSB7XHJcbiAgICBjb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbbG9hZGluZz1sYXp5XScpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGltYWdlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgY29uc3QgZWxlbWVudCA9IGltYWdlc1tpbmRleF07XHJcbiAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyYztcclxuICAgIH1cclxuICB9IGVsc2UgaWYgKHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlcikge1xyXG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XHJcbiAgICAgIGVudHJpZXNcclxuICAgICAgICAuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuaXNJbnRlcnNlY3RpbmcpXHJcbiAgICAgICAgLm1hcCgoZW50cnkpID0+IHtcclxuICAgICAgICAgIGNvbnN0IGltYWdlID0gZW50cnkudGFyZ2V0O1xyXG4gICAgICAgICAgY29uc3QgZGF0YVNyY1ZhbHVlID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xyXG4gICAgICAgICAgaWYgKCFkYXRhU3JjVmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaW1hZ2Uuc3JjID0gZGF0YVNyY1ZhbHVlO1xyXG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGltYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKTtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbWFnZXMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzW2luZGV4XTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNjcmlwdFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0VGFnLnNyYyA9ICdodHRwOi8vYWZhcmthcy5naXRodWIuaW8vbGF6eXNpemVzL2xhenlzaXplcy5taW4uanMnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHRUYWcpO1xyXG4gICAgY29uc29sZS5sb2coJ1dvcmtzIGluIElFMTEnKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBtYWluID0gKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdKUyBpcyBhd2Vzb21lIScpO1xyXG4gIGdlbmVyYXRlSW1hZ2VzKCk7XHJcbiAgaW1hZ2VMYXp5TG9hZGluZ0ZhbGxiYWNrKCk7XHJcbn07XHJcblxyXG5tYWluKCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=