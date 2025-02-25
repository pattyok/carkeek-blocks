/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/related-events-archive/edit.js":
/*!********************************************!*\
  !*** ./src/related-events-archive/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/related-events-archive/icons.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/related-events-archive/inspector.js");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);









function customArchiveEdit(props) {
  const {
    attributes,
    setAttributes,
    clientId,
    name
  } = props;
  const {
    postLayout,
    taxonomySelected,
    blockId
  } = attributes;
  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)();
  if (!taxonomySelected) {
    const noPostMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Select a Taxonomy from the Block Settings");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].layout,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Related Events")
    }, noPostMessage));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, {
    label: "Layout Options"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].grid,
    label: "Grid Layout",
    onClick: () => setAttributes({
      postLayout: "grid"
    }),
    isPrimary: postLayout === "grid" ? true : false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].listLayout,
    label: "List Layout",
    onClick: () => setAttributes({
      postLayout: "list"
    }),
    isPrimary: postLayout === "list" ? true : false
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: name,
    attributes: props.attributes
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    attributes
  } = props;
  const {
    taxonomySelected
  } = attributes;
  const {
    getEntityRecords,
    getTaxonomies
  } = select("core");
  let taxonomies = getTaxonomies({
    per_page: -1
  });
  taxonomies = !Array.isArray(taxonomies) ? taxonomies : taxonomies.filter(tax => tax.types.includes('tribe_events'));
  return {
    taxonomies: taxonomies,
    taxSelected: Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected
  };
})(customArchiveEdit));

/***/ }),

/***/ "./src/related-events-archive/fields.js":
/*!**********************************************!*\
  !*** ./src/related-events-archive/fields.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function eventFields(props) {
  const {
    catTerms,
    catTags,
    venues,
    attributes,
    setAttributes
  } = props;
  const {
    hideTitle,
    displayField1,
    displayField2,
    displayField3,
    dateFormat,
    timeFormat,
    showEndDate
  } = attributes;

  //Handling these as individual attributes until I have time to figure out arrays.
  const availFields = [{
    label: 'Select a Field',
    value: ''
  }, {
    label: 'Event Title',
    value: 'title'
  }, {
    label: 'Event Date/Time',
    value: 'startdate'
  }, {
    label: 'Organizer',
    value: 'organizer'
  }, {
    label: 'Venue',
    value: 'venue'
  }, {
    label: 'Excerpt',
    value: 'excerpt'
  }];
  let showDateFormat = false;
  if (displayField1 == "startdate" || displayField2 == 'startdate' || displayField3 == 'startdate') {
    showDateFormat = true;
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide Title"),
    checked: hideTitle,
    onChange: value => setAttributes({
      hideTitle: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("To change the order of the title, hide it add place it with a metafield below.")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 1", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField1: value
    }),
    options: availFields,
    value: displayField1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 2", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField2: value
    }),
    options: availFields,
    value: displayField2
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 3", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField3: value
    }),
    options: availFields,
    value: displayField3
  }), showDateFormat && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("End Date/Time"),
    selected: showEndDate,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show end date/time"),
      value: "show_end_date"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Never show end date/time"),
      value: "naver_show_end_date"
    }],
    onChange: value => setAttributes({
      showEndDate: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Use PHP Date Formats, ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://wordpress.org/support/article/formatting-date-and-time/"
  }, "Learn how to make your own date format here.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Date Format",
    value: dateFormat,
    onChange: value => setAttributes({
      dateFormat: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Time Format",
    value: timeFormat,
    onChange: value => setAttributes({
      timeFormat: value
    }),
    help: "Leave blank to hide the time"
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (eventFields);

/***/ }),

