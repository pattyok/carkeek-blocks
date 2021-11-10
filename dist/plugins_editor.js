/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugins/index.js":
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_editor_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.global.editor.css */ "./src/plugins/styles.global.editor.css");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings */ "./src/plugins/settings.js");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */

 //This was breaking Events when we turned off the block editor

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_2__.registerPlugin)("carkeek-blocks-pageheader", {
  icon: false,
  render: _settings__WEBPACK_IMPORTED_MODULE_1__.default
});

/***/ }),

/***/ "./src/plugins/settings.js":
/*!*********************************!*\
  !*** ./src/plugins/settings.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);






function PageHeaderSettings(props) {
  var hideTitle = props.hideTitle,
      setHideTitle = props.setHideTitle,
      hideFeaturedImage = props.hideFeaturedImage,
      setHideFeaturedImage = props.setHideFeaturedImage,
      featuredMedia = props.featuredMedia,
      featuredImageFocalPoint = props.featuredImageFocalPoint,
      setFeaturedImageFocalPoint = props.setFeaturedImageFocalPoint;
  var titleBlock = document.querySelector(".editor-post-title__block");

  if (titleBlock) {
    var isHidden = typeof hideTitle !== "undefined" && typeof hideTitle !== "undefined" ? hideTitle : false;
    var bodyClass = isHidden ? "carkeek-blocks-title-hidden" : "carkeek-blocks-title-visible"; //remove existing class

    if (isHidden) {
      document.body.classList.remove("carkeek-blocks-title-visible");
    } else {
      document.body.classList.remove("carkeek-blocks-title-hidden");
    }

    document.body.classList.add(bodyClass);
  }

  function resetFocalPoint() {
    var newFocal = {
      x: 0.5,
      y: 0.5
    };
    setFeaturedImageFocalPoint(newFocal);
  }

  var focalPoint;

  if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
    var url = featuredMedia.source_url;
    var _featuredMedia$media_ = featuredMedia.media_details,
        width = _featuredMedia$media_.width,
        height = _featuredMedia$media_.height;
    focalPoint = wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Featured Image Focal Point'),
      url: url,
      dimensions: {
        width: width,
        height: height
      },
      value: featuredImageFocalPoint,
      onChange: function onChange(newFocalPoint) {
        return setFeaturedImageFocalPoint(newFocalPoint);
      }
    }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
      variant: "secondary",
      className: 'is-secondary',
      onClick: resetFocalPoint
    }, "Reset FocalPoint"));
  }

  var hideImageCheckbox = wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    className: "carkeek-hide-featured-image-label",
    label: "Hide Featured Image",
    checked: hideFeaturedImage,
    onChange: function onChange(value) {
      return setHideFeaturedImage(value);
    },
    help: hideFeaturedImage ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The Featured Image is hidden on the rendered page.", "carkeek-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The Featured Image is visible on the rendered page.", "carkeek-blocks")
  });
  return wp.element.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__.PluginDocumentSettingPanel, {
    name: "page-header-settings-panel",
    title: "Page Header Settings",
    className: "page-header-settings-panel"
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    className: "carkeek-hide-title-label",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide Page Title", "carkeek-blocks"),
    checked: hideTitle,
    onChange: function onChange(value) {
      return setHideTitle(value);
    },
    help: hideTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title is hidden on the rendered page.", "carkeek-blocks") : null
  }), hideImageCheckbox, focalPoint, wp.element.createElement("p", null), wp.element.createElement("p", null, "These settings may not be applied on all pages/posts."));
}

var applyWithSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getMedia = _select2.getMedia;

  var hideTitle = getEditedPostAttribute('meta')['_carkeekblocks_title_hidden'];
  var hideFeaturedImage = getEditedPostAttribute('meta')['_carkeekblocks_featuredimage_hidden'];
  var featuredImageFocalPoint = getEditedPostAttribute('meta')['_carkeekblocks_featured_image_focal_point'];
  var featuredImageId = getEditedPostAttribute('featured_media');
  var featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;
  return {
    hideTitle: hideTitle,
    hideFeaturedImage: hideFeaturedImage,
    featuredMedia: featuredMedia,
    featuredImageFocalPoint: featuredImageFocalPoint
  };
});
var applyWithDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withDispatch)(function (dispatch) {
  var _dispatch = dispatch('core/editor'),
      editPost = _dispatch.editPost;

  return {
    setHideTitle: function setHideTitle(hideTitle) {
      editPost({
        meta: {
          _carkeekblocks_title_hidden: hideTitle
        }
      });
    },
    setHideFeaturedImage: function setHideFeaturedImage(hideFeaturedImage) {
      editPost({
        meta: {
          _carkeekblocks_featuredimage_hidden: hideFeaturedImage
        }
      });
    },
    setFeaturedImageFocalPoint: function setFeaturedImageFocalPoint(focalPoint) {
      editPost({
        meta: {
          _carkeekblocks_featured_image_focal_point: focalPoint
        }
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)(applyWithSelect, applyWithDispatch)(PageHeaderSettings));

/***/ }),

