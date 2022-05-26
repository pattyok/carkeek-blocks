/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/accordion/script.js":
/*!****************************************!*\
  !*** ./src/blocks/accordion/script.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/accordion/style.css");


/***/ }),

/***/ "./src/blocks/carkeek-slider/script.js":
/*!*********************************************!*\
  !*** ./src/blocks/carkeek-slider/script.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/blocks/carkeek-slider/style.css");



(function ($) {
  $(function () {
    $(".wp-block-carkeek-blocks-carkeek-slider .ck-carkeek-slider__slide-wrapper").each(function () {
      //collect slider settings
      var autoPlay = $(this).data("autoplay");
      var speed = $(this).data("speed");
      var type = $(this).data("type");
      var slides = $(this).data("slides");
      var scroll = $(this).data("scroll");
      var slidesMobile = $(this).data("slidesmobile");
      var scrollMobile = $(this).data("scrollmobile");
      var fade = $(this).data("transition");
      var transSpeed = $(this).data("transitionspd");
      var dots = $(this).data("showdots");
      var arrows = $(this).data("arrows");
      var options = {
        dots: dots,
        speed: transSpeed
      };

      if (true == autoPlay) {
        options.autoplay = true;
        options.autoplaySpeed = speed;
      }

      var showArrowsMobile = true;

      if ('hide' == arrows) {
        options.arrows = false;
        showArrowsMobile = false;
      } else if ('desktop-only' == arrows) {
        showArrowsMobile = false;
      }

      if (type == "carousel") {
        options.slidesToShow = slides;
        options.slidesToScroll = scroll;

        if (slides > slidesMobile) {
          options.responsive = [{
            breakpoint: 600,
            settings: {
              arrows: showArrowsMobile,
              slidesToShow: slidesMobile,
              slidesToScroll: scrollMobile
            }
          }];
        }
      } else {
        options.responsive = [{
          breakpoint: 600,
          settings: {
            arrows: showArrowsMobile
          }
        }];
      }

      if (fade == 'fade') {
        options.fade = true;
        options.cssEase = 'linear';
      } //wrap each inner block in a div so as not to mess with the inner block styling


      $(this).children().each(function () {
        $(this).wrap('<div class="slide-' + type + '"></div>');
      });
      $(this).find("img").addClass("skip-lazy");
      $(this).slick(options);
    });
  });
})((jquery__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }),

/***/ "./src/blocks/custom-archive/script.js":
/*!*********************************************!*\
  !*** ./src/blocks/custom-archive/script.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/custom-archive/style.css");


/***/ }),

/***/ "./src/blocks/extended-gallery/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/extended-gallery/script.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/blocks/extended-gallery/style.css");



(function ($) {
  $(document).ready(function () {
    $(".wp-block-carkeek-blocks-extended-gallery ul.slider-carousel").each(function () {
      //collect slider settings
      var autoPlay = $(this).data("autoplay");
      var speed = $(this).data("speed");
      var type = $(this).data("type");
      var slides = $(this).data("slides");
      var scroll = $(this).data("scroll");
      var slidesmobile = $(this).data("slidesmobile");
      var scrollmobile = $(this).data("scrollmobile");
      var slidestablet = $(this).data("slidestablet");
      var scrolltablet = $(this).data("scrolltablet");
      var fade = $(this).data("transition");
      var transSpeed = $(this).data("transitionspd");
      var dots = $(this).data("showdots");
      var options = {
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
        var minHeight = $(this).data("minheight");
        var maxHeight = $(this).data("maxheight");
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

/***/ }),

/***/ "./src/blocks/featured-image/script.js":
/*!*********************************************!*\
  !*** ./src/blocks/featured-image/script.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/featured-image/style.css");


/***/ }),

/***/ "./src/blocks/fixed-image/script.js":
/*!******************************************!*\
  !*** ./src/blocks/fixed-image/script.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/fixed-image/style.css");


/***/ }),

/***/ "./src/blocks/lightbox-gallery/script.js":
/*!***********************************************!*\
  !*** ./src/blocks/lightbox-gallery/script.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



(function ($) {
  $(function () {
    if (typeof $().fancybox !== "undefined") {
      var titleAdded = false;
      var galleryTitle = '';
      $('[data-fancybox^="gallery-"]').fancybox({
        thumbs: {
          autoStart: true
        },
        beforeLoad: function beforeLoad(instance, slide) {
          //gets the data-title attribute of the parent gallery
          if (!titleAdded) {
            var gallery = slide.opts.fancybox;
            var $wrapper = $('#wrapper' + gallery);
            galleryTitle = $wrapper.data('title');

            if (_typeof(galleryTitle) !== ( true ? "undefined" : 0) && galleryTitle !== false) {
              $('.fancybox-infobar').prepend('<div class="fancybox-gallery-title">' + galleryTitle + '</div>');
            }

            titleAdded = true;
          }
        },
        afterClose: function afterClose() {
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
            var slidesmobile = $(this).data('slidesmobile') ? $(this).data('slidesmobile') : 1;
            var scrollmobile = $(this).data('scrollmobile') ? $(this).data('scrollmobile') : 1;
            var slidestablet = $(this).data('slidestablet') ? $(this).data('slidestablet') : 3;
            var scrolltablet = $(this).data('scrolltablet') ? $(this).data('scrolltablet') : 1;
            var sliderSettings = {
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

/***/ }),