/***/ "./src/related-events-archive/icons.js":
/*!*********************************************!*\
  !*** ./src/related-events-archive/icons.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.layout = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M66.046 50.783H33.953a1.344 1.344 0 010-2.688h32.092a1.344 1.344 0 01.001 2.688zM54.281 55.71h-8.563a1.344 1.344 0 010-2.688h8.563a1.344 1.344 0 010 2.688zM33.876 78.937H16.903a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.974c.742 0 1.344.602 1.344 1.344v16.973a1.346 1.346 0 01-1.345 1.344zm-15.63-2.688h14.286V61.964H18.246v14.285zM58.486 78.937H41.512a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.974c.742 0 1.344.602 1.344 1.344v16.973c0 .742-.602 1.344-1.344 1.344zm-15.63-2.688h14.286V61.964H42.856v14.285zM83.096 78.937H66.123a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.973c.742 0 1.344.602 1.344 1.344v16.973c0 .742-.602 1.344-1.344 1.344zm-15.629-2.688h14.285V61.964H67.467v14.285z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M50 45.009a5.115 5.115 0 01-5.11-5.11 5.115 5.115 0 015.11-5.11 5.115 5.115 0 015.109 5.11A5.115 5.115 0 0150 45.009zm0-7.531a2.425 2.425 0 00-2.422 2.422c0 1.335 1.087 2.422 2.422 2.422s2.421-1.086 2.421-2.422A2.424 2.424 0 0050 37.478z"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M93.656 15.452H6.344A1.34 1.34 0 005 16.796v66.408a1.34 1.34 0 001.344 1.344h87.312c.739 0 1.344-.598 1.344-1.344V16.796c0-.746-.605-1.344-1.344-1.344zM92.312 81.86H7.688V30.329h84.624V81.86zm0-54.219H7.688V18.14h84.624v9.501z"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "13.173",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "19.919",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "26.665",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})));
icons.grid = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 95h90V5H5v90zm5-85h80v80H10V10z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 15H85V30H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 37.5H35V42.5H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 37.5H60V42.5H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 37.5H85V42.5H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 45H35V47.5H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 50H35V52.5H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 55H35V57.5H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 45H60V47.5H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 50H60V52.5H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 55H60V57.5H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 45H85V47.5H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 50H85V52.5H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 55H85V57.5H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 65H35V70H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 65H60V70H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 65H85V70H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 72.5H35V75H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 77.5H35V80H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 82.5H35V85H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 72.5H60V75H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 77.5H60V80H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 82.5H60V85H40z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 72.5H85V75H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 77.5H85V80H65z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 82.5H85V85H65z"
}));
icons.logogrid = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 16 16"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  style: {
    WebkitTextIndent: "0",
    textIndent: "0",
    WebkitTextTransform: "none",
    textTransform: "none",
    blockProgression: "tb"
  },
  d: "M.5 1036.362a.52.52 0 00-.5.5v6c0 .262.238.5.5.5h6a.52.52 0 00.5-.5v-6a.52.52 0 00-.5-.5zm9 0a.52.52 0 00-.5.5v6c0 .262.238.5.5.5h6a.52.52 0 00.5-.5v-6a.52.52 0 00-.5-.5zm-8.5 1h5v5H1zm-.5 8a.52.52 0 00-.5.5v6c0 .262.238.5.5.5h6a.52.52 0 00.5-.5v-6a.52.52 0 00-.5-.5zm9 0a.52.52 0 00-.5.5v6c0 .262.238.5.5.5h6a.52.52 0 00.5-.5v-6a.52.52 0 00-.5-.5zm.5 1h5v5h-5z",
  color: "#000",
  enableBackground: "accumulate",
  overflow: "visible",
  transform: "translate(0 -1036.362)"
}));
icons.listLayout = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 95h90V5H5v90zm5-85h80v80H10V10z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 15H85V30H15z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 37.5H85V42.5H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 45H85V47.5H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 50H85V52.5H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 55H85V57.5H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 65H85V70H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 72.5H85V75H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 77.5H85V80H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 82.5H85V85H32.5z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "21.3",
  cy: "43.8",
  r: "6.3"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "21.3",
  cy: "71.3",
  r: "6.3"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/related-events-archive/index.js":
/*!*********************************************!*\
  !*** ./src/related-events-archive/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/related-events-archive/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/related-events-archive/icons.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/related-events-archive/style.scss");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/related-events-archive/block.json");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].layout,
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save() {
    return null;
  }
});

/***/ }),

/***/ "./src/related-events-archive/inspector.js":
/*!*************************************************!*\
  !*** ./src/related-events-archive/inspector.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fields */ "./src/related-events-archive/fields.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);





