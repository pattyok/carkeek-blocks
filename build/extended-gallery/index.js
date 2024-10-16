/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/extended-gallery/deprecated.js":
/*!********************************************!*\
  !*** ./src/extended-gallery/deprecated.js ***!
  \********************************************/
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);





/** Latest Deprecation 0223- added an option for column gap */

const v4 = {
  attributes: {
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.ck-blocks-gallery-grid-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-image'
        },
        thumbUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        lightUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-light-image'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        customLink: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link'
        },
        linkTarget: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link-target'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        caption: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-caption'
        }
      }
    },
    lightSize: {
      type: 'string',
      default: 'large'
    },
    thumbSize: {
      type: 'string',
      default: 'medium'
    },
    displayAs: {
      type: "string",
      default: "gallery"
    },
    linkImages: {
      type: 'string',
      default: 'custom'
    },
    horizontalAlign: {
      type: 'string',
      default: 'center'
    },
    columns: {
      type: "number",
      default: 4
    },
    columnsMobile: {
      type: "number",
      default: 1
    },
    columnsTablet: {
      type: "number",
      default: 2
    },
    showCaptions: {
      type: 'boolean',
      default: false
    },
    cropImages: {
      type: 'boolean',
      default: false
    },
    imageLayout: {
      type: 'string',
      default: 'landscape'
    },
    imageAlignment: {
      type: 'string',
      default: 'center'
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
    autoPlay: {
      type: 'boolean',
      default: true
    },
    slidesToShow: {
      type: 'number',
      default: 3
    },
    slidesToScroll: {
      type: 'number',
      default: 3
    },
    slidesToShowMobile: {
      type: 'number',
      default: 1
    },
    slidesToScrollMobile: {
      type: 'number',
      default: 1
    },
    slidesToShowTablet: {
      type: 'number',
      default: 3
    },
    slidesToScrollTablet: {
      type: 'number',
      default: 3
    },
    autoPlaySpeed: {
      type: 'number',
      default: 3000
    },
    transitionSpeed: {
      type: 'number',
      default: 500
    },
    showDots: {
      type: 'boolean',
      default: false
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
  save({
    attributes
  }) {
    const {
      title,
      subtitle,
      images,
      blockId,
      hideTitle,
      showCaptions,
      displayAs,
      viewLimit,
      cropImages,
      linkImages,
      columns,
      columnsMobile,
      columnsTablet,
      horizontalAlign,
      limitView,
      imageLayout,
      mobileScroll,
      imageAlignment,
      autoPlay,
      slidesToScroll,
      slidesToScrollMobile,
      slidesToScrollTablet,
      slidesToShow,
      slidesToShowMobile,
      slidesToShowTablet,
      autoPlaySpeed,
      transitionSpeed,
      showOverlay,
      showDots
    } = attributes;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';
    const maybeCarousel = isCarousel || mobileScroll;
    const isLightbox = linkImages == 'lightbox';
    const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'image-gallery': isGallery,
      'lightbox-gallery': isLightbox,
      'image-carousel': isCarousel
    });
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: blockStyle
    });
    const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid': true,
      [`columns-${columns}`]: isGallery,
      [`columns-m-${columnsMobile}`]: isGallery,
      [`columns-t-${columnsTablet}`]: isGallery,
      [`align${horizontalAlign}`]: isGallery,
      'fixed-images': cropImages,
      [`fixed-images-${imageLayout}`]: cropImages,
      'mobile-scroll': mobileScroll,
      [`image-align-${imageAlignment}`]: !cropImages,
      'has-captions': showCaptions && !isLightbox,
      'ck-carkeek-slider__slide-wrapper': isCarousel,
      'slider-carousel': isCarousel
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), showOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "ck-lightbox-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: galleryStyle,
      "data-type": maybeCarousel ? 'carousel' : undefined,
      "data-title": title,
      id: `wrappergallery-${galleryId}`,
      "data-autoplay": maybeCarousel ? autoPlay : undefined,
      "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
      "data-slides": maybeCarousel ? slidesToShow : undefined,
      "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
      "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
      "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
      "data-scroll": maybeCarousel ? slidesToScroll : undefined,
      "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
      "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
      "data-showdots": maybeCarousel ? showDots : undefined
    }, images.map((img, index) => {
      let imageStyle = {};
      if (cropImages && img.focalPointX && img.focalPointY) {
        imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
      }
      const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'ck-blocks-gallery-grid-item': true,
        'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
        'has-link': linkImages == 'custom' && img.customLink || isLightbox
      });
      const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: img.thumbUrl || img.url,
        alt: img.alt,
        style: imageStyle,
        "data-full-image": img.url,
        "data-light-image": img.lightUrl || img.url,
        "data-link": img.link,
        "data-custom-link": img.customLink,
        "data-custom-link-target": img.linkTarget,
        "data-id": img.id,
        "data-caption": img.caption,
        "data-focalx": img.focalPointX,
        "data-focaly": img.focalPointY
      });
      let imagePack;
      if (linkImages == 'lightbox') {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: img.lightUrl,
          "data-fancybox": `gallery-${galleryId}`,
          "data-caption": img.caption
        }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          dangerouslySetInnerHTML: {
            __html: img.caption
          }
        }));
      } else if (linkImages == 'custom' && img.customLink) {
        const myProps = {
          href: img.customLink,
          target: img.linkTarget === '_blank' ? '_blank' : undefined,
          rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
        };
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          ...myProps
        }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          dangerouslySetInnerHTML: {
            __html: img.caption
          }
        }));
      } else {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          className: `ck-blocks-gallery-grid-item__caption`,
          dangerouslySetInnerHTML: {
            __html: img.caption
          }
        }));
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        className: itemStyle
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
    })));
  }
};
const v3 = {
  attributes: {
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.ck-blocks-gallery-grid-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-image'
        },
        thumbUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        lightUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-light-image'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        customLink: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link'
        },
        linkTarget: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link-target'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        caption: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-caption'
        }
      }
    },
    lightSize: {
      type: 'string',
      default: 'large'
    },
    thumbSize: {
      type: 'string',
      default: 'medium'
    },
    displayAs: {
      type: "string",
      default: "gallery"
    },
    linkImages: {
      type: 'string',
      default: 'custom'
    },
    horizontalAlign: {
      type: 'string',
      default: 'center'
    },
    columns: {
      type: "number",
      default: 4
    },
    columnsMobile: {
      type: "number",
      default: 1
    },
    columnsTablet: {
      type: "number",
      default: 2
    },
    showCaptions: {
      type: 'boolean',
      default: false
    },
    cropImages: {
      type: 'boolean',
      default: false
    },
    imageLayout: {
      type: 'string',
      default: 'landscape'
    },
    imageAlignment: {
      type: 'string',
      default: 'center'
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
    autoPlay: {
      type: 'boolean',
      default: true
    },
    slidesToShow: {
      type: 'number',
      default: 3
    },
    slidesToScroll: {
      type: 'number',
      default: 3
    },
    slidesToShowMobile: {
      type: 'number',
      default: 1
    },
    slidesToScrollMobile: {
      type: 'number',
      default: 1
    },
    slidesToShowTablet: {
      type: 'number',
      default: 3
    },
    slidesToScrollTablet: {
      type: 'number',
      default: 3
    },
    autoPlaySpeed: {
      type: 'number',
      default: 3000
    },
    transitionSpeed: {
      type: 'number',
      default: 500
    },
    showDots: {
      type: 'boolean',
      default: false
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
  save({
    attributes
  }) {
    const {
      title,
      subtitle,
      images,
      blockId,
      hideTitle,
      showCaptions,
      displayAs,
      viewLimit,
      cropImages,
      linkImages,
      columns,
      columnsMobile,
      columnsTablet,
      horizontalAlign,
      limitView,
      imageLayout,
      mobileScroll,
      imageAlignment,
      autoPlay,
      slidesToScroll,
      slidesToScrollMobile,
      slidesToScrollTablet,
      slidesToShow,
      slidesToShowMobile,
      slidesToShowTablet,
      autoPlaySpeed,
      transitionSpeed,
      showDots
    } = attributes;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';
    const maybeCarousel = isCarousel || mobileScroll;
    const isLightbox = linkImages == 'lightbox';
    const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'image-gallery': isGallery,
      'lightbox-gallery': isLightbox,
      'image-carousel': isCarousel
    });
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: blockStyle
    });
    const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid': true,
      [`columns-${columns}`]: isGallery,
      [`columns-m-${columnsMobile}`]: isGallery,
      [`columns-t-${columnsTablet}`]: isGallery,
      [`align${horizontalAlign}`]: isGallery,
      'fixed-images': cropImages,
      [`fixed-images-${imageLayout}`]: cropImages,
      'mobile-scroll': mobileScroll,
      [`image-align-${imageAlignment}`]: !cropImages,
      'has-captions': showCaptions && !isLightbox,
      'ck-carkeek-slider__slide-wrapper': isCarousel,
      'slider-carousel': isCarousel
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: galleryStyle,
      "data-type": maybeCarousel ? 'carousel' : undefined,
      "data-title": title,
      id: `wrappergallery-${galleryId}`,
      "data-autoplay": maybeCarousel ? autoPlay : undefined,
      "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
      "data-slides": maybeCarousel ? slidesToShow : undefined,
      "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
      "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
      "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
      "data-scroll": maybeCarousel ? slidesToScroll : undefined,
      "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
      "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
      "data-showdots": maybeCarousel ? showDots : undefined
    }, images.map((img, index) => {
      let imageStyle = {};
      if (cropImages && img.focalPointX && img.focalPointY) {
        imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
      }
      const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'ck-blocks-gallery-grid-item': true,
        'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
        'has-link': linkImages == 'custom' && img.customLink || isLightbox
      });
      const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: img.thumbUrl || img.url,
        alt: img.alt,
        style: imageStyle,
        "data-full-image": img.url,
        "data-light-image": img.lightUrl || img.url,
        "data-link": img.link,
        "data-custom-link": img.customLink,
        "data-custom-link-target": img.customLinkTarget,
        "data-id": img.id,
        "data-caption": img.caption
      });
      let imagePack;
      if (linkImages == 'lightbox') {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: img.lightUrl,
          "data-fancybox": `gallery-${galleryId}`,
          "data-caption": img.caption
        }, image);
      } else if (linkImages == 'custom' && img.customLink) {
        const myProps = {
          href: img.customLink,
          target: img.linkTarget === '_blank' ? '_blank' : undefined,
          rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
        };
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          ...myProps
        }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          dangerouslySetInnerHTML: {
            __html: img.caption
          }
        }));
      } else {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          className: `ck-blocks-gallery-grid-item__caption`,
          dangerouslySetInnerHTML: {
            __html: img.caption
          }
        }));
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        className: itemStyle
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
    })));
  }
};
const v2 = {
  attributes: {
    title: {
      type: "string"
    },
    subtitle: {
      type: "string"
    },
    images: {
      type: 'array',
      default: [],
      source: 'query',
      selector: '.ck-blocks-gallery-grid-item',
      query: {
        url: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-full-image'
        },
        thumbUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'src'
        },
        lightUrl: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-light-image'
        },
        link: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-link'
        },
        customLink: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link'
        },
        linkTarget: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-custom-link-target'
        },
        alt: {
          source: 'attribute',
          selector: 'img',
          attribute: 'alt',
          default: ''
        },
        id: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-id'
        },
        caption: {
          source: 'attribute',
          selector: 'img',
          attribute: 'data-caption'
        }
      }
    },
    lightSize: {
      type: 'string',
      default: 'large'
    },
    thumbSize: {
      type: 'string',
      default: 'medium'
    },
    displayAs: {
      type: "string",
      default: "gallery"
    },
    linkImages: {
      type: 'string',
      default: 'custom'
    },
    horizontalAlign: {
      type: 'string',
      default: 'center'
    },
    columns: {
      type: "number",
      default: 4
    },
    columnsMobile: {
      type: "number",
      default: 1
    },
    columnsTablet: {
      type: "number",
      default: 2
    },
    showCaptions: {
      type: 'boolean',
      default: false
    },
    cropImages: {
      type: 'boolean',
      default: false
    },
    imageLayout: {
      type: 'string',
      default: 'landscape'
    },
    imageAlignment: {
      type: 'string',
      default: 'center'
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
    autoPlay: {
      type: 'boolean',
      default: true
    },
    slidesToShow: {
      type: 'number',
      default: 3
    },
    slidesToScroll: {
      type: 'number',
      default: 3
    },
    slidesToShowMobile: {
      type: 'number',
      default: 1
    },
    slidesToScrollMobile: {
      type: 'number',
      default: 1
    },
    slidesToShowTablet: {
      type: 'number',
      default: 3
    },
    slidesToScrollTablet: {
      type: 'number',
      default: 3
    },
    autoPlaySpeed: {
      type: 'number',
      default: 3000
    },
    transitionSpeed: {
      type: 'number',
      default: 500
    },
    showDots: {
      type: 'boolean',
      default: false
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
  save({
    attributes
  }) {
    const {
      title,
      subtitle,
      images,
      blockId,
      hideTitle,
      showCaptions,
      displayAs,
      viewLimit,
      cropImages,
      linkImages,
      columns,
      columnsMobile,
      columnsTablet,
      horizontalAlign,
      limitView,
      imageLayout,
      mobileScroll,
      imageAlignment,
      autoPlay,
      slidesToScroll,
      slidesToScrollMobile,
      slidesToScrollTablet,
      slidesToShow,
      slidesToShowMobile,
      slidesToShowTablet,
      autoPlaySpeed,
      transitionSpeed,
      showDots
    } = attributes;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';
    const maybeCarousel = isCarousel || mobileScroll;
    const isLightbox = linkImages == 'lightbox';
    const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'image-gallery': isGallery,
      'lightbox-gallery': isLightbox,
      'image-carousel': isCarousel
    });
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: blockStyle
    });
    const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid': true,
      [`columns-${columns}`]: isGallery,
      [`columns-m-${columnsMobile}`]: isGallery,
      [`columns-t-${columnsTablet}`]: isGallery,
      [`align${horizontalAlign}`]: isGallery,
      'fixed-images': cropImages,
      [`fixed-images-${imageLayout}`]: cropImages,
      'mobile-scroll': mobileScroll,
      [`image-align-${imageAlignment}`]: !cropImages,
      'has-captions': showCaptions && !isLightbox,
      'ck-carkeek-slider__slide-wrapper': isCarousel,
      'slider-carousel': isCarousel
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: galleryStyle,
      "data-type": maybeCarousel ? 'carousel' : undefined,
      "data-title": title,
      id: `wrappergallery-${galleryId}`,
      "data-autoplay": maybeCarousel ? autoPlay : undefined,
      "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
      "data-slides": maybeCarousel ? slidesToShow : undefined,
      "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
      "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
      "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
      "data-scroll": maybeCarousel ? slidesToScroll : undefined,
      "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
      "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
      "data-showdots": maybeCarousel ? showDots : undefined
    }, images.map((img, index) => {
      let imageStyle = {};
      if (cropImages && img.focalPointX && img.focalPointY) {
        imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
      }
      const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'ck-blocks-gallery-grid-item': true,
        'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
        'has-link': linkImages == 'custom' && img.customLink || isLightbox
      });
      const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
        src: img.thumbUrl || img.url,
        alt: img.alt,
        style: imageStyle,
        "data-full-image": img.url,
        "data-light-image": img.lightUrl || img.url,
        "data-link": img.link,
        "data-custom-link": img.customLink,
        "data-custom-link-target": img.customLinkTarget,
        "data-id": img.id,
        "data-caption": img.caption
      });
      let imagePack;
      if (linkImages == 'lightbox') {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: img.lightUrl,
          "data-fancybox": `gallery-${galleryId}`,
          "data-caption": img.caption
        }, image);
      } else if (linkImages == 'custom' && img.customLink) {
        const myProps = {
          href: img.customLink,
          target: img.linkTarget === '_blank' ? '_blank' : undefined,
          rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
        };
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          ...myProps
        }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, img.caption));
      } else {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
          className: `ck-blocks-gallery-grid-item__caption`
        }, img.caption));
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        className: itemStyle
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
    })));
  }
};
const v1 = {
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
      default: "gallery"
    },
    linkImages: {
      type: 'string',
      default: 'custom'
    },
    horizontalAlign: {
      type: 'string',
      default: 'center'
    },
    columns: {
      type: "number",
      default: 4
    },
    columnsMobile: {
      type: "number",
      default: 1
    },
    columnsTablet: {
      type: "number",
      default: 2
    },
    showCaptions: {
      type: 'boolean',
      default: false
    },
    cropImages: {
      type: 'boolean',
      default: false
    },
    imageLayout: {
      type: 'string',
      default: 'landscape'
    },
    imageAlignment: {
      type: 'string',
      default: 'center'
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
    autoPlay: {
      type: 'boolean',
      default: true
    },
    slidesToShow: {
      type: 'number',
      default: 3
    },
    slidesToScroll: {
      type: 'number',
      default: 3
    },
    slidesToShowMobile: {
      type: 'number',
      default: 1
    },
    slidesToScrollMobile: {
      type: 'number',
      default: 1
    },
    slidesToShowTablet: {
      type: 'number',
      default: 3
    },
    slidesToScrollTablet: {
      type: 'number',
      default: 3
    },
    autoPlaySpeed: {
      type: 'number',
      default: 3000
    },
    transitionSpeed: {
      type: 'number',
      default: 500
    },
    showDots: {
      type: 'boolean',
      default: false
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
  save({
    attributes
  }) {
    const {
      title,
      subtitle,
      images,
      blockId,
      hideTitle,
      showCaptions,
      displayAs,
      viewLimit,
      cropImages,
      linkImages,
      columns,
      columnsMobile,
      columnsTablet,
      horizontalAlign,
      limitView,
      imageLayout,
      mobileScroll,
      imageAlignment,
      autoPlay,
      slidesToScroll,
      slidesToScrollMobile,
      slidesToScrollTablet,
      slidesToShow,
      slidesToShowMobile,
      slidesToShowTablet,
      autoPlaySpeed,
      transitionSpeed,
      showDots
    } = attributes;
    //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
    const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
    const isGallery = displayAs == 'gallery';
    const isCarousel = displayAs == 'carousel';
    const maybeCarousel = isCarousel || mobileScroll;
    const isLightbox = linkImages == 'lightbox';
    const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'image-gallery': isGallery,
      'lightbox-gallery': isLightbox,
      'image-carousel': isCarousel
    });
    const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
      className: blockStyle
    });
    const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid': isGallery,
      [`columns-${columns}`]: isGallery,
      [`columns-m-${columnsMobile}`]: isGallery,
      [`columns-t-${columnsTablet}`]: isGallery,
      [`align${horizontalAlign}`]: isGallery,
      'fixed-images': cropImages,
      [`fixed-images-${imageLayout}`]: cropImages,
      'mobile-scroll': mobileScroll,
      [`image-align-${imageAlignment}`]: !cropImages,
      'has-captions': showCaptions && !isLightbox,
      'ck-carkeek-slider__slide-wrapper': isCarousel,
      'slider-carousel': isCarousel
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...blockProps
    }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-title",
      tagName: "a",
      "data-fancybox-trigger": `gallery-${galleryId}`,
      href: "javascript:;",
      "data-title": title,
      value: title
    }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
      className: "ck-lightbox-subtitle",
      tagName: "p",
      value: subtitle
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
      className: galleryStyle,
      "data-type": maybeCarousel ? 'carousel' : undefined,
      "data-title": title,
      id: `wrappergallery-${galleryId}`,
      "data-autoplay": maybeCarousel ? autoPlay : undefined,
      "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
      "data-slides": maybeCarousel ? slidesToShow : undefined,
      "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
      "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
      "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
      "data-scroll": maybeCarousel ? slidesToScroll : undefined,
      "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
      "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
      "data-showdots": maybeCarousel ? showDots : undefined
    }, images.map((img, index) => {
      let imageStyle = {};
      if (cropImages && img.focalPointX && img.focalPointY) {
        imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
      }
      const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
        'ck-blocks-gallery-grid-item': true,
        'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
        'has-link': linkImages == 'custom' && img.linksto || isLightbox
      });
      let imagePack;
      if (linkImages == 'lightbox') {
        imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
          href: img.fullUrl,
          "data-fancybox": `gallery-${galleryId}`,
          "data-caption": img.caption
        }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          style: imageStyle,
          src: img.url
        }));
      } else {
        const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          src: img.url,
          alt: img.alt,
          style: imageStyle
        }));
        if (linkImages == 'custom' && img.linksto) {
          const myProps = {
            href: img.linksto,
            target: img.linkTarget === '_blank' ? '_blank' : undefined,
            rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
          };
          imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
            ...myProps
          }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, img.caption));
        } else {
          imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", null, img.caption));
        }
      }
      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        className: itemStyle
      }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
    })));
  }
};
const v5 = {
  attributes: v4.attributes
};
v5.attributes.containImages = {
  type: 'boolean',
  default: false
};
v5.attributes.imageHeight = {
  type: 'number',
  default: 175
};
v5.attributes.imageWidth = {
  type: 'number',
  default: 250
};
v5.save = ({
  attributes
}) => {
  const {
    title,
    subtitle,
    images,
    blockId,
    hideTitle,
    showCaptions,
    displayAs,
    viewLimit,
    cropImages,
    containImages,
    imageHeight,
    imageWidth,
    linkImages,
    columns,
    columnsMobile,
    columnsTablet,
    horizontalAlign,
    limitView,
    imageLayout,
    mobileScroll,
    imageAlignment,
    autoPlay,
    slidesToScroll,
    slidesToScrollMobile,
    slidesToScrollTablet,
    slidesToShow,
    slidesToShowMobile,
    slidesToShowTablet,
    autoPlaySpeed,
    transitionSpeed,
    showOverlay,
    columnGap,
    showDots
  } = attributes;
  //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
  const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
  const isGallery = displayAs == 'gallery';
  const isCarousel = displayAs == 'carousel';
  const maybeCarousel = isCarousel || mobileScroll;
  const isLightbox = linkImages == 'lightbox';
  const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'image-gallery': isGallery,
    'lightbox-gallery': isLightbox,
    'image-carousel': isCarousel
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: blockStyle
  });
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'ck-blocks-gallery-grid': true,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    [`align${horizontalAlign}`]: isGallery,
    'fixed-images': cropImages,
    [`fixed-images-${imageLayout}`]: cropImages,
    'mobile-scroll': mobileScroll,
    [`image-align-${imageAlignment}`]: !cropImages,
    'has-captions': showCaptions && !isLightbox,
    'ck-carkeek-slider__slide-wrapper': isCarousel,
    'slider-carousel': isCarousel,
    [`ck-column-gap-${columnGap}`]: isGallery
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-title",
    tagName: "a",
    "data-fancybox-trigger": `gallery-${galleryId}`,
    href: "javascript:;",
    "data-title": title,
    value: title
  }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-subtitle",
    tagName: "p",
    value: subtitle
  })), showOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-lightbox-overlay"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle,
    "data-type": maybeCarousel ? 'carousel' : undefined,
    "data-title": title,
    id: `wrappergallery-${galleryId}`,
    "data-autoplay": maybeCarousel ? autoPlay : undefined,
    "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
    "data-slides": maybeCarousel ? slidesToShow : undefined,
    "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
    "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
    "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
    "data-scroll": maybeCarousel ? slidesToScroll : undefined,
    "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
    "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
    "data-showdots": maybeCarousel ? showDots : undefined
  }, images.map((img, index) => {
    let imageStyle = {};
    if (cropImages && img.focalPointX && img.focalPointY) {
      imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
    }
    if (containImages) {
      imageStyle.objectFit = 'contain';
      imageStyle.height = imageHeight + 'px';
      imageStyle.width = imageWidth + 'px';
    }
    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
      'has-link': linkImages == 'custom' && img.customLink || isLightbox
    });
    const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: img.thumbUrl || img.url,
      alt: img.alt,
      style: imageStyle,
      "data-full-image": img.url,
      "data-light-image": img.lightUrl || img.url,
      "data-link": img.link,
      "data-custom-link": img.customLink,
      "data-custom-link-target": img.linkTarget,
      "data-id": img.id,
      "data-caption": img.caption,
      "data-focalx": img.focalPointX,
      "data-focaly": img.focalPointY
    });
    let imagePack;
    if (linkImages == 'lightbox') {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: img.lightUrl,
        "data-fancybox": `gallery-${galleryId}`,
        "data-caption": img.caption
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else if (linkImages == 'custom' && img.customLink) {
      const myProps = {
        href: img.customLink,
        target: img.linkTarget === '_blank' ? '_blank' : undefined,
        rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
      };
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        ...myProps
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        className: `ck-blocks-gallery-grid-item__caption`,
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: itemStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
  })));
};

