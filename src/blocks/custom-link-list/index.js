import "./styles.editor.css";
import edit from "./edit";
import icons from '../../resources/icons';
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const attributes = {
    sortBy: {
        type: "string",
        default: "date"
    },
    order: {
        type: "string",
        default: "ASC"
    },
    groupByChild: {
        type: "boolean",
        default: true,
    },
    makeCollapsible: {
        type: "boolean",
        default: true,
    },
    listSelected: {
        type: "string"
    },
    hideIfEmpty: {
        type: "boolean",
        default: true
    },
    emptyMessage: {
        type: "string"
    },
    headline: {
        type: "string"
    },
    headlineLevel: {
        type: "number",
        default: 2
    },
    primaryContent: {
        type: "string",
        default: "links"
    }
};

registerBlockType("carkeek-blocks/custom-link-list", {
    title: __("Custom Link List", "carkeek-blocks"),
    description: __(
        "Block displaying a list of links.",
        "carkeek-blocks"
    ),
    icon: {
        src: icons.linkList,
    },
    category: "widgets",
    edit: edit,
    attributes: attributes,
    supports: {
        anchor: true,
        html: false
    },
    keywords: [
        __("mini-accordion", "carkeek-blocks"),
        __("link", "carkeek-blocks"),
        __("list", "carkeek-blocks"),
        __("accordion", "carkeek-blocks")
    ],
    save() {
        return null;
    }
});