function postsInspector(props) {
  const {
    taxonomies,
    postTypes,
    attributes,
    setAttributes
  } = props;
  const {
    numberOfPosts,
    displayPostExcerpt,
    excerptLength,
    postLayout,
    postTypeSelected,
    taxonomySelected,
    headlineLevel,
    sortBy,
    sortByMeta,
    order,
    columns,
    columnsMobile,
    columnsTablet,
    limitItemsMobile,
    itemsMobile,
    itemsTablet,
    displayFeaturedImage,
    fillTheSlots,
    useHeadingTitle,
    imageOrientation,
    childTermsOnly,
    hideIfEmpty,
    emptyMessage,
    headline,
    morePostsLink,
    morePostsLinkLabel,
    showPublishDate,
    publishDateLocation,
    showTerms,
    showPagination,
    learnMoreLinkTitle,
    showLearnMoreLink
  } = attributes;
  let ptOptions = [];
  if (postTypes) {
    ptOptions = postTypes.map(type => ({
      value: type.slug,
      label: type.name
    }));
  }
  if (!postTypeSelected) {
    const selectAnItem = {
      value: null,
      label: 'Select a Post Type'
    };
    ptOptions.unshift(selectAnItem);
  }
  let taxOptions = [];
  if (taxonomies) {
    taxOptions = taxonomies.map(type => ({
      value: type.slug,
      label: type.name
    }));
  }
  if (!taxonomySelected) {
    const selectAnItem = {
      value: null,
      label: 'Select a Taxonomy'
    };
    taxOptions.unshift(selectAnItem);
  }
  if (!columnsTablet) {
    setAttributes({
      columnsTablet: columns > 3 ? 3 : columns
    });
  }
  if (!columnsMobile) {
    setAttributes({
      columnsMobile: 1
    });
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Posts Settings", "carkeek-blocks")
  }, taxonomies && taxonomies.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    multiple: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select a Taxonomy", "carkeek-blocks"),
    onChange: terms => setAttributes({
      taxonomySelected: terms
    }),
    options: taxOptions,
    value: taxonomySelected,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select a taxonomy on which to build the relationship", "carkeek-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Match on Child Terms Only", "carkeek-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`Match only on child terms of the selected taxonomy. If no child terms are found, the parent terms will be used.`),
    checked: childTermsOnly,
    onChange: value => setAttributes({
      childTermsOnly: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Number of Posts", "carkeek-blocks"),
    value: numberOfPosts,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select -1 to show all"),
    onChange: numberOfPosts => setAttributes({
      numberOfPosts
    }),
    min: -1,
    max: 21
  }), numberOfPosts !== -1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fill the slots with posts "),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)(`If less than ${numberOfPosts} are found go find more (unrelated) posts?`),
    checked: fillTheSlots,
    onChange: value => setAttributes({
      fillTheSlots: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Layout", "carkeek-blocks"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Layout Style"),
    selected: postLayout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid"),
      value: "grid"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("List"),
      value: "list"
    }],
    onChange: value => setAttributes({
      postLayout: value
    })
  }), postLayout == 'grid' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Number of Columns", "carkeek-blocks"),
    value: columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 6
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide Entire Block if no posts found"),
    checked: hideIfEmpty,
    onChange: value => setAttributes({
      hideIfEmpty: value
    })
  }), !hideIfEmpty && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Empty Result Message",
    value: emptyMessage,
    onChange: value => setAttributes({
      emptyMessage: value
    })
  }), hideIfEmpty && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Block Heading",
    value: headline,
    onChange: value => setAttributes({
      headline: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "More Posts Link",
    value: morePostsLink,
    onChange: value => setAttributes({
      morePostsLink: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "More Posts Link Label",
    value: morePostsLinkLabel,
    onChange: value => setAttributes({
      morePostsLinkLabel: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Item Style", "carkeek-blocks"),
    initialOpen: false
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Use Heading tag for Titles"),
    checked: useHeadingTitle,
    onChange: value => setAttributes({
      useHeadingTitle: value
    })
  }), useHeadingTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Post Title Size", "carkeek-blocks"),
    value: headlineLevel,
    onChange: value => setAttributes({
      headlineLevel: value
    }),
    min: 2,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Include Featured Image"),
    checked: displayFeaturedImage,
    onChange: value => setAttributes({
      displayFeaturedImage: value
    })
  }), displayFeaturedImage && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image Orientation", "carkeek-blocks"),
    onChange: value => setAttributes({
      imageOrientation: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Landscape 2:3"),
      value: "landscape"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Landscape 3:4"),
      value: "landscape-34"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Portrait 3:2"),
      value: "portrait"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Portrait 4:3"),
      value: "portrait-43"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Square 1:1"),
      value: "square"
    }],
    value: imageOrientation
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Include Excerpt"),
    checked: displayPostExcerpt,
    onChange: value => setAttributes({
      displayPostExcerpt: value
    })
  }), displayPostExcerpt && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Max number of words in excerpt"),
    value: excerptLength,
    onChange: value => setAttributes({
      excerptLength: value
    }),
    min: 10,
    max: 75
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_fields__WEBPACK_IMPORTED_MODULE_1__["default"], {
    ...props
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Responsive Layout", "carkeek-blocks"),
    initialOpen: false
  }, postLayout == 'grid' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns Mobile", "carkeek-blocks"),
    value: columnsMobile,
    onChange: columnsMobile => setAttributes({
      columnsMobile
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns Tablet", "carkeek-blocks"),
    value: columnsTablet,
    onChange: columnsTablet => setAttributes({
      columnsTablet
    }),
    min: 1,
    max: 6
  })), !showPagination && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Limit the number of posts displayed in Mobile/Tablet"),
    checked: limitItemsMobile,
    onChange: value => setAttributes({
      limitItemsMobile: value
    })
  }), limitItemsMobile && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items to show Mobile", "carkeek-blocks"),
    value: itemsMobile,
    onChange: itemsMobile => setAttributes({
      itemsMobile
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items to show Tablet", "carkeek-blocks"),
    value: itemsTablet,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select -1 to show all"),
    onChange: itemsTablet => setAttributes({
      itemsTablet
    }),
    min: 1,
    max: 6
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsInspector);

/***/ }),

