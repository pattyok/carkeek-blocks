import "./style.editor.css";

import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

import icons from "../../resources/icons";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


const attributes = {
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
    modalLayout: {
        type: 'string',
        default: 'image-large',
    },
    hideImagePreview: {
        type: 'boolean',
        default: false
    },
    hideTitlePreview: {
        type: 'boolean',
        default: false
    },
    mailtoLink: {
        type: 'string'
    }
};

registerBlockType("carkeek-blocks/modal-item", {
    title: __("Modal Item", "carkeek-blocks"),

    description: __(" Block that opens additional content in a modal window. ", "carkeek-blocks"),

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

    edit,

    deprecated
});
