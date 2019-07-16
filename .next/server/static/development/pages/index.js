module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About/index.jsx":
/*!************************************!*\
  !*** ./components/About/index.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return About; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/About/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);



function About() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: 'about'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.About
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "About Me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.text
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Profile,
    src: "../../static/images/profile.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.intro
  }, "Hey! I'm Will, a London-based front end developer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Originally from South Australia, I graduated from The University of Adelaide with a Bachelor of Design Studies and have since grown an interest in both UX design and front end development. Having now worked in both of these fields for a number of years, I have extensive experience working in multi-functional, agile team environments with a primary focus on eCommerce solutions."))));
}

/***/ }),

/***/ "./components/About/styles.scss":
/*!**************************************!*\
  !*** ./components/About/styles.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"About": "About___2wYa3",
	"title": "title___mGjbs",
	"Profile": "Profile___3TNwO",
	"text": "text___FydVn",
	"intro": "intro___6SKsj"
};

/***/ }),

/***/ "./components/BurgerMenu/index.jsx":
/*!*****************************************!*\
  !*** ./components/BurgerMenu/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BurgerMenu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/BurgerMenu/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var BurgerMenu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(BurgerMenu, _React$Component);

  function BurgerMenu() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BurgerMenu);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(BurgerMenu).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BurgerMenu, [{
    key: "render",
    value: function render(props) {
      var classes = this.props.classes;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.BurgerMenu, " ").concat(classes),
        onClick: this.props.handleToggleMenu
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null)));
    }
  }]);

  return BurgerMenu;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/BurgerMenu/styles.scss":
/*!*******************************************!*\
  !*** ./components/BurgerMenu/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"BurgerMenu": "BurgerMenu___2THnO"
};

/***/ }),

/***/ "./components/Button/index.jsx":
/*!*************************************!*\
  !*** ./components/Button/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/Button/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var Button =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Button, _React$Component);

  function Button() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Button);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Button).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Button, [{
    key: "render",
    value: function render(props) {
      var _this$props = this.props,
          classes = _this$props.classes,
          text = _this$props.text,
          link = _this$props.link;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: link
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Button, " ").concat(classes)
      }, text));
    }
  }]);

  return Button;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Button/styles.scss":
/*!***************************************!*\
  !*** ./components/Button/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Button": "Button___3r7Xx"
};

/***/ }),

/***/ "./components/CorePrinciples/index.jsx":
/*!*********************************************!*\
  !*** ./components/CorePrinciples/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CorePrinciples; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
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
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imageContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: principle.icon
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.principleTitle
    }, principle.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.text
    }, principle.text)));
  }))));
}

/***/ }),

/***/ "./components/CorePrinciples/styles.scss":
/*!***********************************************!*\
  !*** ./components/CorePrinciples/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"CorePrinciples": "CorePrinciples___12xaa",
	"principleContainer": "principleContainer___g83Vu",
	"principle": "principle___3G38w",
	"principleTitle": "principleTitle___JCiwc",
	"imageContainer": "imageContainer___vgZrK",
	"text": "text___3SxJx"
};

/***/ }),

/***/ "./components/Footer/index.jsx":
/*!*************************************!*\
  !*** ./components/Footer/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button/index.jsx");
/* harmony import */ var _FooterSocial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FooterSocial */ "./components/FooterSocial/index.jsx");
/* harmony import */ var _FooterAvailability__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../FooterAvailability */ "./components/FooterAvailability/index.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles.scss */ "./components/Footer/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_10__);












var Footer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _React$Component);

  function Footer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: 'contact'
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.Footer
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.imageOverlay
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.title
      }, "Let's Work Together"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_FooterAvailability__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
        classes: "emailLink tomato-bg whiteText",
        link: "mailto:mail@willholsten.com",
        text: "Let's Talk!"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_FooterSocial__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_10___default.a.copyright
      }, "Will Holsten Ltd. \xA9 All Rights Reserved.")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Footer/styles.scss":
/*!***************************************!*\
  !*** ./components/Footer/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Footer": "Footer___5GHZb",
	"imageOverlay": "imageOverlay___3SSze",
	"title": "title___1G3f7",
	"emailLink": "emailLink___EyKSn",
	"connect": "connect___1tkJh",
	"copyright": "copyright___22ax3"
};

/***/ }),