/***/ "./src/plugins/styles.global.editor.css":
/*!**********************************************!*\
  !*** ./src/plugins/styles.global.editor.css ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = wp.components;

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = wp.compose;

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = wp.data;

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = wp.editPost;

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = wp.i18n;

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = wp.plugins;

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*******************************!*\
  !*** ./src/plugins_editor.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins */ "./src/plugins/index.js");

}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9wbHVnaW5zL2luZGV4LmpzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL3BsdWdpbnMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvLi9zcmMvcGx1Z2lucy9zdHlsZXMuZ2xvYmFsLmVkaXRvci5jc3M/ZmJlYSIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy9leHRlcm5hbCBbXCJ3cFwiLFwiY29tcG9uZW50c1wiXSIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy9leHRlcm5hbCBbXCJ3cFwiLFwiY29tcG9zZVwiXSIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy9leHRlcm5hbCBbXCJ3cFwiLFwiZGF0YVwiXSIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy9leHRlcm5hbCBbXCJ3cFwiLFwiZWRpdFBvc3RcIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcImkxOG5cIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcInBsdWdpbnNcIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3Mvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCJdLCJuYW1lcyI6WyJyZWdpc3RlclBsdWdpbiIsImljb24iLCJyZW5kZXIiLCJQYWdlSGVhZGVyU2V0dGluZ3MiLCJwcm9wcyIsImhpZGVUaXRsZSIsInNldEhpZGVUaXRsZSIsImhpZGVGZWF0dXJlZEltYWdlIiwic2V0SGlkZUZlYXR1cmVkSW1hZ2UiLCJmZWF0dXJlZE1lZGlhIiwiZmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQiLCJzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludCIsInRpdGxlQmxvY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc0hpZGRlbiIsImJvZHlDbGFzcyIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXNldEZvY2FsUG9pbnQiLCJuZXdGb2NhbCIsIngiLCJ5IiwiZm9jYWxQb2ludCIsInNvdXJjZV91cmwiLCJ1cmwiLCJtZWRpYV9kZXRhaWxzIiwid2lkdGgiLCJoZWlnaHQiLCJfXyIsIm5ld0ZvY2FsUG9pbnQiLCJoaWRlSW1hZ2VDaGVja2JveCIsInZhbHVlIiwiYXBwbHlXaXRoU2VsZWN0Iiwid2l0aFNlbGVjdCIsInNlbGVjdCIsImdldEVkaXRlZFBvc3RBdHRyaWJ1dGUiLCJnZXRNZWRpYSIsImZlYXR1cmVkSW1hZ2VJZCIsImFwcGx5V2l0aERpc3BhdGNoIiwid2l0aERpc3BhdGNoIiwiZGlzcGF0Y2giLCJlZGl0UG9zdCIsIm1ldGEiLCJfY2Fya2Vla2Jsb2Nrc190aXRsZV9oaWRkZW4iLCJfY2Fya2Vla2Jsb2Nrc19mZWF0dXJlZGltYWdlX2hpZGRlbiIsIl9jYXJrZWVrYmxvY2tzX2ZlYXR1cmVkX2ltYWdlX2ZvY2FsX3BvaW50IiwiY29tcG9zZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Q0FHQTs7QUFFQUEsa0VBQWMsQ0FBQywyQkFBRCxFQUE4QjtBQUN4Q0MsTUFBSSxFQUFFLEtBRGtDO0FBRXhDQyxRQUFNLEVBQUVDLDhDQUFrQkE7QUFGYyxDQUE5QixDQUFkLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0Esa0JBQVQsQ0FBNkJDLEtBQTdCLEVBQXFDO0FBQUEsTUFFekJDLFNBRnlCLEdBU3pCRCxLQVR5QixDQUV6QkMsU0FGeUI7QUFBQSxNQUd6QkMsWUFIeUIsR0FTekJGLEtBVHlCLENBR3pCRSxZQUh5QjtBQUFBLE1BSXpCQyxpQkFKeUIsR0FTekJILEtBVHlCLENBSXpCRyxpQkFKeUI7QUFBQSxNQUt6QkMsb0JBTHlCLEdBU3pCSixLQVR5QixDQUt6Qkksb0JBTHlCO0FBQUEsTUFNekJDLGFBTnlCLEdBU3pCTCxLQVR5QixDQU16QkssYUFOeUI7QUFBQSxNQU96QkMsdUJBUHlCLEdBU3pCTixLQVR5QixDQU96Qk0sdUJBUHlCO0FBQUEsTUFRekJDLDBCQVJ5QixHQVN6QlAsS0FUeUIsQ0FRekJPLDBCQVJ5QjtBQVU3QixNQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBbkI7O0FBRUEsTUFBSUYsVUFBSixFQUFnQjtBQUNaLFFBQU1HLFFBQVEsR0FDVixPQUFPVixTQUFQLEtBQXFCLFdBQXJCLElBQ0EsT0FBT0EsU0FBUCxLQUFxQixXQURyQixHQUVNQSxTQUZOLEdBR00sS0FKVjtBQUtBLFFBQU1XLFNBQVMsR0FBR0QsUUFBUSxHQUNwQiw2QkFEb0IsR0FFcEIsOEJBRk4sQ0FOWSxDQVVaOztBQUNBLFFBQUlBLFFBQUosRUFBYztBQUNWRixjQUFRLENBQUNJLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkMsTUFBeEIsQ0FBK0IsOEJBQS9CO0FBQ0gsS0FGRCxNQUVPO0FBQ0hOLGNBQVEsQ0FBQ0ksSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxNQUF4QixDQUErQiw2QkFBL0I7QUFDSDs7QUFFRE4sWUFBUSxDQUFDSSxJQUFULENBQWNDLFNBQWQsQ0FBd0JFLEdBQXhCLENBQTRCSixTQUE1QjtBQUNIOztBQUVELFdBQVNLLGVBQVQsR0FBMkI7QUFDdkIsUUFBTUMsUUFBUSxHQUFHO0FBQUVDLE9BQUMsRUFBRSxHQUFMO0FBQVVDLE9BQUMsRUFBRTtBQUFiLEtBQWpCO0FBQ0FiLDhCQUEwQixDQUFFVyxRQUFGLENBQTFCO0FBQ0g7O0FBRUQsTUFBSUcsVUFBSjs7QUFDQSxNQUFJLENBQUNsQixpQkFBRCxJQUFzQkUsYUFBdEIsSUFBdUNBLGFBQWEsQ0FBQ2lCLFVBQXpELEVBQXFFO0FBQ2pFLFFBQU1DLEdBQUcsR0FBR2xCLGFBQWEsQ0FBQ2lCLFVBQTFCO0FBRGlFLGdDQUV2Q2pCLGFBQWEsQ0FBQ21CLGFBRnlCO0FBQUEsUUFFekRDLEtBRnlELHlCQUV6REEsS0FGeUQ7QUFBQSxRQUVsREMsTUFGa0QseUJBRWxEQSxNQUZrRDtBQUdqRUwsY0FBVSxHQUNOLG9EQUNJLHlCQUFDLG1FQUFEO0FBQ0ksV0FBSyxFQUFHTSxtREFBRSxDQUFFLDRCQUFGLENBRGQ7QUFFSSxTQUFHLEVBQUdKLEdBRlY7QUFHSSxnQkFBVSxFQUFHO0FBQUVFLGFBQUssRUFBTEEsS0FBRjtBQUFTQyxjQUFNLEVBQU5BO0FBQVQsT0FIakI7QUFJSSxXQUFLLEVBQUdwQix1QkFKWjtBQUtJLGNBQVEsRUFBRyxrQkFBRXNCLGFBQUY7QUFBQSxlQUNQckIsMEJBQTBCLENBQUVxQixhQUFGLENBRG5CO0FBQUE7QUFMZixNQURKLEVBVUkseUJBQUMseURBQUQ7QUFBUSxhQUFPLEVBQUMsV0FBaEI7QUFBNEIsZUFBUyxFQUFHLGNBQXhDO0FBQXlELGFBQU8sRUFBR1g7QUFBbkUsMEJBVkosQ0FESjtBQWNIOztBQUVELE1BQU1ZLGlCQUFpQixHQUNuQix5QkFBQyxrRUFBRDtBQUNJLGFBQVMsRUFBQyxtQ0FEZDtBQUVJLFNBQUssRUFBQyxxQkFGVjtBQUdJLFdBQU8sRUFBRTFCLGlCQUhiO0FBSUksWUFBUSxFQUFFLGtCQUFBMkIsS0FBSztBQUFBLGFBQUkxQixvQkFBb0IsQ0FBQzBCLEtBQUQsQ0FBeEI7QUFBQSxLQUpuQjtBQUtJLFFBQUksRUFDQTNCLGlCQUFpQixHQUNYd0IsbURBQUUsQ0FDSSxvREFESixFQUVJLGdCQUZKLENBRFMsR0FLWEEsbURBQUUsQ0FDSSxxREFESixFQUVJLGdCQUZKO0FBWGhCLElBREo7QUFvQkEsU0FDSSx5QkFBQyw0RUFBRDtBQUNJLFFBQUksRUFBQyw0QkFEVDtBQUVJLFNBQUssRUFBQyxzQkFGVjtBQUdJLGFBQVMsRUFBQztBQUhkLEtBTUkseUJBQUMsa0VBQUQ7QUFDSSxhQUFTLEVBQUMsMEJBRGQ7QUFFSSxTQUFLLEVBQUVBLG1EQUFFLENBQUMsaUJBQUQsRUFBb0IsZ0JBQXBCLENBRmI7QUFHSSxXQUFPLEVBQUUxQixTQUhiO0FBSUksWUFBUSxFQUFFLGtCQUFBNkIsS0FBSztBQUFBLGFBQUk1QixZQUFZLENBQUM0QixLQUFELENBQWhCO0FBQUEsS0FKbkI7QUFLSSxRQUFJLEVBQ0E3QixTQUFTLEdBQ0gwQixtREFBRSxDQUNJLHVDQURKLEVBRUksZ0JBRkosQ0FEQyxHQUtIO0FBWGQsSUFOSixFQW9CS0UsaUJBcEJMLEVBcUJLUixVQXJCTCxFQXNCSSxtQ0F0QkosRUF1QkksNEZBdkJKLENBREo7QUE2QlA7O0FBRUQsSUFBTVUsZUFBZSxHQUFHQywyREFBVSxDQUFFLFVBQUVDLE1BQUYsRUFBYTtBQUFBLGdCQUNWQSxNQUFNLENBQUUsYUFBRixDQURJO0FBQUEsTUFDckNDLHNCQURxQyxXQUNyQ0Esc0JBRHFDOztBQUFBLGlCQUV4QkQsTUFBTSxDQUFFLE1BQUYsQ0FGa0I7QUFBQSxNQUVyQ0UsUUFGcUMsWUFFckNBLFFBRnFDOztBQUk3QyxNQUFNbEMsU0FBUyxHQUFHaUMsc0JBQXNCLENBQUMsTUFBRCxDQUF0QixDQUErQiw2QkFBL0IsQ0FBbEI7QUFDQSxNQUFNL0IsaUJBQWlCLEdBQUcrQixzQkFBc0IsQ0FBQyxNQUFELENBQXRCLENBQStCLHFDQUEvQixDQUExQjtBQUNBLE1BQU01Qix1QkFBdUIsR0FBRzRCLHNCQUFzQixDQUFFLE1BQUYsQ0FBdEIsQ0FBa0MsMkNBQWxDLENBQWhDO0FBRUEsTUFBTUUsZUFBZSxHQUFHRixzQkFBc0IsQ0FBRSxnQkFBRixDQUE5QztBQUNBLE1BQU03QixhQUFhLEdBQUcrQixlQUFlLEdBQUdELFFBQVEsQ0FBQ0MsZUFBRCxDQUFYLEdBQStCLElBQXBFO0FBQ0EsU0FBTztBQUNDbkMsYUFBUyxFQUFUQSxTQUREO0FBRUNFLHFCQUFpQixFQUFqQkEsaUJBRkQ7QUFHQ0UsaUJBQWEsRUFBYkEsYUFIRDtBQUlDQywyQkFBdUIsRUFBdkJBO0FBSkQsR0FBUDtBQU1ILENBaEJpQyxDQUFsQztBQWlCQSxJQUFNK0IsaUJBQWlCLEdBQUdDLDZEQUFZLENBQUUsVUFBRUMsUUFBRixFQUFnQjtBQUFBLGtCQUMvQkEsUUFBUSxDQUFFLGFBQUYsQ0FEdUI7QUFBQSxNQUM1Q0MsUUFENEMsYUFDNUNBLFFBRDRDOztBQUdwRCxTQUFPO0FBQ0N0QyxnQkFBWSxFQUFFLHNCQUFBRCxTQUFTLEVBQUk7QUFDdkJ1QyxjQUFRLENBQUM7QUFDTEMsWUFBSSxFQUFFO0FBQUVDLHFDQUEyQixFQUFFekM7QUFBL0I7QUFERCxPQUFELENBQVI7QUFHSCxLQUxGO0FBTUNHLHdCQUFvQixFQUFFLDhCQUFBRCxpQkFBaUIsRUFBSTtBQUN2Q3FDLGNBQVEsQ0FBQztBQUNMQyxZQUFJLEVBQUU7QUFDRkUsNkNBQW1DLEVBQUV4QztBQURuQztBQURELE9BQUQsQ0FBUjtBQUtILEtBWkY7QUFhQ0ksOEJBQTBCLEVBQUUsb0NBQUFjLFVBQVUsRUFBSTtBQUN0Q21CLGNBQVEsQ0FBRTtBQUFFQyxZQUFJLEVBQUU7QUFBRUcsbURBQXlDLEVBQUV2QjtBQUE3QztBQUFSLE9BQUYsQ0FBUjtBQUNIO0FBZkYsR0FBUDtBQWlCSCxDQXBCcUMsQ0FBdEM7QUFzQkEsK0RBQWV3QiwyREFBTyxDQUNsQmQsZUFEa0IsRUFFbEJNLGlCQUZrQixDQUFQLENBR2J0QyxrQkFIYSxDQUFmLEU7Ozs7Ozs7Ozs7O0FDMUpBOzs7Ozs7Ozs7OztBQ0FBLCtCOzs7Ozs7Ozs7O0FDQUEsNEI7Ozs7Ozs7Ozs7QUNBQSx5Qjs7Ozs7Ozs7OztBQ0FBLDZCOzs7Ozs7Ozs7O0FDQUEseUI7Ozs7Ozs7Ozs7QUNBQSw0Qjs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsMEJBQTBCLEVBQUU7V0FDMUMsY0FBYyxlQUFlO1dBQzdCLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRSIsImZpbGUiOiJwbHVnaW5zX2VkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogSW50ZXJuYWwgZGVwZW5kZW5jaWVzXG4gKi9cbmltcG9ydCBcIi4vc3R5bGVzLmdsb2JhbC5lZGl0b3IuY3NzXCI7XG5pbXBvcnQgUGFnZUhlYWRlclNldHRpbmdzIGZyb20gXCIuL3NldHRpbmdzXCI7XG5cbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gXCJAd29yZHByZXNzL3BsdWdpbnNcIjtcblxuLy9UaGlzIHdhcyBicmVha2luZyBFdmVudHMgd2hlbiB3ZSB0dXJuZWQgb2ZmIHRoZSBibG9jayBlZGl0b3JcblxucmVnaXN0ZXJQbHVnaW4oXCJjYXJrZWVrLWJsb2Nrcy1wYWdlaGVhZGVyXCIsIHtcbiAgICBpY29uOiBmYWxzZSxcbiAgICByZW5kZXI6IFBhZ2VIZWFkZXJTZXR0aW5nc1xufSk7XG4iLCJpbXBvcnQgeyBQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCB9IGZyb20gXCJAd29yZHByZXNzL2VkaXQtcG9zdFwiO1xuaW1wb3J0IHsgX18gfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgeyBDaGVja2JveENvbnRyb2wsIEZvY2FsUG9pbnRQaWNrZXIsIEJ1dHRvbiB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHdpdGhTZWxlY3QsIHdpdGhEaXNwYXRjaCB9IGZyb20gXCJAd29yZHByZXNzL2RhdGFcIjtcbmltcG9ydCB7IGNvbXBvc2UgfSBmcm9tIFwiQHdvcmRwcmVzcy9jb21wb3NlXCI7XG5cblxuZnVuY3Rpb24gUGFnZUhlYWRlclNldHRpbmdzKCBwcm9wcyApIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaGlkZVRpdGxlLFxuICAgICAgICAgICAgc2V0SGlkZVRpdGxlLFxuICAgICAgICAgICAgaGlkZUZlYXR1cmVkSW1hZ2UsXG4gICAgICAgICAgICBzZXRIaWRlRmVhdHVyZWRJbWFnZSxcbiAgICAgICAgICAgIGZlYXR1cmVkTWVkaWEsXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlRm9jYWxQb2ludCxcbiAgICAgICAgICAgIHNldEZlYXR1cmVkSW1hZ2VGb2NhbFBvaW50XG4gICAgICAgIH0gPSBwcm9wcztcbiAgICAgICAgY29uc3QgdGl0bGVCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWRpdG9yLXBvc3QtdGl0bGVfX2Jsb2NrXCIpO1xuXG4gICAgICAgIGlmICh0aXRsZUJsb2NrKSB7XG4gICAgICAgICAgICBjb25zdCBpc0hpZGRlbiA9XG4gICAgICAgICAgICAgICAgdHlwZW9mIGhpZGVUaXRsZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBoaWRlVGl0bGUgIT09IFwidW5kZWZpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBoaWRlVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZTtcbiAgICAgICAgICAgIGNvbnN0IGJvZHlDbGFzcyA9IGlzSGlkZGVuXG4gICAgICAgICAgICAgICAgPyBcImNhcmtlZWstYmxvY2tzLXRpdGxlLWhpZGRlblwiXG4gICAgICAgICAgICAgICAgOiBcImNhcmtlZWstYmxvY2tzLXRpdGxlLXZpc2libGVcIjtcblxuICAgICAgICAgICAgLy9yZW1vdmUgZXhpc3RpbmcgY2xhc3NcbiAgICAgICAgICAgIGlmIChpc0hpZGRlbikge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImNhcmtlZWstYmxvY2tzLXRpdGxlLXZpc2libGVcIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImNhcmtlZWstYmxvY2tzLXRpdGxlLWhpZGRlblwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGJvZHlDbGFzcyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNldEZvY2FsUG9pbnQoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdGb2NhbCA9IHsgeDogMC41LCB5OiAwLjUgfVxuICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQoIG5ld0ZvY2FsICk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZm9jYWxQb2ludDtcbiAgICAgICAgaWYgKCFoaWRlRmVhdHVyZWRJbWFnZSAmJiBmZWF0dXJlZE1lZGlhICYmIGZlYXR1cmVkTWVkaWEuc291cmNlX3VybCkge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gZmVhdHVyZWRNZWRpYS5zb3VyY2VfdXJsO1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBmZWF0dXJlZE1lZGlhLm1lZGlhX2RldGFpbHM7XG4gICAgICAgICAgICBmb2NhbFBvaW50ID0gKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICAgIDxGb2NhbFBvaW50UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17IF9fKCAnRmVhdHVyZWQgSW1hZ2UgRm9jYWwgUG9pbnQnICkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXsgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9eyB7IHdpZHRoLCBoZWlnaHQgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGZlYXR1cmVkSW1hZ2VGb2NhbFBvaW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBuZXdGb2NhbFBvaW50ICkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludCggbmV3Rm9jYWxQb2ludCApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17ICdpcy1zZWNvbmRhcnknIH0gb25DbGljaz17IHJlc2V0Rm9jYWxQb2ludCB9PlJlc2V0IEZvY2FsUG9pbnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGhpZGVJbWFnZUNoZWNrYm94ID0gKFxuICAgICAgICAgICAgPENoZWNrYm94Q29udHJvbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmtlZWstaGlkZS1mZWF0dXJlZC1pbWFnZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJIaWRlIEZlYXR1cmVkIEltYWdlXCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtoaWRlRmVhdHVyZWRJbWFnZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dmFsdWUgPT4gc2V0SGlkZUZlYXR1cmVkSW1hZ2UodmFsdWUpfVxuICAgICAgICAgICAgICAgIGhlbHA9e1xuICAgICAgICAgICAgICAgICAgICBoaWRlRmVhdHVyZWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGUgRmVhdHVyZWQgSW1hZ2UgaXMgaGlkZGVuIG9uIHRoZSByZW5kZXJlZCBwYWdlLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmtlZWstYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9fKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBGZWF0dXJlZCBJbWFnZSBpcyB2aXNpYmxlIG9uIHRoZSByZW5kZXJlZCBwYWdlLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNhcmtlZWstYmxvY2tzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhZ2UtaGVhZGVyLXNldHRpbmdzLXBhbmVsXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhZ2UgSGVhZGVyIFNldHRpbmdzXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWhlYWRlci1zZXR0aW5ncy1wYW5lbFwiXG4gICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmtlZWstaGlkZS10aXRsZS1sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIkhpZGUgUGFnZSBUaXRsZVwiLCBcImNhcmtlZWstYmxvY2tzXCIpfVxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtoaWRlVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRIaWRlVGl0bGUodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICBoZWxwPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVUaXRsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX18oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRpdGxlIGlzIGhpZGRlbiBvbiB0aGUgcmVuZGVyZWQgcGFnZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2Fya2Vlay1ibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHtoaWRlSW1hZ2VDaGVja2JveH1cbiAgICAgICAgICAgICAgICB7Zm9jYWxQb2ludH1cbiAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIFRoZXNlIHNldHRpbmdzIG1heSBub3QgYmUgYXBwbGllZCBvbiBhbGwgcGFnZXMvcG9zdHMuXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9QbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbD5cbiAgICApO1xufVxuXG5jb25zdCBhcHBseVdpdGhTZWxlY3QgPSB3aXRoU2VsZWN0KCAoIHNlbGVjdCApPT4ge1xuICAgIGNvbnN0IHsgZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSB9ID0gc2VsZWN0KCAnY29yZS9lZGl0b3InICk7XG4gICAgY29uc3QgeyBnZXRNZWRpYSB9ID0gc2VsZWN0KCAnY29yZScgKTtcblxuICAgIGNvbnN0IGhpZGVUaXRsZSA9IGdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVsnX2NhcmtlZWtibG9ja3NfdGl0bGVfaGlkZGVuJ107XG4gICAgY29uc3QgaGlkZUZlYXR1cmVkSW1hZ2UgPSBnZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCdtZXRhJylbJ19jYXJrZWVrYmxvY2tzX2ZlYXR1cmVkaW1hZ2VfaGlkZGVuJ107XG4gICAgY29uc3QgZmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQgPSBnZXRFZGl0ZWRQb3N0QXR0cmlidXRlKCAnbWV0YScgKVsgJ19jYXJrZWVrYmxvY2tzX2ZlYXR1cmVkX2ltYWdlX2ZvY2FsX3BvaW50JyBdO1xuXG4gICAgY29uc3QgZmVhdHVyZWRJbWFnZUlkID0gZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ2ZlYXR1cmVkX21lZGlhJyApO1xuICAgIGNvbnN0IGZlYXR1cmVkTWVkaWEgPSBmZWF0dXJlZEltYWdlSWQgPyBnZXRNZWRpYShmZWF0dXJlZEltYWdlSWQpIDogbnVsbDtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGlkZVRpdGxlLFxuICAgICAgICAgICAgaGlkZUZlYXR1cmVkSW1hZ2UsXG4gICAgICAgICAgICBmZWF0dXJlZE1lZGlhLFxuICAgICAgICAgICAgZmVhdHVyZWRJbWFnZUZvY2FsUG9pbnRcbiAgICAgICAgfTtcbn0pO1xuY29uc3QgYXBwbHlXaXRoRGlzcGF0Y2ggPSB3aXRoRGlzcGF0Y2goICggZGlzcGF0Y2ggKSA9PiB7XG4gICAgY29uc3QgeyBlZGl0UG9zdCB9ID0gZGlzcGF0Y2goICdjb3JlL2VkaXRvcicgKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBzZXRIaWRlVGl0bGU6IGhpZGVUaXRsZSA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFBvc3Qoe1xuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7IF9jYXJrZWVrYmxvY2tzX3RpdGxlX2hpZGRlbjogaGlkZVRpdGxlIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRIaWRlRmVhdHVyZWRJbWFnZTogaGlkZUZlYXR1cmVkSW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRpbWFnZV9oaWRkZW46IGhpZGVGZWF0dXJlZEltYWdlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludDogZm9jYWxQb2ludCA9PiB7XG4gICAgICAgICAgICAgICAgZWRpdFBvc3QoIHsgbWV0YTogeyBfY2Fya2Vla2Jsb2Nrc19mZWF0dXJlZF9pbWFnZV9mb2NhbF9wb2ludDogZm9jYWxQb2ludCB9IH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIGFwcGx5V2l0aFNlbGVjdCxcbiAgICBhcHBseVdpdGhEaXNwYXRjaCxcbikoUGFnZUhlYWRlclNldHRpbmdzKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdwLmNvbXBvbmVudHM7IiwibW9kdWxlLmV4cG9ydHMgPSB3cC5jb21wb3NlOyIsIm1vZHVsZS5leHBvcnRzID0gd3AuZGF0YTsiLCJtb2R1bGUuZXhwb3J0cyA9IHdwLmVkaXRQb3N0OyIsIm1vZHVsZS5leHBvcnRzID0gd3AuaTE4bjsiLCJtb2R1bGUuZXhwb3J0cyA9IHdwLnBsdWdpbnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuXHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiXSwic291cmNlUm9vdCI6IiJ9