/** v6 pre updating to mosaic layout */
const v6 = {
  attributes: v5.attributes
};
v6.save = ({
  attributes
}) => {
  const {
    title,
    subtitle,
    images,
    blockId,
    hideTitle,
    showCaptions,
    displayAs,
    viewLimit,
    cropImages,
    containImages,
    imageHeight,
    imageWidth,
    linkImages,
    columns,
    columnsMobile,
    columnsTablet,
    horizontalAlign,
    limitView,
    imageLayout,
    mobileScroll,
    imageAlignment,
    autoPlay,
    slidesToScroll,
    slidesToScrollMobile,
    slidesToScrollTablet,
    slidesToShow,
    slidesToShowMobile,
    slidesToShowTablet,
    autoPlaySpeed,
    transitionSpeed,
    showOverlay,
    columnGap,
    showDots
  } = attributes;
  //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
  const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
  const isGallery = displayAs == 'gallery';
  const isCarousel = displayAs == 'carousel';
  const maybeCarousel = isCarousel || mobileScroll;
  const isLightbox = linkImages == 'lightbox';
  const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'image-gallery': isGallery,
    'lightbox-gallery': isLightbox,
    'image-carousel': isCarousel
  });
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: blockStyle
  });
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'ck-blocks-gallery-grid': true,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    [`align${horizontalAlign}`]: isGallery,
    'fixed-images': cropImages,
    'contain-images': containImages,
    [`fixed-images-${imageLayout}`]: cropImages,
    'mobile-scroll': mobileScroll,
    [`image-align-${imageAlignment}`]: !cropImages,
    'has-captions': showCaptions && !isLightbox,
    'ck-carkeek-slider__slide-wrapper': isCarousel,
    'slider-carousel': isCarousel,
    [`ck-column-gap-${columnGap}`]: isGallery
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-title",
    tagName: "a",
    "data-fancybox-trigger": `gallery-${galleryId}`,
    href: "javascript:;",
    "data-title": title,
    value: title
  }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-subtitle",
    tagName: "p",
    value: subtitle
  })), showOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-lightbox-overlay"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle,
    "data-type": maybeCarousel ? 'carousel' : undefined,
    "data-title": title,
    id: `wrappergallery-${galleryId}`,
    "data-autoplay": maybeCarousel ? autoPlay : undefined,
    "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
    "data-slides": maybeCarousel ? slidesToShow : undefined,
    "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
    "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
    "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
    "data-scroll": maybeCarousel ? slidesToScroll : undefined,
    "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
    "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
    "data-showdots": maybeCarousel ? showDots : undefined
  }, images.map((img, index) => {
    let imageStyle = {};
    if (cropImages && img.focalPointX && img.focalPointY) {
      imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
    }
    if (containImages) {
      imageStyle.objectFit = 'contain';
      console.log(imageHeight, imageWidth);
      if (imageHeight) {
        imageStyle.height = imageHeight + 'px';
      }
      if (imageWidth) {
        imageStyle.width = imageWidth + 'px';
      }
    }
    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
      'has-link': linkImages == 'custom' && img.customLink || isLightbox
    });
    const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: img.thumbUrl || img.url,
      alt: img.alt,
      style: imageStyle,
      "data-full-image": img.url,
      "data-light-image": img.lightUrl || img.url,
      "data-link": img.link,
      "data-custom-link": img.customLink,
      "data-custom-link-target": img.linkTarget,
      "data-id": img.id,
      "data-caption": img.caption,
      "data-focalx": img.focalPointX,
      "data-focaly": img.focalPointY
    });
    let imagePack;
    if (linkImages == 'lightbox') {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: img.lightUrl,
        "data-fancybox": `gallery-${galleryId}`,
        "data-caption": img.caption
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else if (linkImages == 'custom' && img.customLink) {
      const myProps = {
        href: img.customLink,
        target: img.linkTarget === '_blank' ? '_blank' : undefined,
        rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
      };
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        ...myProps
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        className: `ck-blocks-gallery-grid-item__caption`,
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: itemStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
  })));
};

