import classnames from "classnames";
import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

const deprecated = [
    {
        attributes: {
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
            },
            rowDirection: {
                type: 'string',
                default: 'horizontal'
            }
        },
        save({ attributes } ) {
            const { allowItemsWrap, itemsPerRow, alignInnerBlocks,rowDirection } = attributes
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps }
            className={ classnames(blockProps.className, {
                    "ck-columns": 'true',
                    [`ck-columns-wrap-${allowItemsWrap}`]: true,
                    [`ck-columns-align-${alignInnerBlocks}`]: true,
                    [`has-${itemsPerRow}-columns`]: 'true',
                    [`direction-${rowDirection}`]: 'true',
                }) }
                >
                <div className={ 'ck-columns__wrap' }>
                    <InnerBlocks.Content/>
                </div>
            </div>
        );
        }
    },
    {
        attributes: {
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
        },
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
    }
]

export default deprecated;