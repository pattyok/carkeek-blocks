
/**
 * External dependencies
 */
import { filter } from 'lodash';


/**
 * WordPress dependencies
 */
import { MediaPlaceholder} from '@wordpress/block-editor';
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';


/**
 * Internal dependencies
 */
import GalleryImage from './gallery-img';
import icons from "../../resources/icons";
import { pickRelevantMediaFiles } from './shared';

export const Gallery = ( props ) => {
	const {
		attributes,
		className,
		isSelected,
		setAttributes,
		attachmentCaptions,
	} = props;

	const {
		images,
		sizeSlug
	} = attributes;

	const [imageSelected, setImageSelected] = useState(null);

    function onMove( oldIndex, newIndex ) {
		const newImages = [ ...images ];
        newImages.splice( newIndex, 1, images[ oldIndex ] );
        newImages.splice( oldIndex, 1, images[ newIndex ] );
        setImageSelected( { newIndex } );
        setAttributes( { images : newImages } );
    }

	function onMoveForward( oldIndex ) {
        return () => {
            if ( oldIndex === images.length - 1 ) {
                return;
            }
            onMove( oldIndex, oldIndex + 1 );
        };
    }

    function onMoveBackward( oldIndex ) {
        return () => {
            if ( oldIndex === 0 ) {
                return;
            }
            onMove( oldIndex, oldIndex - 1 );
        };
    }

    function onRemoveImage( index ) {
        return () => {
            const newImages = filter(
                images,
                ( img, i ) => index !== i
            );
            setAttributes( {
                images: newImages,
                selectedImage: null
            } );
        };
    }


    function selectCaption( newImage, images, attachmentCaptions ) {
        // The image id in both the images and attachmentCaptions arrays is a
        // string, so ensure comparison works correctly by converting the
        // newImage.id to a string.
        const newImageId = toString( newImage.id );
        const currentImage = find( images, { id: newImageId } );

        const currentImageCaption = currentImage
            ? currentImage.caption
            : newImage.caption;

        if ( ! attachmentCaptions ) {
            return currentImageCaption;
        }

        const attachment = find( attachmentCaptions, {
            id: newImageId,
        } );

        // if the attachment caption is updated
        if ( attachment && attachment.caption !== newImage.caption ) {
            return newImage.caption;
        }

        return currentImageCaption;
    }

    function onSelectImages( newImages ) {
        setAttributes( {
            images: newImages.map( ( newImage ) => ( {
                ...pickRelevantMediaFiles( newImage, sizeSlug ),
                caption: selectCaption(
                    newImage,
                    images,
                    attachmentCaptions
                ),
                // The id value is stored in a data attribute, so when the
                // block is parsed it's converted to a string. Converting
                // to a string here ensures it's type is consistent.
                id: newImage.id,
            } ) ),
        } );
    }

    function onUploadError( message ) {
        const { noticeOperations } = props;
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice( message );
    }


    function setImageAttributes( index, attributes ) {
        if ( ! images[ index ] ) {
            return;
        }
        setAttributes( {
            images: [
                ...images.slice( 0, index ),
                {
                    ...images[ index ],
                    ...attributes,
                },
                ...images.slice( index + 1 ),
            ],
        } );
    }


	const hasImages = !! images.length;

	return (
		<>
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
							{ <GalleryImage
								//{ ...props }
								key={ img.id || img.url }
								url={ img.url }
								alt={ img.alt }
                                id={ parseInt( img.id, 10 ) } // make id an integer explicitly
                                focalPointX={img.focalPointX}
                                focalPointY={img.focalPointY}
								isFirstItem={ index === 0 }
								isLastItem={ index + 1 === images.length }
								isSelected={
									isSelected && imageSelected === index
								}
                                inlineEdit={ false }
								onMoveForward={ onMoveForward( index ) }
								onMoveBackward={ onMoveBackward( index ) }
								onRemove={ onRemoveImage( index ) }
								onSelect={() => setImageSelected( index ) }
                                onDeselect={() => setImageSelected( index ) }
								setAttributes={ ( attrs ) =>
									setImageAttributes( index, attrs )
								}
								linksto={img.linksto}
								caption={ img.caption }
								aria-label={ ariaLabel }
								sizeSlug={ sizeSlug }
							/>
				}
						</li>
					);
				} ) }
			</ul>
			{<MediaPlaceholder
				addToGallery={ hasImages }
				isAppender={ hasImages }
				className={ className }
				disableMediaButtons={ hasImages && ! isSelected }
				icon={ icons.gallery }
				labels={ {
					title: hasImages ? __( 'Edit your gallery' ) : __( 'Gallery Images' ),
					instructions: hasImages ? __( 'Click "Media Library" to edit your gallery' ) : __( 'Select files from your library.' ),
				} }
				onSelect={ onSelectImages }
				accept="image/*"
				allowedTypes={ [ 'image' ] }
				multiple
				gallery
				value={ images }
				onError={ onUploadError }
			/>
				}

		</>
	);
};


export default Gallery;