// const v7 = {
// 	attributes: v6.attributes
// }
//
// v7.attributes.rowHeight = {
// 	type: 'number',
// 	default: 200
// }

const deprecated = [v6, v5, v4, v3, v2, v1];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deprecated);

/***/ }),

/***/ "./src/extended-gallery/edit.js":
/*!**************************************!*\
  !*** ./src/extended-gallery/edit.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery */ "./src/extended-gallery/gallery.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/extended-gallery/editor.scss");






function ExtendedGalleryEdit(props) {
  //console.log(this.props);
  const {
    attributes,
    clientId,
    setAttributes
  } = props;
  const {
    title,
    subtitle,
    blockId,
    linkImages,
    hideTitle,
    displayAs,
    columns,
    columnsMobile,
    columnsTablet,
    horizontalAlign,
    showCaptions,
    limitView,
    viewLimit,
    mobileScroll,
    autoPlay,
    slidesToScroll,
    slidesToScrollMobile,
    slidesToScrollTablet,
    slidesToShow,
    slidesToShowMobile,
    slidesToShowTablet,
    autoPlaySpeed,
    transitionSpeed,
    showDots,
    showOverlay,
    columnGap,
    rowHeight
  } = attributes;
  if (!blockId) {
    setAttributes({
      blockId: clientId
    });
  }
  const styles = {
    "--ck-grid-row-height": rowHeight + 'px'
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: styles
  });
  const isGallery = displayAs == 'gallery';
  const isTiled = displayAs == 'tiled';
  const isCarousel = displayAs == 'carousel';
  if (!columnGap && columnGap !== 0) {
    setAttributes({
      columnGap: 3
    });
  }
  const colGapLabels = ['None', 'X-Small', 'Small', 'Medium (Default)', 'Large', 'X-Large'];
  const colGapLabel = 'Column Gap: ' + colGapLabels[columnGap];
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RadioControl, {
    label: "Display on page as",
    selected: displayAs,
    options: [{
      label: 'Gallery (Grid)',
      value: 'gallery'
    }, {
      label: 'Gallery (tiled)',
      value: 'tiled'
    }, {
      label: 'Carousel',
      value: 'carousel'
    }],
    onChange: value => setAttributes({
      displayAs: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Link Images",
    value: linkImages,
    options: [{
      label: 'Custom Url',
      value: 'custom'
    }, {
      label: 'Lightbox',
      value: 'lightbox'
    }, {
      label: 'None',
      value: 'none'
    }],
    onChange: value => setAttributes({
      linkImages: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Show Captions",
    help: "Display captions in the gallery view",
    checked: showCaptions,
    onChange: showCaptions => setAttributes({
      showCaptions
    })
  })), isGallery && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Gallery Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns",
    value: columns,
    onChange: columns => setAttributes({
      columns
    }),
    min: 1,
    max: 6,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: colGapLabel,
    value: columnGap,
    onChange: columnGap => setAttributes({
      columnGap
    }),
    min: 0,
    max: 5,
    step: 1,
    type: "stepper",
    withInputField: false
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: "Align Columns",
    value: horizontalAlign,
    help: "When there are fewer images than columns in a row, how to align the columns.",
    options: [{
      label: 'Center',
      value: 'center'
    }, {
      label: 'Left',
      value: 'left'
    }, {
      label: 'Right',
      value: 'right'
    }],
    onChange: value => setAttributes({
      horizontalAlign: value
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Horizontal scroll on mobile",
    help: "Scroll gallery items horizontally on mobile",
    checked: mobileScroll,
    onChange: mobileScroll => setAttributes({
      mobileScroll
    })
  }), !mobileScroll && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns Mobile",
    value: columnsMobile,
    onChange: columnsMobile => setAttributes({
      columnsMobile
    }),
    min: 1,
    max: 6,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Columns Tablet",
    value: columnsTablet,
    onChange: columnsTablet => setAttributes({
      columnsTablet
    }),
    min: 1,
    max: 6,
    step: 1
  })))), isTiled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Gallery Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Row Height",
    value: rowHeight,
    onChange: rowHeight => setAttributes({
      rowHeight
    }),
    min: 50,
    max: 700,
    step: 10
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: colGapLabel,
    value: columnGap,
    onChange: columnGap => setAttributes({
      columnGap
    }),
    min: 0,
    max: 5,
    step: 1,
    type: "stepper",
    withInputField: false
  }))), (isCarousel || mobileScroll) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Carousel Settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !mobileScroll && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Show", "carkeek-blocks"),
    value: slidesToShow,
    onChange: value => setAttributes({
      slidesToShow: value
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Scroll", "carkeek-blocks"),
    value: slidesToScroll,
    onChange: value => setAttributes({
      slidesToScroll: value
    }),
    min: 1,
    max: 6
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Show Mobile", "carkeek-blocks"),
    value: slidesToShowMobile,
    onChange: value => setAttributes({
      slidesToShowMobile: value
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Scroll Mobile", "carkeek-blocks"),
    value: slidesToScrollMobile,
    onChange: value => setAttributes({
      slidesToScrollMobile: value
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Show Tablet", "carkeek-blocks"),
    value: slidesToShowTablet,
    onChange: value => setAttributes({
      slidesToShowTablet: value
    }),
    min: 1,
    max: 6
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Slides to Scroll Tablet", "carkeek-blocks"),
    value: slidesToScrollTablet,
    onChange: value => setAttributes({
      slidesToScrollTablet: value
    }),
    min: 1,
    max: 6
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Auto Play Slider",
    checked: autoPlay,
    onChange: value => setAttributes({
      autoPlay: value
    })
  }), autoPlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Time on each Slide (in ms)", "carkeek-blocks"),
    value: autoPlaySpeed,
    onChange: value => setAttributes({
      autoPlaySpeed: value
    }),
    min: 1000,
    max: 10000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Transition speed", "carkeek-blocks"),
    value: transitionSpeed,
    onChange: value => setAttributes({
      transitionSpeed: value
    }),
    min: 500,
    max: 10000
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Show Dot Navigation",
    checked: showDots,
    onChange: value => setAttributes({
      showDots: value
    })
  })), linkImages == 'lightbox' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Lightbox"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Limit Initial View",
    help: "Limit the gallery view on the page to a number (all images will be accessible from the lightbox)",
    checked: limitView,
    onChange: limitView => setAttributes({
      limitView
    })
  }), limitView && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: "Number of images to show on page",
    value: viewLimit,
    onChange: viewLimit => setAttributes({
      viewLimit
    }),
    min: columns,
    step: columns
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Title",
    value: title,
    help: "Provide a unique title for your lightbox.",
    onChange: title => setAttributes({
      title
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: "Sub Title",
    value: subtitle,
    help: "Provide an optional subtitle for your lightbox.",
    onChange: subtitle => setAttributes({
      subtitle
    })
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.CheckboxControl, {
    label: "Hide title",
    checked: hideTitle,
    onChange: value => setAttributes({
      hideTitle: value
    })
  }))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorAdvancedControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: "Text Overlay",
    checked: showOverlay,
    onChange: value => setAttributes({
      showOverlay: value
    })
  })), showOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
    template: [['core/group', {}, [['core/paragraph', {}, []]]]]
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gallery__WEBPACK_IMPORTED_MODULE_4__["default"], {
    ...props
  }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtendedGalleryEdit);

