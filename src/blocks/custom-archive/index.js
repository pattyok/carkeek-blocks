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
    imageOrientation: {
        type: "string",
        default: 'landscape',
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
    sortBy: {
        type: "string",
        default: "date"
    },
    sortByMeta: {
        type: "string",
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
    groupListings: {
        type: "boolean",
        default: false
    },
    groupTaxSelected: {
        type: "string"
    },
    groupHideParents: {
        type: "boolean",
        default: false
    },
    groupHideEmpty: {
        type: "boolean",
        default: false
    },
    taxonomySelected: {
        type: "string"
    },
    taxTermsSelected: {
        type: "string"
    },
    taxQueryType: {
        type: "string",
        default: "AND"
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
    showPagination: {
        type: "boolean",
        default: false,
    },
    showTerms: {
        type: "boolean",
        default: false,
    },
    publishDateLocation: {
        type: "string",
        default: "below",
    },
    showLearnMoreLink: {
        type: "boolean",
        default: false,
    },
    learnMoreLinkTitle: {
        type: "string",
        default: 'Learn More',
    },
    imageSize: {
        type: "string",
        default: 'default',
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
    category: "carkeek-category",
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
