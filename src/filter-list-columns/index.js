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
                type: 'array',
                default: [1, 1, 1],
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
							label={__('Mobile Columns', 'carkeek-blocks')}
							value={columns[0]}
							onChange={(value) => setAttributes({ columns: [value, columns[1], columns[2]] })}
							min={1}
							max={3}
							step={1}
							help={__('Number of columns on mobile devices.', 'carkeek-blocks')}
						/>
						<RangeControl
							label={__('Tablet Columns', 'carkeek-blocks')}
							value={columns[1]}
							onChange={(value) => setAttributes({ columns: [columns[0], value, columns[2]] })}
							min={1}
							max={4}
							step={1}
							help={__('Number of columns on tablet devices.', 'carkeek-blocks')}
						/>
						<RangeControl
							label={__('Desktop Columns', 'carkeek-blocks')}
							value={columns[2]}
							onChange={(value) => setAttributes({ columns: [columns[0], columns[1], value] })}
							min={1}
							max={6}
							step={1}
							help={__('Number of columns on desktop devices.', 'carkeek-blocks')}
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

    if (columns && Array.isArray(columns)) {
        const [mobile, tablet, desktop] = columns;
        const classes = [];

        if (mobile > 1) classes.push(`has-${mobile}-columns-mobile`);
        if (tablet > 1) classes.push(`has-${tablet}-columns-tablet`);
        if (desktop > 1) classes.push(`has-${desktop}-columns-desktop`);

        if (classes.length > 0) {
            return {
                ...extraProps,
                className: `${extraProps.className || ''} ${classes.join(' ')}`.trim(),
            };
        }
    }

    return extraProps;
}

/** Add Classes in the Editor View */
const addColumnsClassesEditor = createHigherOrderComponent(
    ( BlockListBlock ) => {
        return ( props ) => {
			const { attributes, name } = props;
			if ( name !== 'core/list' ) {
				return <BlockListBlock { ...props } />;
			}
			const { columns } = attributes;
            if (columns && Array.isArray(columns)) {
                const [mobile, tablet, desktop] = columns;
                const classes = [];

                if (mobile > 1) classes.push(`has-${mobile}-columns-mobile`);
                if (tablet > 1) classes.push(`has-${tablet}-columns-tablet`);
                if (desktop > 1) classes.push(`has-${desktop}-columns-desktop`);

                if (classes.length > 0) {
                    props.className = `${props.className || ''} ${classes.join(' ')}`.trim();
                }
            }
            return (
                <BlockListBlock
                    { ...props }
                />
            );
        };
    },
    'addColumnsClassesEditor'
);



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

addFilter(
    'editor.BlockListBlock',
    'carkeek-blocks/list-columns-editor-classes',
    addColumnsClassesEditor
);
