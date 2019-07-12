webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/CorePrinciples/index.jsx":
/*!*********************************************!*\
  !*** ./components/CorePrinciples/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CorePrinciples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "./node_modules/react-scrollable-anchor/lib/index.js");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_corePrinciples__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/corePrinciples */ "./data/corePrinciples.json");
var _data_corePrinciples__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/corePrinciples */ "./data/corePrinciples.json", 1);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/CorePrinciples/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




function CorePrinciples() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: 'corePrinciples'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.CorePrinciples
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, "Core Principles"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.principleContainer
  }, _data_corePrinciples__WEBPACK_IMPORTED_MODULE_2__.map(function (principle, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.principle,
      key: principle.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: principle.icon
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, principle.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("caption", null, principle.text));
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.ed257d9ea51ecca0b797.hot-update.js.map