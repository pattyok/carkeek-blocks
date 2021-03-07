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
		linkClass,
		width,
		height,
		id,
		linkTarget,
		sizeSlug,
		title,
        caption,
        useCaption
	} = attributes;

	const newRel = isEmpty( rel ) ? undefined : rel;

	const classes = classnames( {
		[ `size-${ sizeSlug }` ]: sizeSlug,
	} );

	const image = (
		<img
			src={ url }
			alt={ alt }
			className={ id ? `wp-image-${ id }` : null }
			width={ width }
			height={ height }
			title={ title }
		/>
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
				image
			) }
            { ( useCaption && ! RichText.isEmpty( caption ) ) && (
				<RichText.Content tagName="figcaption" value={ caption } />
			) }
		</>
	);

	return (
		<figure { ...useBlockProps.save( { className: classes } ) }>
			{ figure }
		</figure>
	);
}