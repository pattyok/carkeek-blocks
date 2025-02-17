/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/line-chart/deprecated.js":
/*!**************************************!*\
  !*** ./src/line-chart/deprecated.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



const deprecated = [{
  attributes: {
    numberVal: {
      type: "number",
      default: 0
    },
    numberValGoal: {
      type: "number",
      default: 0
    },
    expressAs: {
      type: "string",
      default: "dollar"
    },
    textBeforeVal: {
      type: "string",
      default: ""
    },
    textAfterVal: {
      type: "string",
      default: ""
    },
    textBeforeGoal: {
      type: "string",
      default: ""
    },
    textAfterGoal: {
      type: "string",
      default: ""
    },
    color: {
      type: "string"
    },
    customColor: {
      type: "string"
    },
    colorHex: {
      type: "string",
      default: "#000000"
    },
    backgroundColor: {
      type: "string"
    },
    customBackgroundColor: {
      type: "string"
    },
    backgroundColorHex: {
      type: "string",
      default: "rgba(0, 0, 0, 0)"
    },
    className: {
      type: "string"
    },
    animate: {
      type: "boolean",
      default: true
    },
    barLength: {
      type: "string",
      default: "300"
    },
    barThickness: {
      type: "string",
      default: "20"
    },
    direction: {
      type: "string",
      default: "horizontal"
    },
    align: {
      type: "string",
      default: "center"
    }
  },
  save(props) {
    const {
      attributes
    } = props;
    const {
      align,
      direction,
      color,
      backgroundColor,
      barLength,
      barThickness,
      textBeforeVal,
      textBeforeGoal,
      numberVal,
      numberValGoal,
      expressAs,
      textAfterVal,
      textAfterGoal,
      isPercentage,
      animate
    } = attributes;
    let lineStyle = {};
    let spanStyle = {};
    let blockStyle = {};
    let prefix = '';
    let suffix = '';
    const pct = numberVal / numberValGoal * 100;
    onChangeExpressAs(expressAs);
    onChangeDirection(direction);
    const addCommas = function (n) {
      const rgx = /(\d+)(\d{3})/;
      n += '';
      const x = n.split('.');
      let x1 = x[0];
      let x2 = x.length > 1 ? '.' + x[1] : '';
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
    };
    function onChangeDirection(value) {
      if (value == 'horizontal') {
        lineStyle = {
          maxWidth: barLength + 'px',
          height: barThickness + 'px'
        };
        spanStyle = {
          height: barThickness + 'px',
          width: pct + '%'
        };
        blockStyle = {
          width: barLength + 'px'
        };
        if (animate) {
          spanStyle.width = '0';
        }
      } else {
        lineStyle = {
          width: barThickness + 'px',
          maxHeight: barLength + 'px'
        };
        spanStyle = {
          width: barThickness + 'px',
          height: pct + '%'
        };
        blockStyle = {
          height: barLength + 'px'
        };
        if (animate) {
          spanStyle.height = '0';
        }
      }
    }
    function onChangeExpressAs(value) {
      prefix = '';
      suffix = '';
      if (value == 'percent') {
        suffix = '%';
      } else if (value == 'dollar') {
        prefix = '$';
      }
    }
    const displayVal = animate ? 0 : numberVal;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
      className: `ck-line-chart-${direction} pct-${pct} animate-${animate}`
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      "data-progress": `${numberVal}`,
      "data-goal": `${numberValGoal}`,
      "data-type": expressAs
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-line-chart--text",
      style: blockStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ck-line-chart--current"
    }, textBeforeVal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "value"
    }, prefix, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ck-chart--number"
    }, displayVal), suffix), " ", textAfterVal), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ck-line-chart--goal"
    }, textBeforeGoal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "value"
    }, prefix, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "ck-chart--goal"
    }, addCommas(numberValGoal)), suffix), " ", textAfterGoal)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `ck-line-chart--line has-${backgroundColor}-background-color layout-${direction}`,
      style: lineStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: `has-${color}-background-color  ck-bar`,
      style: spanStyle
    })));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/line-chart/edit.js":
/*!********************************!*\
  !*** ./src/line-chart/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/line-chart/editor.scss");

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */


/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */




