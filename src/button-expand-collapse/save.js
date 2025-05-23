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
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save( {attributes} ) {
	const{ target, expandedMobile, expandedTablet, expandedDesktop, parent } = attributes;

	const blockProps = useBlockProps.save({className: 'js-collapse-btn'});
	if (parent) {
        return (
            <button { ...blockProps }
			aria-controls={target}
			data-parent={parent}
			data-collapse-animate="on"
			data-expanded-mobile={expandedMobile}
			data-expanded-tablet={expandedTablet}
			data-expanded-desktop={expandedDesktop}
			>
                <InnerBlocks.Content />
            </button>
        );
	} else {
		return (
			<button { ...blockProps }
			aria-controls={target}
			data-collapse-animate="on"
			data-expanded-mobile={expandedMobile}
			data-expanded-tablet={expandedTablet}
			data-expanded-desktop={expandedDesktop}
			>
				<InnerBlocks.Content />
			</button>
		);
	}
}