/***/ "./components/FooterAvailability/index.jsx":
/*!*************************************************!*\
  !*** ./components/FooterAvailability/index.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterAvailability; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/FooterAvailability/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var FooterAvailability =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FooterAvailability, _React$Component);

  function FooterAvailability() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterAvailability);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FooterAvailability).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterAvailability, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.availability
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.pulse
      }), "Not currently available for contract positions.", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.date
      }, "(Available early September)"));
    }
  }]);

  return FooterAvailability;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/FooterAvailability/styles.scss":
/*!***************************************************!*\
  !*** ./components/FooterAvailability/styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"availability": "availability___2nLiT",
	"pulse": "pulse___KZioH",
	"date": "date___8mKJq"
};

/***/ }),

/***/ "./components/FooterSocial/index.jsx":
/*!*******************************************!*\
  !*** ./components/FooterSocial/index.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSocial; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/FooterSocial/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var FooterSocial =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(FooterSocial, _React$Component);

  function FooterSocial() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FooterSocial);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(FooterSocial).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FooterSocial, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.connect
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://github.com/willholsten",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-github-square"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/willholsten/",
        target: "_blank"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("i", {
        className: "fab fa-linkedin"
      })));
    }
  }]);

  return FooterSocial;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/FooterSocial/styles.scss":
/*!*********************************************!*\
  !*** ./components/FooterSocial/styles.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"connect": "connect___1mhqN"
};

/***/ }),

/***/ "./components/Header/index.jsx":
/*!*************************************!*\
  !*** ./components/Header/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Logo */ "./components/Logo/index.jsx");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.jsx");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./components/Header/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);











var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      scrollTop: true
    };

    _this.listenScrollEvent = function (e) {
      if (window.scrollY > 40) {
        _this.setState({
          scrollTop: false
        });
      } else {
        _this.setState({
          scrollTop: true
        });
      }
    };

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.listenScrollEvent);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "\n      ".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.Header, "\n      ").concat(this.state.scrollTop ? '' : _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.scroll, "\n      ")
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Header/styles.scss":
/*!***************************************!*\
  !*** ./components/Header/styles.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Header": "Header___3_9BY",
	"scroll": "scroll___1olp7"
};

/***/ }),

/***/ "./components/Landing/index.jsx":
/*!**************************************!*\
  !*** ./components/Landing/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/ */ "./components/Button/index.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ "./components/Landing/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_2__);




var Landing = function Landing() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.Landing
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.gradientOverlay
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.imageOverlay
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.landingContent
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title
  }, "Will Holsten"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subTitle
  }, "Creative Front End Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button___WEBPACK_IMPORTED_MODULE_1__["default"], {
    classes: "landingButton white-bg",
    link: "#latest-work",
    text: "Latest Work"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./components/Landing/styles.scss":
/*!****************************************!*\
  !*** ./components/Landing/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Landing": "Landing___gc9g2",
	"gradientOverlay": "gradientOverlay___S8oHl",
	"imageOverlay": "imageOverlay___RxowA",
	"landingContent": "landingContent___2h6qx",
	"title": "title___2BL2e",
	"subTitle": "subTitle___34_up"
};

/***/ }),

/***/ "./components/Layout/index.jsx":
/*!*************************************!*\
  !*** ./components/Layout/index.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Header */ "./components/Header/index.jsx");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.jsx");










