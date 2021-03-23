
/**
 * External dependencies
 */
import classnames from 'classnames';
import { filter } from 'lodash';


/**
 * WordPress dependencies
 */
import { RichText, MediaPlaceholder, MediaUpload } from '@wordpress/block-editor';
import { VisuallyHidden, Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
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
		mediaPlaceholder,
		onSetImageAttributes,
		insertBlocksAfter,
	} = props;

	const {
		images,
		imageCrop,
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
            const images = filter(
                images,
                ( img, i ) => index !== i
            );
            setAttributes( {
                images,
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
		console.log(newImages);
		console.log(newImages[0].id);
        setAttributes( {
			// attachmentCaptions: newImages.map( ( newImage ) => ( {
            //     // Store the attachmentCaption id as a string for consistency
            //     // with the type of the id in the images attribute.
            //     id: toString( newImage.id ),
            //     caption: newImage.caption,
            // } ) ),
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
		console.log('onSelectImages end');
		console.log(JSON.stringify(images));
    }

    function onUploadError( message ) {
        const { noticeOperations } = props;
        noticeOperations.removeAllNotices();
        noticeOperations.createErrorNotice( message );
    }

    function setColumnsNumber( value ) {
        setAttributes( { columns: value } );
    }

    // function toggleImageCrop() {
    //     setAttributes( { imageCrop: ! imageCrop } );
    // }

    function getImageCropHelp( checked ) {
        return checked
            ? __( 'Thumbnails are cropped to align.' )
            : __( 'Thumbnails are not cropped.' );
    }

    function onFocusGalleryCaption() {
		setAttributes({selectedImage: null});
    }

    function setImageAttributes( index, attributes ) {
		console.log('setImageAttributes');
		console.log(attributes);
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

   function getImagesSizeOptions() {
        const { imageSizes, resizedImages } = props;
        return map(
            filter( imageSizes, ( { slug } ) =>
                some( resizedImages, ( sizes ) => sizes[ slug ] )
            ),
            ( { name, slug } ) => ( { value: slug, label: name } )
        );
    }

   function updateImagesSize( sizeSlug ) {
        const {
            attributes: { images },
            resizedImages,
        } = props;

        const updatedImages = map( images, ( image ) => {
            if ( ! image.id ) {
                return image;
            }
            const url = get( resizedImages, [
                parseInt( image.id, 10 ),
                sizeSlug,
            ] );
            return {
                ...image,
                ...( url && { url } ),
            };
        } );

        setAttributes( { images: updatedImages, sizeSlug } );
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
					// 		<div className="gallery-item-container">
                    //         <img className='gallery-item' src={img.url} key={ images.id } />
                    //         <div className='remove-item' onClick={() => onRemoveImage(img)}><span className="dashicons dashicons-trash"></span></div>
                    //         <div className='caption-text'>{img.caption[0]}</div>
                    // </div>
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
				icon={ ! hasImages && icons.image }
				labels={ {
					title: ! hasImages && __( 'Gallery Images' ),
					instructions: ! hasImages && 'Select files from your library.',
				} }
				onSelect={ onSelectImages }
				accept="image/*"
				allowedTypes={ [ 'image' ] }
				multiple
				gallery
				value={ images }
				onError={ onUploadError }
				//notices={ hasImages ? undefined : noticeUI }
				//onFocus={ onFocus }
			/>
				}

		</>
	);
};


export default Gallery;