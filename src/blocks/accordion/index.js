import "./style.editor.css";
import "./parent";
import icons from "../../resources/icons";
import edit from "./edit";
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

    category: "widgets",

    attributes,

    parent: ["carkeek-blocks/accordion"],

    usesContext: ['carkeek-blocks/headerStyle'],

    keywords: [
        __("accordion", "carkeek-blocks"),
        __("expand", "carkeek-blocks"),
        __("collapse", "carkeek-blocks")
    ],

    edit,

    save({ attributes } ) {
        const{ title, content, inheritedHeaderStyle } = attributes;

        const HeaderEl = `${inheritedHeaderStyle}`;
        return (
            <>
                <HeaderEl data-aria-accordion-heading className='ck-accordion-header'>
                            {title}
                </HeaderEl>
                <div data-aria-accordion-panel className='ck-accordion-panel'>
                    <RichText.Content tagName="div" value={ content } />
                    <InnerBlocks.Content />
                </div>
            </>
        );
    }
});