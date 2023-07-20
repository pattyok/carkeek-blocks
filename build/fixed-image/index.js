/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/fixed-image/deprecated.js":
/*!***************************************!*\
  !*** ./src/fixed-image/deprecated.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


const deprecated = [{
  attributes: {
    id: {
      type: "number"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    focalPoint: {
      type: "object"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: ""
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "title"
    },
    sizeSlug: {
      type: "string",
      default: "large"
    },
    width: {
      type: "string"
    },
    height: {
      type: "string"
    },
    useCaption: {
      type: "boolean",
      default: false
    },
    useLink: {
      type: "boolean",
      default: true
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    photoCredit: {
      type: "string",
      source: "html",
      selector: ".ck-fixed-image-credit"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute"
    },
    linkDestination: {
      type: "string"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "target"
    }
  },
  save: function (_ref) {
    let {
      attributes
    } = _ref;
    const {
      url,
      alt,
      href,
      rel,
      width,
      height,
      id,
      linkTarget,
      sizeSlug,
      title,
      caption,
      useCaption,
      focalPoint,
      linkStyle,
      photoCredit
    } = attributes;
    const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`size-${sizeSlug}`]: sizeSlug
    });
    let imageStyle = {};

    if (focalPoint) {
      imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
    }

    const linkClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`${linkStyle}`]: linkStyle,
      'ck-fixed-image-wrap': true
    });
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height,
      title: title,
      style: imageStyle
    }), photoCredit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-fixed-image-credit'
    }, photoCredit));
    const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, image) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-fixed-image-wrap'
    }, image), useCaption && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: classes
    }), figure));
  }
}, {
  attributes: {
    id: {
      type: "number"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    focalPoint: {
      type: "object"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: ""
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "title"
    },
    sizeSlug: {
      type: "string",
      default: "large"
    },
    width: {
      type: "string"
    },
    height: {
      type: "string"
    },
    useCaption: {
      type: "boolean",
      default: false
    },
    useLink: {
      type: "boolean",
      default: true
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute"
    },
    linkDestination: {
      type: "string"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "target"
    }
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      url,
      alt,
      href,
      rel,
      width,
      height,
      id,
      linkTarget,
      sizeSlug,
      title,
      caption,
      useCaption,
      focalPoint,
      linkStyle
    } = attributes;
    const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`size-${sizeSlug}`]: sizeSlug
    });
    let imageStyle = {};

    if (focalPoint) {
      imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
    }

    const linkClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`${linkStyle}`]: linkStyle,
      'ck-fixed-image-wrap': true
    });
    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height,
      title: title,
      style: imageStyle
    });
    const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: linkClass,
      href: href,
      target: linkTarget,
      rel: newRel
    }, image) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-fixed-image-wrap'
    }, image), useCaption && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: classes
    }), figure);
  }

}, {
  attributes: {
    id: {
      type: "number"
    },
    url: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "src"
    },
    focalPoint: {
      type: "object"
    },
    alt: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "alt",
      default: ""
    },
    title: {
      type: "string",
      source: "attribute",
      selector: "img",
      attribute: "title"
    },
    sizeSlug: {
      type: "string",
      default: "large"
    },
    width: {
      type: "string"
    },
    height: {
      type: "string"
    },
    useCaption: {
      type: "boolean",
      default: false
    },
    useLink: {
      type: "boolean",
      default: true
    },
    caption: {
      type: "string",
      source: "html",
      selector: "figcaption"
    },
    href: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "href"
    },
    rel: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "rel"
    },
    linkClass: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "class"
    },
    linkDestination: {
      type: "string"
    },
    linkTarget: {
      type: "string",
      source: "attribute",
      selector: "figure > a",
      attribute: "target"
    }
  },

  save(_ref3) {
    let {
      attributes
    } = _ref3;
    const {
      url,
      alt,
      href,
      rel,
      linkClass,
      width,
      height,
      id,
      linkTarget,
      sizeSlug,
      title,
      caption,
      useCaption,
      focalPoint
    } = attributes;
    const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel;
    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      [`size-${sizeSlug}`]: sizeSlug
    });
    let imageStyle = {};

    if (focalPoint) {
      imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
    }

    const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: url,
      alt: alt,
      className: id ? `wp-image-${id}` : null,
      width: width,
      height: height,
      title: title,
      style: imageStyle
    });
    const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: `'ck-fixed-image-wrap' ${linkClass}`,
      href: href,
      target: linkTarget,
      rel: newRel
    }, image) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: 'ck-fixed-image-wrap'
    }, image), useCaption && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
      tagName: "figcaption",
      value: caption
    }));
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
      className: classes
    }), figure);
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/fixed-image/edit.js":
/*!*********************************!*\
  !*** ./src/fixed-image/edit.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageEdit": function() { return /* binding */ ImageEdit; },