/***/ }),

/***/ "./src/extended-gallery/gallery-img.js":
/*!*********************************************!*\
  !*** ./src/extended-gallery/gallery-img.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryImage: () => (/* binding */ GalleryImage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/blob */ "@wordpress/blob");
/* harmony import */ var _wordpress_blob__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blob__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons */ "./src/extended-gallery/icons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/extended-gallery/shared.js");

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */







/**
 * Internal dependencies
 */

const isTemporaryImage = (id, url) => !id && (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_7__.isBlobURL)(url);
const GalleryImage = props => {
  const {
    url,
    thumbUrl,
    alt,
    id,
    customLink,
    focalPointX,
    focalPointY,
    spanCols,
    spanRows,
    linkTarget,
    isFirstItem,
    isLastItem,
    isSelected,
    caption,
    onRemove,
    onMoveForward,
    onMoveBackward,
    onSelect,
    setAttributes,
    showCaptions,
    cropImages,
    isTiled,
    containImages,
    imageHeight,
    imageWidth,
    'aria-label': ariaLabel,
    onDeselect,
    inlineEdit,
    lightSize,
    thumbSize,
    linkImages
  } = props;
  const [isEditing, setIsEditing] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
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
    let mediaAttributes = (0,_shared__WEBPACK_IMPORTED_MODULE_9__.pickRelevantMediaFiles)(media, lightSize, thumbSize);

    // If the current image is temporary but an alt text was meanwhile
    // written by the user, make sure the text is not overwritten.
    if (isTemporaryImage(id, url)) {
      if (alt) {
        mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['alt']);
      }
    }

    // If a caption text was meanwhile written by the user,
    // make sure the text is not overwritten by empty captions.
    if (caption && !(0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(mediaAttributes, ['caption'])) {
      mediaAttributes = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.omit)(mediaAttributes, ['caption']);
    }
    setAttributes({
      mediaAttributes
    });
    setIsEditing(false);
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
  if (containImages) {
    imageStyle.objectFit = 'contain';
    imageStyle.height = imageHeight + 'px';
    imageStyle.width = imageWidth + 'px';
  }
  const img =
  // Disable reason: Image itself is not meant to be interactive, but should
  // direct image selection and unfocus caption fields.
  (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    src: thumbUrl || url,
    alt: alt,
    "data-id": id,
    onClick: onSelect,
    onFocus: onSelect,
    onKeyDown: onRemoveImage,
    tabIndex: "0",
    "aria-label": ariaLabel
    //ref={ bindContainer }
    ,
    style: imageStyle
  }), (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_7__.isBlobURL)(url) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null));
  const className = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'is-selected': isSelected,
    'is-transient': (0,_wordpress_blob__WEBPACK_IMPORTED_MODULE_7__.isBlobURL)(url)
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.InspectorControls, null, isSelected && cropImages && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Image Settings", "carkeek-blocks")
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.FocalPointPicker, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("Focal Point", "carkeek-blocks"),
    url: url,
    onChange: onSetFocalPoint,
    value: {
      x: focalPointX,
      y: focalPointY
    }
  }), isTiled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Row Span",
    value: spanRows,
    onChange: spanRows => setAttributes({
      spanRows
    }),
    min: 1,
    max: 6,
    step: 1
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RangeControl, {
    label: "Columns Span",
    value: spanCols,
    onChange: spanCols => setAttributes({
      spanCols
    }),
    min: 1,
    max: 12,
    step: 1
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", {
    className: className
  }, !isEditing && img, isEditing && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.MediaPlaceholder, {
    labels: {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Edit gallery image')
    },
    icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].imageIcon,
    onSelect: onSelectImageFromLibrary,
    accept: "image/*",
    allowedTypes: ['image'],
    value: {
      id,
      src: url
    }
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "block-library-gallery-item__inline-menu carkeek-edit is-left"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].chevronLeft,
    onClick: isFirstItem ? undefined : onMoveBackward,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Move image backward'),
    "aria-disabled": isFirstItem,
    disabled: !isSelected
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].chevronRight,
    onClick: isLastItem ? undefined : onMoveForward,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Move image forward'),
    "aria-disabled": isLastItem,
    disabled: !isSelected
  }), linkImages == 'custom' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Dropdown, {
    position: "bottom right",
    renderToggle: ({
      isOpen,
      onToggle
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].link,
      variant: "primary",
      onClick: onToggle,
      "aria-expanded": isOpen,
      className: customLink ? 'is-active' : undefined
    }),
    renderContent: () => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "url-input-dropdown"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.URLInput, {
      value: customLink,
      className: "editor-media-placeholder__url-input-field block-editor-media-placeholder__url-input-field",
      onChange: customLink => setAttributes({
        customLink
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Open in New Tab', 'carkeek-blocks'),
      checked: linkTarget === '_blank',
      onChange: target => setAttributes({
        linkTarget: target ? '_blank' : ''
      })
    }))
  })), inlineEdit && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ButtonGroup, {
    className: "block-library-gallery-item__inline-menu carkeek-edit is-right"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    icon: _icons__WEBPACK_IMPORTED_MODULE_8__["default"].closeSmall,
    onClick: onRemove,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Remove image'),
    disabled: !isSelected
  }))), !isEditing && (showCaptions || linkImages == 'lightbox') && (isSelected || caption) && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__.RichText, {
    tagName: "figcaption",
    placeholder: isSelected ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Write caption…') : null,
    value: caption
    //isSelected={ isSelected }
    ,
    onChange: newCaption => setAttributes({
      caption: newCaption
    })
    //unstableOnFocus={ onSelectCaption }
    ,
    inlineToolbar: true
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GalleryImage);

