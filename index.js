!function(r){var n={};function t(_){if(n[_])return n[_].exports;var e=n[_]={i:_,l:!1,exports:{}};return r[_].call(e.exports,e,e.exports,t),e.l=!0,e.exports}t.m=r,t.c=n,t.d=function(_,e,r){t.o(_,e)||Object.defineProperty(_,e,{enumerable:!0,get:r})},t.r=function(_){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(_,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(_,"__esModule",{value:!0})},t.t=function(e,_){if(1&_&&(e=t(e)),8&_)return e;if(4&_&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&_&&"string"!=typeof e)for(var n in e)t.d(r,n,function(_){return e[_]}.bind(null,n));return r},t.n=function(_){var e=_&&_.__esModule?function(){return _.default}:function(){return _};return t.d(e,"a",e),e},t.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)},t.p="/",t(t.s="./server/index.js")}({"./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/App */ "./src/App.js");\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nconsole.log(\'inside server.js\');\napp.use(\'/static\', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, \'src/components\')));\napp.get(\'/\', function (req, res) {\n  var component = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_4__["default"], null));\n  res.send(component);\n});\napp.listen(3000, function () {\n  console.log(\'Server running on port 3000\');\n});\n/* WEBPACK VAR INJECTION */}.call(this, "/"))\n\n//# sourceURL=webpack:///./server/index.js?')},"./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_organisms_Hello__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/organisms/Hello */ "./src/components/organisms/Hello.js");\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_organisms_Hello__WEBPACK_IMPORTED_MODULE_1__["default"], {\n    name: "Dolly"\n  });\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (App);\n\n//# sourceURL=webpack:///./src/App.js?')},"./src/components/organisms/Hello.js":
/*!*******************************************!*\
  !*** ./src/components/organisms/Hello.js ***!
  \*******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar Hello = function Hello(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, ", props.name, "!"));\n};\n\n/* harmony default export */ __webpack_exports__["default"] = (Hello);\n\n//# sourceURL=webpack:///./src/components/organisms/Hello.js?')},express:
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */function(module,exports){eval('module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?')},path:
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */function(module,exports){eval('module.exports = require("path");\n\n//# sourceURL=webpack:///external_%22path%22?')},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(module,exports){eval('module.exports = require("react");\n\n//# sourceURL=webpack:///external_%22react%22?')},"react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */function(module,exports){eval('module.exports = require("react-dom/server");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?')}});