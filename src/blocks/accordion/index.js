import "./style.editor.css";
import "./parent";
import icons from "../../resources/icons";
import edit from "./edit";
import deprecated from "./deprecated";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText } from "@wordpress/block-editor";

const attributes = {
    title: {
        type: "string"
    },
    inheritedHeaderStyle: {
        type: "string"
    },
    content: {
        type: "string"
    }
}

registerBlockType("carkeek-blocks/accordion-panel", {
    apiVersion: 2,

    title: __("Accordion Panel", "carkeek-blocks"),

    description: __(
        "Build an Accordion with inner blocks",
        "carkeek-blocks"
    ),

    icon: {
        src: icons.dropdown,
    },

    category: "carkeek-category",

    attributes,

    parent: ["carkeek-blocks/accordion"],

    usesContext: ['carkeek-blocks/headerStyle'],

    keywords: [
        __("accordion", "carkeek-blocks"),
        __("expand", "carkeek-blocks"),
        __("collapse", "carkeek-blocks")
    ],

    edit,

    deprecated,

    save({ attributes } ) {
        const{ title, content, inheritedHeaderStyle } = attributes;

        const HeaderEl = `${inheritedHeaderStyle}`;
        return (
            <>
                <HeaderEl data-aria-accordion-heading className='ck-accordion-header'>
                    <RichText.Content value={ title } />
                </HeaderEl>
                <div data-aria-accordion-panel className='ck-accordion-panel'>
                    <RichText.Content value={ content } />
                    <InnerBlocks.Content />
                </div>
            </>
        );
    }
});