import "./styles.editor.css";
import edit from "./edit";
import icons from '../../resources/icons';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

const attributes = {
    numberOfPosts: {
        type: "number",
        default: 3
    },
    displayField1: {
        type: "string",
    },
    displayField2: {
        type: "string",
    },
    displayField3: {
        type: "string",
    },
    displayField4: {
        type: "string",
    },
    displayFeaturedImage: {
        type: "boolean",
        default: true,
    },
    postLayout: {
        type: "string",
        default: "grid"
    },
    columns: {
        type: "number",
        default: 3
    },
    excerptLength: {
        type: "number",
        default: 25
    },
    filterByCategory: {
        type: "boolean",
        default: false
    },
    filterByTag: {
        type: "boolean",
        default: false
    },
    taxonomySelected: {
        type: "string"
    },
    catTermsSelected: {
        type: "string"
    },
    catTagsSelected: {
        type: "string"
    },
    hideIfEmpty: {
        type: "boolean",
        default: true
    },
    emptyMessage: {
        type: "string"
    },
    featuredEvents: {
        type: "boolean",
        default: false
    }
};

registerBlockType("carkeek-blocks/events-archive", {
    apiVersion: 2,
    title: __("Event Archive", "carkeek-blocks"),
    description: __(
        "Block showing upcoming events.",
        "carkeek-blocks"
    ),
    icon: icons.calendar,
    category: "widgets",
    edit: edit,
    attributes: attributes,
    supports: {
        align: ["wide", "full", "left", "center", "right"],
        alignWide: true,
        anchor: true,
        spacing: true
    },
    save() {
        return null;
    }
});
