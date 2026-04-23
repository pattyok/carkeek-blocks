/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image-compare/edit.js":
/*!***********************************!*\
  !*** ./src/image-compare/edit.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/image-compare/editor.scss");








function Edit(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    beforeImageId,
    beforeImageUrl,
    beforeImageAlt,
    beforeFocalX,
    beforeFocalY,
    afterImageId,
    afterImageUrl,
    afterImageAlt,
    afterFocalX,
    afterFocalY,
    showLabels,
    beforeLabel,
    afterLabel,
    initialPosition,
    blockHeight,
    sliderColor,
    dividerWidth,
    dividerColor
  } = attributes;
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const [containerWidth, setContainerWidth] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => setContainerWidth(el.offsetWidth);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: 'cd-image-container ck-ic-editor'
  }); // Merge Gutenberg's internal selection ref with our ResizeObserver ref

  const combinedRef = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__.useMergeRefs)([blockProps.ref, containerRef]);
  const hasBothImages = beforeImageUrl && afterImageUrl;
  const containerStyle = {
    height: hasBothImages ? blockHeight + 'px' : 'auto',
    '--ck-ic-divider-width': dividerWidth + 'px',
    '--ck-ic-divider-color': dividerColor
  }; // Image 2 (after) is the base layer — right side, full cover.

  const img2BaseStyle = {
    objectFit: 'cover',
    objectPosition: `${afterFocalX * 100}% ${afterFocalY * 100}%`,
    width: '100%',
    height: '100%',
    display: 'block'
  }; // Image 1 (before) is the clip layer — left side, absolute + containerWidth for focal point.

  const img1ClipStyle = {
    objectFit: 'cover',
    objectPosition: `${beforeFocalX * 100}% ${beforeFocalY * 100}%`,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: containerWidth ? containerWidth + 'px' : '100%',
    maxWidth: 'none',
    display: 'block'
  };

  function onSelectBefore(media) {
    setAttributes({
      beforeImageId: media.id,
      beforeImageUrl: media.url,
      beforeImageAlt: media.alt || ''
    });
  }

  function onSelectAfter(media) {
    setAttributes({
      afterImageId: media.id,
      afterImageUrl: media.url,
      afterImageAlt: media.alt || ''
    });
  }

  function removeBefore() {
    setAttributes({
      beforeImageId: undefined,
      beforeImageUrl: '',
      beforeImageAlt: ''
    });
  }

  function removeAfter() {
    setAttributes({
      afterImageId: undefined,
      afterImageUrl: '',
      afterImageAlt: ''
    });
  }

  function swapImages() {
    setAttributes({
      beforeImageId: afterImageId,
      beforeImageUrl: afterImageUrl,
      beforeImageAlt: afterImageAlt,
      beforeFocalX: afterFocalX,
      beforeFocalY: afterFocalY,
      beforeLabel: afterLabel,
      afterImageId: beforeImageId,
      afterImageUrl: beforeImageUrl,
      afterImageAlt: beforeImageAlt,
      afterFocalX: beforeFocalX,
      afterFocalY: beforeFocalY,
      afterLabel: beforeLabel
    });
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("figure", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, blockProps, {
    ref: combinedRef,
    style: containerStyle
  }), hasBothImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectBefore,
    allowedTypes: ['image'],
    value: beforeImageId,
    render: _ref2 => {
      let {
        open
      } = _ref2;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        icon: "images-alt2",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image 1', 'carkeek-blocks'),
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 1', 'carkeek-blocks'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectAfter,
    allowedTypes: ['image'],
    value: afterImageId,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
        icon: "images-alt2",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image 2', 'carkeek-blocks'),
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 2', 'carkeek-blocks'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToolbarButton, {
    icon: "randomize",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Swap Images', 'carkeek-blocks'),
    onClick: swapImages
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 1', 'carkeek-blocks'),
    initialOpen: true
  }, beforeImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Focal Point', 'carkeek-blocks'),
    url: beforeImageUrl,
    value: {
      x: beforeFocalX,
      y: beforeFocalY
    },
    onChange: fp => setAttributes({
      beforeFocalX: fp.x,
      beforeFocalY: fp.y
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectBefore,
    allowedTypes: ['image'],
    value: beforeImageId,
    render: _ref4 => {
      let {
        open
      } = _ref4;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "secondary",
        onClick: open,
        style: {
          marginTop: '8px',
          marginRight: '8px'
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace', 'carkeek-blocks'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "link",
    isDestructive: true,
    onClick: removeBefore,
    style: {
      marginTop: '8px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove', 'carkeek-blocks'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "ck-ic-no-image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Image 1 in the block area.', 'carkeek-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 2', 'carkeek-blocks'),
    initialOpen: true
  }, afterImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Focal Point', 'carkeek-blocks'),
    url: afterImageUrl,
    value: {
      x: afterFocalX,
      y: afterFocalY
    },
    onChange: fp => setAttributes({
      afterFocalX: fp.x,
      afterFocalY: fp.y
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectAfter,
    allowedTypes: ['image'],
    value: afterImageId,
    render: _ref5 => {
      let {
        open
      } = _ref5;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        variant: "secondary",
        onClick: open,
        style: {
          marginTop: '8px',
          marginRight: '8px'
        }
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace', 'carkeek-blocks'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "link",
    isDestructive: true,
    onClick: removeAfter,
    style: {
      marginTop: '8px'
    }
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Remove', 'carkeek-blocks'))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "ck-ic-no-image"
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Add Image 2 in the block area.', 'carkeek-blocks'))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Slider Settings', 'carkeek-blocks'),
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Initial Position (%)', 'carkeek-blocks'),
    value: initialPosition,
    onChange: value => setAttributes({
      initialPosition: value
    }),
    min: 0,
    max: 100,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Block Height (px)', 'carkeek-blocks'),
    value: blockHeight,
    onChange: value => setAttributes({
      blockHeight: value
    }),
    min: 100,
    max: 800,
    step: 10
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Divider Width (px)', 'carkeek-blocks'),
    value: dividerWidth,
    onChange: value => setAttributes({
      dividerWidth: value
    }),
    min: 0,
    max: 30,
    step: 1,
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Set to 0 to hide the divider line.', 'carkeek-blocks')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Show Labels', 'carkeek-blocks'),
    checked: showLabels,
    onChange: value => setAttributes({
      showLabels: value
    })
  }), showLabels && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 1 Label', 'carkeek-blocks'),
    value: beforeLabel,
    onChange: value => setAttributes({
      beforeLabel: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 2 Label', 'carkeek-blocks'),
    value: afterLabel,
    onChange: value => setAttributes({
      afterLabel: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.PanelColorSettings, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Colors', 'carkeek-blocks'),
    initialOpen: false,
    colorSettings: [{
      value: sliderColor,
      onChange: value => setAttributes({
        sliderColor: value || '#dc717d'
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Handle Color', 'carkeek-blocks')
    }, {
      value: dividerColor,
      onChange: value => setAttributes({
        dividerColor: value || '#ffffff'
      }),
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Divider Color', 'carkeek-blocks')
    }]
  })), !hasBothImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ck-ic-setup"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ck-ic-setup-panel"
  }, beforeImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectBefore,
    allowedTypes: ['image'],
    value: beforeImageId,
    render: _ref6 => {
      let {
        open
      } = _ref6;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        className: "ck-ic-setup-replace",
        onClick: open
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: beforeImageUrl,
        alt: beforeImageAlt,
        className: "ck-ic-setup-thumb"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "ck-ic-setup-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 1 — click to replace', 'carkeek-blocks')));
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    icon: "format-image",
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 1', 'carkeek-blocks')
    },
    onSelect: onSelectBefore,
    accept: "image/*",
    allowedTypes: ['image']
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "ck-ic-setup-panel"
  }, afterImageUrl ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectAfter,
    allowedTypes: ['image'],
    value: afterImageId,
    render: _ref7 => {
      let {
        open
      } = _ref7;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
        className: "ck-ic-setup-replace",
        onClick: open
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
        src: afterImageUrl,
        alt: afterImageAlt,
        className: "ck-ic-setup-thumb"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
        className: "ck-ic-setup-label"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 2 — click to replace', 'carkeek-blocks')));
    }
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaPlaceholder, {
    icon: "format-image",
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Image 2', 'carkeek-blocks')
    },
    onSelect: onSelectAfter,
    accept: "image/*",
    allowedTypes: ['image']
  })))), hasBothImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: afterImageUrl,
    alt: afterImageAlt,
    style: img2BaseStyle
  }), showLabels && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "cd-image-label",
    "data-type": "original"
  }, afterLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectAfter,
    allowedTypes: ['image'],
    value: afterImageId,
    render: _ref8 => {
      let {
        open
      } = _ref8;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "ck-ic-replace-btn ck-ic-replace-btn--right",
        onClick: open,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image 2', 'carkeek-blocks'));
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "cd-resize-img is-preview",
    style: {
      width: initialPosition + '%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", {
    src: beforeImageUrl,
    alt: beforeImageAlt,
    style: img1ClipStyle
  }), showLabels && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "cd-image-label cd-image-label--visible",
    "data-type": "modified"
  }, beforeLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: onSelectBefore,
    allowedTypes: ['image'],
    value: beforeImageId,
    render: _ref9 => {
      let {
        open
      } = _ref9;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: "ck-ic-replace-btn ck-ic-replace-btn--left",
        onClick: open,
        variant: "secondary"
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Replace Image 1', 'carkeek-blocks'));
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "cd-divider cd-divider--preview",
    style: {
      left: initialPosition + '%'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", {
    className: "cd-handle cd-handle--preview",
    style: {
      left: initialPosition + '%',
      backgroundColor: sliderColor
    }
  })));
}

/***/ }),

