/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/taxonomy-archive-links/edit.js":
/*!********************************************!*\
  !*** ./src/taxonomy-archive-links/edit.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/taxonomy-archive-links/icons.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/taxonomy-archive-links/inspector.js");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);








function customArchiveEdit(props) {
  const {
    attributes,
    name
  } = props;
  const {
    taxonomySelected
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)();
  if (!taxonomySelected) {
    const noPostMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Select a Taxonomy Type from the Block Settings");
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ...props
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.Placeholder, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].layout,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Taxonomy Terms")
    }, noPostMessage));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], {
    ...props
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: name,
    attributes: props.attributes
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.withSelect)((select, props) => {
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
  const taxTerms = getEntityRecords('taxonomy', taxonomySelected, {
    per_page: -1
  });
  let taxonomies = getTaxonomies({
    per_page: -1
  });
  return {
    taxonomies: taxonomies,
    taxSelected: Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
    taxTerms: taxTerms
  };
})(customArchiveEdit));

/***/ }),

/***/ "./src/taxonomy-archive-links/icons.js":
/*!*********************************************!*\
  !*** ./src/taxonomy-archive-links/icons.js ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/taxonomy-archive-links/index.js":
/*!*********************************************!*\
  !*** ./src/taxonomy-archive-links/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/taxonomy-archive-links/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/taxonomy-archive-links/edit.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons */ "./src/taxonomy-archive-links/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block.json */ "./src/taxonomy-archive-links/block.json");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_3__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_2__["default"].layout,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save() {
    return null;
  }
});

/***/ }),

/***/ "./src/taxonomy-archive-links/inspector.js":
/*!*************************************************!*\
  !*** ./src/taxonomy-archive-links/inspector.js ***!
  \*************************************************/
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




function postsInspector(props) {
  const {
    taxonomies,
    attributes,
    setAttributes
  } = props;
  const {
    taxonomySelected,
    sortBy,
    order,
    relevantToPost,
    linkToCategory,
    displayAs,
    separator,
    showBullets,
    listLabel,
    archiveType,
    archivePage,
    archiveFacet,
    tileImageField,
    tileImageStyle,
    excludeChildTerms
  } = attributes;
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
  const taxonomySelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, taxonomies && taxonomies.length > 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select a Taxonomy", "carkeek-blocks"),
    onChange: terms => setAttributes({
      taxonomySelected: terms
    }),
    options: taxOptions,
    value: taxonomySelected,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Select a taxonomy to display its terms", "carkeek-blocks")
  })) : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("There are no available taxonomies.", "carkeek-blocks")));
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Posts Settings", "carkeek-blocks")
  }, taxonomySelect, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sort By", "carkeek-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("If it seems that your sorting selections aren't working, check for a taxonomy terms order plugin, if installed, you can manage the sort there.", "carkeek-blocks"),
    onChange: value => setAttributes({
      sortBy: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title (alpha)"),
      value: "name"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Menu Order"),
      value: "menu_order"
    }],
    value: sortBy
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Order"),
    selected: order,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("ASC"),
      value: "ASC"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("DESC"),
      value: "DESC"
    }],
    onChange: value => setAttributes({
      order: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Limit to current post",
    checked: relevantToPost,
    onChange: value => setAttributes({
      relevantToPost: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Link items to category archive",
    checked: linkToCategory,
    onChange: value => setAttributes({
      linkToCategory: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Exclude Child Terms",
    checked: excludeChildTerms,
    onChange: value => setAttributes({
      excludeChildTerms: value
    })
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Layout Style", "carkeek-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Label",
    value: listLabel,
    onChange: value => setAttributes({
      listLabel: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Display As", "carkeek-blocks"),
    onChange: value => setAttributes({
      displayAs: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Vertical List"),
      value: "list"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Horizontal (inline) List"),
      value: "inline"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Link Tile"),
      value: "tile"
    }],
    value: displayAs
  }), displayAs === 'inline' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Separator", "carkeek-blocks"),
    onChange: value => setAttributes({
      separator: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Comma (,)"),
      value: "comma"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Bullet (&#8226;)"),
      value: "bullet"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Pipe (|)"),
      value: "pipe"
    }],
    value: separator
  }), displayAs === 'list' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Include bullets?",
    checked: showBullets,
    onChange: value => setAttributes({
      showBullets: value
    })
  })), displayAs === 'tile' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Tile Settings", "carkeek-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Image Field",
    value: tileImageField,
    onChange: value => setAttributes({
      tileImageField: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Image Style", "carkeek-blocks"),
    onChange: value => setAttributes({
      tileImageStyle: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon"),
      value: "icon"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Cover"),
      value: "cover"
    }],
    value: tileImageStyle
  })), linkToCategory && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Archive Settings", "carkeek-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Archive Type", "carkeek-blocks"),
    onChange: value => setAttributes({
      archiveType: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("WordPress"),
      value: "wordpress"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("FacetWP"),
      value: "facetwp"
    }],
    value: archiveType
  }), archiveType === 'facetwp' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Archive URL",
    value: archivePage,
    onChange: value => setAttributes({
      archivePage: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Taxonomy Facet",
    value: archiveFacet,
    onChange: value => setAttributes({
      archiveFacet: value
    })
  }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsInspector);

/***/ }),

/***/ "./src/taxonomy-archive-links/style.scss":
/*!***********************************************!*\
  !*** ./src/taxonomy-archive-links/style.scss ***!
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

/***/ "./src/taxonomy-archive-links/block.json":
/*!***********************************************!*\
  !*** ./src/taxonomy-archive-links/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/taxonomy-terms","title":"Taxonomy Archive List","category":"widgets","description":"Place taxonomy terms list on a page","keywords":["taxonomy","terms","archive"],"version":"1.0.0","textdomain":"carkeek-blocks","editorScript":"file:./index.js","style":"file:./style-index.css","render":"file:./render.php","attributes":{"taxonomySelected":{"type":"string"},"level":{"type":"number"},"excludeTerms":{"type":"string"},"sortBy":{"type":"string","default":"name"},"order":{"type":"string","default":"ASC"},"relevantToPost":{"type":"boolean","default":false},"excludeChildTerms":{"type":"boolean","default":false},"className":{"type":"string"},"linkToCategory":{"type":"boolean","default":true},"align":{"type":"string"},"displayAs":{"type":"string","default":"list"},"showBullets":{"type":"boolean","default":false},"separator":{"type":"string","default":"comma"},"listLabel":{"type":"string","default":""},"archiveType":{"type":"string","default":"wordpress"},"archivePage":{"type":"string","default":""},"archiveFacet":{"type":"string","default":""},"tileImageField":{"type":"string","default":""},"tileImageStyle":{"type":"string","default":"icon"}},"supports":{"align":["wide","full","left","right","center"]}}');

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
/******/ 			"taxonomy-archive-links/index": 0,
/******/ 			"taxonomy-archive-links/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["taxonomy-archive-links/style-index"], () => (__webpack_require__("./src/taxonomy-archive-links/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map