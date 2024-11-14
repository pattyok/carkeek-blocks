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
import { useBlockProps, RichText, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import {
	PanelBody,
	RadioControl
} from "@wordpress/components";
import { useSelect } from '@wordpress/data';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes, isSelected, clientId } = props;
    const { heading, headingStyle } = attributes;



    const template = [
        [ 'core/paragraph', { placeholder: 'Enter panel content...' } ],
    ];

    const blockProps = useBlockProps();
        // Update the child block's attributes
        return (
            <div { ...blockProps}>
			<InspectorControls>
				<PanelBody title={ __( 'Heading Style', 'carkeek-blocks' ) }>

				</PanelBody>
			</InspectorControls>
        </div>
    );
}
