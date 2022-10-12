/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
 import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";

 import classnames from "classnames";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function ({ attributes } ) {
	const{ autoPlay, autoPlaySpeed, slidesToShow, showDots, transitionType, arrowNavigation, transitionSpeed, sliderType, slidesToScroll, slidesToScrollMobile, slidesToShowMobile } = attributes;
	const classes = classnames( {
		[ `slider-${ sliderType }` ]: sliderType,
		[ `arrows-${ arrowNavigation }` ]: arrowNavigation
	} );
	const blockProps = useBlockProps.save({ className: classes })
	return (
		<div {...blockProps}>
			<div className="ck-carkeek-slider__slide-wrapper"
			data-autoplay={autoPlay}
			data-speed={autoPlaySpeed}
			data-type={sliderType}
			data-slides={slidesToShow}
			data-slidesmobile={slidesToShowMobile}
			data-transition={transitionType}
			data-transitionspd={transitionSpeed}
			data-scroll={slidesToScroll}
			data-scrollmobile={slidesToScrollMobile}
			data-showdots={showDots}
			data-arrows={arrowNavigation}>
			<InnerBlocks.Content />
			</div>
		</div>
	);
}
