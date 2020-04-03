import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType("carkeek-blocks/latest-posts", {
    title: __("Latest Posts", "carkeek-blocks"),
    description: __("BLock showing the latest posts.", "carkeek-blocks"),
    icon: "admin-post",
    category: "mytheme-category",
    edit: edit,
    save() {
        return null;
    }
});
