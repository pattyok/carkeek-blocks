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

	// Image 2 (after) is the base layer — fills the container, visible on the RIGHT.
	const img2BaseStyle = {
		objectFit: 'cover',
		objectPosition: `${ afterFocalX * 100 }% ${ afterFocalY * 100 }%`,
		width: '100%',
		height: '100%',
		display: 'block',
	};

	// Image 1 (before) is the clip layer — inside .cd-resize-img, visible on the LEFT.
	// Width is set to --ck-ic-width by script.js so the focal point renders correctly
	// across the full container width (not just the narrowed clip div).
	const img1ClipStyle = {
		objectFit: 'cover',
		objectPosition: `${ beforeFocalX * 100 }% ${ beforeFocalY * 100 }%`,
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
			{ /* Image 2 — base layer, right side */ }
			<img
				src={ afterImageUrl }
				alt={ afterImageAlt }
				style={ img2BaseStyle }
			/>
			{ showLabels && (
				<span className="cd-image-label" data-type="original">
					{ afterLabel }
				</span>
			) }
			{ /* Image 1 — clip layer, left side */ }
			<div className="cd-resize-img">
				<img
					src={ beforeImageUrl }
					alt={ beforeImageAlt }
					style={ img1ClipStyle }
				/>
				{ showLabels && (
					<span className="cd-image-label" data-type="modified">
						{ beforeLabel }
					</span>
				) }
			</div>
			<span className="cd-handle"></span>
		</figure>
	);
}
