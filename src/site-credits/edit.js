/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {  useBlockProps, InspectorControls, InspectorAdvancedControls } from "@wordpress/block-editor";
import { PanelBody, ToggleControl, TextareaControl, TextControl, RadioControl } from "@wordpress/components";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes, context } = props;
    const { showCredits, showCopyright, contentAfter, creditsLinkLabel, creditsPopupContent	 } = attributes;

    const blockProps = useBlockProps();

	return (
	<div { ...blockProps}>
		<InspectorControls>
			<PanelBody title={ __( 'Site Credits Settings' ) }>
				<ToggleControl
					label={ __( 'Show Site Credits' ) }
					checked={ showCredits }
					onChange={ ( value ) => setAttributes( { showCredits: value } ) }
				/>
				<ToggleControl
					label={ __( 'Show Copyright' ) }
					checked={ showCopyright }
					onChange={ ( value ) => setAttributes( { showCopyright: value } ) }
				/>
				{ showCopyright && (
				<TextareaControl
					label={ __( 'Text After Date' ) }
					help={ __( 'Additional text to display after the copyright date. HTML OK.' ) }
					value={ contentAfter }
					onChange={ ( value ) => setAttributes( { contentAfter: value } ) }
				/>
				) }
				{ showCredits && (
				<TextControl
					label={ __( 'Credits Link Label' ) }
					value={ creditsLinkLabel }
					onChange={ ( value ) => setAttributes( { creditsLinkLabel: value } ) }
				/>
				) }

			</PanelBody>
		</InspectorControls>
		<InspectorAdvancedControls>
			{ showCredits && (
			<TextareaControl
				label={ __( 'Credits Popup Override' ) }
				value={ creditsPopupContent }
				onChange={ ( value ) => setAttributes( { creditsPopupContent: value } ) }
			/>
			) }
		</InspectorAdvancedControls>

		{ showCopyright && (
		<span class="ck-copyright">© {new Date().getFullYear() + " "}</span>
		) }
		{ contentAfter && (
			<span class="ck-content-after">{ contentAfter }</span>
		) }

		{ showCredits && (
			<span class="ck-credits">{ creditsLinkLabel }</span>
		) }

	</div>
    );
}