/***/ "./src/related-events-archive/style.scss":
/*!***********************************************!*\
  !*** ./src/related-events-archive/style.scss ***!
  \***********************************************/
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

/***/ "./src/related-events-archive/block.json":
/*!***********************************************!*\
  !*** ./src/related-events-archive/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/related-events-archive","title":"Related Events Archive","category":"widgets","description":"Related Events Archive.","keywords":["archive","posts","list"],"version":"1.0.0","textdomain":"carkeek-blocks","attributes":{"numberOfPosts":{"type":"number","default":3},"fillTheSlots":{"type":"boolean","default":false},"postTypeSelected":{"type":"string"},"displayPostExcerpt":{"type":"boolean","default":true},"displayFeaturedImage":{"type":"boolean","default":true},"imageOrientation":{"type":"string","default":"landscape"},"postLayout":{"type":"string","default":"grid"},"columns":{"type":"number","default":3},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":3},"limitItemsMobile":{"type":"boolean","default":false},"itemsMobile":{"type":"number","default":1},"itemsTablet":{"type":"number","default":3},"sortBy":{"type":"string","default":"date"},"sortByMeta":{"type":"string"},"order":{"type":"string","default":"ASC"},"excerptLength":{"type":"number","default":25},"filterByTaxonomy":{"type":"boolean","default":false},"taxonomySelected":{"type":"array"},"hideIfEmpty":{"type":"boolean","default":false},"emptyMessage":{"type":"string","default":""},"headline":{"type":"string","default":""},"morePostsLink":{"type":"string","default":""},"morePostsLinkLabel":{"type":"string","default":""},"useHeadingTitle":{"type":"boolean","default":false},"headlineLevel":{"type":"number","default":2},"className":{"type":"string","default":""},"align":{"type":"string"},"backgroundColor":{"type":"string"},"childTermsOnly":{"type":"boolean","default":false},"hideTitle":{"type":"boolean","default":false},"displayField1":{"type":"string"},"displayField2":{"type":"string"},"displayField3":{"type":"string"},"displayField4":{"type":"string"},"dateFormat":{"type":"string","default":"F j"},"timeFormat":{"type":"string","default":"g:i a"},"showEndDate":{"type":"string","default":"show_end_date"},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}}},"supports":{"align":["wide","full","left","center","right"],"color":{"background":true,"text":true},"spacing":{"margin":true,"padding":true,"blockGap":true}},"editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php"}');

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
/******/ 			"related-events-archive/index": 0,
/******/ 			"related-events-archive/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["related-events-archive/style-index"], () => (__webpack_require__("./src/related-events-archive/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map