import "./style.editor.css";
import "./parent";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import edit from "./edit";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";

const attributes = {
    headline: {
        type: "string"
    },
};

registerBlockType("carkeek-blocks/contextual-highlight-text", {
    apiVersion: 2,

    title: __("Contextual Highlight Text", "carkeek-blocks"),

    description: __(
        "  ",
        "carkeek-blocks"
    ),

    icon: "admin-links",

    parent: ["carkeek-blocks/contextual-highlight"],
    supports: {
        color: {
            background: true,
            text: true,
        },
        fontSize: true,
        inserter: false,
        spacing: {
            padding: true
        }
    },

    category: "carkeek-category",

    keywords: [__("sidebar", "carkeek-blocks"), __("quick", "carkeek-blocks"), __("i would like to", "carkeek-blocks"), __("icon", "carkeek-blocks")],

    attributes,

    save: ({ attributes }) => {
        const {
            headline
        } = attributes;
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }>
                <RichText.Content tagName="div" className={'highlight-headline'} value={ headline } />
                <InnerBlocks.Content />
            </div>
        );
    },

    edit
});
