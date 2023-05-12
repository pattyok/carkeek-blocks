/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/widget-row/deprecated.js":
/*!**************************************!*\
  !*** ./src/widget-row/deprecated.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);




const deprecated = [{
  attributes: {
    innerBlockType: {
      type: 'string'
    },
    allowedBlocks: {
      type: 'array'
    },
    blocksTemplate: {
      type: 'array'
    },
    allowItemsWrap: {
      type: 'boolean',
      default: false
    },
    itemsPerRow: {
      type: 'number',
      default: 3
    },
    itemsPerRowMobile: {
      type: 'number',
      default: 1
    },
    itemsPerRowTablet: {
      type: 'number',
      default: 2
    },
    alignInnerBlocks: {
      type: 'string',
      default: 'left'
    },
    rowDirection: {
      type: 'string',
      default: 'horizontal'
    }
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      allowItemsWrap,
      itemsPerRow,
      itemsPerRowMobile,
      itemsPerRowTablet,
      alignInnerBlocks,
      rowDirection
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: true,
        [`has-${itemsPerRowMobile}-columns-mobile`]: true,
        [`has-${itemsPerRowTablet}-columns-tablet`]: true,
        [`direction-${rowDirection}`]: 'true'
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }

}, {
  attributes: {
    innerBlockType: {
      type: 'string'
    },
    allowedBlocks: {
      type: 'array'
    },
    blocksTemplate: {
      type: 'array'
    },
    allowItemsWrap: {
      type: 'boolean',
      default: false
    },
    itemsPerRow: {
      type: 'number',
      default: 3
    },
    alignInnerBlocks: {
      type: 'string',
      default: 'left'
    },
    rowDirection: {
      type: 'string',
      default: 'horizontal'
    }
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      allowItemsWrap,
      itemsPerRow,
      alignInnerBlocks,
      rowDirection
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: 'true',
        [`direction-${rowDirection}`]: 'true'
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }

}, {
  attributes: {
    innerBlockType: {
      type: 'string'
    },
    allowedBlocks: {
      type: 'array'
    },
    blocksTemplate: {
      type: 'array'
    },
    allowItemsWrap: {
      type: 'boolean',
      default: false
    },
    itemsPerRow: {
      type: 'number',
      default: 3
    },
    alignInnerBlocks: {
      type: 'string',
      default: 'left'
    }
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      allowItemsWrap,
      itemsPerRow,
      alignInnerBlocks
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: 'true'
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null)));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/widget-row/edit.js":
/*!********************************!*\
  !*** ./src/widget-row/edit.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CollapseSectionEdit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);









function CollapseSectionEdit(props) {
  const {
    attributes,
    setAttributes,
    clientId
  } = props;
  const {
    innerBlockType,
    layoutType,
    allowedBlocks,
    allowItemsWrap,
    itemsPerRow,
    itemsPerRowMobile,
    itemsPerRowTablet,
    alignInnerBlocks
  } = attributes;
  /* for existing blocks we set to flex as that was previously the default */

  if (!layoutType) {
    setAttributes({
      layoutType: 'flex'
    });
  }

  if (!itemsPerRowTablet) {
    setAttributes({
      itemsPerRowTablet: itemsPerRow > 3 ? 3 : itemsPerRow
    });
  }

  if (!itemsPerRowMobile) {
    setAttributes({
      itemsPerRowMobile: 1
    });
  }

  const availBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.getBlockTypes)();
  let myAllowedBlocks = allowedBlocks;

  let addLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('a Block');

  if (innerBlockType) {
    myAllowedBlocks = [innerBlockType];
    const blockObject = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.getBlockType)(innerBlockType);
    blockObject ? addLabel = blockObject.title : addLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('a Block');
  } else {
    myAllowedBlocks = [];
  }

  let blockOptions = availBlocks.map(item => {
    return {
      label: item.title,
      value: item.name
    };
  });
  blockOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.sortBy)(blockOptions, ['label']);
  blockOptions.unshift({
    label: 'Select a Block',
    value: ''
  });
  let blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  const innerBlockCount = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.useSelect)(select => select('core/block-editor').getBlock(clientId).innerBlocks);

  const appenderToUse = () => {
    if ('flex' == layoutType && !allowItemsWrap && innerBlockCount.length >= itemsPerRow) {
      return false;
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        className: "ck-custom-appender",
        onClick: () => {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_8__.dispatch)('core/block-editor').insertBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.createBlock)(innerBlockType), 9999, clientId);
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)(' + Add '), " ", addLabel);
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Layout Settings", "carkeek-blocks")
  }, layoutType == 'flex' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Allow Items to Wrap"),
    checked: allowItemsWrap,
    onChange: value => setAttributes({
      allowItemsWrap: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: "Align inner blocks",
    selected: alignInnerBlocks,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('If the number of inner blocks does not complete a row, how should they be aligned?'),
    options: [{
      label: 'Left',
      value: 'left'
    }, {
      label: 'Right',
      value: 'right'
    }, {
      label: 'Center',
      value: 'center'
    }, {
      label: 'Stretch to fit',
      value: 'stretch'
    }],
    onChange: value => setAttributes({
      alignInnerBlocks: value
    })
  })), (allowItemsWrap || alignInnerBlocks !== 'stretch') && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Items Per Row", "carkeek-blocks"),
    value: itemsPerRow,
    help: allowItemsWrap ? "" : "This will fix the size of each item",
    onChange: itemsPerRow => setAttributes({
      itemsPerRow
    }),
    min: 1,
    max: 6
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Responsive Settings", "carkeek-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Items Per Row Mobile", "carkeek-blocks"),
    value: itemsPerRowMobile,
    onChange: itemsPerRowMobile => setAttributes({
      itemsPerRowMobile
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Items Per Row Tablet", "carkeek-blocks"),
    value: itemsPerRowTablet,
    onChange: itemsPerRowTablet => setAttributes({
      itemsPerRowTablet
    }),
    min: 1,
    max: 6
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.SelectControl, {
    label: "Restrict to Block",
    value: innerBlockType,
    options: blockOptions,
    onChange: value => setAttributes({
      innerBlockType: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: "Layout Type",
    selected: layoutType,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('If trailing items should align center choose flex, otherwise grid is preferred'),
    options: [{
      label: 'Grid',
      value: 'grid'
    }, {
      label: 'Flex-flow',
      value: 'flex'
    }],
    onChange: value => setAttributes({
      layoutType: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
      "ck-columns": 'true',
      [`ck-columns-layout-${layoutType}`]: layoutType == 'grid',
      [`ck-columns-wrap-${allowItemsWrap}`]: layoutType == 'flex',
      [`ck-columns-align-${alignInnerBlocks}`]: layoutType == 'flex',
      [`has-${itemsPerRow}-columns`]: alignInnerBlocks !== 'stretch' || layoutType == 'grid',
      [`has-${itemsPerRowMobile}-columns-mobile`]: true,
      [`has-${itemsPerRowTablet}-columns-tablet`]: true
    })
  }), innerBlockType ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    allowedBlocks: myAllowedBlocks,
    orientation: "horizontal",
    renderAppender: () => appenderToUse()
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InnerBlocks, {
    orientation: "horizontal"
  })));
}

