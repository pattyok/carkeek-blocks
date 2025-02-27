/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/widget-row/deprecated.js":
/*!**************************************!*\
  !*** ./src/widget-row/deprecated.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



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
  save({
    attributes
  }) {
    const {
      allowItemsWrap,
      itemsPerRow,
      itemsPerRowMobile,
      itemsPerRowTablet,
      alignInnerBlocks,
      rowDirection
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: true,
        [`has-${itemsPerRowMobile}-columns-mobile`]: true,
        [`has-${itemsPerRowTablet}-columns-tablet`]: true,
        [`direction-${rowDirection}`]: 'true'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
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
  save({
    attributes
  }) {
    const {
      allowItemsWrap,
      itemsPerRow,
      alignInnerBlocks,
      rowDirection
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: 'true',
        [`direction-${rowDirection}`]: 'true'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
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
  save({
    attributes
  }) {
    const {
      allowItemsWrap,
      itemsPerRow,
      alignInnerBlocks
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-wrap-${allowItemsWrap}`]: true,
        [`ck-columns-align-${alignInnerBlocks}`]: true,
        [`has-${itemsPerRow}-columns`]: 'true'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/widget-row/edit.js":
/*!********************************!*\
  !*** ./src/widget-row/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CollapseSectionEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);








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
    alignInnerBlocks,
    customGap,
    columnGap,
    rowGap
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
  const availBlocks = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.getBlockTypes)();
  let myAllowedBlocks = allowedBlocks;
  let addLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('a Block');
  if (innerBlockType) {
    myAllowedBlocks = [innerBlockType];
    const blockObject = (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.getBlockType)(innerBlockType);
    blockObject ? addLabel = blockObject.title : addLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('a Block');
  } else {
    myAllowedBlocks = [];
  }
  let blockOptions = availBlocks.map(item => {
    return {
      label: item.title,
      value: item.name
    };
  });
  blockOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.sortBy)(blockOptions, ['label']);
  blockOptions.unshift({
    label: 'Select a Block',
    value: ''
  });
  let blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)();
  const innerBlockCount = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.useSelect)(select => select('core/block-editor').getBlock(clientId).innerBlocks);
  const appenderToUse = () => {
    if ('flex' == layoutType && !allowItemsWrap && innerBlockCount.length >= itemsPerRow) {
      return false;
    } else {
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
        className: "ck-custom-appender",
        onClick: () => {
          (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.dispatch)('core/block-editor').insertBlocks((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_6__.createBlock)(innerBlockType), 9999, clientId);
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(' + Add '), " ", addLabel);
    }
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Layout Settings", "carkeek-blocks")
  }, layoutType == 'flex' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Allow Items to Wrap"),
    checked: allowItemsWrap,
    onChange: value => setAttributes({
      allowItemsWrap: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RadioControl, {
    label: "Align inner blocks",
    selected: alignInnerBlocks,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('If the number of inner blocks does not complete a row, how should they be aligned?'),
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
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Customize Gaps"),
    checked: customGap,
    onChange: value => setAttributes({
      customGap: value
    })
  }), customGap && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Column Gap", "carkeek-blocks"),
    value: columnGap,
    help: "Set the space between each item",
    onChange: val => setAttributes({
      columnGap: parseInt(val)
    }),
    min: 0,
    max: 8
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Row Gap", "carkeek-blocks"),
    value: rowGap,
    help: "Set the space between each row",
    onChange: val => setAttributes({
      rowGap: parseInt(val)
    }),
    min: 0,
    max: 8
  }))), (allowItemsWrap || alignInnerBlocks !== 'stretch') && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items Per Row", "carkeek-blocks"),
    value: itemsPerRow,
    help: allowItemsWrap ? "" : "This will fix the size of each item",
    onChange: itemsPerRow => setAttributes({
      itemsPerRow
    }),
    min: 1,
    max: 6
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Responsive Settings", "carkeek-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items Per Row Mobile", "carkeek-blocks"),
    value: itemsPerRowMobile,
    onChange: itemsPerRowMobile => setAttributes({
      itemsPerRowMobile
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items Per Row Tablet", "carkeek-blocks"),
    value: itemsPerRowTablet,
    onChange: itemsPerRowTablet => setAttributes({
      itemsPerRowTablet
    }),
    min: 1,
    max: 6
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorAdvancedControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.SelectControl, {
    label: "Restrict to Block",
    value: innerBlockType,
    options: blockOptions,
    onChange: value => setAttributes({
      innerBlockType: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__.RadioControl, {
    label: "Layout Type",
    selected: layoutType,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('If trailing items should align center choose flex, otherwise grid is preferred'),
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
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(blockProps.className, {
      "ck-columns": 'true',
      [`ck-columns-layout-${layoutType}`]: layoutType == 'grid',
      [`ck-columns-wrap-${allowItemsWrap}`]: layoutType == 'flex',
      [`ck-columns-align-${alignInnerBlocks}`]: layoutType == 'flex',
      [`has-${itemsPerRow}-columns`]: alignInnerBlocks !== 'stretch' || layoutType == 'grid',
      [`has-${itemsPerRowMobile}-columns-mobile`]: true,
      [`has-${itemsPerRowTablet}-columns-tablet`]: true
    })
  }, innerBlockType ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    allowedBlocks: myAllowedBlocks,
    orientation: "horizontal",
    renderAppender: () => appenderToUse()
  }) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    orientation: "horizontal"
  })));
}

/***/ }),

