
/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';
import { VisuallyHidden } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import GalleryImage from './gallery-img';

export const Gallery = ( props ) => {
	const {
		attributes,
		className,
		isSelected,
		setAttributes,
		selectedImage,
		mediaPlaceholder,
		onMoveBackward,
		onMoveForward,
        onRemoveImage,
		onSelectImage,
		onDeselectImage,
		onSetImageAttributes,
		onFocusGalleryCaption,
		insertBlocksAfter,
	} = props;

	const {
		images,
	} = attributes;

	return (
		<figure
			className={ className }
		>
			<ul className="blocks-gallery-grid">
				{ images.map( ( img, index ) => {
					const ariaLabel = sprintf(
						/* translators: 1: the order number of the image. 2: the total number of images. */
						__( 'image %1$d of %2$d in gallery' ),
						index + 1,
						images.length
					);

					return (
						<li
							className="blocks-gallery-item"
							key={ img.id || img.url }
						>
							<GalleryImage
								url={ img.url }
								alt={ img.alt }
                                id={ img.id }
                                focalPointX={img.focalPointX}
                                focalPointY={img.focalPointY}
								isFirstItem={ index === 0 }
								isLastItem={ index + 1 === images.length }
								isSelected={
									isSelected && selectedImage === index
								}
								onMoveBackward={ onMoveBackward( index ) }
								onMoveForward={ onMoveForward( index ) }
								onRemove={ onRemoveImage( index ) }
								onSelect={ onSelectImage( index ) }
                                onDeselect={ onDeselectImage( index ) }
								setAttributes={ ( attrs ) =>
									onSetImageAttributes( index, attrs )
								}
								linksto={img.linksto}
								caption={ img.caption }
								aria-label={ ariaLabel }
								sizeSlug={ attributes.sizeSlug }
							/>
						</li>
					);
				} ) }
			</ul>
			{ mediaPlaceholder }

		</figure>
	);
};


export default Gallery;