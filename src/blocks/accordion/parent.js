import icons from "../../resources/icons";
import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import { InnerBlocks, InspectorControls } from "@wordpress/block-editor";
import { PanelBody, RadioControl, CheckboxControl } from "@wordpress/components";
import { dispatch } from "@wordpress/data";

const attributes = {
    headerStyle: {
        type: 'string',
        default: 'h3'
    },
    accordionStyle: {
        type: 'boolean',
        default: false
    },
}

registerBlockType("carkeek-blocks/accordion", {
    title: __("Accordion", "carkeek-blocks"),

    description: __(
        "Make an accordion of inner blocks",
        "carkeek-blocks"
    ),

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
        const { headerStyle, accordionStyle } = attributes;
        return (
            <div className={`${className}`}>
                <InspectorControls>
                    <PanelBody>
                        <CheckboxControl
                            className="carkeek-accordion-style-label"
                            label="Use Accordion Style"
                            checked={ accordionStyle }
                            onChange={value =>
                                setAttributes({ accordionStyle: value })
                            }
                            help={
                                accordionStyle
                                    ? __(
                                        "One section will be expanded at a time",
                                        "carkeek-blocks"
                                    )
                                    : __(
                                        "If selected only one section will be expanded at a time",
                                        "carkeek-blocks"
                                    )
                            }
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
                            onChange={value =>
                                setAttributes({ headerStyle: value })
                            }
                        />
                    </PanelBody>
                </InspectorControls>
                <InnerBlocks
                    className="ck-accordion-item"
                    allowedBlocks={["carkeek-blocks/accordion-panel"]}
                    template={[['carkeek-blocks/accordion-panel']]}
                    renderAppender={ () => (
                        <button className="ck-custom-appender"onClick={() => {
							dispatch('core/block-editor').insertBlocks(createBlock('carkeek-blocks/accordion-panel'), 9999, clientId);
						}}>
							{__('Add Accordion Section')}
                        </button>
                    )}

                />
            </div>
        );
    },

    save({ attributes } ) {
        const{ accordionStyle, headerStyle} = attributes;
        const blockStyle = 'innerblock-headline-style-' + headerStyle;
        return (
            <div data-accordion={accordionStyle} className={ blockStyle }>
                <InnerBlocks.Content />
            </div>
        );
    }
});