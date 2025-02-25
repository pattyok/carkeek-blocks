/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modal-item/deprecated.js":
/*!**************************************!*\
  !*** ./src/modal-item/deprecated.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/modal-item/image.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





const deprecated = [{
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-name"
    },
    title: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-title"
    },
    details: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-details"
    },
    blockId: {
      type: "string",
      source: "attribute",
      selector: '.ck-modal-item',
      attribute: 'data-id'
    },
    hideImagePreview: {
      type: 'boolean',
      default: false
    },
    hideTitlePreview: {
      type: 'boolean',
      default: false
    }
  },
  save({
    attributes
  }) {
    const {
      title,
      name,
      details,
      blockId,
      hideImagePreview,
      hideTitlePreview,
      modalLayout,
      mailtoLink
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(blockProps.className, {
        [`pos-${modalLayout}`]: modalLayout,
        'has-image': modalLayout !== 'image-hide'
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item",
      "data-id": blockId
    }, !hideImagePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-image",
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "a",
      value: name,
      id: `title-${blockId}`,
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }), title && !hideTitlePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-dialog modal fade",
      id: `dialog-${blockId}`,
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": `title-${blockId}`,
      "aria-hidden": "true"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, "\xD7"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-body"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "div",
      value: name
    }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    })), details && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-details",
      tagName: "div",
      value: details
    }), mailtoLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "ck-modal-item-mailto arrow-link",
      href: `mailto:${mailtoLink}`
    }, "Contact")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      "data-dismiss": "modal"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close', 'carkeek-blocks')))))));
  }
}, {
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-name"
    },
    title: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-title"
    },
    details: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-details"
    },
    blockId: {
      type: "string",
      source: "attribute",
      selector: '.ck-modal-item',
      attribute: 'data-id'
    },
    hideImagePreview: {
      type: 'boolean',
      default: false
    },
    hideTitlePreview: {
      type: 'boolean',
      default: false
    }
  },
  save({
    attributes
  }) {
    const {
      title,
      name,
      details,
      blockId,
      hideImagePreview,
      hideTitlePreview,
      modalLayout
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(blockProps.className, {
        [`pos-${modalLayout}`]: modalLayout
      })
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item",
      "data-id": blockId
    }, !hideImagePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-image",
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "a",
      value: name,
      id: `title-${blockId}`,
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }), title && !hideTitlePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-dialog modal fade",
      id: `dialog-${blockId}`,
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": `title-${blockId}`,
      "aria-hidden": "true"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, "\xD7"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-body"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "div",
      value: name
    }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    }), details && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-details",
      tagName: "p",
      value: details
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-dismiss": "modal"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close', 'carkeek-blocks')))))));
  }
}, {
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-name"
    },
    title: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-title"
    },
    details: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-details"
    },
    blockId: {
      type: "string",
      source: "attribute",
      selector: '.ck-modal-item',
      attribute: 'data-id'
    },
    hideImagePreview: {
      type: 'boolean',
      default: false
    },
    hideTitlePreview: {
      type: 'boolean',
      default: false
    }
  },
  save({
    attributes
  }) {
    const {
      title,
      name,
      details,
      blockId,
      hideImagePreview,
      hideTitlePreview
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item",
      "data-id": blockId
    }, !hideImagePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-image",
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "a",
      value: name,
      id: `title-${blockId}`,
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }), title && !hideTitlePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-dialog modal fade",
      id: `dialog-${blockId}`,
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": `title-${blockId}`,
      "aria-hidden": "true"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, "\xD7"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-body"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "div",
      value: name
    }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    }), details && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-details",
      tagName: "p",
      value: details
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-dismiss": "modal"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close', 'carkeek-blocks')))))));
  }
}, {
  attributes: {
    name: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-name"
    },
    title: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-title"
    },
    details: {
      type: "string",
      source: "html",
      selector: ".ck-modal-item-details"
    },
    blockId: {
      type: "string",
      source: "attribute",
      selector: '.ck-modal-item',
      attribute: 'data-id'
    }
  },
  save({
    attributes
  }) {
    const {
      title,
      name,
      details,
      blockId
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item",
      "data-id": blockId
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-image",
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "a",
      value: name,
      id: `title-${blockId}`,
      "data-toggle": "modal",
      "data-target": `#dialog-${blockId}`
    }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-modal-item-dialog modal fade",
      id: `dialog-${blockId}`,
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": `title-${blockId}`,
      "aria-hidden": "true"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-dialog modal-dialog-centered",
      role: "document"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-content"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-header"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      "aria-hidden": "true"
    }, "\xD7"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-body"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-name",
      tagName: "div",
      value: name
    }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-title",
      tagName: "p",
      value: title
    }), details && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-modal-item-details",
      tagName: "p",
      value: details
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "modal-footer"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      "data-dismiss": "modal"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Close', 'carkeek-blocks')))))));
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/modal-item/edit.js":
/*!********************************!*\
  !*** ./src/modal-item/edit.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/modal-item/image.js");
/* harmony import */ var _shared_shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared */ "./src/shared/shared.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/modal-item/editor.scss");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);








