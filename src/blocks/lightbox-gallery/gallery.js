
/**
 * External dependencies
 */
import { filter, map, find, isEmpty, reduce, get } from 'lodash';
import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { MediaPlaceholder, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { PanelBody, SelectControl } from "@wordpress/components";
import { withSelect } from '@wordpress/data';
import { useMemo } from '@wordpress/element';

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
        imageSizes,
		resizedImages,
	} = props;

	const {
		images,
		sizeSlug,
        sizeSlugThumbs,
        ids,
		displayAs,
		columns,
		cropImages,
		imageLayout,
		limitView,
		viewLimit
	} = attributes;

	const [imageSelected, setImageSelected] = useState(null);
    const [ attachmentCaptions, setAttachmentCaptions ] = useState(images.map( ( newImage ) => ( {
        id: parseInt( newImage.id, 10 ),
        caption: newImage.caption,
    } ) ));

	const isGallery = displayAs == 'gallery';

	const galleryStyle = classnames({
		'ck-blocks-gallery-grid': isGallery,
		[ `columns-${ columns }` ]: isGallery,
		'fixed-images': isGallery && cropImages,
        [ `fixed-images-${ imageLayout }` ]: isGallery && cropImages,
	})


    function setAttributes( newAttrs ) {
		if ( newAttrs.ids ) {
			throw new Error(
				'The "ids" attribute should not be changed directly. It is managed automatically when "images" attribute changes'
			);
		}

		if ( newAttrs.images ) {
			newAttrs = {
				...newAttrs,
				// Unlike images[ n ].id which is a string, always ensure the
				// ids array contains numbers as per its attribute type.
				ids: map( newAttrs.images, ( { id } ) => {
                    return parseInt( id, 10 );
                }),
			};
		}

		props.setAttributes( newAttrs );
	}

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
        const newImageId = parseInt( newImage.id, 10 );
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
        setAttachmentCaptions(
			newImages.map( ( newImage ) => ( {
                id: parseInt( newImage.id, 10 ),
                caption: newImage.caption,
            } ) )
		);
        setAttributes( {
            images: newImages.map( ( newImage ) => ( {
                ...pickRelevantMediaFiles( newImage, sizeSlug, sizeSlugThumbs ),
                caption: selectCaption(
                    newImage,
                    images,
                    attachmentCaptions
                ),
                id: parseInt( newImage.id ),
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

    function getImagesSizeOptions() {
		return map(
			imageSizes,
			( { name, slug } ) => ( { value: slug, label: name } )
		);
	}

    function updateImagesSize( newSizeSlug ) {
		const updatedImages = map( images, ( image ) => {
			if ( ! image.id ) {
				return image;
			}
			const url = get( resizedImages, [
				parseInt( image.id, 10 ),
				newSizeSlug,
			] );
			return {
				...image,
				...( url && { url } ),
			};
		} );
		setAttributes( { images: updatedImages, sizeSlug: newSizeSlug } );
	}
    function updateThumbsSize( newSizeSlug ) {
		const updatedImages = map( images, ( image ) => {
			if ( ! image.id ) {
				return image;
			}
			const thumbUrl = get( resizedImages, [
				parseInt( image.id, 10 ),
				newSizeSlug,
			] );
			return {
				...image,
				...( thumbUrl && { thumbUrl } ),
			};
		} );
		setAttributes( { images: updatedImages, sizeSlugThumbs: newSizeSlug } );
	}

    const imageSizeOptions = getImagesSizeOptions();
	const shouldShowSizeOptions = hasImages && ! isEmpty( imageSizeOptions );

	return (
		<>
            <InspectorControls>
                <PanelBody>
                { shouldShowSizeOptions && (
                    <>
						<SelectControl
							label={ __( 'Thumbnail size' ) }
							value={ sizeSlugThumbs }
							options={ imageSizeOptions }
							onChange={ updateThumbsSize }
						/>
                        <SelectControl
							label={ __( 'Image size' ) }
							value={ sizeSlug }
							options={ imageSizeOptions }
							onChange={ updateImagesSize }
						/>
                    </>
					) }
                </PanelBody>
            </InspectorControls>
			<ul className={ galleryStyle }>
				{ images.map( ( img, index ) => {
					const ariaLabel = sprintf(
						/* translators: 1: the order number of the image. 2: the total number of images. */
						__( 'image %1$d of %2$d in gallery' ),
						index + 1,
						images.length
					);

					const itemStyle = classnames({
                        'ck-blocks-gallery-grid-item': true,
                        'ck-blocks-gallery-hidden': (limitView && index >= viewLimit)
                    })

					return (
						<li
							className={itemStyle}
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
			{!hasImages &&
                <MediaUploadCheck>
                    <MediaPlaceholder
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
                </MediaUploadCheck>
				}
                {hasImages &&
                <MediaUploadCheck>
                    <MediaUpload
                    onSelect={ onSelectImages }
                    allowedTypes={ [ 'image' ] }
                    isAppender={ hasImages }
                    addToGallery={ false }
                    multiple
                    gallery
                    value={ ids }
                    render={ ( { open } ) => (
                        <Button className={'ck-custom-button'} onClick={ open }>
                            { __('Add to / Edit Gallery') }
                        </Button>
                    ) }
                />
                </MediaUploadCheck>
                }

		</>
	);
};


export default withSelect( ( select, { attributes: { ids }, isSelected } ) => {
		const { getMedia } = select( 'core' );
		const { getSettings } = select( 'core/block-editor' );
		const { imageSizes } = getSettings();

		const resizedImages = useMemo( () => {
			if ( isSelected ) {
				return reduce(
					ids,
					( currentResizedImages, id ) => {
						if ( ! id ) {
							return currentResizedImages;
						}
						const image = getMedia( id );
						const sizes = reduce(
							imageSizes,
							( currentSizes, size ) => {
								const defaultUrl = get( image, [
									'sizes',
									size.slug,
									'url',
								] );
								const mediaDetailsUrl = get( image, [
									'media_details',
									'sizes',
									size.slug,
									'source_url',
								] );
								return {
									...currentSizes,
									[ size.slug ]:
										defaultUrl || mediaDetailsUrl,
								};
							},
							{}
						);
						return {
							...currentResizedImages,
							[ parseInt( id, 10 ) ]: sizes,
						};
					},
					{}
				);
			}
			return {};
		}, [ isSelected, ids, imageSizes ] );

		return {
			imageSizes,
			resizedImages,
		};
	} ) (Gallery);