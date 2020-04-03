var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var el = wp.element.createElement;

registerBlockType("carkeek-blocks/firstblock", {
    title: __("First Block", "carkeek-blocks"),
    description: __("Our first block", "carkeek-blocks"),
    category: "layout",
    icon: "admin-network",
    keywords: [__("photo", "carkeek-blocks"), __("image", "carkeek-blocks")],
    edit: function() {
        return el("p", null, "Editor");
    },
    save: function() {
        return el("p", null, "Saved content");
    }
});
