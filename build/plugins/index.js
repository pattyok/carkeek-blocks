/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugins/settings.js":
/*!*********************************!*\
  !*** ./src/plugins/settings.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);






/* global ckBlocksVars */

function PageHeaderSettings(props) {
  const {
    hideTitle,
    setHideTitle,
    hideFeaturedImage,
    setHideFeaturedImage,
    featuredMedia,
    featuredImageFocalPoint,
    setFeaturedImageFocalPoint,
    supportsMeta,
    supportsOpacity,
    setFeaturedImageOpacity,
    featuredImageOpacity
  } = props;
  const titleBlock = document.querySelector(".editor-post-title__block");
  const defaultFocal = {
    x: 0.5,
    y: 0.5
  };
  if (supportsOpacity && (!featuredImageFocalPoint || typeof featuredImageFocalPoint !== 'object')) {
    setFeaturedImageFocalPoint(defaultFocal);
  }
  if (titleBlock) {
    const isHidden = typeof hideTitle !== "undefined" && typeof hideTitle !== "undefined" ? hideTitle : false;
    const bodyClass = isHidden ? "carkeek-blocks-title-hidden" : "carkeek-blocks-title-visible";

    //remove existing class
    if (isHidden) {
      document.body.classList.remove("carkeek-blocks-title-visible");
    } else {
      document.body.classList.remove("carkeek-blocks-title-hidden");
    }
    document.body.classList.add(bodyClass);
  }

  // console.log(featuredImageOpacity);
  // console.log(ckBlocksVars);
  // if (!featuredImageOpacity && featuredImageOpacity !== 0 ) {
  //     setFeaturedImageOpacity(ckBlocksVars.opacityDefault);
  // }

  function resetFocalPoint() {
    setFeaturedImageFocalPoint(defaultFocal);
  }
  let focalPoint, opacityPicker;
  if (!hideFeaturedImage && featuredMedia && featuredMedia.source_url) {
    const url = featuredMedia.source_url;
    const {
      width,
      height
    } = featuredMedia.media_details;
    const imageClasses = supportsOpacity ? `ck-focal-point-wrapper has-opacity` : '';
    focalPoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: imageClasses,
      style: {
        "--focal-opacity": featuredImageOpacity
      }
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured Image Focal Point'),
      url: url,
      dimensions: {
        width,
        height
      },
      value: featuredImageFocalPoint,
      onChange: newFocalPoint => setFeaturedImageFocalPoint(newFocalPoint)
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      variant: "secondary",
      className: 'is-secondary',
      onClick: resetFocalPoint
    }, "Reset FocalPoint"));
    if (supportsOpacity) {
      opacityPicker = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
        label: "Overlay Opacity",
        value: featuredImageOpacity,
        onChange: value => setFeaturedImageOpacity(value),
        min: 0,
        max: 50,
        step: 5
      }));
    }
  }
  const hideImageCheckbox = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    className: "carkeek-hide-featured-image-label",
    label: "Hide Featured Image",
    checked: hideFeaturedImage,
    onChange: value => setHideFeaturedImage(value),
    help: hideFeaturedImage ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The Featured Image is hidden on the rendered page.", "carkeek-blocks") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("The Featured Image is visible on the rendered page.", "carkeek-blocks")
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginDocumentSettingPanel, {
    name: "page-header-settings-panel",
    title: "Page Header Settings",
    className: "page-header-settings-panel"
  }, supportsMeta && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    className: "carkeek-hide-title-label",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide Page Title", "carkeek-blocks"),
    checked: hideTitle,
    onChange: value => setHideTitle(value),
    help: hideTitle ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title is hidden on the rendered page.", "carkeek-blocks") : null
  }), hideImageCheckbox, focalPoint, opacityPicker, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "These settings may not be applied on all pages/posts.")), !supportsMeta && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Not supported for this post type. If you want to use this feature on this post, let your site admin know that this post type must support 'custom-fields'."));
}
const applyWithSelect = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const {
    getEditedPostAttribute
  } = select('core/editor');
  const {
    getMedia,
    getPostType
  } = select('core');
  const type = getEditedPostAttribute('type');
  const postType = getPostType(type);
  let supportsOpacity = false;
  let supportsMeta = false,
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
    featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;

    //ckBlockVars are stored in site options and passed via wp_add_inline_script
    supportsOpacity = ckBlocksVars && ckBlocksVars.supportsOpacity == 1 ? true : false;
    if (supportsOpacity) {
      featuredImageOpacity = getEditedPostAttribute('meta')['_carkeekblocks_featured_image_opacity'];
      //we set the default to 101 so we can distinguish 0 from false.
      if (featuredImageOpacity === 101) {
        featuredImageOpacity = parseInt(ckBlocksVars.opacityDefault);
      }
    }
  }
  return {
    hideTitle,
    hideFeaturedImage,
    featuredMedia,
    featuredImageFocalPoint,
    supportsMeta,
    featuredImageOpacity,
    supportsOpacity
  };
});
const applyWithDispatch = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withDispatch)(dispatch => {
  const {
    editPost
  } = dispatch('core/editor');
  return {
    setHideTitle: hideTitle => {
      editPost({
        meta: {
          _carkeekblocks_title_hidden: hideTitle
        }
      });
    },
    setHideFeaturedImage: hideFeaturedImage => {
      editPost({
        meta: {
          _carkeekblocks_featuredimage_hidden: hideFeaturedImage
        }
      });
    },
    setFeaturedImageFocalPoint: focalPoint => {
      editPost({
        meta: {
          _carkeekblocks_featured_image_focal_point: focalPoint
        }
      });
    },
    setFeaturedImageOpacity: focalPoint => {
      editPost({
        meta: {
          _carkeekblocks_featured_image_opacity: focalPoint
        }
      });
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.compose)(applyWithSelect, applyWithDispatch)(PageHeaderSettings));

/***/ }),

/***/ "./src/plugins/sidebar.js":
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);





function CarkeekSidebar() {
  const groupOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core/edit-post').isFeatureActive('ckGroupOutlines');
  });
  const columnOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core/edit-post').isFeatureActive('ckColumnOutlines');
  });
  const blockOutlines = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useSelect)(select => {
    return select('core/edit-post').isFeatureActive('ckBlockOutlines');
  });
  const {
    toggleFeature
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)('core/edit-post');
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
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_1__.PluginSidebar, {
    name: "carkeek-blocks-sidebar",
    icon: "admin-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Carkeek Blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Editor Controls")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Outline Groups"),
    checked: groupOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show outlines on Group Blocks in edit view"),
    onChange: () => {
      toggleFeature('ckGroupOutlines');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Outline Columns"),
    checked: columnOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show outlines on Column Blocks in edit view"),
    onChange: () => {
      toggleFeature('ckColumnOutlines');
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Outline All Blocks"),
    checked: blockOutlines,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show outlines on all Blocks in edit view"),
    onChange: () => {
      toggleFeature('ckBlockOutlines');
    }
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CarkeekSidebar);

/***/ }),

/***/ "./src/plugins/editor.scss":
/*!*********************************!*\
  !*** ./src/plugins/editor.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["plugins"];

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/plugins/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/plugins/editor.scss");
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
  render: _settings__WEBPACK_IMPORTED_MODULE_1__["default"]
});
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_3__.registerPlugin)("carkeek-blocks-sidebar", {
  icon: false,
  render: _sidebar__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map