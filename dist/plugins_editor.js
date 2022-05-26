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
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/plugins/sidebar.js");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__);
/**
 * Internal dependencies
 */



/**
 * WordPress dependencies
 */

 //This was breaking Events when we turned off the block editor

(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.registerPlugin)("carkeek-blocks-pageheader", {
  icon: false,
  render: _settings__WEBPACK_IMPORTED_MODULE_1__.default
});
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.registerPlugin)("carkeek-blocks-sidebar", {
  icon: false,
  render: _sidebar__WEBPACK_IMPORTED_MODULE_2__.default
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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






/* global ckBlocksVars */

function PageHeaderSettings(props) {
  var hideTitle = props.hideTitle,
      setHideTitle = props.setHideTitle,
      hideFeaturedImage = props.hideFeaturedImage,
      setHideFeaturedImage = props.setHideFeaturedImage,
      featuredMedia = props.featuredMedia,
      featuredImageFocalPoint = props.featuredImageFocalPoint,
      setFeaturedImageFocalPoint = props.setFeaturedImageFocalPoint,
      supportsMeta = props.supportsMeta,
      supportsOpacity = props.supportsOpacity,
      setFeaturedImageOpacity = props.setFeaturedImageOpacity,
      featuredImageOpacity = props.featuredImageOpacity;
  var titleBlock = document.querySelector(".editor-post-title__block");
  var defaultFocal = {
    x: 0.5,
    y: 0.5
  };

  if (supportsOpacity && (!featuredImageFocalPoint || _typeof(featuredImageFocalPoint) !== 'object')) {
    setFeaturedImageFocalPoint(defaultFocal);
  }

  if (titleBlock) {
    var isHidden = typeof hideTitle !== "undefined" && typeof hideTitle !== "undefined" ? hideTitle : false;
    var bodyClass = isHidden ? "carkeek-blocks-title-hidden" : "carkeek-blocks-title-visible"; //remove existing class

    if (isHidden) {
      document.body.classList.remove("carkeek-blocks-title-visible");
    } else {
      document.body.classList.remove("carkeek-blocks-title-hidden");
    }

    document.body.classList.add(bodyClass);
  } // console.log(featuredImageOpacity);
  // console.log(ckBlocksVars);
  // if (!featuredImageOpacity && featuredImageOpacity !== 0 ) {
  //     setFeaturedImageOpacity(ckBlocksVars.opacityDefault);
  // }


  function resetFocalPoint() {
    setFeaturedImageFocalPoint(defaultFocal);
  }

  var focalPoint, opacityPicker;

  if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
    var url = featuredMedia.source_url;
    var _featuredMedia$media_ = featuredMedia.media_details,
        width = _featuredMedia$media_.width,
        height = _featuredMedia$media_.height;
    var imageClasses = supportsOpacity ? "ck-focal-point-wrapper has-opacity" : '';
    focalPoint = wp.element.createElement("div", {
      className: imageClasses,
      style: {
        "--focal-opacity": featuredImageOpacity
      }
    }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.FocalPointPicker, {
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

    if (supportsOpacity) {
      opacityPicker = wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
        label: "Overlay Opacity",
        value: featuredImageOpacity,
        onChange: function onChange(value) {
          return setFeaturedImageOpacity(value);
        },
        min: 0,
        max: 50,
        step: 5
      }));
    }
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
  }, supportsMeta && wp.element.createElement(wp.element.Fragment, null, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    className: "carkeek-hide-title-label",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hide Page Title", "carkeek-blocks"),
    checked: hideTitle,
    onChange: function onChange(value) {
      return setHideTitle(value);
    },
    help: hideTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title is hidden on the rendered page.", "carkeek-blocks") : null
  }), hideImageCheckbox, focalPoint, opacityPicker, wp.element.createElement("p", null), wp.element.createElement("p", null, "These settings may not be applied on all pages/posts.")), !supportsMeta && wp.element.createElement("p", null, "Not supported for this post type. If you want to use this feature on this post, let your site admin know that this post type must support 'custom-fields'."));
}

var applyWithSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.withSelect)(function (select) {
  var _select = select('core/editor'),
      getEditedPostAttribute = _select.getEditedPostAttribute;

  var _select2 = select('core'),
      getMedia = _select2.getMedia,
      getPostType = _select2.getPostType;

  var type = getEditedPostAttribute('type');
  var postType = getPostType(type);
  var supportsOpacity = false;
  var supportsMeta = false,
      hideTitle,
      hideFeaturedImage,
      featuredImageFocalPoint,
      featuredImageId,
      featuredMedia,
      featuredImageOpacity;

  if (postType && postType.supports['custom-fields'] && postType.supports['custom-fields']) {
    supportsMeta = true;
  }

  if (supportsMeta) {
    //post types need to support custom fields for this to work - if missing or js errors check for that
    hideTitle = getEditedPostAttribute('meta')['_carkeekblocks_title_hidden'];
    hideFeaturedImage = getEditedPostAttribute('meta')['_carkeekblocks_featuredimage_hidden'];
    featuredImageFocalPoint = getEditedPostAttribute('meta')['_carkeekblocks_featured_image_focal_point'];
    featuredImageId = getEditedPostAttribute('featured_media');
    featuredMedia = featuredImageId ? getMedia(featuredImageId) : null; //ckBlockVars are stored in site options and passed via wp_add_inline_script

    supportsOpacity = ckBlocksVars && ckBlocksVars.supportsOpacity == 1 ? true : false;

    if (supportsOpacity) {
      featuredImageOpacity = getEditedPostAttribute('meta')['_carkeekblocks_featured_image_opacity']; //we set the default to 101 so we can distinguish 0 from false.

      if (featuredImageOpacity === 101) {
        featuredImageOpacity = parseInt(ckBlocksVars.opacityDefault);
      }
    }
  }

  return {
    hideTitle: hideTitle,
    hideFeaturedImage: hideFeaturedImage,
    featuredMedia: featuredMedia,
    featuredImageFocalPoint: featuredImageFocalPoint,
    supportsMeta: supportsMeta,
    featuredImageOpacity: featuredImageOpacity,
    supportsOpacity: supportsOpacity
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
    },
    setFeaturedImageOpacity: function setFeaturedImageOpacity(focalPoint) {
      editPost({
        meta: {
          _carkeekblocks_featured_image_opacity: focalPoint
        }
      });
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.compose)(applyWithSelect, applyWithDispatch)(PageHeaderSettings));

/***/ }),

/***/ "./src/plugins/sidebar.js":
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
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





