/**
 * External dependencies
 */
import { last, pick, map, filter, get } from 'lodash';

/**
 * WordPress dependencies
 */
import { isBlobURL } from '@wordpress/blob';
import {
	ExternalLink,
	PanelBody,
	Spinner,
	TextareaControl,
	TextControl,
	ToolbarGroup,
    FocalPointPicker,
	SelectControl,
	ToggleControl
} from '@wordpress/components';
import { usePrevious } from '@wordpress/compose';
import { useSelect } from '@wordpress/data';
import {
	BlockControls,
	InspectorControls,
	InspectorAdvancedControls,
	RichText,
	__experimentalImageURLInputUI,
	MediaReplaceFlow,
} from '@wordpress/block-editor';
import { useEffect, useState, useRef } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { getPath } from '@wordpress/url';
import {
	createBlock,
} from '@wordpress/blocks';


/**
 * Internal dependencies
 */


function getFilename( url ) {
	const path = getPath( url );
	if ( path ) {
		return last( path.split( '/' ) );
	}
}

export default function Image( {
	attributes: {
		url = '',
		alt,
		caption,
		id,
		href,
		rel,
		linkStyle,
		linkDestination,
		title,
		linkTarget,
        focalPoint,
		sizeSlug,
		useCaption,
		useLink,
		photoCredit
	},
	setAttributes,
	isSelected,
	insertBlocksAfter,
	onSelectImage,
	onUploadError,
} ) {
	const captionRef = useRef();
	const prevUrl = usePrevious( url );
	const { image, multiImageSelection } = useSelect(
		( select ) => {
			const { getMedia } = select( 'core' );
			const {
				getMultiSelectedBlockClientIds,
				getBlockName,
				getSelectedBlock,
				getSelectedBlockClientId,
			} = select( 'core/block-editor' );

			const multiSelectedClientIds = getMultiSelectedBlockClientIds();
			return {
				block: getSelectedBlock(),
				currentId: getSelectedBlockClientId(),
				image: id && isSelected ? getMedia( id ) : null,
				multiImageSelection:
					multiSelectedClientIds.length &&
					multiSelectedClientIds.every(
						( clientId ) =>
							getBlockName( clientId ) === 'carkeek-blocks/fixed-image'
					),
			};
		},
		[ id, isSelected ]
	);
	const { imageSizes } = useSelect(
		( select ) => {
			const { getSettings } = select( 'core/block-editor' );
			return pick( getSettings(), [
				'imageSizes',
				'maxWidth',
				'mediaUpload',
			] );
		}
	);

	const [ captionFocused, setCaptionFocused ] = useState( false );
	const [ isEditingImage, setIsEditingImage ] = useState( false );
	const imageSizeOptions = map(
		filter( imageSizes, ( { slug } ) =>
			get( image, [ 'media_details', 'sizes', slug, 'source_url' ] )
		),
		( { name, slug } ) => ( { value: slug, label: name } )
	);

	useEffect( () => {
		if ( ! isSelected ) {
			setCaptionFocused( false );
		}
	}, [ isSelected ] );


	// Focus the caption after inserting an image from the placeholder. This is
	// done to preserve the behaviour of focussing the first tabbable element
	// when a block is mounted. Previously, the image block would remount when
	// the placeholder is removed. Maybe this behaviour could be removed.
	useEffect( () => {
		if ( url && ! prevUrl && isSelected && useCaption ) {
			captionRef.current.focus();
		}
	}, [ url, prevUrl ] );


	function onSetHref( props ) {
		setAttributes( props );
	}

	function onSetTitle( value ) {
		// This is the HTML title attribute, separate from the media object
		// title.
		setAttributes( { title: value } );
	}

	function onFocusCaption() {
		if ( ! captionFocused ) {
			setCaptionFocused( true );
		}
	}

	function onImageClick() {
		if ( captionFocused ) {
			setCaptionFocused( false );
		}
	}

	function updateAlt( newAlt ) {
		setAttributes( { alt: newAlt } );
	}


	useEffect( () => {
		if ( ! isSelected ) {
			setIsEditingImage( false );
		}
	}, [ isSelected ] );

	function updateImage( newSizeSlug ) {
		const newUrl = get( image, [
			'media_details',
			'sizes',
			newSizeSlug,
			'source_url',
		] );
		if ( ! newUrl ) {
			return null;
		}

		setAttributes( {
			url: newUrl,
			width: undefined,
			height: undefined,
			sizeSlug: newSizeSlug,
		} );
	}


	const controls = (
		<>
			<BlockControls>
			{ useLink && ! multiImageSelection && ! isEditingImage && (
				<ToolbarGroup>
						<__experimentalImageURLInputUI
							url={ href || '' }
							onChangeUrl={ onSetHref }
							linkDestination={ linkDestination }
							mediaUrl={ ( image && image.source_url ) || url }
							mediaLink={ image && image.link }
							linkTarget={ linkTarget }
							linkClass={ linkStyle }
							rel={ rel }
						/>
						</ToolbarGroup>
					) }
				{ ! multiImageSelection && ! isEditingImage && (
					<MediaReplaceFlow
						mediaId={ id }
						mediaURL={ url }
						allowedTypes={ [ 'image' ] }
						accept="image/*"
						onSelect={ onSelectImage }
						onError={ onUploadError }
					/>
				) }
			</BlockControls>
			<InspectorControls>
				<PanelBody title={ __( 'Image settings' ) }>
					{ ! multiImageSelection && (
                        <>
						<TextareaControl
							label={ __( 'Alt text (alternative text)' ) }
							value={ alt }
							onChange={ updateAlt }
							help={
								<>
									<ExternalLink href="https://www.w3.org/WAI/tutorials/images/decision-tree">
										{ __(
											'Describe the purpose of the image'
										) }
									</ExternalLink>
									{ __(
										'Leave empty if the image is purely decorative.'
									) }
								</>
							}
						/>
						<TextControl
							label={ __( 'Photo Credit' ) }
							value={ photoCredit || '' }
							onChange={ value =>
                                setAttributes({
                                    photoCredit: value
                                }) }
							help={
								<>
									{ __(
										'Optionally add a photo credit. This may display differently depending on the context of the image.'
									) }
								</>
							}
						/>
						<SelectControl
							label={__("Image Size", "carkeek-blocks")}
							options={ imageSizeOptions }
							onChange={ updateImage }
							value={sizeSlug}
						/>

                        <FocalPointPicker
                            label={__("Focal Point", "carkeek-blocks")}
                            url={url}
                            onChange={newFocalPoint =>
                                setAttributes({
                                    focalPoint: newFocalPoint
                                })
                            }
                            value={focalPoint}
                        />
                        </>
                    )}
				</PanelBody>
			</InspectorControls>
			<InspectorAdvancedControls>
				<ToggleControl
                        label={__("Include Caption")}
                        checked={ useCaption }
                        onChange={value =>
                            setAttributes({ useCaption: value })
                        }
                    />
				<ToggleControl
                        label={__("Include Image Link")}
                        checked={ useLink }
                        onChange={value =>
                            setAttributes({ useLink: value })
                        }
                    />
				<TextControl
					label={ __( 'Title attribute' ) }
					value={ title || '' }
					onChange={ onSetTitle }
					help={
						<>
							{ __(
								'Describe the role of this image on the page.'
							) }
							<ExternalLink href="https://www.w3.org/TR/html52/dom.html#the-title-attribute">
								{ __(
									'(Note: many devices and browsers do not display this text.)'
								) }
							</ExternalLink>
						</>
					}
				/>
			</InspectorAdvancedControls>
		</>
	);

	const filename = getFilename( url );
	let defaultedAlt;

	if ( alt ) {
		defaultedAlt = alt;
	} else if ( filename ) {
		defaultedAlt = sprintf(
			/* translators: %s: file name */
			__( 'This image has an empty alt attribute; its file name is %s' ),
			filename
		);
	} else {
		defaultedAlt = __( 'This image has an empty alt attribute' );
	}

	let imageStyle = {};
	if (focalPoint) {
		imageStyle.objectPosition = `${focalPoint.x *
			100}% ${focalPoint.y * 100}%`;
	}

	let img = (
		<>
			<img
				src={ url }
				alt={ defaultedAlt }
				onClick={ onImageClick }
				className="ck-fixed-image"
				style = { imageStyle }
			/>
			{ isBlobURL( url ) && <Spinner /> }
		</>
	);

	const credit = (
		<div className="ck-fixed-image-credit">{ photoCredit }</div>
	)

	return (
		<>
			{ controls }
			<div className="ck-fixed-image-wrap">
			{ credit }
			{ img }

			</div>
			{ useCaption && ( ! RichText.isEmpty( caption ) || isSelected ) && (
				<RichText
					ref={ captionRef }
					tagName="figcaption"
					aria-label={ __( 'Image caption text' ) }
					placeholder={ __( 'Write caption…' ) }
					value={ caption }
					unstableOnFocus={ onFocusCaption }
					onChange={ ( value ) =>
						setAttributes( { caption: value } )
					}
					isSelected={ captionFocused }
					inlineToolbar
					__unstableOnSplitAtEnd={ () =>
						insertBlocksAfter( createBlock( 'core/paragraph' ) )
					}
				/>
			) }
        </>
    )
}
