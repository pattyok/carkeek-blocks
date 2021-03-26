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
        type: 'string',
    },
    ids: {
        type: 'array',
        items: {
            type: 'number'
        },
        default: []
    }

};

registerBlockType("carkeek-blocks/lightbox-gallery", {
    apiVersion: 2,
    title: __("Lightbox Gallery", "carkeek-blocks"),

    description: __(" Block that opens additional images in a lightbox gallery. ", "carkeek-blocks"),

    icon: icons.lightbox,

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [
        __("lightbox", "carkeek-blocks"),
        __("gallery", "carkeek-blocks"),
    ],

    attributes,

    save,

    edit
});