/* harmony export */   "isExternalImage": function() { return /* binding */ isExternalImage; },
/* harmony export */   "pickRelevantMediaFiles": function() { return /* binding */ pickRelevantMediaFiles; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image */ "./src/fixed-image/image.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./src/fixed-image/editor.scss");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



const pickRelevantMediaFiles = image => {
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['sizes', 'large', 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
  return imageProps;
};
/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */

const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */


const isExternalImage = (id, url) => url && !id && !(0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url);
function ImageEdit(_ref) {
  let {
    attributes,
    setAttributes,
    isSelected,
    className,
    noticeUI,
    insertBlocksAfter,
    onReplace,
    noticeOperations
  } = _ref;
  const {
    url = '',
    alt,
    caption,
    id,
    width,
    height,
    sizeSlug,
    aspectRatio,
    objectFit
  } = attributes;
  const altRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    altRef.current = alt;
  }, [alt]);
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    captionRef.current = caption;
  }, [caption]);
  const ref = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const mediaUpload = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getSettings
    } = select('core/block-editor');
    return getSettings().mediaUpload;
  });

  function onUploadError(message) {
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function onSelectImage(media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        alt: undefined,
        id: undefined,
        title: undefined,
        caption: undefined
      });
      return;
    }

    let mediaAttributes = pickRelevantMediaFiles(media); // If the current image is temporary but an alt text was meanwhile
    // written by the user, make sure the text is not overwritten.

    if (isTemporaryImage(id, url)) {
      if (altRef.current) {
        mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['alt']);
      }
    } // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.


    if (captionRef.current && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(mediaAttributes, ['caption'])) {
      mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['caption']);
    }

    let additionalAttributes; // Reset the dimension attributes if changing to a different image.

    if (!media.id || media.id !== id) {
      additionalAttributes = {
        width: undefined,
        height: undefined,
        sizeSlug: 'large'
      };
    } else {
      // Keep the same url when selecting the same file, so "Image Size"
      // option is not changed.
      additionalAttributes = {
        url
      };
    }

    setAttributes({ ...mediaAttributes,
      ...additionalAttributes
    });
  }

  const isTemp = isTemporaryImage(id, url); // Upload a temporary image on mount.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTemp) {
      return;
    }

    const file = (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.getBlobByURL)(url);

    if (file) {
      mediaUpload({
        filesList: [file],
        onFileChange: _ref2 => {
          let [img] = _ref2;
          onSelectImage(img);
        },
        allowedTypes: ['image'],
        onError: message => {
          noticeOperations.createErrorNotice(message);
          setAttributes({
            src: undefined,
            id: undefined,
            url: undefined
          });
        }
      });
    }
  }, []); // If an image is temporary, revoke the Blob url when it is uploaded (and is
  // no longer temporary).

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isTemp) {
      return;
    }

    return () => {
      (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.revokeBlobURL)(url);
    };
  }, [isTemp]);
  const isExternal = isExternalImage(id, url);
  const src = isExternal ? url : undefined;
  const mediaPreview = !!url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    alt: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Edit image'),
    className: 'edit-image-preview',
    src: url
  });
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, {
    'is-transient': (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_3__.isBlobURL)(url),
    'is-placeholder': !url,
    'is-resized': !!width || !!height,
    'is-focused': isSelected,
    [`size-${sizeSlug}`]: sizeSlug,
    [`fixed-image-${aspectRatio}`]: aspectRatio,
    'is-style-contain': objectFit === 'contain'
  });
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.useBlockProps)({
    ref,
    className: classes
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", blockProps, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    isSelected: isSelected,
    insertBlocksAfter: insertBlocksAfter,
    onReplace: onReplace,
    onSelectImage: onSelectImage,
    onUploadError: onUploadError,
    containerRef: ref,
    aspectRatio: aspectRatio
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    icon: "format-image",
    onSelect: onSelectImage,
    notices: noticeUI,
    onError: onUploadError,
    allowedTypes: ['image'],
    value: {
      id,
      src
    },
    mediaPreview: mediaPreview,
    disableMediaButtons: url
  }));
}
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.withNotices)(ImageEdit));