/***/ }),

/***/ "./src/extended-gallery/gallery.js":
/*!*****************************************!*\
  !*** ./src/extended-gallery/gallery.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gallery: () => (/* binding */ Gallery),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _use_get_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./use-get-media */ "./src/extended-gallery/use-get-media.js");
/* harmony import */ var _gallery_img__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery-img */ "./src/extended-gallery/gallery-img.js");
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons */ "./src/extended-gallery/icons.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared */ "./src/extended-gallery/shared.js");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */







//import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */



const Gallery = props => {
  const {
    attributes,
    className,
    isSelected,
    imageSizes
  } = props;
  const {
    images,
    lightSize,
    thumbSize,
    ids,
    displayAs,
    columns,
    columnsMobile,
    columnsTablet,
    columnGap,
    cropImages,
    mobileScroll,
    horizontalAlign,
    containImages,
    imageHeight,
    imageWidth,
    imageLayout,
    linkImages,
    showCaptions,
    slidesToShow,
    imageAlignment
  } = attributes;
  const [imageSelected, setImageSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
  const imageData = (0,_use_get_media__WEBPACK_IMPORTED_MODULE_8__["default"])(ids);
  const isGallery = displayAs == 'gallery';
  const isCarousel = displayAs == 'carousel';
  const isTiled = displayAs == 'tiled';
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'ck-blocks-gallery-grid': true,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    [`align${horizontalAlign}`]: isGallery,
    'fixed-images': cropImages && !isTiled,
    'contain-images': containImages,
    [`fixed-images-${imageLayout}`]: cropImages && !isTiled,
    'mobile-scroll': mobileScroll,
    [`image-align-${imageAlignment}`]: !cropImages,
    'has-captions': showCaptions && !isLightbox,
    'ck-carkeek-slider__slide-wrapper': isCarousel,
    'slider-carousel': isCarousel,
    [`ck-column-gap-${columnGap}`]: isGallery || isTiled,
    'ck-tiled-gallery': isTiled,
    [`ck-image-count-${images.length}`]: isTiled
  });
  function setAttributes(newAttrs) {
    if (newAttrs.ids) {
      throw new Error('The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes');
    }
    if (newAttrs.images) {
      newAttrs = {
        ...newAttrs,
        // Unlike images[ n ].id which is a string, always ensure the
        // ids array contains numbers as per its attribute type.
        ids: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(newAttrs.images, ({
          id
        }) => {
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
  function onSelectImages(newImages) {
    const oldImages = [...images];
    setAttributes({
      images: newImages.map(image => (0,_shared__WEBPACK_IMPORTED_MODULE_11__.pickRelevantMediaFiles)(image, thumbSize, lightSize, oldImages))
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
      images: [...images.slice(0, index), {
        ...images[index],
        ...attributes
      }, ...images.slice(index + 1)]
    });
  }
  const hasImages = !!images.length;
  function getImagesSizeOptions() {
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.map)(imageSizes, ({
      name,
      slug
    }) => ({
      value: slug,
      label: name
    }));
  }
  function updateLightSize(newLightSize) {
    setAttributes({
      lightSize: newLightSize
    });
    const newImages = images.map(image => {
      return (0,_shared__WEBPACK_IMPORTED_MODULE_11__.pickRelevantMediaFilesUpdate)(image, thumbSize, newLightSize, imageData);
    });
    setAttributes({
      images: newImages
    });
  }
  function updateThumbsSize(newThumbSize) {
    setAttributes({
      thumbSize: newThumbSize
    });
    const newImages = images.map(image => {
      return (0,_shared__WEBPACK_IMPORTED_MODULE_11__.pickRelevantMediaFilesUpdate)(image, newThumbSize, lightSize, imageData);
    });
    setAttributes({
      images: newImages
    });
  }
  const imageSizeOptions = getImagesSizeOptions();
  const shouldShowSizeOptions = hasImages && !(0,lodash__WEBPACK_IMPORTED_MODULE_1__.isEmpty)(imageSizeOptions);
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
    title: "Gallery Image Settings"
  }, !isTiled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Crop Images",
    help: "Crop the images in the gallery to a uniform size",
    checked: cropImages,
    onChange: cropImages => setAttributes({
      cropImages
    })
  }), !cropImages && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
    label: "Contain Images",
    help: "Contain the images within a uniform size, set height and/or width below.",
    checked: containImages,
    onChange: containImages => setAttributes({
      containImages
    })
  }), containImages && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    label: "Image Width",
    value: imageWidth,
    onChange: imageWidth => setAttributes({
      imageWidth
    }),
    min: 0
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.__experimentalNumberControl, {
    label: "Image Height",
    value: imageHeight,
    onChange: imageHeight => setAttributes({
      imageHeight
    }),
    min: 0
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: "Vertically Align Images",
    selected: imageAlignment,
    options: [{
      label: 'Center',
      value: 'center'
    }, {
      label: 'Top',
      value: 'top'
    }, {
      label: 'Bottom',
      value: 'bottom'
    }],
    onChange: value => setAttributes({
      imageAlignment: value
    })
  })), cropImages && !isTiled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.RadioControl, {
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
  }), shouldShowSizeOptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Image size'),
    value: thumbSize,
    options: imageSizeOptions,
    onChange: updateThumbsSize
  }), linkImages == 'lightbox' && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Lightbox Image size'),
    value: lightSize,
    options: imageSizeOptions,
    onChange: updateLightSize
  })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle
  }, images.map((img, index) => {
    const ariaLabel = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.sprintf)( /* translators: 1: the order number of the image. 2: the total number of images. */
    (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('image %1$d of %2$d in gallery'), index + 1, images.length);
    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': isCarousel && index >= slidesToShow
    });
    let figureStyle = {};
    if (isTiled && img.spanCols) {
      figureStyle.gridColumn = `span ${img.spanCols}`;
    }
    if (isTiled && img.spanRows) {
      figureStyle.gridRow = `span ${img.spanRows}`;
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      className: itemStyle,
      style: figureStyle,
      key: img.id || img.url
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_gallery_img__WEBPACK_IMPORTED_MODULE_9__["default"]
    //{ ...props }
    , {
      key: img.id || img.url,
      url: img.url,
      thumbUrl: img.thumbUrl,
      lightUrl: img.lightUrl,
      alt: img.alt,
      id: parseInt(img.id, 10) // make id an integer explicitly
      ,
      focalPointX: img.focalPointX,
      focalPointY: img.focalPointY,
      spanCols: parseFloat(img.spanCols),
      spanRows: parseFloat(img.spanRows),
      isFirstItem: index === 0,
      isLastItem: index + 1 === images.length,
      isSelected: isSelected && imageSelected === index,
      inlineEdit: true,
      onMoveForward: onMoveForward(index),
      onMoveBackward: onMoveBackward(index),
      onRemove: onRemoveImage(index),
      onSelect: () => setImageSelected(index),
      onDeselect: () => setImageSelected(index),
      setAttributes: attrs => setImageAttributes(index, attrs),
      containImages: containImages,
      imageHeight: imageHeight,
      imageWidth: imageWidth,
      cropImages: cropImages || isTiled,
      isTiled: isTiled,
      linkImages: linkImages,
      customLink: img.customLink,
      linkTarget: img.linkTarget,
      showCaptions: showCaptions,
      caption: img.caption,
      "aria-label": ariaLabel,
      lightSize: lightSize
    }));
  })), !hasImages && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaPlaceholder, {
    addToGallery: hasImages,
    isAppender: hasImages,
    className: className,
    disableMediaButtons: hasImages && !isSelected,
    icon: _icons__WEBPACK_IMPORTED_MODULE_10__["default"].gallery,
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
  })), hasImages && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUploadCheck, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.MediaUpload, {
    onSelect: onSelectImages,
    allowedTypes: ['image'],
    isAppender: hasImages,
    addToGallery: false //temp to avoid problem with images disappearing was hasImages
    ,
    multiple: true,
    gallery: true,
    value: ids,
    render: ({
      open
    }) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
      className: 'ck-custom-appender',
      onClick: open
    }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(' + Add to / Edit Gallery'))
  })));
};

