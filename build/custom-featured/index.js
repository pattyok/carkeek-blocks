/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-featured/edit.js":
/*!*************************************!*\
  !*** ./src/custom-featured/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/custom-featured/icons.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);







function Edit(props) {
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  const {
    featuredMedia,
    imageSizes,
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    focalPoint,
    blockId,
    imageSize,
    showCaption
  } = attributes;
  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }
  let url, width, height, caption;
  if (featuredMedia && featuredMedia.source_url) {
    url = featuredMedia.source_url;
    width = featuredMedia.width;
    height = featuredMedia.height;
    caption = featuredMedia.caption;
  }
  let imageStyle = {};
  if (focalPoint) {
    imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
  }
  let sizeOptions = [];
  if (imageSizes) {
    sizeOptions = imageSizes.map(type => ({
      value: type.slug,
      label: type.name
    }));
    sizeOptions.unshift({
      value: 'default',
      label: 'Default'
    });
  }
  let img = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    style: imageStyle,
    role: "presentation"
  }), showCaption && caption && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "image-caption"
  }, caption.raw), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Spinner, null));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Image settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Focal Point", "carkeek-blocks"),
    url: url,
    dimensions: {
      width,
      height
    },
    onChange: newFocalPoint => setAttributes({
      focalPoint: newFocalPoint
    }),
    value: focalPoint
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show caption", "carkeek-blocks"),
    onChange: value => setAttributes({
      showCaption: value
    }),
    checked: showCaption
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Size", "carkeek-blocks"),
    onChange: value => setAttributes({
      imageSize: value
    }),
    options: sizeOptions,
    value: imageSize
  }))), img) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "wp-block empty-block"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "empty-block__icon"
  }, _icons__WEBPACK_IMPORTED_MODULE_1__["default"].featuredimage), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "empty-block__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "empty-block__title"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Featured Image Block.', 'carkeek-blocks')), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "empty-block__text"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Set the featured image in the Page Settings pane', 'carkeek-blocks')))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)(select => {
  const {
    getEditedPostAttribute
  } = select('core/editor');
  const {
    getMedia
  } = select('core');
  const featuredImageId = getEditedPostAttribute('featured_media');
  const {
    getSettings
  } = select('core/block-editor');
  const {
    imageSizes
  } = getSettings();
  const featuredMedia = featuredImageId ? getMedia(featuredImageId) : null;
  return {
    featuredMedia,
    imageSizes
  };
})(Edit));

/***/ }),