/***/ }),

/***/ "./src/fixed-image/icon.js":
/*!*********************************!*\
  !*** ./src/fixed-image/icon.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.featuredimage = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  height: "100",
  width: "100",
  xmlns: "http://www.w3.org/2000/svg",
  "data-name": "Layer 1",
  viewBox: "0 0 512 341.333",
  x: "0px",
  y: "0px"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,310.3a7.758,7.758,0,0,0-7.757,7.758v7.757h-7.758a7.758,7.758,0,0,0,0,15.515h15.515A7.757,7.757,0,0,0,512,333.576V318.061A7.758,7.758,0,0,0,504.242,310.3Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M271.515,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M333.576,325.818H302.545a7.758,7.758,0,0,0,0,15.515h31.031a7.758,7.758,0,0,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M147.394,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M85.333,325.818H54.3a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M395.636,325.818h-31.03a7.758,7.758,0,1,0,0,15.515h31.03a7.758,7.758,0,1,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M209.455,325.818H178.424a7.758,7.758,0,0,0,0,15.515h31.031a7.758,7.758,0,0,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M457.7,325.818h-31.03a7.758,7.758,0,1,0,0,15.515H457.7a7.758,7.758,0,1,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.273,325.818H15.515v-7.757a7.758,7.758,0,1,0-15.515,0v15.515a7.757,7.757,0,0,0,7.758,7.757H23.273a7.758,7.758,0,0,0,0-15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,162.049a7.757,7.757,0,0,0,7.757-7.757V121.534a7.758,7.758,0,0,0-15.515,0v32.758A7.757,7.757,0,0,0,7.758,162.049Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,96.538a7.758,7.758,0,0,0,7.757-7.758V56.027A7.758,7.758,0,1,0,0,56.027V88.78A7.758,7.758,0,0,0,7.758,96.538Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,227.557a7.758,7.758,0,0,0,7.757-7.758V187.045a7.758,7.758,0,0,0-15.515,0V219.8A7.758,7.758,0,0,0,7.758,227.557Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M7.758,293.064a7.757,7.757,0,0,0,7.757-7.757V252.553a7.758,7.758,0,1,0-15.515,0v32.754A7.757,7.757,0,0,0,7.758,293.064Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M23.273,0H7.758A7.758,7.758,0,0,0,0,7.758V23.273a7.758,7.758,0,0,0,15.515,0V15.515h7.758A7.758,7.758,0,0,0,23.273,0Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M54.3,15.515h31.03A7.758,7.758,0,1,0,85.333,0H54.3a7.758,7.758,0,1,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M116.364,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M364.606,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M240.485,15.515h31.03a7.758,7.758,0,1,0,0-15.515h-31.03a7.758,7.758,0,1,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M302.545,15.515h31.031a7.758,7.758,0,0,0,0-15.515H302.545a7.758,7.758,0,0,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M457.7,0h-31.03a7.758,7.758,0,1,0,0,15.515H457.7A7.758,7.758,0,1,0,457.7,0Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M178.424,15.515h31.031a7.758,7.758,0,0,0,0-15.515H178.424a7.758,7.758,0,0,0,0,15.515Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,0H488.727a7.758,7.758,0,0,0,0,15.515h7.758v7.758a7.758,7.758,0,0,0,15.515,0V7.758A7.758,7.758,0,0,0,504.242,0Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,48.269a7.757,7.757,0,0,0-7.757,7.758V88.78a7.758,7.758,0,1,0,15.515,0V56.027A7.758,7.758,0,0,0,504.242,48.269Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,179.284a7.758,7.758,0,0,0-7.757,7.758V219.8a7.758,7.758,0,1,0,15.515,0V187.042A7.758,7.758,0,0,0,504.242,179.284Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,244.8a7.758,7.758,0,0,0-7.757,7.758v32.754a7.758,7.758,0,0,0,15.515,0V252.553A7.758,7.758,0,0,0,504.242,244.8Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M504.242,113.777a7.757,7.757,0,0,0-7.757,7.757v32.754a7.758,7.758,0,0,0,15.515,0V121.534A7.757,7.757,0,0,0,504.242,113.777Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M265.7,294.788a7.758,7.758,0,0,0,5.731-12.981L172.523,173.2a7.75,7.75,0,0,0-5.625-2.534,8.157,8.157,0,0,0-5.693,2.371L56.477,281.644a7.758,7.758,0,1,0,11.167,10.773l98.981-102.648,93.337,102.485A7.73,7.73,0,0,0,265.7,294.788Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M260.678,236.686a7.759,7.759,0,1,0,10.038,11.833l70.136-59.511L442.466,292.466A7.757,7.757,0,0,0,453.534,281.6L346.867,172.989a7.757,7.757,0,0,0-10.553-.481Z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M263.758,159.03a46.546,46.546,0,1,0-46.546-46.545A46.6,46.6,0,0,0,263.758,159.03Zm0-77.575a31.03,31.03,0,1,1-31.031,31.03A31.066,31.066,0,0,1,263.758,81.455Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/fixed-image/image.js":
/*!**********************************!*\
  !*** ./src/fixed-image/image.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Image; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__);


/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */










/**
 * Internal dependencies
 */

function getFilename(url) {
  const path = (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_8__.getPath)(url);

  if (path) {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.last)(path.split('/'));
  }
}

function Image(_ref) {
  let {
    attributes: {
      url = '',
      alt,
      caption,
      id,
      href,
      rel,
      linkStyle,
      linkDestination,
      title,
      linkTarget,
      focalPoint,
      sizeSlug,
      useCaption,
      useLink,
      photoCredit,
      aspectRatio,
      objectFit
    },
    setAttributes,
    isSelected,
    insertBlocksAfter,
    onSelectImage,
    onUploadError
  } = _ref;
  const captionRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const prevUrl = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_4__.usePrevious)(url);
  const {
    image,
    multiImageSelection
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getMedia
    } = select('core');
    const {
      getMultiSelectedBlockClientIds,
      getBlockName,
      getSelectedBlock,
      getSelectedBlockClientId
    } = select('core/block-editor');
    const multiSelectedClientIds = getMultiSelectedBlockClientIds();
    return {
      block: getSelectedBlock(),
      currentId: getSelectedBlockClientId(),
      image: id && isSelected ? getMedia(id) : null,
      multiImageSelection: multiSelectedClientIds.length && multiSelectedClientIds.every(clientId => getBlockName(clientId) === 'carkeek-blocks/fixed-image')
    };
  }, [id, isSelected]);
  const {
    imageSizes
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getSettings
    } = select('core/block-editor');
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pick)(getSettings(), ['imageSizes', 'maxWidth', 'mediaUpload']);
  });
  const [captionFocused, setCaptionFocused] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [isEditingImage, setIsEditingImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const imageSizeOptions = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)((0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(imageSizes, _ref2 => {
    let {
      slug
    } = _ref2;
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', slug, 'source_url']);
  }), _ref3 => {
    let {
      name,
      slug
    } = _ref3;
    return {
      value: slug,
      label: name
    };
  });
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      setCaptionFocused(false);
    }
  }, [isSelected]); // Focus the caption after inserting an image from the placeholder. This is
  // done to preserve the behaviour of focussing the first tabbable element
  // when a block is mounted. Previously, the image block would remount when
  // the placeholder is removed. Maybe this behaviour could be removed.

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (url && !prevUrl && isSelected && useCaption) {
      captionRef.current.focus();
    }
  }, [url, prevUrl]);

  function onSetHref(props) {
    setAttributes(props);
  }

  function onSetTitle(value) {
    // This is the HTML title attribute, separate from the media object
    // title.
    setAttributes({
      title: value
    });
  }

  function onFocusCaption() {
    if (!captionFocused) {
      setCaptionFocused(true);
    }
  }

  function onImageClick() {
    if (captionFocused) {
      setCaptionFocused(false);
    }
  }

  function onRemoveImage() {
    setAttributes({
      url: undefined,
      id: undefined
    });
  }

  function updateAlt(newAlt) {
    setAttributes({
      alt: newAlt
    });
  }

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isSelected) {
      setIsEditingImage(false);
    }
  }, [isSelected]);

  function updateImage(newSizeSlug) {
    const newUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', newSizeSlug, 'source_url']);

    if (!newUrl) {
      return null;
    }

    setAttributes({
      url: newUrl,
      width: undefined,
      height: undefined,
      sizeSlug: newSizeSlug
    });
  }

  const controls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.BlockControls, null, useLink && !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.__experimentalImageURLInputUI, {
    url: href || '',
    onChangeUrl: onSetHref,
    linkDestination: linkDestination,
    mediaUrl: image && image.source_url || url,
    mediaLink: image && image.link,
    linkTarget: linkTarget,
    linkClass: linkStyle,
    rel: rel
  }))), !multiImageSelection && !isEditingImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarItem, null, () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaReplaceFlow, {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ['image'],
    accept: "image/*",
    onSelect: onSelectImage,
    onError: onUploadError
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    className: "components-icon-button components-toolbar__control",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Remove Image", "carkeek-blocks"),
    onClick: onRemoveImage,
    icon: "trash"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Image settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Image Orientation", "carkeek-blocks"),
    onChange: value => setAttributes({
      aspectRatio: value
    }),
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Landscape 2:3"),
      value: "landscape"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Landscape 3:4"),
      value: "landscape-34"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Portrait 3:2"),
      value: "portrait"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Portrait 4:3"),
      value: "portrait-43"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Square 1:1"),
      value: "square"
    }],
    value: aspectRatio
  }), !multiImageSelection && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Alt text (alternative text)'),
    value: alt,
    onChange: updateAlt,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/WAI/tutorials/images/decision-tree"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Describe the purpose of the image')), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Leave empty if the image is purely decorative.'))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Photo Credit'),
    value: photoCredit || '',
    onChange: value => setAttributes({
      photoCredit: value
    }),
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Optionally add a photo credit. This may display differently depending on the context of the image.'))
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Image Size", "carkeek-blocks"),
    options: imageSizeOptions,
    onChange: updateImage,
    value: sizeSlug
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Image Fit", "carkeek-blocks"),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("How the image should fit within the container. Cover will crop the image to fit, contain, will not", "carkeek-blocks"),
    selected: objectFit,
    options: [{
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Cover"),
      value: "cover"
    }, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Contain"),
      value: "contain"
    }],
    onChange: value => setAttributes({
      objectFit: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Focal Point", "carkeek-blocks"),
    url: url,
    onChange: newFocalPoint => setAttributes({
      focalPoint: newFocalPoint
    }),
    value: focalPoint
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Include Caption"),
    checked: useCaption,
    onChange: value => setAttributes({
      useCaption: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)("Include Image Link"),
    checked: useLink,
    onChange: value => setAttributes({
      useLink: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Title attribute'),
    value: title || '',
    onChange: onSetTitle,
    help: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Describe the role of this image on the page.'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ExternalLink, {
      href: "https://www.w3.org/TR/html52/dom.html#the-title-attribute"
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('(Note: many devices and browsers do not display this text.)')))
  })));
  const filename = getFilename(url);
  let defaultedAlt;

  if (alt) {
    defaultedAlt = alt;
  } else if (filename) {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.sprintf)(
    /* translators: %s: file name */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('This image has an empty alt attribute; its file name is %s'), filename);
  } else {
    defaultedAlt = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('This image has an empty alt attribute');
  }

  let imageStyle = {};

  if (focalPoint) {
    imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
  }

  let img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: defaultedAlt,
    onClick: onImageClick,
    className: "ck-fixed-image",
    style: imageStyle
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_2__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
  const credit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-fixed-image-credit"
  }, photoCredit);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, controls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-fixed-image-wrap"
  }, credit, img), useCaption && (!_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText.isEmpty(caption) || isSelected) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText, {
    ref: captionRef,
    tagName: "figcaption",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Image caption text'),
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__.__)('Write caption…'),
    value: caption,
    unstableOnFocus: onFocusCaption,
    onChange: value => setAttributes({
      caption: value
    }),
    isSelected: captionFocused,
    inlineToolbar: true,
    __unstableOnSplitAtEnd: () => insertBlocksAfter((0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_9__.createBlock)('core/paragraph'))
  }));
}

