/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { Fragment } from '@wordpress/element';
import { createHigherOrderComponent } from '@wordpress/compose';
import { 
    InspectorControls 
} from '@wordpress/block-editor';
import { 
    PanelBody, 
    RangeControl 
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';

/**
 * Add columns attribute to list blocks
 */
function addColumnsAttribute(settings, name) {
    if (name !== 'core/list') {
        return settings;
    }

    return {
        ...settings,
        attributes: {
            ...settings.attributes,
            columns: {
                type: 'number',
                default: 1,
            },
        },
    };
}

/**
 * Add columns control to list block inspector
 */
const withColumnsControl = createHigherOrderComponent((BlockEdit) => {
    return (props) => {
        const { attributes, setAttributes, name } = props;
        
        if (name !== 'core/list') {
            return <BlockEdit {...props} />;
        }

        const { columns } = attributes;

        return (
            <Fragment>
                <BlockEdit {...props} />
                <InspectorControls>
                    <PanelBody 
                        title={__('Column Settings', 'carkeek-blocks')}
                        initialOpen={false}
                    >
                        <RangeControl
                            label={__('Number of Columns', 'carkeek-blocks')}
                            value={columns}
                            onChange={(value) => setAttributes({ columns: value })}
                            min={1}
                            max={6}
                            step={1}
                            help={__('Set the number of columns for the list items.', 'carkeek-blocks')}
                        />
                    </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withColumnsControl');

/**
 * Add column classes to list block wrapper
 */
function addColumnsClasses(extraProps, blockType, attributes) {
    if (blockType.name !== 'core/list') {
        return extraProps;
    }

    const { columns } = attributes;

    if (columns > 1) {
        return {
            ...extraProps,
            className: `${extraProps.className || ''} has-${columns}-columns`.trim(),
        };
    }

    return extraProps;
}

/**
 * Register the filters
 */
addFilter(
    'blocks.registerBlockType',
    'carkeek-blocks/list-columns-attribute',
    addColumnsAttribute
);

addFilter(
    'editor.BlockEdit',
    'carkeek-blocks/list-columns-control',
    withColumnsControl
);

addFilter(
    'blocks.getSaveContent.extraProps',
    'carkeek-blocks/list-columns-classes',
    addColumnsClasses
);