/***/ }),

/***/ "./src/widget-row/icons.js":
/*!*********************************!*\
  !*** ./src/widget-row/icons.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.columns = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 32 32"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 1023.362c-.552 0-1 .486-1 1.084v23.832c0 .6.447 1.084 1 1.084h30c.553 0 1-.485 1-1.084v-23.832c0-.599-.447-1.084-1-1.084H1zm22 1a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm-27.063 3h28.125c.518 0 .94.392.94.875v19.25c0 .483-.421.875-.94.875H1.938c-.518 0-.937-.392-.937-.875v-19.25c0-.483.42-.875.938-.875zm.094 1v19h8v-19h-8zm10 0v19h8v-19h-8zm10 0v19h8v-19h-8z",
  transform: "translate(0 -1020.362)"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/widget-row/editor.scss":
/*!************************************!*\
  !*** ./src/widget-row/editor.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./src/widget-row/block.json":
/*!***********************************!*\
  !*** ./src/widget-row/block.json ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/widget-row","version":"2.0.0","title":"Widget Row","category":"widgets","description":"Layout inner blocks, equally distributed in columns.","supports":{"anchor":true,"html":false,"align":["wide","full","left","center","right"]},"attributes":{"innerBlockType":{"type":"string"},"allowedBlocks":{"type":"array"},"blocksTemplate":{"type":"array"},"layoutType":{"type":"string","default":"grid"},"allowItemsWrap":{"type":"boolean","default":false},"itemsPerRow":{"type":"number","default":3},"itemsPerRowMobile":{"type":"number","default":1},"itemsPerRowTablet":{"type":"number","default":2},"alignInnerBlocks":{"type":"string","default":"left"}},"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./src/widget-row/index.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/widget-row/editor.scss");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/widget-row/icons.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit */ "./src/widget-row/edit.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deprecated */ "./src/widget-row/deprecated.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./block.json */ "./src/widget-row/block.json");











(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_10__, {
  icon: {
    src: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].columns
  },
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("columns", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("horizontal", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_8__.__)("layout", "carkeek-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_4__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_5__["default"],

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      allowItemsWrap,
      itemsPerRow,
      layoutType,
      itemsPerRowMobile,
      itemsPerRowTablet,
      alignInnerBlocks
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.useBlockProps.save();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-layout-${layoutType}`]: layoutType == 'grid',
        [`ck-columns-wrap-${allowItemsWrap}`]: layoutType == 'flex',
        [`ck-columns-align-${alignInnerBlocks}`]: layoutType == 'flex',
        [`has-${itemsPerRow}-columns`]: alignInnerBlocks !== 'stretch' || layoutType == 'grid',
        [`has-${itemsPerRowMobile}-columns-mobile`]: true,
        [`has-${itemsPerRowTablet}-columns-tablet`]: true
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.InnerBlocks.Content, null)));
  }

});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map