import edit from "./edit";
import icons from './icons';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

import metadata from './block.json';

registerBlockType(metadata, {
    icon: icons.layout,
    edit: edit,
    save() {
        return null;
    }
});
