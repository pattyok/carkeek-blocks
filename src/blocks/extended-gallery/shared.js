/**
 * External dependencies
 */
import { get, pick, find, each, update, parseInt } from 'lodash';

export function defaultColumnsNumber( attributes ) {
	return Math.min( 3, attributes.images.length );
}

export const pickRelevantMediaFiles = ( image, thumbSize, lightSize, oldImages ) => {
	const imageProps = pick( image, [ 'alt', 'id' ] );
	each(oldImages, obj => update(obj, 'id', parseInt));

	const oldImage = find(oldImages, {id: parseInt(image.id)});
	//if we have an old image without a caption they may have deleted id;
	if (oldImage) {
		imageProps.caption = get( oldImage, [ 'caption' ] );
	} else {
		imageProps.caption = get( image, [ 'caption', 'raw' ] ) || get( image, [ 'caption' ] ) || undefined;
	}

	imageProps.customLink = get( oldImage, [ 'customLink' ] ) || undefined;
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


export const pickRelevantMediaFilesUpdate = ( image, thumbSize, lightSize, imageData ) => {
	let theImage = find(imageData, {id: parseInt(image.id)})
	if ( ! theImage ) {
		theImage = image;
	}
	const imageProps = pick( theImage, [ 'id', 'link' ] );
	imageProps.alt = get( theImage, [ 'alt_text' ] ) || get( theImage, [ 'alt' ] ) || undefined;
	imageProps.caption = image.caption || get( theImage, [ 'caption', 'raw' ] ) || get( theImage, [ 'caption' ] ) || undefined;
	imageProps.url = theImage.source_url || image.url;
	imageProps.customLink = image.customLink;
	imageProps.linkTarget = image.linkTarget;
	imageProps.thumbUrl = get( theImage, [ 'sizes', thumbSize, 'url' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'source_url' ] ) || theImage.source_url || image.url;
	imageProps.lightUrl = get( theImage, [ 'sizes', lightSize, 'url' ] ) || get( theImage, [ 'media_details', 'sizes', lightSize, 'source_url' ] ) || theImage.source_url || image.url;
	imageProps.width = get( theImage, [ 'sizes', thumbSize, 'width' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'width' ] ) || get( theImage, [ 'media_details', 'width' ] ) || undefined;
	imageProps.height = get( theImage, [ 'sizes', thumbSize, 'height' ] ) || get( theImage, [ 'media_details', 'sizes', thumbSize, 'height' ] ) || get( theImage, [ 'media_details', 'height' ] ) || undefined;
	return imageProps;
}
