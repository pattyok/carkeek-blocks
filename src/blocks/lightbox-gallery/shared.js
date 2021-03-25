/**
 * External dependencies
 */
import { get, pick } from 'lodash';

export function defaultColumnsNumber( attributes ) {
	return Math.min( 3, attributes.images.length );
}

export const pickRelevantMediaFiles = ( image, sizeSlug = 'x-large' ) => {
	const imageProps = pick( image, [ 'alt', 'id' , 'caption'] );
	imageProps.id = parseInt(imageProps.id, 10);
	imageProps.url =
		get( image, [ 'sizes', sizeSlug, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', sizeSlug, 'source_url' ] ) ||
		image.url;
	const thumbUrl =
		get( image, [ 'sizes', 'medium', 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', 'medium', 'source_url' ] ) ||
		image.url;
	if ( thumbUrl ) {
		imageProps.thumbUrl = thumbUrl;
	}
	return imageProps;
};