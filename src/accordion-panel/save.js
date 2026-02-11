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

	const{ title, inheritedHeaderStyle, inheritedisFAQ } = attributes;


        const HeaderEl = `${inheritedHeaderStyle}`;
		if (inheritedisFAQ) {
			return (
				<>
					<HeaderEl data-aria-accordion-heading className='ck-accordion-header faq-header' itemscope="" itemprop="mainEntity" itemtype="https://schema.org/Question">
						<RichText.Content value={ title } />
					</HeaderEl>
					<div data-aria-accordion-panel className='ck-accordion-panel' itemscope="" itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
						<InnerBlocks.Content />
					</div>
				</>
			);
		}
        return (
            <>
                <HeaderEl data-aria-accordion-heading className='ck-accordion-header'>
                    <RichText.Content value={ title } />
                </HeaderEl>
                <div data-aria-accordion-panel className='ck-accordion-panel'>
                    <InnerBlocks.Content />
                </div>
            </>
        );
}