function ModalItemEdit(props) {
  //console.log(this.props);
  const {
    attributes,
    isSelected,
    clientId,
    setAttributes
  } = props;
  const {
    title,
    name,
    details,
    blockId,
    hideImagePreview,
    hideTitlePreview,
    modalLayout,
    mailtoLink
  } = attributes;
  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.useBlockProps)();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(blockProps.className, {
      [`pos-${modalLayout}`]: modalLayout
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Hide Image in Preview"),
    checked: hideImagePreview,
    onChange: value => setAttributes({
      hideImagePreview: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Hide Title in Preview"),
    checked: hideTitlePreview,
    onChange: value => setAttributes({
      hideTitlePreview: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.RadioControl, {
    label: "Modal Window Image Layout",
    help: "Control the size of the image in the modal view",
    selected: modalLayout,
    options: [{
      label: 'Large',
      value: 'image-large'
    }, {
      label: 'Small',
      value: 'image-small'
    }, {
      label: 'Hide',
      value: 'image-hide'
    }],
    onChange: value => setAttributes({
      modalLayout: value
    })
  }))), (!hideImagePreview || isSelected || (0,_shared_shared__WEBPACK_IMPORTED_MODULE_2__.hasSelectedInnerBlock)(props)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageEdit, null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "ck-modal-name",
    tagName: "div",
    onChange: name => setAttributes({
      name
    }),
    value: name,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Member Name", "carkeek-blocks"),
    formatingCowithoutInteractiveFormatting: true,
    allowedFormats: []
  }), (!hideTitlePreview || isSelected || (0,_shared_shared__WEBPACK_IMPORTED_MODULE_2__.hasSelectedInnerBlock)(props)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "ck-modal-title",
    tagName: "div",
    onChange: title => setAttributes({
      title
    }),
    value: title,
    placeholder: isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Member Title", "carkeek-blocks") : null,
    allowedFormats: [],
    withoutInteractiveFormatting: true
  }), (isSelected || (0,_shared_shared__WEBPACK_IMPORTED_MODULE_2__.hasSelectedInnerBlock)(props)) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.TextControl, {
    value: mailtoLink,
    className: "block-editor-media-placeholder__url-input-field",
    onChange: mailtoLink => setAttributes({
      mailtoLink
    }),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Email Address", "carkeek-blocks")
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    className: "ck-modal-details",
    tagName: "div",
    multiline: "p",
    onChange: details => setAttributes({
      details
    }),
    value: details,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Member Details", "carkeek-blocks"),
    preserveWhiteSpace: true
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalItemEdit);

/***/ }),

