/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/lightbox-gallery/deprecated.js":
/*!********************************************!*\
  !*** ./src/lightbox-gallery/deprecated.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const deprecated = [{
  attributes: {
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    images: {
      type: 'array',
      default: []
    },
    linkFirstImage: {
      type: 'boolean',
      default: true
    },
    hideTitle: {
      type: 'boolean',
      default: false
    },
    sizeSlug: {
      type: 'string',
      default: 'full'
    },
    sizeSlugThumbs: {
      type: 'string',
      default: 'medium'
    },
    blockId: {
      type: 'string'
    },
    ids: {
      type: 'array',
      items: {
        type: 'number'
      },
      default: []
    }
  },

  save(_ref) {
    let {
      attributes
    } = _ref;
    const {
      title,
      subtitle,
      images,
      linkFirstImage,
      blockId,
      hideTitle
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    const hasImages = !!images.length; //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title

    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.cleanForSlug)(title) : blockId;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, hasImages && linkFirstImage && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "ck-lightbox-featured-image",
      "data-title": title,
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: images[0].thumbUrl,
      alt: images[0].alt
    })), !hideTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        display: 'none'
      }
    }, images.map((img, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: img.url,
        key: index,
        "data-fancybox": `gallery-${galleryId}`,
        "data-caption": img.caption
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: img.thumbUrl
      }));
    })));
  }

}, {
  attributes: {
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    images: {
      type: 'array',
      default: []
    },
    displayAs: {
      type: "string",
      default: "single"
    },
    columns: {
      type: "number",
      default: 4
    },
    cropImages: {
      type: 'boolean',
      default: true
    },
    imageLayout: {
      type: 'string',
      default: 'landscape'
    },
    limitView: {
      type: 'boolean',
      default: false
    },
    viewLimit: {
      type: 'number',
      default: 4
    },
    mobileScroll: {
      type: 'boolean',
      default: false
    },
    linkFirstImage: {
      type: 'boolean',
      default: true
    },
    hideTitle: {
      type: 'boolean',
      default: false
    },
    sizeSlug: {
      type: 'string',
      default: 'full'
    },
    sizeSlugThumbs: {
      type: 'string',
      default: 'medium'
    },
    blockId: {
      type: 'string'
    },
    ids: {
      type: 'array',
      items: {
        type: 'number'
      },
      default: []
    }
  },

  save(_ref2) {
    let {
      attributes
    } = _ref2;
    const {
      title,
      subtitle,
      images,
      linkFirstImage,
      blockId,
      hideTitle,
      displayAs,
      viewLimit,
      cropImages,
      columns,
      limitView,
      imageLayout,
      mobileScroll
    } = attributes;
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save();
    const hasImages = !!images.length; //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title

    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_2__.cleanForSlug)(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      'ck-blocks-gallery-grid': isGallery,
      [`columns-${columns}`]: isGallery,
      'fixed-images': isGallery && cropImages,
      'ck-blocks-gallery-hidden': !isGallery,
      [`fixed-images-${imageLayout}`]: isGallery && cropImages,
      'mobile-scroll': mobileScroll
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, hasImages && linkFirstImage && !isGallery && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      className: "ck-lightbox-featured-image",
      "data-title": title,
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: images[0].thumbUrl,
      alt: images[0].alt
    })), !hideTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: galleryStyle,
      "data-title": title,
      id: `wrappergallery-${galleryId}`
    }, images.map((img, index) => {
      let imageStyle = {};

      if (img.focalPointX && img.focalPointY) {
        imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
      }

      const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        'ck-blocks-gallery-grid-item': true,
        'ck-blocks-gallery-hidden': limitView && index >= viewLimit
      });
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        className: itemStyle
      }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: img.url,
        "data-fancybox": `gallery-${galleryId}`,
        "data-caption": img.caption
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        style: imageStyle,
        src: img.thumbUrl
      })));
    })));
  }

}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/lightbox-gallery/edit.js":
/*!**************************************!*\
  !*** ./src/lightbox-gallery/edit.js ***!
  \**************************************/
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gallery */ "./src/lightbox-gallery/gallery.js");







