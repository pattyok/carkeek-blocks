/**
 * External dependencies
 */
import { get, pick } from 'lodash';

export function defaultColumnsNumber( attributes ) {
	return Math.min( 3, attributes.images.length );
}

export const pickRelevantMediaFiles = ( image, sizeSlug = 'x-large', sizeSlugThumbs =  'medium' ) => {
	const imageProps = pick( image, [ 'alt', 'id' , 'caption'] );
	imageProps.id = parseInt(imageProps.id, 10);
	imageProps.url =
		get( image, [ 'sizes', sizeSlug, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', sizeSlug, 'source_url' ] ) ||
		image.url;
		imageProps.thumbUrl =
		get( image, [ 'sizes', sizeSlugThumbs, 'url' ] ) ||
		get( image, [ 'media_details', 'sizes', sizeSlugThumbs, 'source_url' ] ) ||
		image.url;
	return imageProps;
};