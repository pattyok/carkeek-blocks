import "./editor.scss";
import "./style.scss";
import icons from "./icons";
import edit from "./edit";
import deprecated from "./deprecated";

import classnames from "classnames";
import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import metadata from "./block.json";

registerBlockType(metadata, {

    icon: {
        src: icons.columns,
    },

    keywords: [
        __("columns", "carkeek-blocks"),
        __("horizontal", "carkeek-blocks"),
        __("layout", "carkeek-blocks")
    ],

    edit,

    deprecated,

    save({ attributes } ) {
        const { allowItemsWrap, itemsPerRow, layoutType, itemsPerRowMobile, itemsPerRowTablet, alignInnerBlocks, customGap, columnGap, rowGap } = attributes
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
					[`ck-columns-col-gap-${columnGap}`]: customGap,
					[`ck-columns-row-gap-${rowGap}`]: customGap,
                }) }
                >
                <div className={ 'ck-columns__wrap' }>
                    <InnerBlocks.Content/>
                </div>
            </div>
        );
    }
});