function LightboxGalleryEdit(props) {
  //console.log(this.props);
  const {
    attributes,
    isSelected,
    clientId,
    setAttributes
  } = props;
  const {
    title,
    subtitle,
    images,
    blockId,
    linkFirstImage,
    hideTitle,
    displayAs,
    columns,
    columnsMobile,
    columnsTablet,
    cropImages,
    limitView,
    viewLimit,
    imageLayout,
    mobileScroll
  } = attributes;

  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }

  if (!columnsMobile) {
    setAttributes({
      columnsMobile: 1
    });
  }

  if (!columnsTablet) {
    setAttributes({
      columnsTablet: 2
    });
  }

  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)();
  const hasImages = !!images.length;
  const isGallery = displayAs == 'gallery';

  function changeFirstImage(value) {
    setAttributes({
      linkFirstImage: value
    });

    if (!value) {
      setAttributes({
        hideTitle: false
      });
    }
  } //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title


  const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_4__.cleanForSlug)(title) : blockId;

  function generateLink(title, galleryId) {
    return '<a href="javascript:;" data-title="' + title + '" data-fancybox-trigger="gallery-' + galleryId + '" class="is-style-cta">Link to Gallery</a>';
  }

  const generatedLink = generateLink(title, galleryId);

  function generateImage(image) {
    let imageStyle = {};

    if (image.focalPoint) {
      imageStyle.objectPosition = `${image.focalPoint.x * 100}% ${image.focalPoint.y * 100}%`;
    }

    let img = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: image.url,
      alt: image.alt,
      style: imageStyle
    }));
    return img;
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Display on page as",
    selected: displayAs,
    options: [{
      label: 'Single Image',
      value: 'single'
    }, {
      label: 'Gallery',
      value: 'gallery'
    }],
    onChange: value => setAttributes({
      displayAs: value
    })
  }), displayAs == 'single' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Link first image to Lightbox",
    checked: linkFirstImage,
    onChange: changeFirstImage
  })), displayAs == 'gallery' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Gallery"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns",
    value: columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 6,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Crop Images",
    help: "Crop the images in the page view to a uniform size",
    checked: cropImages,
    onChange: cropImages => setAttributes({
      cropImages
    })
  }), cropImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Image Layout",
    selected: imageLayout,
    options: [{
      label: 'Landscape',
      value: 'landscape'
    }, {
      label: 'Portrait',
      value: 'portrait'
    }, {
      label: 'Square',
      value: 'square'
    }],
    onChange: value => setAttributes({
      imageLayout: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Limit Initial View",
    help: "Limit the gallery view on the page to a number (all images will be accessible from the lightbox)",
    checked: limitView,
    onChange: limitView => setAttributes({
      limitView
    })
  }), limitView && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Number of images to show on page",
    value: viewLimit,
    onChange: viewLimit => setAttributes({
      viewLimit
    }),
    min: columns,
    step: columns
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Horizontal scroll on mobile",
    help: "Scroll gallery items horizontally on mobile",
    checked: mobileScroll,
    onChange: mobileScroll => setAttributes({
      mobileScroll
    })
  }), !mobileScroll && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns Mobile",
    value: columnsMobile,
    onChange: columnsMobile => setAttributes({
      columnsMobile
    }),
    min: 1,
    max: 6,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns Tablet",
    value: columnsTablet,
    onChange: columnsTablet => setAttributes({
      columnsTablet
    }),
    min: 1,
    max: 6,
    step: 1
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Lightbox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Title",
    value: title,
    help: "Provide a unique title for your lightbox.",
    onChange: title => setAttributes({
      title
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Sub Title",
    value: subtitle,
    help: "Provide an optional subtitle for your lightbox.",
    onChange: subtitle => setAttributes({
      subtitle
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Hide title",
    checked: hideTitle,
    onChange: value => setAttributes({
      hideTitle: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Add a link to this gallery from elsewhere on the page. ", generatedLink))), hasImages && linkFirstImage && !isSelected && !isGallery && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-lightbox-featured"
  }, generateImage(images[0])), (isSelected || isGallery) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gallery__WEBPACK_IMPORTED_MODULE_5__["default"], props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "ck-lightbox-title",
    tagName: "div",
    onChange: title => setAttributes({
      title
    }),
    value: title,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Title", "carkeek-blocks"),
    formatingControls: []
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText, {
    className: "ck-lightbox-subtitle",
    tagName: "div",
    onChange: subtitle => setAttributes({
      subtitle
    }),
    value: subtitle,
    placeholder: isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Sub-Title", "carkeek-blocks") : null,
    formatingControls: []
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LightboxGalleryEdit);

/***/ }),

/***/ "./src/lightbox-gallery/gallery-img.js":
/*!*********************************************!*\
  !*** ./src/lightbox-gallery/gallery-img.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalleryImage": function() { return /* binding */ GalleryImage; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons */ "./src/lightbox-gallery/icons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared */ "./src/lightbox-gallery/shared.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */



const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_6__.isBlobURL)(url);

const GalleryImage = props => {
  const {
    url,
    alt,
    id,
    linksto,
    focalPointX,
    focalPointY,
    isFirstItem,
    isLastItem,
    isSelected,
    caption,
    onRemove,
    onMoveForward,
    onMoveBackward,
    onSelect,
    setAttributes,
    'aria-label': ariaLabel,
    onDeselect,
    inlineEdit,
    sizeSlug
  } = props;
  const [isEditing, setIsEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  function onRemoveImage(index) {
    return () => {
      const images = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.filter)(images, (img, i) => index !== i);
      setAttributes({
        images
      });
      onDeselect();
    };
  }

  function onSelectImageFromLibrary(media) {
    //const { setAttributes, id, url, alt, caption, sizeSlug } = props;
    if (!media || !media.url) {
      return;
    }

    let mediaAttributes = (0,_shared__WEBPACK_IMPORTED_MODULE_8__.pickRelevantMediaFiles)(media, sizeSlug); // If the current image is temporary but an alt text was meanwhile
    // written by the user, make sure the text is not overwritten.

    if (isTemporaryImage(id, url)) {
      if (alt) {
        mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['alt']);
      }
    } // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.


    if (caption && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(mediaAttributes, ['caption'])) {
      mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['caption']);
    }

    setAttributes({
      mediaAttributes
    });
    setIsEditing(false);
  }

  function onSetUrl(url) {
    setAttributes({
      linksto: url
    });
  }

  function onSetFocalPoint(focalPoint) {
    setAttributes({
      focalPointX: focalPoint.x,
      focalPointY: focalPoint.y
    });
  }

  const imageStyle = {
    objectPosition: `${focalPointX * 100}% ${focalPointY * 100}%`
  };
  const img = // Disable reason: Image itself is not meant to be interactive, but should
  // direct image selection and unfocus caption fields.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: url,
    alt: alt,
    "data-id": id,
    onClick: onSelect,
    onFocus: onSelect,
    onKeyDown: onRemoveImage,
    tabIndex: "0",
    "aria-label": ariaLabel //ref={ bindContainer }
    ,
    style: imageStyle
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_6__.isBlobURL)(url) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Spinner, null));
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'is-selected': isSelected,
    'is-transient': (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_6__.isBlobURL)(url)
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, null, isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Image Settings", "carkeek-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Focal Point", "carkeek-blocks"),
    url: url,
    onChange: onSetFocalPoint,
    value: {
      x: focalPointX,
      y: focalPointY
    }
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: className
  }, !isEditing && img, isEditing && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.MediaPlaceholder, {
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Edit gallery image')
    },
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].imageIcon,
    onSelect: onSelectImageFromLibrary,
    accept: "image/*",
    allowedTypes: ['image'],
    value: {
      id,
      src: url
    }
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "block-library-gallery-item__inline-menu carkeek-edit is-left"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].chevronLeft,
    onClick: isFirstItem ? undefined : onMoveBackward,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Move image backward'),
    "aria-disabled": isFirstItem,
    disabled: !isSelected
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].chevronRight,
    onClick: isLastItem ? undefined : onMoveForward,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Move image forward'),
    "aria-disabled": isLastItem,
    disabled: !isSelected
  })), inlineEdit && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "block-library-gallery-item__inline-menu carkeek-edit is-right"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.URLInputButton, {
    url: linksto,
    onChange: onSetUrl
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].edit,
    onClick: () => setIsEditing(true),
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Replace image'),
    disabled: !isSelected
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].closeSmall,
    onClick: onRemove,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Remove image'),
    disabled: !isSelected
  })), !isEditing && (isSelected || caption) && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__.RichText, {
    tagName: "figcaption",
    placeholder: isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)('Write caption…') : null,
    value: caption //isSelected={ isSelected }
    ,
    onChange: newCaption => setAttributes({
      caption: newCaption
    }) //unstableOnFocus={ onSelectCaption }
    ,
    inlineToolbar: true
  })));
};
/* harmony default export */ __webpack_exports__["default"] = (GalleryImage);

