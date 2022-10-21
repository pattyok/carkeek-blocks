import edit from "./edit";
import save from "./save";
import deprecated from './deprecated';

import { registerBlockType, createBlock } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";
import metadata from './block.json';
import icons from './icon.js';
import './style.scss';

registerBlockType(metadata, {
	icon: icons.featuredimage,
    transforms: {
        from: [
            {
                type: "block",
                blocks: ["core/image"],
                transform: (attr) => {
                    return createBlock("carkeek-blocks/fixed-image", {
                        id: attr.id,
                        url: attr.url
                    });
                }
            }
        ],
        to: [
            {
                type: "block",
                blocks: ["core/image"],
                transform: (attr) => {
                    return createBlock("core/image", {
                        id: attr.id,
                        url: attr.url
                    });
                }
            }
        ]
    },

    deprecated,
    save,
    edit
});
