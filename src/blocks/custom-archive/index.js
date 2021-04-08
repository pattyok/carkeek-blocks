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
    postTypeSelected: {
        type: "string"
    },
    displayPostExcerpt: {
        type: "boolean",
        default: true,
    },
    displayFeaturedImage: {
        type: "boolean",
        default: true,
    },
    openAsModal: {
        type: "boolean",
        default: false,
    },
    postLayout: {
        type: "string",
        default: "grid"
    },
    columns: {
        type: "number",
        default: 3
    },
    sortBy: {
        type: "string",
        default: "date"
    },
    order: {
        type: "string",
        default: "ASC"
    },
    excerptLength: {
        type: "number",
        default: 25
    },
    filterByTaxonomy: {
        type: "boolean",
        default: false
    },
    taxonomySelected: {
        type: "string"
    },
    taxTermsSelected: {
        type: "string"
    },
    hideIfEmpty: {
        type: "boolean",
        default: true
    },
    emptyMessage: {
        type: "string"
    },
    useHeadingTitle: {
        type: "boolean",
        default: false
    },
    headlineLevel: {
        type: "number",
        default: 2
    },
    showPublishDate: {
        type: "boolean",
        default: false,
    },
    publishDateLocation: {
        type: "string",
        default: "below",
    },
    blockId: {
        type: "string"
    }
};

registerBlockType("carkeek-blocks/custom-archive", {
    apiVersion: 2,
    title: __("Custom Post Type Archive", "carkeek-blocks"),
    description: __(
        "Block showing the latest items by post type.",
        "carkeek-blocks"
    ),
    icon: icons.layout,
    category: "widgets",
    edit: edit,
    attributes: attributes,
    supports: {
        align: ["wide", "full", "left", "center", "right"],
        alignWide: true,
        anchor: false,
        spacing: true
    },
    save() {
        return null;
    }
});
