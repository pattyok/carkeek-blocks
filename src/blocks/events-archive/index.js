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
    hideTitle: {
        type: "boolean",
        default: false
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
    dateFormat: {
        type: "string",
        default: 'F j'
    },
    timeFormat: {
        type: "string",
        default: 'g:i a'
    },
    showEndDate: {
        type: "string",
        default: 'show_end_date'
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
    columnsMobile: {
        type: "number",
        default: 1
    },
    columnsTablet: {
        type: "number",
        default: 3
    },
    limitItemsMobile: {
        type: "boolean",
        default: false,
    },
    itemsMobile: {
        type: "number",
        default: 1
    },
    itemsTablet: {
        type: "number",
        default: 3
    },
    displayPostExcerpt: {
        type: "boolean",
        default: false,
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
    filterByVenue: {
        type: "boolean",
        default: false
    },
    prioritizeRelated: {
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
    venueSelected: {
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
    },
    showPagination: {
        type: "boolean",
        default: false,
    },
    includePastEvents: {
        type: "boolean",
        default: false,
    },
    sortOrder: {
        type: "string",
        default: "ASC"
    },
    onlyPastEvents: {
        type: "boolean",
        default: false,
    },
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
        anchor: false,
        spacing: true
    },
    save() {
        return null;
    }
});
