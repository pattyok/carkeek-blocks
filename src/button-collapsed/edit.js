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
import { useBlockProps, InspectorControls, InnerBlocks, useInnerBlocksProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes } = props;
    const { ariaCollapsed } = attributes;


    const template = [
        [ 'core/paragraph', { placeholder: 'Create Collapsed State...' } ],
    ];

    const blockProps = useBlockProps();
        // Update the child block's attributes
		const innerBlocksProps = useInnerBlocksProps();

        return (
            <div { ...blockProps}>
            <InspectorControls>
				<PanelBody>
					<TextControl
						label="Aria Label Collapsed"
						value={ ariaCollapsed }
						onChange={ ( ariaCollapsed ) => setAttributes( { ariaCollapsed } ) }
						help={__(
							"Use this to add an aria label to the expanded button. Required if you are using icons as the button text.",
							"carkeek-blocks"
						)}
					/>
				</PanelBody>
			</InspectorControls>
			<span className="screen-reader">{ariaCollapsed}</span>
            <InnerBlocks
				template = { template }
				templateLock = { false }
			/>

        </div>
    );
}
