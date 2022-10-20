import edit from "./edit";
import save from "./save";
import deprecated from "./deprecated";

import { registerBlockType, createBlock } from "@wordpress/blocks";

import { __ } from "@wordpress/i18n";
import metadata from './block.json';
import icon from './icon';
import './style.scss';

registerBlockType(metadata, {

    icon: icon.logoGrid,

    keywords: [
        __("logo", "carkeek-blocks"),
        __("gallery", "carkeek-blocks"),
        __("carousel", "carkeek-blocks"),
    ],

    transforms: {
        from: [
            {
                type: "block",
                blocks: ["core/gallery"],
                transform: (attr) => {
                    return createBlock("carkeek-blocks/extended-gallery", {
                        images: attr.images,
                    });
                }
            }
        ],
        to: [
            {
                type: "block",
                blocks: ["core/gallery"],
                transform: (attr) => {
                    return createBlock("core/gallery", {
                        images: attr.images,
                    });
                }
            }
        ]
    },

    save,

    edit,

    deprecated
});
