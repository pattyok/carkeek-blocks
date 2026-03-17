import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';
import metadata from './block.json';
import icons from './icon';

registerBlockType( metadata, {
	icon: icons.imageCompare,
	edit: Edit,
	save,
} );