/***/ "./src/custom-featured/icons.js":
/*!**************************************!*\
  !*** ./src/custom-featured/icons.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.featuredimage = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "100",
  width: "100",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 1",
  viewBox: "0 0 512 341.333",
  x: "0px",
  y: "0px"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,310.3a7.758,7.758,0,0,0-7.757,7.758v7.757h-7.758a7.758,7.758,0,0,0,0,15.515h15.515A7.757,7.757,0,0,0,512,333.576V318.061A7.758,7.758,0,0,0,504.242,310.3Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M271.515,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M333.576,325.818H302.545a7.758,7.758,0,0,0,0,15.515h31.031a7.758,7.758,0,0,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M147.394,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M85.333,325.818H54.3a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M395.636,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M209.455,325.818H178.424a7.758,7.758,0,0,0,0,15.515h31.031a7.758,7.758,0,0,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M457.7,325.818h-31.03a7.758,7.758,0,1,0,0,15.515H457.7a7.758,7.758,0,1,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.273,325.818H15.515v-7.757a7.758,7.758,0,1,0-15.515,0v15.515a7.757,7.757,0,0,0,7.758,7.757H23.273a7.758,7.758,0,0,0,0-15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,162.049a7.757,7.757,0,0,0,7.757-7.757V121.534a7.758,7.758,0,0,0-15.515,0v32.758A7.757,7.757,0,0,0,7.758,162.049Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,96.538a7.758,7.758,0,0,0,7.757-7.758V56.027A7.758,7.758,0,1,0,0,56.027V88.78A7.758,7.758,0,0,0,7.758,96.538Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,227.557a7.758,7.758,0,0,0,7.757-7.758V187.045a7.758,7.758,0,0,0-15.515,0V219.8A7.758,7.758,0,0,0,7.758,227.557Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,293.064a7.757,7.757,0,0,0,7.757-7.757V252.553a7.758,7.758,0,1,0-15.515,0v32.754A7.757,7.757,0,0,0,7.758,293.064Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.273,0H7.758A7.758,7.758,0,0,0,0,7.758V23.273a7.758,7.758,0,0,0,15.515,0V15.515h7.758A7.758,7.758,0,0,0,23.273,0Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M54.3,15.515h31.03A7.758,7.758,0,1,0,85.333,0H54.3a7.758,7.758,0,1,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M116.364,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M364.606,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M240.485,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M302.545,15.515h31.031a7.758,7.758,0,0,0,0-15.515H302.545a7.758,7.758,0,0,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M457.7,0h-31.03a7.758,7.758,0,1,0,0,15.515H457.7A7.758,7.758,0,1,0,457.7,0Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M178.424,15.515h31.031a7.758,7.758,0,0,0,0-15.515H178.424a7.758,7.758,0,0,0,0,15.515Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,0H488.727a7.758,7.758,0,0,0,0,15.515h7.758v7.758a7.758,7.758,0,0,0,15.515,0V7.758A7.758,7.758,0,0,0,504.242,0Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,48.269a7.757,7.757,0,0,0-7.757,7.758V88.78a7.758,7.758,0,1,0,15.515,0V56.027A7.758,7.758,0,0,0,504.242,48.269Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,179.284a7.758,7.758,0,0,0-7.757,7.758V219.8a7.758,7.758,0,1,0,15.515,0V187.042A7.758,7.758,0,0,0,504.242,179.284Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,244.8a7.758,7.758,0,0,0-7.757,7.758v32.754a7.758,7.758,0,0,0,15.515,0V252.553A7.758,7.758,0,0,0,504.242,244.8Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,113.777a7.757,7.757,0,0,0-7.757,7.757v32.754a7.758,7.758,0,0,0,15.515,0V121.534A7.757,7.757,0,0,0,504.242,113.777Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M265.7,294.788a7.758,7.758,0,0,0,5.731-12.981L172.523,173.2a7.75,7.75,0,0,0-5.625-2.534,8.157,8.157,0,0,0-5.693,2.371L56.477,281.644a7.758,7.758,0,1,0,11.167,10.773l98.981-102.648,93.337,102.485A7.73,7.73,0,0,0,265.7,294.788Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M260.678,236.686a7.759,7.759,0,1,0,10.038,11.833l70.136-59.511L442.466,292.466A7.757,7.757,0,0,0,453.534,281.6L346.867,172.989a7.757,7.757,0,0,0-10.553-.481Z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M263.758,159.03a46.546,46.546,0,1,0-46.546-46.545A46.6,46.6,0,0,0,263.758,159.03Zm0-77.575a31.03,31.03,0,1,1-31.031,31.03A31.066,31.066,0,0,1,263.758,81.455Z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/custom-featured/index.js":
/*!**************************************!*\
  !*** ./src/custom-featured/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/custom-featured/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/custom-featured/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/custom-featured/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/custom-featured/style.scss":
/*!****************************************!*\
  !*** ./src/custom-featured/style.scss ***!
  \****************************************/
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

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["blob"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/custom-featured/block.json":
/*!****************************************!*\
  !*** ./src/custom-featured/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/custom-featured","version":"0.1.0","title":"Featured Image Block","category":"widgets","icon":"smiley","description":"Display the featured image in the body of your post","supports":{"align":["wide","full","left","center","right"],"anchor":false,"spacing":{"padding":true,"margin":true}},"textdomain":"carkeek-blocks","attributes":{"focalPoint":{"type":"object"},"blockId":{"type":"string"},"imageSize":{"type":"string"},"className":{"type":"string"},"showCaption":{"type":"boolean","default":false},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}}},"styles":[{"name":"landscape","label":"Landscape","isDefault":true},{"name":"square","label":"Square"},{"name":"portrait","label":"Portrait"},{"name":"no-crop","label":"No Crop"}],"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"custom-featured/index": 0,
/******/ 			"custom-featured/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkcarkeek_blocks_v2"] = globalThis["webpackChunkcarkeek_blocks_v2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["custom-featured/style-index"], () => (__webpack_require__("./src/custom-featured/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map