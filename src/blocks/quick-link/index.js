import "./style.editor.css";
import icons from '../../resources/icons';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { InnerBlocks } from "@wordpress/block-editor";

const attributes = {
    linkTitle: {
        type: "string"
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    },
};

registerBlockType("carkeek-blocks/quick-link", {
    apiVersion: 2,

    title: __("Quick Link", "carkeek-blocks"),

    description: __(
        "Quick link includes an icon and a link to a page.",
        "carkeek-blocks"
    ),

    icon: icons.landingPage,

    parent: ["carkeek-blocks/quick-link"],

    supports: {
        reusable: false,
        html: false
    },

    category: "widgets",

    keywords: [__("link", "carkeek-blocks"), __("quick", "carkeek-blocks"), __("i would like to", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    attributes,

    save: ({ attributes, className }) => {
        const {
            linkTitle,
            linkUrl,
        } = attributes;

        return (
            <div className={className}>
                    <a
                        className={
                            "ck-quick-link-icon-link"
                        }
                        href={linkUrl}
                    ><InnerBlocks.Content /></a>
                    <a
                        className={
                            "ck-quick-link"
                        }
                        href={linkUrl}
                    >
                            {linkTitle }
                    </a>
            </div>
        );
    },

    edit
});