/**
 * External dependencies
 */
import classnames from 'classnames';
import { get, omit, pick } from 'lodash';

/**
 * WordPress dependencies
 */
import { getBlobByURL, isBlobURL, revokeBlobURL } from '@wordpress/blob';
import { withNotices } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	MediaPlaceholder,
	useBlockProps
} from '@wordpress/block-editor';
import { useEffect, useRef } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import Image from './image';
import './editor.scss';


export const pickRelevantMediaFiles = ( image ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url =
		get( image, [ 'sizes', 'large', 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', 'large', 'source_url' ] ) ||
		image.url;
	return imageProps;
};

/**
 * Is the URL a temporary blob URL? A blob URL is one that is used temporarily
 * while the image is being uploaded and will not have an id yet allocated.
 *
 * @param {number=} id The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the URL a Blob URL
 */
const isTemporaryImage = ( id, url ) => ! id && isBlobURL( url );

/**
 * Is the url for the image hosted externally. An externally hosted image has no
 * id and is not a blob url.
 *
 * @param {number=} id  The id of the image.
 * @param {string=} url The url of the image.
 *
 * @return {boolean} Is the url an externally hosted url?
 */
export const isExternalImage = ( id, url ) => url && ! id && ! isBlobURL( url );

export function ImageEdit( {
	attributes,
	setAttributes,
	isSelected,
	className,
	noticeUI,
    insertBlocksAfter,
    onReplace,
	noticeOperations,
} ) {
	const {
		url = '',
		alt,
		caption,
		id,
		width,
		height,
		sizeSlug,
		aspectRatio,
		objectFit
	} = attributes;

	const altRef = useRef();
	useEffect( () => {
		altRef.current = alt;
	}, [ alt ] );

	const captionRef = useRef();
	useEffect( () => {
		captionRef.current = caption;
	}, [ caption ] );

	const ref = useRef();
	const mediaUpload = useSelect( ( select ) => {
		const { getSettings } = select( 'core/block-editor' );
		return getSettings().mediaUpload;
	} );

	function onUploadError( message ) {
		noticeOperations.removeAllNotices();
		noticeOperations.createErrorNotice( message );
	}

	function onSelectImage( media ) {
		if ( ! media || ! media.url ) {
			setAttributes( {
				url: undefined,
				alt: undefined,
				id: undefined,
				title: undefined,
				caption: undefined,
			} );
			return;
		}

		let mediaAttributes = pickRelevantMediaFiles( media );

		// If the current image is temporary but an alt text was meanwhile
		// written by the user, make sure the text is not overwritten.
		if ( isTemporaryImage( id, url ) ) {
			if ( altRef.current ) {
				mediaAttributes = omit( mediaAttributes, [ 'alt' ] );
			}
		}

		// If a caption text was meanwhile written by the user,
		// make sure the text is not overwritten by empty captions.
		if ( captionRef.current && ! get( mediaAttributes, [ 'caption' ] ) ) {
			mediaAttributes = omit( mediaAttributes, [ 'caption' ] );
		}

		let additionalAttributes;
		// Reset the dimension attributes if changing to a different image.
		if ( ! media.id || media.id !== id ) {
			additionalAttributes = {
				width: undefined,
				height: undefined,
				sizeSlug: 'large',
			};
		} else {
			// Keep the same url when selecting the same file, so "Image Size"
			// option is not changed.
			additionalAttributes = { url };
		}
		setAttributes( {
			...mediaAttributes,
			...additionalAttributes,
		} );
	}

	const isTemp = isTemporaryImage( id, url );

	// Upload a temporary image on mount.
	useEffect( () => {
		if ( ! isTemp ) {
			return;
		}

		const file = getBlobByURL( url );

		if ( file ) {
			mediaUpload( {
				filesList: [ file ],
				onFileChange: ( [ img ] ) => {
					onSelectImage( img );
				},
				allowedTypes: [ 'image' ],
				onError: ( message ) => {
					noticeOperations.createErrorNotice( message );
					setAttributes( {
						src: undefined,
						id: undefined,
						url: undefined,
					} );
				},
			} );
		}
	}, [] );

	// If an image is temporary, revoke the Blob url when it is uploaded (and is
	// no longer temporary).
	useEffect( () => {
		if ( ! isTemp ) {
			return;
		}

		return () => {
			revokeBlobURL( url );
		};
	}, [ isTemp ] );

	const isExternal = isExternalImage( id, url );
	const src = isExternal ? url : undefined;
	const mediaPreview = !! url && (
		<img
			alt={ __( 'Edit image' ) }
			title={ __( 'Edit image' ) }
			className={ 'edit-image-preview' }
			src={ url }
		/>
	);

	const classes = classnames( className, {
		'is-transient': isBlobURL( url ),
		'is-placeholder': !url,
		'is-resized': !! width || !! height,
		'is-focused': isSelected,
		[ `size-${ sizeSlug }` ]: sizeSlug,
		[ `fixed-image-${ aspectRatio }` ] : aspectRatio,
		'is-style-contain': objectFit === 'contain',
	} );

	const blockProps = useBlockProps( {
		ref,
		className: classes,
	} );


	return (
		<figure { ...blockProps }>
			{ url && (
				<Image
                attributes={ attributes }
                setAttributes={ setAttributes }
                isSelected={ isSelected }
                insertBlocksAfter={ insertBlocksAfter }
                onReplace={ onReplace }
                onSelectImage={ onSelectImage }
                onUploadError={ onUploadError }
                containerRef={ ref }
				aspectRatio={ aspectRatio }
            />
			) }

			<MediaPlaceholder
				icon="format-image"
				onSelect={ onSelectImage }
				notices={ noticeUI }
				onError={ onUploadError }
				allowedTypes={ [ 'image' ] }
				value={ { id, src } }
				mediaPreview={ mediaPreview }
				disableMediaButtons={ url }
			/>

		</figure>
	);
}

export default withNotices( ImageEdit );


