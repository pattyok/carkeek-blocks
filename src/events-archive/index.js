import "./style.scss";
import "./editor.scss";
import edit from "./edit";
import icons from './icons';
import metadata from './block.json';

import { registerBlockType } from "@wordpress/blocks";
import { __ } from "@wordpress/i18n";

registerBlockType(metadata, {
    icon: icons.calendar,
    edit: edit,
    save() {
        return null;
    }
});
