webpackHotUpdate("styles",{

/***/ "./components/CorePrinciples/styles.scss":
/*!***********************************************!*\
  !*** ./components/CorePrinciples/styles.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"CorePrinciples":"CorePrinciples___12xaa","principleContainer":"principleContainer___g83Vu","principle":"principle___3G38w","principleTitle":"principleTitle___JCiwc","imageContainer":"imageContainer___vgZrK","text":"text___3SxJx"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1562935141749");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.6e33fcca44550d0ffad4.hot-update.js.map