/***/ "./src/modal-item/icons.js":
/*!*********************************!*\
  !*** ./src/modal-item/icons.js ***!
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
icons.image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
  cx: "63.6",
  cy: "44.5",
  r: "3.9"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M75.3 74.4H23.2c-1.2 0-2.1-.9-2.1-2.1V33.8c0-1.2.9-2.1 2.1-2.1h52.1c1.2 0 2.1.9 2.1 2.1v38.5c0 1.2-1 2.1-2.1 2.1zm-50-4.2h47.8V35.9H25.3v34.3z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M15.9 38c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1h10.6c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2.1 2.1H18v7.6c0 1.1-.9 2.1-2.1 2.1zM82.6 38c-1.2 0-2.1-.9-2.1-2.1v-7.6H72c-1.2 0-2.1-.9-2.1-2.1S70.8 24 72 24h10.6c1.2 0 2.1.9 2.1 2.1v9.7c0 1.2-1 2.2-2.1 2.2zM82.6 82.1H72c-1.2 0-2.1-.9-2.1-2.1s.9-2.1 2.1-2.1h8.4v-7.6c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1V80c.1 1.1-.9 2.1-2 2.1zM26.5 82.1H15.9c-1.2 0-2.1-.9-2.1-2.1v-9.7c0-1.2.9-2.1 2.1-2.1s2.1.9 2.1 2.1v7.6h8.4c1.2 0 2.1.9 2.1 2.1s-.9 2.1-2 2.1z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.2 74.4c-.5 0-1-.2-1.4-.5-.9-.7-1-2.1-.3-3l16.1-19.3c.7-.8 1.9-1 2.8-.4l11.4 7.5 5.8-5.1c.7-.6 1.8-.7 2.6-.1l16.2 11.7c.9.7 1.2 2 .5 2.9-.7.9-2 1.2-2.9.5L59.2 58l-5.8 5.1c-.7.6-1.8.7-2.6.2l-11.2-7.4-14.8 17.8c-.4.5-1 .7-1.6.7z"
}));
icons.modal = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  enableBackground: "new -3 5 512 512",
  viewBox: "-3 5 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M479.9 26.1H20.1c-5.5 0-10 4.5-10 10V496c0 5.5 4.5 10 10 10h459.8c5.5 0 10-4.5 10-10V36.1c0-5.6-4.5-10-10-10zm-449.8 20h439.8v80H30.1v-80zm0 439.8V146h439.8v339.9H30.1z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M439.9 76.1H250c-5.5 0-10 4.5-10 10s4.5 10 10 10h189.9c5.5 0 10-4.5 10-10s-4.4-10-10-10zM70.1 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.5-10-10-10zM120 76.1h-10c-5.5 0-10 4.5-10 10s4.5 10 10 10h10c5.5 0 10-4.5 10-10s-4.4-10-10-10zM409.9 176H90.1c-5.5 0-10 4.5-10 10v259.9c0 5.5 4.5 10 10 10H410c5.5 0 10-4.5 10-10V186c-.1-5.5-4.5-10-10.1-10zm-309.8 20H400v42.4H100.1V196zm0 239.9V258.4H400v177.5H100.1z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M280 296H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 336H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10s-4.5-10-10-10zM280 376H150c-5.5 0-10 4.5-10 10s4.5 10 10 10h130c5.5 0 10-4.5 10-10 0-5.6-4.5-10-10-10z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/modal-item/image.js":
/*!*********************************!*\
  !*** ./src/modal-item/image.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ImageEdit: () => (/* binding */ ImageEdit),
/* harmony export */   ImageSave: () => (/* binding */ ImageSave),
/* harmony export */   "default": () => (/* binding */ ImageEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function ImageEdit() {
  const template = [['carkeek-blocks/fixed-image', {
    useCaption: false,
    useLink: false
  }]];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    template: template,
    templateLock: "all"
  });
}
function ImageSave() {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.Content, null);
}


/***/ }),

/***/ "./src/modal-item/index.js":
/*!*********************************!*\
  !*** ./src/modal-item/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/modal-item/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/modal-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/modal-item/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/modal-item/deprecated.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/modal-item/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/modal-item/block.json");








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].modal,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("modal", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("image and text", "carkeek-blocks")],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/modal-item/save.js":
/*!********************************!*\
  !*** ./src/modal-item/save.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image */ "./src/modal-item/image.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);





