import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import "./style.scss";
import "./editor.scss";
import edit from "./edit";
import icons from "./icons";

import metadata from './block.json';

registerBlockType( metadata, {
    icon: icons.featuredimage,
    edit: edit,
	transforms: {
		to: [{
			type: 'block',
			blocks: [ 'carkeek-blocks/custom-featured' ],
			transform: ( { attributes } ) => {
				return createBlock( 'carkeek-blocks/custom-featured', {
					attributes,
				} );
			}
		}]
	}
});