/***/ }),

/***/ "./src/fixed-image/index.js":
/*!**********************************!*\
  !*** ./src/fixed-image/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/fixed-image/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/fixed-image/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/fixed-image/deprecated.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/fixed-image/block.json");
/* harmony import */ var _icon_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon.js */ "./src/fixed-image/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/fixed-image/style.scss");








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__, {
  icon: _icon_js__WEBPACK_IMPORTED_MODULE_6__["default"].featuredimage,
  transforms: {
    from: [{
      type: "block",
      blocks: ["core/image"],
      transform: attr => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("carkeek-blocks/fixed-image", {
          id: attr.id,
          url: attr.url
        });
      }
    }],
    to: [{
      type: "block",
      blocks: ["core/image"],
      transform: attr => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("core/image", {
          id: attr.id,
          url: attr.url
        });
      }
    }]
  },
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"]
});

/***/ }),

/***/ "./src/fixed-image/save.js":
/*!*********************************!*\
  !*** ./src/fixed-image/save.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */


function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    url,
    alt,
    href,
    rel,
    width,
    height,
    id,
    linkTarget,
    sizeSlug,
    title,
    caption,
    useCaption,
    focalPoint,
    linkStyle,
    photoCredit,
    aspectRatio,
    objectFit
  } = attributes;
  const newRel = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.isEmpty)(rel) ? undefined : rel;
  const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`size-${sizeSlug}`]: sizeSlug,
    [`fixed-image-${aspectRatio}`]: aspectRatio,
    'is-style-contain': objectFit === 'contain'
  });
  let imageStyle = {};

  if (focalPoint) {
    imageStyle.objectPosition = `${focalPoint.x * 100}% ${focalPoint.y * 100}%`;
  }

  const linkClass = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    [`${linkStyle}`]: linkStyle,
    'ck-fixed-image-wrap': true
  });
  const image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    className: id ? `wp-image-${id}` : null,
    width: width,
    height: height,
    title: title,
    style: imageStyle
  }), photoCredit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ck-fixed-image-credit'
  }, photoCredit));
  const figure = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, href ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: linkClass,
    href: href,
    target: linkTarget,
    rel: newRel
  }, image) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: 'ck-fixed-image-wrap'
  }, image), useCaption && !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.isEmpty(caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText.Content, {
    tagName: "figcaption",
    value: caption
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, url && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: classes
  }), figure));
}

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

