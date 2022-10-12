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
import { useBlockProps, RichText, InnerBlocks, } from '@wordpress/block-editor';
import { select } from "@wordpress/data";


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const { attributes, setAttributes, clientId } = props;
    const { title, inheritedHeaderStyle } = attributes;
	if (!inheritedHeaderStyle) {
        var parent = select('core/block-editor').getBlockParents(clientId);
        const parentAtts = select('core/block-editor').getBlockAttributes(parent);
        setAttributes( { inheritedHeaderStyle: parentAtts.headerStyle } )
    }

    const
    allowedBlocks = [
        'core/paragraph',
        'core/heading',
        'core/list',
        'core/image',
        'carkeek-blocks/custom-link-list',
        'core/shortcode'
    ],
    template = [
        [ 'core/paragraph', { placeholder: 'Enter panel content...' } ],
    ];

    const blockProps = useBlockProps();
        // Update the child block's attributes

        return (
            <div { ...blockProps}>
            <RichText
                tagName = { inheritedHeaderStyle }
                value={ title }
                className={'ck-accordion-button'}
                onChange={ ( title ) => setAttributes( { title } ) }
                placeholder={ __('Section Heading...')}
            />
            <div className="ck-accordion-panel">
            <InnerBlocks
                className={'ck-accordion-inner-blocks'}
                allowedBlocks = { allowedBlocks }
                template = { template }
            />
            </div>
        </div>
    );
}