//export default withSelect( ( select, { attributes: { ids }, isSelected } ) => {
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_data__WEBPACK_IMPORTED_MODULE_7__.withSelect)(select => {
  const {
    getMedia
  } = select('core');
  const {
    getSettings
  } = select('core/block-editor');
  const {
    imageSizes
  } = getSettings();
  return {
    imageSizes,
    getMedia
  };
})(Gallery));

/***/ }),

/***/ "./src/extended-gallery/icon.js":
/*!**************************************!*\
  !*** ./src/extended-gallery/icon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.logoGrid = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  width: "512pt",
  height: "512pt",
  version: "1.1",
  viewBox: "0 0 512 512",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m178.23 0c8.7266 2.9688 17.188 6.6719 25.293 11.059 17 11.008 23.859 28.109 24.012 47.77 0.30859 36.66 0.30859 73.301 0 109.93 0 24.062-10.805 42.648-32.82 52.941h0.003906c-8.3398 3.6094-17.332 5.4766-26.422 5.4805-36.199 0.61328-72.449 0.41016-108.64 0-30.258 0-51.199-16.945-58.418-46.387-0.36328-0.92578-0.77344-1.832-1.2305-2.7148v-128.46c0.5625-1.1797 1.0234-2.3555 1.332-3.5352 3.4297-13.977 9.5742-26.574 22.117-34.305v0.003906c8.4883-4.5352 17.281-8.4688 26.316-11.777z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m0 333.26c3.3789-9.0156 7.5078-17.734 12.34-26.062 9.3281-14.109 25.223-22.473 42.137-22.168 39.016-0.41016 77.977-0.25781 116.99 0 15.188-0.003906 29.734 6.125 40.34 17 10.605 10.871 16.367 25.57 15.98 40.754 0.25781 37.07 0.46094 74.188 0 111.26-0.46094 33.23-22.988 56.781-56.012 57.547-38.348 0.87109-76.801 0.82031-115.1 0-28.672-0.71484-47.977-17.355-55.297-45.055-0.30859-1.2305-0.82031-2.3555-1.3828-3.4805v-129.79z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m461.93 0c10.383 2.125 20.184 6.4727 28.723 12.75 12.352 9.3281 19.867 23.703 20.48 39.168 0.71875 31.539 0.46094 63.129 0.5625 94.719v24.168c-0.019531 15.332-6.2461 30.004-17.262 40.676-11.016 10.668-25.879 16.422-41.207 15.949-36.66 0-73.32 0.30859-109.98 0-33.383-0.41016-57.242-22.629-58.062-55.551-0.97266-38.758-0.87109-77.566 0-116.33 0.5625-28.262 17.766-47.664 45.414-54.426 0.96484-0.30859 1.9062-0.68359 2.8164-1.125z"
}), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "m511.49 398.13c0 20.48 0.71875 40.961 0 61.031v-0.003906c-0.47266 13.629-6.1016 26.57-15.746 36.207-9.6484 9.6367-22.594 15.254-36.223 15.711-40.961 0.95703-81.922 0.95703-122.88 0-13.48-0.52344-26.258-6.1328-35.766-15.699-9.5117-9.5664-15.043-22.379-15.484-35.859-0.92188-40.961-0.92188-81.922 0-122.88 0.40234-13.488 5.9141-26.32 15.422-35.902 9.5039-9.582 22.289-15.195 35.777-15.707 40.961-0.92188 82.055-0.92188 123.29 0 13.379 0.62109 26.043 6.2148 35.512 15.688 9.4688 9.4688 15.066 22.133 15.688 35.512 0.92188 20.48 0 40.961 0 61.441z"
})));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extended-gallery/icons.js":
/*!***************************************!*\
  !*** ./src/extended-gallery/icons.js ***!
  \***************************************/
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
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
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
icons.closeSmall = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M13 11.9l3.3-3.4-1.1-1-3.2 3.3-3.2-3.3-1.1 1 3.3 3.4-3.5 3.6 1 1L12 13l3.5 3.5 1-1z",
  color: "#000"
}));
icons.chevronRight = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M10.6 6L9.4 7l4.6 5-4.6 5 1.2 1 5.4-6z",
  color: "#000"
}));
icons.chevronLeft = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z",
  color: "#000"
}));
icons.edit = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M20.1 5.1L16.9 2 6.2 12.7l-1.3 4.4 4.5-1.3L20.1 5.1zM4 20.8h8v-1.5H4v1.5z",
  color: "#000"
}));
icons.link = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 640 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  d: "M0 256C0 167.6 71.63 96 160 96H256C273.7 96 288 110.3 288 128C288 145.7 273.7 160 256 160H160C106.1 160 64 202.1 64 256C64 309 106.1 352 160 352H256C273.7 352 288 366.3 288 384C288 401.7 273.7 416 256 416H160C71.63 416 0 344.4 0 256zM480 416H384C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352H480C533 352 576 309 576 256C576 202.1 533 160 480 160H384C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H480C568.4 96 640 167.6 640 256C640 344.4 568.4 416 480 416zM416 224C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H224C206.3 288 192 273.7 192 256C192 238.3 206.3 224 224 224H416z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (icons);