/***/ "./src/blocks/modal-item/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/modal-item/script.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/modal-item/style.css");

var modals = document.querySelectorAll('.wp-block-carkeek-blocks-modal-item.has-image');
modals.forEach(function (modal) {
  var image = modal.querySelector('.ck-modal-item-image');

  if (image) {
    var clone = image.cloneNode(true);
    modal.querySelector('.modal-body').prepend(clone);
  }
});

/***/ }),

/***/ "./src/blocks/taxonomy-archive-links/script.js":
/*!*****************************************************!*\
  !*** ./src/blocks/taxonomy-archive-links/script.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/blocks/taxonomy-archive-links/style.css");


/***/ }),

/***/ "./src/blocks/widget-row/script.js":
/*!*****************************************!*\
  !*** ./src/blocks/widget-row/script.js ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./src/blocks/accordion/style.css":
/*!****************************************!*\
  !*** ./src/blocks/accordion/style.css ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/carkeek-slider/style.css":
/*!*********************************************!*\
  !*** ./src/blocks/carkeek-slider/style.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/custom-archive/style.css":
/*!*********************************************!*\
  !*** ./src/blocks/custom-archive/style.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/extended-gallery/style.css":
/*!***********************************************!*\
  !*** ./src/blocks/extended-gallery/style.css ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/featured-image/style.css":
/*!*********************************************!*\
  !*** ./src/blocks/featured-image/style.css ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/fixed-image/style.css":
/*!******************************************!*\
  !*** ./src/blocks/fixed-image/style.css ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/modal-item/style.css":
/*!*****************************************!*\
  !*** ./src/blocks/modal-item/style.css ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/taxonomy-archive-links/style.css":
/*!*****************************************************!*\
  !*** ./src/blocks/taxonomy-archive-links/style.css ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/resources/global.css":
/*!**********************************!*\
  !*** ./src/resources/global.css ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = jQuery;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./resources/global.css */ "./src/resources/global.css");
