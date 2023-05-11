/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/custom-archive/edit.js":
/*!************************************!*\
  !*** ./src/custom-archive/edit.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ "./src/custom-archive/icons.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inspector */ "./src/custom-archive/inspector.js");
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
    postTypeSelected,
    blockId
  } = attributes;

  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.useBlockProps)();

  if (!postTypeSelected) {
    const noPostMessage = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Select a Post Type from the Block Settings");

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Placeholder, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].layout,
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Latest Posts")
    }, noPostMessage));
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_2__["default"], props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].grid,
    label: "Grid Layout",
    onClick: () => setAttributes({
      postLayout: "grid"
    }),
    isPrimary: postLayout === "grid" ? true : false
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_1__["default"].listLayout,
    label: "List Layout",
    onClick: () => setAttributes({
      postLayout: "list"
    }),
    isPrimary: postLayout === "list" ? true : false
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_3___default()), {
    block: name,
    attributes: attributes
  }));
}

/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.withSelect)((select, props) => {
  const {
    attributes
  } = props;
  const {
    postTypeSelected,
    taxonomySelected
  } = attributes;
  const {
    getEntityRecords,
    getPostTypes,
    getTaxonomies
  } = select("core");
  const {
    getSettings
  } = select('core/block-editor');
  const taxTerms = getEntityRecords('taxonomy', taxonomySelected, {
    per_page: -1
  });
  const {
    imageSizes
  } = getSettings();
  let taxonomies = getTaxonomies({
    per_page: -1
  });
  taxonomies = !Array.isArray(taxonomies) ? taxonomies : taxonomies.filter(tax => tax.types.includes(postTypeSelected));
  return {
    postTypes: getPostTypes({
      per_page: -1
    }),
    taxonomies: taxonomies,
    taxSelected: Array.isArray(taxonomies) && taxonomies.length == 1 ? taxonomies[0] : taxonomySelected,
    taxTerms: taxTerms,
    imageSizes: imageSizes
  };
})(customArchiveEdit));

/***/ }),

/***/ "./src/custom-archive/icons.js":
/*!*************************************!*\
  !*** ./src/custom-archive/icons.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/custom-archive/index.js":
/*!*************************************!*\
  !*** ./src/custom-archive/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./src/custom-archive/editor.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/custom-archive/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/custom-archive/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/custom-archive/block.json");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons */ "./src/custom-archive/icons.js");
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

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_5__["default"].layout,

  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/custom-archive/inspector.js":