/***/ }),

/***/ "./src/extended-gallery/index.js":
/*!***************************************!*\
  !*** ./src/extended-gallery/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/extended-gallery/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/extended-gallery/save.js");
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/extended-gallery/deprecated.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/extended-gallery/block.json");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/extended-gallery/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/extended-gallery/style.scss");








(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"].logoGrid,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("logo", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("gallery", "carkeek-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("carousel", "carkeek-blocks")],
  transforms: {
    from: [{
      type: "block",
      blocks: ["core/gallery"],
      transform: attr => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("carkeek-blocks/extended-gallery", {
          images: attr.images
        });
      }
    }],
    to: [{
      type: "block",
      blocks: ["core/gallery"],
      transform: attr => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_3__.createBlock)("core/gallery", {
          images: attr.images
        });
      }
    }]
  },
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"]
});

/***/ }),

/***/ "./src/extended-gallery/save.js":
/*!**************************************!*\
  !*** ./src/extended-gallery/save.js ***!
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
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_3__);




function ExtendedGallerySave({
  attributes
}) {
  const {
    title,
    subtitle,
    images,
    blockId,
    hideTitle,
    showCaptions,
    displayAs,
    viewLimit,
    cropImages,
    containImages,
    imageHeight,
    imageWidth,
    linkImages,
    columns,
    columnsMobile,
    columnsTablet,
    horizontalAlign,
    limitView,
    imageLayout,
    mobileScroll,
    imageAlignment,
    autoPlay,
    slidesToScroll,
    slidesToScrollMobile,
    slidesToScrollTablet,
    slidesToShow,
    slidesToShowMobile,
    slidesToShowTablet,
    autoPlaySpeed,
    transitionSpeed,
    showOverlay,
    columnGap,
    rowHeight,
    showDots
  } = attributes;
  //if we use blockId for the gallery id, and they duplicate the block, we get into trouble, so only use the blockId if they have not specified a title
  const galleryId = title ? (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_3__.cleanForSlug)(title) : blockId;
  const isGallery = displayAs == 'gallery';
  const isCarousel = displayAs == 'carousel';
  const isTiled = displayAs == 'tiled';
  const maybeCarousel = isCarousel || mobileScroll;
  const isLightbox = linkImages == 'lightbox';
  const blockStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'image-gallery': isGallery,
    'lightbox-gallery': isLightbox,
    'image-carousel': isCarousel
  });
  const styles = {
    "--ck-grid-row-height": rowHeight + 'px'
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: blockStyle,
    style: styles
  });
  const galleryStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
    'ck-blocks-gallery-grid': true,
    [`columns-${columns}`]: isGallery,
    [`columns-m-${columnsMobile}`]: isGallery,
    [`columns-t-${columnsTablet}`]: isGallery,
    [`align${horizontalAlign}`]: isGallery,
    'fixed-images': cropImages && !isTiled,
    'contain-images': containImages,
    [`fixed-images-${imageLayout}`]: cropImages && !isTiled,
    'mobile-scroll': mobileScroll,
    [`image-align-${imageAlignment}`]: !cropImages,
    'has-captions': showCaptions && !isLightbox,
    'ck-carkeek-slider__slide-wrapper': isCarousel,
    'slider-carousel': isCarousel,
    [`ck-column-gap-${columnGap}`]: isGallery || isTiled,
    'ck-tiled-gallery': isTiled,
    [`ck-image-count-${images.length}`]: isTiled
  });
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ...blockProps
  }, !hideTitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-title",
    tagName: "a",
    "data-fancybox-trigger": `gallery-${galleryId}`,
    href: "javascript:;",
    "data-title": title,
    value: title
  }), subtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    className: "ck-lightbox-subtitle",
    tagName: "p",
    value: subtitle
  })), showOverlay && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "ck-lightbox-overlay"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InnerBlocks.Content, null)), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: galleryStyle,
    "data-type": maybeCarousel ? 'carousel' : undefined,
    "data-title": title,
    id: `wrappergallery-${galleryId}`,
    "data-autoplay": maybeCarousel ? autoPlay : undefined,
    "data-speed": maybeCarousel ? autoPlaySpeed : undefined,
    "data-slides": maybeCarousel ? slidesToShow : undefined,
    "data-slidesmobile": maybeCarousel ? slidesToShowMobile : undefined,
    "data-slidestablet": maybeCarousel ? slidesToShowTablet : undefined,
    "data-transitionspd": maybeCarousel ? transitionSpeed : undefined,
    "data-scroll": maybeCarousel ? slidesToScroll : undefined,
    "data-scrollmobile": maybeCarousel ? slidesToScrollMobile : undefined,
    "data-scrolltablet": maybeCarousel ? slidesToScrollTablet : undefined,
    "data-showdots": maybeCarousel ? showDots : undefined
  }, images.map((img, index) => {
    let imageStyle = {};
    if (cropImages && img.focalPointX && img.focalPointY) {
      imageStyle.objectPosition = `${img.focalPointX * 100}% ${img.focalPointY * 100}%`;
    }
    if (containImages) {
      imageStyle.objectFit = 'contain';
      if (imageHeight) {
        imageStyle.height = imageHeight + 'px';
      }
      if (imageWidth) {
        imageStyle.width = imageWidth + 'px';
      }
    }
    let figureStyle = {};
    if (isTiled && img.spanCols) {
      figureStyle.gridColumn = `span ${img.spanCols}`;
    }
    if (isTiled && img.spanRows) {
      figureStyle.gridRow = `span ${img.spanRows}`;
    }
    const itemStyle = classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      'ck-blocks-gallery-grid-item': true,
      'ck-blocks-gallery-hidden': limitView && index >= viewLimit,
      'has-link': linkImages == 'custom' && img.customLink || isLightbox
    });
    const image = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: img.thumbUrl || img.url,
      alt: img.alt,
      style: imageStyle,
      "data-full-image": img.url,
      "data-light-image": img.lightUrl || img.url,
      "data-link": img.link,
      "data-custom-link": img.customLink,
      "data-custom-link-target": img.linkTarget,
      "data-id": img.id,
      "data-caption": img.caption,
      "data-focalx": img.focalPointX,
      "data-focaly": img.focalPointY,
      "data-spancols": img.spanCols,
      "data-spanrows": img.spanRows
    });
    let imagePack;
    if (linkImages == 'lightbox') {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: img.lightUrl,
        "data-fancybox": `gallery-${galleryId}`,
        "data-caption": img.caption
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else if (linkImages == 'custom' && img.customLink) {
      const myProps = {
        href: img.customLink,
        target: img.linkTarget === '_blank' ? '_blank' : undefined,
        rel: '_blank' === img.linkTarget ? 'noopener noreferrer' : undefined
      };
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        ...myProps
      }, image), showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    } else {
      imagePack = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, image, showCaptions && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figcaption", {
        className: `ck-blocks-gallery-grid-item__caption`,
        dangerouslySetInnerHTML: {
          __html: img.caption
        }
      }));
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: index,
      className: itemStyle,
      style: figureStyle
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("figure", null, imagePack));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExtendedGallerySave);

/***/ }),

/***/ "./src/extended-gallery/shared.js":
/*!****************************************!*\
  !*** ./src/extended-gallery/shared.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultColumnsNumber: () => (/* binding */ defaultColumnsNumber),
