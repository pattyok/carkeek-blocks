/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {
	const{ heading, headingStyle } = attributes;

        const HeaderEl = `${headingStyle}`;
        return (
            <div { ...useBlockProps.save() } data-aria-accordion data-transition >
                <HeaderEl data-aria-accordion-heading className='ck-panel-header'>
                    <RichText.Content value={ heading } />
                </HeaderEl>
                <div data-aria-accordion-panel className='ck-panel'>
                    <InnerBlocks.Content />
                </div>
            </div>
        );
}
