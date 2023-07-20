/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/events-archive/edit.js":
/*!************************************!*\
  !*** ./src/events-archive/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/events-archive/icons.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/events-archive/inspector.js");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);










function customArchiveEdit(props) {
  const {
    attributes,
    setAttributes,
    name
  } = props;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
    label: "Layout Options"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].grid,
    label: "Grid Layout",
    onClick: () => setAttributes({
      postLayout: "grid"
    }),
    isPrimary: attributes.postLayout === "grid" ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].listLayout,
    label: "List Layout",
    onClick: () => setAttributes({
      postLayout: "list"
    }),
    isPrimary: attributes.postLayout === "list" ? true : false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
      "is-grid": attributes.postLayout === "grid",
      "is-list": attributes.postLayout === "list"
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_5___default()), {
    block: name,
    attributes: props.attributes
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.withSelect)(select => {
  const {
    getEntityRecords
  } = select("core");
  const catTerms = getEntityRecords('taxonomy', 'tribe_events_cat', {
    per_page: -1
  });
  const catTags = getEntityRecords('taxonomy', 'post_tag', {
    per_page: -1
  });
  const venues = getEntityRecords('postType', 'tribe_venue', {
    per_page: -1
  });
  return {
    catTags: catTags,
    catTerms: catTerms,
    venues: venues
  };
})(customArchiveEdit));

/***/ }),

/***/ "./src/events-archive/icons.js":
/*!*************************************!*\
  !*** ./src/events-archive/icons.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.layout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M66.046 50.783H33.953a1.344 1.344 0 010-2.688h32.092a1.344 1.344 0 01.001 2.688zM54.281 55.71h-8.563a1.344 1.344 0 010-2.688h8.563a1.344 1.344 0 010 2.688zM33.876 78.937H16.903a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.974c.742 0 1.344.602 1.344 1.344v16.973a1.346 1.346 0 01-1.345 1.344zm-15.63-2.688h14.286V61.964H18.246v14.285zM58.486 78.937H41.512a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.974c.742 0 1.344.602 1.344 1.344v16.973c0 .742-.602 1.344-1.344 1.344zm-15.63-2.688h14.286V61.964H42.856v14.285zM83.096 78.937H66.123a1.344 1.344 0 01-1.344-1.344V60.62c0-.742.602-1.344 1.344-1.344h16.973c.742 0 1.344.602 1.344 1.344v16.973c0 .742-.602 1.344-1.344 1.344zm-15.629-2.688h14.285V61.964H67.467v14.285z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M50 45.009a5.115 5.115 0 01-5.11-5.11 5.115 5.115 0 015.11-5.11 5.115 5.115 0 015.109 5.11A5.115 5.115 0 0150 45.009zm0-7.531a2.425 2.425 0 00-2.422 2.422c0 1.335 1.087 2.422 2.422 2.422s2.421-1.086 2.421-2.422A2.424 2.424 0 0050 37.478z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M93.656 15.452H6.344A1.34 1.34 0 005 16.796v66.408a1.34 1.34 0 001.344 1.344h87.312c.739 0 1.344-.598 1.344-1.344V16.796c0-.746-.605-1.344-1.344-1.344zM92.312 81.86H7.688V30.329h84.624V81.86zm0-54.219H7.688V18.14h84.624v9.501z"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "13.173",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "19.919",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ellipse", {
  cx: "26.665",
  cy: "22.714",
  rx: "2.108",
  ry: "2.103"
})));
icons.grid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 95h90V5H5v90zm5-85h80v80H10V10z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 15H85V30H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 37.5H35V42.5H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 37.5H60V42.5H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 37.5H85V42.5H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 45H35V47.5H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 50H35V52.5H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 55H35V57.5H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 45H60V47.5H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 50H60V52.5H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 55H60V57.5H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 45H85V47.5H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 50H85V52.5H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 55H85V57.5H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 65H35V70H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 65H60V70H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 65H85V70H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 72.5H35V75H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 77.5H35V80H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 82.5H35V85H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 72.5H60V75H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 77.5H60V80H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M40 82.5H60V85H40z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 72.5H85V75H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 77.5H85V80H65z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M65 82.5H85V85H65z"
}));
icons.logogrid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 16 16"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
icons.listLayout = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "30",
  height: "30",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M5 95h90V5H5v90zm5-85h80v80H10V10z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15 15H85V30H15z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 37.5H85V42.5H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 45H85V47.5H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 50H85V52.5H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 55H85V57.5H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 65H85V70H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 72.5H85V75H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 77.5H85V80H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M32.5 82.5H85V85H32.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "21.3",
  cy: "43.8",
  r: "6.3"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "21.3",
  cy: "71.3",
  r: "6.3"
}));
icons.calendar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  enableBackground: "new 0 0 100 100",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M87.1 13.5H76.2V6.8c0-2.3-1.9-4.2-4.2-4.2h-5.1c-2.3 0-4.2 1.9-4.2 4.2v6.6H37.3V6.8c0-2.3-1.9-4.2-4.2-4.2H28c-2.3 0-4.2 1.9-4.2 4.2v6.6H12.9c-5.8 0-10.4 4.7-10.4 10.4v63c0 5.8 4.7 10.4 10.4 10.4H87c5.8 0 10.4-4.7 10.4-10.4v-63c.1-5.6-4.6-10.3-10.3-10.3zm0 77.9H12.9c-2.5 0-4.5-2-4.5-4.5V37.8h83.1v49.1c.1 2.5-2 4.5-4.4 4.5z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M31.2 46.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7zM55.6 46.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7zM80.1 46.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7zM31.2 68.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7zM55.6 68.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7zM80.1 68.9h-11c-1.5 0-2.7 1.2-2.7 2.7v8.3c0 1.5 1.2 2.7 2.7 2.7h11c1.5 0 2.7-1.2 2.7-2.7v-8.3c0-1.5-1.2-2.7-2.7-2.7z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/events-archive/index.js":
/*!*************************************!*\
  !*** ./src/events-archive/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/events-archive/style.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/events-archive/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/events-archive/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./src/events-archive/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/events-archive/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);







(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_3__["default"].calendar,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  save() {
    return null;
  }

});

/***/ }),

