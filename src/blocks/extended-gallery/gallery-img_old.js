/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, omit } from 'lodash';

/**
 * WordPress dependencies
 */
 import { useState } from '@wordpress/element';
import { Button, Spinner, ButtonGroup, FocalPointPicker, PanelBody } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { BACKSPACE, DELETE } from '@wordpress/keycodes';
import { withSelect, withDispatch } from '@wordpress/data';
import { RichText, MediaPlaceholder, InspectorControls, URLInputButton } from '@wordpress/block-editor';
import { isBlobURL } from '@wordpress/blob';
import { compose } from '@wordpress/compose';
import icons from './icons';

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
		setAttributes,
		'aria-label': ariaLabel,
	} = props;


	const [isEditing, setIsEditing] = useState( false );

	// onSelectCaption() {
	// 	if ( ! this.state.captionSelected ) {
	// 		this.setState( {
	// 			captionSelected: true,
	// 		} );
	// 	}

	// 	if ( ! this.props.isSelected ) {
	// 		this.props.onSelect();
	// 	}
	// }

	// onSelectImage() {
	// 	if ( ! this.props.isSelected ) {
	// 		this.props.onSelect();
	// 	}

	// 	if ( this.state.captionSelected ) {
	// 		this.setState( {
	// 			captionSelected: false,
	// 		} );
	// 	}
	// }

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

	onEdit() {
		this.setState( {
			isEditing: true,
		} );
	}

	componentDidUpdate( prevProps ) {
		const {
			isSelected,
			image,
			url,
			__unstableMarkNextChangeAsNotPersistent,
		} = this.props;
		if ( image && ! url ) {
			__unstableMarkNextChangeAsNotPersistent();
			this.props.setAttributes( {
				url: image.source_url,
				alt: image.alt_text,
			} );
		}

		// unselect the caption so when the user selects other image and comeback
		// the caption is not immediately selected
		if (
			this.state.captionSelected &&
			! isSelected &&
			prevProps.isSelected
		) {
			this.setState( {
				captionSelected: false,
			} );
		}
	}

	deselectOnBlur() {
		this.props.onDeselect();
	}

	onSelectImageFromLibrary( media ) {
		const { setAttributes, id, url, alt, caption, sizeSlug } = this.props;
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

		setAttributes( mediaAttributes );
		this.setState( {
			isEditing: false,
		} );
	}

	onSetUrl( url ) {
		const { setAttributes } = this.props;
        setAttributes( {
            linksto: url
        } );
	}

    onSetFocalPoint( focalPoint ) {
        const { setAttributes } = this.props;
        setAttributes( {
            focalPointX: focalPoint.x,
            focalPointY: focalPoint.y,
        } );
    }

	render() {

		const { isEditing } = this.state;

        const imageStyle = {
            objectPosition : `${focalPointX *
                100}% ${focalPointY * 100}%`
        }

		const img = (
			// Disable reason: Image itself is not meant to be interactive, but should
			// direct image selection and unfocus caption fields.
			/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
			<>
				<img
					src={ url }
					alt={ alt }
					data-id={ id }
					onClick={ this.onSelectImage }
					onFocus={ this.onSelectImage }
					onKeyDown={ this.onRemoveImage }
					tabIndex="0"
					aria-label={ ariaLabel }
                    ref={ this.bindContainer }
                    style={ imageStyle }
				/>
				{ isBlobURL( url ) && <Spinner /> }
			</>
			/* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
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
                            onChange={this.onSetFocalPoint}
                            value={ {x: focalPointX, y: focalPointY }}
                    />
                </PanelBody>
            )}
            </InspectorControls>

			<figure className={ className }>
				{ ! isEditing && ( img ) }
				{ isEditing && (
					<MediaPlaceholder
						labels={ { title: __( 'Edit gallery image' ) } }
						icon={ icons.imageIcon }
						onSelect={ this.onSelectImageFromLibrary }
						accept="image/*"
						allowedTypes={ [ 'image' ] }
						value={ { id, src: url } }
					/>
				) }

				<ButtonGroup className="block-library-gallery-item__inline-menu carkeek-edit is-left">
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
				</ButtonGroup>

				<ButtonGroup className="block-library-gallery-item__inline-menu carkeek-edit is-right">
					<URLInputButton
						url={ linksto }
						onChange={ this.onSetUrl }
					/>
					<Button
						icon={ icons.edit }
						onClick={ this.onEdit }
						label={ __( 'Replace image' ) }
						disabled={ ! isSelected }
					/>
					<Button
						icon={ icons.closeSmall }
						onClick={ onRemove }
						label={ __( 'Remove image' ) }
						disabled={ ! isSelected }
					/>

				</ButtonGroup>
				{ ! isEditing && ( isSelected || caption ) && (
					<RichText
						tagName="figcaption"
						placeholder={
							isSelected ? __( 'Write caption…' ) : null
						}
						value={ caption }
						isSelected={ this.state.captionSelected }
						onChange={ ( newCaption ) =>
							setAttributes( { caption: newCaption } )
						}
						unstableOnFocus={ this.onSelectCaption }
						inlineToolbar
					/>
				) }
			</figure>
            </>
		);
	}
}

export default compose( [
	withSelect( ( select, ownProps ) => {
		const { getMedia } = select( 'core' );
		const { id } = ownProps;

		return {
			image: id ? getMedia( parseInt( id, 10 ) ) : null,
		};
	} ),
	withDispatch( ( dispatch ) => {
		const { __unstableMarkNextChangeAsNotPersistent } = dispatch(
			'core/block-editor'
		);
		return {
			__unstableMarkNextChangeAsNotPersistent,
		};
	} ),
] )( GalleryImage );