/***/ "./src/widget-row/icons.js":
/*!*********************************!*\
  !*** ./src/widget-row/icons.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.columns = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 32 32"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M1 1023.362c-.552 0-1 .486-1 1.084v23.832c0 .6.447 1.084 1 1.084h30c.553 0 1-.485 1-1.084v-23.832c0-.599-.447-1.084-1-1.084H1zm22 1a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm3 0a1 1 0 110 2 1 1 0 110-2zm-27.063 3h28.125c.518 0 .94.392.94.875v19.25c0 .483-.421.875-.94.875H1.938c-.518 0-.937-.392-.937-.875v-19.25c0-.483.42-.875.938-.875zm.094 1v19h8v-19h-8zm10 0v19h8v-19h-8zm10 0v19h8v-19h-8z",
  transform: "translate(0 -1020.362)"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/widget-row/index.js":
/*!*********************************!*\
  !*** ./src/widget-row/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/widget-row/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/widget-row/style.scss");
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
  save({
    attributes
  }) {
    const {
      allowItemsWrap,
      itemsPerRow,
      layoutType,
      itemsPerRowMobile,
      itemsPerRowTablet,
      alignInnerBlocks,
      customGap,
      columnGap,
      rowGap
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(blockProps.className, {
        "ck-columns": 'true',
        [`ck-columns-layout-${layoutType}`]: layoutType == 'grid',
        [`ck-columns-wrap-${allowItemsWrap}`]: layoutType == 'flex',
        [`ck-columns-align-${alignInnerBlocks}`]: layoutType == 'flex',
        [`has-${itemsPerRow}-columns`]: alignInnerBlocks !== 'stretch' || layoutType == 'grid',
        [`has-${itemsPerRowMobile}-columns-mobile`]: true,
        [`has-${itemsPerRowTablet}-columns-tablet`]: true,
        [`ck-columns-col-gap-${columnGap}`]: customGap,
        [`ck-columns-row-gap-${rowGap}`]: customGap
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-columns__wrap'
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_9__.InnerBlocks.Content, null)));
  }
});

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/widget-row/style.scss":
/*!***********************************!*\
  !*** ./src/widget-row/style.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/widget-row/block.json":
/*!***********************************!*\
  !*** ./src/widget-row/block.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/widget-row","version":"2.0.01","title":"Widget Row","category":"widgets","description":"Layout inner blocks, equally distributed in columns.","supports":{"anchor":true,"html":false,"align":["wide","full","left","center","right"],"spacing":{"padding":true,"margin":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"border-solid","label":"Borders Solid"},{"name":"border-dashed","label":"Borders Dashed"},{"name":"border-dotted","label":"Borders Dotted"}],"attributes":{"innerBlockType":{"type":"string"},"allowedBlocks":{"type":"array"},"blocksTemplate":{"type":"array"},"layoutType":{"type":"string","default":"grid"},"allowItemsWrap":{"type":"boolean","default":false},"itemsPerRow":{"type":"number","default":3},"itemsPerRowMobile":{"type":"number","default":1},"itemsPerRowTablet":{"type":"number","default":2},"alignInnerBlocks":{"type":"string","default":"left"},"customGap":{"type":"boolean","default":false},"rowGap":{"type":"number","default":3},"columnGap":{"type":"number","default":3},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}}},"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"widget-row/index": 0,
/******/ 			"widget-row/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["widget-row/style-index"], () => (__webpack_require__("./src/widget-row/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map