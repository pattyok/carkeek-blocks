/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import { createBlock } from "@wordpress/blocks";
import { PanelBody, RadioControl, CheckboxControl } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( { attributes, setAttributes, clientId } ) {
	const { headerStyle, openMultiple } = attributes;
	const updateHeaderStyle = function( value ) {
		setAttributes({ headerStyle: value });

		//pass value to children
		var children = select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
		children.forEach(function(child){
			dispatch('core/block-editor').updateBlockAttributes(child.clientId, {inheritedHeaderStyle: value})
		});
	}

	const blockProps = useBlockProps();
	// Update the child block's attributes

	return (
		<div { ...blockProps}>
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
						{__(' + Add Accordion Section')}
					</button>
				)}

			/>
		</div>
	);
}
