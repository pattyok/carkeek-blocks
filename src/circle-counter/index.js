/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
 import { registerBlockType } from '@wordpress/blocks';



 /**
  * Internal dependencies
  */
 //import icon from './icon';
 import Edit from './edit';
 import save from './save';
 import metadata from './block.json';

 /**
  * Every block starts by registering a new block type definition.
  *
  * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
  */
 registerBlockType( metadata, {


	 edit: Edit,
	 save: save
 } );
