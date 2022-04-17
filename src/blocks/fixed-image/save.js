/**
 * External dependencies
 */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/**
 * WordPress dependencies
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const {
		url,
		alt,
		href,
		rel,
		width,
		height,
		id,
		linkTarget,
		sizeSlug,
		title,
        caption,
        useCaption,
		focalPoint,
		linkStyle,
		photoCredit,
		aspectRatio,
	} = attributes;

	const newRel = isEmpty( rel ) ? undefined : rel;

	const classes = classnames( {
		[ `size-${ sizeSlug }` ]: sizeSlug,
		[ `fixed-image-${ aspectRatio }` ] : aspectRatio
	} );

	let imageStyle = {};
	if (focalPoint) {
		imageStyle.objectPosition = `${focalPoint.x *
			100}% ${focalPoint.y * 100}%`;
	}

	const linkClass = classnames( {
		[ `${ linkStyle }` ]: linkStyle,
		'ck-fixed-image-wrap': true,
	} );

	const image = (
		<>
			<img
				src={ url }
				alt={ alt }
				className={ id ? `wp-image-${ id }` : null }
				width={ width }
				height={ height }
				title={ title }
				style={imageStyle}
			/>
			{photoCredit &&
				<div className={'ck-fixed-image-credit'}>
				{ photoCredit }
				</div>
			}
		</>
	);

	const figure = (
		<>
			{ href ? (
				<a
					className={ linkClass }
					href={ href }
					target={ linkTarget }
					rel={ newRel }
				>
					{ image }

				</a>
			) : (
				<div className={'ck-fixed-image-wrap'}>
				{ image }
				</div>
			) }
            { ( useCaption && ! RichText.isEmpty( caption ) ) && (
				<RichText.Content tagName="figcaption" value={ caption } />
			) }

		</>
	);

	return (
		<>
		{url &&
		<figure { ...useBlockProps.save( { className: classes } ) }>
			{ figure }
		</figure>
		}
		</>
	);

}