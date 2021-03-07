/**
 * Internal dependencies
 */
import "./style.editor.css";
import edit from './edit';
import save from './save';
import icons from './blockicon';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from "@wordpress/blocks";

const attributes = {
    "icon": {
        "type": "string",
        "default": ""
    },
    "variation": {
        "type": "string",
        "default": ""
    },
    "href": {
        "type": "string",
        "source": "attribute",
        "selector": "div > div > a",
        "attribute": "href"
    },
    "rel": {
        "type": "string",
        "source": "attribute",
        "selector": "div > div > a",
        "attribute": "rel"
    },
    "linkTarget": {
        "type": "string",
        "source": "attribute",
        "selector": "div > div > a",
        "attribute": "target"
    }
}


registerBlockType("carkeek-blocks/icon", {
	title: __( 'Icon', 'carkeek-blocks' ),
	/* translators: block description */
	description: __( 'Add a stylized graphic symbol.', 'carkeek-blocks' ),
	category: 'design',
	icon: icons.iconBlock,
	keywords: [
		'icon',
		'svg',
        'font',
        'awesome'
	],
    styles: [
		{
			name: 'circled',
			/* translators: block style */
			label: __( 'Circled', 'carkeek-blocks' ),
			isDefault: true,
		},
		{
			name: 'small',
			/* translators: block style */
			label: __( 'Small', 'carkeek-blocks' ),
		},
	],
	attributes,
	edit,
	save
});