/***/ }),

/***/ "./src/lightbox-gallery/gallery.js":
/*!*****************************************!*\
  !*** ./src/lightbox-gallery/gallery.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gallery": function() { return /* binding */ Gallery; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _gallery_img__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gallery-img */ "./src/lightbox-gallery/gallery-img.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/lightbox-gallery/icons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/lightbox-gallery/shared.js");


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */




const Gallery = props => {
  const {
    attributes,
    className,
    isSelected,
    imageSizes,
    resizedImages
  } = props;
  const {
    images,
    sizeSlug,
    sizeSlugThumbs,
    ids,
    displayAs,
    columns,
    columnsMobile,
    columnsTablet,
    cropImages,
    imageLayout,
    limitView,
    viewLimit
  } = attributes;
  const [imageSelected, setImageSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [attachmentCaptions, setAttachmentCaptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(images.map(newImage => ({
    id: parseInt(newImage.id, 10),
    caption: newImage.caption
  })));
  const isGallery = displayAs == 'gallery';
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'blocks-gallery-grid': isGallery,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    'fixed-images': isGallery && cropImages,
    [`fixed-images-${imageLayout}`]: isGallery && cropImages
  });

  function setAttributes(newAttrs) {
    if (newAttrs.ids) {
      throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');
    }

    if (newAttrs.images) {
      newAttrs = { ...newAttrs,
        // Unlike images[ n ].id which is a string, always ensure the
        // ids array contains numbers as per its attribute type.
        ids: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(newAttrs.images, _ref => {
          let {
            id
          } = _ref;
          return parseInt(id, 10);
        })
      };
    }

    props.setAttributes(newAttrs);
  }

  function onMove(oldIndex, newIndex) {
    const newImages = [...images];
    newImages.splice(newIndex, 1, images[oldIndex]);
    newImages.splice(oldIndex, 1, images[newIndex]);
    setImageSelected({
      newIndex
    });
    setAttributes({
      images: newImages
    });
  }

  function onMoveForward(oldIndex) {
    return () => {
      if (oldIndex === images.length - 1) {
        return;
      }

      onMove(oldIndex, oldIndex + 1);
    };
  }

  function onMoveBackward(oldIndex) {
    return () => {
      if (oldIndex === 0) {
        return;
      }

      onMove(oldIndex, oldIndex - 1);
    };
  }

  function onRemoveImage(index) {
    return () => {
      const newImages = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.filter)(images, (img, i) => index !== i);
      setAttributes({
        images: newImages,
        selectedImage: null
      });
    };
  }

  function selectCaption(newImage, images, attachmentCaptions) {
    const newImageId = parseInt(newImage.id, 10);
    const currentImage = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(images, {
      id: newImageId
    });
    const currentImageCaption = currentImage ? currentImage.caption : newImage.caption;

    if (!attachmentCaptions) {
      return currentImageCaption;
    }

    const attachment = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(attachmentCaptions, {
      id: newImageId
    }); // if the attachment caption is updated

    if (attachment && attachment.caption !== newImage.caption) {
      return newImage.caption;
    }

    return currentImageCaption;
  }

  function onSelectImages(newImages) {
    setAttachmentCaptions(newImages.map(newImage => ({
      id: parseInt(newImage.id, 10),
      caption: newImage.caption
    })));
    setAttributes({
      images: newImages.map(newImage => ({ ...(0,_shared__WEBPACK_IMPORTED_MODULE_9__.pickRelevantMediaFiles)(newImage, sizeSlug, sizeSlugThumbs),
        caption: selectCaption(newImage, images, attachmentCaptions),
        id: parseInt(newImage.id)
      }))
    });
  }

  function onUploadError(message) {
    const {
      noticeOperations
    } = props;
    noticeOperations.removeAllNotices();
    noticeOperations.createErrorNotice(message);
  }

  function setImageAttributes(index, attributes) {
    if (!images[index]) {
      return;
    }

    setAttributes({
      images: [...images.slice(0, index), { ...images[index],
        ...attributes
      }, ...images.slice(index + 1)]
    });
  }

  const hasImages = !!images.length;

  function getImagesSizeOptions() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(imageSizes, _ref2 => {
      let {
        name,
        slug
      } = _ref2;
      return {
        value: slug,
        label: name
      };
    });
  }

  function updateImagesSize(newSizeSlug) {
    const updatedImages = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(images, image => {
      if (!image.id) {
        return image;
      }

      const url = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(resizedImages, [parseInt(image.id, 10), newSizeSlug]);
      return { ...image,
        ...(url && {
          url
        })
      };
    });
    setAttributes({
      images: updatedImages,
      sizeSlug: newSizeSlug
    });
  }

  function updateThumbsSize(newSizeSlug) {
    const updatedImages = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(images, image => {
      if (!image.id) {
        return image;
      }

      const thumbUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(resizedImages, [parseInt(image.id, 10), newSizeSlug]);
      return { ...image,
        ...(thumbUrl && {
          thumbUrl
        })
      };
    });
    setAttributes({
      images: updatedImages,
      sizeSlugThumbs: newSizeSlug
    });
  }

  const imageSizeOptions = getImagesSizeOptions();
  const shouldShowSizeOptions = hasImages && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(imageSizeOptions);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, null, shouldShowSizeOptions && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Thumbnail size'),
    value: sizeSlugThumbs,
    options: imageSizeOptions,
    onChange: updateThumbsSize
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Image size'),
    value: sizeSlug,
    options: imageSizeOptions,
    onChange: updateImagesSize
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle
  }, images.map((img, index) => {
    const ariaLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)(
    /* translators: 1: the order number of the image. 2: the total number of images. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('image %1$d of %2$d in gallery'), index + 1, images.length);
    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'blocks-gallery-item': true,
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': limitView && index >= viewLimit
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: itemStyle,
      key: img.id || img.url
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gallery_img__WEBPACK_IMPORTED_MODULE_7__["default"] //{ ...props }
    , {
      key: img.id || img.url,
      url: img.url,
      alt: img.alt,
      id: parseInt(img.id, 10) // make id an integer explicitly
      ,
      focalPointX: img.focalPointX,
      focalPointY: img.focalPointY,
      isFirstItem: index === 0,
      isLastItem: index + 1 === images.length,
      isSelected: isSelected && imageSelected === index,
      inlineEdit: false,
      onMoveForward: onMoveForward(index),
      onMoveBackward: onMoveBackward(index),
      onRemove: onRemoveImage(index),
      onSelect: () => setImageSelected(index),
      onDeselect: () => setImageSelected(index),
      setAttributes: attrs => setImageAttributes(index, attrs),
      linksto: img.linksto,
      caption: img.caption,
      "aria-label": ariaLabel,
      sizeSlug: sizeSlug
    }));
  })), !hasImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    addToGallery: hasImages,
    isAppender: hasImages,
    className: className,
    disableMediaButtons: hasImages && !isSelected,
    icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].gallery,
    labels: {
      title: hasImages ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit your gallery') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Gallery Images'),
      instructions: hasImages ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Click "Media Library" to edit your gallery') : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Select files from your library.')
    },
    onSelect: onSelectImages,
    accept: "image/*",
    allowedTypes: ['image'],
    multiple: true,
    gallery: true,
    value: images,
    onError: onUploadError
  })), hasImages && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectImages,
    allowedTypes: ['image'],
    isAppender: hasImages,
    addToGallery: false,
    multiple: true,
    gallery: true,
    value: ids,
    render: _ref3 => {
      let {
        open
      } = _ref3;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
        className: 'ck-custom-appender',
        onClick: open
      }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(' + Add to / Edit Gallery'));
    }
  })));
};
/* harmony default export */ __webpack_exports__["default"] = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_6__.withSelect)((select, _ref4) => {
  let {
    attributes: {
      ids
    },
    isSelected
  } = _ref4;
  const {
    getMedia
  } = select('core');
  const {
    getSettings
  } = select('core/block-editor');
  const {
    imageSizes
  } = getSettings();
  const resizedImages = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (isSelected) {
      return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(ids, (currentResizedImages, id) => {
        if (!id) {
          return currentResizedImages;
        }

        const image = getMedia(id);
        const sizes = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.reduce)(imageSizes, (currentSizes, size) => {
          const defaultUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['sizes', size.slug, 'url']);
          const mediaDetailsUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(image, ['media_details', 'sizes', size.slug, 'source_url']);
          return { ...currentSizes,
            [size.slug]: defaultUrl || mediaDetailsUrl
          };
        }, {});
        return { ...currentResizedImages,
          [parseInt(id, 10)]: sizes
        };
      }, {});
    }

    return {};
  }, [isSelected, ids, imageSizes]);
  return {
    imageSizes,
    resizedImages
  };
})(Gallery));