var Layout =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Layout, _React$Component);

  function Layout() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Layout);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Layout).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Layout, [{
    key: "render",
    value: function render(props) {
      var _this$props = this.props,
          children = _this$props.children,
          metaTitle = _this$props.metaTitle;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("title", {
        key: "MetaTitle"
      }, metaTitle), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        key: "MetaTitle.opengraph",
        property: "og:title",
        content: "Will Holsten"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        key: "MetaDescription",
        name: "description",
        content: "London-based Front End Developer specialising in React"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("meta", {
        key: "MetaKeywords",
        name: "keywords",
        content: "Will Holsten, London, Front End Development, React, Web Development, NW3"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        rel: "shortcut icon",
        type: "image/x-icon",
        href: "/static/favicon.ico"
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("link", {
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,500,700|Playfair+Display:400,700|Lora&display=swap",
        rel: "stylesheet"
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_7__["default"], null), children, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("script", {
        src: "https://kit.fontawesome.com/d54483515e.js"
      }));
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Logo/index.jsx":
/*!***********************************!*\
  !*** ./components/Logo/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ "./components/Logo/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_1__);


var Icon = function Icon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    transform: "translate(-979.767 -340.813)",
    fill: "#fff"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "11.461",
    height: "45.845",
    rx: "5.731",
    transform: "rotate(-20 1467.422 -2605.898)"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "11.461",
    height: "34.384",
    rx: "5.731",
    transform: "rotate(-20 1491.67 -2658.43)",
    opacity: ".75"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    width: "11.461",
    height: "22.922",
    rx: "5.731",
    transform: "rotate(-20 1515.916 -2710.96)",
    opacity: ".5"
  })));
};

Icon.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "57.467",
  height: "47",
  viewBox: "0 0 57.467 47"
};


var Logo = function Logo() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Logo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/styles.scss":
/*!*************************************!*\
  !*** ./components/Logo/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Menu/index.jsx":
/*!***********************************!*\
  !*** ./components/Menu/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _BurgerMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../BurgerMenu */ "./components/BurgerMenu/index.jsx");
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Navigation */ "./components/Navigation/index.jsx");











var Menu =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Menu, _React$Component);

  function Menu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Menu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Menu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleToggleMenu", function () {
      _this.setState({
        menuOpen: !_this.state.menuOpen
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleCloseMenu", function () {
      _this.setState({
        menuOpen: false
      });
    });

    _this.state = {
      menuOpen: false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Navigation__WEBPACK_IMPORTED_MODULE_9__["default"], {
        handleCloseMenu: function handleCloseMenu() {
          return _this2.handleCloseMenu();
        },
        classes: this.state.menuOpen ? 'open' : ''
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_BurgerMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
        classes: this.state.menuOpen ? 'invert' : '',
        handleToggleMenu: function handleToggleMenu() {
          return _this2.handleToggleMenu();
        }
      }));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);



/***/ }),

/***/ "./components/Navigation/index.jsx":
/*!*****************************************!*\
  !*** ./components/Navigation/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.scss */ "./components/Navigation/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_6__);








var Navigation =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Navigation, _React$Component);

  function Navigation() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          classes = _this$props.classes,
          handleCloseMenu = _this$props.handleCloseMenu;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.Navigation, " ").concat(classes)
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_6___default.a.NavigationContainer
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/#about",
        onClick: handleCloseMenu
      }, "About"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/#latest-work",
        onClick: handleCloseMenu
      }, "Latest Work"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/#tech-stack",
        onClick: handleCloseMenu
      }, "Tech Stack"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
        href: "/#contact",
        onClick: handleCloseMenu
      }, "Contact")));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ "./components/Navigation/styles.scss":
/*!*******************************************!*\
  !*** ./components/Navigation/styles.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Navigation": "Navigation___1Lw_H",
	"NavigationContainer": "NavigationContainer___2C8y4"
};

/***/ }),

/***/ "./components/TechStack/index.jsx":
/*!****************************************!*\
  !*** ./components/TechStack/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TechStack; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_technologies_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/technologies.json */ "./data/technologies.json");
var _data_technologies_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/technologies.json */ "./data/technologies.json", 1);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/TechStack/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




function TechStack() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: 'tech-stack'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.TechStack
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title
  }, "Tech Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.technologyContainer
  }, _data_technologies_json__WEBPACK_IMPORTED_MODULE_2__.map(function (tech, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.task,
      key: tech.name
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.technology
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.iconContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
      src: tech.icon
    })), tech.name)));
  }))));
}

/***/ }),

/***/ "./components/TechStack/styles.scss":
/*!******************************************!*\
  !*** ./components/TechStack/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"TechStack": "TechStack___3IDu7",
	"technologyContainer": "technologyContainer___1kBrn",
	"title": "title___171mu",
	"technology": "technology___3viWw",
	"iconContainer": "iconContainer___wOwMY"
};

/***/ }),

/***/ "./components/Work/index.jsx":
/*!***********************************!*\
  !*** ./components/Work/index.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Work; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WorkTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../WorkTile */ "./components/WorkTile/index.jsx");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ "./components/Work/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_3__);




function Work() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: 'latest-work'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3___default.a.Work
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Latest Work"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WorkTile__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}

/***/ }),

/***/ "./components/Work/styles.scss":
/*!*************************************!*\
  !*** ./components/Work/styles.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"Work": "Work___yAV6I"
};

/***/ }),

