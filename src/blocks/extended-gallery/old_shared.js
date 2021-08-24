/**
 * External dependencies
 */
import { get, pick } from 'lodash';

export function defaultColumnsNumber( attributes ) {
	return Math.min( 3, attributes.images.length );
}

/** set the url for the images as set by the sizeSlugs - if they are missing use fullUrl */
export const pickRelevantMediaFiles = ( image, sizeSlug = 'large', thumbSize = 'medium' ) => {
	console.log("pickRelevantMediaFiles");
	console.log(image);

	const imageProps = pick( image, [ 'alt', 'id', 'caption', 'sizes' ] );
	imageProps.url =
		get( image, [ 'sizes', sizeSlug, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', sizeSlug, 'source_url' ] ) ||
		image.url;
	const fullUrl =
		get( image, [ 'sizes', 'full', 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', 'full', 'source_url' ] );
	if ( fullUrl ) {
		imageProps.fullUrl = fullUrl;
	}
	return imageProps;
};