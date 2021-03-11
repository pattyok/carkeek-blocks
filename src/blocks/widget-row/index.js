import icons from "../../resources/icons";
import "./style.editor.css";
import edit from "./edit";

import classnames from "classnames";

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const attributes = {
    innerBlockType: {
        type: 'string'
    },
    allowedBlocks: {
        type: 'array'
    },
    blocksTemplate: {
        type: 'array'
    },
    allowItemsWrap: {
        type: 'boolean',
        default: false
    },
    itemsPerRow: {
        type: 'number',
        default: 3
    },
    alignInnerBlocks: {
        type: 'string',
        default: 'left'
    }
}

registerBlockType("carkeek-blocks/widget-row", {
    apiVersion: 2,
    title: __("Widget Row", "carkeek-blocks"),

    description: __(
        "Layout inner blocks, equally distributed in columns",
        "carkeek-blocks"
    ),

    icon: {
        src: icons.columns,
    },

    category: "carkeek-category",

    supports: {
        anchor: true,
        html: false,
        align: ["wide", "full", "left", "center", "right"]
    },
    attributes,

    keywords: [
        __("columns", "carkeek-blocks"),
        __("horizontal", "carkeek-blocks"),
        __("layout", "carkeek-blocks")
    ],

    edit,

    save({ attributes } ) {
        const { allowItemsWrap, itemsPerRow, alignInnerBlocks } = attributes
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }
            className={ classnames(blockProps.className, {
                    "ck-columns": 'true',
                    [`ck-columns-wrap-${allowItemsWrap}`]: true,
                    [`ck-columns-align-${alignInnerBlocks}`]: true,
                    [`has-${itemsPerRow}-columns`]: 'true',
                }) }
                >
                <div className={ 'ck-columns__wrap' }>
                    <InnerBlocks.Content/>
                </div>
            </div>
        );
    }
});