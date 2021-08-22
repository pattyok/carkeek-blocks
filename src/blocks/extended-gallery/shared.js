/**
 * External dependencies
 */
import { get, pick } from 'lodash';

export function defaultColumnsNumber( attributes ) {
	return Math.min( 3, attributes.images.length );
}

export const pickRelevantMediaFiles = ( image, lightSize, thumbSize, oldImages ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	if ( image.id && ! image.sizes && ! image.media_details ) {
		const theImage = wp.data.select( 'core' ).getMedia( image.id );
		if ( theImage && theImage.source_url === image.url ) {
			image = theImage;
		}
	}
	if ( image.id && typeof oldImages === 'object' && oldImages !== null ) {
		for ( let k in oldImages ) {
			if ( parseInt( oldImages[ k ].id ) === image.id ) {
				if ( oldImages[ k ].customLink ) {
					imageProps.customLink = oldImages[ k ].customLink;
				}
				if ( oldImages[ k ].linkTarget ) {
					imageProps.linkTarget = oldImages[ k ].linkTarget;
				}
			}
		}
	}
	imageProps.url = image.url || image.source_url;
	imageProps.thumbUrl = get( image, [ 'sizes', thumbSize, 'url' ] ) || get( image, [ 'media_details', 'sizes', thumbSize, 'source_url' ] ) || image.url || image.source_url;
	imageProps.lightUrl = get( image, [ 'sizes', lightSize, 'url' ] ) || get( image, [ 'media_details', 'sizes', lightSize, 'source_url' ] ) || image.url || image.source_url;
	imageProps.width = get( image, [ 'sizes', thumbSize, 'width' ] ) || get( image, [ 'media_details', 'sizes', thumbSize, 'width' ] ) || get( image, [ 'sizes', 'full', 'width' ] ) || get( image, [ 'media_details', 'width' ] ) || undefined;
	imageProps.height = get( image, [ 'sizes', thumbSize, 'height' ] ) || get( image, [ 'media_details', 'sizes', thumbSize, 'height' ] ) || get( image, [ 'sizes', 'full', 'height' ] ) || get( image, [ 'media_details', 'height' ] ) || undefined;
	return imageProps;
};

export const pickRelevantMediaFilesCore = ( image ) => {
	const imageProps = pick( image, [ 'alt', 'id', 'link', 'caption' ] );
	imageProps.url = get( image, [ 'sizes', 'large', 'url' ] ) || get( image, [ 'media_details', 'sizes', 'large', 'source_url' ] ) || image.url;
	return imageProps;
};

export const pickRelevantMediaFilesUpdate = ( image, lightSize, thumbSize ) => {
	let theImage = wp.data.select( 'core' ).getMedia( image.id );
	if ( ! theImage ) {
		theImage = image;
	}
	const imageProps = pick( theImage, [ 'id', 'link' ] );
	imageProps.alt = get( theImage, [ 'alt_text' ] ) || get( theImage, [ 'alt' ] ) || undefined;
	imageProps.caption = get( theImage, [ 'caption', 'raw' ] ) || get( theImage, [ 'caption' ] ) || undefined;
	imageProps.url = theImage.source_url || image.url;
	imageProps.customLink = image.customLink;
	imageProps.linkTarget = image.linkTarget;
	imageProps.thumbUrl = get( theImage, [ 'sizes', thumbSize, 'url' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'source_url' ] ) || theImage.source_url || image.url;
	imageProps.lightUrl = get( theImage, [ 'sizes', lightSize, 'url' ] ) || get( theImage, [ 'media_details', 'sizes', lightSize, 'source_url' ] ) || theImage.source_url || image.url;
	imageProps.width = get( theImage, [ 'sizes', thumbSize, 'width' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'width' ] ) || get( theImage, [ 'media_details', 'width' ] ) || undefined;
	imageProps.height = get( theImage, [ 'sizes', thumbSize, 'height' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'height' ] ) || get( theImage, [ 'media_details', 'height' ] ) || undefined;
	return imageProps;
};