/***/ "./src/fixed-image/editor.scss":
/*!*************************************!*\
  !*** ./src/fixed-image/editor.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/fixed-image/style.scss":
/*!************************************!*\
  !*** ./src/fixed-image/style.scss ***!
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

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blob"];

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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["compose"];

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

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/fixed-image/block.json":
/*!************************************!*\
  !*** ./src/fixed-image/block.json ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/fixed-image","version":"0.1.0","title":"Fixed Image","category":"widgets","description":"Create an image cropped to a fixed size","supports":{"html":false,"align":["wide","full"],"typography":{"fontSize":true},"color":{"background":true,"gradients":false,"text":true}},"textdomain":"carkeek-blocks","attributes":{"id":{"type":"number"},"url":{"type":"string","source":"attribute","selector":"img","attribute":"src"},"focalPoint":{"type":"object"},"alt":{"type":"string","source":"attribute","selector":"img","attribute":"alt","default":""},"title":{"type":"string","source":"attribute","selector":"img","attribute":"title"},"sizeSlug":{"type":"string","default":"large"},"width":{"type":"string"},"height":{"type":"string"},"useCaption":{"type":"boolean","default":false},"useLink":{"type":"boolean","default":true},"caption":{"type":"string","source":"html","selector":"figcaption"},"photoCredit":{"type":"string","source":"html","selector":".ck-fixed-image-credit"},"href":{"type":"string","source":"attribute","selector":"figure > a","attribute":"href"},"rel":{"type":"string","source":"attribute","selector":"figure > a","attribute":"rel"},"linkClass":{"type":"string","source":"attribute"},"aspectRatio":{"type":"string"},"objectFit":{"type":"string","default":"cover"},"linkDestination":{"type":"string"},"linkTarget":{"type":"string","source":"attribute","selector":"figure > a","attribute":"target"}},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"fixed-image/index": 0,
/******/ 			"fixed-image/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["fixed-image/style-index"], function() { return __webpack_require__("./src/fixed-image/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map