function ModalItemSave({
  attributes
}) {
  const {
    title,
    name,
    details,
    blockId,
    hideImagePreview,
    hideTitlePreview,
    modalLayout,
    mailtoLink
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save();
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(blockProps.className, {
      [`pos-${modalLayout}`]: modalLayout,
      'has-image': modalLayout !== 'image-hide'
    })
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-modal-item",
    "data-id": blockId
  }, !hideImagePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "javascript:;",
    class: "ck-modal-item-image",
    "aria-controls": `dialog-${blockId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_1__.ImageSave, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: "ck-modal-item-name",
    tagName: "a",
    value: name,
    id: `title-${blockId}`,
    "aria-controls": `dialog-${blockId}`
  }), title && !hideTitlePreview && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: "ck-modal-item-title",
    tagName: "p",
    value: title
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    class: "ck-modal-item-dialog modal2 modal--animate-scale js-modal",
    id: `dialog-${blockId}`
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal__content"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "modal__close-btn modal__close-btn--inner mc4-hide@md js-modal__close js-tab-focus"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    class: "mc4-icon mc4-icon--xs",
    viewBox: "0 0 16 16"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Close modal window"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
    "stroke-width": "2",
    stroke: "currentColor",
    fill: "none",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-miterlimit": "10"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "13.5",
    y1: "2.5",
    x2: "2.5",
    y2: "13.5"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "2.5",
    y1: "2.5",
    x2: "13.5",
    y2: "13.5"
  }))))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "modal-body"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-modal-item-header"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: "ck-modal-item-name",
    tagName: "div",
    value: name
  }), title && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: "ck-modal-item-title",
    tagName: "p",
    value: title
  })), details && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    className: "ck-modal-item-details",
    tagName: "div",
    value: details
  }), mailtoLink && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "ck-modal-item-mailto arrow-link",
    href: `mailto:${mailtoLink}`
  }, "Contact")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", {
    class: "modal-footer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    class: "modal__close-btn modal__close-btn--outer js-modal__close js-tab-focus"
  }, "Close")))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ModalItemSave);

/***/ }),

/***/ "./src/shared/shared.js":
/*!******************************!*\
  !*** ./src/shared/shared.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasSelectedInnerBlock: () => (/* binding */ hasSelectedInnerBlock)
/* harmony export */ });
function hasSelectedInnerBlock(props) {
  const select = wp.data.select('core/block-editor');
  const selected = select.getBlockSelectionStart();
  const inner = select.getBlock(props.clientId).innerBlocks;
  for (let i = 0; i < inner.length; i++) {
    if (inner[i].clientId === selected || inner[i].innerBlocks.length && hasSelectedInnerBlock(inner[i])) {
      return true;
    }
  }
  return false;
}


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

/***/ "./src/modal-item/editor.scss":
/*!************************************!*\
  !*** ./src/modal-item/editor.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modal-item/style.scss":
/*!***********************************!*\
  !*** ./src/modal-item/style.scss ***!
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

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/modal-item/block.json":
/*!***********************************!*\
  !*** ./src/modal-item/block.json ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/modal-item","version":"0.1.3","title":"Modal Item","category":"widgets","description":"Block that opens additional content in a modal window.","supports":{"reusable":true,"html":false},"textdomain":"carkeek-blocks","attributes":{"name":{"type":"string","source":"html","selector":".ck-modal-item-name"},"title":{"type":"string","source":"html","selector":".ck-modal-item-title"},"details":{"type":"string","source":"html","selector":".ck-modal-item-details"},"blockId":{"type":"string","source":"attribute","selector":".ck-modal-item","attribute":"data-id"},"modalLayout":{"type":"string","default":"image-large"},"hideImagePreview":{"type":"boolean","default":false},"hideTitlePreview":{"type":"boolean","default":false},"mailtoLink":{"type":"string"}},"editorScript":"file:./index.js","viewScript":"file:./script.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"modal-item/index": 0,
/******/ 			"modal-item/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["modal-item/style-index"], () => (__webpack_require__("./src/modal-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map