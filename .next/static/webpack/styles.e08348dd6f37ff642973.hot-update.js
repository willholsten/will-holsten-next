webpackHotUpdate("styles",{

/***/ "./components/WorkTile/styles.scss":
/*!*****************************************!*\
  !*** ./components/WorkTile/styles.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"WorkBrickContainer":"WorkBrickContainer___3WIUN","WorkBrick":"WorkBrick___1QzU1","text":"text___3nq2e","title":"title___LE-bf","imageContainer":"imageContainer___2_gFg","technology":"technology___1PH_w"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1562840244450");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e08348dd6f37ff642973.hot-update.js.map