/***/ "./components/WorkTile/index.jsx":
/*!***************************************!*\
  !*** ./components/WorkTile/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkTile; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/values */ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Button___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button/ */ "./components/Button/index.jsx");
/* harmony import */ var _data_caseStudies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../data/caseStudies */ "./data/caseStudies.js");
/* harmony import */ var _data_caseStudies__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_data_caseStudies__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.scss */ "./components/WorkTile/styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_9__);











var WorkTile =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WorkTile, _React$Component);

  function WorkTile() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WorkTile);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WorkTile).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WorkTile, [{
    key: "render",
    value: function render() {
      var Portfolio = _babel_runtime_corejs2_core_js_object_values__WEBPACK_IMPORTED_MODULE_0___default()(_data_caseStudies__WEBPACK_IMPORTED_MODULE_8__);

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.WorkBrickContainer
      }, Portfolio.map(function (item, key) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.WorkBrick,
          key: item.slug
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "".concat(_styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.imageContainer, " ").concat(item.background)
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.image,
          src: item.image,
          alt: item.name
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.text
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h3", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.title
        }, item.title), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, item.summary), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
          className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.technology
        }, item.technology.map(function (tech, key) {
          return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
            className: _styles_scss__WEBPACK_IMPORTED_MODULE_9___default.a.tech,
            key: tech.id
          }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
            src: tech.icon,
            alt: tech.name,
            title: tech.name
          }));
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Button___WEBPACK_IMPORTED_MODULE_7__["default"], {
          link: item.slug,
          title: item.title,
          classes: item.background,
          background: item.background,
          text: "View Project"
        })));
      })));
    }
  }]);

  return WorkTile;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);



/***/ }),

/***/ "./components/WorkTile/styles.scss":
/*!*****************************************!*\
  !*** ./components/WorkTile/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"WorkBrickContainer": "WorkBrickContainer___3WIUN",
	"WorkBrick": "WorkBrick___1QzU1",
	"image": "image___Muxg3",
	"text": "text___3nq2e",
	"title": "title___LE-bf",
	"imageContainer": "imageContainer___2_gFg",
	"technology": "technology___1PH_w"
};

/***/ }),

/***/ "./data/caseStudies.js":
/*!*****************************!*\
  !*** ./data/caseStudies.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  weatherApp: __webpack_require__(/*! ./caseStudies/weather-app.json */ "./data/caseStudies/weather-app.json"),
  idMobile: __webpack_require__(/*! ./caseStudies/id-mobile.json */ "./data/caseStudies/id-mobile.json"),
  royalDerbyHotel: __webpack_require__(/*! ./caseStudies/royal-derby-hotel.json */ "./data/caseStudies/royal-derby-hotel.json"),
  theStolberg: __webpack_require__(/*! ./caseStudies/the-stolberg.json */ "./data/caseStudies/the-stolberg.json"),
  surfdome: __webpack_require__(/*! ./caseStudies/surfdome.json */ "./data/caseStudies/surfdome.json"),
  jizzDrinkingGame: __webpack_require__(/*! ./caseStudies/jizz-drinking-game.json */ "./data/caseStudies/jizz-drinking-game.json")
};

/***/ }),

/***/ "./data/caseStudies/id-mobile.json":
/*!*****************************************!*\
  !*** ./data/caseStudies/id-mobile.json ***!
  \*****************************************/
/*! exports provided: slug, title, url, image, imageDevices, background, summary, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"id-mobile","title":"iD Mobile","url":"https://www.idmobile.co.uk","image":"../static/images/id-mobile.png","imageDevices":"../static/images/id-mobile-devices.png","background":"green-bg","summary":"iD Mobile is a mobile virtual network operating in the United Kingdom.","brief":"Upgrade the iD Mobile basket and checkout journey with a secure and testable solution.","work":["Worked with designers to build a web solution based on their user journeys.","Consulted on UX best practises.","Built re-usable components using PHP Symfony framework.","Created a global style guide that can be used by future development.","Worked with Verifone - a third party payment API."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"Bootstrap","icon":"../static/vectors/technologies/bootstrap.svg"},{"id":4,"name":"jQuery","icon":"../static/vectors/technologies/jquery.svg"}]};

/***/ }),

/***/ "./data/caseStudies/jizz-drinking-game.json":
/*!**************************************************!*\
  !*** ./data/caseStudies/jizz-drinking-game.json ***!
  \**************************************************/
