
/**
 * External dependencies
 */
import { filter, map, isEmpty } from 'lodash';
import classnames from 'classnames';
/**
 * WordPress dependencies
 */
import { MediaPlaceholder, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import { __, sprintf } from '@wordpress/i18n';
import { useState, useEffect } from '@wordpress/element';
import { PanelBody, SelectControl, RadioControl, ToggleControl, __experimentalNumberControl as NumberControl }  from "@wordpress/components";
import { withSelect } from '@wordpress/data';
import useGetMedia from './use-get-media';
//import { useMemo } from '@wordpress/element';

/**
 * Internal dependencies
 */
import GalleryImage from './gallery-img';
import icons from "./icons";
import { pickRelevantMediaFiles, pickRelevantMediaFilesUpdate } from './shared';

export const Gallery = ( props ) => {
	const {
		attributes,
		className,
		isSelected,
        imageSizes,
	} = props;

	const {
		images,
		lightSize,
        thumbSize,
        ids,
		displayAs,
		columns,
		columnsMobile,
		columnsTablet,
		columnGap,
		cropImages,
		mobileScroll,
		horizontalAlign,
		containImages,
		imageHeight,
		imageWidth,
		imageLayout,
		linkImages,
		showCaptions,
		overlayCaptions,
		slidesToShow,
		slidesToShowMobile,
		slidesToShowTablet,
		imageAlignment,
		rowSpans,
		colSpans,
		limitView,
		viewLimit,
	} = attributes;

	const [imageSelected, setImageSelected] = useState(null);

	const expandArray = (arr, targetLength, fillValue = null) => {
		return [...Array(targetLength)].map((_, i) => arr[i] !== undefined ? arr[i] : fillValue);
	};


	useEffect( () => {
		if ( images.length > rowSpans.length ) {
			const newSpans = expandArray( rowSpans, images.length, 2 );
			setAttributes( { rowSpans: newSpans } );
		}
		if ( images.length > colSpans.length ) {
			const newSpans = expandArray( colSpans, images.length, 6 );
			setAttributes( { colSpans: newSpans } );
		}
	}, [ images ] );

	/** update row/colspans - setAttributes inside img is special*/
	const setSpans = ( index, value, type ) => {
		if ( type == 'rows' ) {
			const newSpans = [ ...rowSpans ];
			newSpans[ index ] = value;
			setAttributes( { rowSpans: newSpans } );
		} else {
			const newSpans = [ ...colSpans ];
			newSpans[ index ] = value;
			setAttributes( { colSpans: newSpans } );
		}
	}

	const imageData = useGetMedia( ids );


	const isGallery = displayAs == 'gallery';
	const isLogoGrid = displayAs == 'logo-grid';
	const isCarousel = displayAs == 'carousel';
	const isTiled = displayAs == 'tiled';
	const isLightbox = linkImages == 'lightbox';

	const galleryStyle = classnames({
		'ck-blocks-gallery-grid': true,
		'is-layout-grid': isLogoGrid,
		[ `columns-${ columns }` ]: isGallery,
        [ `columns-m-${ columnsMobile }` ]: isGallery,
        [ `columns-t-${ columnsTablet }` ]: isGallery,
		[ `columns-${ slidesToShow }` ]: isCarousel,
        [ `columns-m-${ slidesToShowMobile }` ]: isCarousel,
        [ `columns-t-${ slidesToShowTablet }` ]: isCarousel,
        [ `align${ horizontalAlign }` ]: isGallery,
		'fixed-images': cropImages && !isTiled,
		'contain-images': containImages,
        [ `fixed-images-${ imageLayout }` ]: cropImages && !isTiled,
        'mobile-scroll': mobileScroll,
        [ `image-align-${ imageAlignment }` ]: !cropImages,
        'has-captions': showCaptions && !isLightbox,
		'has-caption-under': (showCaptions && !overlayCaptions),
        'ck-carkeek-slider__slide-wrapper': isCarousel,
       'slider-carousel' : isCarousel,
	   [ `ck-column-gap-${ columnGap }` ]: isGallery || isTiled,
	   'ck-tiled-gallery': isTiled,
	   [ `ck-image-count-${ images.length }` ] : isTiled,
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


    function onSelectImages( newImages ) {
		const oldImages = [ ...images ];
        setAttributes( {
			images: newImages.map( ( image ) => pickRelevantMediaFiles( image, thumbSize, lightSize, oldImages ) ),
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

		setAttributes( { lightSize: newLightSize } );
		const newImages = images.map( ( image ) =>  {
			return pickRelevantMediaFilesUpdate( image, thumbSize, newLightSize, imageData );
		} );
		setAttributes( {
			images: newImages
			}
		)

	}

    function updateThumbsSize( newThumbSize ) {
		setAttributes( { thumbSize: newThumbSize } );
		const newImages = images.map( ( image ) =>  {
			return pickRelevantMediaFilesUpdate( image, newThumbSize, lightSize, imageData );
		} );
		setAttributes( {
			images: newImages
			}
		)
	}




    const imageSizeOptions = getImagesSizeOptions();
	const shouldShowSizeOptions = hasImages && ! isEmpty( imageSizeOptions );

	return (
		<>
            <InspectorControls>
                <PanelBody title="Gallery Image Settings">
					{!isTiled &&
					<ToggleControl
						label="Crop Images"
						help={ "Crop the images in the gallery to a uniform size"}
						checked={ cropImages }
						onChange={ ( cropImages ) => setAttributes( { cropImages } ) }
					/>
			}
					{!cropImages &&
					<>
					<ToggleControl
						label="Contain Images"
						help={ "Contain the images within a uniform size, set height and/or width below."}
						checked={ containImages }
						onChange={ ( containImages ) => setAttributes( { containImages } ) }
					/>
					{ containImages &&
						<>
						<NumberControl
							label="Image Width"
							value={ imageWidth }
							onChange={ ( imageWidth ) => setAttributes( { imageWidth } ) }
							min={ 0 }
							>
						</NumberControl>
						<NumberControl
							label="Image Height"
							value={ imageHeight }
							onChange={ ( imageHeight ) => setAttributes( { imageHeight } ) }
							min={ 0 }
						>
						</NumberControl>
						</>
					}
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
					</>
					}
                    {cropImages && !isTiled && (
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
                        'ck-blocks-gallery-grid-item': true,
                        'ck-blocks-gallery-hidden': (isCarousel && index >= slidesToShow) || limitView && index >= viewLimit,
                    })
					let figureStyle = {};
					if (isTiled) {
						const colSpan = colSpans[ index ];
						figureStyle.gridColumn = `span ${colSpan}`;
					}
					if (isTiled) {
						const rowSpan = rowSpans[index];
						figureStyle.gridRow = `span ${rowSpan}`;
					}

					return (
						<li
							className={itemStyle}
							style={figureStyle}
							key={ img.id || img.url }
						>
							{ <GalleryImage
								//{ ...props }
								key={ img.id || img.url }
								url={ img.url }
								imageIndex={ index }
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
								containImages = { containImages }
								imageHeight = { imageHeight }
								imageWidth = { imageWidth }
								cropImages = { cropImages || isTiled }
								isTiled = { isTiled }
								linkImages = { linkImages }
								customLink={img.customLink}
								linkTarget={img.linkTarget}
								showCaptions = {showCaptions}
								overlayCaptions = {overlayCaptions}
								caption={ img.caption }
								aria-label={ ariaLabel }
								lightSize={ lightSize }
								setSpans={ setSpans }
								colSpans={ colSpans }
								rowSpans={ rowSpans }
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
                    addToGallery={ false } //temp to avoid problem with images disappearing was hasImages
                    multiple
                    gallery
                    value={ ids }
                    render={ ( { open } ) => (
                        <Button className={'ck-custom-appender'} onClick={ open }>
                            { __(' + Add to / Edit Gallery') }
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
	};
} ) (Gallery);