/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
function Edit(props) {
  const {
    name,
    attributes,
    setAttributes,
    setColor,
    setBackgroundColor,
    color,
    backgroundColor,
    clientId
  } = props;
  const {
    direction,
    barLength,
    barThickness,
    textBeforeVal,
    textBeforeGoal,
    numberVal,
    numberValGoal,
    expressAs,
    textAfterVal,
    textAfterGoal,
    isPercentage,
    animate
  } = attributes;
  const pct = numberVal / numberValGoal * 100;
  function onChangeColor(value) {
    setColor(value);
    setAttributes({
      colorHex: value
    });
  }
  function onChangeBackgroundColor(value) {
    setBackgroundColor(value);
    setAttributes({
      backgroundColorHex: value
    });
  }
  let barLengthLabel = '';
  let barThickLabel = '';
  let blockStyle = {};
  let lineStyle = {};
  let spanStyle = {};
  onChangeDirection(direction);
  function onChangeDirection(value) {
    setAttributes({
      direction: value
    });
    if (value == 'horizontal') {
      barLengthLabel = 'Width';
      barThickLabel = 'Height';
      lineStyle = {
        maxWidth: barLength + 'px',
        height: barThickness + 'px'
      };
      spanStyle = {
        height: barThickness + 'px',
        width: pct + '%'
      };
      blockStyle = {
        width: barLength + 'px'
      };
    } else {
      barLengthLabel = 'Height';
      barThickLabel = 'Width';
      lineStyle = {
        width: barThickness + 'px',
        maxHeight: barLength + 'px'
      };
      spanStyle = {
        width: barThickness + 'px',
        height: pct + '%'
      };
      blockStyle = {
        height: barLength + 'px'
      };
    }
  }
  let prefix = '';
  let suffix = '';
  onChangeExpressAs(expressAs);
  function onChangeExpressAs(value) {
    setAttributes({
      expressAs: value
    });
    prefix = '';
    suffix = '';
    if (value == 'percent') {
      suffix = '%';
    } else if (value == 'dollar') {
      prefix = '$';
    }
  }
  // if ( customBackgroundColor !== undefined ) {
  // 	bgStyles.stroke = customBackgroundColor;
  // } else if ( backgroundColor !== undefined ) {
  // 	bgStyles.stroke = 'var(--wp--preset--color--' + backgroundColor + ')';
  // }

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: `ck-line-chart-${direction} animate-${animate}  pct-${pct}`
  });
  // Update the child block's attributes

  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Value settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: numberVal => setAttributes({
      numberVal: parseInt(numberVal)
    }),
    shiftStep: 1,
    value: numberVal,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Current Value', 'carkeek-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: value => setAttributes({
      numberValGoal: parseInt(value)
    }),
    shiftStep: 1,
    value: numberValGoal,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Goal', 'carkeek-blocks')
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Express #s as",
    selected: expressAs,
    options: [{
      label: 'Dollars',
      value: 'dollar'
    }, {
      label: 'Percentage',
      value: 'percent'
    }, {
      label: 'Plain',
      value: 'plain'
    }],
    onChange: value => onChangeExpressAs(value)
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Text Settings')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Text Before Current Value",
    value: textBeforeVal,
    onChange: textBeforeVal => setAttributes({
      textBeforeVal
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Text After Current Value",
    help: "Use this to add a suffix to the number, e.g. %",
    value: textAfterVal,
    onChange: textAfterVal => setAttributes({
      textAfterVal
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Text Before Goal Value",
    value: textBeforeGoal,
    onChange: textBeforeGoal => setAttributes({
      textBeforeGoal
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Text After Goal Value",
    help: "Use this to add a suffix to the number, e.g. %",
    value: textAfterGoal,
    onChange: textAfterGoal => setAttributes({
      textAfterGoal
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Layout')
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: barLength => setAttributes({
      barLength
    }),
    shiftStep: 1,
    value: barLength,
    label: barLengthLabel
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.__experimentalNumberControl, {
    isShiftStepEnabled: true,
    onChange: barThickness => setAttributes({
      barThickness
    }),
    shiftStep: 1,
    value: barThickness,
    label: barThickLabel
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Animate on Scroll into View",
    checked: animate,
    onChange: animate => setAttributes({
      animate
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Color settings'),
    colorSettings: [{
      value: color.color,
      onChange: onChangeColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Highlight color')
    }, {
      value: backgroundColor.color,
      onChange: onChangeBackgroundColor,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)('Background color')
    }]
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-line-chart--text",
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-line-chart--current"
  }, textBeforeVal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "value"
  }, prefix, numberVal, suffix), " ", textAfterVal), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-line-chart--goal"
  }, textBeforeGoal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "value"
  }, prefix, numberValGoal, suffix), " ", textAfterGoal)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ck-line-chart--line ${backgroundColor.class} layout-${direction}`,
    style: lineStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `has-${color.slug}-background-color`,
    "data-progress": `${numberVal}`,
    style: spanStyle
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.withColors)('backgroundColor', 'color')(Edit));

/***/ }),

/***/ "./src/line-chart/icon.js":
/*!********************************!*\
  !*** ./src/line-chart/icon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.circle = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "512pt",
  height: "512pt",
  version: "1.1",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m469.33 256c0 117.33-96 213.33-213.33 213.33s-213.33-96-213.33-213.33 96-213.33 213.33-213.33c57.602 0 110.93 21.332 151.46 61.867l29.867-29.867c-49.066-49.066-113.07-74.668-181.33-74.668-140.8 0-256 115.2-256 256s115.2 256 256 256 256-115.2 256-256z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m384 256h42.668c0-93.867-76.801-170.67-170.67-172.8-93.867 0-170.67 76.801-170.67 170.67 0 93.867 76.801 170.67 170.67 172.8v-42.668c-70.398 0-128-57.602-128-130.13 0-70.398 57.602-128 128-128 70.398 2.1328 128 59.734 128 130.13z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m315.73 315.73c34.133-34.133 34.133-87.465 0-121.6-34.133-34.133-87.465-34.133-121.6 0-34.133 34.133-34.133 87.465 0 121.6l29.867-29.867c-17.066-17.066-17.066-42.668 0-59.734 17.066-17.066 42.668-17.066 59.734 0 17.066 17.066 17.066 42.668 0 59.734z"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/line-chart/index.js":
/*!*********************************!*\
  !*** ./src/line-chart/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/line-chart/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/line-chart/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/line-chart/deprecated.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/line-chart/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/line-chart/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/line-chart/style.scss");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Internal dependencies
 */
//import icon from './icon';







/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/line-chart/save.js":
/*!********************************!*\
  !*** ./src/line-chart/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */



/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
function save(props) {
  const {
    attributes
  } = props;
  const {
    align,
    direction,
    color,
    backgroundColor,
    barLength,
    barThickness,
    textBeforeVal,
    textBeforeGoal,
    numberVal,
    numberValGoal,
    expressAs,
    textAfterVal,
    textAfterGoal,
    isPercentage,
    animate
  } = attributes;
  let lineStyle = {};
  let spanStyle = {};
  let blockStyle = {};
  let prefix = '';
  let suffix = '';
  const pct = numberVal / numberValGoal * 100;
  onChangeExpressAs(expressAs);
  onChangeDirection(direction);
  const addCommas = function (n) {
    const rgx = /(\d+)(\d{3})/;
    n += '';
    const x = n.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  };
  function onChangeDirection(value) {
    if (value == 'horizontal') {
      lineStyle = {
        maxWidth: barLength + 'px',
        height: barThickness + 'px'
      };
      spanStyle = {
        height: barThickness + 'px',
        width: pct + '%'
      };
      blockStyle = {
        maxWidth: barLength + 'px'
      };
      if (animate) {
        spanStyle.width = '0';
      }
    } else {
      lineStyle = {
        width: barThickness + 'px',
        maxHeight: barLength + 'px'
      };
      spanStyle = {
        width: barThickness + 'px',
        height: pct + '%'
      };
      blockStyle = {
        maxHeight: barLength + 'px'
      };
      if (animate) {
        spanStyle.height = '0';
      }
    }
  }
  function onChangeExpressAs(value) {
    prefix = '';
    suffix = '';
    if (value == 'percent') {
      suffix = '%';
    } else if (value == 'dollar') {
      prefix = '$';
    }
  }
  const displayVal = animate ? 0 : numberVal;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: `ck-line-chart-${direction} pct-${pct} animate-${animate}`
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    "data-progress": `${numberVal}`,
    "data-goal": `${numberValGoal}`,
    "data-type": expressAs
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-line-chart--text",
    style: blockStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-line-chart--current"
  }, textBeforeVal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "value"
  }, prefix, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-chart--number"
  }, displayVal), suffix), " ", textAfterVal), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-line-chart--goal"
  }, textBeforeGoal, " ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "value"
  }, prefix, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ck-chart--goal"
  }, addCommas(numberValGoal)), suffix), " ", textAfterGoal)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `ck-line-chart--line has-${backgroundColor}-background-color layout-${direction}`,
    style: lineStyle
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: `has-${color}-background-color  ck-bar`,
    style: spanStyle
  })));
}

/***/ }),

/***/ "./src/line-chart/editor.scss":
/*!************************************!*\
  !*** ./src/line-chart/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/line-chart/style.scss":
/*!***********************************!*\
  !*** ./src/line-chart/style.scss ***!
  \***********************************/
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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ ((module) => {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/line-chart/block.json":
/*!***********************************!*\
  !*** ./src/line-chart/block.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/line-chart","version":"0.1.1","title":"Progress Bar","category":"widgets","description":"Create an animated progress or bar chart.","icon":"chart-bar","keywords":["progress","bar","chart","line","graph"],"supports":{"html":false,"align":["left","center","right"],"spacing":{"padding":true,"margin":true}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"rounded","label":"Rounded Edges"}],"textdomain":"carkeek-blocks","attributes":{"numberVal":{"type":"number","default":0},"numberValGoal":{"type":"number","default":0},"expressAs":{"type":"string","default":"dollar"},"textBeforeVal":{"type":"string","default":""},"textAfterVal":{"type":"string","default":""},"textBeforeGoal":{"type":"string","default":""},"textAfterGoal":{"type":"string","default":""},"color":{"type":"string"},"customColor":{"type":"string"},"colorHex":{"type":"string","default":"#000000"},"backgroundColor":{"type":"string"},"customBackgroundColor":{"type":"string"},"backgroundColorHex":{"type":"string","default":"rgba(0, 0, 0, 0)"},"className":{"type":"string"},"animate":{"type":"boolean","default":true},"barLength":{"type":"string","default":"300"},"barThickness":{"type":"string","default":"20"},"direction":{"type":"string","default":"horizontal"},"align":{"type":"string","default":"center"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./script.js"}');

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
/******/ 			"line-chart/index": 0,
/******/ 			"line-chart/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["line-chart/style-index"], () => (__webpack_require__("./src/line-chart/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map