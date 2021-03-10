import classnames from "classnames";
import { sortBy } from "lodash";

import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
    InspectorAdvancedControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl, RangeControl } from "@wordpress/components";
import { getBlockTypes, createBlock, getBlockType } from "@wordpress/blocks";
import { dispatch, useSelect } from "@wordpress/data";


export default function CollapseSectionEdit( props ) {
    const { attributes, setAttributes, clientId } = props;
    const { innerBlockType, allowedBlocks, allowItemsWrap, itemsPerRow } = attributes;

    const availBlocks = getBlockTypes();
    let myAllowedBlocks = allowedBlocks;
    let addLabel = __('a Block');
    if (innerBlockType) {
        myAllowedBlocks = [ innerBlockType ];
        const blockObject = getBlockType( innerBlockType );
        blockObject ? addLabel = blockObject.title : addLabel = __('a Block');
    } else  {
     myAllowedBlocks = [ ];
    }
    let blockOptions = availBlocks.map((item) => {
        return (
            { label: item.title, value: item.name}
        )
    });
    blockOptions = sortBy(blockOptions, ['label']);
    blockOptions.unshift( { label:'Select a Block', value: ''} );

    let blockProps = useBlockProps();

    /* if we've set a row limit and not allowed wrapping we hide the appender
        after the limit - sneaky way to obfuscate adding extra items when the design dictates a  limit
    */
    const innerBlockCount = useSelect( ( select ) => select( 'core/block-editor' ).getBlock( clientId ).innerBlocks )
    const appenderToUse = () => {
        if ( !allowItemsWrap && innerBlockCount.length >= itemsPerRow) {
            return false;
        } else {
            return (
                <button className="ck-custom-appender" onClick={() => {
                    dispatch('core/block-editor').insertBlocks(createBlock( innerBlockType ), 9999, clientId);
                }}>
                   { __('Add ') } { addLabel }
                </button>
            )
        }
    }

    return(
        <>
        <InspectorControls>
                <PanelBody title={__("Layout Settings", "carkeek-blocks")}>
                    <ToggleControl
                        label={__("Allow Items to Wrap")}
                        checked={allowItemsWrap}
                        help="When items are allowed to wrap we fix the width of each item"
                        onChange={value =>
                            setAttributes({ allowItemsWrap: value })
                        }
                    />
                    <RangeControl
                        label={__("Items per Row", "carkeek-blocks")}
                        value={ itemsPerRow }
                        onChange={ ( itemsPerRow ) => setAttributes( { itemsPerRow } ) }
                        min={1}
                        max={6}
                    />
                </PanelBody>
            </InspectorControls>
            <InspectorAdvancedControls>
                <SelectControl
                    label="Restrict to Block"
                    value={innerBlockType}
                    options={ blockOptions }
                    onChange={ (value) =>
                        setAttributes({ innerBlockType: value })
                    }
                />
            </InspectorAdvancedControls>
        <div
            { ...blockProps }
            className={ classnames( blockProps.className, {
                "ck-columns": 'true',
                "ck-columns-stretch": !allowItemsWrap,
                [`has-${itemsPerRow}-columns`]: allowItemsWrap,
            })}
            >

            {innerBlockType ?
                <InnerBlocks
                allowedBlocks = { myAllowedBlocks }
                orientation="horizontal"
                renderAppender={ () => appenderToUse() }
            />
            :
                <InnerBlocks
                orientation="horizontal"
                />
            }

        </div>
        </>
    )
}