/***/ "./src/events-archive/inspector.js":
/*!*****************************************!*\
  !*** ./src/events-archive/inspector.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);





function postsInspector(props) {
  const {
    catTerms,
    catTags,
    venues,
    attributes,
    setAttributes
  } = props;
  const {
    numberOfPosts,
    displayPostExcerpt,
    excerptLength,
    postLayout,
    featuredEvents,
    filterByCategory,
    filterByTag,
    filterByVenue,
    hideTitle,
    venueSelected,
    catTermsSelected,
    catTagsSelected,
    displayField1,
    displayField2,
    displayField3,
    dateFormat,
    timeFormat,
    showEndDate,
    hideIfEmpty,
    emptyMessage,
    columns,
    columnsMobile,
    columnsTablet,
    limitItemsMobile,
    itemsMobile,
    itemsTablet,
    displayFeaturedImage,
    showPagination,
    includePastEvents,
    includeHiddenEvents,
    onlyPastEvents,
    sortOrder,
    prioritizeRelated
  } = attributes; //Handling these as individual attributes until I have time to figure out arrays.

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

  const fieldSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide Title"),
    checked: hideTitle,
    onChange: value => setAttributes({
      hideTitle: value
    }),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("To change the order of the title, hide it add place it with a metafield below.")
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 1", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField1: value
    }),
    options: availFields,
    value: displayField1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 2", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField2: value
    }),
    options: availFields,
    value: displayField2
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Metafield 3", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayField3: value
    }),
    options: availFields,
    value: displayField3
  }), showDateFormat && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Use PHP Date Formats, ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://wordpress.org/support/article/formatting-date-and-time/"
  }, "Learn how to make your own date format here.")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Date Format",
    value: dateFormat,
    onChange: value => setAttributes({
      dateFormat: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Time Format",
    value: timeFormat,
    onChange: value => setAttributes({
      timeFormat: value
    }),
    help: "Leave blank to hide the time"
  })));
  const taxonomySelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filter by Category"),
    checked: filterByCategory,
    onChange: value => setAttributes({
      filterByCategory: value
    })
  }), filterByCategory && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    multiple: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Terms", "carkeek-blocks"),
    onChange: terms => setAttributes({
      catTermsSelected: terms.join(",")
    }),
    options: catTerms && catTerms.map(type => ({
      value: type.id,
      label: type.name
    })),
    value: catTermsSelected && catTermsSelected.split(',')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filter by Tag"),
    checked: filterByTag,
    onChange: value => setAttributes({
      filterByTag: value
    })
  }), filterByTag && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    multiple: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Terms", "carkeek-blocks"),
    onChange: terms => setAttributes({
      catTagsSelected: terms.join(",")
    }),
    options: catTags && catTags.map(type => ({
      value: type.id,
      label: type.name
    })),
    value: catTagsSelected && catTagsSelected.split(',')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Filter by Venue"),
    checked: filterByVenue,
    onChange: value => setAttributes({
      filterByVenue: value
    })
  }), filterByVenue && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select Venue", "carkeek-blocks"),
    onChange: term => setAttributes({
      venueSelected: term
    }),
    options: venues && venues.map(type => ({
      value: type.id,
      label: type.title.raw
    })),
    value: venueSelected && venueSelected.split(',')
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include Past Events"),
    checked: includePastEvents,
    onChange: value => setAttributes({
      includePastEvents: value
    })
  }), includePastEvents && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Only show past events"),
    checked: onlyPastEvents,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Limit the event to only show past events."),
    onChange: value => setAttributes({
      onlyPastEvents: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sort Order", "carkeek-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Events are always sorted by start date, select ASC or DESC."),
    onChange: val => setAttributes({
      sortOrder: val
    }),
    options: [{
      value: 'ASC',
      label: 'ASC'
    }, {
      value: 'DESC',
      label: 'DESC'
    }],
    value: sortOrder
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include Hidden Events"),
    checked: includeHiddenEvents,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include Events that have 'Hide from Event Listings' checked"),
    onChange: value => setAttributes({
      includeHiddenEvents: value
    })
  }));

  function handlePaginationSettingChange(value) {
    setAttributes({
      showPagination: value
    });
    setAttributes({
      limitItemsMobile: false
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Events Settings", "carkeek-blocks")
  }, taxonomySelect, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Display only Featured Events"),
    checked: featuredEvents,
    onChange: value => setAttributes({
      featuredEvents: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number of Posts", "carkeek-blocks"),
    value: numberOfPosts,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select -1 to show all"),
    onChange: numberOfPosts => setAttributes({
      numberOfPosts
    }),
    min: -1,
    max: 21
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout", "carkeek-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout Style"),
    selected: postLayout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Grid"),
      value: "grid"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("List"),
      value: "list"
    }],
    onChange: value => setAttributes({
      postLayout: value
    })
  }), postLayout == 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Number of Columns", "carkeek-blocks"),
    value: columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 6
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Data to display", "carkeek-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include Featured Image"),
    checked: displayFeaturedImage,
    onChange: value => setAttributes({
      displayFeaturedImage: value
    })
  }), fieldSelect, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Include Excerpt"),
    checked: displayPostExcerpt,
    onChange: value => setAttributes({
      displayPostExcerpt: value
    })
  }), displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Max number of words in excerpt"),
    value: excerptLength,
    onChange: value => setAttributes({
      excerptLength: value
    }),
    min: 10,
    max: 75
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Show Pagination"),
    checked: showPagination,
    onChange: value => handlePaginationSettingChange(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Hide Block if Empty"),
    checked: hideIfEmpty,
    onChange: value => setAttributes({
      hideIfEmpty: value
    })
  }), !hideIfEmpty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Text to Display if Empty"),
    value: emptyMessage,
    onChange: value => setAttributes({
      emptyMessage: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Responsive Layout", "carkeek-blocks"),
    initialOpen: false
  }, postLayout == 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Columns Mobile", "carkeek-blocks"),
    value: columnsMobile,
    onChange: columnsMobile => setAttributes({
      columnsMobile
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Columns Tablet", "carkeek-blocks"),
    value: columnsTablet,
    onChange: columnsTablet => setAttributes({
      columnsTablet
    }),
    min: 1,
    max: 6
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Limit the number of posts displayed in Mobile/Tablet"),
    checked: limitItemsMobile,
    onChange: value => setAttributes({
      limitItemsMobile: value
    })
  }), limitItemsMobile && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Items to show Mobile", "carkeek-blocks"),
    value: itemsMobile,
    onChange: itemsMobile => setAttributes({
      itemsMobile
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Items to show Tablet", "carkeek-blocks"),
    value: itemsTablet,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select -1 to show all"),
    onChange: itemsTablet => setAttributes({
      itemsTablet
    }),
    min: 1,
    max: 6
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Prioritize Related Events"),
    checked: prioritizeRelated,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("If selected and placed on an event page, we will find events with similar tags and categories first. This is an intensize database search so only use if the standard filters are not getting what you want.", "carkeek-blocks"),
    onChange: value => setAttributes({
      prioritizeRelated: value
    })
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (postsInspector);

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

/***/ "./src/events-archive/editor.scss":
/*!****************************************!*\
  !*** ./src/events-archive/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/events-archive/style.scss":
/*!***************************************!*\
  !*** ./src/events-archive/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["serverSideRender"];

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

/***/ "./src/events-archive/block.json":
/*!***************************************!*\
  !*** ./src/events-archive/block.json ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/events-archive","title":"Event Archive","category":"widgets","description":"Block showing upcoming events.","keywords":["archive","posts","list","custom"],"version":"1.0.0","textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","attributes":{"numberOfPosts":{"type":"number","default":3},"hideTitle":{"type":"boolean","default":false},"displayField1":{"type":"string"},"displayField2":{"type":"string"},"displayField3":{"type":"string"},"displayField4":{"type":"string"},"dateFormat":{"type":"string","default":"F j"},"timeFormat":{"type":"string","default":"g:i a"},"showEndDate":{"type":"string","default":"show_end_date"},"displayFeaturedImage":{"type":"boolean","default":true},"postLayout":{"type":"string","default":"grid"},"columns":{"type":"number","default":3},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":3},"limitItemsMobile":{"type":"boolean","default":false},"itemsMobile":{"type":"number","default":1},"itemsTablet":{"type":"number","default":3},"displayPostExcerpt":{"type":"boolean","default":false},"excerptLength":{"type":"number","default":25},"filterByCategory":{"type":"boolean","default":false},"filterByTag":{"type":"boolean","default":false},"filterByVenue":{"type":"boolean","default":false},"prioritizeRelated":{"type":"boolean","default":false},"taxonomySelected":{"type":"string"},"catTermsSelected":{"type":"string"},"catTagsSelected":{"type":"string"},"venueSelected":{"type":"string"},"hideIfEmpty":{"type":"boolean","default":true},"emptyMessage":{"type":"string"},"featuredEvents":{"type":"boolean","default":false},"showPagination":{"type":"boolean","default":false},"includePastEvents":{"type":"boolean","default":false},"includeHiddenEvents":{"type":"boolean","default":false},"sortOrder":{"type":"string","default":"ASC"},"onlyPastEvents":{"type":"boolean","default":false},"className":{"type":"string","default":""},"align":{"type":"string","default":""}},"supports":{"align":["wide","full","left","center","right"],"anchor":false}}');

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
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
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
/******/ 	}();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"events-archive/index": 0,
/******/ 			"events-archive/style-index": 0
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
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
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
/******/ 		var chunkLoadingGlobal = self["webpackChunkcarkeek_blocks_v2"] = self["webpackChunkcarkeek_blocks_v2"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["events-archive/style-index"], function() { return __webpack_require__("./src/events-archive/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map