/* harmony export */   pickRelevantMediaFiles: () => (/* binding */ pickRelevantMediaFiles),
/* harmony export */   pickRelevantMediaFilesCore: () => (/* binding */ pickRelevantMediaFilesCore),
/* harmony export */   pickRelevantMediaFilesUpdate: () => (/* binding */ pickRelevantMediaFilesUpdate)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/**
 * External dependencies
 */

function defaultColumnsNumber(attributes) {
  return Math.min(3, attributes.images.length);
}
const pickRelevantMediaFiles = (image, thumbSize, lightSize, oldImages) => {
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(image, ['alt', 'id']);
  (0,lodash__WEBPACK_IMPORTED_MODULE_0__.each)(oldImages, obj => (0,lodash__WEBPACK_IMPORTED_MODULE_0__.update)(obj, 'id', lodash__WEBPACK_IMPORTED_MODULE_0__.parseInt));
  const oldImage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(oldImages, {
    id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.parseInt)(image.id)
  });
  //if we have an old image without a caption they may have deleted id;
  if (oldImage) {
    imageProps.caption = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(oldImage, ['caption']);
  } else {
    imageProps.caption = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['caption', 'raw']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['caption']) || undefined;
  }
  imageProps.customLink = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(oldImage, ['customLink']) || undefined;
  imageProps.focalPointX = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(oldImage, ['focalPointX']) || undefined;
  imageProps.focalPointY = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(oldImage, ['focalPointY']) || undefined;
  imageProps.linkTarget = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(oldImage, ['linkTarget']) || undefined;
  imageProps.url = image.url || image.source_url;
  imageProps.thumbUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', thumbSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', thumbSize, 'source_url']) || image.url || image.source_url;
  imageProps.lightUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', lightSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', lightSize, 'source_url']) || image.url || image.source_url;
  imageProps.width = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', thumbSize, 'width']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', thumbSize, 'width']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', 'full', 'width']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'width']) || undefined;
  imageProps.height = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', thumbSize, 'height']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', thumbSize, 'height']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', 'full', 'height']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'height']) || undefined;
  return imageProps;
};
const pickRelevantMediaFilesCore = image => {
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(image, ['alt', 'id', 'link', 'caption']);
  imageProps.url = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['sizes', 'large', 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(image, ['media_details', 'sizes', 'large', 'source_url']) || image.url;
  return imageProps;
};
const pickRelevantMediaFilesUpdate = (image, thumbSize, lightSize, imageData) => {
  let theImage = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.find)(imageData, {
    id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.parseInt)(image.id)
  });
  if (!theImage) {
    theImage = image;
  }
  const imageProps = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.pick)(theImage, ['id', 'link']);
  imageProps.alt = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['alt_text']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['alt']) || undefined;
  imageProps.caption = image.caption || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['caption', 'raw']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['caption']) || undefined;
  imageProps.url = theImage.source_url || image.url;
  imageProps.customLink = image.customLink;
  imageProps.focalPointX = image.focalPointX;
  imageProps.focalPointY = image.focalPointY;
  imageProps.linkTarget = image.linkTarget;
  imageProps.thumbUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['sizes', thumbSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'sizes', thumbSize, 'source_url']) || theImage.source_url || image.url;
  imageProps.lightUrl = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['sizes', lightSize, 'url']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'sizes', lightSize, 'source_url']) || theImage.source_url || image.url;
  imageProps.width = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['sizes', thumbSize, 'width']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'sizes', thumbSize, 'width']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'width']) || undefined;
  imageProps.height = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['sizes', thumbSize, 'height']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'sizes', thumbSize, 'height']) || (0,lodash__WEBPACK_IMPORTED_MODULE_0__.get)(theImage, ['media_details', 'height']) || undefined;
  return imageProps;
};

/***/ }),

/***/ "./src/extended-gallery/use-get-media.js":
/*!***********************************************!*\
  !*** ./src/extended-gallery/use-get-media.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useGetMedia)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/**
 * WordPress dependencies
 */



function useGetMedia(imageIds) {
  const [currentImageMedia, setCurrentImageMedia] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const imageMedia = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    if (imageIds.length === 0) {
      return currentImageMedia;
    }
    const getMedia = select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getMedia;
    const newImageMedia = imageIds.map(img => {
      return getMedia(img);
    });
    if (newImageMedia.some(img => !img)) {
      return currentImageMedia;
    }
    return newImageMedia;
  }, [imageIds]);
  if (imageMedia?.length !== currentImageMedia.length || imageMedia.some(newImage => !currentImageMedia.find(currentImage => currentImage.id === newImage.id))) {
    setCurrentImageMedia(imageMedia);
    return imageMedia;
  }
  return currentImageMedia;
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

/***/ "./src/extended-gallery/editor.scss":
/*!******************************************!*\
  !*** ./src/extended-gallery/editor.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/extended-gallery/style.scss":
/*!*****************************************!*\
  !*** ./src/extended-gallery/style.scss ***!
  \*****************************************/
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

/***/ "@wordpress/blob":
/*!******************************!*\
  !*** external ["wp","blob"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blob"];

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

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/url":
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["url"];

/***/ }),

/***/ "./src/extended-gallery/block.json":
/*!*****************************************!*\
  !*** ./src/extended-gallery/block.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"carkeek-blocks/extended-gallery","version":"0.1.3","title":"Extended Gallery","category":"widgets","description":"Create a carousel or slider from a gallery of images.","supports":{"reusable":true,"html":false,"align":["wide","full"],"spacing":{"padding":true,"margin":true}},"attributes":{"title":{"type":"string"},"subtitle":{"type":"string"},"preview":{"type":"boolean","default":false},"images":{"type":"array","default":[],"source":"query","selector":".ck-blocks-gallery-grid-item","query":{"url":{"source":"attribute","selector":"img","attribute":"data-full-image"},"thumbUrl":{"source":"attribute","selector":"img","attribute":"src"},"lightUrl":{"source":"attribute","selector":"img","attribute":"data-light-image"},"link":{"source":"attribute","selector":"img","attribute":"data-link"},"customLink":{"source":"attribute","selector":"img","attribute":"data-custom-link"},"linkTarget":{"source":"attribute","selector":"img","attribute":"data-custom-link-target"},"alt":{"source":"attribute","selector":"img","attribute":"alt","default":""},"id":{"source":"attribute","selector":"img","attribute":"data-id"},"caption":{"source":"attribute","selector":"img","attribute":"data-caption"},"focalPointX":{"source":"attribute","selector":"img","attribute":"data-focalx"},"focalPointY":{"source":"attribute","selector":"img","attribute":"data-focaly"},"spanCols":{"source":"attribute","selector":"img","type":"number","attribute":"data-spancols"},"spanRows":{"source":"attribute","selector":"img","type":"number","attribute":"data-spanrows"}}},"lightSize":{"type":"string","default":"large"},"thumbSize":{"type":"string","default":"large"},"displayAs":{"type":"string","default":"gallery"},"linkImages":{"type":"string","default":"custom"},"horizontalAlign":{"type":"string","default":"center"},"columns":{"type":"number","default":4},"columnsMobile":{"type":"number","default":1},"columnsTablet":{"type":"number","default":2},"columnGap":{"type":"number","default":3},"showCaptions":{"type":"boolean","default":false},"cropImages":{"type":"boolean","default":false},"containImages":{"type":"boolean","default":false},"imageHeight":{"type":"string"},"imageWidth":{"type":"string"},"imageLayout":{"type":"string","default":"landscape"},"imageAlignment":{"type":"string","default":"center"},"limitView":{"type":"boolean","default":false},"viewLimit":{"type":"number","default":4},"mobileScroll":{"type":"boolean","default":false},"linkFirstImage":{"type":"boolean","default":true},"hideTitle":{"type":"boolean","default":false},"sizeSlug":{"type":"string","default":"full"},"sizeSlugThumbs":{"type":"string","default":"medium"},"autoPlay":{"type":"boolean","default":true},"slidesToShow":{"type":"number","default":3},"slidesToScroll":{"type":"number","default":3},"slidesToShowMobile":{"type":"number","default":1},"slidesToScrollMobile":{"type":"number","default":1},"slidesToShowTablet":{"type":"number","default":3},"slidesToScrollTablet":{"type":"number","default":3},"autoPlaySpeed":{"type":"number","default":3000},"transitionSpeed":{"type":"number","default":500},"showDots":{"type":"boolean","default":false},"blockId":{"type":"string"},"showOverlay":{"type":"boolean","default":false},"style":{"type":"object","default":{"spacing":{"margin":{},"padding":{}}}},"ids":{"type":"array","items":{"type":"number"},"default":[]},"rowHeight":{"type":"number","default":200}},"example":{"attributes":{"preview":true}},"textdomain":"carkeek-slider","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./script.js"}');

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
/******/ 			"extended-gallery/index": 0,
/******/ 			"extended-gallery/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["extended-gallery/style-index"], () => (__webpack_require__("./src/extended-gallery/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map