/***/ }),

/***/ "./src/lightbox-gallery/icons.js":
/*!***************************************!*\
  !*** ./src/lightbox-gallery/icons.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.image = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  style: {
    blockProgression: "tb",
    webkitTextIndent: "0",
    textIndent: "0",
    webkitTextTransform: "none",
    textTransform: "none"
  },
  d: "M29.678 957.35c-1.151-.07-2.202.722-2.5 1.844l-3.344 12.594h-13c-1.354 0-2.437 1.14-2.437 2.469v62.063a2.46 2.46 0 002.437 2.437h20.22c1.052 4.913 5.406 8.625 10.624 8.625 5.219 0 9.572-3.712 10.625-8.625h20.22c.695 0 1.333-.3 1.78-.781a2.386 2.386 0 001.22-1.5l16-59.97c.346-1.303-.46-2.651-1.75-3l-59.595-16.061a2.864 2.864 0 00-.437-.094 1 1 0 00-.063 0zm-.156 2c.02.002.018-.001.031 0 .042.005.083.029.094.031l59.594 16.062c.247.067.408.32.344.563l-14.625 54.75v-11.75l10.406-39.125c.31-1.162-.385-2.402-1.563-2.72l-8.844-2.405v-.5c0-1.33-1.083-2.47-2.437-2.47h-8.625l-30.375-8.155c-.109-.03-.239-.078-.375-.094a1 1 0 00-.063 0c-1.029-.063-2.01.636-2.281 1.656l-1.781 6.594h-3.094l3.188-12.094c.058-.22.227-.343.406-.344zm3.437 6.188c.007.002.013-.005.031 0l23.188 6.25H31.117l1.624-6.094c.033-.122.121-.163.22-.157zm-22.125 8.25h13.531a1.004 1.004 0 00.5 0h4.688a1.004 1.004 0 00.5 0h33.625a1.004 1.004 0 00.218 0h8.625c.247 0 .438.196.438.468v1.22a1 1 0 000 .093v60.75a.555.555 0 01-.031.187c-.013.023-.012.036-.031.062-.07.125-.198.188-.376.188H52.553c.003-.097.03-.183.03-.282 0-.385-.022-.749-.062-1.125-.004-.043-.026-.082-.031-.125a10.83 10.83 0 00-.406-2c-.106-.34-.237-.674-.375-1a10.834 10.834 0 00-1-1.843c-.191-.283-.41-.55-.625-.813-.005-.01.005-.025 0-.03-.104-.126-.235-.224-.344-.344-.125-.138-.243-.275-.375-.407-.246-.246-.481-.496-.75-.718-.27-.223-.554-.429-.844-.625a10.82 10.82 0 00-4.969-1.813 11.3 11.3 0 00-1.125-.062c-3.457 0-6.53 1.662-8.53 4.188-.162.205-.354.408-.5.625-.005.01.004.024 0 .03-.071.106-.153.206-.22.313-.243.388-.43.8-.624 1.219-.046.098-.114.181-.157.281-.003.01.004.023 0 .031-.133.317-.24.638-.343.969-.328 1.034-.532 2.11-.532 3.25 0 .098.029.184.032.281h-19.97c-.271 0-.437-.165-.437-.437v-62.063c0-.272.19-.47.438-.47zm64.125 3.062l8.344 2.25c.121.033.163.138.125.281l-8.469 31.813V976.85zm-59.312.031a2.236 2.236 0 00-2.219 2.219v42.938a2.236 2.236 0 002.22 2.219h52.061a2.236 2.236 0 002.219-2.219v-15.531a1 1 0 000-.406v-27a2.236 2.236 0 00-2.219-2.22H15.647zm0 2H67.71c.139 0 .219.08.219.219v24.844a71.332 71.332 0 00-5.969-5.031c-4.329-3.242-9.653-6.517-14.28-5.907-3.524.465-6.625 3.834-9.063 6.938-2.037 2.592-2.995 4.334-3.438 5.094-.572-.548-1.467-1.435-3.375-2.844-2.425-1.79-5.376-3.672-8.187-3.438-2.533.212-4.816 2.282-6.657 4.188a35.368 35.368 0 00-1.53 1.687v-25.53c0-.14.08-.22.218-.22zm15.47 5.938c-3.219 0-5.845 2.639-5.845 5.875s2.626 5.875 5.844 5.875 5.844-2.64 5.844-5.875-2.626-5.875-5.844-5.875zm0 2c2.14 0 3.874 1.723 3.874 3.875s-1.735 3.843-3.875 3.843-3.844-1.691-3.844-3.843 1.704-3.875 3.844-3.875zm17.5 8.125c3.402-.047 8.23 2.623 12.155 5.562 3.78 2.83 6.616 5.643 7.156 6.188v15.344c0 .139-.08.219-.218.219H15.648c-.139 0-.219-.08-.219-.22v-14.155s1.245-1.747 2.969-3.532c1.723-1.784 3.983-3.477 5.375-3.593 1.67-.14 4.554 1.34 6.844 3.03a39.47 39.47 0 014.03 3.438 1 1 0 001.595-.218s1.608-2.88 3.937-5.844c2.329-2.965 5.47-5.883 7.781-6.188.214-.028.43-.028.657-.03zm-6.938 32.656a8.865 8.865 0 017.812 4.625c.24.443.431.92.594 1.406.129.38.266.755.344 1.156.102.542.125 1.115.125 1.688 0 .223-.016.437-.032.656-.014.146-.012.29-.03.438-.54 4.401-4.264 7.812-8.813 7.812-4.517 0-8.228-3.363-8.813-7.719a1 1 0 000-.03c-.002-.022.003-.043 0-.063-.044-.361-.093-.72-.093-1.094 0-.605.072-1.21.187-1.78.002-.01-.002-.022 0-.032a8.62 8.62 0 01.219-.812c.003-.01-.003-.022 0-.031.173-.557.382-1.09.656-1.594a9.13 9.13 0 01.969-1.406c.181-.22.392-.425.593-.625 1.005-1 2.238-1.788 3.626-2.22a9.003 9.003 0 012.656-.374zm-.125 2.219a1 1 0 00-.875 1.03v4.626h-4.625a1 1 0 100 2h4.625v4.625a1 1 0 102 0v-4.625h4.625a1 1 0 100-2h-4.625v-4.625a1 1 0 00-1.125-1.031z",
  color: "#000",
  enableBackground: "accumulate",
  transform: "translate(0 -952.362)"
}));
icons.closeSmall = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z",
  color: "#000"
}));
icons.chevronRight = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z",
  color: "#000"
}));
icons.chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z",
  color: "#000"
}));
icons.edit = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z",
  color: "#000"
}));
icons.gallery = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  "data-name": "Layer 1",
  viewBox: "0 0 100 100"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
  "data-name": "Group"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M79.2 44.1V12H3.9v55.2h47.7a22.3 22.3 0 1027.6-23.1zm-4-28.1v27.4h-1.4a22.2 22.2 0 00-8.5 1.7l-5.1-3.7-14.1 10.2-15.6-15.3L7.9 50.1V16zM61.4 47.2a22.9 22.9 0 00-8.6 11L49 54.4l11.2-8.1zM7.9 54.8l22-13.5 21.8 21.4v.5H7.9zM73.8 84a18.3 18.3 0 1118.3-18.3A18.3 18.3 0 0173.8 84z",
  "data-name": "Compound Path"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M75.8 55.9L71.8 55.9 71.8 63.7 64 63.7 64 67.7 71.8 67.7 71.8 75.5 75.8 75.5 75.8 67.7 83.7 67.7 83.7 63.7 75.8 63.7 75.8 55.9z",
  "data-name": "Path"
})));
icons.lightbox = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "100",
  height: "100",
  x: "0",
  y: "0",
  enableBackground: "new 0 0 69 69",
  viewBox: "0 0 69 69"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M66.72 64.5H56.086L42.957 47.9h-3.61v3.86l10.07 12.74h-12.07V47.9h-5.6v16.6H19.688l10.06-12.73V47.9h-3.61l-13.12 16.6H2.28a1 1 0 100 2h64.44a1 1 0 100-2zM33.297 14.42c-5.58 0-10.13 4.54-10.13 10.12 0 5.59 4.55 10.13 10.13 10.13 5.58 0 10.12-4.54 10.12-10.13 0-5.58-4.54-10.12-10.12-10.12z"
}), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M51.747 13.34c0-1.81-1.47-3.28-3.28-3.28h-30.35c-1.81 0-3.28 1.47-3.28 3.28v25.69h36.91V13.34zm-18.45 23.33c-6.69 0-12.13-5.44-12.13-12.13 0-6.68 5.44-12.12 12.13-12.12 6.68 0 12.12 5.44 12.12 12.12 0 6.69-5.44 12.13-12.12 12.13zM45.037 5.71c0-1.77-1.44-3.21-3.21-3.21h-17.06c-1.78 0-3.22 1.44-3.22 3.21v2.35h23.49V5.71zM12.704 45.9h41.183a1 1 0 001-1v-2.873a1 1 0 00-1-1H12.704a1 1 0 00-1 1V44.9a1 1 0 001 1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "./src/lightbox-gallery/save.js":
/*!**************************************!*\
  !*** ./src/lightbox-gallery/save.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);





function LighboxGallerySave(_ref) {
  let {
    attributes
  } = _ref;
  const {
    title,
    subtitle,
    images,
    linkFirstImage,
    blockId,
    hideTitle,
    displayAs,
    viewLimit,
    cropImages,
    columns,
    columnsMobile,
    columnsTablet,
    limitView,
    imageLayout,
    mobileScroll
  } = attributes;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save();
  const hasImages = !!images.length; //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title

  const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
  const isGallery = displayAs == 'gallery';
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'ck-blocks-gallery-grid': isGallery,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    'fixed-images': isGallery && cropImages,
    'ck-blocks-gallery-hidden': !isGallery,
    [`fixed-images-${imageLayout}`]: isGallery && cropImages,
    'mobile-scroll': mobileScroll
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, hasImages && linkFirstImage && !isGallery && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    className: "ck-lightbox-featured-image",
    "data-title": title,
    "data-fancybox-trigger": `gallery-${galleryId}`,
    href: "#fancybox"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: images[0].thumbUrl,
    alt: images[0].alt
  })), !hideTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-title",
    tagName: "a",
    "data-fancybox-trigger": `gallery-${galleryId}`,
    href: "javascript:;",
    "data-title": title,
    value: title
  }), subtitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-subtitle",
    tagName: "p",
    value: subtitle
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle,
    "data-title": title,
    id: `wrappergallery-${galleryId}`
  }, images.map((img, index) => {
    let imageStyle = {};

    if (img.focalPointX && img.focalPointY) {
      imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
    }

    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': limitView && index >= viewLimit
    });
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: itemStyle
    }, " ", (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: img.url,
      "data-fancybox": `gallery-${galleryId}`,
      "data-caption": img.caption
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      style: imageStyle,
      alt: img.alt,
      src: img.thumbUrl
    })));
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (LighboxGallerySave);

/***/ }),

