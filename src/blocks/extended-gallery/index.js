import "./style.editor.css";

import edit from "./edit";
import save from "./save";

import icons from "../../resources/icons";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";



const attributes = {
    title: {
        type: "string",
    },
    subtitle: {
        type: "string",
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
        default: 3000,
    },
    transitionSpeed: {
        type: 'number',
        default: 500,
    },
    showDots: {
        type: 'boolean',
        default: false,
    },
    blockId: {
        type: 'string',
    },

    ids: {
        type: 'array',
        items: {
            type: 'number'
        },
        default: []
    },

};

registerBlockType("carkeek-blocks/extended-gallery", {
    apiVersion: 2,
    title: __("Extended Gallery", "carkeek-blocks"),

    description: __(" Flexible block to display a gallery of image as a grid or carousel.", "carkeek-blocks"),

    icon: icons.logogrid,

    supports: {
        reusable: false,
        html: false,
        align: ["wide", "full"],
    },

    category: "widgets",

    keywords: [
        __("logo", "carkeek-blocks"),
        __("gallery", "carkeek-blocks"),
        __("carousel", "carkeek-blocks"),
    ],

    attributes,

    save,

    edit
});
