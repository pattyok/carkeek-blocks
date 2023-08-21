/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';

 import { InnerBlocks } from '@wordpress/block-editor';

 /**
  * Internal dependencies
  */
 //import icon from './icon';
 import Edit from './edit';
 import metadata from './block.json';
 import icons from './icons';

 import './style.scss';

 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
  */
 registerBlockType( metadata, {

	icon: icons.video,
	edit: Edit,
	save: () => { return (  <InnerBlocks.Content /> ); },

 } );
