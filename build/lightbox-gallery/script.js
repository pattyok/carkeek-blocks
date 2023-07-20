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
  !*** ./src/lightbox-gallery/script.js ***!
  \****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  $(function () {
    if (typeof $().fancybox !== "undefined") {
      let titleAdded = false;
      let galleryTitle = '';
      $('[data-fancybox^="gallery-"]').fancybox({
        thumbs: {
          autoStart: true
        },
        beforeLoad: function (instance, slide) {
          //gets the data-title attribute of the parent gallery
          if (!titleAdded) {
            const gallery = slide.opts.fancybox;
            const $wrapper = $('#wrapper' + gallery);
            galleryTitle = $wrapper.data('title');

            if (typeof galleryTitle !== typeof undefined && galleryTitle !== false) {
              $('.fancybox-infobar').prepend('<div class="fancybox-gallery-title">' + galleryTitle + '</div>');
            }

            titleAdded = true;
          }
        },
        afterClose: function () {
          titleAdded = false;
        }
      });
    } // setup


    var sliderElem = $(".ck-blocks-gallery-grid.mobile-scroll"),
        sliderBool = false,
        sliderBreakpoint = 1023;

    function sliderInit() {
      if (window.innerWidth <= sliderBreakpoint && sliderElem.length > 0) {
        if (sliderBool == false) {
          sliderElem.each(function () {
            const slidesmobile = $(this).data('slidesmobile') ? $(this).data('slidesmobile') : 1;
            const scrollmobile = $(this).data('scrollmobile') ? $(this).data('scrollmobile') : 1;
            const slidestablet = $(this).data('slidestablet') ? $(this).data('slidestablet') : 3;
            const scrolltablet = $(this).data('scrolltablet') ? $(this).data('scrolltablet') : 1;
            const sliderSettings = {
              arrows: true,
              mobileFirst: true,
              slidesToShow: slidesmobile,
              slidesToScroll: scrollmobile,
              responsive: [{
                breakpoint: sliderBreakpoint,
                settings: "unslick"
              }, {
                breakpoint: 600,
                settings: {
                  slidesToShow: slidestablet,
                  slidesToScroll: scrolltablet
                }
              }]
            };
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
            }).slick(sliderSettings);
          });
          sliderBool = true;
        }
      } else {
        sliderBool = false;
      }
    }

    sliderInit(); // resize

    $(window).on('resize', function () {
      sliderInit();
    });
  });
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));
}();
/******/ })()
;
//# sourceMappingURL=script.js.map