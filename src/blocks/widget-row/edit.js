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
import { useEffect } from "@wordpress/element";


export default function CollapseSectionEdit( props ) {
    const { attributes, setAttributes, clientId } = props;
    const { innerBlockType,  layoutType, allowedBlocks, allowItemsWrap, itemsToShow, itemsPerRow, itemsPerRowMobile, itemsPerRowTablet, alignInnerBlocks } = attributes;

/* for existing blocks we set to flex as that was previously the default */
    if (!layoutType) {
        setAttributes( {
            layoutType : 'flex'
        } );
    }

    if (!itemsPerRowTablet) {
        setAttributes( {
            itemsPerRowTablet : itemsPerRow > 3 ? 3 : itemsPerRow
        } );
    }
    if (!itemsPerRowMobile) {
        setAttributes( {
            itemsPerRowMobile : 1
        } );
    }
    if (!itemsToShow) {
        setAttributes( {
            itemsToShow : itemsPerRow
        } );
    }
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
        if ( !allowItemsWrap && innerBlockCount.length >= itemsToShow) {
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

    useEffect( () => {

        if ('grid' == layoutType) {
            setAttributes( {
                itemsPerRow : innerBlockCount.length
            } );
        }
    }, [layoutType, innerBlockCount]);

    return(
        <>
        <InspectorControls>
                <PanelBody title={__("Layout Settings", "carkeek-blocks")}>
                    {layoutType == 'flex' &&
                    <>
                    <ToggleControl
                        label={__("Allow Items to Wrap")}
                        checked={allowItemsWrap}
                        onChange={value =>
                            setAttributes({ allowItemsWrap: value })
                        }
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
                    </>
                    }
                    { (allowItemsWrap || alignInnerBlocks !== 'stretch') && (
                        <>
                        <RangeControl
                            label={__("Items Per Row", "carkeek-blocks")}
                            value={ itemsPerRow }
                            help={allowItemsWrap ? "" : "This will fix the size of each item"}
                            onChange={ ( itemsPerRow ) => setAttributes( { itemsPerRow } ) }
                            min={1}
                            max={allowItemsWrap ? 6 : itemsToShow }
                        />

                        </>

                    )}
                </PanelBody>
                <PanelBody title={__("Responsive Settings", "carkeek-blocks")}>
                <RangeControl
                            label={__("Items Per Row Mobile", "carkeek-blocks")}
                            value={ itemsPerRowMobile }
                            onChange={ ( itemsPerRowMobile ) => setAttributes( { itemsPerRowMobile } ) }
                            min={1}
                            max={6}
                        />
                        <RangeControl
                            label={__("Items Per Row Tablet", "carkeek-blocks")}
                            value={ itemsPerRowTablet }
                            onChange={ ( itemsPerRowTablet ) => setAttributes( { itemsPerRowTablet } ) }
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
                <RadioControl
                        label="Layout Type"
                        selected={layoutType}
                        help={__('If trailing items should align center choose flex, otherwise grid is preferred')}
                        options={ [
                            { label: 'Grid', value: 'grid' },
                            { label: 'Flex-flow', value: 'flex' },
                        ] }
                        onChange={ (value) =>
                            setAttributes({ layoutType: value })
                        }
                    />
                { !allowItemsWrap &&
                    <RangeControl
                        label={__("Limit Items", "carkeek-blocks")}
                        value={ itemsToShow }
                        help="If the design dictates a maximum number of items, set that here."
                        onChange={ ( itemsToShow ) => setAttributes( { itemsToShow } ) }
                        min={1}
                        max={6}
                    />
                    }
            </InspectorAdvancedControls>
        <div
            { ...blockProps }
            className={ classnames( blockProps.className, {
                "ck-columns": 'true',
                    [`ck-columns-wrap-${allowItemsWrap}`]: true,
                    [`ck-columns-align-${alignInnerBlocks}`]: true,
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