import icons from "../../resources/icons";
import "./style.editor.css";
import edit from "./edit";
import deprecated from "./deprecated";

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
    layoutType: {
        type: 'string',
        default: 'grid'
    },
    allowItemsWrap: {
        type: 'boolean',
        default: false
    },
    itemsPerRow: {
        type: 'number',
        default: 3
    },
    itemsPerRowMobile: {
        type: 'number',
        default: 1
    },
    itemsPerRowTablet: {
        type: 'number',
        default: 2
    },
    alignInnerBlocks: {
        type: 'string',
        default: 'left'
    },
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

    deprecated,

    save({ attributes } ) {
        const { allowItemsWrap, itemsPerRow, layoutType, itemsPerRowMobile, itemsPerRowTablet, alignInnerBlocks } = attributes
        const blockProps = useBlockProps.save();

        return (
            <div { ...blockProps }
            className={ classnames(blockProps.className, {
                    "ck-columns": 'true',
                    [`ck-columns-layout-${layoutType}`]: layoutType == 'grid',
                    [`ck-columns-wrap-${allowItemsWrap}`]: layoutType == 'flex',
                    [`ck-columns-align-${alignInnerBlocks}`]: layoutType == 'flex',
                    [`has-${itemsPerRow}-columns`]: alignInnerBlocks !== 'stretch' || layoutType == 'grid',
                    [`has-${itemsPerRowMobile}-columns-mobile`]: true,
                    [`has-${itemsPerRowTablet}-columns-tablet`]: true,
                }) }
                >
                <div className={ 'ck-columns__wrap' }>
                    <InnerBlocks.Content/>
                </div>
            </div>
        );
    }
});