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
	const{ alignSlideContent, autoPlay, infiniteScroll, autoPlaySpeed, slidesToShow, showDots, transitionType, arrowNavigation, transitionSpeed, sliderType, slidesToScroll, slidesToScrollMobile, slidesToShowMobile } = attributes;
	const classes = classnames( {
		[ `slider-${ sliderType }` ]: sliderType,
		[ `arrows-${ arrowNavigation }` ]: arrowNavigation,
		[ `align-content-${ alignSlideContent }` ]: alignSlideContent !== 'default',
	} );
	const blockProps = useBlockProps.save({ className: classes })
	let sliderData = {
		autoplay: autoPlay,
		speed: autoPlaySpeed,
		type: sliderType,
		slides: slidesToShow,
		slidesmobile: slidesToShowMobile,
		transition: transitionType,
		transitionSpd: transitionSpeed,
		scroll: slidesToScroll,
		scrollmobile: slidesToScrollMobile,
		showDots: showDots,
		arrows: arrowNavigation
	}
	if ( !infiniteScroll ) {
		sliderData.infinite = false;
	}
	const dataAttributes = {};
	Object.entries(sliderData).forEach(([key, value]) => {
		dataAttributes[`data-${key}`] = value;
	});

	return (
		<div {...blockProps}>
			<div className="ck-carkeek-slider__slide-wrapper" {...dataAttributes}>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
