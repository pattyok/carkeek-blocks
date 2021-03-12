import icons from "../../resources/icons";
import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { PanelBody, RadioControl, CheckboxControl } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";

const attributes = {
    headerStyle: {
        type: 'string',
        default: 'h3'
    },
    openMultiple: {
        type: 'boolean',
        default: true
    },
}

registerBlockType("carkeek-blocks/accordion", {
    apiVersion: 2,
    title: __("Accordion", "carkeek-blocks"),

    description: __(
        "Make an accordion of inner blocks",
        "carkeek-blocks"
    ),

    providesContext: {
        'carkeek-blocks/headerStyle': 'headerStyle',
    },

    icon: {
        src: icons.accordion,
    },

    category: "widgets",

    supports: {
        html: false,
        align: ["wide", "full"],
        anchor: true
    },
    attributes,

    keywords: [
        __("accordion", "carkeek-blocks"),
        __("expand", "carkeek-blocks"),
        __("collapse", "carkeek-blocks")
    ],

    edit({ attributes, className, setAttributes, clientId }) {
        const { headerStyle, openMultiple } = attributes;

        const updateHeaderStyle = function( value ) {
            setAttributes({ headerStyle: value });

            //pass value to children
            var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
            children.forEach(function(child){
                dispatch('core/block-editor').updateBlockAttributes(child.clientId, {inheritedHeaderStyle: value})
            });
        }


        // Update the child block's attributes

        return (
            <div className={`${className}`}>
                <InspectorControls>
                    <PanelBody>
                        <CheckboxControl
                            className="carkeek-accordion-style-label"
                            label="Open Multiple at Once"
                            checked={ openMultiple }
                            onChange={value =>
                                setAttributes({ openMultiple: value })
                            }
                            help={__(
                                "If selected, multiple panels can be opened at once.",
                                "carkeek-blocks"
                            )}
                        />

                        <RadioControl
                            label="Section Header Style"
                            selected = {headerStyle}
                            options = { [
                                { label: 'h2', value: 'h2' },
                                { label: 'h3', value: 'h3' },
                                { label: 'h4', value: 'h4' },
                                { label: 'h5', value: 'h5' },
                                { label: 'h6', value: 'h6' },
                            ]}
                            onChange= {updateHeaderStyle}
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks
                    className="ck-accordion-item"
                    allowedBlocks={["carkeek-blocks/accordion-panel"]}
                    template={[['carkeek-blocks/accordion-panel', { inheritedHeaderStyle: headerStyle }]]}
                    renderAppender={ () => (
                        <button className="ck-custom-appender"onClick={() => {
							dispatch('core/block-editor').insertBlocks(createBlock('carkeek-blocks/accordion-panel', { inheritedHeaderStyle: headerStyle }), 9999, clientId);
						}}>
							{__('Add Accordion Section')}
                        </button>
                    )}

                />
            </div>
        );
    },

    save({ attributes } ) {
        const{ openMultiple } = attributes;
        const blockProps = useBlockProps.save();
        return (
            <div { ...blockProps } >
                <div data-aria-accordion data-transition data-multi={openMultiple}>
                <InnerBlocks.Content />
                </div>
            </div>
        );
    }
});