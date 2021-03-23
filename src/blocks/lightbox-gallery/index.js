import "./style.editor.css";

import edit from "./edit";
import save from "./save";

import icons from "../../resources/icons";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


const attributes = {
    title: {
        type: "string",
        source: "html",
        selector: ".ck-lightbox-title"
    },
    subtitle: {
        type: "string",
        source: "html",
        selector: ".ck-lightbox-subtitle"
    },
    images: {
        type: 'array',
        default: []
    },
    attachmentCaptions: {
        type: 'array',
        default: [],
    },
    sizeSlug: {
        type: 'string'
    },
    blockId: {
        type: 'string'
    }

};

registerBlockType("carkeek-blocks/lightbox-gallery", {
    apiVersion: 2,
    title: __("Lightbox Gallery", "carkeek-blocks"),

    description: __(" Block that opens additional in a lightbox gallery. ", "carkeek-blocks"),

    icon: icons.modal,

    // parent: ["carkeek-blocks/team-members"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [
        __("modal", "carkeek-blocks"),
        __("image and text", "carkeek-blocks"),
    ],

    attributes,

    save,

    edit
});
