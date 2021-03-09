import edit from "./edit";
import save from "./save";
import "./style.editor.css";
import icons from "../../resources/icons";

import "./style.editor.css";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";


const attributes = {
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

};

registerBlockType("carkeek-blocks/fixed-image", {
    apiVersion: 2,
    title: __("Fixed Size Image", "carkeek-blocks"),

    description: __(
        "Image block with a Focal Point Picker.",
        "carkeek-blocks"
    ),

    icon: icons.image,

    supports: {
        html: false,
        align: ['wide', 'full'],
        fontSize: true,
        color: {
            background:true,
            gradients: false,
            text: true
        }
    },

    category: "widgets",

    keywords: [__("image", "carkeek-blocks"), __("crop", "carkeek-blocks"), __("highlight", "carkeek-blocks")],

    attributes,

    save,
    edit
});
