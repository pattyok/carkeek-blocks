import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

const attributes = {
    columns: {
        type: "number",
        default: 2
    }
};

registerBlockType("carkeek-blocks/link-tiles", {
    title: __("Link Tiles", "carkeek-blocks"),

    description: __(
        "Block showing a collection of linked tiles",
        "carkeek-blocks"
    ),

    icon: "grid-view",

    category: "widgets",

    supports: {
        html: false,
        align: ["wide", "full"]
    },

    keywords: [
        __("tiles", "carkeek-blocks"),
        __("columns", "carkeek-blocks"),
        __("links", "carkeek-blocks")
    ],

    attributes,

    edit({ className }) {
        return (
            <div className={`${className} wp-block-columns`}>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/link-tile"]}
                    template={[
                        ["carkeek-blocks/link-tile"],
                        ["carkeek-blocks/link-tile"]
                    ]}
                />
            </div>
        );
    },

    save() {
        return (
            <div className={"wp-block-columns"}>
                <InnerBlocks.Content />
            </div>
        );
    }
});