/*!*****************************************!*\
  !*** ./src/custom-archive/inspector.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);







function postsInspector(props) {
  const {
    taxonomies,
    taxTerms,
    postTypes,
    attributes,
    setAttributes,
    imageSizes
  } = props;
  const {
    numberOfPosts,
    displayPostExcerpt,
    excerptLength,
    postLayout,
    postTypeSelected,
    filterByTaxonomy,
    taxTermsSelected,
    taxonomySelected,
    groupListings,
    groupTaxSelected,
    groupHideParents,
    groupHideEmpty,
    hideIfEmpty,
    emptyMessage,
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
    openAsModal,
    useHeadingTitle,
    imageOrientation,
    imageSize,
    noLink,
    honorStickyPosts,
    appendPostTitle,
    showPublishDate,
    publishDateLocation,
    publishDatePrefix,
    showTerms,
    taxQueryType,
    showPagination,
    learnMoreLinkTitle,
    showLearnMoreLink,
    newWindow,
    addlContentBefore,
    addlContentAfter
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

  const postTypeSelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Post Type", "carkeek-blocks"),
    onChange: postTypeSelected => setAttributes({
      postTypeSelected
    }),
    options: ptOptions,
    value: postTypeSelected
  });

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

  if (!headlineLevel) {
    setAttributes({
      headlineLevel: 2
    });
  }

  const [showGroupHierarchyOpt, setShowGroupHierarchyOpt] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  /** Set the tax selected on settings change */

  function handleTaxChange(value) {
    setAttributes({
      filterByTaxonomy: value
    });

    if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
      setAttributes({
        taxonomySelected: taxonomies[0].slug
      });
    }
  }

  function handleGroupSettingChange(value) {
    setAttributes({
      groupListings: value
    });

    if (Array.isArray(taxonomies) && typeof taxonomies[0] === 'object' && taxonomies[0] !== null && taxonomies[0].slug !== undefined) {
      setAttributes({
        groupTaxSelected: taxonomies[0].slug
      });
    }
  }

  function handlePaginationSettingChange(value) {
    setAttributes({
      showPagination: value
    });
    setAttributes({
      limitItemsMobile: false
    });
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const tax = lodash__WEBPACK_IMPORTED_MODULE_2___default().find(taxonomies, {
      slug: groupTaxSelected
    });

    if (tax) {
      setShowGroupHierarchyOpt(tax.hierarchical);
    } else {
      setShowGroupHierarchyOpt(false);
    }
  }, [groupTaxSelected, taxonomies]);
  const taxonomySelect = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Filter by Taxonomy"),
    checked: filterByTaxonomy,
    onChange: value => handleTaxChange(value)
  }), filterByTaxonomy && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, taxonomies && taxonomies.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Taxonomy", "carkeek-blocks"),
    onChange: taxonomySelected => setAttributes({
      taxonomySelected
    }),
    options: taxOptions,
    value: taxonomySelected
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("There are no taxonomies assigned this post type.", "carkeek-blocks")), taxonomySelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, taxTerms && taxTerms.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    multiple: true,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Terms", "carkeek-blocks"),
    onChange: terms => setAttributes({
      taxTermsSelected: terms.join(",")
    }),
    options: taxTerms && taxTerms.map(type => ({
      value: type.id,
      label: type.name
    })),
    value: taxTermsSelected && taxTermsSelected.split(','),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("To select multiple [shift]-click", "carkeek-blocks")
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("There are no terms assigned to this taxonomy.", "carkeek-blocks")), taxTermsSelected && taxTermsSelected.split(',').length > 1 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Taxonomy Query Type"),
    selected: taxQueryType,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("AND"),
      value: "AND"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("OR"),
      value: "OR"
    }],
    onChange: value => setAttributes({
      taxQueryType: value
    })
  }))));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Posts Settings", "carkeek-blocks")
  }, postTypeSelect, postTypeSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, " ", taxonomySelect, " "), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Number of Posts", "carkeek-blocks"),
    value: numberOfPosts,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select -1 to show all"),
    onChange: numberOfPosts => setAttributes({
      numberOfPosts
    }),
    min: -1,
    max: 21
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Sort By", "carkeek-blocks"),
    onChange: value => setAttributes({
      sortBy: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Publish Date"),
      value: "date"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Title (alpha)"),
      value: "title"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Menu Order"),
      value: "menu_order"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Custom Field"),
      value: "meta_value"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Random"),
      value: "rand"
    }],
    value: sortBy
  }), postTypeSelected == 'post' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Honor Sticky Posts"),
    checked: honorStickyPosts,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("If selected, sticky posts will be placed first", "carkeek-blocks"),
    onChange: honorStickyPosts => setAttributes({
      honorStickyPosts
    })
  }), sortBy == 'meta_value' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Custom Field",
    value: sortByMeta,
    onChange: value => setAttributes({
      sortByMeta: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Order"),
    selected: order,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("ASC"),
      value: "ASC"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("DESC"),
      value: "DESC"
    }],
    onChange: value => setAttributes({
      order: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Layout", "carkeek-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Layout Style"),
    selected: postLayout,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Grid"),
      value: "grid"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("List"),
      value: "list"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Fit Posts"),
      value: "fit"
    }],
    onChange: value => setAttributes({
      postLayout: value
    })
  }), postLayout == 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Number of Columns", "carkeek-blocks"),
    value: columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Open Content as Modal"),
    checked: openAsModal,
    onChange: value => setAttributes({
      openAsModal: value
    })
  })), openAsModal == false && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("No Link to Post"),
    checked: noLink,
    onChange: value => setAttributes({
      noLink: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Pagination"),
    checked: showPagination,
    onChange: value => handlePaginationSettingChange(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Group by Taxonomy Terms"),
    checked: groupListings,
    onChange: value => handleGroupSettingChange(value)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide Block if Empty"),
    checked: hideIfEmpty,
    onChange: value => setAttributes({
      hideIfEmpty: value
    })
  }), !hideIfEmpty && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Text to Display if Empty"),
    value: emptyMessage,
    onChange: value => setAttributes({
      emptyMessage: value
    })
  })), groupListings && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Group Settings", "carkeek-blocks"),
    initialOpen: false
  }, taxonomies && taxonomies.length > 0 ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select Taxonomy to Group By", "carkeek-blocks"),
    onChange: groupTaxSelected => setAttributes({
      groupTaxSelected
    }),
    options: taxOptions,
    value: groupTaxSelected
  }), showGroupHierarchyOpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide Parent Terms"),
    checked: groupHideParents,
    onChange: value => setAttributes({
      groupHideParents: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Hide Empty Terms"),
    checked: groupHideEmpty,
    onChange: value => setAttributes({
      groupHideEmpty: value
    })
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-error"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("There are no taxonomies assigned this post type.", "carkeek-blocks"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Item Style", "carkeek-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Use Heading tag for Titles"),
    checked: useHeadingTitle,
    onChange: value => setAttributes({
      useHeadingTitle: value
    })
  }), useHeadingTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Post Title Size", "carkeek-blocks"),
    value: headlineLevel,
    onChange: value => setAttributes({
      headlineLevel: value
    }),
    min: 2,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Taxonomy Terms"),
    checked: showTerms,
    onChange: value => setAttributes({
      showTerms: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Published Date"),
    checked: showPublishDate,
    onChange: value => setAttributes({
      showPublishDate: value
    })
  }), showPublishDate && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Location of Date"),
    selected: publishDateLocation,
    options: [{
      label: 'Before Title',
      value: 'before'
    }, {
      label: 'After Title',
      value: 'after'
    }],
    onChange: value => setAttributes({
      publishDateLocation: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Publish Date Prefix",
    value: publishDatePrefix,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Text to display before publish date"),
    onChange: value => setAttributes({
      publishDatePrefix: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Include Featured Image"),
    checked: displayFeaturedImage,
    onChange: value => setAttributes({
      displayFeaturedImage: value
    })
  }), displayFeaturedImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
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
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Landscape 3:5"),
      value: "landscape-35"
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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Image Size", "carkeek-blocks"),
    onChange: value => setAttributes({
      imageSize: value
    }),
    options: sizeOptions,
    value: imageSize
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Include Excerpt"),
    checked: displayPostExcerpt,
    onChange: value => setAttributes({
      displayPostExcerpt: value
    })
  }), displayPostExcerpt && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Max number of words in excerpt"),
    value: excerptLength,
    onChange: value => setAttributes({
      excerptLength: value
    }),
    min: -1,
    max: 75
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Show Read More Link"),
    checked: showLearnMoreLink,
    onChange: value => setAttributes({
      showLearnMoreLink: value
    })
  }), showLearnMoreLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Link Label",
    value: learnMoreLinkTitle,
    onChange: value => setAttributes({
      learnMoreLinkTitle: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Append Post Title to More Link"),
    checked: appendPostTitle,
    onChange: value => setAttributes({
      appendPostTitle: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Responsive Layout", "carkeek-blocks"),
    initialOpen: false
  }, postLayout == 'grid' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns Mobile", "carkeek-blocks"),
    value: columnsMobile,
    onChange: columnsMobile => setAttributes({
      columnsMobile
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Columns Tablet", "carkeek-blocks"),
    value: columnsTablet,
    onChange: columnsTablet => setAttributes({
      columnsTablet
    }),
    min: 1,
    max: 6
  })), !showPagination && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Limit the number of posts displayed in Mobile/Tablet"),
    checked: limitItemsMobile,
    onChange: value => setAttributes({
      limitItemsMobile: value
    })
  }), limitItemsMobile && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items to show Mobile", "carkeek-blocks"),
    value: itemsMobile,
    onChange: itemsMobile => setAttributes({
      itemsMobile
    }),
    min: 1,
    max: 6
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Items to show Tablet", "carkeek-blocks"),
    value: itemsTablet,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Select -1 to show all"),
    onChange: itemsTablet => setAttributes({
      itemsTablet
    }),
    min: 1,
    max: 6
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Open Links in New Window"),
    checked: newWindow,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Should only be used when the content links externally.", "carkeek-blocks"),
    onChange: value => setAttributes({
      newWindow: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Custom Meta Field Before Excerpt",
    value: addlContentBefore,
    onChange: value => setAttributes({
      addlContentBefore: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: "Custom Meta Field After Excerpt",
    value: addlContentAfter,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)("Enter the name of the metafield to display, enter multiples separated by a comma. Ask your developer for help identifying the correct meta field.", "carkeek-blocks"),
    onChange: value => setAttributes({
      addlContentAfter: value
    })
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (postsInspector);

/***/ }),

/***/ "./src/custom-archive/editor.scss":
/*!****************************************!*\
  !*** ./src/custom-archive/editor.scss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/custom-archive/style.scss":
/*!***************************************!*\
  !*** ./src/custom-archive/style.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ (function(module) {

module.exports = window["lodash"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/custom-archive/block.json":
/*!***************************************!*\
  !*** ./src/custom-archive/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/custom-archive","title":"Custom Post Type Archive","category":"widgets","description":"Block showing the latest items by post type.","keywords":["archive","posts","list","custom"],"version":"1.0.0","textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","supports":{"align":["wide","full","left","center","right"],"anchor":true,"color":{"background":true,"text":false,"link":false}},"attributes":{"numberOfPosts":{"type":"number","default":3},"honorStickyPosts":{"type":"boolean","default":false},"postTypeSelected":{"type":"string","default":"post"},"displayPostExcerpt":{"type":"boolean","default":true},"displayFeaturedImage":{"type":"boolean","default":true},"imageOrientation":{"type":"string","default":"landscape"},"openAsModal":{"type":"boolean","default":false},"noLink":{"type":"boolean","default":false},"appendPostTitle":{"type":"boolean","default":false},"postLayout":{"type":"string","default":"grid"},"columns":{"type":"number","default":3},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":3},"limitItemsMobile":{"type":"boolean","default":false},"itemsMobile":{"type":"number","default":1},"itemsTablet":{"type":"number","default":3},"sortBy":{"type":"string","default":"date"},"sortByMeta":{"type":"string","default":""},"order":{"type":"string","default":"ASC"},"excerptLength":{"type":"number","default":25},"filterByTaxonomy":{"type":"boolean","default":false},"groupListings":{"type":"boolean","default":false},"groupTaxSelected":{"type":"string","default":""},"groupHideParents":{"type":"boolean","default":false},"groupHideEmpty":{"type":"boolean","default":false},"taxonomySelected":{"type":"string","default":""},"taxTermsSelected":{"type":"string","default":""},"taxQueryType":{"type":"string","default":"AND"},"hideIfEmpty":{"type":"boolean","default":true},"emptyMessage":{"type":"string","default":"No posts found."},"useHeadingTitle":{"type":"boolean","default":false},"headlineLevel":{"type":"number","default":2},"showPublishDate":{"type":"boolean","default":false},"showPagination":{"type":"boolean","default":false},"showTerms":{"type":"boolean","default":false},"publishDateLocation":{"type":"string","default":"below"},"publishDatePrefix":{"type":"string","default":""},"showLearnMoreLink":{"type":"boolean","default":false},"learnMoreLinkTitle":{"type":"string","default":"Learn More"},"imageSize":{"type":"string","default":"default"},"newWindow":{"type":"boolean","default":false},"addlContentBefore":{"type":"string","default":""},"addlContentAfter":{"type":"string","default":""},"blockId":{"type":"string"},"align":{"type":"string","default":""},"className":{"type":"string","default":""},"backgroundColor":{"type":"string","default":""}}}');

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
/******/ 			"custom-archive/index": 0,
/******/ 			"custom-archive/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["custom-archive/style-index"], function() { return __webpack_require__("./src/custom-archive/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map