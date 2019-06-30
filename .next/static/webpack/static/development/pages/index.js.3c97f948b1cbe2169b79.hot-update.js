webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/WorkBrick/index.jsx":
/*!****************************************!*\
  !*** ./components/WorkBrick/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Workbrick; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_Portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../data/Portfolio */ "./data/Portfolio.json");
var _data_Portfolio__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../data/Portfolio */ "./data/Portfolio.json", 1);
/* harmony import */ var _Button___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/ */ "./components/Button/index.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.scss */ "./components/WorkBrick/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_8__);










var Workbrick =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Workbrick, _React$Component);

  function Workbrick() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Workbrick);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Workbrick).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Workbrick, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.WorkBrickContainer
      }, _data_Portfolio__WEBPACK_IMPORTED_MODULE_6__.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.WorkBrick,
          key: item.id
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.imageContainer, " ").concat(item.background)
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.image,
          src: item.image,
          alt: item.name
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.text
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h3", null, item.title), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", null, item.summary), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.technology
        }, item.technology.map(function (tech, key) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
            className: _styles_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tech,
            key: tech.name
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            src: tech.image,
            alt: tech.name,
            title: tech.name
          }));
        })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button___WEBPACK_IMPORTED_MODULE_7__["default"], {
          classes: "".concat(item.background),
          text: "View Project"
        })));
      })));
    }
  }]);

  return Workbrick;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ })

})
//# sourceMappingURL=index.js.3c97f948b1cbe2169b79.hot-update.js.map