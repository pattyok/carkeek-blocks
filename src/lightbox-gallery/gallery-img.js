/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, omit, filter } from 'lodash';

/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { Button, Spinner, FocalPointPicker, PanelBody } from '@wordpress/components';
import {
    __experimentalToggleGroupControl as ToggleGroupControl,
    __experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { RichText, MediaPlaceholder, InspectorControls, URLInputButton } from '@wordpress/block-editor';
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
		alt,
		id,
		linksto,
		focalPointX,
		focalPointY,
		isFirstItem,
		isLastItem,
		isSelected,
		caption,
		onRemove,
		onMoveForward,
		onMoveBackward,
		onSelect,
		setAttributes,
		'aria-label': ariaLabel,
		onDeselect,
		inlineEdit,
		sizeSlug
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

		let mediaAttributes = pickRelevantMediaFiles( media, sizeSlug );

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

	function onSetUrl( url ) {
        setAttributes( {
            linksto: url
        } );
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

	const img = (
		// Disable reason: Image itself is not meant to be interactive, but should
		// direct image selection and unfocus caption fields.
		<>
			<img
				src={ url }
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


	return (
		<>

			<InspectorControls>
			{ isSelected && (
				<PanelBody title={__("Image Settings", "carkeek-blocks")}>
					<FocalPointPicker
							label={__("Focal Point", "carkeek-blocks")}
							url={url}
							onChange={onSetFocalPoint}
							value={ {x: focalPointX, y: focalPointY }}
					/>
				</PanelBody>
			)}
			</InspectorControls>

			<figure className={ className }
			onClick={ onSelect}
			onFocus={ onSelect }
			>
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
					disabled={ ! isSelected }
				/>
				<Button
					icon={ icons.chevronRight }
					onClick={ isLastItem ? undefined : onMoveForward }
					label={ __( 'Move image forward' ) }
					aria-disabled={ isLastItem }
					disabled={ ! isSelected }
				/>
			</ToggleGroupControl>
			{inlineEdit &&
			<ToggleGroupControl className="carkeek-edit__inline-menu carkeek-edit is-right">


				<URLInputButton
					url={ linksto }
					onChange={ onSetUrl }
				/>
				<Button
					icon={ icons.edit }
					onClick={() => setIsEditing( true ) }
					label={ __( 'Replace image' ) }
					disabled={ ! isSelected }
				/>

				<Button
					icon={ icons.closeSmall }
					onClick={ onRemove }
					label={ __( 'Remove image' ) }
					disabled={ ! isSelected }
				/>

			</ToggleGroupControl>
			}
			{ ! isEditing && ( isSelected || caption ) && (
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


