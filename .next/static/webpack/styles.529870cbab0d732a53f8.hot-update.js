webpackHotUpdate("styles",{

/***/ "./components/WorkBrick/styles.scss":
/*!******************************************!*\
  !*** ./components/WorkBrick/styles.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"WorkBrickContainer":"WorkBrickContainer___1hHDW","WorkBrick":"WorkBrick___2s4RH","text":"text___3KLFj","image":"image___1jRz2","image-container":"image-container___35Ax1","technology":"technology___1FyD_"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1561642271674");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.529870cbab0d732a53f8.hot-update.js.map