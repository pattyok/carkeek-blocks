import classnames from "classnames";
import { sortBy } from "lodash";

import { __ } from "@wordpress/i18n";
import {
    InspectorControls,
    InnerBlocks,
    useBlockProps,
    InspectorAdvancedControls } from "@wordpress/block-editor";
import { PanelBody, SelectControl, ToggleControl, RangeControl, RadioControl } from "@wordpress/components";
import { getBlockTypes, createBlock, getBlockType } from "@wordpress/blocks";
import { dispatch, useSelect } from "@wordpress/data";


export default function CollapseSectionEdit( props ) {
    const { attributes, setAttributes, clientId } = props;
    const { innerBlockType, allowedBlocks, allowItemsWrap, itemsPerRow, alignInnerBlocks, rowDirection } = attributes;

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
                        label={__("Columns", "carkeek-blocks")}
                        value={ itemsPerRow }
                        onChange={ ( itemsPerRow ) => setAttributes( { itemsPerRow } ) }
                        min={1}
                        max={6}
                    />
                    <RadioControl
                        label="Align inner blocks"
                        selected={alignInnerBlocks}
                        help={__('If the number of inner blocks does not complete a row, how should they be aligned?')}
                        options={ [
                            { label: 'Left', value: 'left' },
                            { label: 'Right', value: 'right' },
                            { label: 'Center', value: 'center' },
                            { label: 'Stretch to fit', value: 'stretch' },
                        ] }
                        onChange={ (value) =>
                            setAttributes({ alignInnerBlocks: value })
                        }
                    />
                    <RadioControl
                        label="Widget Direction"
                        selected={rowDirection}
                        help={__('Set the direction to vertical to get a masonry layout')}
                        options={ [
                            { label: 'Horizontal', value: 'horizontal' },
                            { label: 'Vertical', value: 'vertical' },
                        ] }
                        onChange={ (value) =>
                            setAttributes({ rowDirection: value })
                        }
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
                    [`ck-columns-wrap-${allowItemsWrap}`]: true,
                    [`ck-columns-align-${alignInnerBlocks}`]: true,
                    [`has-${itemsPerRow}-columns`]: 'true',
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