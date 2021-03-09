import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks } from "@wordpress/block-editor";

import icons from '../../resources/icons';



registerBlockType("carkeek-blocks/contextual-highlight", {
    title: __("Contextual Highlight", "carkeek-blocks"),

    description: __(
        "Block showing a list of four quick-links",
        "carkeek-blocks"
    ),

    icon: icons.highlight,

    category: "widgets",

    supports: {
        html: false,
    },

    keywords: [
        __("links", "carkeek-blocks"),
        __("columns", "carkeek-blocks"),
        __("quick", "carkeek-blocks")
    ],

    edit({ className }) {
        return (
            <div className={ className }>
                <InnerBlocks
                    allowedBlocks={["carkeek-blocks/icon", "carkeek-blocks/contextual-highlight-text",  "carkeek-blocks/fixed-image"]}
                    template={[
                        ["carkeek-blocks/icon", {className: 'is-style-green-background'}],
                        ["carkeek-blocks/contextual-highlight-text"],
                    ]}
                    templateLock={false}
                    orientation="vertical"
                />
            </div>
        );
    },

    save() {
        return (
            <div>
                <InnerBlocks.Content />
            </div>
        );
    }
});