/***/ "./src/image-compare/icon.js":
/*!***********************************!*\
  !*** ./src/image-compare/icon.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {
  imageCompare: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "2",
    y: "4",
    width: "9",
    height: "16",
    rx: "1",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("rect", {
    x: "13",
    y: "4",
    width: "9",
    height: "16",
    rx: "1",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
    x1: "12",
    y1: "2",
    x2: "12",
    y2: "22",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polyline", {
    points: "10,12 8,10 10,8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polyline", {
    points: "14,8 16,10 14,12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))
};
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/image-compare/index.js":
/*!************************************!*\
  !*** ./src/image-compare/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/image-compare/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/image-compare/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/image-compare/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/image-compare/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/image-compare/icon.js");






(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"].imageCompare,
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/image-compare/save.js":
/*!***********************************!*\
  !*** ./src/image-compare/save.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    beforeImageUrl,
    beforeImageAlt,
    beforeFocalX,
    beforeFocalY,
    afterImageUrl,
    afterImageAlt,
    afterFocalX,
    afterFocalY,
    showLabels,
    beforeLabel,
    afterLabel,
    initialPosition,
    blockHeight,
    sliderColor,
    dividerWidth,
    dividerColor
  } = attributes;

  if (!beforeImageUrl || !afterImageUrl) {
    return null;
  }

  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save({
    className: 'cd-image-container',
    'data-initial-position': initialPosition,
    'data-slider-color': sliderColor,
    'data-divider-width': dividerWidth,
    'data-divider-color': dividerColor,
    style: {
      height: blockHeight + 'px'
    }
  }); // Image 2 (after) is the base layer — fills the container, visible on the RIGHT.

  const img2BaseStyle = {
    objectFit: 'cover',
    objectPosition: `${afterFocalX * 100}% ${afterFocalY * 100}%`,
    width: '100%',
    height: '100%',
    display: 'block'
  }; // Image 1 (before) is the clip layer — inside .cd-resize-img, visible on the LEFT.
  // Width is set to --ck-ic-width by script.js so the focal point renders correctly
  // across the full container width (not just the narrowed clip div).

  const img1ClipStyle = {
    objectFit: 'cover',
    objectPosition: `${beforeFocalX * 100}% ${beforeFocalY * 100}%`,
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 'var(--ck-ic-width, 100%)',
    maxWidth: 'none',
    display: 'block'
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: afterImageUrl,
    alt: afterImageAlt,
    style: img2BaseStyle
  }), showLabels && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cd-image-label",
    "data-type": "original"
  }, afterLabel), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "cd-resize-img",
    style: {
      width: initialPosition + '%'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: beforeImageUrl,
    alt: beforeImageAlt,
    style: img1ClipStyle
  }), showLabels && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cd-image-label",
    "data-type": "modified"
  }, beforeLabel)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cd-divider",
    style: {
      left: initialPosition + '%'
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "cd-handle",
    style: {
      left: initialPosition + '%'
    }
  }));
}

/***/ }),