function CarkeekSidebar() {
  var groupOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select('core/edit-post').isFeatureActive('ckGroupOutlines');
  });
  var columnOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select('core/edit-post').isFeatureActive('ckColumnOutlines');
  });
  var blockOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(function (select) {
    return select('core/edit-post').isFeatureActive('ckBlockOutlines');
  });

  var _useDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('core/edit-post'),
      toggleFeature = _useDispatch.toggleFeature;

  if (groupOutlines) {
    document.body.classList.add('is-group-lines-on');
  } else {
    document.body.classList.remove('is-group-lines-on');
  }

  if (columnOutlines) {
    document.body.classList.add('is-column-lines-on');
  } else {
    document.body.classList.remove('is-column-lines-on');
  }

  if (blockOutlines) {
    document.body.classList.add('is-block-lines-on');
  } else {
    document.body.classList.remove('is-block-lines-on');
  }

  return wp.element.createElement(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_0__.PluginSidebar, {
    name: "carkeek-blocks-sidebar",
    icon: "admin-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Carkeek Blocks")
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Editor Controls")
  }, wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outline Groups"),
    checked: groupOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show outlines on Group Blocks in edit view"),
    onChange: function onChange() {
      toggleFeature('ckGroupOutlines');
    }
  }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outline Columns"),
    checked: columnOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show outlines on Column Blocks in edit view"),
    onChange: function onChange() {
      toggleFeature('ckColumnOutlines');
    }
  }), wp.element.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Outline All Blocks"),
    checked: blockOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show outlines on all Blocks in edit view"),
    onChange: function onChange() {
      toggleFeature('ckBlockOutlines');
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (CarkeekSidebar);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy8uL3NyYy9wbHVnaW5zL2luZGV4LmpzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL3BsdWdpbnMvc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvLi9zcmMvcGx1Z2lucy9zaWRlYmFyLmpzIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzLy4vc3JjL3BsdWdpbnMvc3R5bGVzLmdsb2JhbC5lZGl0b3IuY3NzP2ZiZWEiLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcImNvbXBvbmVudHNcIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcImNvbXBvc2VcIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcImRhdGFcIl0iLCJ3ZWJwYWNrOi8vY2Fya2Vlay1ibG9ja3MvZXh0ZXJuYWwgW1wid3BcIixcImVkaXRQb3N0XCJdIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL2V4dGVybmFsIFtcIndwXCIsXCJpMThuXCJdIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL2V4dGVybmFsIFtcIndwXCIsXCJwbHVnaW5zXCJdIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jYXJrZWVrLWJsb2Nrcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NhcmtlZWstYmxvY2tzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiXSwibmFtZXMiOlsicmVnaXN0ZXJQbHVnaW4iLCJpY29uIiwicmVuZGVyIiwiUGFnZUhlYWRlclNldHRpbmdzIiwiQ2Fya2Vla1NpZGViYXIiLCJwcm9wcyIsImhpZGVUaXRsZSIsInNldEhpZGVUaXRsZSIsImhpZGVGZWF0dXJlZEltYWdlIiwic2V0SGlkZUZlYXR1cmVkSW1hZ2UiLCJmZWF0dXJlZE1lZGlhIiwiZmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQiLCJzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludCIsInN1cHBvcnRzTWV0YSIsInN1cHBvcnRzT3BhY2l0eSIsInNldEZlYXR1cmVkSW1hZ2VPcGFjaXR5IiwiZmVhdHVyZWRJbWFnZU9wYWNpdHkiLCJ0aXRsZUJsb2NrIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGVmYXVsdEZvY2FsIiwieCIsInkiLCJpc0hpZGRlbiIsImJvZHlDbGFzcyIsImJvZHkiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXNldEZvY2FsUG9pbnQiLCJmb2NhbFBvaW50Iiwib3BhY2l0eVBpY2tlciIsInNvdXJjZV91cmwiLCJ1cmwiLCJtZWRpYV9kZXRhaWxzIiwid2lkdGgiLCJoZWlnaHQiLCJpbWFnZUNsYXNzZXMiLCJfXyIsIm5ld0ZvY2FsUG9pbnQiLCJ2YWx1ZSIsImhpZGVJbWFnZUNoZWNrYm94IiwiYXBwbHlXaXRoU2VsZWN0Iiwid2l0aFNlbGVjdCIsInNlbGVjdCIsImdldEVkaXRlZFBvc3RBdHRyaWJ1dGUiLCJnZXRNZWRpYSIsImdldFBvc3RUeXBlIiwidHlwZSIsInBvc3RUeXBlIiwiZmVhdHVyZWRJbWFnZUlkIiwic3VwcG9ydHMiLCJja0Jsb2Nrc1ZhcnMiLCJwYXJzZUludCIsIm9wYWNpdHlEZWZhdWx0IiwiYXBwbHlXaXRoRGlzcGF0Y2giLCJ3aXRoRGlzcGF0Y2giLCJkaXNwYXRjaCIsImVkaXRQb3N0IiwibWV0YSIsIl9jYXJrZWVrYmxvY2tzX3RpdGxlX2hpZGRlbiIsIl9jYXJrZWVrYmxvY2tzX2ZlYXR1cmVkaW1hZ2VfaGlkZGVuIiwiX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRfaW1hZ2VfZm9jYWxfcG9pbnQiLCJfY2Fya2Vla2Jsb2Nrc19mZWF0dXJlZF9pbWFnZV9vcGFjaXR5IiwiY29tcG9zZSIsImdyb3VwT3V0bGluZXMiLCJ1c2VTZWxlY3QiLCJpc0ZlYXR1cmVBY3RpdmUiLCJjb2x1bW5PdXRsaW5lcyIsImJsb2NrT3V0bGluZXMiLCJ1c2VEaXNwYXRjaCIsInRvZ2dsZUZlYXR1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0NBR0E7O0FBRUFBLGtFQUFjLENBQUMsMkJBQUQsRUFBOEI7QUFDeENDLE1BQUksRUFBRSxLQURrQztBQUV4Q0MsUUFBTSxFQUFFQyw4Q0FBa0JBO0FBRmMsQ0FBOUIsQ0FBZDtBQUtBSCxrRUFBYyxDQUFDLHdCQUFELEVBQTJCO0FBQ3JDQyxNQUFJLEVBQUUsS0FEK0I7QUFFckNDLFFBQU0sRUFBRUUsNkNBQWNBO0FBRmUsQ0FBM0IsQ0FBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Qsa0JBQVQsQ0FBNkJFLEtBQTdCLEVBQXFDO0FBQUEsTUFFekJDLFNBRnlCLEdBYXpCRCxLQWJ5QixDQUV6QkMsU0FGeUI7QUFBQSxNQUd6QkMsWUFIeUIsR0FhekJGLEtBYnlCLENBR3pCRSxZQUh5QjtBQUFBLE1BSXpCQyxpQkFKeUIsR0FhekJILEtBYnlCLENBSXpCRyxpQkFKeUI7QUFBQSxNQUt6QkMsb0JBTHlCLEdBYXpCSixLQWJ5QixDQUt6Qkksb0JBTHlCO0FBQUEsTUFNekJDLGFBTnlCLEdBYXpCTCxLQWJ5QixDQU16QkssYUFOeUI7QUFBQSxNQU96QkMsdUJBUHlCLEdBYXpCTixLQWJ5QixDQU96Qk0sdUJBUHlCO0FBQUEsTUFRekJDLDBCQVJ5QixHQWF6QlAsS0FieUIsQ0FRekJPLDBCQVJ5QjtBQUFBLE1BU3pC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TkwsSUFUQSxFQWlCQSx5QkFBQyxnRUFBRDtBQUNJLFNBQUssRUFBRWpDLG1EQUFFLENBQUMsb0JBQUQsQ0FEYjtBQUVJLFdBQU8sRUFBRytCLGFBRmQ7QUFHSSxRQUFJLEVBQUUvQixtREFBRSxDQUFDLDBDQUFELENBSFo7QUFJSSxZQUFRLEVBQUcsb0JBQU07QUFDYmlDLG1CQUFhLENBQUUsaUJBQUYsQ0FBYjtBQUNIO0FBTkwsSUFqQkEsQ0FMSixDQURKO0FBb0NIOztBQUVELCtEQUFlbkUsY0FBZixFOzs7Ozs7Ozs7OztBQ3RFQTs7Ozs7Ozs7Ozs7QUNBQSwrQjs7Ozs7Ozs7OztBQ0FBLDRCOzs7Ozs7Ozs7O0FDQUEseUI7Ozs7Ozs7Ozs7QUNBQSw2Qjs7Ozs7Ozs7OztBQ0FBLHlCOzs7Ozs7Ozs7O0FDQUEsNEI7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxjQUFjLDBCQUEwQixFQUFFO1dBQzFDLGNBQWMsZUFBZTtXQUM3QixnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEUiLCJmaWxlIjoicGx1Z2luc19lZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEludGVybmFsIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgXCIuL3N0eWxlcy5nbG9iYWwuZWRpdG9yLmNzc1wiO1xuaW1wb3J0IFBhZ2VIZWFkZXJTZXR0aW5ncyBmcm9tIFwiLi9zZXR0aW5nc1wiO1xuaW1wb3J0IENhcmtlZWtTaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcbi8qKlxuICogV29yZFByZXNzIGRlcGVuZGVuY2llc1xuICovXG5pbXBvcnQgeyByZWdpc3RlclBsdWdpbiB9IGZyb20gXCJAd29yZHByZXNzL3BsdWdpbnNcIjtcblxuLy9UaGlzIHdhcyBicmVha2luZyBFdmVudHMgd2hlbiB3ZSB0dXJuZWQgb2ZmIHRoZSBibG9jayBlZGl0b3JcblxucmVnaXN0ZXJQbHVnaW4oXCJjYXJrZWVrLWJsb2Nrcy1wYWdlaGVhZGVyXCIsIHtcbiAgICBpY29uOiBmYWxzZSxcbiAgICByZW5kZXI6IFBhZ2VIZWFkZXJTZXR0aW5nc1xufSk7XG5cbnJlZ2lzdGVyUGx1Z2luKFwiY2Fya2Vlay1ibG9ja3Mtc2lkZWJhclwiLCB7XG4gICAgaWNvbjogZmFsc2UsXG4gICAgcmVuZGVyOiBDYXJrZWVrU2lkZWJhclxufSk7XG4iLCJpbXBvcnQgeyBQbHVnaW5Eb2N1bWVudFNldHRpbmdQYW5lbCB9IGZyb20gXCJAd29yZHByZXNzL2VkaXQtcG9zdFwiO1xuaW1wb3J0IHsgX18gfSBmcm9tIFwiQHdvcmRwcmVzcy9pMThuXCI7XG5pbXBvcnQgeyBDaGVja2JveENvbnRyb2wsIEZvY2FsUG9pbnRQaWNrZXIsIEJ1dHRvbiwgUmFuZ2VDb250cm9sIH0gZnJvbSBcIkB3b3JkcHJlc3MvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgd2l0aFNlbGVjdCwgd2l0aERpc3BhdGNoIH0gZnJvbSBcIkB3b3JkcHJlc3MvZGF0YVwiO1xuaW1wb3J0IHsgY29tcG9zZSB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvc2VcIjtcbi8qIGdsb2JhbCBja0Jsb2Nrc1ZhcnMgKi9cblxuZnVuY3Rpb24gUGFnZUhlYWRlclNldHRpbmdzKCBwcm9wcyApIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaGlkZVRpdGxlLFxuICAgICAgICAgICAgc2V0SGlkZVRpdGxlLFxuICAgICAgICAgICAgaGlkZUZlYXR1cmVkSW1hZ2UsXG4gICAgICAgICAgICBzZXRIaWRlRmVhdHVyZWRJbWFnZSxcbiAgICAgICAgICAgIGZlYXR1cmVkTWVkaWEsXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlRm9jYWxQb2ludCxcbiAgICAgICAgICAgIHNldEZlYXR1cmVkSW1hZ2VGb2NhbFBvaW50LFxuICAgICAgICAgICAgc3VwcG9ydHNNZXRhLFxuICAgICAgICAgICAgc3VwcG9ydHNPcGFjaXR5LFxuICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZU9wYWNpdHksXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlT3BhY2l0eSxcbiAgICAgICAgfSA9IHByb3BzO1xuICAgICAgICBjb25zdCB0aXRsZUJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0b3ItcG9zdC10aXRsZV9fYmxvY2tcIik7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRGb2NhbCA9IHsgeDogMC41LCB5OiAwLjUgfVxuXG4gICAgICAgIGlmIChzdXBwb3J0c09wYWNpdHkgJiYgKCAhZmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQgfHwgdHlwZW9mIGZlYXR1cmVkSW1hZ2VGb2NhbFBvaW50ICE9PSAnb2JqZWN0JyApICl7XG4gICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludCggZGVmYXVsdEZvY2FsICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGl0bGVCbG9jaykge1xuICAgICAgICAgICAgY29uc3QgaXNIaWRkZW4gPVxuICAgICAgICAgICAgICAgIHR5cGVvZiBoaWRlVGl0bGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgaGlkZVRpdGxlICE9PSBcInVuZGVmaW5lZFwiXG4gICAgICAgICAgICAgICAgICAgID8gaGlkZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBib2R5Q2xhc3MgPSBpc0hpZGRlblxuICAgICAgICAgICAgICAgID8gXCJjYXJrZWVrLWJsb2Nrcy10aXRsZS1oaWRkZW5cIlxuICAgICAgICAgICAgICAgIDogXCJjYXJrZWVrLWJsb2Nrcy10aXRsZS12aXNpYmxlXCI7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIGV4aXN0aW5nIGNsYXNzXG4gICAgICAgICAgICBpZiAoaXNIaWRkZW4pIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJrZWVrLWJsb2Nrcy10aXRsZS12aXNpYmxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJrZWVrLWJsb2Nrcy10aXRsZS1oaWRkZW5cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChib2R5Q2xhc3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZmVhdHVyZWRJbWFnZU9wYWNpdHkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhja0Jsb2Nrc1ZhcnMpO1xuICAgICAgICAvLyBpZiAoIWZlYXR1cmVkSW1hZ2VPcGFjaXR5ICYmIGZlYXR1cmVkSW1hZ2VPcGFjaXR5ICE9PSAwICkge1xuICAgICAgICAvLyAgICAgc2V0RmVhdHVyZWRJbWFnZU9wYWNpdHkoY2tCbG9ja3NWYXJzLm9wYWNpdHlEZWZhdWx0KTtcbiAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gcmVzZXRGb2NhbFBvaW50KCkge1xuICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQoIGRlZmF1bHRGb2NhbCApO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGZvY2FsUG9pbnQsIG9wYWNpdHlQaWNrZXI7XG4gICAgICAgIGlmICghaGlkZUZlYXR1cmVkSW1hZ2UgJiYgZmVhdHVyZWRNZWRpYSAmJiBmZWF0dXJlZE1lZGlhLnNvdXJjZV91cmwpIHtcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IGZlYXR1cmVkTWVkaWEuc291cmNlX3VybDtcbiAgICAgICAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZmVhdHVyZWRNZWRpYS5tZWRpYV9kZXRhaWxzO1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VDbGFzc2VzID0gc3VwcG9ydHNPcGFjaXR5ID8gYGNrLWZvY2FsLXBvaW50LXdyYXBwZXIgaGFzLW9wYWNpdHlgIDogJyc7XG4gICAgICAgICAgICBmb2NhbFBvaW50ID0gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgaW1hZ2VDbGFzc2VzIH0gc3R5bGU9e3sgXCItLWZvY2FsLW9wYWNpdHlcIjogZmVhdHVyZWRJbWFnZU9wYWNpdHkgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxGb2NhbFBvaW50UGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17IF9fKCAnRmVhdHVyZWQgSW1hZ2UgRm9jYWwgUG9pbnQnICkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXsgdXJsIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnM9eyB7IHdpZHRoLCBoZWlnaHQgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17IGZlYXR1cmVkSW1hZ2VGb2NhbFBvaW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCBuZXdGb2NhbFBvaW50ICkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRGZWF0dXJlZEltYWdlRm9jYWxQb2ludCggbmV3Rm9jYWxQb2ludCApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT17ICdpcy1zZWNvbmRhcnknIH0gb25DbGljaz17IHJlc2V0Rm9jYWxQb2ludCB9PlJlc2V0IEZvY2FsUG9pbnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIGlmIChzdXBwb3J0c09wYWNpdHkpIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5UGlja2VyID0gKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8UmFuZ2VDb250cm9sXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJPdmVybGF5IE9wYWNpdHlcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHsgZmVhdHVyZWRJbWFnZU9wYWNpdHkgfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ICggdmFsdWUgKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZU9wYWNpdHkoIHZhbHVlIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtaW4gPSB7IDAgfVxuICAgICAgICAgICAgICAgICAgICBtYXggPSB7IDUwIH1cbiAgICAgICAgICAgICAgICAgICAgc3RlcCA9IHsgNSB9XG4gICAgICAgICAgICAgICAgICAgID48L1JhbmdlQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaGlkZUltYWdlQ2hlY2tib3ggPSAoXG4gICAgICAgICAgICA8Q2hlY2tib3hDb250cm9sXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fya2Vlay1oaWRlLWZlYXR1cmVkLWltYWdlLWxhYmVsXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkhpZGUgRmVhdHVyZWQgSW1hZ2VcIlxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2hpZGVGZWF0dXJlZEltYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt2YWx1ZSA9PiBzZXRIaWRlRmVhdHVyZWRJbWFnZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgaGVscD17XG4gICAgICAgICAgICAgICAgICAgIGhpZGVGZWF0dXJlZEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9fKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBGZWF0dXJlZCBJbWFnZSBpcyBoaWRkZW4gb24gdGhlIHJlbmRlcmVkIHBhZ2UuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2Fya2Vlay1ibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX18oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlIEZlYXR1cmVkIEltYWdlIGlzIHZpc2libGUgb24gdGhlIHJlbmRlcmVkIHBhZ2UuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2Fya2Vlay1ibG9ja3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8UGx1Z2luRG9jdW1lbnRTZXR0aW5nUGFuZWxcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFnZS1oZWFkZXItc2V0dGluZ3MtcGFuZWxcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUGFnZSBIZWFkZXIgU2V0dGluZ3NcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyLXNldHRpbmdzLXBhbmVsXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHtzdXBwb3J0c01ldGEgJiZcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxDaGVja2JveENvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fya2Vlay1oaWRlLXRpdGxlLWxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiSGlkZSBQYWdlIFRpdGxlXCIsIFwiY2Fya2Vlay1ibG9ja3NcIil9XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2hpZGVUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3ZhbHVlID0+IHNldEhpZGVUaXRsZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgIGhlbHA9e1xuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGl0bGUgaXMgaGlkZGVuIG9uIHRoZSByZW5kZXJlZCBwYWdlLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjYXJrZWVrLWJsb2Nrc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge2hpZGVJbWFnZUNoZWNrYm94fVxuICAgICAgICAgICAgICAgIHtmb2NhbFBvaW50fVxuICAgICAgICAgICAgICAgIHtvcGFjaXR5UGlja2VyfVxuICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgVGhlc2Ugc2V0dGluZ3MgbWF5IG5vdCBiZSBhcHBsaWVkIG9uIGFsbCBwYWdlcy9wb3N0cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7ICFzdXBwb3J0c01ldGEgJiZcbiAgICAgICAgICAgICAgICA8cD5Ob3Qgc3VwcG9ydGVkIGZvciB0aGlzIHBvc3QgdHlwZS4gSWYgeW91IHdhbnQgdG8gdXNlIHRoaXMgZmVhdHVyZSBvbiB0aGlzIHBvc3QsIGxldCB5b3VyIHNpdGUgYWRtaW4ga25vdyB0aGF0IHRoaXMgcG9zdCB0eXBlIG11c3Qgc3VwcG9ydCAmIzM5O2N1c3RvbS1maWVsZHMmIzM5Oy48L3A+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L1BsdWdpbkRvY3VtZW50U2V0dGluZ1BhbmVsPlxuICAgICk7XG59XG5cbmNvbnN0IGFwcGx5V2l0aFNlbGVjdCA9IHdpdGhTZWxlY3QoICggc2VsZWN0ICk9PiB7XG4gICAgY29uc3QgeyBnZXRFZGl0ZWRQb3N0QXR0cmlidXRlIH0gPSBzZWxlY3QoICdjb3JlL2VkaXRvcicgKTtcbiAgICBjb25zdCB7IGdldE1lZGlhLCBnZXRQb3N0VHlwZSB9ID0gc2VsZWN0KCAnY29yZScgKTtcbiAgICBjb25zdCB0eXBlID0gZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgndHlwZScpO1xuICAgIGNvbnN0IHBvc3RUeXBlID0gZ2V0UG9zdFR5cGUoIHR5cGUgKTtcbiAgICBsZXQgc3VwcG9ydHNPcGFjaXR5ID0gZmFsc2U7XG4gICAgbGV0IHN1cHBvcnRzTWV0YSA9IGZhbHNlLCBoaWRlVGl0bGUsIGhpZGVGZWF0dXJlZEltYWdlLCBmZWF0dXJlZEltYWdlRm9jYWxQb2ludCwgZmVhdHVyZWRJbWFnZUlkLCBmZWF0dXJlZE1lZGlhLCBmZWF0dXJlZEltYWdlT3BhY2l0eTtcbiAgICBpZiAocG9zdFR5cGUgJiYgcG9zdFR5cGUuc3VwcG9ydHNbJ2N1c3RvbS1maWVsZHMnXSAmJiBwb3N0VHlwZS5zdXBwb3J0c1snY3VzdG9tLWZpZWxkcyddKXtcbiAgICAgICAgc3VwcG9ydHNNZXRhID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHN1cHBvcnRzTWV0YSkge1xuICAgICAgICAvL3Bvc3QgdHlwZXMgbmVlZCB0byBzdXBwb3J0IGN1c3RvbSBmaWVsZHMgZm9yIHRoaXMgdG8gd29yayAtIGlmIG1pc3Npbmcgb3IganMgZXJyb3JzIGNoZWNrIGZvciB0aGF0XG4gICAgICAgIGhpZGVUaXRsZSA9IGdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoJ21ldGEnKVsnX2NhcmtlZWtibG9ja3NfdGl0bGVfaGlkZGVuJ107XG4gICAgICAgIGhpZGVGZWF0dXJlZEltYWdlID0gZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSgnbWV0YScpWydfY2Fya2Vla2Jsb2Nrc19mZWF0dXJlZGltYWdlX2hpZGRlbiddO1xuICAgICAgICBmZWF0dXJlZEltYWdlRm9jYWxQb2ludCA9IGdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApWyAnX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRfaW1hZ2VfZm9jYWxfcG9pbnQnIF07XG5cbiAgICAgICAgZmVhdHVyZWRJbWFnZUlkID0gZ2V0RWRpdGVkUG9zdEF0dHJpYnV0ZSggJ2ZlYXR1cmVkX21lZGlhJyApO1xuICAgICAgICBmZWF0dXJlZE1lZGlhID0gZmVhdHVyZWRJbWFnZUlkID8gZ2V0TWVkaWEoZmVhdHVyZWRJbWFnZUlkKSA6IG51bGw7XG5cblxuICAgICAgICAvL2NrQmxvY2tWYXJzIGFyZSBzdG9yZWQgaW4gc2l0ZSBvcHRpb25zIGFuZCBwYXNzZWQgdmlhIHdwX2FkZF9pbmxpbmVfc2NyaXB0XG4gICAgICAgIHN1cHBvcnRzT3BhY2l0eSA9IChja0Jsb2Nrc1ZhcnMgJiYgY2tCbG9ja3NWYXJzLnN1cHBvcnRzT3BhY2l0eSA9PSAxKSA/IHRydWUgOiBmYWxzZTtcblxuICAgICAgICBpZiAoc3VwcG9ydHNPcGFjaXR5KSB7XG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlT3BhY2l0eSA9IGdldEVkaXRlZFBvc3RBdHRyaWJ1dGUoICdtZXRhJyApWyAnX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRfaW1hZ2Vfb3BhY2l0eScgXTtcbiAgICAgICAgICAgIC8vd2Ugc2V0IHRoZSBkZWZhdWx0IHRvIDEwMSBzbyB3ZSBjYW4gZGlzdGluZ3Vpc2ggMCBmcm9tIGZhbHNlLlxuICAgICAgICAgICAgaWYgKGZlYXR1cmVkSW1hZ2VPcGFjaXR5ID09PSAxMDEpe1xuICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2VPcGFjaXR5ID0gcGFyc2VJbnQoY2tCbG9ja3NWYXJzLm9wYWNpdHlEZWZhdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaWRlVGl0bGUsXG4gICAgICAgICAgICBoaWRlRmVhdHVyZWRJbWFnZSxcbiAgICAgICAgICAgIGZlYXR1cmVkTWVkaWEsXG4gICAgICAgICAgICBmZWF0dXJlZEltYWdlRm9jYWxQb2ludCxcbiAgICAgICAgICAgIHN1cHBvcnRzTWV0YSxcbiAgICAgICAgICAgIGZlYXR1cmVkSW1hZ2VPcGFjaXR5LFxuICAgICAgICAgICAgc3VwcG9ydHNPcGFjaXR5XG4gICAgICAgIH07XG59KTtcbmNvbnN0IGFwcGx5V2l0aERpc3BhdGNoID0gd2l0aERpc3BhdGNoKCAoIGRpc3BhdGNoICkgPT4ge1xuICAgIGNvbnN0IHsgZWRpdFBvc3QgfSA9IGRpc3BhdGNoKCAnY29yZS9lZGl0b3InICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2V0SGlkZVRpdGxlOiBoaWRlVGl0bGUgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRQb3N0KHtcbiAgICAgICAgICAgICAgICAgICAgbWV0YTogeyBfY2Fya2Vla2Jsb2Nrc190aXRsZV9oaWRkZW46IGhpZGVUaXRsZSB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0SGlkZUZlYXR1cmVkSW1hZ2U6IGhpZGVGZWF0dXJlZEltYWdlID0+IHtcbiAgICAgICAgICAgICAgICBlZGl0UG9zdCh7XG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jYXJrZWVrYmxvY2tzX2ZlYXR1cmVkaW1hZ2VfaGlkZGVuOiBoaWRlRmVhdHVyZWRJbWFnZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZUZvY2FsUG9pbnQ6IGZvY2FsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRQb3N0KCB7IG1ldGE6IHsgX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRfaW1hZ2VfZm9jYWxfcG9pbnQ6IGZvY2FsUG9pbnQgfSB9ICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0RmVhdHVyZWRJbWFnZU9wYWNpdHk6IGZvY2FsUG9pbnQgPT4ge1xuICAgICAgICAgICAgICAgIGVkaXRQb3N0KCB7IG1ldGE6IHsgX2NhcmtlZWtibG9ja3NfZmVhdHVyZWRfaW1hZ2Vfb3BhY2l0eTogZm9jYWxQb2ludCB9IH0gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb21wb3NlKFxuICAgIGFwcGx5V2l0aFNlbGVjdCxcbiAgICBhcHBseVdpdGhEaXNwYXRjaCxcbikoUGFnZUhlYWRlclNldHRpbmdzKTsiLCJpbXBvcnQgeyBQbHVnaW5TaWRlYmFyIH0gZnJvbSBcIkB3b3JkcHJlc3MvZWRpdC1wb3N0XCI7XG5pbXBvcnQgeyBfXyB9IGZyb20gXCJAd29yZHByZXNzL2kxOG5cIjtcbmltcG9ydCB7IFRvZ2dsZUNvbnRyb2wsIFBhbmVsQm9keSB9IGZyb20gXCJAd29yZHByZXNzL2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IHVzZVNlbGVjdCwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwiQHdvcmRwcmVzcy9kYXRhXCI7XG5cbmZ1bmN0aW9uIENhcmtlZWtTaWRlYmFyKCApIHtcblxuICAgIGNvbnN0IGdyb3VwT3V0bGluZXMgPSB1c2VTZWxlY3QoKHNlbGVjdCk9PiB7XG4gICAgICAgIHJldHVybiBzZWxlY3QoICdjb3JlL2VkaXQtcG9zdCcgKS5pc0ZlYXR1cmVBY3RpdmUoICdja0dyb3VwT3V0bGluZXMnIClcbiAgICB9KTtcbiAgICBjb25zdCBjb2x1bW5PdXRsaW5lcyA9IHVzZVNlbGVjdCgoc2VsZWN0KT0+IHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdCggJ2NvcmUvZWRpdC1wb3N0JyApLmlzRmVhdHVyZUFjdGl2ZSggJ2NrQ29sdW1uT3V0bGluZXMnIClcbiAgICB9KTtcbiAgICBjb25zdCBibG9ja091dGxpbmVzID0gdXNlU2VsZWN0KChzZWxlY3QpPT4ge1xuICAgICAgICByZXR1cm4gc2VsZWN0KCAnY29yZS9lZGl0LXBvc3QnICkuaXNGZWF0dXJlQWN0aXZlKCAnY2tCbG9ja091dGxpbmVzJyApXG4gICAgfSk7XG4gICAgY29uc3QgeyB0b2dnbGVGZWF0dXJlIH0gPSB1c2VEaXNwYXRjaCggJ2NvcmUvZWRpdC1wb3N0JyApO1xuICAgIGlmICggZ3JvdXBPdXRsaW5lcyApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaXMtZ3JvdXAtbGluZXMtb24nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtZ3JvdXAtbGluZXMtb24nICk7XG4gICAgfVxuICAgIGlmICggY29sdW1uT3V0bGluZXMgKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCggJ2lzLWNvbHVtbi1saW5lcy1vbicgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoICdpcy1jb2x1bW4tbGluZXMtb24nICk7XG4gICAgfVxuICAgIGlmICggYmxvY2tPdXRsaW5lcyApIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCAnaXMtYmxvY2stbGluZXMtb24nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCAnaXMtYmxvY2stbGluZXMtb24nICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxQbHVnaW5TaWRlYmFyXG4gICAgICAgICAgICBuYW1lPVwiY2Fya2Vlay1ibG9ja3Mtc2lkZWJhclwiXG4gICAgICAgICAgICBpY29uPVwiYWRtaW4tc2V0dGluZ3NcIlxuICAgICAgICAgICAgdGl0bGU9e19fKFwiQ2Fya2VlayBCbG9ja3NcIil9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxQYW5lbEJvZHkgdGl0bGU9e19fKFwiRWRpdG9yIENvbnRyb2xzXCIpfT5cbiAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiT3V0bGluZSBHcm91cHNcIil9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17IGdyb3VwT3V0bGluZXMgfVxuICAgICAgICAgICAgICAgIGhlbHA9e19fKFwiU2hvdyBvdXRsaW5lcyBvbiBHcm91cCBCbG9ja3MgaW4gZWRpdCB2aWV3XCIpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVGZWF0dXJlKCAnY2tHcm91cE91dGxpbmVzJyApO1xuICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxUb2dnbGVDb250cm9sXG4gICAgICAgICAgICAgICAgbGFiZWw9e19fKFwiT3V0bGluZSBDb2x1bW5zXCIpfVxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyBjb2x1bW5PdXRsaW5lcyB9XG4gICAgICAgICAgICAgICAgaGVscD17X18oXCJTaG93IG91dGxpbmVzIG9uIENvbHVtbiBCbG9ja3MgaW4gZWRpdCB2aWV3XCIpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVGZWF0dXJlKCAnY2tDb2x1bW5PdXRsaW5lcycgKTtcbiAgICAgICAgICAgICAgICB9IH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8VG9nZ2xlQ29udHJvbFxuICAgICAgICAgICAgICAgIGxhYmVsPXtfXyhcIk91dGxpbmUgQWxsIEJsb2Nrc1wiKX1cbiAgICAgICAgICAgICAgICBjaGVja2VkPXsgYmxvY2tPdXRsaW5lcyB9XG4gICAgICAgICAgICAgICAgaGVscD17X18oXCJTaG93IG91dGxpbmVzIG9uIGFsbCBCbG9ja3MgaW4gZWRpdCB2aWV3XCIpfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2dnbGVGZWF0dXJlKCAnY2tCbG9ja091dGxpbmVzJyApO1xuICAgICAgICAgICAgICAgIH0gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvUGFuZWxCb2R5PlxuXG5cbiAgICAgICAgPC9QbHVnaW5TaWRlYmFyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmtlZWtTaWRlYmFyOyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gd3AuY29tcG9uZW50czsiLCJtb2R1bGUuZXhwb3J0cyA9IHdwLmNvbXBvc2U7IiwibW9kdWxlLmV4cG9ydHMgPSB3cC5kYXRhOyIsIm1vZHVsZS5leHBvcnRzID0gd3AuZWRpdFBvc3Q7IiwibW9kdWxlLmV4cG9ydHMgPSB3cC5pMThuOyIsIm1vZHVsZS5leHBvcnRzID0gd3AucGx1Z2luczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBtb2R1bGU7IH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=