/* harmony import */ var _blocks_modal_item_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/modal-item/script */ "./src/blocks/modal-item/script.js");
/* harmony import */ var _blocks_fixed_image_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/fixed-image/script */ "./src/blocks/fixed-image/script.js");
/* harmony import */ var _blocks_accordion_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/accordion/script */ "./src/blocks/accordion/script.js");
/* harmony import */ var _blocks_custom_archive_script__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/custom-archive/script */ "./src/blocks/custom-archive/script.js");
/* harmony import */ var _blocks_widget_row_script__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/widget-row/script */ "./src/blocks/widget-row/script.js");
/* harmony import */ var _blocks_widget_row_script__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_widget_row_script__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_carkeek_slider_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/carkeek-slider/script */ "./src/blocks/carkeek-slider/script.js");
/* harmony import */ var _blocks_lightbox_gallery_script__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/lightbox-gallery/script */ "./src/blocks/lightbox-gallery/script.js");
/* harmony import */ var _blocks_extended_gallery_script__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/extended-gallery/script */ "./src/blocks/extended-gallery/script.js");
/* harmony import */ var _blocks_featured_image_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/featured-image/script */ "./src/blocks/featured-image/script.js");
/* harmony import */ var _blocks_taxonomy_archive_links_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/taxonomy-archive-links/script */ "./src/blocks/taxonomy-archive-links/script.js");











}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9ibG9ja3MvY2Fya2Vlay1zbGlkZXIvc2NyaXB0LmpzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL2Jsb2Nrcy9leHRlbmRlZC1nYWxsZXJ5L3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9ibG9ja3MvbGlnaHRib3gtZ2FsbGVyeS9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvLi9zcmMvYmxvY2tzL21vZGFsLWl0ZW0vc2NyaXB0LmpzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL2Jsb2Nrcy9hY2NvcmRpb24vc3R5bGUuY3NzP2QwODUiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvLi9zcmMvYmxvY2tzL2NhcmtlZWstc2xpZGVyL3N0eWxlLmNzcz9lZjZkIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL2Jsb2Nrcy9jdXN0b20tYXJjaGl2ZS9zdHlsZS5jc3M/YmY4NCIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9ibG9ja3MvZXh0ZW5kZWQtZ2FsbGVyeS9zdHlsZS5jc3M/NWFjMyIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9ibG9ja3MvZmVhdHVyZWQtaW1hZ2Uvc3R5bGUuY3NzPzYyNGIiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvLi9zcmMvYmxvY2tzL2ZpeGVkLWltYWdlL3N0eWxlLmNzcz8wZTAxIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL2Jsb2Nrcy9tb2RhbC1pdGVtL3N0eWxlLmNzcz85ZTBmIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL2Jsb2Nrcy90YXhvbm9teS1hcmNoaXZlLWxpbmtzL3N0eWxlLmNzcz80ZmUyIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL3Jlc291cmNlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL2V4dGVybmFsIFwialF1ZXJ5XCIiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9zY3JpcHQuanMiXSwibmFtZXMiOlsiJCIsImVhY2giLCJhdXRvUGxheSIsImRhdGEiLCJzcGVlZCIsInR5cGUiLCJzbGlkZXMiLCJzY3JvbGwiLCJzbGlkZXNNb2JpbGUiLCJzY3JvbGxNb2JpbGUiLCJmYWRlIiwidHJhbnNTcGVlZCIsImRvdHMiLCJhcnJvd3MiLCJvcHRpb25zIiwiYXV0b3BsYXkiLCJhdXRvcGxheVNwZWVkIiwic2hvd0Fycm93c01vYmlsZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImNzc0Vhc2UiLCJjaGlsZHJlbiIsIndyYXAiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJzbGlkZXNtb2JpbGUiLCJzY3JvbGxtb2JpbGUiLCJzbGlkZXN0YWJsZXQiLCJzY3JvbGx0YWJsZXQiLCJoYXNDbGFzcyIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImNzcyIsIm9uIiwiZSIsIiRzbGlkZXIiLCIkc2xpZGUiLCJ0cmlnZ2VyIiwiYXR0ciIsImNsb25lZEluZGV4IiwicGFyc2VJbnQiLCJvcmlnaW5hbEluZGV4IiwiJHNsaWRlcyIsImxlbmd0aCIsInJlbW92ZUF0dHIiLCJmYW5jeWJveCIsInRpdGxlQWRkZWQiLCJnYWxsZXJ5VGl0bGUiLCJ0aHVtYnMiLCJhdXRvU3RhcnQiLCJiZWZvcmVMb2FkIiwiaW5zdGFuY2UiLCJzbGlkZSIsImdhbGxlcnkiLCJvcHRzIiwiJHdyYXBwZXIiLCJwcmVwZW5kIiwiYWZ0ZXJDbG9zZSIsInNsaWRlckVsZW0iLCJzbGlkZXJCb29sIiwic2xpZGVyQnJlYWtwb2ludCIsInNsaWRlckluaXQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2xpZGVyU2V0dGluZ3MiLCJtb2JpbGVGaXJzdCIsIm1vZGFscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibW9kYWwiLCJpbWFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbG9uZSIsImNsb25lTm9kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNUQSxHQUFDLENBQUMsWUFBVTtBQUNSQSxLQUFDLENBQUMsMkVBQUQsQ0FBRCxDQUErRUMsSUFBL0UsQ0FBb0YsWUFBVztBQUMzRjtBQUNBLFVBQU1DLFFBQVEsR0FBR0YsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsVUFBYixDQUFqQjtBQUNBLFVBQU1DLEtBQUssR0FBR0osQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsT0FBYixDQUFkO0FBQ0EsVUFBTUUsSUFBSSxHQUFHTCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFHLElBQVIsQ0FBYSxNQUFiLENBQWI7QUFDQSxVQUFNRyxNQUFNLEdBQUdOLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUcsSUFBUixDQUFhLFFBQWIsQ0FBZjtBQUNBLFVBQU1JLE1BQU0sR0FBR1AsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRRyxJQUFSLENBQWEsUUFBYixD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QUMxQyxjQUFjLGVBQWU7V0FDN0IsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG4oZnVuY3Rpb24oJCkge1xuICAgICQoZnVuY3Rpb24oKXtcbiAgICAgICAgJChcIi53cC1ibG9jay1jYXJrZWVrLWJsb2Nrcy1jYXJrZWVrLXNsaWRlciAuY2stY2Fya2Vlay1zbGlkZXJfX3NsaWRlLXdyYXBwZXJcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vY29sbGVjdCBzbGlkZXIgc2V0dGluZ3NcbiAgICAgICAgICAgIGNvbnN0IGF1dG9QbGF5ID0gJCh0aGlzKS5kYXRhKFwiYXV0b3BsYXlcIik7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9ICQodGhpcykuZGF0YShcInNwZWVkXCIpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuZGF0YShcInR5cGVcIik7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXMgPSAkKHRoaXMpLmRhdGEoXCJzbGlkZXNcIik7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGwgPSAkKHRoaXMpLmRhdGEoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXNNb2JpbGUgPSAkKHRoaXMpLmRhdGEoXCJzbGlkZXNtb2JpbGVcIik7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxNb2JpbGUgPSAkKHRoaXMpLmRhdGEoXCJzY3JvbGxtb2JpbGVcIik7XG4gICAgICAgICAgICBjb25zdCBmYWRlID0gJCh0aGlzKS5kYXRhKFwidHJhbnNpdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zU3BlZWQgPSAkKHRoaXMpLmRhdGEoXCJ0cmFuc2l0aW9uc3BkXCIpO1xuICAgICAgICAgICAgY29uc3QgZG90cyA9ICQodGhpcykuZGF0YShcInNob3dkb3RzXCIpO1xuICAgICAgICAgICAgY29uc3QgYXJyb3dzID0gJCh0aGlzKS5kYXRhKFwiYXJyb3dzXCIpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB0cmFuc1NwZWVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0cnVlID09IGF1dG9QbGF5KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRvcGxheVNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2hvd0Fycm93c01vYmlsZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoICdoaWRlJyA9PSBhcnJvd3MgKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hcnJvd3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzaG93QXJyb3dzTW9iaWxlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCAnZGVza3RvcC1vbmx5JyA9PSBhcnJvd3MgKSB7XG4gICAgICAgICAgICAgICAgc2hvd0Fycm93c01vYmlsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gXCJjYXJvdXNlbFwiKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zbGlkZXNUb1Nob3cgPSBzbGlkZXM7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IHNjcm9sbDtcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzID4gc2xpZGVzTW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucmVzcG9uc2l2ZSA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFycm93czogc2hvd0Fycm93c01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc01vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogc2Nyb2xsTW9iaWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBbe1xuICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IHNob3dBcnJvd3NNb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmFkZSA9PSAnZmFkZScpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmZhZGUgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgb3B0aW9ucy5jc3NFYXNlID0gJ2xpbmVhcic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3dyYXAgZWFjaCBpbm5lciBibG9jayBpbiBhIGRpdiBzbyBhcyBub3QgdG8gbWVzcyB3aXRoIHRoZSBpbm5lciBibG9jayBzdHlsaW5nXG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgICAgICAuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS53cmFwKCc8ZGl2IGNsYXNzPVwic2xpZGUtJyArIHR5cGUgKyAnXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKHRoaXMpXG4gICAgICAgICAgICAgICAgLmZpbmQoXCJpbWdcIilcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoXCJza2lwLWxhenlcIik7XG4gICAgICAgICAgICAkKHRoaXMpLnNsaWNrKG9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xufSkoalF1ZXJ5KTsiLCJpbXBvcnQgalF1ZXJ5IGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbihmdW5jdGlvbigkKSB7XG4gICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIud3AtYmxvY2stY2Fya2Vlay1ibG9ja3MtZXh0ZW5kZWQtZ2FsbGVyeSB1bC5zbGlkZXItY2Fyb3VzZWxcIikuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vY29sbGVjdCBzbGlkZXIgc2V0dGluZ3NcbiAgICAgICAgICAgIGNvbnN0IGF1dG9QbGF5ID0gJCh0aGlzKS5kYXRhKFwiYXV0b3BsYXlcIik7XG4gICAgICAgICAgICBjb25zdCBzcGVlZCA9ICQodGhpcykuZGF0YShcInNwZWVkXCIpO1xuICAgICAgICAgICAgY29uc3QgdHlwZSA9ICQodGhpcykuZGF0YShcInR5cGVcIik7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXMgPSAkKHRoaXMpLmRhdGEoXCJzbGlkZXNcIik7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGwgPSAkKHRoaXMpLmRhdGEoXCJzY3JvbGxcIik7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXNtb2JpbGUgPSAkKHRoaXMpLmRhdGEoXCJzbGlkZXNtb2JpbGVcIik7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxtb2JpbGUgPSAkKHRoaXMpLmRhdGEoXCJzY3JvbGxtb2JpbGVcIik7XG4gICAgICAgICAgICBjb25zdCBzbGlkZXN0YWJsZXQgPSAkKHRoaXMpLmRhdGEoXCJzbGlkZXN0YWJsZXRcIik7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGx0YWJsZXQgPSAkKHRoaXMpLmRhdGEoXCJzY3JvbGx0YWJsZXRcIik7XG4gICAgICAgICAgICBjb25zdCBmYWRlID0gJCh0aGlzKS5kYXRhKFwidHJhbnNpdGlvblwiKTtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zU3BlZWQgPSAkKHRoaXMpLmRhdGEoXCJ0cmFuc2l0aW9uc3BkXCIpO1xuICAgICAgICAgICAgY29uc3QgZG90cyA9ICQodGhpcykuZGF0YShcInNob3dkb3RzXCIpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICBkb3RzOiBkb3RzLFxuICAgICAgICAgICAgICAgIHNwZWVkOiB0cmFuc1NwZWVkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICh0cnVlID09IGF1dG9QbGF5KSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRvcGxheSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hdXRvcGxheVNwZWVkID0gc3BlZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSA9PSBcImNhcm91c2VsXCIpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNsaWRlc1RvU2hvdyA9IHNsaWRlcztcbiAgICAgICAgICAgICAgICBvcHRpb25zLnNsaWRlc1RvU2Nyb2xsID0gc2Nyb2xsO1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZXMgIT09IHNsaWRlc21vYmlsZSB8fCBzbGlkZXMgIT09IHNsaWRlc21vYmlsZSkge1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnJlc3BvbnNpdmUgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc21vYmlsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogc2Nyb2xsbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDIzLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IHNsaWRlc3RhYmxldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogc2Nyb2xsdGFibGV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChmYWRlID09ICdmYWRlJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmFkZSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBvcHRpb25zLmNzc0Vhc2UgPSAnbGluZWFyJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vd3JhcCBlYWNoIGlubmVyIGJsb2NrIGluIGEgZGl2IHNvIGFzIG5vdCB0byBtZXNzIHdpdGggdGhlIGlubmVyIGJsb2NrIHN0eWxpbmdcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuY2hpbGRyZW4oKVxuICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLndyYXAoJzxkaXYgY2xhc3M9XCJzbGlkZS0nICsgdHlwZSArICdcIj48L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgICAgICAuZmluZChcImltZ1wiKVxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcyhcInNraXAtbGF6eVwiKTtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKFwiZml4LWhlaWdodC10cnVlXCIpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWluSGVpZ2h0ID0gJCh0aGlzKS5kYXRhKFwibWluaGVpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heEhlaWdodCA9ICQodGhpcykuZGF0YShcIm1heGhlaWdodFwiKTtcblxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnaW1nJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBtaW5IZWlnaHQgKyAncHgnLFxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IG1heEhlaWdodCArICdweCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQodGhpcykub24oXCJpbml0XCIsIGZ1bmN0aW9uKGUsIHNsaWNrKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgcmVtb3ZlIHRoZSBkYXRhLWZhbmN5Ym94IGF0dHJpYnV0ZSBmcm9tIHRoZSBjbG9uZWQgc2xpZGVzLFxuICAgICAgICAgICAgICAgIC8vIGFuZCBhZGQgYSBkYXRhLXRyaWdnZXIgYXR0cmlidXRlIHdpdGggdGhlIHNhbWUgdmFsdWUsXG4gICAgICAgICAgICAgICAgLy8gYW5kIGFkZCBhIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvIGluZGljYXRlIHdoaWNoIHNsaWRlIHRvIG9wZW5cbiAgICAgICAgICAgICAgICBzbGljay4kc2xpZGVyXG4gICAgICAgICAgICAgICAgICAuZmluZChcIi5zbGljay1jbG9uZWQgYVwiKVxuICAgICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciAkc2xpZGUgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlciA9ICRzbGlkZS5hdHRyKFwiZGF0YS1mYW5jeWJveFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRJbmRleCA9IHBhcnNlSW50KCRzbGlkZS5hdHRyKFwiZGF0YS1zbGljay1pbmRleFwiKSksXG4gICAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWxJbmRleCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZWRJbmRleCA8IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjbG9uZWRJbmRleCArIHNsaWNrLiRzbGlkZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogY2xvbmVkSW5kZXggLSBzbGljay4kc2xpZGVzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgJHNsaWRlLmF0dHIoXCJkYXRhLWluZGV4XCIsIG9yaWdpbmFsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAkc2xpZGUuYXR0cihcImRhdGEtdHJpZ2dlclwiLCB0cmlnZ2VyKTtcbiAgICAgICAgICAgICAgICAgICAgJHNsaWRlLnJlbW92ZUF0dHIoXCJkYXRhLWZhbmN5Ym94XCIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0pLnNsaWNrKG9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgIH0pO1xufSkoalF1ZXJ5KTtcbiIsImltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5JztcblxuKGZ1bmN0aW9uKCQpIHtcblxuICAgICQoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHR5cGVvZiAkKCkuZmFuY3lib3ggIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICAgICAgbGV0IHRpdGxlQWRkZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBnYWxsZXJ5VGl0bGUgPSAnJztcbiAgICAgICAgICAgICQoJ1tkYXRhLWZhbmN5Ym94Xj1cImdhbGxlcnktXCJdJykuZmFuY3lib3goe1xuICAgICAgICAgICAgICAgIHRodW1icyA6IHtcbiAgICAgICAgICAgICAgICBhdXRvU3RhcnQgOiB0cnVlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBiZWZvcmVMb2FkIDogZnVuY3Rpb24oIGluc3RhbmNlLCBzbGlkZSApIHtcbiAgICAgICAgICAgICAgICAgICAgLy9nZXRzIHRoZSBkYXRhLXRpdGxlIGF0dHJpYnV0ZSBvZiB0aGUgcGFyZW50IGdhbGxlcnlcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aXRsZUFkZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBnYWxsZXJ5ID0gc2xpZGUub3B0cy5mYW5jeWJveDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0ICR3cmFwcGVyID0gJCgnI3dyYXBwZXInICsgZ2FsbGVyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYWxsZXJ5VGl0bGUgPSAkd3JhcHBlci5kYXRhKCd0aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBnYWxsZXJ5VGl0bGUgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgZ2FsbGVyeVRpdGxlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmZhbmN5Ym94LWluZm9iYXInKS5wcmVwZW5kKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtZ2FsbGVyeS10aXRsZVwiPicgKyBnYWxsZXJ5VGl0bGUgKyAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUFkZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWZ0ZXJDbG9zZSA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZUFkZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldHVwXG4gICAgICAgIHZhciBzbGlkZXJFbGVtID0gJChcIi5jay1ibG9ja3MtZ2FsbGVyeS1ncmlkLm1vYmlsZS1zY3JvbGxcIiksXG4gICAgICAgIHNsaWRlckJvb2wgPSBmYWxzZSxcbiAgICAgICAgc2xpZGVyQnJlYWtwb2ludCA9IDEwMjM7XG5cbiAgICAgICAgZnVuY3Rpb24gc2xpZGVySW5pdCgpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSBzbGlkZXJCcmVha3BvaW50ICYmIHNsaWRlckVsZW0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJCb29sID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckVsZW0uZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVzbW9iaWxlID0gJCh0aGlzKS5kYXRhKCdzbGlkZXNtb2JpbGUnKSA/ICQodGhpcykuZGF0YSgnc2xpZGVzbW9iaWxlJykgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsbW9iaWxlID0gJCh0aGlzKS5kYXRhKCdzY3JvbGxtb2JpbGUnKSA/ICQodGhpcykuZGF0YSgnc2Nyb2xsbW9iaWxlJykgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVzdGFibGV0ID0gJCh0aGlzKS5kYXRhKCdzbGlkZXN0YWJsZXQnKSA/ICQodGhpcykuZGF0YSgnc2xpZGVzdGFibGV0JykgOiAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsdGFibGV0ID0gJCh0aGlzKS5kYXRhKCdzY3JvbGx0YWJsZXQnKSA/ICQodGhpcykuZGF0YSgnc2Nyb2xsdGFibGV0JykgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVyU2V0dGluZ3MgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogc2xpZGVzbW9iaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiBzY3JvbGxtb2JpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiBzbGlkZXJCcmVha3BvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFwidW5zbGlja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiBzbGlkZXN0YWJsZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogc2Nyb2xsdGFibGV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLm9uKFwiaW5pdFwiLCBmdW5jdGlvbihlLCBzbGljaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHJlbW92ZSB0aGUgZGF0YS1mYW5jeWJveCBhdHRyaWJ1dGUgZnJvbSB0aGUgY2xvbmVkIHNsaWRlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYWRkIGEgZGF0YS10cmlnZ2VyIGF0dHJpYnV0ZSB3aXRoIHRoZSBzYW1lIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBhZGQgYSBkYXRhLWluZGV4IGF0dHJpYnV0ZSB0byBpbmRpY2F0ZSB3aGljaCBzbGlkZSB0byBvcGVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpY2suJHNsaWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbmQoXCIuc2xpY2stY2xvbmVkIGFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgJHNsaWRlID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIgPSAkc2xpZGUuYXR0cihcImRhdGEtZmFuY3lib3hcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkSW5kZXggPSBwYXJzZUludCgkc2xpZGUuYXR0cihcImRhdGEtc2xpY2staW5kZXhcIikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsSW5kZXggPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmVkSW5kZXggPCAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2xvbmVkSW5kZXggKyBzbGljay4kc2xpZGVzLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGNsb25lZEluZGV4IC0gc2xpY2suJHNsaWRlcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZS5hdHRyKFwiZGF0YS1pbmRleFwiLCBvcmlnaW5hbEluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHNsaWRlLmF0dHIoXCJkYXRhLXRyaWdnZXJcIiwgdHJpZ2dlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRzbGlkZS5yZW1vdmVBdHRyKFwiZGF0YS1mYW5jeWJveFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KS5zbGljayhzbGlkZXJTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyQm9vbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzbGlkZXJCb29sID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVySW5pdCgpO1xuICAgICAgICAvLyByZXNpemVcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzbGlkZXJJbml0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgfSk7XG59KShqUXVlcnkpOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53cC1ibG9jay1jYXJrZWVrLWJsb2Nrcy1tb2RhbC1pdGVtLmhhcy1pbWFnZScpO1xubW9kYWxzLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgY29uc3QgaW1hZ2UgPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2stbW9kYWwtaXRlbS1pbWFnZScpO1xuICAgIGlmIChpbWFnZSkge1xuICAgICAgICBjb25zdCBjbG9uZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKS5wcmVwZW5kKGNsb25lKTtcbiAgICB9XG5cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3Jlc291cmNlcy9nbG9iYWwuY3NzXCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9tb2RhbC1pdGVtL3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvZml4ZWQtaW1hZ2Uvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9hY2NvcmRpb24vc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jdXN0b20tYXJjaGl2ZS9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL3dpZGdldC1yb3cvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9jYXJrZWVrLXNsaWRlci9zY3JpcHRcIjtcbmltcG9ydCBcIi4vYmxvY2tzL2xpZ2h0Ym94LWdhbGxlcnkvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy9leHRlbmRlZC1nYWxsZXJ5L3NjcmlwdFwiO1xuaW1wb3J0IFwiLi9ibG9ja3MvZmVhdHVyZWQtaW1hZ2Uvc2NyaXB0XCI7XG5pbXBvcnQgXCIuL2Jsb2Nrcy90YXhvbm9teS1hcmNoaXZlLWxpbmtzL3NjcmlwdFwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==