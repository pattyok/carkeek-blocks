import "./style.editor.css";
import "./parent";
import icons from "../../resources/icons";
import edit from "./edit";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, RichText, useBlockProps } from "@wordpress/block-editor";
import { cleanForSlug } from "@wordpress/editor";

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

    keywords: [
        __("accordion", "carkeek-blocks"),
        __("expand", "carkeek-blocks"),
        __("collapse", "carkeek-blocks")
    ],

    edit,

    save({ attributes } ) {
        const{ title, content } = attributes;
        const acc_id = 'accordion-' + cleanForSlug(title);
        const panel_id = 'accordion-panel' + cleanForSlug(title);
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }>
                <div className={`ck-accordion-header`}>
                    <button
                        className={`ck-accordion-button`}
                        type="button"
                        id={acc_id}
                        aria-expanded="false"
                        aria-controls={panel_id}
                        >
                            {title}
                    </button>
                </div>
                <div
                    className="ck-accordion-panel"
                    id={panel_id}
                    role="region"
                    aria-labelledby={acc_id}
                    aria-hidden="true">
                    <RichText.Content tagName="div" value={ content } />
                    <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});