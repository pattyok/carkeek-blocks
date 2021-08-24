
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
import { useState, useEffect } from '@wordpress/element';
import { PanelBody, SelectControl, RadioControl, ToggleControl } from "@wordpress/components";
import { withSelect, useSelect } from '@wordpress/data';
//import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import GalleryImage from './gallery-img';
import icons from "../../resources/icons";
import { pickRelevantMediaFiles, PickRelevantMediaFilesUpdate } from './shared';

export const Gallery = ( props ) => {
	const {
		attributes,
		className,
		isSelected,
        imageSizes,
		getMedia,
		//resizedImages,
	} = props;

	const {
		images,
		lightSize,
        thumbSize,
        ids,
		displayAs,
		columns,
		cropImages,
		imageLayout,
		linkImages,
		showCaptions,
		slidesToShow,
		imageAlignment,
	} = attributes;

	const [imageSelected, setImageSelected] = useState(null);

    const [ attachmentCaptions, setAttachmentCaptions ] = useState(images.map( ( newImage ) => ( {
        id: parseInt( newImage.id, 10 ),
        caption: newImage.caption,
    } ) ));

	const isGallery = displayAs == 'gallery';
	const isCarousel = displayAs == 'carousel';

	const galleryStyle = classnames({
		'blocks-gallery-grid': true,
		[ `columns-${ columns }` ]: isGallery,
		'fixed-images': cropImages,
        [ `fixed-images-${ imageLayout }` ]: cropImages,
		'ck-blocks-gallery-carousel': isCarousel,
		[ `columns-${ slidesToShow }` ] : isCarousel
	})

    function setAttributes( newAttrs ) {
		console.log("setAttributes", newAttrs);
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
        setAttributes( {
			images: newImages.map( ( image ) => pickRelevantMediaFiles( image, lightSize, thumbSize, images ) ),
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

    function updateLightSize( newLightSize ) {
		console.log("update light size");

		setAttributes( { lightSize: newLightSize } );
		const newImages = images.map( ( image ) =>  {
			console.log("imagemap", image.id);
			const newImage = getMedia(image.id);
			console.log("newImage", newImage);
			const fileUpdateComponent = <PickRelevantMediaFilesUpdate key={image.id} image={image} lightSize={newLightSize} thumbSize={thumbSize} />;
			console.log("fileUpdate", fileUpdateComponent);
			return fileUpdateComponent;
		} );
		console.log("newImages", newImages);
		setAttributes( {
			images: newImages
			}
		)

	}
    function updateThumbsSize( newThumbSize ) {
		console.log("update thumbs size");
		setAttributes( { thumbSize: newThumbSize } );
		setAttributes( {
			images: images.map( ( image ) =>  {
				console.log("imagemap", image.id);
				const fileUpdateComponent = <PickRelevantMediaFilesUpdate key={image.id} image={image} lightSize={lightSize} thumbSize={newThumbSize} />;
				console.log("fileUpdate", fileUpdateComponent);
				return fileUpdateComponent;
			}
			)
        } );
	}

    const imageSizeOptions = getImagesSizeOptions();
	const shouldShowSizeOptions = hasImages && ! isEmpty( imageSizeOptions );

	return (
		<>
            <InspectorControls>
                <PanelBody title="Gallery Image Settings">
					<ToggleControl
						label="Crop Images"
						help={ "Crop the images in the gallery to a uniform size"}
						checked={ cropImages }
						onChange={ ( cropImages ) => setAttributes( { cropImages } ) }
					/>
					{!cropImages &&
					<SelectControl
						label="Vertically Align Images"
						selected={ imageAlignment }
						options={ [
							{ label: 'Center', value: 'center' },
							{ label: 'Top', value: 'top' },
							{ label: 'Bottom', value: 'bottom' },
						] }
						onChange={value =>
							setAttributes({ imageAlignment: value })
						}
					/>
					}
                    {cropImages && (
						<RadioControl
							label="Image Layout"
							selected={ imageLayout }
							options={ [
								{ label: 'Landscape', value: 'landscape' },
								{ label: 'Portrait', value: 'portrait' },
								{ label: 'Square', value: 'square' },
							] }
							onChange={value =>
								setAttributes({ imageLayout: value })
							}
						/>
					) }
                { shouldShowSizeOptions && (
                    <>

						<SelectControl
							label={ __( 'Image size' ) }
							value={ thumbSize }
							options={ imageSizeOptions }
							onChange={ updateThumbsSize }
						/>
					{linkImages == 'lightbox' &&
                        <SelectControl
							label={ __( 'Lightbox Image size' ) }
							value={ lightSize }
							options={ imageSizeOptions }
							onChange={ updateLightSize }
						/>
					}
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
                        'blocks-gallery-item': true,
                        'ck-blocks-gallery-hidden': (isCarousel && index >= slidesToShow)
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
								thumbUrl = { img.thumbUrl }
								lightUrl = { img.lightUrl }
								alt={ img.alt }
                                id={ parseInt( img.id, 10 ) } // make id an integer explicitly
                                focalPointX={img.focalPointX}
                                focalPointY={img.focalPointY}
								isFirstItem={ index === 0 }
								isLastItem={ index + 1 === images.length }
								isSelected={
									isSelected && imageSelected === index
								}
                                inlineEdit={ true }
								onMoveForward={ onMoveForward( index ) }
								onMoveBackward={ onMoveBackward( index ) }
								onRemove={ onRemoveImage( index ) }
								onSelect={() => setImageSelected( index ) }
                                onDeselect={() => setImageSelected( index ) }
								setAttributes={ ( attrs ) =>
									setImageAttributes( index, attrs )
								}
								cropImages = { cropImages }
								linkImages = { linkImages }
								customLink={img.customLink}
								linkTarget={img.linkTarget}
								showCaptions = {showCaptions}
								caption={ img.caption }
								aria-label={ ariaLabel }
								lightSize={ lightSize }
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
                    addToGallery={ hasImages }
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


//export default withSelect( ( select, { attributes: { ids }, isSelected } ) => {
export default withSelect( ( select ) => {
	const { getMedia } = select( 'core' );
	const { getSettings } = select( 'core/block-editor' );
	const { imageSizes } = getSettings();

	return {
		imageSizes,
		getMedia,
		//resizedImages,
	};
} ) (Gallery);