/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["jQuery"];

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
/******/ 			// no module.id needed
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
  !*** ./src/extended-gallery/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  $(function () {
    $(".wp-block-carkeek-blocks-extended-gallery ul.slider-carousel").each(function () {
      //collect slider settings
      const autoPlay = $(this).data("autoplay");
      const speed = $(this).data("speed");
      const type = $(this).data("type");
      const slides = $(this).data("slides");
      const scroll = $(this).data("scroll");
      const slidesmobile = $(this).data("slidesmobile");
      const scrollmobile = $(this).data("scrollmobile");
      const slidestablet = $(this).data("slidestablet");
      const scrolltablet = $(this).data("scrolltablet");
      const fade = $(this).data("transition");
      const transSpeed = $(this).data("transitionspd");
      const dots = $(this).data("showdots");
      const options = {
        dots: dots,
        speed: transSpeed
      };

      if (true == autoPlay) {
        options.autoplay = true;
        options.autoplaySpeed = speed;
      }

      if (type == "carousel") {
        options.slidesToShow = slides;
        options.slidesToScroll = scroll;

        if (slides !== slidesmobile || slides !== slidesmobile) {
          options.responsive = [{
            breakpoint: 600,
            settings: {
              slidesToShow: slidesmobile,
              slidesToScroll: scrollmobile
            }
          }, {
            breakpoint: 1023,
            settings: {
              slidesToShow: slidestablet,
              slidesToScroll: scrolltablet
            }
          }];
        }
      }

      if (fade == 'fade') {
        options.fade = true;
        options.cssEase = 'linear';
      } //wrap each inner block in a div so as not to mess with the inner block styling


      $(this).children().each(function () {
        $(this).wrap('<div class="slide-' + type + '"></div>');
      });
      $(this).find("img").addClass("skip-lazy");

      if ($(this).hasClass("fix-height-true")) {
        const minHeight = $(this).data("minheight");
        const maxHeight = $(this).data("maxheight");
        $(this).find('img').css({
          minHeight: minHeight + 'px',
          maxHeight: maxHeight + 'px'
        });
      }

      $(this).on("init", function (e, slick) {
        // we remove the data-fancybox attribute from the cloned slides,
        // and add a data-trigger attribute with the same value,
        // and add a data-index attribute to indicate which slide to open
        slick.$slider.find(".slick-cloned a").each(function () {
          var $slide = $(this),
              trigger = $slide.attr("data-fancybox"),
              clonedIndex = parseInt($slide.attr("data-slick-index")),
              originalIndex = clonedIndex < 0 ? clonedIndex + slick.$slides.length : clonedIndex - slick.$slides.length;
          $slide.attr("data-index", originalIndex);
          $slide.attr("data-trigger", trigger);
          $slide.removeAttr("data-fancybox");
        });
      }).slick(options);
    });
  });
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
}();
/******/ })()
;
//# sourceMappingURL=script.js.map