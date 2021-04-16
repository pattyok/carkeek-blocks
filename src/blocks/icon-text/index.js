import "./style.editor.css";
import icons from '../../resources/icons';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { InnerBlocks, useBlockProps, RichText } from "@wordpress/block-editor";

const attributes = {
    richText: {
        type: "string",
    },
    linkUrl: {
        type: "string",
        source: "attribute",
        selector: "a",
        attribute: "href"
    },
};

registerBlockType("carkeek-blocks/icon-text", {
    apiVersion: 2,

    title: __("Icon and Text", "carkeek-blocks"),

    description: __(
        "Includes an icon, formattable text and an optional link to a page.",
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

    save: ({ attributes }) => {
        const {
            richText,
            linkUrl,
        } = attributes;

        const blockProps = useBlockProps.save();

        const iconEl = linkUrl ? <a className={"ck-quick-link-icon-link"} href={linkUrl}><InnerBlocks.Content /></a> : <InnerBlocks.Content />

        return (
            <div {...blockProps} >
                   {iconEl}
                    <RichText.Content value={ richText } />
            </div>
        );
    },

    edit
});