/*! exports provided: slug, title, image, imageDevices, background, summary, link, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"jizz-drinking-game","title":"Jizz The Drinking Game","image":"../static/images/jizz-the-drinking-game.png","imageDevices":"../static/images/jizz-the-drinking-game-devices.png","background":"purple-bg","summary":"The Jizz Drinking Game by Spencer & Fleetwood is a hilarious party game aimed at hen parties.","link":"https://www.jizzthegame.com","brief":"Design and develop a website to explain how to play the game and where to buy the product.","work":["Complete web design.","Development using React.","Made a video demonstrating how to play the game.","Domain and hosting management."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"JavaScript","icon":"../static/vectors/technologies/javascript.svg"}]};

/***/ }),

/***/ "./data/caseStudies/royal-derby-hotel.json":
/*!*************************************************!*\
  !*** ./data/caseStudies/royal-derby-hotel.json ***!
  \*************************************************/
/*! exports provided: slug, title, image, imageDevices, background, summary, link, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"royal-derby-hotel","title":"Royal Derby Hotel","image":"../static/images/royal-derby-hotel.png","imageDevices":"../static/images/royal-derby-hotel-devices.png","background":"red-bg","summary":"The Royal Derby is a sports bar and hotel in Fitzroy, Melbourne.","link":"https://www.idmobile.co.uk","brief":"Migrate a Wordpress website to then design and develop a mobile first site with scalable component based code.","work":["Complete web design.","Development using React.","Live sports guide via Game On Live Sports API.","Domain and hosting management.","Google Analytics integration.","Email subscription and contact form management."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"React","icon":"../static/vectors/technologies/react.svg"},{"id":4,"name":"javaScript","icon":"../static/vectors/technologies/javascript.svg"}]};

/***/ }),

/***/ "./data/caseStudies/surfdome.json":
/*!****************************************!*\
  !*** ./data/caseStudies/surfdome.json ***!
  \****************************************/
/*! exports provided: slug, title, image, imageDevices, background, summary, link, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"surfdome","title":"Surfdome","image":"../static/images/surfdome.png","imageDevices":"../static/images/surfdome-devices.png","background":"pink-bg","summary":"Surfdome is an online retailer specialising in surf, snow and skate apparel and hardware.","link":"https://www.surfdome.com","brief":"I was employed as a UX designer / front end developer at Surfdome for two years, some of the contributions I made are listed below.","work":["Working with multiple teams including tech, design, UX and trading to manage the front end of the website across 2 companies and 7 domains.","Designing and building HTML email newsletters to a target audience of over 1.2 million people.","Lead UX designer for complete website design overhaul. Working with the UX manager and tech team to produce homepage, PLP, PDP and basket & checkout design improvements.","Created A/B tests using Optimizely."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"jQuery","icon":"../static/vectors/technologies/jquery.svg"},{"id":4,"name":"Adobe CC","icon":"../static/vectors/technologies/adobe-cc.svg"}]};

/***/ }),

/***/ "./data/caseStudies/the-stolberg.json":
/*!********************************************!*\
  !*** ./data/caseStudies/the-stolberg.json ***!
  \********************************************/
/*! exports provided: slug, title, image, modalImage, imageDevices, background, summary, link, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"the-stolberg","title":"The Stolberg","image":"../static/images/stolberg.png","modalImage":"../images/modals/stolberg-modal.png","imageDevices":"../static/images/stolberg-devices.png","background":"light-blue-bg","summary":"The Stolberg is bar and event space in Preston, Melbourne.","link":"https://www.stolberg.com.au","brief":"Create a mobile first website so clientel can easily navigate to and book the various event spaces.","work":["Complete web design.","Complete web development.","Created booking services for the event hire rooms.","Photography optisation.","Domain and hosting management.","Google Analytics integration.","Email subscription and contact form management."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"JavaScript","icon":"../static/vectors/technologies/javascript.svg"},{"id":4,"name":"Adobe CC","icon":"../static/vectors/technologies/adobe-cc.svg"}]};

/***/ }),

/***/ "./data/caseStudies/weather-app.json":
/*!*******************************************!*\
  !*** ./data/caseStudies/weather-app.json ***!
  \*******************************************/