/***/ "./src/image-compare/editor.scss":
/*!***************************************!*\
  !*** ./src/image-compare/editor.scss ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/image-compare/style.scss":
/*!**************************************!*\
  !*** ./src/image-compare/style.scss ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["compose"];

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

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

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

/***/ "./src/image-compare/block.json":
/*!**************************************!*\
  !*** ./src/image-compare/block.json ***!
  \**************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"carkeek-blocks/image-compare","version":"1.0.1","title":"Image Compare","category":"media","description":"Before/after image comparison slider with focal point control.","supports":{"html":false,"align":["wide","full"]},"keywords":["before","after","compare","slider","image"],"textdomain":"carkeek-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./script.js","attributes":{"beforeImageId":{"type":"integer"},"beforeImageUrl":{"type":"string","default":""},"beforeImageAlt":{"type":"string","default":""},"beforeFocalX":{"type":"number","default":0.5},"beforeFocalY":{"type":"number","default":0.5},"afterImageId":{"type":"integer"},"afterImageUrl":{"type":"string","default":""},"afterImageAlt":{"type":"string","default":""},"afterFocalX":{"type":"number","default":0.5},"afterFocalY":{"type":"number","default":0.5},"showLabels":{"type":"boolean","default":true},"beforeLabel":{"type":"string","default":"Image 1"},"afterLabel":{"type":"string","default":"Image 2"},"initialPosition":{"type":"number","default":50},"blockHeight":{"type":"number","default":400},"sliderColor":{"type":"string","default":"#dc717d"},"dividerWidth":{"type":"number","default":10},"dividerColor":{"type":"string","default":"#ffffff"}}}');

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
/******/ 			"image-compare/index": 0,
/******/ 			"image-compare/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["image-compare/style-index"], function() { return __webpack_require__("./src/image-compare/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map