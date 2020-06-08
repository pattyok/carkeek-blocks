import "./styles.editor.scss";
import edit from "./edit";
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
    displayFeaturedImage: {
        type: "boolean",
        default: true
    },
    displayPostTitle: {
        type: "boolean",
        default: true
    },
    postLayout: {
        type: "string",
        default: "grid"
    },
    excerptLength: {
        type: "number",
        default: 25
    }
};

registerBlockType("carkeek-blocks/custom-archive", {
    title: __("Custom Post Type Archive", "carkeek-blocks"),
    description: __(
        "BLock showing the latest custom post type items.",
        "carkeek-blocks"
    ),
    icon: "book-alt",
    category: "carkeek-category",
    edit: edit,
    attributes: attributes,
    supports: {
        align: ["wide", "full"]
    },
    save() {
        return null;
    }
});