/*! exports provided: slug, title, url, image, imageDevices, background, summary, brief, work, technology, default */
/***/ (function(module) {

module.exports = {"slug":"weather-app","title":"Weather App","url":"https://wh-weather-app.netlify.com/","image":"../static/images/weather-app.png","imageDevices":"../static/images/weather-app-devices.png","background":"orange-bg","summary":"Personal weather app project.","brief":"A weather app that pulls in live and forecast weather with an image that matches the location.","work":["Custom web design and developed using React.","Current and forecast weather using Apixu Weather API.","Image matches the location using Unsplash Photos API.","Find weather by current location.","Find weahter by a search query which includes a list of relative search results."],"technology":[{"id":1,"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"id":2,"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"id":3,"name":"React","icon":"../static/vectors/technologies/react.svg"},{"id":4,"name":"JavaScript","icon":"../static/vectors/technologies/javascript.svg"}]};

/***/ }),

/***/ "./data/corePrinciples.json":
/*!**********************************!*\
  !*** ./data/corePrinciples.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = [{"title":"Eye for Design","text":"With a background in web design, I can help consult and proof designs before they go into development.","icon":"../static/vectors/eye.svg"},{"title":"Latest Technologies","text":"In this industry it's important to keep up with the latest technologies and I make that a priority.","icon":"../static/vectors/rocket.svg"},{"title":"Scalable for the Future","text":"There's nothing worse than a business being held up by poor development, I make sure all of my web solutions can scale with the business.","icon":"../static/vectors/growth.svg"}];

/***/ }),

/***/ "./data/technologies.json":
/*!********************************!*\
  !*** ./data/technologies.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, default */
/***/ (function(module) {

module.exports = [{"name":"Adobe CC","icon":"../static/vectors/technologies/adobe-cc.svg"},{"name":"Atlassian","icon":"../static/vectors/technologies/atlassian.svg"},{"name":"Babel","icon":"../static/vectors/technologies/babel.svg"},{"name":"Bootstrap","icon":"../static/vectors/technologies/bootstrap.svg"},{"name":"CSS3","icon":"../static/vectors/technologies/css.svg"},{"name":"Gatsby js","icon":"../static/vectors/technologies/gatsby.svg"},{"name":"Git","icon":"../static/vectors/technologies/git.svg"},{"name":"HTML5","icon":"../static/vectors/technologies/html.svg"},{"name":"JavaScript","icon":"../static/vectors/technologies/javascript.svg"},{"name":"Jest","icon":"../static/vectors/technologies/jest.svg"},{"name":"jQuery","icon":"../static/vectors/technologies/jquery.svg"},{"name":"Next js","icon":"../static/vectors/technologies/nextjs.svg"},{"name":"NPM","icon":"../static/vectors/technologies/npm.svg"},{"name":"React","icon":"../static/vectors/technologies/react.svg"},{"name":"Redux","icon":"../static/vectors/technologies/redux.svg"},{"name":"Sass","icon":"../static/vectors/technologies/sass.svg"},{"name":"Symfony","icon":"../static/vectors/technologies/symfony.svg"},{"name":"Webpack","icon":"../static/vectors/technologies/webpack.svg"}];

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/values.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/values.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/values */ "core-js/library/fn/object/values");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.jsx");
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Landing */ "./components/Landing/index.jsx");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/About */ "./components/About/index.jsx");
/* harmony import */ var _components_Work__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Work */ "./components/Work/index.jsx");
/* harmony import */ var _components_TechStack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TechStack */ "./components/TechStack/index.jsx");
/* harmony import */ var _components_CorePrinciples__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/CorePrinciples */ "./components/CorePrinciples/index.jsx");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-scrollable-anchor */ "react-scrollable-anchor");
/* harmony import */ var react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_12__);














var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      Object(react_scrollable_anchor__WEBPACK_IMPORTED_MODULE_12__["configureAnchors"])({
        offset: -50
      });
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
        metaTitle: "Will Holsten | Creative Front End Developer"
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Landing__WEBPACK_IMPORTED_MODULE_7__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_8__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_CorePrinciples__WEBPACK_IMPORTED_MODULE_11__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Work__WEBPACK_IMPORTED_MODULE_9__["default"], null), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_TechStack__WEBPACK_IMPORTED_MODULE_10__["default"], null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);



/***/ }),

/***/ 4:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/willholsten/Code/Projects/Will-Holsten-Next/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/values":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/values" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/values");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-scrollable-anchor":
/*!******************************************!*\
  !*** external "react-scrollable-anchor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollable-anchor");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map