/***/ "./src/lightbox-gallery/shared.js":
/*!****************************************!*\
  !*** ./src/lightbox-gallery/shared.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultColumnsNumber": function() { return /* binding */ defaultColumnsNumber; },
/* harmony export */   "pickRelevantMediaFiles": function() { return /* binding */ pickRelevantMediaFiles; }
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function defaultColumnsNumber(attributes) {
  return Math.min(3, attributes.images.length);
}
const pickRelevantMediaFiles = function (image) {
  let sizeSlug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x-large';
  let sizeSlugThumbs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'medium';
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(image, ['alt', 'id', 'caption']);
  imageProps.id = parseInt(imageProps.id, 10);
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', sizeSlug, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', sizeSlug, 'source_url']) || image.url;
  imageProps.thumbUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', sizeSlugThumbs, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', sizeSlugThumbs, 'source_url']) || image.url;
  return imageProps;
};

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

/***/ "./src/lightbox-gallery/editor.scss":
/*!******************************************!*\
  !*** ./src/lightbox-gallery/editor.scss ***!
  \******************************************/
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

/***/ "./src/lightbox-gallery/block.json":
/*!*****************************************!*\
  !*** ./src/lightbox-gallery/block.json ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/lightbox-gallery","version":"0.1.0","title":"Lightbox Gallery","category":"widgets","description":"Create an image linked to a lightbox gallery","supports":{"reusable":true,"html":false,"align":["wide","full"]},"textdomain":"carkeek-blocks","attributes":{"title":{"type":"string"},"subtitle":{"type":"string"},"images":{"type":"array","default":[]},"displayAs":{"type":"string","default":"single"},"columns":{"type":"number","default":4},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":2},"cropImages":{"type":"boolean","default":true},"imageLayout":{"type":"string","default":"landscape"},"limitView":{"type":"boolean","default":false},"viewLimit":{"type":"number","default":4},"mobileScroll":{"type":"boolean","default":false},"linkFirstImage":{"type":"boolean","default":true},"hideTitle":{"type":"boolean","default":false},"sizeSlug":{"type":"string","default":"full"},"sizeSlugThumbs":{"type":"string","default":"large"},"blockId":{"type":"string"},"ids":{"type":"array","items":{"type":"number"},"default":[]}},"editorScript":"file:./index.js","editorStyle":"file:./index.css"}');

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
/*!***************************************!*\
  !*** ./src/lightbox-gallery/index.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./src/lightbox-gallery/editor.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/lightbox-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/lightbox-gallery/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deprecated */ "./src/lightbox-gallery/deprecated.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/lightbox-gallery/icons.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./block.json */ "./src/lightbox-gallery/block.json");








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_7__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_4__["default"].lightbox,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("lightbox", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("gallery", "carkeek-blocks")],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_3__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map