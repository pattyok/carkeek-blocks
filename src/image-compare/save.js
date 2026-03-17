import { useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		beforeImageUrl,
		beforeImageAlt,
		beforeFocalX,
		beforeFocalY,
		afterImageUrl,
		afterImageAlt,
		afterFocalX,
		afterFocalY,
		showLabels,
		beforeLabel,
		afterLabel,
		initialPosition,
		blockHeight,
		sliderColor,
	} = attributes;

	if ( ! beforeImageUrl || ! afterImageUrl ) {
		return null;
	}

	const blockProps = useBlockProps.save( {
		className: 'cd-image-container',
		'data-initial-position': initialPosition,
		'data-slider-color': sliderColor,
		style: {
			height: blockHeight + 'px',
		},
	} );

	const beforeImgStyle = {
		objectFit: 'cover',
		objectPosition: `${ beforeFocalX * 100 }% ${ beforeFocalY * 100 }%`,
		width: '100%',
		height: '100%',
		display: 'block',
	};

	// The after image must be as wide as the container (not the clip div)
	// so the focal point renders correctly. script.js sets --ck-ic-width
	// on the container; we use that here with a fallback.
	const afterImgStyle = {
		objectFit: 'cover',
		objectPosition: `${ afterFocalX * 100 }% ${ afterFocalY * 100 }%`,
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100%',
		width: 'var(--ck-ic-width, 100%)',
		maxWidth: 'none',
		display: 'block',
	};

	return (
		<figure { ...blockProps }>
			<img
				src={ beforeImageUrl }
				alt={ beforeImageAlt }
				style={ beforeImgStyle }
			/>
			{ showLabels && (
				<span className="cd-image-label" data-type="original">
					{ beforeLabel }
				</span>
			) }
			<div className="cd-resize-img">
				<img
					src={ afterImageUrl }
					alt={ afterImageAlt }
					style={ afterImgStyle }
				/>
				{ showLabels && (
					<span className="cd-image-label" data-type="modified">
						{ afterLabel }
					</span>
				) }
			</div>
			<span className="cd-handle"></span>
		</figure>
	);
}
