/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, omit, filter } from 'lodash';

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';
import { Button, Spinner, FocalPointPicker, PanelBody, ToggleControl, Dropdown, RangeControl } from '@wordpress/components';
import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichText, MediaPlaceholder, InspectorControls, URLInput } from '@wordpress/block-editor';
import { isBlobURL } from '@wordpress/blob';
import icons from "./icons";


/**
 * Internal dependencies
 */
import { pickRelevantMediaFiles } from './shared';

const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

export const GalleryImage = ( props ) => {
	const {
		url,
		thumbUrl,
		alt,
		id,
		customLink,
		focalPointX,
		focalPointY,
		linkTarget,
		isFirstItem,
		isLastItem,
		isSelected,
		caption,
		onRemove,
		onMoveForward,
		onMoveBackward,
		onSelect,
		setAttributes,
		showCaptions,
		overlayCaptions,
		cropImages,
		isTiled,
		containImages,
		imageHeight,
		imageWidth,
		'aria-label': ariaLabel,
		onDeselect,
		inlineEdit,
		lightSize,
		thumbSize,
		linkImages,
		imageIndex,
		colSpans,
		rowSpans,
		setSpans
	} = props;

	const [isEditing, setIsEditing] = useState( false );

	function onRemoveImage( index ) {
        return () => {
            const images = filter(
                images,
                ( img, i ) => index !== i
            );

            setAttributes( {
                images
            } );
			onDeselect();
        };
    }

	function onSelectImageFromLibrary( media ) {
		//const { setAttributes, id, url, alt, caption, sizeSlug } = props;
		if ( ! media || ! media.url ) {
			return;
		}

		let mediaAttributes = pickRelevantMediaFiles( media, lightSize, thumbSize );

		// If the current image is temporary but an alt text was meanwhile
		// written by the user, make sure the text is not overwritten.
		if ( isTemporaryImage( id, url ) ) {
			if ( alt ) {
				mediaAttributes = omit( mediaAttributes, [ 'alt' ] );
			}
		}

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( caption && ! get( mediaAttributes, [ 'caption' ] ) ) {
			mediaAttributes = omit( mediaAttributes, [ 'caption' ] );
		}
		setAttributes( {
			mediaAttributes,
		} );

		setIsEditing( false );
	}

    function onSetFocalPoint( focalPoint ) {
        setAttributes( {
            focalPointX: focalPoint.x,
            focalPointY: focalPoint.y,
        } );
    }

	const imageStyle = {
		objectPosition : `${focalPointX *
			100}% ${focalPointY * 100}%`
	}

	if (containImages) {
		imageStyle.objectFit = 'contain';
		imageStyle.height = imageHeight + 'px';
		imageStyle.width = imageWidth + 'px';
	}
	if (showCaptions && !overlayCaptions && isTiled) {
		imageStyle.aspectRatio = colSpans[ imageIndex ] + '/' + rowSpans[ imageIndex ];
	}


	const img = (
		// Disable reason: Image itself is not meant to be interactive, but should
		// direct image selection and unfocus caption fields.
		<>
			<img
				src={ thumbUrl || url }
				alt={ alt }
				data-id={ id }

				onKeyDown={ onRemoveImage }
				tabIndex="0"
				aria-label={ ariaLabel }
				//ref={ bindContainer }
				style={ imageStyle }
			/>
			{ isBlobURL( url ) && <Spinner /> }
		</>
	);

	const className = classnames( {
		'is-selected': isSelected,
		'is-transient': isBlobURL( url ),
	} );

	/** We save as an array so that we can set up templates with default values, not dependent on the image selected
	 * Also so that if you change the order of images, the ratios are preserved.
	 */
	const [spanCols, setSpanCols] = useState( colSpans[ imageIndex ] );
	const [spanRows, setSpanRows] = useState( rowSpans[ imageIndex ] );

	function updateSpanCols ( value, index ) {
		setSpans( index, value, 'cols' );
		setSpanCols( value );
	}

	function updateSpanRows ( value, index ) {
		setSpans( index, value, 'rows' );
		setSpanRows( value );
	}

	useEffect( () => {
		setSpanCols( colSpans[ imageIndex ] );
		setSpanRows( rowSpans[ imageIndex ] );
	}
	, [colSpans, rowSpans] );


	return (
		<>

			<InspectorControls>
			{ isSelected && (cropImages) && (
				<PanelBody title={__("Image Settings", "carkeek-blocks")}>
					<FocalPointPicker
							label={__("Focal Point", "carkeek-blocks")}
							url={url}
							onChange={onSetFocalPoint}
							value={ {x: focalPointX, y: focalPointY }}
					/>
					{isTiled && (
						<>
					<RangeControl
						label="Row Span (out of 12)"
						value={ spanRows }
						onChange={ ( spanRows ) => updateSpanRows( spanRows, imageIndex ) }
						min={ 1 }
						max={ 12 }
						step={ 1 }
					/>
					<RangeControl
						label="Columns Span (out of 12)"
						value={ spanCols }
						onChange={ ( spanCols ) => updateSpanCols( spanCols, imageIndex ) }
						min={ 1 }
						max={ 12 }
						step={ 1 }
					/>
					</>
					)}
				</PanelBody>
			)}
			</InspectorControls>

			<figure className={ className }
			onClick={ onSelect }
			onFocus={ onSelect }>
				{ ! isEditing && ( img ) }
				{ isEditing && (
					<MediaPlaceholder
						labels={ { title: __( 'Edit gallery image' ) } }
						icon={ icons.imageIcon }
						onSelect={ onSelectImageFromLibrary }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						value={ { id, src: url } }
					/>
				) }

			<ToggleGroupControl className="carkeek-edit__inline-menu carkeek-edit is-left">
				<Button
					icon={ icons.chevronLeft }
					onClick={ isFirstItem ? undefined : onMoveBackward }
					label={ __( 'Move image backward' ) }
					aria-disabled={ isFirstItem }
				/>
				<Button
					icon={ icons.chevronRight }
					onClick={ isLastItem ? undefined : onMoveForward }
					label={ __( 'Move image forward' ) }
					aria-disabled={ isLastItem }
				/>
				{linkImages == 'custom' && (
				<Dropdown
					popoverProps={{placement: 'bottom-end'}}
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							icon={ icons.link }
							variant="primary"
							onClick={ onToggle }
							aria-expanded={ isOpen }
							className={ customLink ? 'is-active' : undefined }
						>
						</Button>
					) }
					renderContent={ () => <div className="url-input-dropdown"><URLInput
						value={customLink}
						className="editor-media-placeholder__url-input-field block-editor-media-placeholder__url-input-field"
						onChange={ ( customLink ) => setAttributes( { customLink } ) }
					/>

					<ToggleControl
						label={ __( 'Open in New Tab', 'carkeek-blocks' ) }
						checked={ linkTarget === '_blank' }
						onChange={ ( target ) => setAttributes( { linkTarget: ( target ? '_blank' : '' ) } ) }
					/></div> }

				/>
				)}
			</ToggleGroupControl>
			{inlineEdit &&
			<>

			<ToggleGroupControl className="carkeek-edit__inline-menu carkeek-edit is-right">

				<Button
					icon={ icons.closeSmall }
					onClick={ onRemove }
					label={ __( 'Remove image' ) }
				/>

			</ToggleGroupControl>
			</>
			}
			{ !isEditing && (( showCaptions ) || ( isSelected && linkImages == 'lightbox')) && (

				<RichText
					tagName="figcaption"
					placeholder={
						isSelected ? __( 'Write caption…' ) : null
					}
					value={ caption }
					//isSelected={ isSelected }
					onChange={ ( newCaption ) =>
						setAttributes( { caption: newCaption } )
					}
					//unstableOnFocus={ onSelectCaption }
					inlineToolbar
				/>
			) }
			</figure>

		</>
	);
}

export default GalleryImage;


