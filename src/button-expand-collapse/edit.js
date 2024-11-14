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
import { PanelBody, TextControl, ToggleControl } from "@wordpress/components";


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
	const { target, ariaExpanded, ariaCollapsed, expandedMobile, expandedTablet, expandedDesktop } = attributes;

	const blockProps = useBlockProps();
	// Update the child block's attributes

	return (
		<button { ...blockProps}>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label="Target"
						value={ target }
						onChange={ ( target ) => setAttributes( { target } ) }
						help={__(
							"Add the id of the targeted block.",
							"carkeek-blocks"
						)}
					/>


				</PanelBody>
				<PanelBody title="Default Behavior">
				<ToggleControl
						label="Expanded on Mobile"
						checked={ expandedMobile }
						onChange={ ( expandedMobile ) => setAttributes( { expandedMobile } ) }
					/>
					<ToggleControl
						label="Expanded on Tablet (768 up)"
						checked={ expandedTablet }
						onChange={ ( expandedTablet ) => setAttributes( { expandedTablet } ) }
					/>
					<ToggleControl
						label="Expanded on Desktop (1024 up)"
						checked={ expandedDesktop }
						onChange={ ( expandedDesktop ) => setAttributes( { expandedDesktop } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<InnerBlocks
				template={[['carkeek-blocks/button-collapsed', { }], ['carkeek-blocks/button-expanded', { }]]}
				templateLock="insert"

			/>
		</button>
	);
}
